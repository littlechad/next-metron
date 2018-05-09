import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'
import JssProvider from 'react-jss/lib/JssProvider'
import { getServerToken, getToken } from 'lib/auth'

import getPageContext from 'hoc/mui/getPageContext'
import styles from 'static/styles'

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args)
    const pageContext = getPageContext()
    const token = args[0].req ? getServerToken(args[0].req) : getToken()
    const page = args[0].renderPage(Component => props => (
      <JssProvider
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}
      >
        <Component pageContext={pageContext} {...props} />
      </JssProvider>
    ))
    return {
      ...documentProps,
      ...page,
      pageContext,
      styles: (
        /* eslint-disable react/no-danger */
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        /* eslint-enable react/no-danger */
      ),
      token,
      helmet: Helmet.renderStatic(),
    }
  }

  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx() {
    const { pageContext } = this.props
    return (
      <Helmet
        title={`${process.env.COMPANY_NAME} | Welcome!`}
        meta={[
          { name: 'viewport', content: 'user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height' },
          { name: 'theme-color', content: pageContext.theme.palette.primary[500] },
          { property: 'og:title', content: `${process.env.COMPANY_NAME} | Welcome!` },
          { property: 'fb:app_id', content: process.env.FACEBOOK_CLIENT_ID },
        ]}
      />)
  }

  render() {
    return (
      <html {...this.helmetHtmlAttrComponents} lang="en">
        <Head>
          { this.helmetJsx }
          { this.helmetHeadComponents }
          {styles.map((href, key) => (<link key={key.toString()} href={href} rel="stylesheet" type="text/css" />))}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

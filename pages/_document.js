import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'
import JssProvider from 'react-jss/lib/JssProvider'

import getPageContext from 'utils/mui/getPageContext'

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args)
    const pageContext = getPageContext()
    const page = args[0].renderPage(Component => props => (
      <JssProvider
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}
      >
        <Component pageContext={pageContext} {...props} />
      </JssProvider>
    ))

    /* eslint-disable react/no-danger */
    return {
      ...documentProps,
      ...page,
      pageContext,
      styles: (
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
      ),
      helmet: Helmet.renderStatic(),
    }
    /* eslint-enable react/no-danger */
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

  render() {
    const { pageContext } = this.props
    return (
      <html {...this.helmetHtmlAttrComponents} lang="en">
        <Head>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            title="Hello next.js!"
            meta={[
              { name: 'viewport', content: 'user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height' },
              { name: 'theme-color', content: pageContext.theme.palette.primary[500] },
              { property: 'og:title', content: 'Hello next.js!' },
            ]}
          />
          { this.helmetHeadComponents }
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

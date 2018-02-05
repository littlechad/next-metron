import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() }
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
    return (
      <html {...this.helmetHtmlAttrComponents} lang="en">
        <Head>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            title="Hello next.js!"
            meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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

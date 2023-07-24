import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />

          <meta name="application-name" content="F168" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="F168" />
          <meta name="description" content="Fasting app for smart people" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icon-192x192.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icon-192x192.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/icon-192x192.png" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://localhost:3000" />
          <meta name="twitter:title" content="PWA App" />
          <meta
            name="twitter:description"
            content="Fasting app for smart people"
          />
          <meta
            name="twitter:image"
            content="http://localhost:3000/icon-192x192.png"
          />
          <meta name="twitter:creator" content="@slepzs" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PWA App" />
          <meta
            property="og:description"
            content="Boilerplate next pwa by hellotoms"
          />
          <meta property="og:site_name" content="PWA App" />
          <meta property="og:url" content="https://localhost:3000" />
          <meta
            property="og:image"
            content="http://localhost:3000/icon-192x192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

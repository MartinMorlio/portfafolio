// Se utiliza para alterar el DOM.
// Vendría a ser como el index.html del React.

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Mi Portafolio</title>
          <meta name="descripption" content="Portafolio de Martín Morlio" />
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

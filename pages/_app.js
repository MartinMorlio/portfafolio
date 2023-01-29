// Importamos css de toda la app o funcionalidad relacionada con la pag.
// Es como una parte por fuera del body, configuración de la app.
import 'bootswatch/dist/lux/bootstrap.min.css';
import '../global.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
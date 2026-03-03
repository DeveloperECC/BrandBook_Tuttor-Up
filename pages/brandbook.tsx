// página que muestra el manual de marca completo
// El contenido se mantiene en un archivo HTML estático (`public/BrandBook-original.html`)
// para preservar el formato original sin tener que traducirlo a React.
// Se carga dentro de un <iframe> de ancho completo; los estilos del
// iframe están aislados y no interfieren con el resto de la aplicación.

import Head from 'next/head';
import Navbar from '../componentes/Navbar';

export default function BrandBook() {
  return (
    <>
      <Head>
        <title>Tuttor-Up | Manual de Marca</title>
        <meta name="description" content="Manual de Marca de Tuttor-Up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar común, igual en todas las páginas */}
      <Navbar />
      {/* el <main> contiene sólo el iframe. el archivo HTML estático es
          el que contiene todo el markup/estilos del manual; lo dejamos
          intacto porque ya tiene un diseño complejo y es más rápido mantenerlo
          que reescribirlo en React. */}
      <main className="brandbook-main">
        {/* el `height:calc(100vh - var(--nav-height))` podría usarse si el
            sidebar o algún otro elemento fija una altura; por ahora la
            navegación lateral no afecta verticalmente, pero ajustamos un
            pequeño margen para evitar que el contenido quede cortado en
            móviles con barra de estado. */}
        <iframe
          src="/BrandBook-original.html"
          style={{
            width: '100%',
            height: '100vh',
            border: 'none',
            display: 'block',
          }}
          title="Manual de Marca Tuttor-Up"
        />
      </main>
    </>
  );
}

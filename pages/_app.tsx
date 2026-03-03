import '../estilos/globals.css';
import type { AppProps } from 'next/app';

//  este archivo solo necesita aplicar
// los estilos globales y renderizar la página de Next.
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

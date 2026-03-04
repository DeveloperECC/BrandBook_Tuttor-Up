import Head from 'next/head';
import Navbar from '../componentes/Navbar';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Tuttor-Up | Entrar</title>
        <meta name="description" content="Inicia sesión en Tuttor-Up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <div className="section-wrapper">
        <button className="details-btn" onClick={() => router.back()}>
          ← Regresar
        </button>
        <div style={{ marginTop: '2rem' }}>
          <h1 className="sec-title">Entrar</h1>
          <p className="hero-text">
            Esta es la página de login de prueba. Implementa tu formulario aquí.
          </p>
        </div>
      </div>
    </>
  );
}

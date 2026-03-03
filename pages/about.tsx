// Página de ejemplo adicional para mostrar cómo añadir nuevas rutas.
import Navbar from '../componentes/Navbar';
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="section-wrapper">
        <button className="details-btn" onClick={() => router.back()}>
          ← Regresar
        </button>
        <h2 className="sec-title">Sobre nosotros</h2>
        <p className="hero-text">
          Esta es una página de ejemplo para demostrar el enrutamiento.
        </p>
      </div>
    </>
  );
}

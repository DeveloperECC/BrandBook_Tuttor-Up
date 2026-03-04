// página principal (/) del sitio
// Este componente es simple: incluye el Navbar común y un "hero" con
// un título, texto y botones. La imagen del búho se coloca mediante
// un div absoluto que no interfiere en el flujo.

import Head from 'next/head';
import Navbar from '../componentes/Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Tuttor-Up | Inicio</title>
        <meta name="description" content="Tuttor-Up: Educación personalizada a un clic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* el "Navbar" es el mismo componente que aparece en todas
          las páginas; no tiene nada específico de la home.
          debajo viene el área principal del hero */}
      <Navbar />
      <main className="home-hero">
        {/* imagen del búho en la esquina derecha del hero, posicionada
            a través de CSS. sólo se carga visualmente, no existe
            lógica asociada. */}
        <div className="hero-owl-background">
          <img
            src={`${router.basePath}/images/Buho.png`}
            alt="Búho Tuttor-Up"
            className="hero-owl-img-home"
          />
        </div>

        <section className="hero-content">
          <h1>Tuttor-Up</h1>
          <p className="hero-subtitle">Educación personalizada a un clic de distancia</p>
          <p className="hero-description">
            Conectamos estudiantes universitarios con docentes capacitados en cálculo, física y química.
            Tutorías personalizadas que transforman el aprendizaje.
          </p>
          <div className="hero-buttons">
            <Link href="/brandbook" className="btn btn-primary">
              Manual de Marca
            </Link>
            <Link href="/about" className="btn btn-outline">
              Acerca de nosotros
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

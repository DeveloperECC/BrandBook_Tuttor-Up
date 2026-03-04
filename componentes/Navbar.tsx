// COMPONENTE DE NAVEGACIÓN (Navbar)
// ------------------------------------------------------------
// Este componente genera la barra lateral/fija que ves siempre a la
// izquierda de la aplicación. Está escrito en React y utiliza el
// router nativo de Next para que los enlaces funcionen sin recarga.
// Todo el CSS está en `globals.css`; aquí solo nos ocupamos de la
// lógica de apertura/colapso y de mantener el elemento activo.

import Link from 'next/link';
// no usamos `next/image` porque la img se sirve desde /public y no
// queremos que Next haga optimización en este caso.
import { useRouter } from 'next/router';
import { useState } from 'react';

// enlaces principales de la aplicación
const links = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Acerca' },
];

// enlaces anidados del manual; cada ruta apunta a un hash dentro de
// la página de brandbook. Sirven para que el menú pueda saltar directamente
// a una sección concreta cuando el usuario hace clic.
const brandBookLinks = [
  { href: '/brandbook', label: 'Manual Completo' },
  { href: '/brandbook#s1', label: 'Propósito' },
  { href: '/brandbook#s-personalidad', label: 'Personalidad' },
  { href: '/brandbook#s2', label: 'Logotipo' },
  { href: '/brandbook#s3', label: 'Variantes' },
  { href: '/brandbook#s5', label: 'Colores' },
  { href: '/brandbook#s7', label: 'Tipografía' },
];

export default function Navbar() {
  const router = useRouter();
  // `pathname` devuelve la ruta actual, por ejemplo "/" o "/about";
  // lo usamos para aplicar la clase `active` al enlace correspondiente.
  const current = router.pathname;
  // `open` controla si el sidebar está desplegado (móvil) o está en el
  // estado expandido en desktop cuando se hace hover.
  const [open, setOpen] = useState(false);
  // `showBrand` es un estado local que abre/oculta el submenú de
  // BrandBook cuando el usuario pulsa el botón 📖 Manual.
  const [showBrand, setShowBrand] = useState(false);

  return (
    <>
      {/* botón de hamburguesa que aparece fijo en móvil. Cambia el
          estado `open` al pulsarse para mostrar u ocultar el sidebar. */}
      <button
        className="mobile-hamburger"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>

      <nav className={"c-menu" + (open ? ' open' : '')} aria-label="Menú principal">
        <div className="brand-area">
          <div className="owl-wrap">
            <img src={`${router.basePath}/images/Buho.png`} alt="Búho Tuttor-Up" className="owl-img" />
          </div>
          <span className="brand-logo">Tuttor‑Up</span>
        </div>

        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={current === l.href ? 'active' : ''}
              aria-current={current === l.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          {/* menú desplegable específico para el Brand Book. el botón
              controla `showBrand`; al abrirse muestra enlaces a secciones
              internas. los enlaces cierran también el sidebar para que la
              experiencia móvil sea más fluida. */}
          <div className="menu-section">
            <button
              className="menu-toggle"
              onClick={() => setShowBrand(!showBrand)}
              aria-expanded={showBrand}
            >
              📖 Manual
            </button>
            {showBrand && (
              <div className="submenu">
                {brandBookLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="submenu-link"
                    onClick={() => {
                      setOpen(false); // cerrar menú en móvil
                      setShowBrand(false); // cerrar submenú
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/login" className="netflix-btn" onClick={() => setOpen(false)}>
            Entrar
          </Link>
        </div>

        <div className="menu-footer" aria-hidden>
          {/* espacio reservado si es necesario */}
        </div>
      </nav>
    </>
  );
}

import Navbar from '../componentes/Navbar';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div style={{ padding: '6rem 6%', minHeight: '80vh' }}>
        <button className="details-btn" onClick={() => router.back()}>
          ← Regresar
        </button>
        <h1 style={{ color: 'var(--teal)' }}>Entrar</h1>
        <p>Esta es la página de login de prueba. Implementa tu formulario aquí.</p>
      </div>
    </>
  );
}

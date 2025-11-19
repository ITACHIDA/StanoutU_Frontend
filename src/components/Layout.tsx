import { Link, Outlet } from 'react-router-dom';
import CTAButton from './CTAButton';
import { navLinks } from '../data/navigation';
import standOutULogo from '../assets/standoutu-logo.svg';

const Layout = () => (
  <div className="min-h-screen bg-brand-dark text-white">
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-primary blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-secondary/30 blur-[200px]" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 backdrop-blur">
            <img src={standOutULogo} alt="StandOutU icon" className="h-10 w-10 object-contain" />
          </div>
          <div>
            <p className="font-display text-xl leading-tight">StandOutU</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Resume atelier</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {navLinks.map(({ label, href, type }) =>
            type === 'route' ? (
              <Link key={label} to={href} className="transition hover:text-white">
                {label}
              </Link>
            ) : (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ),
          )}
        </nav>
        <CTAButton label="Book a review" linkTo="/contact" />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} StandOutU. Crafted in Austin & Toronto.</p>
          <div className="flex gap-6">
            {navLinks.map(({ label, href, type }) =>
              type === 'route' ? (
                <Link key={label} to={href} className="transition hover:text-white">
                  {label}
                </Link>
              ) : (
                <a key={label} href={href} className="transition hover:text-white">
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Layout;

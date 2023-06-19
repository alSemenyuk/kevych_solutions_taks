import { PageNavLink } from './PageNavLink';

export const NavBar = () => (
  <nav
    data-cy="nav"
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" title="Home" />
        <PageNavLink to="trains" title="Trains" />
      </div>
    </div>
  </nav>
);

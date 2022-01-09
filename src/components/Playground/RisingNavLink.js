import styled from 'styled-components';

function NavLink({ href, children }) {
  return (
    <NavLinkAnchor href={href}>
      <NavLinkBase>{children}</NavLinkBase>
      <NavLinkHover aria-hidden="true">{children}</NavLinkHover>
    </NavLinkAnchor>
  );
}

const NavLinkAnchor = styled.a`
  text-decoration: none;
  display: inline-block;
  color: inherit;
  font-weight: 600;
  font-size: 1.5rem;
  position: relative;
`;

const NavLinkBase = styled.span``;

const NavLinkHover = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: red;
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  transition: clip-path 500ms ease-in-out;
  filter: drop-shadow(0px 0px 4px white);
  ${NavLinkAnchor}:hover & {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

export function RisingNavLink() {
  return (
    <Header>
      <a className="logo" href="/">
        Logo
      </a>
      <nav>
        <Nav>
          <li>
            <NavLink href="/">One</NavLink>
          </li>
          <li>
            <NavLink href="/">Two</NavLink>
          </li>
          <li>
            <NavLink href="/">Three</NavLink>
          </li>
        </Nav>
      </nav>
    </Header>
  );
}

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: white;
  padding: 16px 32px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  list-style-type: none;
  padding: 0;
`;

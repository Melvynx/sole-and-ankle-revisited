import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import { NavItem } from './NavItem';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>

        <Nav>
          <NavItem href="/sale">Sale</NavItem>
          <NavItem href="/new">New&nbsp;Releases</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/women">Women</NavItem>
          <NavItem href="/kids">Kids</NavItem>
          <NavItem href="/collections">Collections</NavItem>
        </Nav>

        <Side>
          <MobileNav>
            <MobileNavLink onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" />
            </MobileNavLink>
            <MobileNavLink>
              <Icon id="search" />
            </MobileNavLink>
            <MobileNavLink>
              <Icon id="shopping-bag" />
            </MobileNavLink>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto hidden;
  @media ${QUERIES.tabletAndDown} {
    align-items: center;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 10vw - 5.25rem, 3rem);
  margin: 0px 48px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  height: 100%;
  flex-direction: row-reverse;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.mobileAndDown} {
    gap: 16px;
  }
`;

const MobileNavLink = styled.a``;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: revert;
  }
`;

export default Header;

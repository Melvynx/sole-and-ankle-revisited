/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { keyframes } from 'styled-components';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content isOpen={isOpen} aria-label={'Test title'}>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon size={32} id="close" />
        </CloseButton>
        <Nav>
          <NavItem style={{ '--child': 1 }} href="/sale">
            Sale
          </NavItem>
          <NavItem style={{ '--child': 2 }} href="/new">
            New&nbsp;Releases
          </NavItem>
          <NavItem style={{ '--child': 3 }} href="/men">
            Men
          </NavItem>
          <NavItem style={{ '--child': 4 }} href="/women">
            Women
          </NavItem>
          <NavItem style={{ '--child': 5 }} href="/kids">
            Kids
          </NavItem>
          <NavItem style={{ '--child': 6 }} href="/collections">
            Collections
          </NavItem>
        </Nav>
        <Footer>
          <NavItem style={{ '--child': 7 }} href="/terms">
            Terms and Conditions
          </NavItem>
          <NavItem style={{ '--child': 8 }} href="/privacy">
            Privacy Policy
          </NavItem>
          <NavItem style={{ '--child': 9 }} href="/contact">
            Contact Us
          </NavItem>
        </Footer>
      </Content>
    </Overlay>
  );
};

const ContentSlideInTime = 400;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  width: 32px;
  height: 32px;
  margin-top: 8px;
  animation: ${fadeIn} 200ms linear backwards;
  animation-delay: ${ContentSlideInTime * 1.2}ms;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > * {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};
  }
`;

const NavItem = styled.a`
  animation: ${fadeIn} 400ms cubic-bezier(0.2, 0.4, 0.4, 0.8) backwards;
  animation-delay: calc(${ContentSlideInTime / 2}ms + var(--child) * 20ms);
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > * {
    font-size: ${14 / 16}rem;
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: hsl(0deg 0% 0% / 0.5);
  animation: ${fadeIn} 500ms cubic-bezier(0.33, 0.6, 0.35, 0.6) backwards;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
`;

const slideIn = keyframes`
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(5deg);
  }
`;

const Content = styled(DialogContent)`
  position: absolute;
  background: white;
  width: ${(props) => (props.isOpen ? '80%' : '0')};
  animation: 0.5s width ease-in-out;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 32px;

  transform-origin: right center;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} ${ContentSlideInTime}ms cubic-bezier(0.4, 0.2, 0.2, 0.8);
  }
`;

export default MobileMenu;

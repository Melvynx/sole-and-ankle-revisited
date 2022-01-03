import React from 'react';

import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';

export const NavItem = ({ href, children }) => {
  return (
    <NavItemContainer href={href}>
      <NavLink>{children}</NavLink>
      <NavLinkBold>{children}</NavLinkBold>
    </NavItemContainer>
  );
};

const NavItemContainer = styled.a`
  display: block;
  position: relative;

  &:after,
  &:before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 2px;
    background-color: hsl(0, 0%, 90%);
    transition: transform 500ms, top 500ms, bottom 500ms;
    will-change: transform;
    z-index: -1;
  }
  &:after {
    bottom: -2px;
  }

  &:before {
    top: -2px;
  }

  &:hover {
    &:after,
    &:before {
      top: 50%;
      bottom: 0;
      right: -4px;
      left: -4px;
      transition: transform 200ms, top 200ms, bottom 200ms;
    }

    &:after {
      transform: rotateZ(45deg) scaleX(1.15);
    }

    &:before {
      transform: rotateZ(-45deg) scaleX(1.15);
    }
  }
`;

const BaseLink = styled.span`
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  &:first-of-type {
    color: ${COLORS.secondary};
  }

  transition: transform 400ms;
  transform: var(--translate-from);

  ${NavItemContainer}:hover & {
    transition: transform 200ms;
    transform: var(--translate-to);
  }
`;

const NavLinkBold = styled(BaseLink)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  right: 0;

  --translate-from: translateY(50%) rotateX(-90deg);
  --translate-to: translateY(0) rotateX(0);
`;

const NavLink = styled(BaseLink)`
  font-weight: ${WEIGHTS.medium};
  position: relative;
  display: inline-block;

  --translate-from: translateY(0) rotateX(0);
  --translate-to: translateY(-55%) rotateX(90deg);
`;

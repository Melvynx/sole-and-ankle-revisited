import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  const variant =
    typeof salePrice === 'number'
      ? 'on-sale'
      : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default';

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <ImageZoomWrapper>
            <Image alt="" src={imageSrc} />
          </ImageZoomWrapper>
          {variant === 'on-sale' && <SaleFlag>Sale</SaleFlag>}
          {variant === 'new-release' && <NewFlag>Just released!</NewFlag>}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price
            style={{
              '--color': variant === 'on-sale' ? COLORS.gray[700] : undefined,
              '--text-decoration':
                variant === 'on-sale' ? 'line-through' : undefined,
            }}
          >
            {formatPrice(price)}
          </Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {variant === 'on-sale' ? (
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          ) : undefined}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  transform-origin: 50% 75%;
  transition: transform 450ms, filter 500ms;
  will-change: transform, filter;
  filter: brightness(95%);

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Link}:hover &, ${Link}:focus & {
      filter: brightness(100%);
      transform: scale(1.1);
      transition: transform 200ms, filter 300ms;
    }
  }
`;

const ImageZoomWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: var(--color);
  text-decoration: var(--text-decoration);
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const Flag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  background: red;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  font-size: ${14 / 18}rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
  border-radius: 2px;

  transition: transform 450ms ease-out;
  ${Link}:hover &, ${Link}:focus & {
    transform: translateX(4px);
    transition: transform 200ms ease-in-out;
  }
`;

const SaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
`;
const NewFlag = styled(Flag)`
  background-color: ${COLORS.secondary};
`;

export default ShoeCard;

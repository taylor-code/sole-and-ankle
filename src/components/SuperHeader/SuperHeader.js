import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  background-color: ${COLORS.gray[900]};
  color: ${COLORS.gray[300]};
  display: flex;
  font-size: 0.875rem;
  gap: 24px;
  padding: 8px 32px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  flex: 1;
`;

const HelpLink = styled.a`
  color: inherit;
  outline-offset: 2px;
  text-decoration: none;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;

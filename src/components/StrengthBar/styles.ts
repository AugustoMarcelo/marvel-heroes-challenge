import styled from 'styled-components/native';

interface BarProps {
  color: boolean;
  height: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Bar = styled.View<BarProps>`
  width: 1px;
  opacity: ${({ color }) => (color ? 1 : 0.25)};
  background: #fff;
  height: ${({ height }) => (height ? '12px' : '8px')};
  margin-right: 4px;
`;

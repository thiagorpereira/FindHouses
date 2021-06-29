import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

import styled from 'styled-components/native';
export const LoaderContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.metrics.px(64)}px;
`;

export const LoaderIndicator = styled.ActivityIndicator`
  margin-bottom: ${({ theme }) => theme.metrics.px(16)}px;
`;

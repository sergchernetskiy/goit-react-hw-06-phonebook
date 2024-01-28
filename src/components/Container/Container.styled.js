import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

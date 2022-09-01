import styled from 'styled-components'

export const header = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: 0 10px;
  display: flex;
  align-items: stretch;
  h1 {
    padding: 7.5px 0;
    img {
      vertical-align: bottom;
    }
  }
`;

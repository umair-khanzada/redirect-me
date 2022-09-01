import styled from 'styled-components'

export const button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 10px;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  &.active {
    background-color: ${props => props.theme.colors.primary};
  }
  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }
`;

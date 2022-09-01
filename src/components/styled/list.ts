import styled from 'styled-components'

export const list = styled.ul`
  list-style: none;
  margin: 10px 10px;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    padding: 5px 7.5px;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.hover};
      .actions {
        button {
          display: block;
        }
        .schedule-time {
          display: none;
        }
      }
    }
    img {
      border: 1px solid ${props => props.theme.colors.primary};
      border-radius: 8px;
    }
    .text-content {
      margin-left: 10px;
      width: 400px;
      div:first-child {
        margin-bottom: 3px;
      }
      div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 400;
        font-size: 15px;
      }
    }
    .actions {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      button {
        display: none;
        font-size: 12px;
        background: transparent;
      }
      .error {
        margin-left: 5px;
        color: ${props => props.theme.colors.error};
        border: 1px solid ${props => props.theme.colors.error}
      }
      .info {
        color: ${props => props.theme.colors.info};
        border: 1px solid ${props => props.theme.colors.info}
      }
    }
  }
`;

import styled from 'styled-components'

export const formContainer = styled.div`
  margin: 10px 10px;
  input, textarea {
    width: 100%;
    padding: 12px 10px;
    margin: 2px 0 15px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
  }
  textarea {
    resize: none;
    height: 150px;
  }
  .form-submission {
    display: flex;
    justify-content: end;
  }
`;

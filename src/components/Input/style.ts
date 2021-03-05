import styled from 'styled-components';

interface IContainer {
  hasError: boolean;
}

export const Container = styled.div<IContainer>`
  background: transparent;
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    color: #383E71;
    font-size: 10px;
    margin: 8px;
    text-transform: uppercase;
  }

  input {
    flex: 1;
    color: #f4ede8;
    background: transparent;
    border: 1px solid #989FDB;
    padding: 18px;
    color: #383E71;
    font-size: 10px;
    border-radius: 10px;
    margin-bottom: 20px;

    &::placeholder {
      color: #989FDB;
    }
  }
`;

export const Error = styled.span`
  color: #FF377F;
  font-size: 10px;
  position: absolute;
  bottom: 0;
  left: 10px;
`;

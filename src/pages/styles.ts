import { backgroundImages } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    width: 256px;

    h1 {
      font-size: 40px;
      line-height: 48px;
      font-weight: 400;
      margin-bottom: 16px;
    }

    strong {
      display: flex;
      color: #989FDB;
      font-weight: 600;
      margin-bottom: 45px;
    }

    > span {
      /* flex: 1; */
      display: flex;
      justify-content: center;
      color: #989FDB;
      font-size: 14px;
      line-height: 20px;

      > a {
        margin-left: 4px;
      }
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url('/assets/images/background.png') no-repeat center;
  background-size: cover;
`;

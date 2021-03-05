import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  background-image: linear-gradient(to right, #383E71, #9D25B0);
  font-weight: 600;
  padding: 14px;
  border: none;
  display: block;
  width: 100%;
  color: #ffffff;
  border-radius: 10px;
  margin-top: 16px;
  margin-bottom: 25px;
  box-shadow: 0px 10px 25px 0px #CF99DB;

  background-image: -moz-linear-gradient(top, #383E71, #9D25B0
);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#383E71), to(#9D25B0
));
  background-image: -webkit-linear-gradient(top, #383E71, #9D25B0
);
  background-image: -o-linear-gradient(top, #383E71, #9D25B0
);
  background-image: linear-gradient(to bottom, #383E71, #9D25B0
);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#9D25B0', endColorstr='#383E71', GradientType=0);
  background-repeat: repeat-y;
  background-size: 100% 90px;
  background-position: 0 -30px;
  -webkit-transition: all 0.2s linear;
     -moz-transition: all 0.2s linear;
       -o-transition: all 0.2s linear;
          transition: all 0.2s linear;

    &:hover {
      background-position: 0 0;
    }
`;

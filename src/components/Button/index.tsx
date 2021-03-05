import React, {ButtonHTMLAttributes} from 'react';

import { Container } from './style';

interface ButtonProrps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: React.FC<ButtonProrps> = ({children, ...rest}) => {
  return (
    <Container {...rest} >{children}</Container>
  )
}
export default Button;

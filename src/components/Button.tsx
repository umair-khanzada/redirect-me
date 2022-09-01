import React from 'react';
import * as S from './styled/button';

interface Props {
  className?: string;
  children: string | JSX.Element;
  title?: string;
  onClick: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

function Button({className = '', type = 'button', children, ...rest}: Props) {
  return (
    <S.button type={type} className={className} {...rest}>
      {children}
    </S.button>
  );
}
export default Button;

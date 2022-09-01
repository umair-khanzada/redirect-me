import React from 'react';
import logo from './../logo.svg';

import * as S from './styled/header';

interface Props {
 className?: string;
 text: string | JSX.Element;
 children?: JSX.Element
}

function Header({ className = '', text, children }: Props) {
  return (
    <S.header className={`header ${className}`}>
      <div style={{flexGrow: 1}}>
        <h1>
          <img src={logo} alt="#" width={40} height={40}/>
          {text}
        </h1>
      </div>
      <div style={{flexGrow: 1}}>
        {children}
      </div>
    </S.header>
  );
}

export default Header;

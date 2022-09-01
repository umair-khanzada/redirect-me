import React from 'react';
import * as S from './styled/tabcontent';

interface Props {
  className?: string;
  tab: number;
  activeTab: number;
  children: JSX.Element,
}

function TabContent({className = '', tab, activeTab, children}: Props) {
  return tab === activeTab ? (
  <S.tabcontent className={`tab-content ${className}`}>
    {children}
  </S.tabcontent>
  ) : null;
}
 export default TabContent;

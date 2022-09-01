import React from 'react';
import { Button } from 'src/components';
import { changeTab, deselectItem } from 'src/store';
import * as S from './styled/tabs';

interface Props {
  className?: string;
  tabs: string[] | JSX.Element[];
  activeIndex: number;
  dispatch: (_f: any) => void;
}

function Tabs({activeIndex, className = '', dispatch, tabs}: Props) {
  const changeTabAndDeselect = (i: number) => {
    dispatch(changeTab(i));
    dispatch(deselectItem());
  }
  return (
    <S.tabs className={`tabs ${className}`}>
      {tabs.map((tab, i) => (
        <Button key={i} onClick={() => changeTabAndDeselect(i)} className={`tab ${i === activeIndex ? 'active' : ''}`}>{tab}</Button>
      ))}
    </S.tabs>
  );
}
 export default Tabs;

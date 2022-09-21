import React from 'react';
import { Button } from "src/components";
import { changeTab, deleteItem, selectItem } from 'src/store';
import * as S from './styled/list';

interface Item {
  title: string,
  des: string,
  url: string,
  time?: string
}

interface Props {
  className?: string;
  items: Item[];
  dispatch: (_f: any) => void;
}

function List({className = '', dispatch, items}: Props) {
  const selectAndChangeTab = (i: number) => {
    dispatch(selectItem(i));
    dispatch(changeTab(1));
  };

  function handleImageError(this: HTMLImageElement) {
    this.onerror = null;
    this.src = 'logo192.png';
  }

  return (
    <S.list className={className}>
      {items.map((item, i) => (
        <li key={i}>
          <img src={`${item.url}favicon.ico`} onError={handleImageError} alt="list-item-logo"/>
          <div className="text-content">
            <div className="title" title={item.title}>
              <a href={item.url} target="_blank">{item.title}</a>
            </div>
            <div className="des light-font" title={item.des}>{item.des}</div>
          </div>
          <div className="actions">
            <div className="schedule-time light-font">Timer 8:00</div>
            <Button title="Edit" className="info" onClick={() => selectAndChangeTab(i)}>Edit️</Button>
            <Button title="Delete" className="error" onClick={() => dispatch(deleteItem(i))}>Delete</Button>
          </div>
        </li>
      ))}
    </S.list>
  );
}
export default List;

import React, { useEffect, useState } from 'react';
import { Button } from 'src/components';
import { addItem, changeTab } from 'src/store';
import { Item } from 'src/interface';
import * as S from './styled/form';

// Data props should rename also go through with flow, maybe there are some better approaches.
interface Props {
  dispatch: (_f: any) => void;
  data: Item | null;
}

function Form({dispatch, data}: Props) {
  const [item, setItem] = useState({id: '', title: '', url: '', des: ''});
  useEffect(() => {
    if(data) {
      // @ts-ignore
      setItem({...data});
    }
  }, [])

  const handleOnChange = (e: React.ChangeEvent) => {
    const element = (e.target as HTMLInputElement);
    const key = element.name;
    const value = element.value;
    setItem({...item, [key]: value});
  };

  const handleSubmit = (goBack?: boolean) => (e: React.SyntheticEvent) => {
    console.log('goBack', goBack);
    e.preventDefault();
    dispatch(addItem(item))
    if (goBack) dispatch(changeTab(0));
    setItem({id: '', title: '', url: '', des: ''});
  };

  return (
   <S.formContainer className="form-container">
     <form>
       <div className="form-group">
         <label htmlFor="title">Title</label>
         <input value={item.title} onChange={handleOnChange} placeholder="Title" type="text" name="title" />
       </div>
       <div className="form-group">
         <label htmlFor="url">URL</label>
         <input value={item.url} onChange={handleOnChange} placeholder="URL" type="url" name="url" />
       </div>
       <div className="form-group">
         <label htmlFor="des">Description</label>
         <textarea value={item.des} onChange={handleOnChange} placeholder="Description" name="des" />
       </div>
       <div className="form-submission">
         <Button type="submit" style={{ marginRight: '10px' }} onClick={handleSubmit()}>Save and add another</Button>
         <Button type="submit" onClick={handleSubmit(true)}>Save and go back</Button>
       </div>
     </form>
   </S.formContainer>
  )
}

export default Form;

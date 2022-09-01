import React, { useReducer } from 'react';
import { ThemeProvider } from "styled-components";

import { initialState, reducer } from 'src/store';
import {Header, Tabs, TabContent, List, Form} from 'src/components';
import { theme } from 'src/theme';

const tabs = ['YOUR LIST', 'ADD / UPDATE',];
function App() {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  const { items, activeTab } = state;

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <Header text="redirect-me" >
          <Tabs tabs={tabs} activeIndex={activeTab} dispatch={dispatch} />
        </Header>
        <TabContent tab={0} activeTab={activeTab}>
          <List items={items} dispatch={dispatch}/>
        </TabContent>
        <TabContent tab={1} activeTab={activeTab}>
          {/*This props should be rename */}
          <Form dispatch={dispatch} data={state.selected}/>
        </TabContent>
      </div>
    </ThemeProvider>
  );
}

export default App;

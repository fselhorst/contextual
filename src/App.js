import React from 'react';
import './App.css';
import { NavBar } from "./components/nav-bar/nav-bar";
import { PageContainer } from "./components/page-container/page-container";
import { withStore } from "./context/store-context";
import { compose } from "redux";

const AppComponent = () => {
  return (
    <React.Fragment>
      <PageContainer>
        <NavBar/>
      </PageContainer>
    </React.Fragment>
  );
};

export default compose(withStore)(AppComponent);

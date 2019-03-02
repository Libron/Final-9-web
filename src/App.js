import React, { Component } from 'react';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import ContactsPage from "./containers/ContactsPage/ContactsPage";
import AddPage from "./containers/AddPage/AddPage";
import EditPage from "./containers/EditPage/EditPage";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
              <Header />
              <Switch>
                  <Route path="/" exact component={ContactsPage}/>
                  <Route path="/add-contact" exact component={AddPage}/>
                  <Route path="/contact/:id/edit" exact component={EditPage}/>
                  <Route render={() => <h1>Page Not Found</h1>}/>
              </Switch>
          </Container>

      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Quotation from "./components/quotation/Quotation";
import Gallery from "./components/gallery/Gallery";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/quotation" component={Quotation} />
            <Route exact path="/gallery" component={Gallery} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

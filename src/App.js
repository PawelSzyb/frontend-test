import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Quotation from "./components/quotation/Quotation";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/quotation" component={Quotation} />
        </div>
      </Router>
    );
  }
}

export default App;

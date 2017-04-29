import React from "react";
import { connect } from "react-redux";

import Header from '../Core/Header';
import Nav from '../Core/Nav';
import Footer from '../Core/Footer';

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <iframe src="normal-tree.html" frameborder="0" width="320" height="260"/>
        <Footer />
      </div>
    );
  }
}

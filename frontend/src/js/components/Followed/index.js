import React from "react";
import { connect } from "react-redux";

import Header from '../Core/Header';
import Nav from './Nav';
import Viewer from './Viewer';
import Footer from '../Core/Footer';

export default class Followed extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div class="ts fitted hidden divider"></div>
        <Viewer />
        <Footer />
      </div>
    );
  }
}

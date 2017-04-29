import React from "react";
import { connect } from "react-redux";

import Header from '../Core/Header';
import Nav from './Nav';
import Card from './Card';
import Footer from '../Core/Footer';

export default class Tasks extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div class="ts fitted hidden divider"></div>
        <Card />
        <Footer />
      </div>
    );
  }
}

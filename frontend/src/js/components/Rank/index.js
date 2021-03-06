import React from "react";
import { connect } from "react-redux";

import Header from '../Core/Header';
import Nav from './Nav';
import Table from './Table';
import Footer from '../Core/Footer';

export default class Rank extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div class="ts fitted hidden divider"></div>
        <Table />
        <Footer />
      </div>
    );
  }
}

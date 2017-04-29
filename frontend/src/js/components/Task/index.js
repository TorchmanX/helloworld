import React from "react";
import { connect } from "react-redux";

import Header from '../Core/Header';
import Nav from './Nav';
import Form from './Form';
import PtsIndicator from './PtsIndicator';
import Footer from '../Core/Footer';

export default class Task extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div class="ts fitted hidden divider"></div>
        <Form />
        <PtsIndicator />
        <Footer />
      </div>
    );
  }
}

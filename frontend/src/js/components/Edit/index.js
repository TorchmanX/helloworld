import React from "react";
import { connect } from "react-redux";

import Header from '../Core/Header';
import Nav from './Nav';
import Form from './Form';
import Footer from '../Core/Footer';

export default class Edit extends React.Component {
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
        <Footer />
      </div>
    );
  }
}

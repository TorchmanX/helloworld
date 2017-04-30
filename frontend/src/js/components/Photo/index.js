import React from "react";
import { connect } from "react-redux";

import Header from '../Core/Header';
import Nav from './Nav';
import Camera from './Camera';
import Footer from '../Core/Footer';

import { Link } from 'react-router-dom';

export default class Photo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div class="ts fitted hidden divider"></div>
        <div class="content">
          <Link to="/followed"><img src="/img/take.gif" width="100%"/></Link>
        </div>
        <Footer />
      </div>
    );
  }
}

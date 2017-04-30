import React from "react";
import { connect } from "react-redux";

import Header from '../Core/Header';
import Nav from './Nav';
import LineChart from './LineChart';
import ReasonCard from './ReasonCard';
import RaderChart from './RaderChart';
import Footer from '../Core/Footer';

export default class Photo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div class="content">
          <img src="/img/dist1.jpg" width="100%" />
        </div>
        <div class="ts fitted hidden divider"></div>
        <div class="content">
          <img src="/img/chart1.png" width="100%" />
        </div>
        <div class="ts fitted divider"></div>
        <div class="content">
          <img src="/img/chart2.png" width="100%" />
        </div>
        <div class="ts fitted divider"></div>
        <ReasonCard />
        <Footer />
      </div>
    );
  }
}

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
        <div class="ts fitted hidden divider"></div>
        <LineChart />
        <div class="ts fitted divider"></div>
        <RaderChart />
        <div class="ts fitted divider"></div>
        <ReasonCard />
        <Footer />
      </div>
    );
  }
}

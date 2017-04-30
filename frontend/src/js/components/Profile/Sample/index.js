import React from "react";
import { Link } from 'react-router-dom';

export default class Sample extends React.Component {
  render() {

    return (
      <div class="ts three cards">
        <div class="ts card">
          <div class="image">
            <Link to="/analysis">
              <img src="/img/p0.jpg" />
            </Link>
          </div>
          <div class="content">
            <a class="description">Ivy</a>
          </div>
        </div>
        <div class="ts card">
          <div class="image">
            <Link to="/analysis">
              <img src="/img/p2.jpg" />
            </Link>
          </div>
          <div class="content">
            <a class="description">Apple Snail</a>
          </div>
        </div>
        <div class="ts card">
          <div class="image">
            <Link to="/analysis">
              <img src="/img/p4.jpg" />
            </Link>
          </div>
          <div class="content">
            <a class="description">Mile-a-minute Weed</a>
          </div>
        </div>
        <div class="ts card">
          <div class="image">
            <Link to="/analysis">
              <img src="/img/p3.jpg" />
            </Link>
          </div>
          <div class="content">
            <a class="description">Apple Snail</a>
          </div>
        </div>
        <div class="ts card">
          <div class="image">
            <Link to="/analysis">
              <img src="/img/p2.jpg" />
            </Link>
          </div>
          <div class="content">
            <a class="description">Apple Snail</a>
          </div>
        </div>
      </div>
    );
  }
}

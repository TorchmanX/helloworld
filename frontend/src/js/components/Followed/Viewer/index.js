import React from "react";
import { Link } from 'react-router-dom';

export default class Viewer extends React.Component {
  render() {
    const write_icon = '\uf040';

    return (
      <div class="ts very narrow container">
        <div class="ts centered card">
          <button class="ts large icon button">
            <Link to="/edit">
              <i class="Write icon">{write_icon}</i>Edit Invader
            </Link>
          </button>
          <a class="image" href="#!">
            <img src="/img/p0.jpg" />
          </a>
          <div class="center aligned Content">
            <a class="header" href="#!">50 pts</a>
          </div>
          <div class="center aligned description">
            ENGLISH IVY
          </div>
        </div>
      </div>
    );
  }
}

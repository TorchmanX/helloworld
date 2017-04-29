import React from "react";
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    const world_icon = '\uf0ac';
    const map_icon = '\uf279';
    const arrow_left_icon = '\uf060';

    return (
      <nav class="narrow container">
        <div class="ts icon menu">
          <a class="item">
            <i class="World icon">{world_icon}</i>world
          </a>
          <a class="item">
            <i class="Map icon">{map_icon}</i>region
          </a>
          <div class="right menu">
            <button class="ts circular large icon button">
              <Link to="main">
                <i class="Arrow Left icon">{arrow_left_icon}</i>
              </Link>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

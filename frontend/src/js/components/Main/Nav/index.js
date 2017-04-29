import React from "react";
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    const cube_icon = '\uf1b2';
    const unhide_icon = '\uf06e';
    const flag_icon = '\uf11e';
    const dollar_icon = '\uf155';
    const lightning_icon = '\uf0e7';
    return (
      <nav class="narrow container">
        <div class="ts icon menu">
          <button class="ts circular large icon button">
            <Link to="/profile">
              <i class="Cube icon">{cube_icon}</i>
            </Link>
          </button>
          <button class="ts circular large icon button">
            <Link to="/photo">
              <i class="Unhide icon">{unhide_icon}</i>
            </Link>
          </button>
          <button class="ts circular large icon button">
            <Link to="/rank">
              <i class="Flag Checkered icon">{flag_icon}</i>
            </Link>
          </button>
          <button class="ts circular large icon button">
            <Link to="/donation">
              <i class="Dollar icon">{dollar_icon}</i>
            </Link>
          </button>
          <div class="right menu">
            <button class="ts circular large icon button">
              <Link to="tasks">
                <i class="Lightning icon">{lightning_icon}</i>
              </Link>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

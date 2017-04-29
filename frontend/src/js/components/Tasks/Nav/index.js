import React from "react";
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    const search_icon = '\uf002';
    const plus_icon = '\uf067';
    const arrow_left_icon = '\uf060';

    return (
      <nav class="narrow container">
        <div class="ts icon menu">
          <button class="ts circular large icon button">
            <i class="Search icon">{search_icon}</i>
          </button>
          <div class="ts circular input">
            <input type="text" placeholder="Search" />
          </div>
          <div class="right menu">
            <button class="ts circular large icon button">
              <Link to="/task">
                <i class="Plus icon">{plus_icon}</i>
              </Link>
            </button>
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

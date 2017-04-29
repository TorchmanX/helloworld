import React from "react";
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    const arrow_left_icon = '\uf060';

    return (
      <nav class="narrow container">
        <div class="ts icon menu">
          <a class="item">
            Add New Tasks
          </a>
          <div class="right menu">
            <button class="ts circular large icon button">
              <Link to="tasks.html">
                <i class="Arrow Left icon">{arrow_left_icon}</i>
              </Link>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

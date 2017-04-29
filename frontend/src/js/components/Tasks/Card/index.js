import React from "react";
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
  render() {
    const arrow_right_icon = '\uf061';

    return (
      <div>
        <a class="ts card">
          <div class="content">
            <div class="header">
              Golden Apple Snail!!!!
              <button class="ts circular basic mini very compact icon button">
                100pts
              </button>
            </div>
            <div class="meta">
              <div>Taipei</div>
            </div>
          </div>
          <div class="symbol">
            <i class="Arrow Right icon">{arrow_right_icon}</i>
          </div>
        </a>
        <a class="ts card">
          <div class="content">
            <div class="header">
              Golden Apple Snail!!!!
              <button class="ts circular basic mini very compact icon button">
                50pts
              </button>
            </div>
            <div class="meta">
              <div>Taipei</div>
            </div>
          </div>
          <div class="symbol">
            <i class="Arrow Right icon">{arrow_right_icon}</i>
          </div>
        </a>
      </div>
    );
  }
}

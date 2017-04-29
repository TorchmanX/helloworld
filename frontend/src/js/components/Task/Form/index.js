import React from "react";
import { Link } from 'react-router-dom';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <div class="ts basic horizontally very padded dashed slate">
          <span class="header">Upload Photo</span>
        </div>
        <div class="ts center aligned heading slate">
          <div class="ts form">
            <div class="inline field">
              <label>Task Name</label>
              <input type="text" placeholder="" />
            </div>
            <div class="inline field">
              <label>Location</label>
              <input type="text" placeholder="" />
            </div>
            <div class="inline field">
              <label>Contributed Points</label>
              <input type="text" placeholder="" />
            </div>
            <div class="inline field">
              <label>Note</label>
              <input type="text" placeholder="" />
            </div>
            <div class="ts fluid stackable buttons">
              <button class="ts positive button">
                <Link to="/main">
                  Confirm
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

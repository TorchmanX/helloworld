import React from "react";
import { Link } from 'react-router-dom';

export default class Camera extends React.Component {
  render() {

    return (
      <Link to="/followed">
        <div class="ts clickable slate">
          <i class="mouse pointer icon"></i>
          <span class="header">Take photo</span>
          <span class="description">Click here to take photo...</span>
        </div>
      </Link>
    );
  }
}

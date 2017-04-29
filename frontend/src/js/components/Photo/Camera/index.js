import React from "react";
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';

export default class Camera extends React.Component {
  render() {
    const photo_icon = '\uf030';
    return (
      <Link to="/followed">
        <div class="ts center aligned segment">
          <div class="ts basic slate">
            <i class="photo icon"></i>
            <span class="header">Take photo</span>
            <span class="description">Click here to take photo...</span>
          </div>
        </div>
      </Link>
    );
  }
}

import React from "react";

export default class Loading extends React.Component {

  render() {
    if(this.props.loading) {
      return (
        <div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

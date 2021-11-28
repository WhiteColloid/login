import React, { Component } from "react";

export default class FlashItem extends Component {
  render() {
    return (
      <div className="alert alert-primary" >
       Logged in, welcome!
        <button
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

// Copyright 2015, EMC, Inc.

'use strict';

import React, { Component, PropTypes } from 'react';

export default class Flipper extends Component {

  state = {};

  render() {
    let className = 'FlipperRoot ';
    if (this.state.flip) {
      className += ' flip';
    }
    if (this.state.flipping) {
      className += ' flipping' + this.state.flipping;
    }
    return (
      <div className={className}>
        <div className="flipper">
          <div className="front">
            {this.props.front || this.props.children}
          </div>
          <div className="back">
            {this.props.back}
          </div>
        </div>
      </div>
    );
  }

  toggleFlip() {
    if (this.state.flipping) { return; }
    this.setState({
      flipping: this.state.flip ? 'Back' : 'Front',
      flip: !this.state.flip
    });
    // TODO: use css transition end event for this:
    setTimeout(() => this.setState({flipping: null}), 750);
  }

}

// TODO:
// .FlipperRoot {
//   width: 100%;
//   height: 100%;
//   position: relative;
//   perspective: 1000;
//
//   .flipper, .front, .back {
//     width: 100%;
//     height: 100%;
//     border-bottom-left-radius: 5px;
//     border-bottom-right-radius: 5px;
//   }
//
//   .flipper {
//     width: 100%;
//     height: 100%;
//     position: relative;
//   }
//
//   .front, .back {
//     overflow: auto;
//     position: absolute;
//     top: 0;
//     left: 0;
//   }
//
//   .front {
//     background: rgba(255, 255, 255, 0.75);
//     z-index: 2;
//   }
//
//   .back {
//     color: #fff;
//     background: rgba(0, 0, 0, 0.75);
//     display: none;
//   }
//
//   &.flip {
//     .front {
//       display: none;
//     }
//     .back {
//       display: block;
//     }
//   }
//
//   &.flippingFront, &.flippingBack {
//     .flipper {
//       transition: transform 0.75s cubic-bezier(0.23, 1, 0.32, 1) 0s;
//       transform-style: preserve-3d;
//       transform: rotateY(0deg);
//     }
//
//     .front, .back {
//       display: block;
//       backface-visibility: hidden;
//     }
//   }
//
//   &.flippingFront {
//     .flipper {
//       transform: rotateY(180deg);
//     }
//
//     .front {
//       display: block;
//       transform: rotateY(0deg);
//     }
//
//     .back {
//       display: block;
//       transform: rotateY(180deg);
//     }
//   }
//
//   &.flippingBack {
//     .flipper {
//       transform: rotateY(-180deg);
//     }
//
//     .front {
//       display: block;
//       transform: rotateY(-180deg);
//     }
//
//     .back {
//       display: block;
//       transform: rotateY(0deg);
//     }
//   }
// }

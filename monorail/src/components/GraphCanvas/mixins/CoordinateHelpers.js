'use strict';

import Vector from '../lib/Vector';
import Matrix from '../lib/Matrix';
import Rectangle from '../lib/Rectangle';

export default {

  get scale() {
    return this.state.scale;
  },

  get position() {
    return new Vector(this.state.position);
  },

  get viewSize() {
    return new Vector(this.props.viewWidth, this.props.viewHeight);
  },

  get worldSize() {
    return new Vector(this.props.worldWidth, this.props.worldHeight);
  },

  get viewBoundingBox() {
    var viewSize = this.viewSize;
    return new Rectangle(0, 0, viewSize.x, viewSize.y);
  },

  get worldBoundingBox() {
    var worldSize = this.worldSize;
    return new Rectangle(0, 0, worldSize.x, worldSize.y);
  },

  get worldSpaceTransform() {
    var s = this.scale;
    return new Matrix().
      identity().
      translate(this.viewSize.div([2, 2]).sub(this.worldSize.div([2, 2]))).
      scale([s, s]).
      translate(this.position.negate());
  },

  get viewSpaceTransform() {
    return this.worldSpaceTransform.invert();
  }

};

import React, { Component } from 'react';
import * as BABYLON from 'babylonjs';

import {
    Link,
    withRouter
} from 'react-router-dom';

class BabylonScene extends Component {
  constructor(props) {
    super(props);
    const scene = BABYLON.Scene;
    const engine = BABYLON.Engine;
    const canvas = HTMLCanvasElement;
  }

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
    }
  };  

  componentDidMount () {
    this.engine = new BABYLON.Engine(
        this.canvas,
        true,
        this.props.engineOptions,
        this.props.adaptToDeviceRatio
    );

    let scene = new BABYLON.Scene(this.engine);
    this.scene = scene;

    this.props.onSceneMount({
      scene,
      engine: this.engine,
      canvas: this.canvas
    });

    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  onCanvasLoaded = (c) => {
    if (c !== null) {
      this.canvas = c;
    }
  }

  render () {
    // 'rest' can contain additional properties that you can flow through to canvas:
    // (id, className, etc.)
    let { width, height, ...rest } = this.props;

    let opts = {};

    if (width !== undefined && height !== undefined) {
      opts.width = width;
      opts.height = height;
    }

    opts.game = this.props.game;

    return (
      <canvas
        {...opts}
        ref={this.onCanvasLoaded}
        style = {{width: '98vw', height: '96vh', position: 'relative', margin: '5px 5px'}}
      />
    )
  }
}

export default withRouter(BabylonScene);
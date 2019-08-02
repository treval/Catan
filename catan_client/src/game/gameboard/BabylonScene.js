import React, { Component } from 'react';
import * as BABYLON from 'babylonjs';

import {
    Link,
    withRouter
} from 'react-router-dom';

export type SceneEventArgs = {
  engine: BABYLON.Engine,
  scene: BABYLON.Scene,
  canvas: HTMLCanvasElement
};

export type SceneProps = {
  engineOptions?: BABYLON.EngineOptions,
  adaptToDeviceRatio?: boolean,
  onSceneMount?: (args: SceneEventArgs) => void,
  width?: number,
  height?: number
};

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

    if (typeof this.props.onSceneMount === 'function') {
      this.props.onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas
      });
    } else {
      console.error('onSceneMount function not available');
    }

    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  onCanvasLoaded = (c : HTMLCanvasElement) => {
    if (c !== null) {
      this.canvas = c;
    }
  }

  render () {
    // 'rest' can contain additional properties that you can flow through to canvas:
    // (id, className, etc.)
    let { width, height, ...rest } = this.props;

    let opts: any = {};

    return (
      <canvas
        style={{width: '100vw', height: '100vh', margin: 'auto'}}
        ref={this.onCanvasLoaded}
      />
    )
  }
}

export default withRouter(BabylonScene);
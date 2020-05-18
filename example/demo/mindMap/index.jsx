'use strict';
import React, {Component} from 'react';
// import { PlusIcon } from '@patternfly/react-icons';
// import Icon from '@material-ui/core/Icon';
import mockData from './data.js';
const Canvas = require('../../../index.js').TreeCanvas;
require('./index.less');

class MindMap extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let root = document.getElementById('dag-canvas');
    this.canvas = new Canvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: true,    // 可连线
      draggable: true,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      theme: {
        edge: {
          type: 'AdvancedBezier',
        }
      },
      layout: {
        type: 'mindmap',
        options: {
          direction: 'H',
          getSide(d) {
            return d.data.side || 'right';
          },
          getHeight(d) {
            return 10;
          },
          getWidth(d) {
            return 40;
          },
          getHGap(d) {
            return 50;
          },
          getVGap(d) {
            return 20;
          },
        }
      }
    });
    this.canvas.draw(mockData, {}, () => {
      this.canvas.focusCenterWithAnimate();
    }
    );
    this.canvas.on('events', (data) => {
      console.log(data);
    });
  }
  render() {
    return (
      <div className='mind-map'>
         {/* <PlusIcon color="white" /> */}
         {/* <Icon>star</Icon> */}
        <div className="compactBoxTree-canvas" id="dag-canvas">
        </div>
      </div>
    );
  }
}

module.exports = MindMap;

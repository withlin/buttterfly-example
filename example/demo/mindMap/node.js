
'use strict';


import MindMap from './index.jsx';

const Node = require('../../../index.js').TreeNode;
const $ = require('jquery');

var options = {}
class BaseNode extends Node {
  constructor(opts) {
    super(opts);
  }

  draw = (opts) => {
    const _this= this;
    options = opts;
    let container = $('<div class="mind-map-node"></div>')
      .css('top', opts.top)
      .css('left', opts.left)
      .attr('id', opts.id);
      let logoContainer = $('<div class="logo-container"></div>');
    
    const selectNode = $(`<select class=".select">
    <option>step1</option>
    <option>step2</option>
    <option>step3</option>
    <option>step4</option>
  </select>`)

  selectNode.on('mousedown',function(e){
    e.stopPropagation()
  })

  const iconBtnLeft = $(`<div class="btn-left">+</div>`)
  const iconBtnRight = $(`<div class="btn-right">+</div>`)
  const iconBtnBottom = $(`<div class="btn-bottom">+</div>`)

  iconBtnLeft.on('click',function(e){
    options.children = [{
      id: 'subNode1',
      Class: Node,
      title: '子节点 1',
      side: "left"
    }]
    e.stopPropagation()
    _this.draw(options)
  })
  
  iconBtnRight.on('click',function(){
    alert('right')
  })

  iconBtnBottom.on('click',function(){
    alert('bottom')
  })

  logoContainer.append(selectNode)
  logoContainer.append(iconBtnLeft)
  logoContainer.append(iconBtnRight)
  logoContainer.append(iconBtnBottom)

  logoContainer.on('mouseover',function(e){
    e.stopPropagation()
    if(_this.timeout!=null)
    clearTimeout(_this.timeout)
    $(this).parent().find('.btn-right').show()
    $(this).parent().find('.btn-left').show()
    $(this).parent().find('.btn-bottom').show()

  }).on('mouseout ',function(e){
    e.stopPropagation()
    const _thisDom = $(this)
    _this.timeout = setTimeout(()=>{
      _thisDom.parent().find('.btn-right').hide()
      _thisDom.parent().find('.btn-left').hide()
      _thisDom.parent().find('.btn-bottom').hide()
    },1000)
  })

  iconBtnRight.on('mouseout ',function(e){
    e.stopPropagation()
    const _thisDom = $(this)
    _this.timeout = setTimeout(()=>{
      _thisDom.parent().find('.btn-right').hide()
      _thisDom.parent().find('.btn-left').hide()
      _thisDom.parent().find('.btn-bottom').hide()
    },1000)
    
  })

  // let logo = this.genLogo();
  // logo.css('color', '#FFF');
  // logoContainer.append(logo);

  let content = $('<p class="long-text"></p>').text(opts.options.name);

  container.append(logoContainer).append(content);

    return container[0];
  }
}

module.exports = BaseNode;
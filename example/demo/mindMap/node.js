
'use strict';


import MindMap from './index.jsx';

const Node = require('../../../index.js').TreeNode;
const $ = require('jquery');

class BaseNode extends Node {
  constructor(opts) {
    super(opts);
  }

  addNode = (node) => {
    return MindMap.addNode(this, node)
  }

  // removeNode = (node) => {

  // }

  draw = (opts) => {
    const _this= this
    let container = $('<div class="mind-map-node"></div>')
      .css('top', opts.top)
      .css('left', opts.left)
      .attr('id', opts.id);
      let logoContainer = $('<div class="logo-container"></div>');



    // const newLocal = `
    // <div class='title'>
    // <span class="add-node"><i class="iconfont">&#xe6a1;</i></span>
    //   <span>
    //   <select class="selectBox">
    //   <option value="1">task1</option>
    //   <option value="2">task2</option>
    //   </select>
    //   </span>
    //   <span class="add-node"><i class="iconfont">&#xe6a1;</i></span>
    // </div>`;
    // let plusIcon = $(`
    // <div class='add-node'>
    //   <span class="add-node"><i class="iconfont">&#xe6a1;</i></span>
    // </div>`);

    // titleDom.append(plusIcon);
    // let title = $(newLocal);

    // let content = $(`
	
		// 	<div class="box-content">
    //     <div class="items box-top">
    //     <span class="add-node"><i class="iconfont">&#xe6a1;</i></span>
    //     </div>
    //     <div class="items box-left">
    //     <span class="add-node"><i class="iconfont">&#xe6a1;</i></span>
    //     </div>
    //     <div class="items box-right">
    //     <span class="add-node box-right"><i class="iconfont">&#xe6a1;</i></span>
    //     </div>
    //   </div>
      
    // `)

    // titleDom.append(title);

    // titleDom.find('.selectBox').on('change', function () {
        
    //     alert("aaaaaaaaaaaaaaaaaaa");
    // }).on('mousedown', function(){
    //   console.log("mousedown.......")
    //   event.stopPropagation();
    // })

    // titleDom.find('.add-node').on('click', function(){
    //   console.log("click")
    // }).on('mousedown', function(){
    //   console.log("mousedown.......")
    //   event.stopPropagation();
    // })

    // titleDom.mousemove(function() {
     
    // })
   
    // container.append(titleDom).mouseover(function(){
    //   console.log("我来咯 我来咯");
    // });
    
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

  iconBtnLeft.on('click',function(){
    _this.addNode([{
      id: 'xxxx',
      top: 100,
      left: 100,
      Class: this, //设置基类之后，画布会根据自定义的类来渲染
      children: [{
        id: 'subNode1',
        Class: Node,
        title: '子节点 1',
        side: "left"
      },  
    ]
    }])
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
'use strict';

const Node = require('../../../index.js').Node;
const $ = require('jquery');
require('./base_node.less');

class BaseNode extends Node {
  constructor(opts) {
    super(opts);
    this.options = opts;
  }
  draw = (opts) => {
    let container = $('<div class="relation-node"></div>')
      .css('top', opts.top)
      .css('left', opts.left)
      .attr('id', opts.id)
      .css('background-color', opts.options.color);

    let logoContainer = $('<div class="logo-container"></div>');
    let select = $(`
    <div>
      <select class="selectBox">
      <option value="grapefruit">葡萄柚</option>
      <option value="lime">酸橙</option>
      <option selected value="coconut">椰子</option>
      <option value="mango">芒果</option> 
      </select>
    </div>
    `);
  //  let button = `<button type="button" class="btn">按钮</button>`
    logoContainer.append(select);
    // logoContainer.find('.selectBox').on('click',function(){
    //   alert("aaaaaaaaaaaaaaaaaaa");
    // });
    // logoContainer.find('.selectBox').on('click', function () {
    //   alert("aaaaaaaaaaaaaaaaaaa");
    // });

    logoContainer.css('background-color', opts.options.color);
    let logo = this.genLogo();
    logo.css('color', '#FFF');
    logoContainer.append(logo);
   
    logoContainer.mouseover(function() {
      console.log("我来咯 我来咯");
    })


    let content = $('<p class="long-text"></p>').text(opts.options.name);

    container.append(logoContainer);

    return container[0];
  }
  genLogo = () => {
    console.log('请重载此方法');
  }
}

module.exports = BaseNode;

/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/scrollbaz.js
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.selectorParse = factory());
}(this, function () { 'use strict';

  var _this = this;

  Scrollbaz.SCROLL = 'SCROLL';
  Scrollbaz.TOUCH_TOP = 'TOUCH_TOP';
  Scrollbaz.TOUCH_RIGHT = 'TOUCH_RIGHT';
  Scrollbaz.TOUCH_BOTTOM = 'TOUCH_BOTTOM';
  Scrollbaz.TOUCH_LEFT = 'TOUCH_LEFT';

  function Scrollbaz(opts) {
    this.opts = {};
  }

  Scrollbaz.prototype.once = function () {
    // TODO:
  };

  Scrollbaz.prototype.on = function () {
    // TODO:
  };

  Scrollbaz.prototype.off = function () {
    // TODO:
  };

  Scrollbaz.prototype.set = function (id, pos) {
    var el = document.getElementById(id);
    if (el) {
      throw Error('Not found ' + id);
    }

    init(el);
    var bar = new Bar(pos);
    el.appendChild(bar.el);
    return _this;
  };

  function init(el) {
    var style = getComputedStyle(el);

    if (!style.overflow !== 'hidden') {
      el.style.overflow = 'hidden';
    }
  }

  function Bar(pos) {
    this.el = createBar();
    this.el.style.cssText = 'position: absolute;';

    switch (pos) {
      case 'top':
        this.el.style.cssText = 'left:5px;top:5px;min-width:5px;height:8px';
        break;
      case 'right':
        this.el.style.cssText = 'right: 5px;top:5px;min-height:5px;width:8px';
        break;
      case 'bottom':
        this.el.style.cssText = 'left:5px;bottom:5px;min-width:5px;height:8px';
        break;
      case 'left':
        this.el.style.cssText = 'left:5px;top:5px;min-height:5px;width:8px';
        break;
      default:
        throw Error('Please specify the top, right, bottom, left');
    }
  }

  Bar.prototype.calcSize = function () {
    // TODO:
  };

  function createBar() {
    var barBox = document.createElement('div');
    barBox.className = 'scrollbaz__box';
    var bar = document.createElement('div');
    bar.className = 'scrollbaz__bar';
  }

  return Scrollbaz;

}));
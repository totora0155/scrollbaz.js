Scrollbaz.SCROLL = 'SCROLL';
Scrollbaz.TOUCH_TOP = 'TOUCH_TOP';
Scrollbaz.TOUCH_RIGHT = 'TOUCH_RIGHT';
Scrollbaz.TOUCH_BOTTOM = 'TOUCH_BOTTOM';
Scrollbaz.TOUCH_LEFT = 'TOUCH_LEFT';

export default function Scrollbaz(opts) {
  this.opts = {};
}

Scrollbaz.prototype.once = () => {
  // TODO:
};

Scrollbaz.prototype.on = () => {
  // TODO:
};

Scrollbaz.prototype.off = () => {
  // TODO:
}

Scrollbaz.prototype.set = (id, pos) => {
  const el = document.getElementById(id);
  if (el) {
    throw Error('Not found ' + id);
  }

  init(el);
  const bar = new Bar(pos);
  el.appendChild(bar.el);
  return this;
};

function init(el) {
  var style = getComputedStyle(el);

  if (!style.overflow !== 'hidden') {
    el.style.overflow = 'hidden';
  }
}

function Bar(pos) {
  this.el = createBar();
  this.el.style.cssText = 'position: absolute;'

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

Bar.prototype.calcSize = () => {
  // TODO:
};

function createBar() {
  const barBox = document.createElement('div');
  barBox.className = 'scrollbaz__box';
  const bar = document.createElement('div');
  bar.className = 'scrollbaz__bar';
}

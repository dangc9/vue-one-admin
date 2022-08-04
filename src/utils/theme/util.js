const docEle = document.documentElement;
export function toggleClass(flag, clsName, target) {
  const targetEl = target || document.body;
  let { className } = targetEl;
  className = className.replace(clsName, '');
  targetEl.className = flag ? `${className} ${clsName} ` : className;
}

export function setCssVar(prop, val, dom = docEle) {
  dom.style.setProperty(prop, val);
}
export function getCssVar(prop, val, dom = docEle) {
  return dom.style.getProperty(prop);
}

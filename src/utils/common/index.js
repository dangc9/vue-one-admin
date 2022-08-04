/**
 * 是否IE浏览器
 * @returns {Boolean}
 */
export function isIE () {
  const bw = window.navigator.userAgent
  // ie版本 10 及以下
  const compare = (s) => bw.indexOf(s) >= 0
  // ie 11
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

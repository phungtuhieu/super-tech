import Cookies from "js-cookie";

function getCookie(name) {
  return Cookies.get(name);
}

function setCookie(name, value, options) {
  return Cookies.set(name, value, options);
}

function removeCookie(name) {
  return Cookies.remove(name);
}

export { getCookie, setCookie, removeCookie };
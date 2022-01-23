// hasOwnProperty 对象的原型方法，返回一个布尔值来指示对象自身是否包含某个特定属性，不包含从原型链上继承到的属性
export const objectToString = Object.prototype.toString;
export const toTypeString = (target) => objectToString.call(target);
export const toRawType = (target) => toTypeString(target).slice(8, -1);
export const isPlainObject = (target) =>
  toTypeString(target) === "[object Object]";

export const isArray = Array.isArray;
export const isObject = (target) =>
  target !== null && typeof target === "object";

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (target, key) => hasOwnProperty.call(target, key);
export const def = (target, key, value) => {
  Object.defineProperty(target, key, {
    enumerable: false,
    configurable: true,
    value,
  });
};

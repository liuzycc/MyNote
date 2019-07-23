import Vue from "vue";
// 时间格式化
export function addHaha(str) {
  return str + "haha";
}
export function formatterDate(time) {
  let temp = new Date(time);
  return (
    temp.getFullYear() + "/" + (temp.getMonth() + 1) + "/" + temp.getDate()
  );
}
let filters = {
  formatterDate,
  addHaha
};

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
export default filters;

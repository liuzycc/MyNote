export default ({ app }, inject) => {
    // 只在content中使用
    // app.myFn = (string) => console.log('你想打印的东西--->', string)
    // 同时注入 vue  content都可以使用
    inject('myFn', (string) => console.log('你想打印的东西--->', string))
  }
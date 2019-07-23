import {
    withHooks,
    useData,
    useComputed,
    useWatch,
    useMounted,
    useUpdated,
    useDestroyed
  } from "vue-hooks"
   
  const Foo = withHooks(h => {
    const data = useData({
      count: 0
    })
   
    const double = useComputed(() => data.count * 2)
   
    useWatch(() => data.count, (val, prevVal) => {
      console.log(`count is: ${val}`)
    })
   
    useMounted(() => {
      console.log('mounted!')
    })
    useUpdated(() => {
      console.log('updated!')
    })
    useDestroyed(() => {
      console.log('destroyed!')
    })
   
    return h('div', [
      h('div', `count is ${data.count}`),
      h('div', `double count is ${double}`),
      h('button', { on: { click: () => {
        // still got that direct mutation!
        data.count++
      }}}, 'count++')
    ])
  })

  export default Foo
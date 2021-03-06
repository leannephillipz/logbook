import { createApp } from 'vue'
const app = createApp({})

const getData = () => {
  return [{'Name': 'bugs'}]
}

const install = (app, options) => {
  app.config.globalProperties.$plugin = getData()
  // app.$plugin = this
  app.provide('vPlugin', options)
  // console.log(app.config.globalProperties)

  app.directive('highlight', {
    beforeMount(el, binding, vnode) {
      el.style.background = binding.value
    }
    // to use in compondent : <p v-highlight="'yellow'">xxx</p> this actually works
    })

    // add(text, opts = {}) {
    //   let options = this.mergeOptions(opts);
    //   this.queue.push({ text, options });
    //   if(!this.visible) {
    //     this.showNext();
    //   }
    // },


}


export default {install}
















// import { createApp } from 'vue'
// const app = createApp({})
//
//
// const vPlugin =
// // register
// app.directive('my-directive', {
//   // Directive has a set of lifecycle hooks:
//   // called before bound element's attributes or event listeners are applied
//   created() {},
//   // called before bound element's parent component is mounted
//   beforeMount() {},
//   // called when bound element's parent component is mounted
//   mounted() {},
//   // called before the containing component's VNode is updated
//   beforeUpdate() {},
//   // called after the containing component's VNode and the VNodes of its children // have updated
//   updated() {},
//   // called before the bound element's parent component is unmounted
//   beforeUnmount() {},
//   // called when the bound element's parent component is unmounted
//   unmounted() {}
// })
//
// // register (function directive)
// app.directive('my-directive', () => {
//   // this will be called as `mounted` and `updated`
// })
//
// // getter, return the directive definition if registered
// const myDirective = app.directive('my-directive')
//
//
//  export default {vPlugin}

//
// const getData = () => {
//   return [{'Name': 'bugs'}]
// }
// Ii think install is more about package options.
// const install = (app, options) => {
//   app.config.globalProperties.$plugin = getData()
//   // app.$plugin = this
//   app.provide('vPlugin', options)
//   // console.log(app.config.globalProperties)
//
//   app.directive('highlight', {
//     beforeMount(el, binding, vnode) {
//       el.style.background = binding.value
//     }
//     // to use in compondent : <p v-highlight="'yellow'">xxx</p> this actually works
//     })
//
// }
//
// const data = false
//
// function usePlugin() {
//
// }
//
//
// export default {install}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // // const VPlugin = {}
// //
// // const getData = () => {
// //   return [{'Name': 'bugs'}]
// // }
// //
// // const install = (app, options) => {
// //   app.config.globalProperties.$plugin = getData()
// //   // app.$plugin = this
// //   app.provide('vPlugin', options)
// //   // console.log(app.config.globalProperties)
// //
// //   app.directive('highlight', {
// //     beforeMount(el, binding, vnode) {
// //       el.style.background = binding.value
// //     }
// //     // to use in compondent : <p v-highlight="'yellow'">xxx</p> this actually works
// //     })
// //
// //     // add(text, opts = {}) {
// //     //   let options = this.mergeOptions(opts);
// //     //   this.queue.push({ text, options });
// //     //   if(!this.visible) {
// //     //     this.showNext();
// //     //   }
// //     // },
// //
// //
// // }
// //
// // const data = false
// //
// // export default {install}
// //
// // // export default {
// // //
// // //   install: function(app){
// // //     app.config.globalProperties.$plugin = "hello"
// // //     // app.config.globalProperties.$plugin = () => {
// // //     //
// // //     // }
// // //    //  ,
// // //    //  app.directive('my-directive', {
// // //    //   mounted (el, binding, vnode, oldVnode) {
// // //    //     // some logic ...
// // //    //   }
// // //    //   //
// // //    // }),
// // //    //
// // //    //
// // //    //  app.mixin({
// // //    //    created() {
// // //    //      // some logic ...
// // //    //    }
// // //    //    //
// // //    //  }),
// // //    //  app.provide('VPlugin', options)
// // //    app.$plugin = this
// // //
// // //    return $plugin
// // //  },
// // //  update : function() {
// // //
// // //  },
// // //  greeting : function() {
// // //    "hello"
// // //  },
// // //  get: function() {
// // //    return {'Name': 'bugs'}
// // //  }
// // //
// // // }

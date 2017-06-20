/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

// Init Vue!
var app = new Vue({
  el: '#app',
  data: {
    showNote: false
  },
  methods: {
    msg: function () {
      this.showNote = true
      setTimeout(() => {
        this.showNote = false
      }, 1500)
    }
  }
})
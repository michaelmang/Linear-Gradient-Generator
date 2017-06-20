/**
 * Register Vue Components
 */

Vue.component('info', {
  template: '#info',
  methods: {
    animateNote: function () {
      this.showNote = false
    }
  }
})

Vue.component('gradient-card', {
  template: '#gradient-card',
  mounted: function () {
    var clipboard = new Clipboard('.gradient-card')
  },
  props: ['gradient1', 'gradient2'],
  data: function () {
    return {
      showNote: true,
      gradient: {
        background: 'linear-gradient(45deg,' + this.gradient1 + ',' + this.gradient2 + ')'
      },
      color1: {
        color: this.gradient1
      },
      color2: {
        color: this.gradient2
      }
    }
  },
  methods: {
    success: function () {
      this.$emit('success')
    }
  }
})


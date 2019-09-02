<template>
  <button
    @click="clicked"
    :style="checkedStyle"
    style="color: white; margin:10px; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 18px;"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    checked: { type: Boolean, default: false },
    master: { default: null },
    value: { default: null }
  },
  methods: {
    clicked: function(evnt) {
      this.$emit("click", evnt);
    }
  },
  computed: {
    checkedStyle: function() {
      if (this.master !== null) {
        return this.value === this.master
          ? "background: #4CAF50"
          : "background: #2196F3";
      }
      return this.checked ? "background: #4CAF50" : "background: #2196F3";
    }
  }
};
</script>
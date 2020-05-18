<template>
  <transition
    name="ay-dialog-show"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @after-leave="afterLeave"
  >
    <div class="ay-dialog-wrapper" v-show="visible" @click.self="closeDialog">
      <div class="ay-dialog" :style="{width, marginTop: top}">
        <div class="ay-dialog_header">
          <slot name="dialog-header">
            <div>{{title}}</div>
            <i class="fa fa-times" @click="closeDialog" v-if="showClose"></i>
          </slot>
        </div>
        <div class="ay-dialog_body">
          <slot></slot>
        </div>
        <div class="ay-dialog_footer">
          <slot name="dialog-footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ayDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    closeDialog() {
      this.$emit('update:visible', false)
    },
    beforeEnter() {
        this.$emit('open')
    },
    afterEnter() {
        this.$emit('opened')
    },
    beforeLeave() {
        this.$emit('close')
    },
    afterLeave() {
      this.$emit('closed')
    }
  }
}
</script>

<style lang="scss">
.ay-dialog-show-enter-active {
  animation: dialog-fade-in 0.4s;
}

.ay-dialog-show-leave-active {
  animation: dialog-fade-out 0.4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
.ay-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
  .ay-dialog {
    position: relative;
    margin: 50px auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 50%;
  }
  .ay-dialog_header {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 10px;
  }
  .ay-dialog_body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  .ay-dialog_footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
  }
}
</style>
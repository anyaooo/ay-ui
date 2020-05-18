<template>
  <button
    :class="['ay-button', `ay-button--${type}`, disabled ? 'ay-button-disabled is-disabled' : '', plain? 'is-plain' : '']"
    :type="type"
    @click="handlerClick"
  >
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handlerClick() {
        this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.ay-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.ay-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.ay-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.ay-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.ay-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.ay-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.ay-button.ay-button-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.ay-button--default.ay-button-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.ay-button--primary.ay-button-disabled {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.ay-button--success.ay-button-disabled {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.ay-button--info.ay-button-disabled {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.ay-button--warning.ay-button-disabled {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.ay-button--danger.ay-button-disabled {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
.ay-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.ay-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}
.ay-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.ay-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}
.ay-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}
.ay-button--primary.is-plain.is-disabled {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.ay-button--success.is-plain.is-disabled {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.ay-button--info.is-plain.is-disabled {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}
.ay-button--warning.is-plain.is-disabled {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.ay-button--danger.is-plain.is-disabled {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}
</style>
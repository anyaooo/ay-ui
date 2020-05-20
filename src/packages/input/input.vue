<template>
  <div>
    <div class="ay-input">
      <input
        :type="setType()"
        :value="value"
        @input="handlerInput"
        :disabled="disabled"
        class="ay-input_inner"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :minlength="minlength"
      />
      <div class="ay-input-icon">
        <i class="fa fa-times clear" aria-hidden="true" v-if="clearable && value" @click="clear"></i>
        <i class="fa fa-eye show-password" v-if="showPassword" @click="handlerShowPassword"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ayInput',
  props: {
    value: null,
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: null
    },
    minlength: {
      type: Number,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      changePwd: false
    }
  },
  methods: {
    handlerInput(e) {
      this.$emit('input', e.target.value)
    },
    clear() {
      this.$emit('input', '')
    },
    handlerShowPassword() {
      this.changePwd = !this.changePwd
    },
    setType() {
      const type = this.type
      if (this.showPassword && type === 'password') {
        return this.changePwd ? 'text' : 'password'
      }
      return this.type
    }
  }
}
</script>

<style lang="scss">
.ay-input {
  position: relative;
  width: 180px;
  .ay-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }

  .ay-input-icon {
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
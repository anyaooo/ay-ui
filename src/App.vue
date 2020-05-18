<template>
  <div id="app">
    <div class="row">
      <ay-button disabled>默认按钮</ay-button>
      <ay-button type="primary" disabled >主要按钮</ay-button>
      <!-- <ay-button type="success">成功按钮</ay-button>
      <ay-button type="info">信息按钮</ay-button>
      <ay-button type="warning">警告按钮</ay-button>
      <ay-button type="danger">危险按钮</ay-button> -->
    </div>
    <div class="row">
      <ay-button disabled>默认按钮</ay-button>
      <ay-button type="primary" disabled plain>主要按钮</ay-button>
      <!-- <ay-button type="success" plain>成功按钮</ay-button>
      <ay-button type="info" plain>信息按钮</ay-button>
      <ay-button type="warning" plain>警告按钮</ay-button>
      <ay-button type="danger" plain>危险按钮</ay-button> -->
    </div>
    <ay-input v-model="val" show-password type="password" placeholder="输入"></ay-input>
    <ay-input v-model="val" clearable placeholder="输入"></ay-input>
    <ay-button @click="dialogVisible = true">显示dialog</ay-button>
    <ay-dialog title="提示。。" :visible.sync="dialogVisible" width="30%" :show-close="true" @open="dialogOpen">
      <div>一段文本。。。</div>
      <!-- <div slot="dialog-footer">
        <button>取消</button>
        <button>确定</button>
      </div>-->
      <!-- <template v-slot:dialog-footer>
        <ay-button>取消</ay-button>
        <ay-button>确定</ay-button>
      </template> -->
    </ay-dialog>
  </div>
</template>

<script>
import ayButton from '@/packages/button'
import ayInput from '@/packages/input'
import ayDialog from '@/packages/dialog'
export default {
  components: {
    ayButton,
    ayInput,
    ayDialog
  },
  data() {
    return {
      val: '',
      dialogVisible: false
    }
  },
  created() {
    window.aaa = this
  },
  methods: {
    dialogOpen() {
      console.log('打开dialog')
    }
  }
}
</script>

<style lang="scss">
.row {
  display: flex;
}
</style>

<template>
  <div id="app">
    <!-- <div class="row">
      <ay-button disabled>默认按钮</ay-button>
      <ay-button type="primary" disabled >主要按钮</ay-button>
      <ay-button type="success">成功按钮</ay-button>
      <ay-button type="info">信息按钮</ay-button>
      <ay-button type="warning">警告按钮</ay-button>
      <ay-button type="danger">危险按钮</ay-button>
    </div>
    <div class="row">
      <ay-button disabled>默认按钮</ay-button>
      <ay-button type="primary" disabled plain>主要按钮</ay-button>
      <ay-button type="success" plain>成功按钮</ay-button>
      <ay-button type="info" plain>信息按钮</ay-button>
      <ay-button type="warning" plain>警告按钮</ay-button>
      <ay-button type="danger" plain>危险按钮</ay-button>
    </div>
    <ay-input v-model="val" show-password type="password" placeholder="输入"></ay-input>
    <ay-input v-model="val" clearable placeholder="输入"></ay-input>
    <ay-button @click="dialogVisible = true">显示dialog</ay-button>
    <ay-dialog title="提示。。" :visible.sync="dialogVisible" width="30%" :show-close="true" @open="dialogOpen">
      <div>一段文本。。。</div>
      <template v-slot:dialog-footer>
        <ay-button>取消</ay-button>
        <ay-button type="success">确定</ay-button>
      </template>
    </ay-dialog>-->
    <!-- <ay-table :head="tableConf.head" :data="tableConf.data"></ay-table>
    <div style="height: 30px"></div>
    <ay-table :head="tableConf.head" :data="tableConf.data" border stripe></ay-table>
    <div style="height: 30px"></div> -->
    <ay-table
      :head="tableConf.head"
      :data="tableConf.data"
      border
      :row-class-name="tableRowClassName"
    ></ay-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
      dialogVisible: false,
      tableConf: {
        head: [
          {
            prop: 'date',
            label: '日期',
          },
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'address',
            label: '地址',
          },
          {
            prop: 'province',
            label: '省份',
          },
          {
            prop: 'city',
            label: '市区',
          },
          {
            prop: 'zip',
            label: '邮编',
            width: 400,
            children: [
              {
                label: '1',
                prop: 'one'
              },
              {
                label: '2',
                children: [
                  {
                    label: '3',
                    prop: 'three'
                  },
                  {
                    label: '4',
                    prop: 'four'
                  }
                ]
              },
            ]
          }
        ],
        data: [
          {
            date: '2016-7-7',
            name: '王小虎',
            address: 'xxxxx',
            province: '四川',
            one: '111',
            three: '333',
            four: '444'
          },
          {
            date: '2016-7-7',
            name: '王小虎',
            address: 'xxxxx'
          },
          {
            date: '2016-7-7',
            name: '王小虎',
            address: 'xxxxx'
          },
          {
            date: '2016-7-7',
            name: '王小虎',
            address: 'xxxxx'
          },
          {
            date: '2016-7-7',
            name: '王小虎',
            address: 'xxxxx'
          }
        ]
      }
    }
  },
  created() {
    window.aaa = this
  },
  methods: {
    dialogOpen() {
      console.log('打开dialog')
    },
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.row {
  display: flex;
}

.ay-table .warning-row {
  background: oldlace;
}

.ay-table .success-row {
  background: #f0f9eb;
}
</style>

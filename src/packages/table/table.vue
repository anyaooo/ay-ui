<template>
  <div class="ay-table-wrapper">
    <div class="ay-table" :style="setTableStyle()">
      <div class="ay-table-thead" :style="tableHeight? {height: 'fit-content'} : ''" ref="ayThead">
        <div class="ay-table-tr">
          <div
            class="ay-table-td"
            v-for="(col, i) in head"
            :key="col.prop || i"
            :style="setTheadTdStyle(col)"
          >
            <div class="cell">{{col.label}}</div>
          </div>
          <div
            v-if="tableHeight && scrollBar"
            style="width: 16px; box-sizing: border-box; margin-right: 1px"
            :style="border ? {borderRight: '1px solid #ebeef5', borderBottom: '1px solid #ebeef5'} : ''"
          ></div>
        </div>
      </div>
      <div class="ay-table-tbody-wrapper">
        <div class="ay-table-tbody" ref="ayTbody">
          <div class="ay-table-tr" v-for="(row, i) in tableData" :key="i">
            <div
              class="ay-table-td"
              v-for="(col, j) in head"
              :key="col.prop || j"
              :class="row.rowClassName"
              :style="setTbodyTdStyle(row, i, col)"
            >
              <div class="cell">{{row[col.prop]}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ayTable',
  props: {
    head: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    rowClassName: {
      type: Function,
      default: null
    },
    height: {
      type: String,
      default: null
    },
    tableWidth: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      scrollBar: false,
      fixedRight: [],
      fixedLeft: []
    }
  },
  methods: {
    setTableStyle() {
      const obj = {}
      if (this.height) {
        obj.height = this.height + 'px'
      }
      if(this.tableWidth) {
        obj.width = this.tableWidth + 'px'
      }
      return this.border
        ? Object.assign(obj, {
            borderLeft: '1px solid #ebeef5',
            borderTop: '1px solid #ebeef5'
          })
        : obj
    },
    setTheadTdStyle({ width }) {
      const obj = {}
      if (width) {
        obj.width = width + 'px'
        obj.flex = 'unset'
      }
      return this.border
        ? Object.assign(obj, { borderRight: '1px solid #ebeef5', borderTop: 0 })
        : Object.assign(obj, { borderTop: '1px solid #ebeef5' })
    },
    setTbodyTdStyle({ rowClassName }, i, { width }) {
      const obj = {}
      if (width) {
        obj.width = width + 'px'
        obj.flex = 'unset'
      }
      if (this.border) {
        obj.borderRight = '1px solid #ebeef5'
      }
      return rowClassName
        ? obj
        : Object.assign(obj, {
            background: i % 2 === 0 && this.stripe ? '#fafafa' : '#fff'
          })
    },
    setScrollBar() {
      const height = this.tableHeight
      if (height) {
        if (
          height <=
          this.$refs.ayThead.offsetHeight + this.$refs.ayTbody.offsetHeight
        ) {
          this.scrollBar = true
        } else {
          this.scrollBar = false
        }
      }
    }
  },
  computed: {
    tableData() {
      if (this.rowClassName) {
        return this.data.map((row, rowIndex) => {
          const rowClassName = this.rowClassName({ row, rowIndex })
          return Object.assign({ rowClassName }, row)
        })
      }
      return this.data
    },
    tableHeight() {
      if (this.height) {
        this.$nextTick(() => {
          this.setScrollBar()
        })
      }
      return this.height
    }
  }
}
</script>

<style lang="scss">
div {
  box-sizing: border-box;
}
.ay-table-wrapper {
  overflow-y: hidden;
  overflow-x: auto;
  width: fit-content;
  width: 100%;
  .ay-table,
  .ay-table-thead,
  .ay-table-tbody-wrapper,
  .ay-table-tbody {
    width: 100%;
  }
  .ay-table {
    display: flex;
    flex-direction: column;
  }
  .ay-table-tbody-wrapper {
    flex: 1;
    overflow-y: auto;
  }
  .ay-table-tr {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    border-left: 1px solid #ebeef5;
  }
  .ay-table-td {
    flex: 1;
  }
  .ay-table-thead .ay-table-td {
    border-top: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
  }
  .ay-table-tbody .ay-table-td {
    border-bottom: 1px solid #ebeef5;
  }
  .cell {
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .ay-table-thead .cell {
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    padding: 10px;
    width: 100%;
    font-weight: normal;
  }
  .ay-table-tbody .cell {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
<template>
    <H1>当前表格数量 {{ tableData.length }}</H1>
    <el-input v-model="addNum" style="width: 100px"></el-input>
    <el-button @click="addData(300)">加数据{{ addNum }}</el-button>
    <br/>
    <el-input v-model="subNum" style="width: 100px"></el-input>
    <el-button @click="subData">减少数据 {{ subNum }}</el-button>
    <el-table
        max-height="500"
        :data="tableData"
        style="width: 100%;border: 1px solid red">
      <el-table-column
          prop="id"
          label="id"
          width="180">
      </el-table-column>
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column label="爱好">
        <template v-slot="scope">
          <el-select v-model="scope.row.aihao" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
    </el-table>


    <li v-for="(item,index) in indoorParams" :key="index">
      //其他代码。。。
      <div class="animate-border">
        <i></i>
        <i></i>
      </div>
    </li>


</template>

<script>


export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      indoorParams: [2,3,4],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '选项5',
      addNum: 100,
      subNum: 100,

    }

  },
  mounted() {
    this.tableData = []

    for (let i = 0; i < 10; i++) {
      let item = {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        id: i,
        aihao: '选项5'
      }
      this.tableData.push(item)
    }
  },
  methods: {
    addData() {
      for (let i = 0; i < this.addNum; i++) {
        let item = {
          date: '2016-05-03',
          name: `王小虎${this.tableData.length}--${i}`,
          address: '上海市普陀区金沙江路 1516 弄',
          id: this.tableData.length + i,
          aihao: '选项3'
        }
        this.tableData.push(item)

      }
    },
    subData() {
      this.tableData.splice(0, this.subNum)

    },

  }
}
</script>

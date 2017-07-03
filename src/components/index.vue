<template>
   <div class="index_w">
      <div class="top_add"><img src="../assets/images/add.png" alt="" @click="edit()"></div>
   
    
   <div v-for="information in informations" class="weui_cells weui_cells_access weui_add">
      <a class="weui_cell" href="javascript:;">
         <div class="weui_cell_bd weui_cell_primary">
            <p class="code_m">{{ information.Employee_code }}</p>
            <p class="name_o"><span>{{ information.Chinese_name }}</span><span>{{ information.English_name }}</span></p>
         </div>
        <div class="weui_cell_ft">
        </div>
      </a>
    </div>   
 </div>
</template>

<script>
export default {
  data () {
    return {
      informations: [
      {
        Employee_code: '员工编码：7566775556',
        Chinese_name: '中文名：张高山',
        English_name: '英文名：Mountain'
      },
      {
        Employee_code: '员工编码：72634523421',
        Chinese_name: '中文名：张流水',
        English_name: '英文名：Mountain'
      },
      {
        Employee_code: '员工编码：341242352',
        Chinese_name: '中文名：张翠山',
        English_name: '英文名：Mountain'
      },
      {
        Employee_code: '员工编码：341242352',
        Chinese_name: '中文名：张翠山',
        English_name: '英文名：Mountain'
      },
      {
        Employee_code: '员工编码：3452542',
        Chinese_name: '中文名：张无忌',
        English_name: '英文名：Mountain'
      },
      {
        Employee_code: '员工编码：3452542',
        Chinese_name: '中文名：张无忌',
        English_name: '英文名：Mountain'
      },
      {
        Employee_code: '员工编码：3452542',
        Chinese_name: '中文名：张无忌',
        English_name: '英文名：Mountain'
      },
      {
        Employee_code: '员工编码：3452542',
        Chinese_name: '中文名：张无忌',
        English_name: '英文名：Mountain'
      },
      {
        Employee_code: '员工编码：3452542',
        Chinese_name: '中文名：张无忌',
        English_name: '英文名：Mountain'
      }
     ]
    }
  },
  methods: {
    edit () {
      this.$router.push({ path: '/edit' })
    }
  }
}
</script>
<style>
.code_m{
  color: #04be02;
}
.top_add {
  width: 100%;
  height: 50px;
  text-align: right;
}
.top_add img {
  width: 30px;
  margin-top: 10px;
  margin-right: 5px;
}
.weui_add {
  border-top: none;
  margin-top: 0px;
}
.name_o {
  font-size: small;
}
.name_o span{
  margin-right: 10px;
  color: #909191;
}
</style>

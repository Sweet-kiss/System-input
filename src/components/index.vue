<template>
   <div class="index_w">
      <div class="top_add"><img src="../assets/images/add.png" alt="" @click="edit()"></div>
   
    
   <div v-for="information in informations" @click="check(information.path)" class="weui_cells weui_cells_access weui_add">
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
      informations: []
    }
  },
  created () {
    let _this = this
    this.$http.get('/api/informations').then((response) => {
      console.log(JSON.stringify(response))
      _this.informations = response.body.data
    });
  },
  methods: {
    edit () {
      this.$router.push({ path: '/edit' })
    },
    check (url) {
      this.$router.push({ path: '/detail', query: { url: url } })
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

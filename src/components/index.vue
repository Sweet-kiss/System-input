<template>
  <div class="index_w">
    <div class="top_add"><img src="../assets/images/add.png" alt="" @click="edit()"></div>
    <mt-index-list>
      <mt-index-section v-for="value in informations" :index="value.name">
        <div v-for="item in value.list" @click="check(item.path)" class="weui_cells weui_cells_access weui_add">
          <a class="weui_cell" href="javascript:;">
             <div class="weui_cell_bd weui_cell_primary">
                <p class="code_m">{{ item.Employee_code }}</p>
                <p class="name_o"><span>{{ item.Chinese_name }}</span><span>{{ item.English_name }}</span></p>
             </div>
            <div class="weui_cell_ft">
            </div>
          </a>
        </div>
      </mt-index-section>
    </mt-index-list>
 </div>
</template>

<script>
export default {
  data () {
    return {
      informations: [],
      list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  },
  created () {
    let _this = this
    this.$http.get('/api/informations').then((response) => {
      // console.log(JSON.stringify(response))
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

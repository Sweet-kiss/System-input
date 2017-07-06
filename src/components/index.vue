<template>
  <div class="index_w">
    <div class="top_add">
      <div class="button_sp_area">
        <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary" @click="chose()">按钮</a>
      </div>
      <span class="img_add"><img src="../assets/images/add.png" alt="" @click="edit()"></span>
    </div>
    <mt-index-list>
      <mt-index-section v-for="(value, key) in list" :index="key" v-if="value.length>0">
        <div v-for="item in value" @click="check(item)" class="weui_cells weui_cells_access weui_add">
          <a class="weui_cell" href="javascript:;">
             <div class="weui_cell_bd weui_cell_primary">
                <p class="code_m">{{ item.code }}</p>
                <p class="name_o"><span>{{ item.name }}</span><span>{{ item.enName }}</span></p>
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
      talent:[],
       list: {'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': [], 'G': [], 'H': [], 'I': [], 'J': [], 'K': [], 'L': [], 'M': [], 'N': [], 'O': [], 'P': [], 'Q': [], 'R': [], 'S': [], 'T': [], 'U': [], 'V': [], 'W': [], 'X': [], 'Y': [], 'Z': []}
    }
  },
  created () {
    let _this = this
    this.$http.get('http://121.40.75.24:8010/api/sodexo/getTalent?type=1').then((response) => {
      // console.log(JSON.stringify(response.body.talent))
      _this.talent = response.body.talent
      // console.log(response)
      // _this.talent = _this.talent.sort(this.compare('enName'))
      // console.log(JSON.stringify(_this.talent))
      for (var i=0; i<_this.talent.length; i++) {
        _this.list[_this.talent[i].enName.substring(0, 1).toUpperCase()].push(_this.talent[i])
      }
      console.log(JSON.stringify(_this.list))
    })
  },
  methods: {
    edit () {
      this.$router.push({ path: '/edit' })
   },
    chose () {
    this.$router.push({ path: '/BatchAudit' })
   },
    check (item) {
      this.$router.push({ path: '/detail', query: { item: item } })
    },
    compare(prop){

      return function (obj1, obj2) {
          var val1 = obj1[prop]
          var val2 = obj2[prop]
          if (val1 < val2) {
              return -1
          } else if (val1 > val2) {
              return 1
          } else {
              return 0
          }            
      } 
    }
  }
}
</script>
<style> 
.index_w {
  position: relative;
}
.top_add {
  width: 90%;
  margin: 10px auto;
  height: 40px;
}
.code_m{
  color:#26a2ff;
  font-size: 18px;
}
.img_add {
  display: inline-block;
  float: right;
  width: 30px;
  height: 50px;
}
.img_add img {
  width: 100%;

}
.weui_add {
  border-top: none;
  margin-top: 0px;
}
.name_o {
  font-size: 17px;
}
.name_o span{
  margin-right: 10px;
  color: #909191;
}
</style>

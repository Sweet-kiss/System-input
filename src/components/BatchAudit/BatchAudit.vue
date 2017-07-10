<template>
  <div class="index_w">
   <div class="top_w">
      <input class="back" type=button value="<" onclick="window.history.go(-1)">批量审核

      <input type="submit" class="sub_c" @click="alert()" value="提交">
     </div>
     <div class="chose_all">
     <mt-button type="default" @click="selectAll()">全选</mt-button>
     </div>

    <mt-index-list>
      <mt-index-section v-for="(value, key) in list" :index="key" v-if="value.length>0">
        <div v-for="item in value" class="weui_cells weui_cells_access weui_add">
          <a class="weui_cell" href="javascript:;">
            <p class="checkbox_RR"><input class="check_b"  style="width:25px;height:25px;margin-top:10px;background-color:#fff" name="Fruit" type="checkbox" v-model="selecteds" :value="item.talentid" /></p>
             <div class="weui_cell_bd weui_cell_primary" @click="check(item)">
               <p class="code_m">{{ item.code }}</p>
                <p class="name_o"><span>{{ item.name }}</span><span>{{ item.enName }}</span></p>
             </div>
            <div class="weui_cell_ft">
            </div>
          </a>
        </div>
      </mt-index-section>
    </mt-index-list>
<div class="alert_w">
  <p>提交成功</p>
</div>

</div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      informations: [],
      talent:[],
       list: {'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': [], 'G': [], 'H': [], 'I': [], 'J': [], 'K': [], 'L': [], 'M': [], 'N': [], 'O': [], 'P': [], 'Q': [], 'R': [], 'S': [], 'T': [], 'U': [], 'V': [], 'W': [], 'X': [], 'Y': [], 'Z': []},
       ids: [],
       selecteds: []
    }
  },
  created () {
    let _this = this
    this.$http.get('http://121.40.75.24:8010/api/sodexo/getTalent?type=2').then((response) => {
      console.log(JSON.stringify(response.body))
      _this.talent = response.body.talent
      // console.log(response)
      // _this.talent = _this.talent.sort(this.compare('enName'))
      // console.log(JSON.stringify(_this.talent))
      for (var i=0; i<_this.talent.length; i++) {
        _this.list[_this.talent[i].enName.substring(0, 1).toUpperCase()].push(_this.talent[i])
        _this.ids.push(_this.talent[i].talentid)
      }
      console.log(JSON.stringify(_this.list))
    })
  },
  methods: {
    edit () {
      this.$router.push({ path: '/edit' })
   },
   selectAll () {
    this.selecteds = this.ids
       // $(".check_b").attr("checked", true)
       // console.log($("#check_b").attr)
   },
    alert () {
      let result = []
      for (let i=0; i<this.selecteds.length; i++) {
        let tmp = {id: this.selecteds[i]}
        result.push(tmp)
      }
      this.$http.post('http://121.40.75.24:8010/api/sodexo/updateTalent', {batch: 'true',comments: result}).then((response) => {
        if (response.body) {
          Toast({
            message: '提交成功！',
            position: 'center',
            duration: 5000
          })
        }
      }, (response) => {})
       
    },
    check (item) {
      this.$router.push({ path: '/twoRemarks', query: { item: item } })
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
.top_w {
  position: relative;
  font-size: 19px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #26a2ff;
  border-bottom: #ccc solid 1px;
}
.back {
  position: absolute;
  display: inline-block;
  top:-1px;
  left: 8px;
  width: 28px;
  background-color: white;
  border-bottom: #ccc solid 1px;
}
.back img {
  width: 100%;
}


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

.checkbox_RR {
  width: 40px;
}

.chose_all {
  text-align: left;
}
.sub_c {
  position: absolute;
  display: inline-block;
  width: 60px;
  background-color: #f6f8fa;
  color:#909191;
  top:-1px;
  right: -1px;
}
.alert_w {
  display: none;
  position: absolute;
  width: 40%;
  background-color: yellow;
  padding: 30px 0px;
  text-align: center;
  left: 30%;
  top:40%;

}
</style>

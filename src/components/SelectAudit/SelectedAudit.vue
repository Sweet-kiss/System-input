<template>
 <div>
        <div class="nav">
            <mt-button id="tab-container1-btn" size="small" @click="test('tab-container1')" style="color: red">审核1</mt-button>
            <mt-button id="tab-container2-btn" size="small" @click="test('tab-container2')">审核2</mt-button>
            
        </div>
        <div class="page-tab-container" >
            <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable value="tab-container1">
                <mt-tab-container-item id="tab-container1" >
                    
<div class="Edit_w">

  <div class="weui_cells_title language">语言222</div>
  <div class="weui_cell weui_cell_select">
    <div class="weui_cell_bd weui_cell_primary">
       <select class="weui_select select_u" name="select1" v-model="detail.language" >
          <option value="中文">中文</option>
          <option value="日语">日语</option>
          <option value="英语">英语</option>
          <option value="法语">法语</option>
       </select>
  </div>
</div>

<div class="top_add2">
           <span class="text_y">是否愿意调动？</span>
       <div class="switch_b">
        <mt-switch name="Desire"  v-model="detail.Desire"></mt-switch>
       </div>
</div>

<div class="weui_cells_title adress">那些地点？</div>
<div class="weui_cells weui_cells_form">
      <div class="weui_cell">
           <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea weUI_TT">{{detail.place}}</textarea>
           </div>
     </div>
</div>
<mt-radio
  align="right"
  title="角色挑战度"
  v-model="detail.Dekaron"
  :options="['高', '低']">
</mt-radio>

<mt-radio
  align="right"
  title="保留风险"
  v-model="detail.Dekaron"
  :options="['高', '低']">
</mt-radio>

<div class="weui_cells_title language">潜力等级：</div>
<div class="weui_cell weui_cell_select">
    <div class="weui_cell_bd weui_cell_primary">
       <select class="weui_select select_u" name="select1" v-model="detail.potential">
          <option value="一级<">一级</option>
          <option value="二级">二级</option>
          <option value="三级">三级</option>
          <option value="四级">四级</option>
       </select>
  </div>
</div>


<div class="weui_cells_title language">绩效结果：</div>
<div class="weui_cell weui_cell_select">
    <div class="weui_cell_bd weui_cell_primary">
       <select class="weui_select select_u" name="select1" v-model="detail.Achievements">
          <option value="一般">一般</option>
          <option value="良好">良好</option>
          <option value="满意">满意</option>
        </select>
  </div>
</div>

 <div class="weui_cells_title adress">强项</div>
<div class="weui_cells weui_cells_form">
      <div class="weui_cell">
           <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea weUI_TT">{{detail.Strengths}}</textarea></textarea>
           </div>
     </div>
</div>

<div class="weui_cells_title adress">需要发展区域</div>
<div class="weui_cells weui_cells_form">
      <div class="weui_cell">
           <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea weUI_TT">{{detail.Development}}</textarea>
           </div>
     </div>
</div>

<div class="weui_cells_title adress">行动计划（角色，培训，职责）</div>
<div class="weui_cells weui_cells_form">
      <div class="weui_cell">
           <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea weUI_TT">{{detail.plan}}</textarea>
           </div>
     </div>
</div>

<div class="weui_cells_title adress">长期发展需求</div>
<div class="weui_cells weui_cells_form">
      <div class="weui_cell">
           <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea weUI_TT">{{detail.demand}}</textarea>
           </div>
     </div>
</div>

  <div class="container">
     <a href="javascript:;" class="weui_btn weui_btn_primary">保存</a>
  </div>
</div>



                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                
<div class="Edit_w">

  <div class="weui_cells_title language">语言</div>
  <div class="weui_cell weui_cell_select">
    <div class="weui_cell_bd weui_cell_primary">
       <select class="weui_select select_u" name="select1" v-model="detail.language" >
          <option value="中文">中文</option>
          <option value="日语">日语</option>
          <option value="英语">英语</option>
          <option value="法语">法语</option>
       </select>
  </div>
</div>

<div class="top_add2">
           <span class="text_y">是否愿意调动？</span>
       <div class="switch_b">
        <mt-switch name="Desire"  v-model="detail.Desire"></mt-switch>
       </div>
</div>

<div class="weui_cells_title adress">那些地点？</div>
<div class="weui_cells weui_cells_form">
      <div class="weui_cell">
           <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea weUI_TT">{{detail.place}}</textarea>
           </div>
     </div>
</div>
<mt-radio
  align="right"
  title="角色挑战度"
  v-model="detail.Dekaron"
  :options="['高', '低']">
</mt-radio>

<mt-radio
  align="right"
  title="保留风险"
  v-model="detail.Dekaron"
  :options="['高', '低']">
</mt-radio>

<div class="weui_cells_title language">潜力等级：</div>
<div class="weui_cell weui_cell_select">
    <div class="weui_cell_bd weui_cell_primary">
       <select class="weui_select select_u" name="select1" v-model="detail.potential">
          <option value="一级<">一级</option>
          <option value="二级">二级</option>
          <option value="三级">三级</option>
          <option value="四级">四级</option>
       </select>
  </div>
</div>


<div class="weui_cells_title language">绩效结果：</div>
<div class="weui_cell weui_cell_select">
    <div class="weui_cell_bd weui_cell_primary">
       <select class="weui_select select_u" name="select1" v-model="detail.Achievements">
          <option value="一般">一般</option>
          <option value="良好">良好</option>
          <option value="满意">满意</option>
        </select>
  </div>
</div>

 <div class="weui_cells_title adress">强项</div>
<div class="weui_cells weui_cells_form">
      <div class="weui_cell">
           <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea weUI_TT">{{detail.Strengths}}</textarea></textarea>
           </div>
     </div>
</div>

<div class="weui_cells_title adress">需要发展区域</div>
<div class="weui_cells weui_cells_form">
      <div class="weui_cell">
           <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea weUI_TT">{{detail.Development}}</textarea>
           </div>
     </div>
</div>

<div class="weui_cells_title adress">行动计划（角色，培训，职责）</div>
<div class="weui_cells weui_cells_form">
      <div class="weui_cell">
           <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea weUI_TT">{{detail.plan}}</textarea>
           </div>
     </div>
</div>

<div class="weui_cells_title adress">长期发展需求</div>
<div class="weui_cells weui_cells_form">
      <div class="weui_cell">
           <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea weUI_TT">{{detail.demand}}</textarea>
           </div>
     </div>
</div>

  <div class="container">
     <a href="javascript:;" class="weui_btn weui_btn_primary">保存</a>
  </div>
</div>


                </mt-tab-container-item>
               
            </mt-tab-container>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'page-tab-container',
        data() {
            return {
                active: "tab-container1",
                detail: {
        place: '',
        language: '',
        potential: '',
        Achievements: '',
        Desire: '',
        risk: '',
        Dekaron: ''
      }
            }
        },
        methods:{
            test(id){
                this.active = id
                console.log(this.active)
            }
        },
        created () {
          var _this = this
          this.$http.get('/api'+this.$route.query.url).then((response) => {
            console.log(JSON.stringify(response))
            _this.detail = response.body.data[0]
          })
        },
        watch: {
          active () {
            if (this.active == 'tab-container1') {
              document.getElementById('tab-container1-btn').style.color = 'red'
              document.getElementById('tab-container2-btn').style.color = 'black'
            } else {
              document.getElementById('tab-container2-btn').style.color = 'red'
              document.getElementById('tab-container1-btn').style.color = 'black'
            }
          }
        }
    // }
  }
</script>

<style>
.Edit_w {
  padding-bottom: 20px;
}
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
.mess_list li {
  display: flex;
  height: 33px;
  line-height: 33px;
  font-size: 18px;
}
.mess_list li span {
  display: flex;
  width: 140px;
   color: #6f6f70;
}
.mess_list li i {
  font-style: normal;
  flex: 1;
  width: 140px;
   color: #6f6f70;
}
.top_add2 {
  display: flex;
  height: 40px;
 margin-top: 20px;
 border-bottom: #e4e4e4 solid 1px;
}
.text_y {
  flex:1;
  font-size: 18px;
  text-indent: 14px;
 }
.switch_b {
  display: flex;
  width: 70px;
  margin-top: -25px;
}

.y_x {
  margin-left: 5px;
  margin-right: 15px;
}
.y_f {
  margin-left: 5px;
}
.Input_box {
  width: 90%;
  margin: 8px auto;
} 
.Input_box p {
 margin-bottom: 6px;
}
.weui_cells_title {
  background-color: #f9f9f9;
  height: 40px;
  line-height: 40px;
  margin-bottom: 0px;
  margin-top: 0px;
}
.language {
  font-size: 18px;
   color: black;
}
.select_u {
  color: #7b7c7d;
  border-bottom: #eaeaea solid 1px;
}
.adress {
  font-size: 18px;
  color: black;
}
.high_d {
  font-size: 18px;
  color: black;
}
.mint-radiolist-title {
  font-size: 18px;
  color: black;
}
.weui_btn_primary {
  background-color: #26a2ff !important;
}
.mint-radiolist-title {
  background-color: #f9f9f9;
  height: 40px;
  line-height: 40px;
  text-indent: 14px;
  width: 100%;
  margin-left: 0px;
  margin: 0px 0px;
}
.weUI_TT {
  color: #a1a1a0;
}
.nav {
  display: flex;
}
.mint-button--small {
  width: 50%;
  font-size: 20px;
  height: 40px;
  border-radius: none;
}
.mint-button {
  border-radius: 0px;
}

</style>

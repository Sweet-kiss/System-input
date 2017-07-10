<template>
  <div class="Edit_w">
     <div class="top_w"><input class="back" type=button value="<" onclick="window.history.go(-1)">个人信息录入</div>
     <div class="container">
      <ul class="mess_list">
      <li>
         <span>直线主管：</span>
         <i>{{info.lineManager}}</i>
      </li>
      <li>
         <span>RD区域总监：</span>
         <i>{{info.rd}}</i>
      </li>
      <li>
         <span>AM：</span>
         <i>{{info.am}}</i>
      </li>
      <li>
         <span>所在营运点：</span>
         <i>{{info.ou}}</i>
      </li>
      <li>
         <span>员工编码：</span>
         <i>{{info.code}}</i>
      </li>
      <li>
         <span>中文名：</span>
         <i>{{info.name}}</i>
      </li>
      <li>
         <span>英文名：</span>
         <i>{{info.enName}}</i>
      </li>
      <li>
         <span>所在地：</span>
         <i>{{info.location}}</i>
      </li>
      <li>
         <span>细分市场/服务：</span>
         <i>{{info.segmentservice}}</i>
      </li>
      <li>
         <span>本岗时间：</span>
         <i>{{info.dateincurrentjob}}</i>
      </li>
      </ul>
     </div>
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
  v-model="detail.risk"
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
</template>

<script>
export default {
  data () {
    return {
      detail: {
        info: {},
        place: '',
        language: '',
        potential: '',
        Achievements: '',
        Desire: '',
        risk: '',
        Dekaron: '',
      }
    }
  },
  created () {
    console.log(JSON.stringify(this.$route.query.item))
    this.info = this.$route.query.item
  }
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
</style>

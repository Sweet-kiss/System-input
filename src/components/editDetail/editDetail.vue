<template>
  <div class="Edit_w">
  	 <div class="top_w"><input class="back" type=button value="<" onclick="window.history.go(-1)">个人信息录入</div>
  	 <div class="container">
  	  <ul class="mess_list">
  	 	<li>
         <span>直线主管：</span>
         <i>SL-20120200349刘丽</i>
      </li>
  	 	<li>
         <span>RD区域总监：</span>
         <i>RD-Alex.YANG</i>
      </li>
  	 	<li>
         <span>AM：</span>
         <i>AM-Alex.YANG</i>
      </li>
  	 	<li>
         <span>所在营运点：</span>
         <i>TS Lilly Research</i>
      </li>
  	 	<li>
         <span>员工编码：</span>
         <i>20111000679</i>
      </li>
  	 	<li>
         <span>中文名：</span>
         <i>夏鸣莹</i>
      </li>
  	 	<li>
         <span>英文名：</span>
         <i>20111000679</i>
      </li>
  	 	<li>
         <span>所在地：</span>
         <i>SH</i>
      </li>
  	 	<li>
         <span>细分市场/服务：</span>
         <i>COR</i>
      </li>
  	 	<li>
         <span>本岗时间：</span>
         <i>2014/8/1</i>
      </li>
  	  </ul>
  	 </div>
 <div class="weui_cells weui_cells_access top_add">
   <a class="weui_cell" href="javascript:;">
       <div class="weui_cell_bd weui_cell_primary">
            <p>语言：</p>
        </div>
		<span class="cur-select"></span> 
		<select class="language_c"> 
		<option>英语</option> 
		<option>中文</option> 
		<option>日语</option> 
		<option>法语</option> 
		</select> 
    </a>
  </div>

   <div class="weui_cells weui_cells_access top_add">
   <a class="weui_cell" href="javascript:;">
       <div class="weui_cell_bd weui_cell_primary">
            <p>是否愿意调动？</p>
        </div>
		  </label>
            <label class="i-switch i-switch-lg bg-dark m-t-xs m-r">
              <input type="radio" >
              <i></i>
            </label>
            <span class="y_x">是</span>
            <label class="i-switch i-switch-lg bg-dark m-t-xs m-r">
              <input type="radio"  >
              <i></i>
            </label>
            <span class="y_f">否</span>
    </a>
  </div>
  <div class="Input_box">
  	<p>哪些地点？</p>
  	<textarea name="" id="" cols="40" rows="3"></textarea>
  </div>


   <div class="weui_cells weui_cells_access top_add">
   <a class="weui_cell" href="javascript:;">
       <div class="weui_cell_bd weui_cell_primary">
            <p>角色挑战度</p>
        </div>
		  </label>
            <label class="i-switch i-switch-lg bg-dark m-t-xs m-r">
              <input type="radio" >
              <i></i>
            </label>
            <span class="y_x">高</span>
            <label class="i-switch i-switch-lg bg-dark m-t-xs m-r">
              <input type="radio" >
              <i></i>
            </label>
            <span class="y_f">低</span>
    </a>
  </div>

     <div class="weui_cells weui_cells_access top_add">
   <a class="weui_cell" href="javascript:;">
       <div class="weui_cell_bd weui_cell_primary">
            <p>保留风险</p>
        </div>
		  </label>
            <label class="i-switch i-switch-lg bg-dark m-t-xs m-r">
              <input type="radio" >
              <i></i>
            </label>
            <span class="y_x">高</span>
            <label class="i-switch i-switch-lg bg-dark m-t-xs m-r">
              <input type="radio" >
              <i></i>
            </label>
            <span class="y_f">低</span>
    </a>
  </div>

 <div class="weui_cells weui_cells_access top_add">
   <a class="weui_cell" href="javascript:;">
       <div class="weui_cell_bd weui_cell_primary">
            <p>潜力等级：</p>
        </div>
		<span class="cur-select"></span> 
		<select class="language_c"> 
		<option>一级</option> 
		<option>二级</option> 
		<option>三级</option> 
		<option>四级</option> 
		</select> 
    </a>
  </div>

   <div class="weui_cells weui_cells_access top_add">
   <a class="weui_cell" href="javascript:;">
       <div class="weui_cell_bd weui_cell_primary">
            <p>绩效结果：</p>
        </div>
		<span class="cur-select"></span> 
		<select class="language_c"> 
		<option>一般</option> 
		<option>良好</option> 
		<option>满意</option> 
		</select> 
    </a>
  </div>

  <div class="Input_box">
  	<p>强项</p>
  	<textarea name="" id="" cols="40" rows="3"></textarea>
  </div>

    <div class="Input_box">
  	<p>需要发展区域</p>
  	<textarea name="" id="" cols="40" rows="3"></textarea>
  </div>

    <div class="Input_box">
  	<p>行动计划（角色，培训，职责）</p>
  	<textarea name="" id="" cols="40" rows="3"></textarea>
  </div>

    <div class="Input_box">
  	<p>长期发展需求</p>
  	<textarea name="" id="" cols="40" rows="3"></textarea>
  </div>
  <div class="container">
     <a href="javascript:;" class="weui_btn weui_btn_primary">保存</a>
  </div>
</div>
</template>

<script>
export default {
  created () {
    this.$http.get('/api'+this.$route.query.url).then((response) => {
      console.log(JSON.stringify(response))
    });
  }
}
</script>

<style>
.top_w {
	position: relative;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #04be02;
	border-bottom: #ccc solid 1px;
}
.back {
	position: absolute;
	display: inline-block;
	top:-1px;
	left: 0px;
	width: 25px;
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
.top_add {
	margin-top: 10px;
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
.language_c {
  width: 100px;
  height: 30px;
  border: none;
}
</style>

<template>
 <div class="home_wrap">
  <div class="container btn_cc">
    <div class="one_c"  @click="oneAd()">一级审核</div>
    <div class="one_c" @click="twoAd()">二级审核</div>
  </div>
</div>
 </div>
</template>

<script>
export default {
  methods: {
    oneAd () {
    this.$router.push({ path: '/index' })
   },
    twoAd () {
    this.$router.push({ path: '/BatchAudit' })
   }
  }
}
</script>
<style>
.btn_cc {
  margin-top: 200px;
}
.one_c {
  background-color: #26a2ff;
  color: white;
  border-radius: 50px;
  text-align: center;
  padding: 30px;
  margin-bottom: 8px;
  font-size: 24px;
}
.one_c:active {
  background-color: yellow;
}

</style>

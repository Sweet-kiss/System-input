<template>
  <div id="detail">
    <h1>Detail</h1>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    created () {
      this.$http.get('/api'+this.$route.query.url).then((response) => {
        console.log(JSON.stringify(response.body.data))
      });
    }
  }
</script>

<style></style>

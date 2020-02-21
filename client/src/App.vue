<template>
  <div class="parent pt-3">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      isLogin: false,

    };
  },
  created() {
    if(localStorage.id){
      this.isLogin = true
    }
  }
}
</script>
<style>
.parent{
  height:100vh;
  width:90vw;
}
</style>

<template>
  <div class="parent pt-3">
    <div class="text-right pb-5" v-if="isLogin">
      <h3 style="color:white;"><i class="fab fa-github-alt"></i> {{user}} </h3>
    </div>
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
  },
  computed: {
    user() {
      return localStorage.name
    }
  },
}
</script>
<style>
.parent{
  height:100vh;
  width:90vw;
}
</style>

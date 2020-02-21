<template>
<div>
  <div class="text-right pb-5" v-if="isLogin">
      <h3 style="color:white;"><i class="fab fa-github-alt"></i> {{users}} </h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderName',
}
</script>

<style>

</style>
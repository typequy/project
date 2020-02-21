<template>
  <div class="d-flex justify-content-center semua" >
      <div class="login">
      <h1 style="font-family: 'Press Start 2P', cursive; color: white;">Type<i class="fas fa-skull-crossbones"></i>Quy</h1>
      <input type="text" v-model="name" placeholder="username" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"/>
      <input type="button" value="Start!" class="btn" @click="login"/>
    </div>
    <div class="image-tik">
      <img src="../../public/ngetik.gif" alt="">
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    login() {
      this.$http
        .post('api/users',{
          name: this.name
        })
        .then(res => {
          localStorage.setItem('id', res.data.user.id)
          localStorage.setItem('name', res.data.user.name)
          this.$toast.fire({
            icon: 'success',
            title: `welcome ${res.data.status}`
          })
          this.$router.push({name:'Room'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,300);
.image-tik {
  margin-left: 100px !important;
}
.semua {
  margin-top: 20vh;
}
body {
  background: #2C3138;
}
body, html {
  background: #2C3138 !important; /* #34495e */
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
}
.wrap {
  margin: 0 auto;
} 
.login {
  width: 200px;
  /* margin-top: 30vh; */
  /* padding: 50px; */
}
.login input[type=text],
.login input[type=password] {
  opacity: 1;
  display: block;
  border: none;
  outline: none;
  width: 280px;
  padding: 10px;
  margin: 20px 0 0 0;
  border-radius: 2px;
}
.login input[type=text] {
  animation: bounce 1s;
  -webkit-appearance: none;
}
.login input[type=text]:focus:valid {
  box-shadow: 0 0 0 10000px #653CE7;
}
.login input[type=text]:focus:valid ~ input[type=button] {
  background: #27ae60;
  color: #653CE7;
}
.login input[type=text]:focus:valid ~ input[type=submit] {
  color: #653CE7;
}
.login input[type=text]:invalid {
  box-shadow: 0 0 0 10000px #8A43F0;
}
.login input[type=text]:invalid ~ input[type=button] {
  background: #c0392b;
  color: #8A43F0;
}
.login input[type=text]:invalid ~ input[type=submit] {
  color: #8A43F0;
}
.login input[type=password] {
  animation: bounce1 1.3s;
}
.login input[type=submit],
.login input[type=button] {
  border: 0;
  outline: 0;
  padding: 13px 18px;
  margin: 40px 0 0 0;
  border-radius: 2px;
  font-weight: 600;
  animation: bounce2 1.6s;
} 
.login input[type=submit] {
  float: right;
  background: #fff;  
  color: #34495e;
  outline: none;
}
.login input[type=button] {
  background: white;
  color: #34495e;
  box-shadow: 5px 5px black;
}
@keyframes bounce {
  0% { transform: translateY(-250px); opacity: 0; }
} 
@keyframes bounce1 {
  0% {  opacity: 0; }
  40% { transform: translateY(-100px); opacity: 0;}
}
@keyframes bounce2 {
  0% {  opacity: 0; }
  70% { transform: translateY(-20px); opacity: 0;}
}      
</style>

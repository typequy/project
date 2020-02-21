<template>
  <div>
    <div class ="mt-2">
      <h1  style="font-family: 'Press Start 2P', cursive; color: white;">CREATE ROOM BEFORE START GAME</h1>
      <input type="button" class="btn btn-primary p-1" value="Create" @click="create">
    </div>
    <div class="container" style="overflow: auto; height: 50vh;">
      <div class="box box-2" v-for="room in rooms" :key="room.id">
        <div class="cover" @click="joinRoom(room.id)">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-964edcf0f07211b0.png"
            alt=""
          />
        </div>
        <div class="pt-2">
          <input type="button" class="btn btn-primary p-1" :value="room.name" >
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

export default {
  name: "Room",
  data() {
    return {
      rooms: []
    }
  },
  created() {
    this.getRooms()
  },
  mounted() {
    socket.on('rooms', () => {
      this.getRooms()
    })
  },
  methods:{
    joinRoom(id) {
      this.$http
        .post(`api/arena/${id}/${localStorage.id}`)
        .then(res=>{
          console.log(res)
          this.$toast.fire({
            icon: 'success',
            title: `Join room`
          })
          this.$router.push({name:'Game',params:{id}})
        })
        .catch(err=>{
          console.log(err.response)
        })
    },
    getRooms() {
      this.$http
        .get('api/rooms')
        .then(res => {
          this.rooms = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    create(){
      this.$swal.fire({
        input: 'text',
        inputPlaceholder: 'Enter the room name'
      })
      .then(data => {
        return this.$http.post('/api/rooms',{
          name:data.value
        })
      })      
      .then(res => {
        console.log(res)
        this.$swal.fire(`Create Room: ${res.data.name}`)
      })
      .catch(err => {
        console.log(err)
      })

    }
  }
}
</script>

<style scoped>
  body,
      ol,
      ul,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      th,
      td,
      dl,
      dd,
      form,
      fieldset,
      legend,
      input,
      textarea,
      i,
      select {
        margin: 0;
        padding: 0;
      }

      body {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #2c3138;
        -webkit-perspective: 90rem;
        perspective: 90rem;
        -webkit-perspective-origin: 34% 61%;
        perspective-origin: 34% 61%;
      }

      img {
        width: 160px;
      }

      button {
        cursor: pointer;
        outline: 0;
        width: 180px;
        height: 48px;
        border-radius: 8px;
        background-color: #2c3138;
        margin-top: 10px;
        overflow: hidden;
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
      }

      button::after {
        content: "";
        position: relative;
        top: -40px;
        display: block;
        width: 48px;
        height: 107%;
        background-color: #000;
        margin-top: -1px;
        margin-left: -7px;
        border-radius: 6px 0 0 6px;
        background-repeat: no-repeat;
        background-position: center;
      }

      button::before {
        content: "";
        display: block;
        width: 48px;
        height: 46px;
        margin-left: -7px;
        margin-top: -1px;
        -webkit-transition: all 200ms cubic-bezier(0.25, 0.75, 0.5, 1.25);
        transition: all 200ms cubic-bezier(0.25, 0.75, 0.5, 1.25);
      }

      .box-1:hover button::before {
        width: 120%;
        opacity: 0.8;
        background-color: #00bf9c;
      }

      .box-2:hover button::before {
        width: 120%;
        opacity: 0.8;
        background-color: #653ee6;
      }

      .box-3:hover button::before {
        width: 120%;
        opacity: 0.8;
        background-color: #008bff;
      }

      .box-4:hover button::before {
        width: 120%;
        opacity: 0.8;
        background-color: #ff6500;
      }

      .container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 80vw;
        height: 100vh;
        margin-top: 20px;
      }

      .box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
        will-change: transform;
        margin-bottom: 20px;
      }

      .box:hover .cover {
        -webkit-transform: translateY(-14px) scale(1.04);
        transform: translateY(-14px) scale(1.04);
      }

      .box-1 button {
        border: 1px solid #00bf9c;
        color: #fff;
        font-size: 22px;
        text-align: right;
        padding-right: 20px;
        line-height: 40px;
      }

      .box-1 button::after {
        content: "";
        background-color: #00bf9c;
        top: -85px;
      }

      .box-2 button {
        border: 1px solid #653ee6;
        color: #fff;
        font-size: 22px;
        text-align: right;
        padding-right: 20px;
        line-height: 40px;
      }

      .box-2 button::after {
        content: "";
        background-color: #653ee6;
        top: -85px;
      }

      .box-3 button {
        border: 1px solid #008bff;
        color: #fff;
        font-size: 22px;
        text-align: right;
        padding-right: 20px;
        line-height: 40px;
      }

      .box-3 button::after {
        content: "";
        background-color: #008bff;
        top: -85px;
      }

      .box-4 button {
        border: 1px solid #ff6500;
        color: #fff;
        font-size: 22px;
        text-align: right;
        padding-right: 20px;
        line-height: 40px;
      }

      .box-4 button::after {
        content: "";
        background-color: #ff6500;
        top: -85px;
      }

      .cover {
        -webkit-transition: all 400ms ease-in-out;
        transition: all 400ms ease-in-out;
        will-change: transform;
      }

      .cover img {
        -webkit-transition: all 260ms ease-in-out;
        transition: all 260ms ease-in-out;
      }

      .box .cover::after {
        content: "";
        z-index: -99;
        position: absolute;
        top: 20px;
        left: -20px;
        display: block;
        width: 160px;
        height: 214px;
        opacity: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 160px 214px;
        -webkit-filter: blur(24px);
        filter: blur(24px);
        -webkit-transition: all 260ms ease-in-out;
        transition: all 260ms ease-in-out;
        will-change: transform;
        -webkit-transform: scale(0.6);
        transform: scale(0.6);
      }

      .box:hover .cover::after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }

      .box-1 .cover::after {
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-893bc9989a52eba0.png");
      }

      .box-2 .cover::after {
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-964edcf0f07211b0.png");
      }

      .box-3 .cover::after {
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-2ebb2b6f93add843.png");
      }

      .box-4 .cover::after {
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-f79c4cc8de2f84ae.png");
      }

      .box-1 button div::before {
        content: "Sensebot";
        position: relative;
        top: -44px;
        left: -4px;
        color: #00bf9c;
        font-size: 21px;
        font-weight: 300;
      }

      .box-1:hover button div::before {
        color: #fff;
      }

      .box-2 button div::before {
        content: "Join";
        position: relative;
        top: -44px;
        left: -6px;
        color: rgb(154, 123, 255);
        font-size: 21px;
        font-weight: 300;
      }

      .box-2:hover button div::before {
        color: #fff;
      }

      .box-3 button div::before {
        content: "DeepKnow";
        position: relative;
        top: -44px;
        left: 3px;
        color: #008bff;
        font-size: 21px;
        font-weight: 300;
      }

      .box-3:hover button div::before {
        color: #fff;
      }

      .box-4 button div::before {
        content: "Scanner";
        position: relative;
        top: -44px;
        left: -9px;
        color: #ff6500;
        font-size: 21px;
        font-weight: 300;
      }

      .box-4:hover button div::before {
        color: #fff;
      }

      .dr {
        position: absolute;
        bottom: 16px;
        right: 16px;
        width: 100px;
      }
</style>
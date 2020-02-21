<template>
<div>
  <h3 style="color:white;"><i class="fab fa-github-alt"></i> {{users}} </h3>
  <div class="d-flex flex-column text-center ">
    <div class="">
      <h1  style="font-family: 'Press Start 2P', cursive; color: white;">{{ playword }}</h1>
    </div>
    <div class="">
      <form action="" @submit.prevent="check">
        <input type="text" v-model="text">
      </form>
    </div>
  </div>
  
  <div class="container" style="overflow: auto; height: 50vh;">
    <div class="box box-2" v-for="player in players" :key="player.id">
      <div class="cover">
          <img
            :src="`https://dummyimage.com/160x214.86/653CE7/F9FCFF&text=${player.score ? player.score : 'O'}`"
            alt=""
          />
      </div>
      <div class="pt-2">
        <div class="pixel" ><p>{{player.User.name}}</p></div>
      </div>
    </div>
    
    <!-- <div v-if="total > 0">
      <div class="box box-2" v-for="j in total" :key="j + `test`">
        <div class="cover">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-964edcf0f07211b0.png"
            alt=""
          />
        </div>
        <button><div></div></button>
      </div>
    </div> -->
  </div>
</div>
</template>

<script>
import io from 'socket.io-client';
import word from '../apis/random';

export default {
  name: "Game",
  props: ['id'],
  data() {
    return {
      players: [],
      words: [],
      self:{},
      text:'',
      play:false,
      users: localStorage.name,
      audio: new Audio(require('../../public/de Blob - Raydian Day (Unstoppable).mp3')),
    }
  },
  created() {
  },
  mounted() {
    const socket = io(`http://localhost:3000/${this.id}`);
    socket.on('connectToRoom',res => {
      console.log(res,'test')
      this.getPlayer();
    })
    socket.on('leave',res => {
      console.log(res)
      this.$router.push({name:"Finish",params:{id:this.id}})
    })
    this.audio.play()
  },
  methods:{
    updateScore(){
      this.$http
        .put(`api/arena/${this.id}/${localStorage.id}`)
        .then(res=>{
          console.log(res)
        })
        .catch(err=>{
          console.log(err.response)
        })
    },
    close(){
      this.$http
        .put(`api/rooms/closed/${this.id}`)
        .then(res=>{
          this.audio.pause()
          console.log(res)
        })
        .catch(err=>{
          console.log(err.response)
        })
    },
    getPlayer(){
      this.$http
        .get(`api/arena/${this.id}/${localStorage.id}`)
        .then(res=>{
          this.players = res.data.result
          this.self = res.data.self
          if(this.players.length >= 2 && this.play === false){
            let temp = 10 - (this.self.score / 10)
            this.words = word(temp)
            this.play = true
          }
        })
        .catch(err=>{
          console.log(err.response)
        })
    },
    check() {
      if(this.text === this.words[0]){
        this.words = this.words.slice(1)
        this.text = ""
        this.updateScore()
      }
    }
  },
  computed:{
    playword(){
      return this.words[0]
    }
  },
  watch: {
    self() {
      if(this.self.score === 100){
        this.close()
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Special+Elite');
input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px dashed white;
  color: white;
  font-size: 50px;
  text-align: center
}


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
        content: "OnePass";
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


.pixel, .pixel2 {
  font-size: 25px;
  color: white;
  height: auto;
  margin: 10px;
  font-family: 'VT323';
  
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;
  
  cursor: pointer;
  
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.pixel:active, .pixel2:active {
  top: 2px;
}

.pixel {
  line-height: 0;
  
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  
  border-style: solid;
  border-width: 20px;
  -moz-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
  -webkit-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
  -o-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
  border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
}

.pixel p {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: auto;
  text-align: center;
  margin: -20px -20px;
  line-height: 20px;
  padding: 10px 20px;
  
	background: #000000;
	background:
		linear-gradient(135deg, transparent 10px, #000000 0) top left,
		linear-gradient(225deg, transparent 10px, #000000 0) top right,
		linear-gradient(315deg, transparent 10px, #000000 0) bottom right,
		linear-gradient(45deg,  transparent 10px, #000000 0) bottom left;
	background-size: 50% 50%;
	background-repeat: no-repeat;
	background-image:
		radial-gradient(circle at 0 0, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 100% 0, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 100% 100%, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 0 100%, rgba(204,0,0,0) 14px, #000000 15px);
}

</style>
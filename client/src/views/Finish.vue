<template>
<div>
    <div id="container">

  

</div>
  <div v-if="finishNext">
    <div class="text-center">
      <p><a href="">
    FINISH
  </a></p>
      <!-- <h1 style="font-family: 'Press Start 2P', cursive; color: white;">FINISH</h1> -->
    </div>
    <div>
      <ul>
        <li class="mt-2" style="text-decoration: none; ">
      <h3 style="font-family: 'Press Start 2P', cursive; color: white;">1st Dila 100 pts "<i class="fas fa-trophy" style="color:yellow;"></i>"</h3>
        </li>
        <li class="mt-2" style="text-decoration: none; ">
      <h3 style="font-family: 'Press Start 2P', cursive; color: white;">2nd Jetly 10 pts</h3>
        </li>
        <li class="mt-2" style="text-decoration: none; ">
      <h3 style="font-family: 'Press Start 2P', cursive; color: white;">3rd Jetly 10 pts</h3>
        </li>
        <li class="mt-2" style="text-decoration: none; ">
      <h3 style="font-family: 'Press Start 2P', cursive; color: white;">4th Fajrin 0 pts</h3>
        </li>
      </ul>
    </div>
    <br>
    <div class="text-center" style="font-family: 'Press Start 2P', cursive; color: white;">
    <router-link :to="{ name: 'Room'}"><h3>Start Another Game</h3></router-link>
    </div>
  </div>

<div v-else>
  <div >
  <link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet">

<p class="rock" @click="getFinish" style="cursor:pointer;" title="click to show points!">FINISH</p>
<div class="cursor-mantap" @click="getFinish">
<div class="hand">
  <div class="palm">
    <div class="bone"></div>
    <div class="palm-shadow"></div>
  </div>
  <div class="thumb-base"></div>
  <div class="mobile-shadow"></div>
  <div class="mobile">
    <div class="screensaver"></div>
  </div>
  <div class="finger-5 finger">
    <div class="finger-shadow"></div>
  </div>
  <div class="finger-4 finger">
    <div class="fingernail"></div>
  </div>
  <div class="finger-3 finger">
    <div class="fingernail"></div>
  </div>
  <div class="finger-2 finger">
    <div class="finger-shadow"></div>
  </div>
  <div class="finger-1 finger">
    <div class="fingernail"></div>
  </div>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: "Finish",
  data() {
    return {
      finishNext: false
    }
  },
  methods: {
    getFinish(){
      this.finishNext = true
    }
  }
}
</script>

<style scoped>
body {
  background-color: #222222;
  background: repeating-linear-gradient(45deg, #2b2b2b 0%, #2b2b2b 10%, #222222 0%, #222222 50%) 0 / 15px 15px;
}

#container {
  width: 500px;
  margin: auto;
}

/*Neon*/
p {
  text-align: center;
  font-size: 7em;
  margin: 20px 0 20px 0;
}

a {
  text-decoration: none;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}



p:nth-child(1) a {
  color: #B6FF00;
  font-family: "Press Start 2P";
  font-size: 0.8em;
}

p:nth-child(1) a:hover {
  -webkit-animation: neon4 1.5s ease-in-out infinite alternate;
  -moz-animation: neon4 1.5s ease-in-out infinite alternate;
  animation: neon4 1.5s ease-in-out infinite alternate;
}



p a:hover {
  color: #ffffff;
}
/*glow for webkit*/



@-webkit-keyframes neon4 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #B6FF00, 0 0 70px #B6FF00, 0 0 80px #B6FF00, 0 0 100px #B6FF00, 0 0 150px #B6FF00;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #B6FF00, 0 0 35px #B6FF00, 0 0 40px #B6FF00, 0 0 50px #B6FF00, 0 0 75px #B6FF00;
  }
}


/*glow for mozilla*/


@-moz-keyframes neon4 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #B6FF00, 0 0 70px #B6FF00, 0 0 80px #B6FF00, 0 0 100px #B6FF00, 0 0 150px #B6FF00;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #B6FF00, 0 0 35px #B6FF00, 0 0 40px #B6FF00, 0 0 50px #B6FF00, 0 0 75px #B6FF00;
  }
}


/*glow*/


@keyframes neon4 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #B6FF00, 0 0 70px #B6FF00, 0 0 80px #B6FF00, 0 0 100px #B6FF00, 0 0 150px #B6FF00;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #B6FF00, 0 0 35px #B6FF00, 0 0 40px #B6FF00, 0 0 50px #B6FF00, 0 0 75px #B6FF00;
  }
}

/*REEEEEEEEEEESPONSIVE*/

@media (max-width: 650px) {
  #container {
    width: 100%;
  }
  p {
    font-size: 3.5em;
  }
}

* {
  box-sizing: border-box;
}

.cursor-mantap {
  cursor: pointer;
  display: flex;
  justify-content: center
}

body {
  height: 100vh;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-align: center;
          align-items: center;
  overflow: hidden;
  background: #eb4f5c;
}

.rock {
  font-family: "Montserrat", sans-serif;
  font-size: 200px;
  margin: 0;
  color: #d4304b;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.hand {
  position: relative;
  width: 100px;
  height: 100px;
  -webkit-animation: rockit 0.8s ease infinite alternate;
          animation: rockit 0.8s ease infinite alternate;
}

.palm {
  cursor: pointer;
  width: 125px;
  height: 140px;
  background: #fedcca;
  -webkit-transform: rotate(26deg);
          transform: rotate(26deg);
  box-shadow: inset 0 0 50px #e77f7b;
}
.palm:after {
  content: "";
  background: #f2ada1;
  width: 20px;
  height: 30px;
  border-radius: 0 0 0 100% / 50%;
  position: absolute;
  left: -20px;
  bottom: 25px;
  z-index: 5;
}
.palm:before {
  content: "";
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #e56c4c), to(#f68e60));
  background-image: linear-gradient(-180deg, #e56c4c 0, #f68e60 100%);
  width: 100%;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  bottom: -15px;
}

.mobile {
  width: 260px;
  height: 135px;
  background: #fc617e;
  border: 4px solid #705674;
  border-width: 4px 10px 4px 10px;
  border-radius: 20px;
  position: absolute;
  top: -80px;
  left: 80%;
  -webkit-transform: rotate(-5deg) translatex(-50%);
          transform: rotate(-5deg) translatex(-50%);
  z-index: 1;
  overflow: hidden;
}

.screensaver {
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  box-shadow: 0 0 0 30px #eee, 0 0 0 50px #d36868, 0 0 0 70px #71d368, 0 0 0 100px #68cfd3;
  -webkit-animation: screensaver 0.5s linear infinite;
          animation: screensaver 0.5s linear infinite;
}

.mobile-shadow {
  width: 100px;
  height: 50px;
  background: #c7656c;
  position: absolute;
  bottom: 30px;
  left: 50%;
  -webkit-transform: rotate(-5deg) translatex(-40%);
          transform: rotate(-5deg) translatex(-40%);
  -webkit-filter: blur(10px);
          filter: blur(10px);
}

.finger {
  position: absolute;
  width: 45px;
  background: #fedcca;
  border-radius: 22px;
  box-shadow: inset 11px -17px 40px #e77f7b;
}

.finger-shadow {
  width: 35px;
  height: 50px;
  background: #c7656c;
  position: absolute;
  bottom: 5px;
  left: 50%;
  -webkit-transform: translatex(-50%);
          transform: translatex(-50%);
  -webkit-filter: blur(10px);
          filter: blur(10px);
}

.finger-5 {
  height: 115px;
  top: -130px;
  left: -15px;
  -webkit-transform: rotate(2deg);
          transform: rotate(2deg);
}

.finger-4 {
  height: 90px;
  top: -100px;
  left: 30px;
  -webkit-transform: rotate(-8deg);
          transform: rotate(-8deg);
  z-index: 1;
}

.finger-3 {
  height: 105px;
  top: -105px;
  left: 75px;
  -webkit-transform: rotate(-8deg);
          transform: rotate(-8deg);
  z-index: 1;
}

.finger-2 {
  height: 120px;
  top: -165px;
  left: 120px;
  -webkit-transform: rotate(15deg);
          transform: rotate(15deg);
}
.finger-2 .finger-shadow {
  bottom: -5px;
}

.finger-1 {
  height: 100px;
  top: -10px;
  right: -50px;
  -webkit-transform: rotate(-65deg);
          transform: rotate(-65deg);
  z-index: 1;
}
.finger-1 .fingernail {
  top: 10px;
  bottom: auto;
  -webkit-transform: translatex(-50%) scale(-1);
          transform: translatex(-50%) scale(-1);
}

.thumb-base {
  background-image: linear-gradient(-125deg, #e97e79 42%, #fdd8c7 77%);
  width: 42px;
  height: 85px;
  border-radius: 17px 20px 0 79px;
  position: absolute;
  top: 26px;
  right: -51px;
  -webkit-transform: rotate(50deg);
          transform: rotate(50deg);
}

.bone {
  width: 30px;
  height: 50px;
  border-radius: 50% 50% 0 0 / 20% 20% 0 0;
  background: #f5e5e9;
  position: absolute;
  bottom: -50px;
  left: 50%;
  z-index: 1;
  -webkit-transform: translatex(-50%);
          transform: translatex(-50%);
}
.bone:after, .bone:before {
  content: "";
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5e5e9;
  box-shadow: inset 0 -5px 5px #ecd6da;
  position: absolute;
  bottom: -20px;
}
.bone:after {
  left: -20px;
}
.bone:before {
  right: -20px;
}

.fingernail {
  width: 30px;
  height: 25px;
  background: rgba(253, 253, 253, 0.3);
  box-shadow: 1px 1px #e5baa7;
  border-radius: 0 0 50% 50%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  -webkit-transform: translatex(-50%);
          transform: translatex(-50%);
}

.palm-shadow {
  width: 20px;
  height: 70px;
  background: #c7656c;
  position: absolute;
  bottom: 50px;
  left: 50%;
  -webkit-transform: translatex(-50%);
          transform: translatex(-50%);
  -webkit-filter: blur(10px);
          filter: blur(10px);
}

@-webkit-keyframes rockit {
  from {
    -webkit-transform: translatey(30px) rotate(-45deg);
            transform: translatey(30px) rotate(-45deg);
  }
  to {
    -webkit-transform: translatey(30px) rotate(10deg);
            transform: translatey(30px) rotate(10deg);
  }
}

@keyframes rockit {
  from {
    -webkit-transform: translatey(30px) rotate(-45deg);
            transform: translatey(30px) rotate(-45deg);
  }
  to {
    -webkit-transform: translatey(30px) rotate(10deg);
            transform: translatey(30px) rotate(10deg);
  }
}
@-webkit-keyframes screensaver {
  to {
    box-shadow: 0 0 0 80px #eee, 0 0 0 120px #d36868, 0 0 0 200px #71d368, 0 0 0 250px #68cfd3;
  }
}
@keyframes screensaver {
  to {
    box-shadow: 0 0 0 80px #eee, 0 0 0 120px #d36868, 0 0 0 200px #71d368, 0 0 0 250px #68cfd3;
  }
}

</style>
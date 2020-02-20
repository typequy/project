<template>
 <div style="z-index:2;position:absolute;left:0;bottom:0; padding:0.6rem;">
  <a style="color:white;" href="https://codepen.io/Gthibaud/pen/ryQRYP" target="_blank">Sources</a>
</div>
</template>

<script>
export default {
  name: "Fiture"
}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}
body {
    background-color: #2C3138;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
canvas {
    flex-shrink: 0;
    background-color: #000;
    object-fit: contain;
}
.crisp{
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
}

</style>
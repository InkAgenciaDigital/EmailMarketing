<template>
  <div id="app">
    <Navs/>
    <router-view/>
  </div>
</template>

<script>
import Navs from '@/components/Navs.vue'
export default {
  name: 'App',
  components: {
    Navs
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  position: relative;
  width: 100%;
  padding-right: 0px;
  padding-left: 250px;

}

/* .btn {
    left: 83%;
    text-align:center;
    border:0px;
    position: relative;
    width:120px;
    height:39px;
}

.titulo {
    padding-left: 8%;
}

.botn{
    left: 43%;
    text-align:center;
    border:0px;
    position: relative;
    width:120px;
    height:39px;
}

.a{
left: 130px;
text-align:center;
border:0px;
position: relative;
width:120px;
height:39px;
color: black;
} */
</style>

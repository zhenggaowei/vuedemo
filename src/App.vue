<template>
  <div id="app">
    <header class="topMenu">
      <div class="logo">
        <img class="logoImg" src="./assets/logo.png">
        <div class="logoTitle">电力运维管理系统</div>
      </div>
      <div class="Menu">
        <ul>
          <li><router-link to="/main1">项目概况</router-link></li>
          <li><router-link to="/main2">朋友圈</router-link></li>
          <li><router-link to="/main3">动态圈</router-link></li>
          <li><router-link to="/main4">个人主页</router-link></li>
        </ul>
      </div>
      <div class="time">
        <div class="clock">17:12</div>
        <div class="week">星期六</div>
      </div>
    </header>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a, a:focus, a:link, a:hover, a:active{
  color: inherit;
  text-decoration: none;
}
image{
  display: block;
}
image:after{
  content: '';
  clear: both;
}
html, body{
  width: 100%;
  height: 100%;
  color: #2c3e50;
  font-weight: 400;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app .topMenu {
  width: 100%;
  background: #f2f2f2;
  overflow: hidden;
  flex-shrink: 0;
}
#app .topMenu .logo{
  margin: 7px 15px;
  overflow: hidden;
  float: left;
}
#app .topMenu .logo:after {
  content: '';
  clear: both;
}
#app .topMenu .logo > .logoImg {
  height: 60px;
  float: left;
}
#app .topMenu .logo > .logoTitle {
  min-width: 1px;
  font-size: 20px;
  margin: 20px;
  float: left;
}
#app .topMenu .Menu{
  height: 70px;
  margin: 5px 0;
  float: left;
}
#app .topMenu .Menu ul{
  width: 100%;
  height: 100%;
  overflow: hidden;
  clear: both;
}
#app .topMenu .Menu ul li{
  width: 80px;
  height: 100%;
  background: gold;
  float: left;
}
#app .topMenu .Menu ul li a{
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 48px;
  text-align: center;
  line-height: 1;
}
#app .topMenu .Menu ul li + li{
  margin-left: 8px;
}
#app .topMenu .time{
  overflow: hidden;
  float: right;
}
.main{
  flex: 1 1 auto;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  overflow: hidden;
}
</style>

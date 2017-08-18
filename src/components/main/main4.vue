<template>
  <div id="main4">
    <div class="sidebar">
      <!--<el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>-->
      <el-menu default-active="1-1" theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse">
        <el-submenu index="1">
          <!--div-->
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">web前端</span>
          </template>
          <el-menu-item-group>
            <span slot="title">div+css</span>
            <el-menu-item index="1-1"><router-link to="/system/web/divGather/divBasis">div+css基础</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/system/web/divGather/divIntermediate">div+css中级</router-link></el-menu-item>
            <el-menu-item index="1-3"><router-link to="/system/web/divGather/divAdvanced">div+css高级</router-link></el-menu-item>
            <el-menu-item index="1-4"><router-link to="/system/web/divGather/divWebsite">div+css建站</router-link></el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="javascript">
            <el-menu-item index="1-5"><router-link to="/system/web/javascriptGather/javascriptBasis">javascript基础</router-link></el-menu-item>
            <el-menu-item index="1-6"><router-link to="/system/web/javascriptGather/javascriptIntermediate">javascript中级</router-link></el-menu-item>
            <el-menu-item index="1-7"><router-link to="/system/web/javascriptGather/javascriptAdvanced">javascript高级</router-link></el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="jquery">
            <el-menu-item index="1-8"><router-link to="/system/web/jqueryGather/jqueryBasis">jquery源码分析</router-link></el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-9">
            <span slot="title">选项4</span>
            <el-menu-item index="1-9-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .sidebar{
    width: 230px;
    height: 100%;
    background: #48576a;
    position: absolute;
    left: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .content{
    margin-left: 230px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .el-menu-item a{
    display: block;
  }
</style>

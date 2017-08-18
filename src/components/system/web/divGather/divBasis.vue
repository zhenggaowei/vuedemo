<template>
  <div id="divBasis">
    <div class="source">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main1' }">{{ $route.name }}</el-breadcrumb-item>
        <el-breadcrumb-item>web前端{{ $route.name }}</el-breadcrumb-item>
        <el-breadcrumb-item>div+css基础</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <div class="sourceaa">
            <div class="demo-form">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="活动名称" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" prop="region">
                  <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间" required>
                  <el-col :span="11">
                    <el-form-item prop="date1">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                      style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-form-item prop="date2">
                      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2"
                                      style="width: 100%;"></el-time-picker>

                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送" prop="delivery">
                  <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质" prop="type">
                  <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源" prop="resource">
                  <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式" prop="desc">
                  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <div class="sourceaa">
            <div class="post">
              <h1 class="postTitle">
                <a id="cb_post_title_url" class="postTitle2" href="http://www.cnblogs.com/8899man/p/6514212.html">Vue开源项目库汇总</a>
              </h1>
              <div class="clear"></div>
              <div class="postBody">
                <div id="cnblogs_post_body"><p>最近做了一个<a href="https://github.com/opendigg/awesome-github-vue"
                                                        target="_blank">Vue开源项目库汇总</a>，里面集合了<a
                  href="http://www.opendigg.com/" target="_blank">OpenDigg</a>&nbsp;上的优质的<a
                  href="http://www.opendigg.com/tags/front-vue" target="_blank">Vue开源项目库</a>，方便移动开发人员便捷的找到自己需要的项目工具等，感兴趣的可以到GitHub上给个star。
                </p>
                  <p>&nbsp;</p>
                  <p>http://www.cnblogs.com/opendigg/p/6513510.html</p>
                  <p>&nbsp;</p>
                  <h3 id="ui-">UI组件</h3>
                  <ul>
                    <li><a href="https://github.com/ElemeFE/element" target="_blank">element</a>&nbsp;★9305 - 饿了么出品的Vue2的web UI工具套件
                    </li>
                    <li><a href="https://github.com/airyland/vux" target="_blank">Vux</a>&nbsp;★6802 - 基于Vue和WeUI的组件库
                    </li>
                    <li><a href="https://github.com/ElemeFE/mint-ui" target="_blank">mint-ui</a>&nbsp;★4776 - Vue 2的移动UI元素
                    </li>
                    <li><a href="https://github.com/iview/iview" target="_blank">iview</a>&nbsp;★4458 - 基于 Vuejs 的开源 UI 组件库
                    </li>
                    <li><a href="https://github.com/JosephusPaye/Keen-UI" target="_blank">Keen-UI</a>&nbsp;★2363 - 轻量级的基本UI组件合集
                    </li>
                    <li><a href="https://github.com/marcosmoura/vue-material" target="_blank">vue-material</a>&nbsp;★2207 - 通过Vue Material和Vue 2建立精美的app应用
                    </li>
                    <li><a href="https://github.com/museui/muse-ui" target="_blank">muse-ui</a>&nbsp;★1992 - 三端样式一致的响应式 UI 库
                    </li>
                    <li><a href="https://github.com/vuetifyjs/vuetify" target="_blank">vuetify</a>&nbsp;★1678 - 为移动而生的Vue JS 2组件框架
                    </li>
                    <li><a href="https://github.com/wangdahoo/vonic" target="_blank">vonic</a>&nbsp;★1494 - 快速构建移动端单页应用
                    </li>
                    <li><a href="https://github.com/egoist/eme" target="_blank">eme</a>&nbsp;★1390 - 优雅的Markdown编辑器</li>
                    <li><a href="https://github.com/monterail/vue-multiselect" target="_blank">vue-multiselect</a>&nbsp;★1166 - Vue.js选择框解决方案
                    </li>
                    <li><a href="https://github.com/ratiw/vue-table" target="_blank">vue-table</a>&nbsp;★824 - 简化数据表格
                    </li>
                    <li><a href="https://github.com/OYsun/VueCircleMenu" target="_blank">VueCircleMenu</a>&nbsp;★776 - 漂亮的vue圆环菜单
                    </li>
                    <li><a href="https://github.com/Coffcer/vue-chat" target="_blank">vue-chat</a>&nbsp;★748 - vuejs和vuex及webpack的聊天示例
                    </li>
                    <li><a href="https://github.com/luojilab/radon-ui" target="_blank">radon-ui</a>&nbsp;★633 - 快速开发产品的Vue组件库
                    </li>
                    <li><a href="https://github.com/MopTym/vue-waterfall" target="_blank">vue-waterfall</a>&nbsp;★605 - Vue.js的瀑布布局组件
                    </li>
                    <li><a href="https://github.com/myronliu347/vue-carbon" target="_blank">vue-carbon</a>&nbsp;★595 - 基于 vue 开发MD风格的移动端
                    </li>
                    <li><a href="https://github.com/FE-Driver/vue-beauty" target="_blank">vue-beauty</a>&nbsp;★569 - 由vue和ant design创建的优美UI组件
                    </li>
                    <li><a href="https://github.com/chenz24/vue-blu" target="_blank">vue-blu</a>&nbsp;★557 - 帮助你轻松创建web应用
                    </li>
                    <li><a href="https://github.com/taylorchen709/vueAdmin" target="_blank">vueAdmin</a>&nbsp;★556 - 基于vuejs2和element的简单的管理员模板
                    </li>
                    <li><a href="https://github.com/vuejs/vue-syntax-highlight" target="_blank">vue-syntax-highlight</a>&nbsp;★551 - Sublime Text语法高亮
                    </li>
                    <li><a href="https://github.com/ElemeFE/vue-infinite-scroll" target="_blank">vue-infinite-scroll</a>&nbsp;★524 - VueJS的无限滚动指令
                    </li>
                    <li><a href="https://github.com/David-Desmaisons/Vue.Draggable" target="_blank">Vue.Draggable</a>&nbsp;★493 - 实现拖放和视图模型数组同步
                    </li>
                    <li><a href="https://github.com/surmon-china/vue-awesome-swiper"
                           target="_blank">vue-awesome-swiper</a>&nbsp;★476 - vue.js触摸滑动组件
                    </li>
                    <li><a href="https://github.com/jinzhe/vue-calendar" target="_blank">vue-calendar</a>&nbsp;★465 - 日期选择插件
                    </li>
                    <li><a href="https://github.com/pi0/bootstrap-vue" target="_blank">bootstrap-vue</a>&nbsp;★458 - 应用于Vuejs2的Twitter的Bootstrap 4组件
                    </li>
                    <li><a href="https://github.com/ElemeFE/vue-swipe" target="_blank">vue-swipe</a>&nbsp;★361 - VueJS触摸滑块
                    </li>
                    <li><a href="https://github.com/ElemeFE/vue-amap" target="_blank">vue-amap</a>&nbsp;★346 - 基于Vue 2和高德地图的地图组件
                    </li>
                    <li><a href="https://github.com/apertureless/vue-chartjs" target="_blank">vue-chartjs</a>&nbsp;★333 - vue中的Chartjs的封装
                    </li>
                    <li><a href="https://github.com/hilongjw/vue-datepicker" target="_blank">vue-datepicker</a>&nbsp;★331 - 日历和日期选择组件
                    </li>
                    <li><a href="https://github.com/jrainlau/markcook" target="_blank">markcook</a>&nbsp;★318 - 好看的markdown编辑器
                    </li>
                    <li><a href="https://github.com/GuillaumeLeclerc/vue-google-maps"
                           target="_blank">vue-google-maps</a>&nbsp;★287 - 带有双向数据绑定Google地图组件
                    </li>
                    <li><a href="https://github.com/hilongjw/vue-progressbar" target="_blank">vue-progressbar</a>&nbsp;★248 - vue轻量级进度条
                    </li>
                    <li><a href="https://github.com/alessiomaffeis/vue-picture-input"
                           target="_blank">vue-picture-input</a>&nbsp;★236 - 移动友好的图片文件输入组件
                    </li>
                    <li><a href="https://github.com/PeachScript/vue-infinite-loading" target="_blank">vue-infinite-loading</a>&nbsp;★224 - VueJS的无限滚动插件
                    </li>
                    <li><a href="https://github.com/lian-yue/vue-upload-component"
                           target="_blank">vue-upload-component</a>&nbsp;★204 - Vuejs文件上传组件
                    </li>
                    <li><a href="https://github.com/Haixing-Hu/vue-datetime-picker"
                           target="_blank">vue-datetime-picker</a>&nbsp;★197 - 日期时间选择控件
                    </li>
                    <li><a href="https://github.com/wangdahoo/vue-scroller" target="_blank">vue-scroller</a>&nbsp;★196 - Vonic UI的功能性组件
                    </li>
                    <li><a href="https://github.com/icai/vue2-calendar" target="_blank">vue2-calendar</a>&nbsp;★181 - 支持lunar和日期事件的日期选择器
                    </li>
                    <li><a href="https://github.com/surmon-china/vue-video-player" target="_blank">vue-video-player</a>&nbsp;★178 - VueJS视频及直播播放器
                    </li>
                    <li><a href="https://github.com/Wanderxx/vue-fullcalendar" target="_blank">vue-fullcalendar</a>&nbsp;★176 - 基于vue.js的全日历组件
                    </li>
                    <li><a href="https://github.com/ccforward/rubik" target="_blank">rubik</a>&nbsp;★170 - 基于Vuejs2的开源 UI 组件库
                    </li>
                    <li><a href="https://github.com/OYsun/VueStar" target="_blank">VueStar</a>&nbsp;★169 - 带星星动画的vue点赞按钮
                    </li>
                    <li><a href="https://github.com/egoist/vue-mugen-scroll" target="_blank">vue-mugen-scroll</a>&nbsp;★167 - 无限滚动组件
                    </li>
                    <li><a href="https://github.com/mint-ui/mint-loadmore" target="_blank">mint-loadmore</a>&nbsp;★167 - VueJS的双向下拉刷新组件
                    </li>
                    <li><a href="https://github.com/matfish2/vue-tables-2" target="_blank">vue-tables-2</a>&nbsp;★162 - 显示数据的bootstrap样式网格
                    </li>
                    <li><a href="https://github.com/Akryum/vue-virtual-scroller"
                           target="_blank">vue-virtual-scroller</a>&nbsp;★158 - 带任意数目数据的顺畅的滚动
                    </li>
                    <li><a href="https://github.com/SimonZhangITer/DataVisualization"
                           target="_blank">DataVisualization</a>&nbsp;★149 - 数据可视化
                    </li>
                    <li><a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>&nbsp;★149 - 基于Quill适用于Vue2的富文本编辑器
                    </li>
                    <li><a href="https://github.com/hifarer/Vueditor" target="_blank">Vueditor</a>&nbsp;★138 - 所见即所得的编辑器
                    </li>
                    <li><a href="https://github.com/PeakTai/vue-html5-editor" target="_blank">vue-html5-editor</a>&nbsp;★132 - html5所见即所得编辑器
                    </li>
                    <li><a href="https://github.com/ElemeFE/vue-msgbox" target="_blank">vue-msgbox</a>&nbsp;★127 - vuejs的消息框
                    </li>
                    <li><a href="https://github.com/warpcgd/vue-slider" target="_blank">vue-slider</a>&nbsp;★126 - vue 滑动组件
                    </li>
                    <li><a href="https://github.com/Vanthink-UED/vue-core-image-upload" target="_blank">vue-core-image-upload</a>&nbsp;★124 - 轻量级的vue上传插件
                    </li>
                    <li><a href="https://github.com/hilongjw/vue-slide" target="_blank">vue-slide</a>&nbsp;★121 - vue轻量级滑动组件
                    </li>
                    <li><a href="https://github.com/JALBAA/vue-lazyload-img" target="_blank">vue-lazyload-img</a>&nbsp;★118 - 移动优化的vue图片懒加载插件
                    </li>
                    <li><a href="https://github.com/Alex-fun/vue-drag-and-drop-list" target="_blank">vue-drag-and-drop-list</a>&nbsp;★114 - 创建排序列表的Vue指令
                    </li>
                    <li><a href="https://github.com/MatteoGabriele/vue-progressive-image" target="_blank">vue-progressive-image</a>&nbsp;★107 - Vue的渐进图像加载插件
                    </li>
                    <li><a href="https://github.com/vuwe/vuwe" target="_blank">vuwe</a>&nbsp;★107 - 基于微信WeUI所开发的专用于Vue2的组件库
                    </li>
                    <li><a href="https://github.com/rowanwins/vue-dropzone" target="_blank">vue-dropzone</a>&nbsp;★105 - 用于文件上传的Vue组件
                    </li>
                    <li><a href="https://github.com/hchstera/vue-charts" target="_blank">vue-charts</a>&nbsp;★101 - 轻松渲染一个图表
                    </li>
                    <li><a href="https://github.com/weilao/vue-swiper" target="_blank">vue-swiper</a>&nbsp;★95 - 易于使用的滑块组件
                    </li>
                    <li><a href="https://github.com/littlewin-wang/vue-images" target="_blank">vue-images</a>&nbsp;★93 - 显示一组图片的lightbox组件
                    </li>
                    <li><a href="https://github.com/Wlada/vue-carousel-3d" target="_blank">vue-carousel-3d</a>&nbsp;★91 - VueJS的3D轮播组件
                    </li>
                    <li><a href="https://github.com/QingWei-Li/vue-region-picker" target="_blank">vue-region-picker</a>&nbsp;★89 - 选择中国的省份市和地区
                    </li>
                    <li><a href="https://github.com/cngu/vue-typer" target="_blank">vue-typer</a>&nbsp;★89 - 模拟用户输入选择和删除文本的Vue组件
                    </li>
                    <li><a href="https://github.com/NewDadaFE/vue-impression" target="_blank">vue-impression</a>&nbsp;★88 - 移动Vuejs2 UI元素
                    </li>
                    <li><a href="https://github.com/galenyuan/vue-datatable" target="_blank">vue-datatable</a>&nbsp;★87 - 使用Vuejs创建的DataTableView
                    </li>
                    <li><a href="https://github.com/santiblanko/vue-instant" target="_blank">vue-instant</a>&nbsp;★86 - 轻松创建自动提示的自定义搜索控件
                    </li>
                    <li><a href="https://github.com/hilongjw/vue-dragging" target="_blank">vue-dragging</a>&nbsp;★86 - 使元素可以拖拽
                    </li>
                    <li><a href="https://github.com/NightCatSama/vue-slider-component" target="_blank">vue-slider-component</a>&nbsp;★85 - 在vue1和vue2中使用滑块
                    </li>
                    <li><a href="https://github.com/BosNaufal/vue2-loading-bar" target="_blank">vue2-loading-bar</a>&nbsp;★76 - 最简单的仿Youtube加载条视图
                    </li>
                    <li><a href="https://github.com/weifeiyue/vue-datepicker" target="_blank">vue-datepicker</a>&nbsp;★75 - 漂亮的Vue日期选择器组件
                    </li>
                    <li><a href="https://github.com/hilongjw/vue-video" target="_blank">vue-video</a>&nbsp;★70 - Vue.js的HTML5视频播放器
                    </li>
                    <li><a href="https://github.com/ElemeFE/vue-toast-mobile" target="_blank">vue-toast-mobile</a>&nbsp;★68 - VueJS的toast插件
                    </li>
                    <li><a href="https://github.com/dai-siki/vue-image-crop-upload" target="_blank">vue-image-crop-upload</a>&nbsp;★67 - vue图片剪裁上传组件
                    </li>
                    <li><a href="https://github.com/Akryum/vue-tooltip" target="_blank">vue-tooltip</a>&nbsp;★66 - 带绑定信息提示的提示工具
                    </li>
                    <li><a href="https://github.com/weizhenye/vue-highcharts" target="_blank">vue-highcharts</a>&nbsp;★66 - HighCharts组件
                    </li>
                    <li><a href="https://github.com/surmon-china/vue-touch-ripple" target="_blank">vue-touch-ripple</a>&nbsp;★62 - vuejs的触摸ripple组件
                    </li>
                    <li><a href="https://github.com/Kocisov/coffeebreak" target="_blank">coffeebreak</a>&nbsp;★61 - 实时编辑CSS组件工具
                    </li>
                    <li><a href="https://github.com/coderdiaz/vue-datasource" target="_blank">vue-datasource</a>&nbsp;★60 - 创建VueJS动态表格
                    </li>
                    <li><a href="https://github.com/phoenixwong/vue2-timepicker" target="_blank">vue2-timepicker</a>&nbsp;★60 - 下拉时间选择器
                    </li>
                    <li><a href="https://github.com/Bubblings/vue-date-picker" target="_blank">vue-date-picker</a>&nbsp;★59 - VueJS日期选择器组件
                    </li>
                    <li><a href="https://github.com/BosNaufal/vue-scrollbar" target="_blank">vue-scrollbar</a>&nbsp;★58 - 最简单的滚动区域组件
                    </li>
                    <li><a href="https://github.com/CroudSupport/vue-quill" target="_blank">vue-quill</a>&nbsp;★56 - vue组件构建quill编辑器
                    </li>
                    <li><a href="https://github.com/phanan/vue-google-signin-button" target="_blank">vue-google-signin-button</a>&nbsp;★55 - 导入谷歌登录按钮
                    </li>
                    <li><a href="https://github.com/MMF-FE/vue-svgicon" target="_blank">vue-svgicon</a>&nbsp;★53 - 创建svg图标组件的工具
                    </li>
                    <li><a href="https://github.com/bkzl/vue-float-label" target="_blank">vue-float-label</a>&nbsp;★49 - VueJS浮动标签模式
                    </li>
                    <li><a href="https://github.com/Dafrok/vue-baidu-map" target="_blank">vue-baidu-map</a>&nbsp;★46 - 基于 Vue 2的百度地图组件库
                    </li>
                    <li><a href="https://github.com/nicolasbeauvais/vue-social-sharing" target="_blank">vue-social-sharing</a>&nbsp;★45 - 社交分享组件
                    </li>
                    <li><a href="https://github.com/davidroyer/vue2-editor" target="_blank">vue2-editor</a>&nbsp;★44 - HTML编辑器
                    </li>
                    <li><a href="https://github.com/Ginhing/vue-tagsinput" target="_blank">vue-tagsinput</a>&nbsp;★41 - 基于VueJS的标签组件
                    </li>
                    <li><a href="https://github.com/shhdgit/vue-easy-slider" target="_blank">vue-easy-slider</a>&nbsp;★41 - Vue 2.x的滑块组件
                    </li>
                    <li><a href="https://github.com/vue-bulma/datepicker" target="_blank">datepicker</a>&nbsp;★38 - 基于flatpickr的时间选择组件
                    </li>
                    <li><a href="https://github.com/miaolz123/vue-chart" target="_blank">vue-chart</a>&nbsp;★37 - 强大的高速的vue图表解析
                    </li>
                    <li><a href="https://github.com/yunyi1895/vue-music-master" target="_blank">vue-music-master</a>&nbsp;★37 - vue手机端网页音乐播放器
                    </li>
                    <li><a href="https://github.com/vue-bulma/handsontable" target="_blank">handsontable</a>&nbsp;★35 - 网页表格组件
                    </li>
                    <li><a href="https://github.com/F-loat/vue-simplemde" target="_blank">vue-simplemde</a>&nbsp;★35 - VueJS的Markdown编辑器组件
                    </li>
                    <li><a href="https://github.com/myronliu347/vue-popup-mixin" target="_blank">vue-popup-mixin</a>&nbsp;★35 - 用于管理弹出框的遮盖层
                    </li>
                    <li><a href="https://github.com/fangyongbao/cubeex" target="_blank">cubeex</a>&nbsp;★33 - 包含一套完整的移动UI
                    </li>
                    <li><a href="https://github.com/CroudSupport/vue-fullcalendar" target="_blank">vue-fullcalendar</a>&nbsp;★32 - vue FullCalendar封装
                    </li>
                    <li><a href="https://github.com/loujiayu/vue-material-design"
                           target="_blank">vue-material-design</a>&nbsp;★32 - Vue MD风格组件
                    </li>
                    <li><a href="https://github.com/bbonnin/vue-morris" target="_blank">vue-morris</a>&nbsp;★31 - Vuejs组件封装Morrisjs库
                    </li>
                    <li><a href="https://github.com/tianyong90/we-vue" target="_blank">we-vue</a>&nbsp;★30 - Vue2及weui1开发的组件
                    </li>
                    <li><a href="https://github.com/legeneek/vue-image-clip" target="_blank">vue-image-clip</a>&nbsp;★29 - 基于vue的图像剪辑组件
                    </li>
                    <li><a href="https://github.com/jbaysolutions/vue-bootstrap-table" target="_blank">vue-bootstrap-table</a>&nbsp;★29 - 可排序可检索的表格
                    </li>
                    <li><a href="https://github.com/wyzant-dev/vue-radial-progress"
                           target="_blank">vue-radial-progress</a>&nbsp;★28 - Vue.js放射性进度条组件
                    </li>
                    <li><a href="https://github.com/staskjs/vue-slick" target="_blank">vue-slick</a>&nbsp;★28 - 实现流畅轮播框的vue组件
                    </li>
                    <li><a href="https://github.com/bajian/vue-pull-to-refresh" target="_blank">vue-pull-to-refresh</a>&nbsp;★27 - Vue2的上拉下拉
                    </li>
                    <li><a href="https://github.com/matfish2/vue-form-2" target="_blank">vue-form-2</a>&nbsp;★26 - 全面的HTML表单管理的解决方案
                    </li>
                    <li><a href="https://github.com/vue-comps/vue-side-nav" target="_blank">vue-side-nav</a>&nbsp;★26 - 响应式的侧边导航
                    </li>
                    <li><a href="https://github.com/mint-ui/mint-indicator" target="_blank">mint-indicator</a>&nbsp;★26 - VueJS移动加载指示器插件
                    </li>
                    <li><a href="https://github.com/vue-bulma/chartjs" target="_blank">chartjs</a>&nbsp;★24 - Vue Bulma的chartjs组件
                    </li>
                    <li><a href="https://github.com/suguangwen/vue-scroll" target="_blank">vue-scroll</a>&nbsp;★24 - vue滚动
                    </li>
                    <li><a href="https://github.com/BosNaufal/vue-ripple" target="_blank">vue-ripple</a>&nbsp;★24 - 制作谷歌MD风格涟漪效果的Vue组件
                    </li>
                    <li><a href="https://github.com/icebob/vue-touch-keyboard" target="_blank">vue-touch-keyboard</a>&nbsp;★22 - VueJS虚拟键盘组件
                    </li>
                    <li><a href="https://github.com/ankane/vue-chartkick" target="_blank">vue-chartkick</a>&nbsp;★22 - VueJS一行代码实现优美图表
                    </li>
                    <li><a href="https://github.com/lisiyizu/vue-ztree" target="_blank">vue-ztree</a>&nbsp;★21 - 用 vue 写的树层级组件
                    </li>
                    <li><a href="https://github.com/shiye515/vue-m-carousel" target="_blank">vue-m-carousel</a>&nbsp;★20 - vue 移动端轮播组件
                    </li>
                    <li><a href="https://github.com/dai-siki/vue-datepicker-simple" target="_blank">vue-datepicker-simple</a>&nbsp;★20 - 基于vue的日期选择器
                    </li>
                    <li><a href="https://github.com/alexqdjay/vue-tabs" target="_blank">vue-tabs</a>&nbsp;★20 - 多tab页轻型框架
                    </li>
                    <li><a href="https://github.com/aweiu/vue-verify-pop" target="_blank">vue-verify-pop</a>&nbsp;★19 - 带气泡提示的vue校验插件
                    </li>
                    <li><a href="https://github.com/vue-comps/vue-parallax" target="_blank">vue-parallax</a>&nbsp;★15 - 整洁的视觉效果
                    </li>
                    <li><a href="https://github.com/JackGit/vue-img-loader" target="_blank">vue-img-loader</a>&nbsp;★14 - 图片加载UI组件
                    </li>
                    <li><a href="https://github.com/eduardostuart/vue-typewriter" target="_blank">vue-typewriter</a>&nbsp;★13 - vue组件类型
                    </li>
                    <li><a href="https://github.com/Teddy-Zhu/vue-smoothscroll" target="_blank">vue-smoothscroll</a>&nbsp;★12 - smoothscroll的VueJS版本
                    </li>
                    <li><a href="https://github.com/xinxingyu/vue-city" target="_blank">vue-city</a>&nbsp;★10 - 城市选择器
                    </li>
                    <li><a href="https://github.com/weibangtuo/vue-tree" target="_blank">vue-tree</a>&nbsp;★10 - vue树视图组件
                    </li>
                    <li><a href="https://github.com/Treri/vue-ios-alertview" target="_blank">vue-ios-alertview</a>&nbsp;★8 - iOS7+ 风格的alertview服务
                    </li>
                    <li><a href="https://github.com/ibufu/dd-vue-component" target="_blank">dd-vue-component</a>&nbsp;★7 - 订单来了的公共组件库
                    </li>
                    <li><a href="https://github.com/yeseason/paco-ui-vue" target="_blank">paco-ui-vue</a>&nbsp;★7 - PACOUI的vue组件
                    </li>
                    <li><a href="https://github.com/doodlewind/vue-cmap" target="_blank">vue-cmap</a>&nbsp;★5 - Vue China map可视化组件
                    </li>
                    <li><a href="https://github.com/steven5538/vue-button" target="_blank">vue-button</a>&nbsp;★4 - Vue按钮组件
                    </li>
                  </ul>
                  <h3 id="-">开发框架</h3>
                  <ul>
                    <li><a href="https://github.com/vuejs/vue" target="_blank">vue.js</a>&nbsp;★45466 - 流行的轻量高效的前端组件化方案
                    </li>
                    <li><a href="https://github.com/fundon/vue-admin" target="_blank">vue-admin</a>&nbsp;★3222 - Vue管理面板框架
                    </li>
                    <li><a href="https://github.com/SimulatedGREG/electron-vue" target="_blank">electron-vue</a>&nbsp;★1273 - Electron及VueJS快速启动样板
                    </li>
                    <li><a href="https://github.com/petervmeijgaard/vue-2.0-boilerplate" target="_blank">vue-2.0-boilerplate</a>&nbsp;★241 - Vue2单页应用样板​
                    </li>
                    <li><a href="https://github.com/hanan198501/vue-spa-template" target="_blank">vue-spa-template</a>&nbsp;★223 - 前后端分离后的单页应用开发
                    </li>
                    <li><a href="https://github.com/nolimits4web/Framework7-Vue" target="_blank">Framework7-Vue</a>&nbsp;★210 - VueJS与Framework7结合
                    </li>
                    <li><a href="https://github.com/wangxg2016/vue-bulma" target="_blank">vue-bulma</a>&nbsp;★132 - 轻量级高性能MVVM Admin UI框架
                    </li>
                    <li><a href="https://github.com/rodzzlessa24/vue-webgulp" target="_blank">vue-webgulp</a>&nbsp;★100 - 仿VueJS Vue loader示例
                    </li>
                    <li><a href="https://github.com/Metnew/vue-element-starter" target="_blank">vue-element-starter</a>&nbsp;★34 - vue启动页
                    </li>
                  </ul>
                  <h3 id="-">实用库</h3>
                  <ul>
                    <li><a href="https://github.com/vuejs/vuex" target="_blank">vuex</a>&nbsp;★5997 - 专为 Vue.js 应用程序开发的状态管理模式
                    </li>
                    <li><a href="https://github.com/monterail/vuelidate" target="_blank">vuelidate</a>&nbsp;★750 - 简单轻量级的基于模块的Vue.js验证
                    </li>
                    <li><a href="https://github.com/zerqu/qingcheng" target="_blank">qingcheng</a>&nbsp;★677 - qingcheng主题
                    </li>
                    <li><a href="https://github.com/ElemeFE/vue-desktop" target="_blank">vue-desktop</a>&nbsp;★461 - 创建管理面板网站的UI库
                    </li>
                    <li><a href="https://github.com/declandewet/vue-meta" target="_blank">vue-meta</a>&nbsp;★257 - 管理app的meta信息
                    </li>
                    <li><a href="https://github.com/imcvampire/vue-axios" target="_blank">vue-axios</a>&nbsp;★209 - 将axios整合到VueJS的封装
                    </li>
                    <li><a href="https://github.com/cenkai88/vue-svg-icon" target="_blank">vue-svg-icon</a>&nbsp;★116 - vue2的可变彩色svg图标方案
                    </li>
                    <li><a href="https://github.com/eddyerburgh/avoriaz" target="_blank">avoriaz</a>&nbsp;★110 - VueJS测试实用工具库
                    </li>
                    <li><a href="https://github.com/lmk123/vue-framework7" target="_blank">vue-framework7</a>&nbsp;★83 - 结合VueJS使用的Framework7组件
                    </li>
                    <li><a href="https://github.com/Coffcer/vue-bootstrap-modal" target="_blank">vue-bootstrap-modal</a>&nbsp;★78 - vue的Bootstrap样式组件
                    </li>
                    <li><a href="https://github.com/QingWei-Li/vuep" target="_blank">vuep</a>&nbsp;★72 - 用实时编辑和预览来渲染Vue组件
                    </li>
                    <li><a href="https://github.com/Sopamo/vue-online" target="_blank">vue-online</a>&nbsp;★67 - reactive的在线和离线组件
                    </li>
                    <li><a href="https://github.com/yeyuqiudeng/vue-lazy-render" target="_blank">vue-lazy-render</a>&nbsp;★66 - 用于Vue组件的延迟渲染
                    </li>
                    <li><a href="https://github.com/apertureless/vue-password-strength-meter" target="_blank">vue-password-strength-meter</a>&nbsp;★65 - 交互式密码强度计
                    </li>
                    <li><a href="https://github.com/lynzz/element-admin" target="_blank">element-admin</a>&nbsp;★57 - 支持 vuecli 的 Element UI 的后台模板
                    </li>
                    <li><a href="https://github.com/SimulatedGREG/vue-electron" target="_blank">vue-electron</a>&nbsp;★55 - 将选择的API封装到Vue对象中的插件
                    </li>
                    <li><a href="https://github.com/vue-bulma/cleave" target="_blank">cleave</a>&nbsp;★55 - 基于cleave.js的Cleave组件
                    </li>
                    <li><a href="https://github.com/cklmercer/vue-events" target="_blank">vue-events</a>&nbsp;★54 - 简化事件的VueJS插件
                    </li>
                    <li><a href="https://github.com/iFgR/vue-shortkey" target="_blank">vue-shortkey</a>&nbsp;★53 - 应用于Vue.js的Vue-ShortKey 插件
                    </li>
                    <li><a href="https://github.com/kartsims/vue-cordova" target="_blank">vue-cordova</a>&nbsp;★50 - Cordova的VueJS插件
                    </li>
                    <li><a href="https://github.com/weinot/vue-router-transition"
                           target="_blank">vue-router-transition</a>&nbsp;★49 - 页面过渡插件
                    </li>
                    <li><a href="https://github.com/mlyknown/vue-gesture" target="_blank">vue-gesture</a>&nbsp;★48 - VueJS的手势事件插件
                    </li>
                    <li><a href="https://github.com/FranckFreiburger/http-vue-loader"
                           target="_blank">http-vue-loader</a>&nbsp;★46 - 从html及js环境加载vue文件
                    </li>
                    <li><a href="https://github.com/superman66/vue-qart" target="_blank">vue-qart</a>&nbsp;★46 - 用于qartjs的Vue2指令
                    </li>
                    <li><a href="https://github.com/gocanto/vuemit" target="_blank">vuemit</a>&nbsp;★44 - 处理VueJS事件</li>
                    <li><a href="https://github.com/icebob/vue-websocket" target="_blank">vue-websocket</a>&nbsp;★42 - VueJS的Websocket插件
                    </li>
                    <li><a href="https://github.com/pinguinjkeke/vue-local-storage"
                           target="_blank">vue-local-storage</a>&nbsp;★41 - 具有类型支持的Vuejs本地储存插件
                    </li>
                    <li><a href="https://github.com/gocanto/lazy-vue" target="_blank">lazy-vue</a>&nbsp;★41 - 懒加载图片</li>
                    <li><a href="https://github.com/yangmingshan/vue-bus" target="_blank">vue-bus</a>&nbsp;★36 - VueJS的事件总线
                    </li>
                    <li><a href="https://github.com/ropbla9/vue-reactive-storage"
                           target="_blank">vue-reactive-storage</a>&nbsp;★35 - vue插件的Reactive层
                    </li>
                    <li><a href="https://github.com/se-panfilov/vue-notifications" target="_blank">vue-notifications</a>&nbsp;★32 - 非阻塞通知库
                    </li>
                    <li><a href="https://github.com/Coffcer/vue-lazy-component" target="_blank">vue-lazy-component</a>&nbsp;★32 - 懒加载组件或者元素的Vue指令
                    </li>
                    <li><a href="https://github.com/AStaroverov/v-media-query" target="_blank">v-media-query</a>&nbsp;★32 - vue中添加用于配合媒体查询的方法
                    </li>
                    <li><a href="https://github.com/Akryum/vue-observe-visibility" target="_blank">vue-observe-visibility</a>&nbsp;★31 - 当元素在页面上可见或隐藏时检测
                    </li>
                    <li><a href="https://github.com/HerringtonDarkholme/vue-ts-loader" target="_blank">vue-ts-loader</a>&nbsp;★29 - 在Vue装载机检查脚本
                    </li>
                    <li><a href="https://github.com/matfish2/vue-pagination-2" target="_blank">vue-pagination-2</a>&nbsp;★28 - 简单通用的分页组件
                    </li>
                    <li><a href="https://github.com/dkfbasel/vuex-i18n" target="_blank">vuex-i18n</a>&nbsp;★26 - 定位插件
                    </li>
                    <li><a href="https://github.com/David-Desmaisons/Vue.resize" target="_blank">Vue.resize</a>&nbsp;★26 - 检测HTML调整大小事件的vue指令
                    </li>
                    <li><a href="https://github.com/xanf/vuex-shared-mutations"
                           target="_blank">vuex-shared-mutations</a>&nbsp;★25 - 分享某种Vuex mutations
                    </li>
                    <li><a href="https://github.com/BosNaufal/vue-file-base64" target="_blank">vue-file-base64</a>&nbsp;★16 - 将文件转换为Base64的vue组件
                    </li>
                    <li><a href="https://github.com/vue-bulma/modal" target="_blank">modal</a>&nbsp;★15 - Vue Bulma的modal组件
                    </li>
                    <li><a href="https://github.com/irwansyahwii/Famous-Vue" target="_blank">Famous-Vue</a>&nbsp;★15 - Famous库的vue组件
                    </li>
                    <li><a href="https://github.com/LeoHuiyi/leo-vue-validator" target="_blank">leo-vue-validator</a>&nbsp;★13 - 异步的表单验证组件
                    </li>
                    <li><a href="https://github.com/MetinSeylan/Vue-Easy-Validator"
                           target="_blank">Vue-Easy-Validator</a>&nbsp;★11 - 简单的表单验证
                    </li>
                    <li><a href="https://github.com/imcvampire/vue-truncate-filter"
                           target="_blank">vue-truncate-filter</a>&nbsp;★9 - 截断字符串的VueJS过滤器
                    </li>
                    <li><a href="https://github.com/vue-comps/vue-zoombox" target="_blank">vue-zoombox</a>&nbsp;★9 - 一个高级zoombox
                    </li>
                    <li><a href="https://github.com/syropian/vue-input-autosize" target="_blank">vue-input-autosize</a>&nbsp;★5 - 基于内容自动调整文本输入的大小
                    </li>
                    <li><a href="https://github.com/yodfz/vue-lazyloadImg" target="_blank">vue-lazyloadImg</a>&nbsp;★3 - 图片懒加载插件
                    </li>
                  </ul>
                  <h3 id="-">服务端</h3>
                  <ul>
                    <li><a href="https://github.com/nuxt/nuxt.js" target="_blank">nuxt.js</a>&nbsp;★2743 - 用于服务器渲染Vue app的最小化框架
                    </li>
                    <li><a href="https://github.com/danmademe/express-vue" target="_blank">express-vue</a>&nbsp;★137 - 简单的使用服务器端渲染vue.js
                    </li>
                    <li><a href="https://github.com/ccforward/vue-ssr" target="_blank">vue-ssr</a>&nbsp;★67 - 非常简单的VueJS服务器端渲染模板
                    </li>
                    <li><a href="https://github.com/hilongjw/vue-ssr" target="_blank">vue-ssr</a>&nbsp;★56 - 结合Express使用Vue2服务端渲染
                    </li>
                    <li><a href="https://github.com/leaves4j/vue-easy-renderer" target="_blank">vue-easy-renderer</a>&nbsp;★22 - Nodejs服务端渲染
                    </li>
                  </ul>
                  <h3 id="-">辅助工具</h3>
                  <ul>
                    <li><a href="https://github.com/MiCottOn/DejaVue" target="_blank">DejaVue</a>&nbsp;★543 - Vuejs可视化及压力测试
                    </li>
                    <li><a href="https://github.com/vue-play/vue-play" target="_blank">vue-play</a>&nbsp;★445 - 展示Vue组件的最小化框架
                    </li>
                    <li><a href="https://github.com/OYsun/vscode-VueHelper" target="_blank">vscode-VueHelper</a>&nbsp;★185 - 目前vscode最好的vue代码提示插件
                    </li>
                    <li><a href="https://github.com/NetanelBasal/vue-generate-component" target="_blank">vue-generate-component</a>&nbsp;★39 - 轻松生成Vue js组件的CLI工具
                    </li>
                    <li><a href="https://github.com/xwpongithub/vue-multipage-cli" target="_blank">vue-multipage-cli</a>&nbsp;★33 - 简单的多页CLI
                    </li>
                    <li><a href="https://github.com/MetinSeylan/VuejsStarterKit" target="_blank">VuejsStarterKit</a>&nbsp;★26 - vuejs starter套件
                    </li>
                  </ul>
                  <h3 id="-">应用实例</h3>
                  <ul>
                    <li><a href="https://github.com/phanan/koel" target="_blank">koel</a>&nbsp;★7175 - 基于网络的个人音频流媒体服务
                    </li>
                    <li><a href="https://github.com/pagekit/pagekit" target="_blank">pagekit</a>&nbsp;★4021 - 轻量级的CMS建站系统
                    </li>
                    <li><a href="https://github.com/Vuedo/vuedo" target="_blank">vuedo</a>&nbsp;★1040 - 博客平台</li>
                    <li><a href="https://github.com/jackhutu/jackblog-vue" target="_blank">jackblog-vue</a>&nbsp;★943 - 个人博客系统
                    </li>
                    <li><a href="https://github.com/lzxb/vue-cnode" target="_blank">vue-cnode</a>&nbsp;★597 - 重写vue版cnode社区
                    </li>
                    <li><a href="https://github.com/ycwalker/CMS-of-Blog" target="_blank">CMS-of-Blog</a>&nbsp;★405 - 博客内容管理器
                    </li>
                    <li><a href="https://github.com/mrgodhani/rss-reader" target="_blank">rss-reader</a>&nbsp;★326 - 简单的rss阅读器
                    </li>
                    <li><a href="https://github.com/viko16/vue-ghpages-blog" target="_blank">vue-ghpages-blog</a>&nbsp;★208 - 依赖GitHub Pages无需本地生成的静态博客
                    </li>
                    <li><a href="https://github.com/wh469012917/swoole-vue-webim" target="_blank">swoole-vue-webim</a>&nbsp;★97 - Web版的聊天应用
                    </li>
                    <li><a href="https://github.com/thelinuxlich/vue-dashing-js" target="_blank">vue-dashing-js</a>&nbsp;★70 - nuvo-dashing-js的fork
                    </li>
                    <li><a href="https://github.com/sapjax/fewords" target="_blank">fewords</a>&nbsp;★52 - 功能极其简单的笔记本
                    </li>
                    <li><a href="https://github.com/surmon-china/vue-blog" target="_blank">vue-blog</a>&nbsp;★33 - 使用Vue2.0 和Vuex的vue-blog
                    </li>
                  </ul>
                  <h3 id="demo-">Demo示例</h3>
                  <ul>
                    <li><a href="https://github.com/shinygang/Vue-cnodejs" target="_blank">Vue-cnodejs</a>&nbsp;★2113 - 基于vue重写Cnodejs.org的webapp
                    </li>
                    <li><a href="https://github.com/javaSwing/NeteaseCloudWebApp" target="_blank">NeteaseCloudWebApp</a>&nbsp;★1154 - 高仿网易云音乐的webapp
                    </li>
                    <li><a href="https://github.com/hilongjw/vue-zhihu-daily" target="_blank">vue-zhihu-daily</a>&nbsp;★875 - 知乎日报 with Vuejs
                    </li>
                    <li><a href="https://github.com/useryangtao/vue-wechat" target="_blank">vue-wechat</a>&nbsp;★732 - vue.js开发微信app界面
                    </li>
                    <li><a href="https://github.com/lzxb/vue2-demo" target="_blank">vue2-demo</a>&nbsp;★699 - 从零构建vue2 + vue-router + vuex 开发环境
                    </li>
                    <li><a href="https://github.com/liangxiaojuan/eleme" target="_blank">eleme</a>&nbsp;★612 - 高仿饿了么app商家详情
                    </li>
                    <li><a href="https://github.com/kenberkeley/vue-demo" target="_blank">vue-demo</a>&nbsp;★575 - vue简易留言板
                    </li>
                    <li><a href="https://github.com/zhengguorong/maizuo" target="_blank">maizuo</a>&nbsp;★498 - vue/vuex/redux仿卖座网
                    </li>
                    <li><a href="https://github.com/codecasts/spa-starter-kit" target="_blank">spa-starter-kit</a>&nbsp;★489 - 单页应用启动套件
                    </li>
                    <li><a href="https://github.com/Sioxas/vue-music" target="_blank">vue-music</a>&nbsp;★485 - Vue 音乐搜索播放
                    </li>
                    <li><a href="https://github.com/jiakeqi/douban" target="_blank">douban</a>&nbsp;★402 - 模仿豆瓣前端</li>
                    <li><a href="https://github.com/liangxiaojuan/vue-Meizi" target="_blank">vue-Meizi</a>&nbsp;★394 - vue最新实战项目
                    </li>
                    <li><a href="https://github.com/yatessss/zhihudaily-vue" target="_blank">zhihudaily-vue</a>&nbsp;★386 - 知乎日报web版
                    </li>
                    <li><a href="https://github.com/lavyun/vue-demo-kugou" target="_blank">vue-demo-kugou</a>&nbsp;★310 - vuejs仿写酷狗音乐webapp
                    </li>
                    <li><a href="https://github.com/SimonZhangITer/VueDemo_Sell_Eleme" target="_blank">VueDemo_Sell_Eleme</a>&nbsp;★307 - Vue2高仿饿了么外卖平台
                    </li>
                    <li><a href="https://github.com/canfoo/vue2.0-taopiaopiao" target="_blank">vue2.0-taopiaopiao</a>&nbsp;★246 - vue2.0与express构建淘票票页面
                    </li>
                    <li><a href="https://github.com/jiangjiu/vue-leancloud-blog" target="_blank">vue-leancloud-blog</a>&nbsp;★239 - 一个前后端完全分离的单页应用
                    </li>
                    <li><a href="https://github.com/yjj5855/node-vue-server-webpack" target="_blank">node-vue-server-webpack</a>&nbsp;★239 - Node.js+Vue.js+webpack快速开发框架
                    </li>
                    <li><a href="https://github.com/wendaosanshou/mi-by-vue" target="_blank">mi-by-vue</a>&nbsp;★222 - VueJS仿小米官网
                    </li>
                    <li><a href="https://github.com/okoala/vue-fis3" target="_blank">vue-fis3</a>&nbsp;★199 - 流行开源工具集成demo
                    </li>
                    <li><a href="https://github.com/superman66/vue2.x-douban" target="_blank">vue2.x-douban</a>&nbsp;★188 - Vue2实现简易豆瓣电影webApp
                    </li>
                    <li><a href="https://github.com/ChuckCZC/vue-demo-maizuo" target="_blank">vue-demo-maizuo</a>&nbsp;★188 - 使用Vue2全家桶仿制卖座电影
                    </li>
                    <li><a href="https://github.com/iHaPBoy/vue-zhihudaily" target="_blank">vue-zhihudaily</a>&nbsp;★169 - 知乎日报 Web 版本
                    </li>
                    <li><a href="https://github.com/liujians/vue-adminLte-vue-router" target="_blank">vue-adminLte-vue-router</a>&nbsp;★162 - vue和adminLte整合应用
                    </li>
                    <li><a href="https://github.com/superman66/vue-axios-github" target="_blank">vue-axios-github</a>&nbsp;★157 - 登录拦截登出功能
                    </li>
                    <li><a href="https://github.com/pomelo-chuan/Zhihu-Daily-Vue.js"
                           target="_blank">Zhihu-Daily-Vue.js</a>&nbsp;★134 - Vuejs单页网页应用
                    </li>
                    <li><a href="https://github.com/rokups/hello-vue-django" target="_blank">hello-vue-django</a>&nbsp;★113 - 使用带有Django的vuejs的样板项目
                    </li>
                    <li><a href="https://github.com/wszgxa/vue-cnode" target="_blank">vue-cnode</a>&nbsp;★101 - vue单页应用demo
                    </li>
                    <li><a href="https://github.com/CommanderXL/x-blog" target="_blank">x-blog</a>&nbsp;★100 - 开源的个人blog项目
                    </li>
                    <li><a href="https://github.com/xrr2016/vue-express-mongodb" target="_blank">vue-express-mongodb</a>&nbsp;★96 - 简单的前后端分离案例
                    </li>
                    <li><a href="https://github.com/secreter/websocket_chat" target="_blank">websocket_chat</a>&nbsp;★91 - 基于vue和websocket的多人在线聊天室
                    </li>
                    <li><a href="https://github.com/beidan/photoShare" target="_blank">photoShare</a>&nbsp;★85 - 基于图片分享的社交平台
                    </li>
                    <li><a href="https://github.com/cs1707/vue-zhihudaily-2.0" target="_blank">vue-zhihudaily-2.0</a>&nbsp;★81 - 使用Vue2.0+vue-router+vuex创建的zhihudaily
                    </li>
                    <li><a href="https://github.com/lin-xin/notepad" target="_blank">notepad</a>&nbsp;★77 - 本地存储的记事本
                    </li>
                    <li><a href="https://github.com/elva2596/vueBlog" target="_blank">vueBlog</a>&nbsp;★75 - 前后端分离博客
                    </li>
                    <li><a href="https://github.com/hql123/vue-ruby-china" target="_blank">vue-ruby-china</a>&nbsp;★70 - VueJS框架搭建的rubychina平台
                    </li>
                    <li><a href="https://github.com/littlewin-wang/Zhihu_Daily" target="_blank">Zhihu_Daily</a>&nbsp;★70 - 基于Vue和Nodejs的Web单页应用
                    </li>
                    <li><a href="https://github.com/Molunerfinn/vue-koa-demo" target="_blank">vue-koa-demo</a>&nbsp;★60 - 使用Vue2和Koa1的全栈demo
                    </li>
                    <li><a href="https://github.com/vincentSea/vue2.x-Cnode" target="_blank">vue2.x-Cnode</a>&nbsp;★50 - 基于vue全家桶的Cnode社区
                    </li>
                    <li><a href="https://github.com/shaqihe/life-app-vue" target="_blank">life-app-vue</a>&nbsp;★49 - 使用vue2完成多功能集合到小webapp
                    </li>
                    <li><a href="https://github.com/SidKwok/github-explorer" target="_blank">github-explorer</a>&nbsp;★49 - 寻找最有趣的GitHub库
                    </li>
                    <li><a href="https://github.com/wenye123/vue-trip" target="_blank">vue-trip</a>&nbsp;★48 - vue2做的出行webapp
                    </li>
                    <li><a href="https://github.com/albertchan/vue-ssr-boilerplate"
                           target="_blank">vue-ssr-boilerplate</a>&nbsp;★47 - 精简版的ofvue-hackernews-2
                    </li>
                    <li><a href="https://github.com/nswbmw/vue-bushishiren" target="_blank">vue-bushishiren</a>&nbsp;★45 - 不是诗人应用
                    </li>
                    <li><a href="https://github.com/peng1992/houtai" target="_blank">houtai</a>&nbsp;★44 - 基于vue和Element的后台管理系统
                    </li>
                    <li><a href="https://github.com/QRL909109/ios7-vue" target="_blank">ios7-vue</a>&nbsp;★38 - 使用vue2.0 vue-router vuex模拟ios7
                    </li>
                    <li><a href="https://github.com/tyllo/Framework7-VueJS" target="_blank">Framework7-VueJS</a>&nbsp;★38 - 使用移动框架的示例
                    </li>
                    <li><a href="https://github.com/BubblyPoker/cnode-vue" target="_blank">cnode-vue</a>&nbsp;★37 - 基于vue和vue-router构建的cnodejs web网站SPA
                    </li>
                    <li><a href="https://github.com/zhoou/vue-cli-multipage-bootstrap" target="_blank">vue-cli-multipage-bootstrap</a>&nbsp;★36 - 将vue官方在线示例整合到组件中
                    </li>
                    <li><a href="https://github.com/jiananle/vue-cnode" target="_blank">vue-cnode</a>&nbsp;★34 - 用 Vue 做的 CNode 官网
                    </li>
                    <li><a href="https://github.com/GitaiQAQ/HyaReader" target="_blank">HyaReader</a>&nbsp;★30 - 移动友好的阅读器
                    </li>
                    <li><a href="https://github.com/xrr2016/zhihu-daily" target="_blank">zhihu-daily</a>&nbsp;★28 - 轻松查看知乎日报内容
                    </li>
                    <li><a href="https://github.com/Alex-xd/seeMusic" target="_blank">seeMusic</a>&nbsp;★27 - 跨平台云音乐播放器
                    </li>
                    <li><a href="https://github.com/Damonlw/vue-cnode" target="_blank">vue-cnode</a>&nbsp;★22 - 使用cNode社区提供的接口
                    </li>
                    <li><a href="https://github.com/moonou/zhihu-daily-vue" target="_blank">zhihu-daily-vue</a>&nbsp;★20 - 知乎日报
                    </li>
                    <li><a href="https://github.com/sailengsi/sls-vuex2-demo" target="_blank">sls-vuex2-demo</a>&nbsp;★20 - vuex2商城购物车demo
                    </li>
                    <li><a href="https://github.com/ITCNZ/vue-dropload" target="_blank">vue-dropload</a>&nbsp;★17 - 用以测试下拉加载与简单路由
                    </li>
                    <li><a href="https://github.com/soulcm/vue-cnode-mobile" target="_blank">vue-cnode-mobile</a>&nbsp;★17 - 搭建cnode社区
                    </li>
                    <li><a href="https://github.com/fishenal/Vuejs-SalePlatform" target="_blank">Vuejs-SalePlatform</a>&nbsp;★17 - vuejs搭建的售卖平台demo
                    </li>
                    <li><a href="https://github.com/Halfeld/v-notes" target="_blank">v-notes</a>&nbsp;★17 - 简单美观的记事本
                    </li>
                    <li><a href="https://github.com/BosNaufal/vue-starter" target="_blank">vue-starter</a>&nbsp;★16 - VueJs项目的简单启动页
                    </li>
                    <li><a href="https://github.com/youknowznm/vue-memo" target="_blank">vue-memo</a>&nbsp;★7 - 用 vue写的记事本应用
                    </li>
                  </ul>
                </div>
                <div id="MySignature"></div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          <div class="sourceaa">
            <el-table ref="multipleTable" :data="tableData3" :max-height="200" border tooltip-effect="dark" style="width: 100%"
                      @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="date" resizable sortable label="日期" width="120">
                <template scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" resizable label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="address" resizable show-overflow-tooltip label="地址">
              </el-table-column>
              <el-table-column prop="city" resizable label="市区">
              </el-table-column>
              <el-table-column prop="province" resizable label="省份">
              </el-table-column>
              <el-table-column prop="zip" resizable label="邮编">
              </el-table-column>
              <el-table-column label="操作" width="180">
                <template scope="scope">
                  <el-button
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑
                  </el-button>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="clear: both"></div>
            <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[5, 10, 15, 20]" :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="20">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // tab 默认选择项
        activeName: 'first',

        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        },

        //分页
        currentPage4: 0,
        //表格数据
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
      };
    },

    // 方法
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //表格编辑删除
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }

</script>

<style>
  .source {
    padding: 24px;
    border-bottom: 1px solid #eaeefb;
  }

  .sourceaa {
    padding: 15px;
    background: #F6E497;
    overflow: hidden;
  }

  .el-tabs__header {
    margin-bottom: 0;
  }

  .demo-form {
    width: 470px;
  }

  .line {
    text-align: center;
  }

  .el-checkbox-group .el-checkbox {
    float: left;
    width: 160px;
    margin: 0;
    padding: 0;
  }

  .el-checkbox-group .el-checkbox + .el-checkbox {
    margin-left: 0;
  }

  .post .postTitle {
    font-size: 130%;
    font-weight: bold;
    border-bottom: 1px solid #999;
    float: left;
    line-height: 1.5em;
    width: 100%;
    padding-left: 5px;
  }

  .postBody {
    line-height: 1.5em;
  }

  .postBody {
    padding: 5px 2px 5px 5px;
    line-height: 1.5em;
    color: #000;
  }

  .clear {
    clear: both;
  }

  #cnblogs_post_body p {
    margin: 10px auto;
    text-indent: 0;
  }

  #cnblogs_post_body h3 {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    margin: 10px 0;
  }

  /*  #cnblogs_post_body {
      background: #f6e497;
    }*/

  #cnblogs_post_body ul {
    margin-left: 30px;
    padding-left: 0;
  }

  #cnblogs_post_body ul li {
    list-style-type: disc;
  }

  .postBody a:link, .postBody a:visited, .postBody a:active {
    text-decoration: underline;
    color: #1d90e6;
  }

  .postBody a:hover {
    color: #1ABC9C;
    text-decoration: none;
  }

  .postBody li, .postCon li {
    list-style-type: disc;
    margin-bottom: 1em;
  }

  .pagination {
    margin-top: 10px;
    float: right;
  }
</style>

<template>
  <div>
    <div id="floor-map"></div>
    <div id="main-info">
      <div class="pop-content">
        <div class="pop-main">
          <h4>医院信息</h4>
          <p>改造总建筑面积: 31351.25㎡</p>
          <p>新建总建筑面积: 27780.41㎡</p>
          <p>总用地面积面积: 65774.35㎡</p>
          <p>医院资质: 二级甲等</p>
        </div>
      </div>
    </div>
    <div id="label_menzhenlou">
      <div class="label-text-bg"></div>
    </div>
    <div id="label_neikelou">
      <div class="label-text-bg"></div>
    </div>
    <div id="label_waikelou">
      <div class="label-text-bg"></div>
    </div>
    <div v-if="complited" class="loading">
      <div class="progress_bar">
        <el-progress  :percentage="percentage" ></el-progress>
      </div>
    </div>
    <div id="popup">
      <div class="popup-cont">
        <div class="popup-cen animated zoomIn" :style="{ top: calcPopTop }">
          <div class="title">
            <div class="text1">
              <span>{{ devPopName }}</span> <span>{{ devPopNum }}</span>
            </div>
            <span class="close el-icon-close" @click="closePopup"></span>
          </div>
          <div class="popup-content">
            <div class="content" v-if="devPopTypeName === '照明'">
              <div class="c_item clearfix">
                <span class="fl">型号</span>
                <span>欧普1900W3200850D</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">位置</span>
                <span>急诊室一楼</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">工作状态</span>
                <span>开启</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">控制</span>
                <el-switch v-model="popupswval" @change="swChangeHander" active-color="#18a3b0" active-text="开" inactive-color="#625b5b" inactive-text="关"> </el-switch>
              </div>
            </div>
            <div class="content" v-if="devPopTypeName === '烟雾传感器'">
              <div class="ywq-text">
                <div class="content">
                  <div class="c_item clearfix">
                    <span class="fl">型号</span>
                    <span>海康威视1900W3200850D</span>
                  </div>
                  <div class="c_item clearfix">
                    <span class="fl">位置</span>
                    <span>急诊室一楼</span>
                  </div>
                  <div class="c_item clearfix">
                    <span class="fl">工作状态</span>
                    <span>开启</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="content" v-if="devPopTypeName === '摄像机'">
              
              <div class="camera">
                <video src="../../../public/img/sample/Camera_in.mp4" muted="muted" loop="loop" controls="controls" autoplay="autoplay" style="height: 100%; width: 100%"></video>
              </div>
              <div class="c_item clearfix">
                <span class="fl">型号</span>
                <span>海康威视200850D</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">位置</span>
                <span>急诊室一楼</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">工作状态</span>
                <span>开启</span>
              </div>
              <div v-if="sxj_show_type">
                <div class="c_item clearfix">
                  <span class="fl">告警起始时间</span>
                  <span>2021-05-31 15:35:25</span>
                </div>
                <div class="c_item clearfix">
                  <span class="fl">告警结束时间</span>
                  <span>2021-06-01 15:35:25</span>
                </div>
                <div class="warning-btn-text">告警确认</div>
              </div>
              <div class="control">
                <div class="split-line"></div>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="云台控制" name="control">
                    <div class="d-control">
                      <div class="d-fangxiang">
                        <div class="d-big">
                          <div class="circle-r">
                            <div class="circle-item">
                              <div class="circle circle-1">
                                <span class="trangle1"></span>
                              </div>
                              <div class="circle circle-2">
                                <span class="trangle2"></span>
                              </div>
                            </div>
                            <div class="circle-item"> 
                              <div class="circle circle-3">
                                <span class="trangle3"></span>
                              </div>
                              <div class="circle circle-4">
                                <span class="trangle4"></span>
                              </div>
                            </div>
                          </div>
                          <div class="circle-s"></div>
                          <div class="circle-l"></div>
                        </div>
                      </div>
                      <div class="d-scale">
                        <div class="d-v">
                          <div class="d-v-top el-icon-plus"></div>
                          <div class="d-v-bottom el-icon-minus"></div>
                        </div>
                      </div>
                    </div>   
                  </el-tab-pane>
                  <el-tab-pane label="历史回放" name="history">
                    <div class="c_item clearfix">
                      <span class="fl">回放时间段</span>
                      <div class="select-time fr">
                        <el-select v-model="value2" placeholder="" popper-class="select-time-drop">
                          <el-option label="最近1小时" value="1"></el-option>
                          <el-option label="最近6小时" value="6"></el-option>
                          <el-option label="最近12小时" value="12"></el-option>
                          <el-option label="最近1天" value="24"></el-option>
                        </el-select>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
                
                <div class="split-line"></div>
                
                <div class="split-line"></div>
              </div>
            </div>
            <div class="content" v-if="devPopTypeName === '空调'">
              <div class="c_item clearfix">
                <span class="fl">型号</span>
                <span>格力JK5000T001</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">位置</span>
                <span>手术室一楼</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">冷暖类型</span>
                <span>冷暖型</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">能耗等级</span>
                <span>三级</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">制冷量</span>
                <span>3500W</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">制热量</span>
                <span>4000W</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">工作状态</span>
                <span>开启</span>
              </div>
            </div>
            <div class="content" v-if="devPopTypeName === '配电柜'">
              <div class="img-content">
                <img src="../../../public/img/sample/air.png" alt="" />
              </div>
            </div>
            <div class="content" v-if="devPopTypeName === '消防'">
              <div class="c_item clearfix">
                <span class="fl">名称</span>
                <span>地上消防栓</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">位置</span>
                <span>手术室一楼</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">型号</span>
                <span>SS150/80-1.6</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">品牌</span>
                <span>民泰</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">类型</span>
                <span>消火栓</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">灭火剂类型</span>
                <span>水溶剂</span>
              </div>
            </div>
            <div class="content" v-if="devPopTypeName === '给排水'">
              <div class="c_item clearfix">
                <span class="fl">名称</span>
                <span>排水泵</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">位置</span>
                <span>门诊楼一层水泵房</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">型号</span>
                <span>65QZ40/50</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">流量</span>
                <span>40 m³/h</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">输入转速</span>
                <span>1080 r/min</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">功率</span>
                <span>10.05 KW</span>
              </div>
            </div>
            <div class="content" v-if="devPopTypeName === '正负压'">
              <div class="c_item clearfix">
                <span class="fl">名称</span>
                <span>负压病房1</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">位置</span>
                <span>门诊楼一层护士站</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">房间压差</span>
                <span>53.6 Pa</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">排风量</span>
                <span>40 m³/h</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">设定值</span>
                <span>160 Pa</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">排风阀开度</span>
                <span>90 %</span>
              </div>
            </div>
            <div class="content" v-if="devPopTypeName === '水表'">
              <div class="c_item clearfix">
                <span class="fl">名称</span>
                <span>水表</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">位置</span>
                <span>门诊楼一层护士站</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">当前用水量</span>
                <span>169859.85 m³</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">总用水量</span>
                <span>89862540.59 m³</span>
              </div>
            </div>
            <div class="content" v-if="devPopTypeName === '电表'">
              <div class="c_item clearfix">
                <span class="fl">名称</span>
                <span>电表</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">位置</span>
                <span>门诊楼一层护士站</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">当前用电量</span>
                <span>5899.58 kw</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">峰用电量</span>
                <span>59.58 kw</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">谷用电量</span>
                <span>36.98</span>
              </div>
              <div class="c_item clearfix">
                <span class="fl">总用电量</span>
                <span>39953666.56 kw</span>
              </div>
            </div>
          </div>
          <div class="popup-fotter">
            <el-button type="primary" size="small">告警确认</el-button>
          </div>
        </div>
        <div class="popup-line">
          <img src="../../../public/img/t2.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <div class="pop-3d-name">
      <div>模型名称: {{model_3d_ame}} <button  id="copy-model" :data-clipboard-text="model_3d_ame" style="cursor:pointer">复制</button></div>
    </div> -->
  </div>
    
</template>

<script>
let scene
// 创建分组，楼宇组，环境组， 标签组，楼层组，虚拟楼宇组,模型设备组，模型家居组，弹出框组
let mainGroup, environmentGroup, labelGroup, floorGroup, boxsGroup, shebeiFloorGroup, jiajuFloorGroup, popupGroup, highlightgroup
let camera
let controls 
let renderer
let renderEnabled = true
let timeOut = null
let threeStatus = null
let composer = null
let outlinePass = null
let labelRenderer = null
let accordionShebei = null
let accordionFloor = null
let accordionJiaju = null

import { mapGetters, mapMutations, mapState } from 'vuex'

import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader' //three 1.3.2版本
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'

// 后期处理
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass' 
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'


// 引入汽车类
import CarFactory from '../../plugin/CarFactory/CarFactory'
// 引入楼层手风琴类
import AccordionGroup from '../../plugin/AccordionGroup/AccordionGroup'


import FlyCurve  from '../../plugin/FlyCurve/index.js'


//引入动画库
import anime from 'animejs' 
import TWEEN from '@tweenjs/tween.js'


// 引入公共函数
import { getBoxCenter, flyToModel } from '../../util/util'

// 引入常量
import { MODEL_NAME, FLOORS } from '@/mock/mock_constant.js'

import { objList, loadedNum } from './model.js'

// three性能监听
import Stats from 'three/examples/js/libs/stats.min.js'

import Clipboard from 'clipboard'

export default {
  name: 'three-demo',
  data(){
    return {
      percentage: 0,
      haveLoadNum: 1,
      hoverColor: new THREE.Color(0, 1, 0),
      objName: {
        menzhenlou: '门诊楼',
        neikelou: '内科楼',
        waikelou: '外科楼'
      },
      activeFloorIndex: null,
      complited: true,
      calcPopTop: 0,
      devPopTypeName: null, // 弹出框设备名称类型
      devPopNum: null, // 弹出框设备编号
      devPopName: '',
      model_3d_ame: '',
      iconType: null,
      devType: null, // 打开当前楼层所属设备类型
      lightArr: [] //照明回路集合
    } 
  },
  watch: {
  },
  computed: {
    ...mapState({
      position: state => state.camera.position, // 获取相机的初始原始位置轨道控制器的默认目标位置
      controlsTargetPosition: state => state.camera.controlsTargetPosition,  // 当前轨道控制器的默认目标位置
      openFloorIndex: state => state.floor.openFloorIndex, // 获取打开的楼层
    }),
    ...mapGetters([])
  },
  mounted(){
    console.log('three')
    this.init()
    this.animate()
    this.initStatus()
    
    window.addEventListener('resize', function () {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    })
    // 切换楼层跳转
    EventBus.$on('floorChange', (data) =>{
      this.openFloor(data.floorName, data.floorIndex)
      if(data.devType && data.devType == 'zhaoming') {
        this.devType = data.devType
        this.lightArr = data.devList
      }
    })
    // 模型跳转
    EventBus.$on('flyToModel', (data) =>{
      this.openFloor(data.name, data.floorIndex, data.source)
    })


    // 左侧菜单响应事件
    EventBus.$on('tab_index', (data) => {
      if(data) {
        this.iconType = data
      }
      if(data == 'dianti') {
        
        this.setModeltransparent_fun(0.2)
        this.transparentModel(false)
        flyToModel(camera, controls, mainGroup, 'waikelou', true)
        let meshArr = mainGroup.getObjectByName('waikelou').children[0].children
        for(let i =0; i<meshArr.length; i++) {
          if(meshArr[i].name.includes('dianti_')){
            meshArr[i].material.emissive = new THREE.Color(0, 1, 0)
            meshArr[i].material.emissiveIntensity = 2
            meshArr[i].material.opacity = 1
            meshArr[i].material.transparent = false
            meshArr[i].material.depthWrite = true
          }
          if(meshArr[i].name.includes('diantijing_')){
            meshArr[i].material.emissive = new THREE.Color(0,0,0)
            meshArr[i].material.emissiveIntensity = 1
            
          }
        }
        mainGroup.children.forEach((obj) => {
          if(obj.name == 'waikelou') {
            obj.visible = true
          } else {
            obj.visible = false
          }
        })
      } else if(data == 'shipin' ){
        
      } else {
        this.unsetModeltransparent_fun()
      }
    })
    // 底部菜单响应事件
    EventBus.$on('changeMenu', (data) => {
      if(data == 1) {
        this.iconType = null
      }
    })
    new Clipboard('#copy-model')

  },  
  methods: {
    init(){
      window.materialList = {}
      const width = window.innerWidth // 窗口宽度
      const height = window.innerHeight // 窗口高度
      
      camera = new THREE.PerspectiveCamera(60, width / height, 1, 5000)
      camera.position.set(0, 80, 130)
      window.camera = camera
      scene = new THREE.Scene()
      window.scene = scene
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        logarithmicDepthBuffer: true,
        alpha:true
      })
      
      renderer.autoClear = false

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)
      document.getElementById('floor-map').appendChild(renderer.domElement)



    
      // 创建分组
      mainGroup = new THREE.Group() // 主体楼宇组
      window.mainGroup = mainGroup

      labelGroup = new THREE.Group() // 标签label组
      window.labelGroup = labelGroup

      floorGroup = new THREE.Group() //楼层模型组
      window.floorGroup = floorGroup

      environmentGroup = new THREE.Group() // 环境组
      window.environmentGroup = environmentGroup

      boxsGroup = new THREE.Group() // 虚拟楼宇组
      window.boxsGroup = boxsGroup

      shebeiFloorGroup = new THREE.Group()
      window.shebeiFloorGroup = shebeiFloorGroup

      jiajuFloorGroup = new THREE.Group()
      window.jiajuFloorGroup = jiajuFloorGroup

      popupGroup = new THREE.Group() // 弹出框组
      window.popupGroup = popupGroup

      highlightgroup = new THREE.Group()
      window.highlightgroup = highlightgroup

      window.mixerlist = [] //存储动画模型
      window.clock = new THREE.Clock()


      // 所有监控设备精灵模型集合
      window.group_shipin = new THREE.Group() 
      // 所有电表设备精灵模型集合
      window.group_dianbiao = new THREE.Group()
      // 所有水表设备精灵模型集合
      window.group_shuibiao = new THREE.Group()

      window.group_icon_list = {}
      group_icon_list['group_shipin'] = group_shipin
      group_icon_list['group_shuibiao'] = group_shuibiao
      group_icon_list['group_dianbiao'] = group_dianbiao


      scene.add(mainGroup)
      scene.add(labelGroup)
      scene.add(floorGroup)
      scene.add(environmentGroup)
      scene.add(boxsGroup)
      scene.add(shebeiFloorGroup)
      scene.add(popupGroup)
      scene.add(jiajuFloorGroup)

      scene.add(group_shipin)
      scene.add(group_dianbiao)
      scene.add(group_shuibiao)

      scene.add(highlightgroup)

      controls = new OrbitControls(camera, renderer.domElement)
      controls.minZoom = 0.15
      controls.maxZoom = 1500
      controls.enableZoom = true
      controls.minPolarAngle = 0
      controls.maxPolarAngle = 1.56
      controls.enableDamping = true //设置惯性开启
      controls.dampingFactor = 0.3

      
      window.controls = controls
      window.controls.target = new THREE.Vector3(0, 0, 0)
      // 添加控制器组件
      // this.addControls()

       

      // 创建后期处理
      var renderPass = new RenderPass(scene, camera)

      outlinePass = new OutlinePass(new THREE.Vector2(width, height), scene, camera)
      outlinePass.visibleEdgeColor = this.hoverColor // 边缘可见部分发颜色 
      outlinePass.hiddenEdgeColor = this.hoverColor  // 边缘遮挡部分发光颜色
      outlinePass.edgeThickness = 5 //边缘浓度
      outlinePass.edgeStrength = Number(10);  //边框的亮度

      composer = new EffectComposer(renderer)
      composer.addPass(renderPass)
      composer.addPass(outlinePass)

      var FXAAShaderPass = new ShaderPass(FXAAShader)
      FXAAShaderPass.renderToScreen = true
      FXAAShaderPass.uniforms.resolution.value.set(1 / width, 1 / height)
      composer.addPass(FXAAShaderPass)

     

      this.loadCarFactory()
      this.loadFlyCurve()

      this.createFog()
      this.initCSSRender()
      this.setLight()
      this.initSky().then(() => {
        this.loadModel().then(()=> {
          // this.timeRender()
          this.setScenePosition()
          this.bindEvents()
          // 创建虚拟材质手风琴类
          accordionShebei = new AccordionGroup(shebeiFloorGroup, {
            distence: 40,
            duration: 1000
          })
          // 创建楼层手风琴类
          accordionFloor = new AccordionGroup(floorGroup, {
            distence: 40,
            duration: 1000
          })
          accordionJiaju = new AccordionGroup(jiajuFloorGroup, {
            distence: 40,
            duration: 1000
          })
          mainGroup.traverse((e) => {
            if (e.material) {
              if (Array.isArray(e.material)) {
                e.material.forEach((m) => {
                  m.userData.selfColor = m.color
                  m.userData.selfOpcity = m.opacity
                  m.userData.selfTransparent = m.transparent
                })
              } else {
                e.material.userData.selfColor = e.material.color
                e.material.userData.selfOpcity = e.material.opacity
                e.material.userData.selfTransparent = e.material.transparent
              }
            }
          })
          this.loadAllTypeIcon()
        })
      })  
      
      //   var geometry = new THREE.BufferGeometry(); //声明一个空几何体对象
       
      //   let positions = new Float32Array([
      //     7,0,-78, // 0
      //     7,0,-72, // 1
      //     15,0,-72, // 2
      //     15,0,-78 // 3
      //   ]);
      //   geometry.attributes.position = new THREE.BufferAttribute(positions, 3)
      //   console.log(geometry)
      //   // var normals = new Float32Array([
      //   //   0, 1, 0, //顶点1法向量
      //   //   0, 1, 0, //顶点2法向量
      //   //   0, 1, 0, //顶点3法向量
      //   //   0, 1, 0, //顶点4法向量
      //   // ])
      //   // geometry.attributes.normal = new THREE.BufferAttribute(normals, 3)
      //   var indexes = new Uint16Array([
      //     0, 1, 2, 0, 2, 3,
      //   ])
      //   geometry.index = new THREE.BufferAttribute(indexes, 1); //1个为一组
      //   var uvs = new Float32Array([
      //     0,1, //图片左上角biao
      //     0,0, //图片左下角
      //     1,0, //图片右下角
      //     1,1, //图片右上角
          
      //   ]);
      //   console.log(uvs)
      //   geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2)
      //   let texture = new THREE.CanvasTexture(getTextCanvas1())
      //   var material = new THREE.MeshBasicMaterial({
      //       map: texture,
      //       color: 0xff0000,//三角面颜色
      //       side:THREE.DoubleSide,//两面可见
      //       opacity: 0.5
      //   });//材质对象
      //   var mesh=new THREE.Mesh(geometry, material);//网格模型对象
      //   var group = new THREE.Group()
      //   group.add(mesh)
      //   scene.add(group);//网格模型添加到场景中

      //   function getTextCanvas1(){ 
      //     let texts=[{
      //         name:"北京",
      //         value:323
      //     },{
      //         name:"杭州",
      //         value:121
      //     },{
      //         name:"南京",
      //         value:56
      //     }]
      //     var width=512, height=256; 
      //     var canvas = document.createElement('canvas');
      //     canvas.width = width;
      //     canvas.height = height;
      //     var ctx = canvas.getContext('2d');
      //     ctx.fillStyle = '#C3C3C3';
      //     ctx.fillRect(0, 0, width, height);
      //     ctx.font = 32+'px bold';
      //     ctx.fillStyle = '#2891FF';
      //     texts.forEach((text,index)=>{
      //         ctx.fillText(`${text.name}:${text.value}`, 10, 32 * index + 30);
      //     }) 
      //     return canvas;
      // }
    },
    // 创建文字渲染器
    initCSSRender(){
      labelRenderer = new CSS2DRenderer()
      labelRenderer.setSize(window.innerWidth, window.innerHeight)
      labelRenderer.domElement.style.position = 'absolute'
      labelRenderer.domElement.style.zIndex = '9'
      labelRenderer.domElement.style.top = '0'
      labelRenderer.domElement.style.pointerEvents = 'none'
      document.body.appendChild(labelRenderer.domElement)
    },
    createFog(){
      // 添加雾化
      const fog = new THREE.Fog('#C1DBFE', 0.015, 3000)
      scene.fog = fog // 雾化效果
      const directionalLight = new THREE.DirectionalLight('#fff', 1)
      directionalLight.position.set(-1800, 800, -1800)
      const d = 5000
      directionalLight.shadow.camera.near = 0 // 产生阴影的最近距离
      directionalLight.shadow.camera.far = 8000 // 产生阴影的最远距离
      directionalLight.shadow.camera.left = -d // 产生阴影距离位置的最左边位置
      directionalLight.shadow.camera.right = d // 最右边
      directionalLight.shadow.camera.top = d // 最上边
      directionalLight.shadow.camera.bottom = -d // 最下面
      directionalLight.shadow.mapSize.height = 1024 * 4
      directionalLight.shadow.mapSize.width = 1024 * 4
      directionalLight.castShadow = true
      directionalLight.shadowDarkness = 5
      scene.add(directionalLight)
    },
    animate(){
      requestAnimationFrame(this.animate)
      controls.update()
      if (renderEnabled) {
        renderer.render(scene, camera)
      }
      if(labelRenderer){
        labelRenderer.render(scene, camera);
      }
      if(threeStatus){
        threeStatus.update()
      }
      if(composer){
        composer.render()
      }
      //刷新动画帧
      if (mixerlist.length > 0) {
        for (var i = 0; i < mixerlist.length; i++) {
          mixerlist[i].update(clock.getDelta())
        }
      }
      TWEEN.update()
    },
    setLight() {
      window.groupLight = new THREE.Group() // 弹出层
      
      var light1 = new THREE.DirectionalLight('#ffffff') // 光源颜色
      light1.position.set(-1000, 1000, 1000) // 光源位置
      window.groupLight.add(light1) // 光源添加到场景中

      var light2 = new THREE.DirectionalLight('#ffffff') // 光源颜色
      light2.position.set(1000, 1000, -1000) // 光源位置
      window.groupLight.add(light2) // 光源添加到场景中

      var ambientLight = new THREE.AmbientLight('white', 2.0)
      ambientLight.intensity = 0.1
      window.groupLight.add(ambientLight)
      scene.add(window.groupLight)
      

    },
    initSky() {
      return new Promise((resolve, reject) => {
        const sides = [
          './img/sky/bluesky/sky.left.jpg',
          './img/sky/bluesky/sky.right.jpg',
          './img/sky/bluesky/sky.top.jpg',
          './img/sky/bluesky/sky.bottom.jpg',
          './img/sky/bluesky/sky.back.jpg',
          './img/sky/bluesky/sky.front.jpg'
        ]
        const scCube = new THREE.CubeTextureLoader().load(sides, () => {
          scCube.format = THREE.RGBAFormat
          const sides2 = [
            './img/sky/night/posx.jpg',
            './img/sky/night/negx.jpg',
            './img/sky/night/posy.jpg',
            './img/sky/night/negy.jpg',
            './img/sky/night/posz.jpg',
            './img/sky/night/negz.jpg'
          ]
          const scCube2 = new THREE.CubeTextureLoader().load(sides2, () => {
            scCube2.format = THREE.RGBAFormat
            const sides3 = [
              './img/sky/transparent/posx.jpg',
              './img/sky/transparent/negx.jpg',
              './img/sky/transparent/posy.jpg',
              './img/sky/transparent/posx.jpg',
              './img/sky/transparent/posz.jpg',
              './img/sky/transparent/negz.jpg'
            ]
            const scCube3 = new THREE.CubeTextureLoader().load(sides3, () => {
              scCube3.format = THREE.RGBAFormat
              this.skyList = [scCube, scCube2, scCube3]
              window.skyList = this.skyList
              scene.background = this.skyList[0]
              resolve()
            })
          })
        })
      })
    },
    initStatus() {
      threeStatus = new Stats()
      threeStatus.setMode(0)
      threeStatus.domElement.style.position = 'absolute'
      threeStatus.domElement.style.bottom = '0px'
      threeStatus.domElement.style.top = 'inherit'
      threeStatus.domElement.style.left = '0px'
      document.body.appendChild(threeStatus.domElement)
    },
    loadModel() {
      const _this = this
      const objFileList = objList
      function onProgress(xhr, len) {
        if (xhr.lengthComputable) {
          _this.haveLoadNum = loadedNum + 1
          _this.percentage = parseInt((_this.haveLoadNum / len)*100)
          if(_this.percentage == 100) {
            console.log(_this.percentage)
            _this.complited = false
            _this.percentage = 0
          }
        }
      }

      return new Promise((resolve, reject) => {
        this.iterateLoad(objFileList, onProgress, function() {
          resolve()
        })
      })
    },
    iterateLoad(objFileList, onProgress, onAllLoad){
      let fileIndex = 0
      let _this = this
      let GLTFLoaders = new GLTFLoader()
      let dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('./model/draco/gltf/') // 这个是加载draco算法，这样才能解析压缩后的gltf模型格式.
      GLTFLoaders.setDRACOLoader(dracoLoader)
      function iterateLoadForIt() {
        GLTFLoaders.load(objFileList[fileIndex].url, function (obj) {
          objFileList[fileIndex].onload(obj)
          // 单独处理电梯动画
          if(objFileList[fileIndex].name) {
            if( objFileList[fileIndex].name == 'waikelou') {
              var mixer = new THREE.AnimationMixer(obj.scene)
              if (obj.animations.length > 0) {
                for (var mi = 0; mi < obj.animations.length; mi++) {
                  if(mi<4){
                    mixer.clipAction(obj.animations[mi]).play()
                    mixerlist.push(mixer)
                  }
                }
              }
            }
            // _this.initLabel(objFileList[fileIndex].name)
          }
          fileIndex++
          if (fileIndex < objFileList.length) {
            iterateLoadForIt()
          } else {
            if (onAllLoad) onAllLoad()
          }
          
        }, function(xhr) {
          if (objFileList[fileIndex].onProgress) objFileList[fileIndex].onProgress(xhr, fileIndex)
          if (onProgress) onProgress(xhr, objFileList.length)
        })
      }
      iterateLoadForIt()
        
    },
    // 创建楼层设备类型气泡
    loadAllTypeIcon(){
      let spriteMaterial_1 = new THREE.SpriteMaterial() // 监控图标

      let loader = new THREE.TextureLoader()
      // 加载监控图标
      loader.load('./img/sample/camera-icon.png', function(texture) {
        spriteMaterial_1.map = texture
        addpoint('shipin', spriteMaterial_1)
      })

      let list = ['F-1', 'F1', 'F2', 'F3', 'F3-5', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12']
      function addpoint(typeName, spriteObj) {
        let spriteMaterial = spriteObj
        let nametype = typeName
        for (let i = 0; i < list.length; i++) {
          if(WAIKELOU_FLOOR_G['waikelou_' + list[i] + '_' + typeName] && WAIKELOU_FLOOR_G['waikelou_' + list[i] + '_' + typeName].length != 0) {

          

            for(let k = 0; k< WAIKELOU_FLOOR_G['waikelou_' + list[i] + '_' + typeName].length; k++) {
                
                let item = WAIKELOU_FLOOR_G['waikelou_' + list[i] + '_' + typeName][k]
                let particle = new THREE.Sprite(spriteMaterial)
                  
                let x,y,z
                let box3 = new THREE.Box3().expandByObject(item)


                // 楼层平移之后的位置
                y = (box3.max.y + box3.min.y) / 2 + 0.8
                x = (box3.max.x + box3.min.x) / 2 
                z = (box3.max.z + box3.min.z) / 2 - 0.1
               


                particle.position.set(x, y, z)
                particle.scale.set(1.5, 1.5 ,1.5)
                particle.config = {
                  type: nametype
                }
                particle.name = item.name + '&' + list[i]
                // 默认位置新建变量保存起来，楼层平移会丢失原有位置，无法重置
              
                // 默认全部隐藏
                particle.visible = false
                
                if(typeName === 'zhaoming') {
                  // group_zhaoming.add(particle)
                } else if(typeName === 'shipin'){
                  group_shipin.add(particle)
                } else if(typeName === 'peidian'){
                  // group_peidian.add(particle)
                } else if(typeName === 'dianbiao'){
                  group_dianbiao.add(particle.clone())
                } else if(typeName === 'shuibiao') {
                  group_shuibiao.add(particle.clone())
                }
                  
            }
          }
        }
      }
    },
    displayTypeIcon(type){
      
      let f_name = this.getOpenFloorName(this.openFloorIndex).split('waikelou_')[1]
      for(var k in group_icon_list){
        if(k.split('_')[1] === type) {
          group_icon_list[k].visible = true
          for(var i = 0; i < group_icon_list[k].children.length; i++){
            var model_name = group_icon_list[k].children[i].name
            if(model_name.split('&')[1] == f_name) {
              group_icon_list[k].children[i].visible = true
            } else {
              group_icon_list[k].children[i].visible = false
            }
          }
        } else {
          // 全部按组隐藏
          group_icon_list[k].visible = false
        }
      }
      
    },
    // 绑定事件
    bindEvents() {
      const _this = this
      const el = document.getElementById('floor-map')
      el.addEventListener('mousemove', function(e) {
        if(!(e.target instanceof HTMLCanvasElement)){
          return
        }
        
        let obj = _this.getIntersectObject(e, camera , shebeiFloorGroup).objectList[0]
        if (obj) {
          outlinePass.selectedObjects = [obj.object.parent]
        } else {
          outlinePass.selectedObjects = []
        }
        
      })
      el.addEventListener('click', function(e) {
        let obj = _this.getIntersectObject(e, camera).objectList[0]
        if (obj && obj.object instanceof THREE.Mesh) {
          let name = obj.object.parent.name
          if(name.includes('zmxt') || name.includes('gpdxt') || name.includes('spjkxt')){
            // flyToModel(camera, controls, floorGroup, name).then(() => {
            //   _this.showpopup(obj.object.parent)
            // })
          }
          
          if(name.includes('zmxt-') || name.includes('gpdxt-') || name.includes('spjkxt-')){
            _this.model_3d_ame = obj.object.parent.name
          }
        }
      })
      el.addEventListener('dblclick', function(event) {
        event.preventDefault()
        let f_name = _this.openFloorIndex ? _this.getOpenFloorName(_this.openFloorIndex).split('waikelou_')[1] : null
        if(!(event.target instanceof HTMLCanvasElement)){
          return
        }
        const raycaster = new THREE.Raycaster()
        const raycasterMouse = new THREE.Vector2()
        let arr = []
        let arr2 = []
        let Sx = event.clientX
        let Sy = event.clientY

        
        raycasterMouse.x = (Sx / window.innerWidth) * 2 - 1
        raycasterMouse.y = -(Sy / window.innerHeight) * 2 + 1
        raycaster.setFromCamera(raycasterMouse, camera)

        
        for (let index = 0; index < shebeiFloorGroup.children.length; index++) {
          if(shebeiFloorGroup.children[index].name.split('_shebei_')[1] == f_name){
            arr = shebeiFloorGroup.children[index].children
          }
          
        }
        
        let raycasterObjectList = raycaster.intersectObjects(arr, true)
        if(raycasterObjectList.length == 0) {
          for(var k in group_icon_list){
            if(k.split('_')[1] == _this.iconType) {
              arr2 = group_icon_list[k].children
            }
          }
          raycasterObjectList = raycaster.intersectObjects(arr2, true)
        }
        console.log(raycasterObjectList)
        raycasterObjectList[0].object.parent.children[0].material = raycasterObjectList[0].object.parent.children[0].material.clone()
        raycasterObjectList[0].object.parent.children[0].material.color = new THREE.Color('red')
      })
    },
    getIntersectObject(event, camera, group){
      event.preventDefault()
      if(!(event.target instanceof HTMLCanvasElement)){
        return
      }
      const raycaster = new THREE.Raycaster()
      const raycasterMouse = new THREE.Vector2()

      let f_name = this.openFloorIndex ? this.getOpenFloorName(this.openFloorIndex).split('waikelou_')[1] : null
      let raycasterObjectList = []
      let arr = []
      let arr2 = []
      let Sx = event.clientX
      let Sy = event.clientY

      
      raycasterMouse.x = (Sx / window.innerWidth) * 2 - 1
      raycasterMouse.y = -(Sy / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(raycasterMouse, camera)

      for (let index = 0; index < shebeiFloorGroup.children.length; index++) {
        if(shebeiFloorGroup.children[index].name.split('_shebei_')[1] == f_name) {
          arr = shebeiFloorGroup.children[index].children
        }
        
      }

      if(group) {
        raycasterObjectList = raycaster.intersectObjects(arr, true) 
      } else {
        raycasterObjectList = raycaster.intersectObjects(arr, true)
        if(raycasterObjectList.length == 0) {
          for(var k in group_icon_list){
            if(k.split('_')[1] == this.iconType) {
              arr2 = group_icon_list[k].children
            }
          }
          raycasterObjectList = raycaster.intersectObjects(arr2, true)
        }
      }
      return {
        objectList: raycasterObjectList
      }
    },
    setScenePosition(){
      // 以门诊楼为视觉中心点方向去看场景
      var g = mainGroup.getObjectByName('menzhenlou')
      var bbox = new THREE.Box3()
      // 计算层级模型group包围盒
      bbox.expandByObject(g)
      var centerpoint = new THREE.Vector3()
      bbox.getCenter(centerpoint)

      camera.position.set(centerpoint.x, 80, 100)
     
      this.$store.commit('updateCameraPosition', {
        cameraDefaultPosition: {
          x: centerpoint.x, 
          y: 80, 
          z: 130
        },
        controlsTargetPosition: {
          x: centerpoint.x,
          y: centerpoint.y,
          z: centerpoint.z
        }
      })
      controls.target = new THREE.Vector3(centerpoint.x, centerpoint.y, centerpoint.z)
      controls.update()
    },
    /**
     * 
     * @param {*} name 模型名称 
     */
    flymodel(name){
      let g_center = getBoxCenter(floorGroup, name)
      let data = {
        px: camera.position.x,
        py: camera.position.y,
        pz: camera.position.z,
        tx: controls.target.x,
        ty: controls.target.y,
        tz: controls.target.z
      }
      anime({
        targets:data,
        px : g_center.centerpoint.x,//相机目标位置x轴
        py : g_center.centerpoint.y + g_center.maxw,//相机目标位置y
        pz : g_center.centerpoint.z + g_center.maxw,//相机目标位置z
        tx : g_center.centerpoint.x,//相机焦点x
        ty : g_center.centerpoint.y,//相机焦点y
        tz : g_center.centerpoint.z,//相机焦点z
        easing: 'linear',
        update:()=>{
            //当使用了orbit之后，相机会始终跟随target，target为相机的观察中心，所以这里要把相机的观察中心放到目标位置上
            //相机也应该设定一个固定观察的位置
            camera.position.set(data.px, data.py, data.pz)
            controls.target.set(data.tx, data.ty, data.tz)

            camera.lookAt(controls.target)
            controls.update()
        }
      })
    },
    initLabel(name) {
      var obj  = mainGroup.getObjectByName(name)
      var bbox = new THREE.Box3()
      // 计算层级模型group包围盒
      bbox.expandByObject(obj)
      var centerpoint = new THREE.Vector3()
      bbox.getCenter(centerpoint)

      
      // 医院主体信息标签
      var mian = document.getElementById('label_' + name)
      mian.style.visibility = 'visible'
      mian.className = 'label-common'
      mian.childNodes[0].textContent = this.objName[name]
      var main_label = new CSS2DObject(mian)
      if(name == 'menzhenlou') {
        main_label.position.x = centerpoint.x - 40
        main_label.position.y = centerpoint.y + 18
        main_label.position.z = centerpoint.z 
      } else if (name == 'neikelou') {
        main_label.position.x = centerpoint.x - 20
        main_label.position.y = centerpoint.y + 30
        main_label.position.z = centerpoint.z + 10
      } else if(name == 'waikelou'){
        main_label.position.x = centerpoint.x + 28
        main_label.position.y = centerpoint.y + 30
        main_label.position.z = centerpoint.z -10
      }
      
      labelGroup.add(main_label)
    },
    timeRender() {
        //设置为可渲染状态
        renderEnabled = true;
        //清除上次的延迟器
        if (timeOut) {
            clearTimeout(timeOut);
        }

        timeOut = setTimeout(function () {
          renderEnabled = false
        }, 3000)
    },
    loadFlyCurve(){
      let flyCurve = new FlyCurve(scene)
      flyCurve.initFlyCurve()
    },
    loadCarFactory(){
      let carFactory = new CarFactory(scene, camera, renderer, controls);
      //车辆文件列表
      let cars = {
          'Ambulance': 'Car1_ambulance.glb',
          'Bus1': 'Car2_Bus1.glb',
          'Bus2': 'Car2_Bus2.glb',
          'Bus3': 'Car2_Bus3.glb',
          'Normal1': 'Car3_1.glb',
          'Normal2': 'Car3_2.glb',
          'Normal3': 'Car3_3.glb',
          'Truck1': 'Car5_truck1.glb',
          'Police': 'Car6_police1.glb',
          'Suv1': 'Car7_suv1.glb',
          'Suv2': 'Car7_suv2.glb',
          'Suv3': 'Car7_suv3.glb',
          'Taxi': 'Car8_taxi.glb',
          'Truck2': 'Car9_truck1.glb',
          'Truck3': 'Car9_truck2.glb'
      }

      //创建加载管理器
      //因为车辆种类较多,所以要完全等待读取完成后才能使用,这里推荐使用manager来管理加载
      let loadingManager = new THREE.LoadingManager();
      //创建加载器
      let loader = new GLTFLoader(loadingManager);

      //开始批量加载模型
      for(let key in cars){
        let path = './model/car/' + cars[key];
        loader.load(path,(gltf)=>{
          let model = gltf.scene.children[0];
          model.scale.setScalar(1);
          model.position.set(0,0,0);
          model.rotation.y = 0;
          model.rotation.z = 0;
          carFactory.addCar(model);
        });
      }

      //当加载管理器加载完成时
      loadingManager.onLoad = ()=>{
        carFactory.addCarToScene(); //添加所有运动的小车进场景
        // carFactory.addOneCarToScene();//添加一两可以被选中控制的小车进场景
      }
    },
    displayModel(bool) {
      return new Promise((resolve, reject) => {
        environmentGroup.visible = !bool
        boxsGroup.visible = !bool
        mainGroup.visible = !bool
        carGroup.visible = !bool
        for(let i = 0; i< floorGroup.children.length; i++) {
          floorGroup.children[i].visible = true
        }
        resolve()
      })
      
    },
    // 透视模式隐藏显示场景
    transparentModel(bool){
      return new Promise((resolve, reject) => {
        environmentGroup.visible = bool
        boxsGroup.visible = bool
        mainGroup.visible = !bool
        carGroup.visible = bool
        for(let i = 0; i< floorGroup.children.length; i++) {
          floorGroup.children[i].visible = bool
          shebeiFloorGroup.children[i].visible = bool
        }
        resolve()
      })
    },
    /**
     * 
     * @param {*} modelName 模型名称
     * @param {*} index 楼层
     * @param {*} source 漫游来源 source zichan  高亮当前选中模型
     */
    openFloor(modelName, index, source) {
      let arr_group
      if(modelName.includes('waikelou_F')){
        arr_group = floorGroup
      } else {
        arr_group = shebeiFloorGroup
      }
      if(this.openFloorIndex == null){
        this.activeFloorIndex = null
      }
      //非同一楼层，展开动画，同一楼层直接跳转
      if(this.activeFloorIndex != index) {
        this.displayModel(true).then(()=>{
          accordionFloor.opacityModel()
          accordionFloor.go(index).then(() => {
            for(let i = 0; i<shebeiFloorGroup.children.length; i++) {
              if(i == index) {
                shebeiFloorGroup.children[i].visible = true
              } else {
                shebeiFloorGroup.children[i].visible = false
              }
            }
            flyToModel(camera, controls, arr_group, modelName).then(() => {
              if(source == 'zichan') {
                this.highLightModel(modelName,arr_group)
              }
              if(this.devType == 'zhaoming' && this.lightArr.length != 0) {
                this.getLightLoopModel(this.lightArr)
              }
              this.activeFloorIndex = index
              this.$store.commit('updateFloorIndex', index)
              //展开楼层之后根据左侧菜单展示对应类型的icon
              if(this.iconType != null && this.openFloorIndex != null){
                this.displayTypeIcon(this.iconType)
              }
            })
          })
          accordionShebei.go(index)
          accordionJiaju.go(index)
        })
      } else {
        this.displayModel(true).then(() => {
          flyToModel(camera, controls, arr_group, modelName).then(() => {
            if(source == 'zichan') {
              this.highLightModel(modelName,arr_group)
            }
            if(this.devType == 'zhaoming' && this.lightArr.length != 0) {
              this.getLightLoopModel(this.lightArr)
            }
            this.activeFloorIndex = index
            this.$store.commit('updateFloorIndex', index)
            //展开楼层之后根据左侧菜单展示对应类型的icon
              if(this.iconType != null && this.openFloorIndex != null){
                this.displayTypeIcon(this.iconType)
              }
          })
        })
        
      }
      
    },
    highLightModel(name,group){
      let obj = group.getObjectByName(name)
      outlinePass.selectedObjects = [obj]
    },
    getLightLoopModel(data){
      let points = []
      highlightgroup.children = []
      data.forEach((item) => {
        let model = shebeiFloorGroup.getObjectByName(item.cadid)
        let m_box = new THREE.BoxGeometry( 1, 1, 1 )
        let m_material = new THREE.MeshBasicMaterial({
          color: 0x00ff00,
          transparent: true,
          opacity: 0.5
        })
        let m_cube = new THREE.Mesh(m_box, m_material)

        let bbox = new THREE.Box3()
        bbox.expandByObject(model)
        let centerpoint = new THREE.Vector3()
        bbox.getCenter(centerpoint)
        points.push(centerpoint)

        m_cube.position.set(centerpoint.x, centerpoint.y, centerpoint.z)
        m_cube.scale.set(0.2, 0.2, 0.2)
        highlightgroup.add(m_cube)
      })
      console.log(points)
      let line_material = new THREE.LineBasicMaterial({
        color: 0x00ff00
      })
      let line_geometry = new THREE.BufferGeometry().setFromPoints(points)
      let line = new THREE.Line(line_geometry, line_material)
      highlightgroup.add(line)
      
    },
    setModeltransparent_fun(num) {
      mainGroup.traverse((e) => {
        if (e.material) {
          if (Array.isArray(e.material)) {
            e.material.forEach((m) => {
              m.color = new THREE.Color(0x004a80)
              m.opacity = num
              m.transparent = true
              m.depthWrite = false
            })
          } else {
            e.material.color = new THREE.Color(0x004a80)
            e.material.opacity = num
            e.material.transparent = true
            e.material.depthWrite = false
          }
        }
      })
    },
    unsetModeltransparent_fun() {
      mainGroup.traverse((object) => {
        if(object.material){
          if(Array.isArray(object.material)){
            object.material.forEach((m) => {
              m.color = object.material.userData.selfColor
              m.opacity = object.material.userData.selfOpcity
              m.material.transparent = object.material.userData.selfTransparent
              m.depthWrite = true
            })
          } else {
            object.material.color = object.material.userData.selfColor
            object.material.opacity = object.material.userData.selfOpcity
            object.material.transparent = object.material.userData.selfTransparent
            object.material.depthWrite = true
          }
        }
      })
    },
    setCameraPosDefault(){
      // var tween1 = new TWEEN.Tween(camera.position)
      // tween1.to(this.position, 1000)
      // controls.target = new THREE.Vector3(this.controlsTargetPosition.x, this.controlsTargetPosition.y, this.controlsTargetPosition.z)
      // tween1.start();
      let data = {
        px: camera.position.x,
        py: camera.position.y,
        pz: camera.position.z,
        tx: controls.target.x,
        ty: controls.target.y,
        tz: controls.target.z
      }
      anime({
        targets: data,
        px : this.position.x,//相机目标位置x轴
        py : this.position.y,//相机目标位置y
        pz : this.position.z,//相机目标位置z
        tx : this.controlsTargetPosition.x,//相机焦点x
        ty : this.controlsTargetPosition.y,//相机焦点y
        tz : this.controlsTargetPosition.z,//相机焦点z
        easing: 'linear',
        update:()=>{
            //当使用了orbit之后，相机会始终跟随target，target为相机的观察中心，所以这里要把相机的观察中心放到目标位置上
            //相机也应该设定一个固定观察的位置
            camera.position.set(data.px, data.py, data.pz)
            controls.target.set(data.tx, data.ty, data.tz)

            camera.lookAt(controls.target)
            controls.update()
        }
      })
    },
    /**
     * mesh 当前需要弹窗的模型
     * opensource  打开当前弹窗的来源 
     *             0  双击模型直接查看
     *             1  点击告警定位
     */
    showpopup(mesh, opensource) {
      if (mesh) {
        if (mesh.name.substring(0, 5) === 'zmxt-') {
          this.devPopTypeName = '照明'
          
        } else if (mesh.name.substring(0, 7) === 'spjkxt-') {
          this.devPopTypeName = '摄像机' 
        } else if (mesh.name.substr(0, 6) === 'thbfk_') {
          this.devPopTypeName = '空调'
        } else if (mesh.name.substr(0, 6) === 'gpdxt-') {
          if(mesh.name.substring(0, 7) === 'gpdxt-3'){
            this.devPopTypeName = '低压配电柜' 
          } else if( mesh.name.substring(0, 7) === 'gpdxt-8') {
            this.devPopTypeName = '照明配电箱' 
          }
        } else {
          return
        }
        this.devPopNum = mesh.name.split('_')[1] + ''
        this.devPopName = MODEL_NAME[mesh.name.split('_')[0].replace('-', '_')]
      }
      if (popupGroup.children.length > 0) {
        popupGroup.children[0].element.style.visibility = 'visible'
        var popHeight = document.getElementsByClassName('popup-cen')[0].offsetHeight
        var popLineHeight = document.getElementsByClassName('popup-line')[0].offsetHeight
        this.calcPopTop = -(popHeight + popLineHeight - 10) + 'px'
        if (popupGroup.children[0].name === mesh.name + '-popup') {
          return
        } else {
          let box3 = new THREE.Box3()
          box3.expandByObject(mesh)
          // popupGroup.children[0].position.copy(mesh.position)
          popupGroup.children[0].name = mesh.name + '-popup'

          popupGroup.children[0].position.y =  (box3.max.y + box3.min.y) / 2 + 0.1
          popupGroup.children[0].position.x =  (box3.max.x + box3.min.x) / 2 
          popupGroup.children[0].position.z = (box3.max.z + box3.min.z) / 2 
          this.popupswval = group3.getObjectByName(mesh.name.replace('dingdeng_', 'dingdengguang_')).visible

          return
        }
      }
      this.popupswval = false
      let text = document.getElementById('popup') // .cloneNode(true)
      text.style.visibility = 'visible'
      text.className = 'popup_1'
      

      let label = new CSS2DObject(text)
      
      let box3 = new THREE.Box3()
      box3.expandByObject(mesh)
      label.position.y = (box3.max.y + box3.min.y) / 2 + 0.1
      label.position.x = (box3.max.x + box3.min.x) / 2 
      label.position.z = (box3.max.z + box3.min.z) / 2 

      
      label.name = mesh.name + '-popup'
      popupGroup.add(label)
    },
    closePopup() {
      this.hidepopup()
    },
    hidepopup() {
      if (popupGroup.children.length > 0) {
        popupGroup.children[0].element.style.visibility = 'hidden'
      }
    },
    swChangeHander(){

    },
    addControls(){
      
      let geometry = new THREE.BoxGeometry( 1, 1, 1 )
      let material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
      })
      let cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      let transformControl = new TransformControls( camera, renderer.domElement )
      transformControl.addEventListener('change',()=>{
            renderer.render(scene,camera)
        });
        transformControl.addEventListener('dragging-changed',(event)=>{
            controls.enabled = !event.value
            console.log(`[${parseInt(cube.position.x)},${parseInt(cube.position.y)},${parseInt(cube.position.z)},${parseInt(cube.rotation.x * 100)/100},0,${parseInt(cube.rotation.z * 100) / 100}],`);
        });
        transformControl.attach(cube)
        scene.add(transformControl)
    },
    /**
     * 
     * @param {*} index 根据当前打开楼层索引获取楼层对应的名称 
     */
    getOpenFloorName(index){
      let obj = FLOORS.filter((item) => {
        return item.labelIndex == index
      })
      return obj[0].name
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/common.scss";
#floor-map {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9;

}
.loading {
  background-color: rgba(3, 22, 40, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
}
::v-deep.progress_bar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  z-index: 21;
  .el-progress-bar {
    padding-right: 0;
    margin-left: 0;
  }
  
  .el-progress__text {
    display: block;
    text-align: center;
    color: #fff;
    margin-top: 5px;;
  }
}
.popup_1 {
  visibility: hidden;
  pointer-events: all;
  .popup-cont {
    position: relative;
    .popup-cen {
      padding: 10px;
      position: absolute;
      top: -330px;
      left: 55px;
      z-index: 10;
      min-height: 1.875rem;
      font-weight: 700;
      background: url('../../../public/img/sample/equmentbg.png');
      background-size: 100% 100%;
      .popup-content {
        font-weight: 500;
      }
      .title {
        font-size: 12px;
        color: #ffffff;
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        margin-top: 10px;
        .text1 {
          font-size: 14px;
          font-weight: 800;
          line-height: 18px;
        }
        &::before {
          content: '';
          position: absolute;
          left: 9px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          width: 13px;
          height: 14px;
          background: url('../../../public/img/sample/zs.png');
          background-size: 100% 100%;
        }
        .close {
          cursor: pointer;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .content {
        min-width: 4.375rem;
        .c_item {
          padding-left: 30px;
          margin-bottom: 5px;
          span:first-child {
            width: 80px;
            color: #fff;
          }
          span:last-child {
            color: #18a3b0;
            margin-left: 10px;
          }
          .el-switch {
            .el-switch__label {
              width: 50px;
            }
          }
        }
        .img-content {
          img {
            width: 100%;
          }
        }
        .warning-btn-text {
          width: 100px;
          margin: 0 auto;
          text-align: center;
          padding: 5px;
          border: 1px solid #1ed9ff;
          border-radius: 3px;
          cursor: pointer;
          color: #fff;
        }
        .warning-btn-text:hover {
          background: #18a3b0;
        }
        .control {
          .el-tabs {
            padding: 0 10px;
          }
          .el-tabs__item {
            color: #fff;
            font-size: .15rem;
          }
          .el-tabs__nav-wrap::after {
            background-color: #015c6f;
          }
        }
        .d-control {
          padding-top: .375rem;
          display: flex;
          padding-bottom: 20px;
          justify-content: space-around;
          .d-big {
            width: 1.95rem;
            height: 1.95rem;
            background-color: #055E7D;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .d-fangxiang {
            .circle-r {
              transform: rotate(45deg);
              width: 1.7rem;
            }
            .circle-item {
              display: flex;
            }
            .circle {
              width: .8625rem;
              height: .8625rem;
              background: #029BC4;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              
              .trangle1 {
                margin-top: .1875rem;
                margin-left: .1875rem;
                width: 0;
                height: 0;
                border-top: .3rem solid #fff;
                border-right: .3rem solid transparent;
                
              }
              .trangle2 {
                margin-top: .1875rem;
                margin-right: .1875rem;
                width: 0;
                height: 0;
                border-top: .3rem solid #fff;
                border-left: .3rem solid transparent;
              }
              .trangle3 {
                margin-bottom: .1875rem;
                margin-left: .1875rem;
                width: 0;
                height: 0;
                border-bottom: .3rem solid #fff;
                border-right: .3rem solid transparent;
              }
              .trangle4 {
                margin-bottom: .1875rem;
                margin-right: .1875rem;
                width: 0;
                height: 0;
                border-bottom: .3rem solid #fff;
                border-left: .3rem solid transparent;
              }
              &:active{
                background: #055E7D;
              }
            }
            .circle-1 {
              border-radius: .8625rem 0 0;
              margin-right: 1px;
              margin-bottom: 1px;
            }
            .circle-2 {
              border-radius: 0 .8625rem 0 0;
            }
            .circle-3 {
              border-radius: 0 0 0 .8625rem;
              margin-top: 1px;
              margin-right: 1px;
            }
            .circle-4 {
              border-radius: 0 0 .8625rem 0;
              margin-left: 1px;
              margin-top: 1px;
            }
            .circle-l {
              width: .15rem;
              height: .15rem;
              border-radius: 50%;
              position: absolute;
              background-color: #029bc4;
            }
            .circle-s {
              width: .5rem;
              height: .5rem;
              border-radius: 50%;
              position: absolute;
              background-color: #055E7D;
            }
          }
          .d-scale {
            .d-v {
              margin: 0 auto;
              width: .8rem;
              height: 1.9375rem;
              background-color: #0c6582;
              border-radius: .4rem;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              .d-v-top,.d-v-bottom {
                cursor: pointer;
                width: .675rem;
                height: .675rem;
                background-color: #029bc4;
                border-radius: 50%;
                text-align: center;
                line-height: 0.675rem;
                &::before{
                  font-size: .25rem;
                  color: #fff;
                  font-weight: 700;
                }
                &:active{
                  background-color: #0c6582;
                }
              }
              .d-v-top {
                margin-top: .0625rem;
              }
              .d-v-bottom {
                margin-bottom: .0625rem;
              }
            }
          }
        }
      }
      .popup-fotter {
        margin-top: 10px;
        text-align: center;
        margin-bottom: 20px;
        .el-button--primary {
          border-color: $main-text-color;
          background: transparent;
          color: $main-text-color;
        }
      }
    }
    .pei-dian-dialog {
      width: 450px;
    }
  }
  .popup-line {
    position: absolute;
    top: -30px;
    left: 0px;
  }
}
</style>

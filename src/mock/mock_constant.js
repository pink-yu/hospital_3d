const FLOORNAME = {
  '37140001011010': {
    index: 0,
    label_zh: '-1F',
    label_en: 'waikelou_F-1'
  } ,
  '37140001010010': {
    index: 1,
    label_zh: '1F',
    label_en: 'waikelou_F1'
  },
  '37140001010020': {
    index: 2,
    label_zh: '2F',
    label_en: 'waikelou_F2'
  },
  '37140001010030': {
    index: 3,
    label_zh: '3F',
    label_en: 'waikelou_F3'
  },
  '37140001010035': {
    index: 4,
    label_zh: '3.5F',
    label_en: 'waikelou_F3-5'
  },
  '37140001010040': {
    index: 5,
    label_zh: '4F',
    label_en: 'waikelou_F4'
  },
  '37140001010050': {
    index: 6,
    label_zh: '5F',
    label_en: 'waikelou_F5'
  },
  '37140001010060': {
    index: 7,
    label_zh: '6F',
    label_en: 'waikelou_F6'
  },
  '37140001010070': {
    index: 8,
    label_zh: '7F',
    label_en: 'waikelou_F7'
  },
  '37140001010080': {
    index: 9,
    label_zh: '8F',
    label_en: 'waikelou_F8'
  },
  '37140001010090': {
    index: 10,
    label_zh: '9F',
    label_en: 'waikelou_F9'
  },
  '37140001010100': {
    index: 11,
    label_zh: '10F',
    label_en: 'waikelou_F10'
  },
  '37140001010110': {
    index: 12,
    label_zh: '11F',
    label_en: 'waikelou_F11'
  },
  '37140001010120': {
    index: 13,
    label_zh: '12F',
    label_en: 'waikelou_F12'
  }
}
const MODELTYPE = {
  '1': '空调用电',
  '2': '动力用电',
  '3': '照明用电',
  '4': '其他用电',
  '99': '特殊用电'
}
const DEVTYPE = {
  '007X': '电表',
  '001X': '电梯',
  '002X': '空调',
  '003X': '灯泡',
  '004X': '监控',
  '005X': '灯光控制器',
  '006X': '网关',
  '010X': '气表',
  '011X': '水表'
}
const FLOORS = [
  {
    name: 'waikelou_F-1',
    label: '-1F',
    no: '37140001011010',
    labelIndex: 0,
    modelurl: './model/F-1/F-1.glb',
    floorHeight: 3.8,
    positionY: -3.8
  },
  {
    name: 'waikelou_F1',
    label: '1F',
    no: '37140001010010',
    labelIndex: 1,
    floorHeight: 4.6,
    modelurl: './model/F1/F1.glb',
    positionY: 2.2
  },
  {
    name: 'waikelou_F2',
    label: '2F',
    no: '37140001010020',
    labelIndex: 2,
    floorHeight: 4,
    modelurl: './model/F2/F2.glb',
    positionY: 6.6
  },
  {
    name: 'waikelou_F3',
    label: '3F',
    no: '37140001010030',
    labelIndex: 3,
    floorHeight: 3.3,
    modelurl: './model/F3/F3.glb',
    positionY: 10.1
  },
  {
    name: 'waikelou_F3-5',
    label: '3.5F',
    no: '37140001010035',
    labelIndex: 4,
    floorHeight: 3,
    modelurl: './model/F3-5/F3-5.glb',
    positionY: 13.2
  },
  {
    name: 'waikelou_F4',
    label: '4F',
    no: '37140001010040',
    labelIndex: 5,
    floorHeight: 4.1,
    modelurl: './model/F4/F4.glb',
    positionY: 16.2
  },
  {
    name: 'waikelou_F5',
    label: '5F',
    no: '37140001010050',
    labelIndex: 6,
    floorHeight: 3.6,
    modelurl: './model/F5/F5.glb',
    positionY: 20
  },
  {
    name: 'waikelou_F6',
    label: '6F',
    no: '37140001010060',
    labelIndex: 7,
    floorHeight: 3.6,
    modelurl: './model/F6/F6.glb',
    positionY: 23.6
  },
  {
    name: 'waikelou_F7',
    label: '7F',
    no: '37140001010070',
    labelIndex: 8,
    floorHeight: 3.6,
    modelurl: './model/F7/F7.glb',
    positionY: 27.2
  },
  {
    name: 'waikelou_F8',
    label: '8F',
    no: '37140001010080',
    labelIndex: 9,
    floorHeight: 3.6,
    modelurl: './model/F8/F8.glb',
    positionY: 30.8
  },
  {
    name: 'waikelou_F9',
    label: '9F',
    no: '37140001010090',
    labelIndex: 10,
    floorHeight: 3.6,
    modelurl: './model/F9/F9.glb',
    positionY: 34.4
  },
  {
    name: 'waikelou_F10',
    label: '10F',
    no: '37140001010100',
    labelIndex: 11,
    floorHeight: 3.6,
    modelurl: './model/F10/F10.glb',
    positionY: 38
  },
  {
    name: 'waikelou_F11',
    label: '11F',
    no: '37140001010110',
    labelIndex: 12,
    floorHeight: 3.6,
    modelurl: './model/F11/F11.glb',
    positionY: 41.6
  },
  {
    name: 'waikelou_F12',
    label: '12F',
    no: '37140001010120',
    labelIndex: 13,
    floorHeight: 3.6,
    modelurl: './model/F12/F12.glb',
    positionY: 45.2
  }
]
const DEVLIST =  [
  {
    name: '摄像头',
    location: '门诊楼一层药房',
    index: 1,
    type: '监控设备',
    modelurl: './model/menzhen_F1.glb',
    buildingName: 'waikelou_g',
    modelType: 'sxj',
    label: 'zmxt-5_1184639',
    time: '2021-08-24 18:24:42',
    level: '二级',
    warningText: '无网络'
  },
  {
    name: '烟雾报警器',
    location: '门诊楼一层大厅',
    type: '报警器',
    index: 1,
    modelurl: './model/menzhen_F1.glb',
    buildingName: 'waikelou_g',
    label: 'zmxt-5_1185118',
    time: '2021-06-25 18:24:42',
    level: '一级',
    warningText: '报警实效',
    modelType: 'ywq'
  },
  {
    name: '日光灯',
    location: '门诊楼一层缴费室',
    type: '照明',
    index: 1,
    modelurl: './model/menzhen_F1.glb',
    buildingName: 'waikelou_g',
    label: 'zmxt-5_1185937',
    time: '2021-07-25 18:24:42',
    level: '三级',
    warningText: '亮度太暗',
    modelType: 'dingdeng'
  },
  {
    name: '摄像头',
    location: '门诊楼一层大厅',
    type: '监控设备',
    index: 1,
    modelType: 'sxj',
    modelurl: './model/menzhen_F1.glb',
    label: 'spjkxt-2_1547299',
    time: '2021-06-24 18:24:42',
    buildingName: 'waikelou_g',
    level: '一级',
    warningText: '告警测试'
  },
  {
    name: '摄像头',
    location: '门诊楼一层药房',
    type: '监控设备',
    index: 1,
    modelurl: './model/menzhen_F1.glb',
    modelType: 'sxj',
    label: 'spjkxt-2_1550012',
    time: '2021-06-28 18:24:42',
    buildingName: 'waikelou_g',
    level: '三级',
    warningText: '告警测试'
  },
  {
    name: '配电箱',
    location: '门诊楼一层西侧',
    type: '配电',
    index: 1,
    modelurl: './model/menzhen_F1.glb',
    label: 'spjkxt-2_1550012',
    time: '2021-06-26 18:24:42',
    modelType: 'jigui',
    buildingName: 'waikelou_g',
    level: '一级',
    warningText: '电压过低保护'
  },
  {
    name: '格力空调',
    location: '门诊楼一层大厅',
    type: '空调',
    index: 1,
    modelurl: './model/menzhen_F1.glb',
    label: 'spjkxt-2_1550012',
    time: '2021-06-28 18:24:42',
    level: '三级',
    warningText: '告警测试',
    buildingName: 'waikelou_g',
    modelType: 'chufengkou'
  },
  {
    name: '格力空调',
    location: '门诊楼一层大厅',
    type: '空调',
    index: 1,
    modelurl: './model/menzhen_F1.glb',
    label: 'spjkxt-2_1550012',
    time: '2021-06-22 18:24:42',
    level: '二级',
    warningText: '告警测试',
    buildingName: 'waikelou_g',
    modelType: 'chufengkou'
  }
]
const MODEL_NAME = {
  zmxt_1: '矩形天花灯',
  zmxt_2: '方形天花灯',
  zmxt_3: '圆形吸顶灯',
  zmxt_4: '吊灯',
  zmxt_5: '筒灯',
  zmxt_6: '射灯',
  spjkxt_1: '网络高清红外枪式摄像机',
  spjkxt_2: '网络高清红外半球摄像机',
  spjkxt_3: '电梯专用摄像机',
  spjkxt_4: '拾音器',
  spjkxt_5: '全球摄像机',
  gpdxt_1: '发电机',
  gpdxt_2: '变压器',
  gpdxt_3: '低压配电柜',
  gpdxt_4: '低压开关板',
  gpdxt_5: '电表箱',
  gpdxt_7: '应急照明箱',
  gpdxt_7: '照明配电箱',
  thbfk: '空调出风口'
}
export {
  FLOORNAME,
  MODELTYPE,
  DEVTYPE,
  FLOORS,
  DEVLIST,
  MODEL_NAME
}

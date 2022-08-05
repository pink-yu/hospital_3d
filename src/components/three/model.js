import { Group } from 'three'
// 外科楼所有楼层group集合
window.WAIKELOU_FLOOR_G = {} 

function createGroup(obj) {
  let name = obj.scene.name.replace('_shebei_','_')
  WAIKELOU_FLOOR_G[name + '_shipin'] = []
  WAIKELOU_FLOOR_G[name + '_shuibiao'] = []
  WAIKELOU_FLOOR_G[name + '_dianbiao'] = []
  let mesh_obj = (obj.scene.children && obj.scene.children[0].children) || []
  for(let i = 0;i< mesh_obj.length; i++) {
    
    if(mesh_obj[i].name.substring(0,8) === 'spjkxt-1' || mesh_obj[i].name.substring(0,8) === 'spjkxt-2' || mesh_obj[i].name.substring(0,8) === 'spjkxt-5') {
      
      window.WAIKELOU_FLOOR_G[name + '_shipin'].push(mesh_obj[i])
      
    }
    if(mesh_obj[i].name.substring(0,7) === 'gpdxt-9') {

      window.WAIKELOU_FLOOR_G[name + '_dianbiao'].push(mesh_obj[i])
    }
  }
  console.log(WAIKELOU_FLOOR_G)
}

export let loadedNum = 0
export const objList = [
  {
    url: './model/huanjing.glb',
    onload: function(obj) {
      loadedNum++
      environmentGroup.add(obj.scene)
      obj.scene.name = 'huanjing'
    }
  },
  {
    url: './model/boxs.glb',
    onload: function(obj) {
      loadedNum++
      boxsGroup.add(obj.scene)
      obj.scene.name = 'boxs'
      window.material_0 = window.boxsGroup.children[0].children[0].children[0].material
    }
  },
  {
    url: './model/menzhenlou.glb',
    name: 'menzhenlou',
    onload: function(obj) {
      loadedNum++
      mainGroup.add(obj.scene)
      obj.scene.name = 'menzhenlou'
      let data = obj.scene.children[0].children
      for(let i = 0; i<data.length;i++) {
        if(data[i].name.includes('dianti')){
          data[i].visible = false
        }
      }
    }
  },
  {
    url: './model/waikelou.glb',
    name: 'waikelou',
    onload: function(obj) {
      loadedNum++
      mainGroup.add(obj.scene)
      obj.scene.name = 'waikelou'
      obj.scene.visible = true
      obj.scene.children[0].children.forEach((item) => {
        if(item.name.includes('neike')){
          item.name = item.name.replace(/neike/g, 'waike')
          if(item.name == 'waike_L4sb'){
            item.name = 'waike_L3-5'
          }
          if(item.name.includes('_L')){
            item.name = 'waikelou_F' + item.name.split('_L')[1]
          }
        }
      })
      obj.animations[4].name = 'dianti_002|Take 001|BaseLayer'
    }
  },
  {
    url: './model/neikelou.glb',
    name: 'neikelou',
    onload: function(obj) {
      loadedNum++
      mainGroup.add(obj.scene)
      obj.scene.name = 'neikelou'
      obj.scene.children[0].children.forEach((item) => {
        if(item.name.includes('waike')){
          item.name = item.name.replace(/waike/g, 'neike')
        }
      })
    }
  },
  {
    url: './model/test/F-1/F-1.glb',
    onload: function(obj) {
      loadedNum++
      floorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_F-1'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F-1/F-1_shebei.glb',
    onload: function(obj) {
      loadedNum++
      shebeiFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_shebei_F-1'
      obj.scene.visible = false
      
    }
  },
  {
    url: './model/test/F-1/F-1_jiaju.glb',
    onload: function(obj) {
      loadedNum++
      jiajuFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_jiaju_F-1'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F1/F1.glb',
    onload: function(obj) {
      loadedNum++
      floorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_F1'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F1/F1_shebei.glb',
    onload: function(obj) {
      loadedNum++
      shebeiFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_shebei_F1'
      obj.scene.visible = false
      //隐藏电梯摄像头
      obj.scene.children[0].children.forEach((item) => {
        if(item.name.includes('spjkxt-3')){
          item.visible = false
        }
      })
      createGroup(obj)
    }
  },
  {
    url: './model/test/F1/F1_jiaju.glb',
    onload: function(obj) {
      loadedNum++
      jiajuFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_jiaju_F1'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F2/F2.glb',
    onload: function(obj) {
      loadedNum++
      floorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_F2'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F2/F2_shebei.glb',
    onload: function(obj) {
      loadedNum++
      shebeiFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_shebei_F2'
      obj.scene.visible = false
      createGroup(obj)
    }
  },
  {
    url: './model/test/F2/F2_jiaju.glb',
    onload: function(obj) {
      loadedNum++
      jiajuFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_jiaju_F2'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F3/F3.glb',
    onload: function(obj) {
      loadedNum++
      floorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_F3'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F3/F3_shebei.glb',
    onload: function(obj) {
      loadedNum++
      shebeiFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_shebei_F3'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F3/F3_jiaju.glb',
    onload: function(obj) {
      loadedNum++
      jiajuFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_jiaju_F3'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F3-5/F3-5.glb',
    onload: function(obj) {
      loadedNum++
      floorGroup.add(obj.scene)
      shebeiFloorGroup.add(new Group())
      jiajuFloorGroup.add(new Group())
      obj.scene.name = 'waikelou_F3-5'
      obj.scene.visible = false
    }
  },
  
  {
    url: './model/test/F4/F4.glb',
    onload: function(obj) {
      loadedNum++
      floorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_F4'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F4/F4_shebei.glb',
    onload: function(obj) {
      loadedNum++
      shebeiFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_shebei_F4'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F4/F4_jiaju.glb',
    onload: function(obj) {
      loadedNum++
      jiajuFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_jiaju_F4'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F5/F5.glb',
    onload: function(obj) {
      loadedNum++
      floorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_F5'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F5/F5_shebei.glb',
    onload: function(obj) {
      loadedNum++
      shebeiFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_shebei_F5'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F5/F5_jiaju.glb',
    onload: function(obj) {
      loadedNum++
      jiajuFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_jiaju_F5'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F6/F6.glb',
    onload: function(obj) {
      loadedNum++
      floorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_F6'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F6/F6_shebei.glb',
    onload: function(obj) {
      loadedNum++
      shebeiFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_shebei_F6'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F6/F6_jiaju.glb',
    onload: function(obj) {
      loadedNum++
      jiajuFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_jiaju_F6'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F7/F7.glb',
    onload: function(obj) {
      loadedNum++
      floorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_F7'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F7/F7_shebei.glb',
    onload: function(obj) {
      loadedNum++
      shebeiFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_shebei_F7'
      obj.scene.visible = false
    }
  },
  {
    url: './model/test/F7/F7_jiaju.glb',
    onload: function(obj) {
      loadedNum++
      jiajuFloorGroup.add(obj.scene)
      obj.scene.name = 'waikelou_jiaju_F7'
      obj.scene.visible = false
    }
  },
  // {
  //   url: './model/test/F8/F8.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     floorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_F8'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F8/F8_shebei.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     shebeiFloorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_shebei_F8'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F8/F8_jiaju.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     jiajuFloorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_jiaju_F8'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F9/F9.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     floorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_F9'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F9/F9_shebei.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     shebeiFloorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_shebei_F9'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F9/F9_jiaju.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     jiajuFloorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_jiaju_F9'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F10/F10.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     floorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_F10'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F10/F10_shebei.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     shebeiFloorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_shebei_F10'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F10/F10_jiaju.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     jiajuFloorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_jiaju_F10'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F11/F11.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     floorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_F11'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F11/F11_shebei.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     shebeiFloorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_shebei_F11'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F11/F11_jiaju.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     jiajuFloorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_jiaju_F11'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F12/F12.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     floorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_F12'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F12/F12_shebei.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     shebeiFloorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_shebei_F12'
  //     obj.scene.visible = false
  //   }
  // },
  // {
  //   url: './model/test/F12/F12_jiaju.glb',
  //   onload: function(obj) {
  //     loadedNum++
  //     jiajuFloorGroup.add(obj.scene)
  //     obj.scene.name = 'waikelou_jiaju_F12'
  //     obj.scene.visible = false
  //   }
  // }
]
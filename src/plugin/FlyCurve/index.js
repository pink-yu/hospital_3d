
import { FlyPaths } from './FlyPaths.js'
import { createFlyCurve, timerFlyCurve } from './FlyCurve'
import { Vector3, Group }  from 'three'

class FlyCurve {
  flyCurveGroup = new Group()
  constructor(scene) {
    this.scene = scene
    window.flyCurveGroup = this.flyCurveGroup
    this.scene.add(flyCurveGroup)
  }

  initFlyCurve(){
    
    for(let i = 0; i < FlyPaths.length; i++) {
      let points = []
      if(FlyPaths[i].paths.length != 0){
        for(let k = 0; k < FlyPaths[i].paths.length; k++) {
          points.push(new Vector3(...FlyPaths[i].paths[k]))
        }
      }
      let line = createFlyCurve(points, false)
      this.flyCurveGroup.add(line)
    }
    
  }
  ClearFlyCurve() {
    timerFlyCurve()
  }
}

export default FlyCurve;

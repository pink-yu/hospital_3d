import * as THREE from 'three'
import GUICreator from './GUICreator.js'
import { CarPaths } from './CarPaths.js'
import PathMove from './PathMove.js'
import PathPoint from './PathPoint.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls' 
import { GUI } from  'three/examples/jsm/libs/lil-gui.module.min.js'

class CarFactory {

    Cars = [];//用于保存车辆模型对象

    //小车运动速度(px)
    speed = 0.05;

    //小车旋转时间(ms)
    rotateTime = 300;

    carGroup = new THREE.Group()
    /**
     * 动车生产工厂
     */
    constructor(scene,camera,renderer,control) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.control = control;
        // this.gui = new GUI();
        window.carGroup = this.carGroup
        this.scene.add(this.carGroup)
    }

    addCar(car){
        this.Cars.push(car);
    }


    //测试使用的函数
    addOneCarToScene(){
        let random = parseInt( this.Cars.length * Math.random() );
        let car = this.Cars[random].clone();
        this.scene.add(car);
        GUICreator.createMeshGUI(car,this.gui);

        let transformControl = new TransformControls(
            this.camera,this.renderer.domElement
        );
        transformControl.addEventListener("change",()=>{
            this.renderer.render(this.scene,this.camera);
        });
        transformControl.addEventListener("dragging-changed",(event)=>{
            this.control.enabled = !event.value;
            console.log(`[${parseInt(car.position.x)},${parseInt(car.position.y)},${parseInt(car.position.z)},${parseInt(car.rotation.x * 100)/100},0,${parseInt(car.rotation.z * 100) / 100}],`);
        });
        transformControl.attach(car);
        this.scene.add(transformControl);
    }

    addCarToScene(){
			for(let i = 0;i< CarPaths.length;i++){
				let path = CarPaths[i];
				this._createCarPath(path);
			}
    }

    _createCarPath(path){
        let {startPoint,paths,carCount} = path;
        for(let i = 0;i< carCount;i++){
            //创建随机车
            let random = parseInt( this.Cars.length * Math.random() );
            let car = this.Cars[random].clone();

            car.position.set(
                startPoint[0],
                startPoint[1],
                startPoint[2]
            );
            car.rotation.set(
                startPoint[3],
                startPoint[4],
                startPoint[5]
            );

            let pathMove = new PathMove(car);

            for(let i = 0;i< paths.length;i++){
                let item = paths[i]
                let time = 5000;

                //奇数情况下,小车执行旋转动作
                if(i % 2 !== 0){
                    time = this.rotateTime;
                }else{
                    if( i - 2 >= 0){
                        let dis = this._computeDistance(item,paths[i-2]);
                        time = dis / this.speed;
                    }else{
                        let dis = this._computeDistance(item,paths[paths.length -1]);
                        time = dis/ this.speed;
                    }
                }

                //创建路径点
                let pathPoint =  new PathPoint(
                    item[0],item[1],item[2],
                    item[3],item[4],item[5],
                );

                pathMove.addPathPoints(pathPoint,time,0);
            }
            pathMove.startAnimation();
            
            // this.scene.add(car);

            this.carGroup.add(car)

        }
    }

    _computeDistance(item1,item2){
        let vector1 = new THREE.Vector3(item1[0],item1[1],item1[2]);
        let vector2 = new THREE.Vector3(item2[0],item2[1],item2[2]);
        return vector1.distanceTo(vector2);
    }

    /**
     * 所有的车播放一帧
     */
    play(){

    }
}

export default CarFactory;

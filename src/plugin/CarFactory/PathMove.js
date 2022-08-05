

import anime from 'animejs';
import PathPoint from './PathPoint.js';

//针对于小车制作的路径移动
class PathMove {

    //用于animeJS的属性对象,方便animeJS计算平均路径点
    itemData = new PathPoint();

    startData = new PathPoint();

    pathPoints = [];

    durationArray = [];

    delayArray = [];

    _pxs = [];
    _pys = [];
    _pzs = [];
    _rxs = [];
    _rys = [];
    _rzs = [];

    easing = 'linear';//动画模式,参考animeJS

    loop = true;

    returnStart = false;//是否返回起点

    constructor(object) {
        this.object = object;
        this.startData.set(
            object.position.x,
            object.position.y,
            object.position.z,
            object.rotation.x,
            object.rotation.y,
            object.rotation.z,
        );
        this.itemData.copy(this.startData);
    }

    addPathPoints(pathPoint,duration,delay){
        this.pathPoints.push(pathPoint);
        this.durationArray.push(duration);
        this.delayArray.push(delay);
    }

    startAnimation(){
        this._createPointArray();
        this.animation = anime({
            targets:this.itemData,
            px:this._pxs,
            py:this._pys,
            pz:this._pzs,
            rx:this._rxs,
            ry:this._rys,
            rz:this._rzs,
            easing:this.easing,
            loop:this.loop,
            autoplay:false,
            change:()=>{
                let {px,py,pz,rx,ry,rz} = this.itemData;
                this.object.position.set(px,py,pz);
                this.object.rotation.set(rx,ry,rz);
            },
            changeComplete:()=>{
                this.resetObject();
            }
        });
        let random = (Math.random() * this.animation.duration)/200;
        let seek = parseInt(random) * 200;
        this.animation.seek(seek);
        this.animation.play();
    }

    resetObject(){
        this.object.position.set(
            this.startData.px,
            this.startData.py,
            this.startData.pz,
        );
        this.object.rotation.set(
            this.startData.rx,
            this.startData.ry,
            this.startData.rz,
        );
    }


    _createPointArray(){

        for(let i = 0;i< this.pathPoints.length;i++){
            this._pxs.push(
                this._createValue(
                    this.pathPoints[i].px,
                    this.durationArray[i],
                    this.delayArray[i]
                )
            );
            this._pys.push(
                this._createValue(
                    this.pathPoints[i].py,
                    this.durationArray[i],
                    this.delayArray[i]
                )
            );
            this._pzs.push(
                this._createValue(
                    this.pathPoints[i].pz,
                    this.durationArray[i],
                    this.delayArray[i]
                )
            );
            this._rxs.push(
                this._createValue(
                    this.pathPoints[i].rx,
                    this.durationArray[i],
                    this.delayArray[i]
                )
            );
            this._rys.push(
                this._createValue(
                    this.pathPoints[i].ry,
                    this.durationArray[i],
                    this.delayArray[i]
                )
            );
            this._rzs.push(
                this._createValue(
                    this.pathPoints[i].rz,
                    this.durationArray[i],
                    this.delayArray[i]
                )
            );
        }

        if(this.returnStart){
            this._addStartPoint();
        }
    }

    //若设置了返回起点,则添加起点到路径点
    _addStartPoint(){
        this._pxs.push(this._createValue(this.startData.px, 1000,0));
        this._pys.push(this._createValue(this.startData.py, 1000,0));
        this._pzs.push(this._createValue(this.startData.pz, 1000,0));
        this._rxs.push(this._createValue(this.startData.rx, 1000,0));
        this._rys.push(this._createValue(this.startData.ry, 1000,0));
        this._rzs.push(this._createValue(this.startData.rz, 1000,0));
    }

    _createValue(value,duration,delay){
        return {
            value:value,
            duration:duration,
            delay:delay
        }
    }
}

export default PathMove;

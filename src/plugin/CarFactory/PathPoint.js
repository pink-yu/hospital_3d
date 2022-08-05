

class PathPoint {

    scope = this;

    constructor(px,py,pz,rx,ry,rz) {
        this.set(px,py,pz,rx,ry,rz);
    }

    //复制路径到当前的路径点
    copy(roadPath){
        this.px = roadPath.px;
        this.py = roadPath.py;
        this.pz = roadPath.pz;
        this.rx = roadPath.rx;
        this.ry = roadPath.ry;
        this.rz = roadPath.rz;
    }

    clone(){
        return new PathPoint(
            this.px,
            this.py,
            this.pz,
            this.rx,
            this.ry,
            this.rz
        );
    }

    getNewPath(name,data){
        this.scope[name] = data;
        return this.scope.clone();
    }

    set(px,py,pz,rx,ry,rz){
        this.px = px || 0;
        this.py = py || 0;
        this.pz = pz || 0;
        this.rx = rx || 0;
        this.ry = ry || 0;
        this.rz = rz || 0;
    }
}

export default PathPoint;

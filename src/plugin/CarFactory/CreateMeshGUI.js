
/**
 *
 * @param mesh
 * @param GUI
 * @constructor
 */
export function CreateMeshGUI(mesh,GUI) {

    //获得mesh的原始数据

    let initialPosition = mesh.position.clone();

    let initialRotation = mesh.rotation.clone();

    let initialScale = mesh.scale.clone();

    //设定还原函数

    //创建folder对象
    let folder = GUI.addFolder(mesh.name);

    //创建用于操作数据的对象
    let position = {
        x:mesh.position.x,
        y:mesh.position.y,
        z:mesh.position.z
    };
    let rotation = {
        x:mesh.rotation.x,
        y:mesh.rotation.y,
        z:mesh.rotation.z
    };
    let scale = {
        x:mesh.scale.x,
        y:mesh.scale.y,
        z:mesh.scale.z,
        xyz:1.0
    };

    let reset = {
        resetPosition :()=>{
            mesh.position.copy(initialPosition);
            position.x = mesh.position.x;
            position.y = mesh.position.y;
            position.z = mesh.position.z;
            folder.updateDisplay();
        },
        resetRotation:()=>{
            mesh.rotation.copy(initialRotation);
            rotation.x = mesh.rotation.x;
            rotation.y = mesh.rotation.y;
            rotation.z = mesh.rotation.z;
            folder.updateDisplay();
        },
        resetScale:()=>{
            mesh.scale.copy(initialScale);
            scale.x = mesh.scale.x;
            scale.y = mesh.scale.y;
            scale.z = mesh.scale.z;
            scale.xyz = 1.0;
            folder.updateDisplay();
        }
    }

    //位置控制
    let positionFolder = folder.addFolder("位置position");

    positionFolder.add(position,"x").name("位置x").onChange((value)=>{
        mesh.position.x = value;
    });
    positionFolder.add(position,"y").name("位置y").onChange((value)=>{
        mesh.position.y = value;
    });
    positionFolder.add(position,"z").name("位置z").onChange((value)=>{
        mesh.position.z = value;
    });
    positionFolder.add(reset,"resetPosition").name("重置position");



    //旋转控制
    let rotationFolder = folder.addFolder("旋转rotation");

    rotationFolder.add(rotation,"x").step(0.01).name("旋转x").onChange((value)=>{
        mesh.rotation.x = value;
    });
    rotationFolder.add(rotation,"y").step(0.01).name("旋转y").onChange((value)=>{
        mesh.rotation.y = value;
    });
    rotationFolder.add(rotation,"z").step(0.01).name("旋转z").onChange((value)=>{
        mesh.rotation.z = value;
    });
    rotationFolder.add(reset,"resetRotation").name("重置rotation");


    //缩放控制
    let scaleFolder = folder.addFolder("缩放scale");

    let lastScale = {
        x:mesh.scale.x,
        y:mesh.scale.y,
        z:mesh.scale.z,
    }

    scaleFolder.add(scale,"x").name("缩放x").onChange((value)=>{
        mesh.scale.x = value;
    });
    scaleFolder.add(scale,"y").name("缩放y").onChange((value)=>{
        mesh.scale.y = value;
    });
    scaleFolder.add(scale,"z").name("缩放z").onChange((value)=>{
        mesh.scale.z = value;
    });
    scaleFolder.add(scale,"xyz").name("整体缩放").onChange((value)=>{
        mesh.scale.x += value;
        mesh.scale.y += value;
        mesh.scale.z += value;
    });
    scaleFolder.add(reset,"resetScale").name("重置Scale");


    return folder;
}

var geometry, material, cube;
//--------------in the scene you add what you want render-----------\\

var scene = new THREE.Scene();
//----------------the container of the scene-----------------------\\
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//-------------first cube position-------------\\
var cubePositionx= -1;
var cubePositiony= 1;

function init(){
//show multiple cubes using for loop
    for(var i=0; i<manager().cubesArr.length; i++){
         geometry = manager().cubesArr[i].geometry || null;
         material = new THREE.MeshNormalMaterial( { wireframe: false } );
         cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 4;
        cube.position.y= cubePositiony
        cube.position.x= cubePositionx;
        cubePositionx += 1.3
        // cubePositiony += 0.5
        document.body.appendChild( renderer.domElement );
    }
};
init()

//-----------Mouse movement section---------------\\
var mouse = {x:0,y:0};
var cameraMoves = {x:0,y:0,z:-0.1,move:false,speed:0.2};

function mouseMove(e){

camera.position.x += Math.max(Math.min((e.clientX - mouse.x) * 0.01, cameraMoves.speed), -cameraMoves.speed);
camera.position.y += Math.max(Math.min((mouse.y - e.clientY) * 0.01, cameraMoves.speed), -cameraMoves.speed);

    mouse.x = e.clientX;
    mouse.y = e.clientY;

}
window.addEventListener('mousemove', mouseMove);

//--------------------End mouse listener----------------\\

//-----------------------cubes manager---------------------\\
function manager (){
    var counter= 1;
    var info= {};
//----------------------Geometries array to read the geometries from it in the init function------\\
        info.cubesArr= [{id:counter || 1,geometry:new THREE.BoxGeometry(1,1,0.4)},{id:2,geometry:new THREE.BoxGeometry(1,1,0.4)}];
//-------------------add function will push new geometry to the cubesArr--------------------\\
        info.add= function(){
            var width= $("#width");
            var height= $("#height");
            var depth= $("#depth");
            counter =+ 1;
            info.cubesArr.push({id:counter,geometry: new THREE.BoxGeometry(width,height,depth)});
            // scene.add(new THREE.BoxGeometry(width,height,depth),material)
            init();
            console.log(info.cubesArr.length)
            alert("new cube added cograts");
            
        };
//-----------------End of add function---------------------------\\

//-----------------------delete function by cube ID it has some bugs will fix it---------\\
        info.delete= function(){
            var cubeId= Number($("#cubeId").val());
            var username= $("#username").val();
            var password= $("#password").val();
            console.log(cubeId)
            if(username === "ammar"){
                if(password === "1234"){
                    
                    for(var j=0; j<info.cubesArr.length; j++){
                        if(cubeId !== 1){
                            if(info.cubesArr[j].id === cubeId){
                                // info.cubesArr[j].geometry= null
                                scene.remove( cube );
                                cube.dispose();
                                geometry.dispose();
                                material.dispose();
                                texture.dispose();
                                alert("the Cube deleted now");
                                init();
                                return;
                            }
                            console.log(info.cubesArr[j].id)
                            alert("We do not have this Cube please enter a valid ID");
                        }
                        alert("You can’t delete the fundamental cube please choose another cube");
                    }
                    return;
                }
                alert("Wrong password");
            }
            alert("Wrong username");
        };
//--------------------End of delete function-----------=\\
    return info;
}
//---------------------End of the cubes manager-----------------\\

//----------------------render the renderer----------------------\\
var animate = function () {
    requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    

    renderer.render(scene, camera);
};

animate();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var cubePositionx= -5;
var cubePositiony= 3.5;

// var controls = new THREE.TrackballControls( camera );
// 				controls.rotateSpeed = 1.0;
// 				controls.zoomSpeed = 1.2;
// 				controls.panSpeed = 0.8;
// 				controls.noZoom = false;
// 				controls.noPan = false;
// 				controls.staticMoving = true;
// 				controls.dynamicDampingFactor = 0.3;

//show multiple cubes using for loop
for(var i=0; i<manager().cubesArr.length; i++){
    var geometry = manager().cubesArr[i].geometry || null;
    var material = new THREE.MeshNormalMaterial( { wireframe: false } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 4;
    cube.position.y= cubePositiony
    cube.position.x= cubePositionx;
    cubePositionx += 1.3
    // cubePositiony += 0.5
    
}

//cubes manager
function manager (){
    var counter= 1;
    var info= {};
    
        info.cubesArr= [{id:counter || 1,geometry:new THREE.BoxGeometry(1,1,0.4)},{id:2,geometry:new THREE.BoxGeometry(1,1,0.4)}];
        
        // info.add= function(){
        //     var geometryType= $( "#myselect option:selected" ).text();
        //     var width= $("#width");
        //     var height= $("#height");
        //     var depth= $("#depth");
        //     counter =+ 1;
        //     console.log(geometryType)
        //     info.cubesArr.push({id:counter,geometry: new THREE.geometryType(width,height,depth)})
            
        // };

        info.delete= function(){
            var cubeId= Number($("#cubeId").val());
            var username= $("#username").val();
            var password= $("#password").val();
            console.log(cubeId)
            if(username === "ammar"){
                if(password === "1234"){
                    for(var j=0; j<info.cubesArr.length; j++){
                        if(info.cubesArr[j].id === cubeId){
                            info.cubesArr[j].geometry= null
                            alert("the Cube deleted now");
                            return;
                        }
                        console.log(info.cubesArr[j].id)
                        alert("We do not have this Cube please enter a valid ID");
                    }
                    return;
                }
                alert("Wrong password");
            }
            alert("Wrong username");
        };

    return info;
}

var animate = function () {
    requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    

    renderer.render(scene, camera);
};

animate();
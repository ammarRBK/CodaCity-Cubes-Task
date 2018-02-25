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
    var geometry = manager().cubesArr[i].geometry;
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
    
        info.cubesArr= [{id:counter,geometry:new THREE.BoxGeometry(1,1,0.4)}];
        
        info.add= function(){
            var geometryType= $( "#myselect" ).val();
            var width= $("#width");
            var height= $("#height");
            var depth= $("#depth");
            counter =+ 1;
            info.cubesArr.push({id:counter,geometry: new THREE.geometryType(width,height,depth)})
            
        }

    return info;
}

var animate = function () {
    requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    

    renderer.render(scene, camera);
};

animate();
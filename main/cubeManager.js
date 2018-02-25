var THREE = require("three-js")();

function manger (){
    var info= {};
    info.loadCubes= function (){
        info.cubesArr= [{geometry:new THREE.BoxGeometry(1,1,0,4),}];
        
    }
    return info;
}

module.exports= manger;
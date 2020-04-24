const changeIcon = function(object,buttonType,inOutType) {
    
    if(inOutType == "in"){
        object.src = "Icons/"+buttonType+"_Hover.png";
    }else if(inOutType == "out"){
        object.src = "Icons/"+buttonType+"_Initial.png";
    }
}

const changeSize = function(type){
    $.ajax({
        url : "http://localhost:3000/"+type,        
    })
}
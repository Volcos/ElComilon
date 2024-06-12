

console.log("mentita");

var popUp = document.getElementById("popUp");


function popup(){
    console.log("mentita");
    popUp.style.display = "flex";
}

document.onclick= function(event) {

    if (event===undefined) {
        event= window.event;
        
    }
    var target= 'target' in event? event.target : event.srcElement;
    if(popUp.style.display == "flex" && target.tagName != "IMG"){
        popUp.style.display = "none";
    }
    
     //alert('clicked on '+target.tagName);
};


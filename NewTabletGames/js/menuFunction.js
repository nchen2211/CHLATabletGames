window.onload = setup;


function setup(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    document.getElementById("DragDrop").style.left = w/2; 
    document.getElementById("DragDrop").style.top = h/2; 

    document.getElementById("MusicBox").style.left = w - 900;
    document.getElementById("MusicBox").style.top = h/2; 

 

}


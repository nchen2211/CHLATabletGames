//initialize variables
var choice; //to keep record of what item is being moved
var w;
var h; 

var touch = null;
var target = null;
var ros;
var topic; 

window.onload = prepare;

function prepare(){
	w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	//console.log(w + " , " + h);

	document.body.addEventListener('touchmove', function(e){ e.preventDefault(); }); //disable scroll

	document.getElementById("muzi").addEventListener('touchmove', touchmove, false);
	document.getElementById("muzi").addEventListener('touchend', touchend, false);	

    document.getElementById("jay-g").addEventListener('touchmove', touchmove, false);
    document.getElementById("jay-g").addEventListener('touchend', touchend, false);	

    document.getElementById("neo").addEventListener('touchmove', touchmove, false);
    document.getElementById("neo").addEventListener('touchend', touchend, false);	

	document.getElementById("frodo").addEventListener('touchmove', touchmove, false);
	document.getElementById("frodo").addEventListener('touchend', touchend, false);	
	
	document.getElementById("tube").addEventListener('touchmove', touchmove, false);
	document.getElementById("tube").addEventListener('touchend', touchend, false);	
	
	document.getElementById("apeach").addEventListener('touchmove', touchmove, false);
	document.getElementById("apeach").addEventListener('touchend', touchend, false);	

	
	//connecting to ROS
    ros = new ROSLIB.Ros({
        //url : 'ws://ice_newt:9090'
        url : 'ws://192.168.7.70:9090'
    });

    ros.on('connection', function(){
        console.log('Connected to websocket server.');
    });

    ros.on('error', function(error){
        console.log('Error connecting to websocket server: ', error);
    });

    ros.on('close', function() {
        console.log('Connection to websocket server closed.');
    });
    
    //publishing a topic
    topic = new ROSLIB.Topic({ //creating topic
        ros: ros, 
        name : '/HelloWorld',
        messageType : 'std_msgs/String'
    });

    //subscribing to the topic 
    //doing something when it receives something 
    /*
    topic.subscribe(function(message){
        console.log('Received message on ' + topic.name + ': ' + message.data);
        topic.unsubscribe();
    });
	*/
    


}

function touchend(event){ //when the object is let go 
	touch = event.changedTouches[0];
	name = event.target.id; 
	choice = name; 

	if (touch.screenY >= 11 && touch.screenY <= 111){
		if (touch.screenX >= 280 && touch.screenX <= 378 ){ //box1
			moveInBox(name, 1);
		}
		else if (touch.screenX >= 390 && touch.screenX <= 497 ){ //box2
			moveInBox(name, 2);
		}
		else if (touch.screenX >= 518 && touch.screenX <= 620 ){ //box3
			moveInBox(name, 3);
		}
		else if (touch.screenX >= 633 && touch.screenX <= 730 ){ //box4
			moveInBox(name, 4);
		}
		else if (touch.screenX >= 752 && touch.screenX <= 853 ){ //box5
			moveInBox(name, 5);
		}
		else if (touch.screenX >= 867 && touch.screenX <= 973 ){ //box6
			moveInBox(name, 6);
		}
	}

	document.getElementById("box3").innerHTML = event.target.style.left;
	document.getElementById("box4").innerHTML = event.target.style.top;
	document.getElementById("box5").innerHTML = touch.screenX;
	document.getElementById("box6").innerHTML = touch.screenY;
}

function moveInBox(name, boxNum){
	
	var item = document.getElementById(name);
	if (boxNum == 1){
		if (name == "muzi"){
			item.style.left = 278 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "jay-g"){
			item.style.left = 165 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "neo"){
			item.style.left = 271 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "frodo"){
			item.style.left = 170 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "tube"){
			item.style.left = 271 + 'px';
			item.style.top = -134 + 'px';
		}
		else{
			item.style.left = 169 + 'px';
			item.style.top = -138 + 'px';	
		}
	}
	else if (boxNum == 2){
		if (name == "muzi"){
			item.style.left = 391 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "jay-g"){
			item.style.left = 281 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "neo"){
			item.style.left = 388 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "frodo"){
			item.style.left = 286 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "tube"){
			item.style.left = 388 + 'px';
			item.style.top = -134 + 'px';
		}
		else{
			item.style.left = 287 + 'px';
			item.style.top = -138 + 'px';	
		}
	}
	else if (boxNum == 3){
		if (name == "muzi"){
			item.style.left = 507 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "jay-g"){
			item.style.left = 403 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "neo"){
			item.style.left = 506 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "frodo"){
			item.style.left = 402 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "tube"){
			item.style.left = 499 + 'px';
			item.style.top = -134 + 'px';
		}
		else{
			item.style.left = 404 + 'px';
			item.style.top = -138 + 'px';	
		}
	}
	else if (boxNum == 4){
		if (name == "muzi"){
			item.style.left = 619 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "jay-g"){
			item.style.left = 520 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "neo"){
			item.style.left = 621 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "frodo"){
			item.style.left = 523 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "tube"){
			item.style.left = 618 + 'px';
			item.style.top = -134 + 'px';
		}
		else{
			item.style.left = 515 + 'px';
			item.style.top = -138 + 'px';	
		}
		
	}
	else if (boxNum == 5){
		if (name == "muzi"){
			item.style.left = 739 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "jay-g"){
			item.style.left = 637 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "neo"){
			item.style.left = 743 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "frodo"){
			item.style.left = 633 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "tube"){
			item.style.left = 736 + 'px';
			item.style.top = -134 + 'px';
		}
		else{
			item.style.left = 638 + 'px';
			item.style.top = -138 + 'px';	
		}
	}
	else{
		if (name == "muzi"){
			item.style.left = 859 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "jay-g"){
			item.style.left = 757 + 'px';
			item.style.top = 8 + 'px';
		}
		else if (name == "neo"){
			item.style.left = 854 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "frodo"){
			item.style.left = 754 + 'px';
			item.style.top = -64 + 'px';
		}
		else if (name == "tube"){
			item.style.left = 854 + 'px';
			item.style.top = -134 + 'px';
		}
		else{
			item.style.left = 757 + 'px';
			item.style.top = -138 + 'px';	
		}
	}
	
	
}

function touchmove(event){ //when the object is moving
	touch = event.changedTouches[0];
	var name = event.target.id;
	choice = name; 

	if ( name == "muzi"){
		event.target.style.left = touch.screenX - 60;
		event.target.style.top = touch.screenY - 70;
		
	}
	else if (name == "jay-g"){
		event.target.style.left = touch.screenX - 170;
		event.target.style.top = touch.screenY - 70;
	}

	else if ( name == "neo"){
		event.target.style.left = touch.screenX - 60;
		event.target.style.top = touch.screenY - 120;
	}
	else if ( name == "frodo"){
		event.target.style.left = touch.screenX - 170;
		event.target.style.top = touch.screenY - 120;
	}
	else if ( name == "tube"){
		event.target.style.left = touch.screenX - 60;
		event.target.style.top = touch.screenY - 210;	
	}
	else if ( name == "apeach"){
		event.target.style.left = touch.screenX - 170;
		event.target.style.top = touch.screenY - 210;
	}
	
	document.getElementById("box3").innerHTML = event.target.style.left;
	document.getElementById("box4").innerHTML = event.target.style.top;
	document.getElementById("box5").innerHTML = touch.screenX;
	document.getElementById("box6").innerHTML = touch.screenY;
	

	event.preventDefault();
}


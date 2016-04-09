var ros;
var topic1;
var topic2;
var topic3;
var topic4;
var topic5;
var topic6;
var main_topic;

var mapHat = {};
var mapGlasses = {};
var mapEyes = {};
var mapClothes ={};
var mapShoes = {};
var mapAcc = {};

var maki_hat = [
	"maki_hat1.png",
	"maki_hat2.png",
	"maki_hat3.png"
];

var maki_mouth = [
	"mouthBlue.png",
	"mouthGreen.png",
	"mouthCyan.png",
	"mouthRed.png",
	"mouthYellow.png",
	"mouthMagenta.png"	
];

var maki_face = [
	"maki_face1.png",
	"maki_face2.png",
	"maki_face3.png"
	
];

var maki_body = [
	"maki_body1.png",
	"maki_body2.png",
	"maki_body3.png"
];

var maki_feet = [
	"maki_feet1.png",
	"maki_feet2.png",
	"maki_feet3.png"	
];

var maki_acc = [
	"maki_acc1.png",
	"maki_acc2.png",
	"maki_acc3.png"	
];

//Connecting to ROS
window.onload = setup;

function setup(){
	

	//Make sure to change the IP
	var ros = new ROSLIB.Ros({
		//Use the localhost one if running in on the laptop only
		//Use the local IP if accessing it from tablet
		
		url: 'ws://192.168.0.21:9090'
		//url: 'ws://192.168.5.179:9090'
		//url: 'ws://localhost:9090'
	});

	ros.on('connection',function(){
		console.log('Connecting to websocket server.');
	});

	ros.on('error',function(error){
		console.log('Error connecting to websocket server: ', error);
	});

	ros.on('close',function(){
		console.log('Connection to websocket closed.');
	});

	main_topic = new ROSLIB.Topic({
		ros: ros,
		name: '/Game_MAKI',
		messageType: 'std_msgs/String'

	});

	start_dressUp();

	

	//maps of Maki's wardrobe components for ROS message purposes
	//hats map
	mapHat[0] = "red hat";
	mapHat[1] = "yellow hat";
	mapHat[2] = "blue hat";

	//mouth map
	mapMouth[0] = "blue mouth";
	mapMouth[1] = "green mouth";
	mapMouth[2] = "cyan mouth";
	mapMouth[3] = "red mouth";
	mapMouth[4] = "yellow mouth";
	mapMouth[5] = "magenta mouth";


	//eyes map
	mapEyes[0] = "pink eyes";
	mapEyes[1] = "blue eyes";
	mapEyes[2] = "yellow eyes";

	//clothes map
	mapClothes[0] = "white clothing";	
	mapClothes[1] = "pink clothing";
	mapClothes[2] = "blue clothing";

	//shoes map
	mapShoes[0] = "pink shoes";
	mapShoes[1] = "blue shoes";
	mapShoes[2] = "yellow shoes";

	//accessory
	mapAcc[0] = "green cat";
	mapAcc[1] = "blue cat";
	mapAcc[2] = "pink cat";

}

var i = 0;
function change_prev_Hat(){

	
	i = i - 1;
	if(i == -1)
		i = 2;
	
	console.log("Number; " + i);
	var hat = maki_hat[i];

	document.getElementById('hat_maki').src = "image/" + hat;
	
}

function change_next_Hat(){

	i = i + 1;
	if(i == 3)
		i = 0;

	console.log(i);
	var hat = maki_hat[i];

	document.getElementById('hat_maki').src = "image/" + hat;
}

var x = 0;
function change_prev_Mouth(){

	x = x - 1;
	if(x == -1)
		x = 5;

	console.log(x);
	var mouth = maki_mouth[x];
	console.log(mouth);
	
	document.getElementById('mouth_maki').src = "image/" + mouth;
}

function change_next_Mouth(){

	x = x + 1;

	if(x == 6)
		x = 0;

	console.log(x);
	var mouth = maki_mouth[x];
	console.log(mouth);
	
	document.getElementById('mouth_maki').src = "image/" + mouth;
}

var j = 0;
function change_prev_Face(){

	j = j - 1;
	if(j == -1)
		j = 2;

	console.log(j);
	var face = maki_face[j];
	
	document.getElementById('face_maki').src = "image/" + face;
}

function change_next_Face(){

	j = j + 1;

	if(j == 3)
		j = 0;

	console.log(j);
	var face = maki_face[j];
	
	document.getElementById('face_maki').src = "image/" + face;

}

var m = 0;
function change_prev_Body(){

	m = m - 1;
	if(m == -1)
		m = 2;

	console.log(m);
	var body = maki_body[m];
	
	document.getElementById('body_maki').src = "image/" + body;

}

function change_next_Body(){

	m = m + 1;

	if(m == 3)
		m = 0;
	
	console.log(m);
	var body = maki_body[m];
	
	document.getElementById('body_maki').src = "image/" + body;

}

var n = 0;
function change_prev_Feet(){

	n = n - 1;
	if(n == -1)
		n = 2;

	console.log(n);
	var feet = maki_feet[n];
	
	document.getElementById('feet_maki').src = "image/" + feet;
	
};

function change_next_Feet(){

	n = n + 1;

	if(n == 3)
		n = 0;

	console.log(n);
	var feet = maki_feet[n];
	
	document.getElementById('feet_maki').src = "image/" + feet;
	
};

var y = 0;
function change_prev_Acc(){

	y = y - 1;
	if(y == -1)
		y = 2;

	console.log(y);
	var acc = maki_acc[y];
	
	document.getElementById('acc_maki').src = "image/" + acc;
};


function change_next_Acc(){

	y = y + 1;

	if(y == 3)
		y = 0;

	console.log(y);
	var acc = maki_acc[y];
	
	document.getElementById('acc_maki').src = "image/" + acc;

};

//ROS publishes messages when the child hit the "Done" botton 
function submit(){
	
	var message = new ROSLIB.Message({
		//Add by Xuan, 11, Feb		
		data :  "Dress" + ',' + mapHat[i] + "," +
			mapEyes[j] + "," +
			mapMouth[x] + "," +
			mapClothes[m] + "," +
			mapShoes[n] + "," +
			mapAcc[y] + ","
		/* 
		//origin code
		data : "Maki is wearing " + mapHat[i] + "\n" +
			"Maki has " + mapEyes[j] + "\n" +
			"Maki is wearing " + mapGlasses[x] + "\n" +
			"Maki is wearing " + mapClothes[m] + "\n" +
			"Maki is wearing " + mapShoes[n] + "\n" +
			"Maki has a " + mapAcc[y] + ", "
		*/
	});
	
	main_topic.publish(message);
}

function start_dressUp(){

	var message = new ROSLIB.Message({
		data: "Starting the dress up game!"
	});

	main_topic.publish(message);
}




	



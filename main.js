prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//Crea tu modelo y almacénalo en una variable classifier
var classifier= httpsteachablemachinewithgoogle.com/models/siB0oyMtB/
//Define la función modelLoaded
function modelLoaded() {
 

}
//Define la función check() 
function check() {

}

//Define la función gotResult(error, results)
function gotResult() {
 


}

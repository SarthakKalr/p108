var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
recognition.onresult= function (event){
    content= event.results[0][0].transcript.toLowerCase()
    if(content== "selfie"){
        speak()
    }
} 
function speak(){
    var synth= window.speechSynthesis;
    Webcam.attach(camera);
    Speak_data= "Taking your Selfie in 5 Seconds";
    var utterThis=  new SpeechSynthesisUtterance(Speak_data)
    synth.speak(utterThis);
    
    setTimeout(function(){
        image_id= "selfie1";
        takeSnapshot();
        speak_data="Taking your next selfie in 10 Seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data)
        synth.speak(utterThis)
    },5000)
    setTimeout(function(){
        image_id= "selfie2";
        takeSnapshot();
        speak_data="Taking your next selfie in 15 Seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data)
        synth.speak(utterThis)
    },10000)
    setTimeout(function(){
        image_id= "selfie3";
        takeSnapshot();
        
    },15000)
}


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});


function takeSnapshot(){
    Webcam.snap(function(data_uri){
        if(image_id== "selfie1"){
            document.getElementById("result1").innerHTML= '<img id="selfie1" src="'+data_uri+'">'
        }
        if(image_id== "selfie2"){
            document.getElementById("result2").innerHTML= '<img id="selfie2" src="'+data_uri+'">'
        }
        if(image_id== "selfie3"){
            document.getElementById("result3").innerHTML= '<img id="selfie3" src="'+data_uri+'">'
        }
    })
}




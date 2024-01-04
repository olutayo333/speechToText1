speechBtn.addEventListener('click', ()=>{
    var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition  ;
    var recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event){
    console.log(event);
    converted.innerHTML  += " " + event.results[0][0].transcript;
    }  

    recognition.onspeechend = function(){recognition.stop();}
    })
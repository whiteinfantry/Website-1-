var Title = document.getElementById("naslov")

var cover = document.getElementById("CoverIt");
var Videoto = document.getElementById("Videoto");

var Videos = ["Videos/Video1.mp4","Videos/Video2.mp4","Videos/Video3.mp4"]
var currentVi = 0;

var Pictures = ["Pictures/Pic1.png","Pictures/Pic2.png","Pictures/Pic3.png"];

var divpozadina = document.getElementById("divpozadina");

var Slika1 = document.getElementById("Slika1")
var Slika2 = document.getElementById("Slika2")
var Slika3 = document.getElementById("Slika3")


function Blinker(){
    

    setTimeout(function(){
        cover.style.opacity = 1;
    },0);
    
    setTimeout(function(){
        currentVi = currentVi + 1;
        
        if(currentVi >= 3){
            currentVi = 0;
        }
        
        Videoto.src = 
        Videos[currentVi];
        divpozadina.style.backgroundImage = "url('"+Pictures[currentVi]+"')"; 
    },1000);
    
    setTimeout(function(){
        cover.style.opacity = 0;
    },1100);
    
    setTimeout(function(){
    }, 2000)
}

setTimeout(function(){
    
    Blinker()
    setInterval(Blinker,6400);
    
}, 3400);

//Video length is 6400ms
// the setTimeout is made to set up video loading on the page
//the function blinker closes, opens and lets the video play(1sec, 1sec and 4.4 sec respectively)

function changeTitleBack(){
    Title.innerHTML = "Lorem Ipsum";
}

function changeLoremIpsum1(){
    Title.innerHTML = "Lorem Ipsum Contacti";
}

function changeLoremIpsum2(){
    Title.innerHTML = "Lorem Ipsum et Informacii";
}

function changeLoremIpsum3(){
    Title.innerHTML = "Lorem Ipsum et Predlozi";
}







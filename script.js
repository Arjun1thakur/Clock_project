function time(){
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm= document.getElementById('AM_PM');

    var title_set1 = document.getElementById('title_set1');
    var title_set =  document.getElementById('title_set0');
    var main_img = document.getElementById('main_img')
    if(hour>=12 && hour<=15){
        title_set1.innerHTML =  "LET'S HAVE SOME LUNCH !!";
        title_set.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        main_img.style.backgroundImage = 'url(img/Component\ 31\ –\ 1.svg)'
    }else if(hour>=16 && hour<=19){
        title_set1.innerHTML =  "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        title_set.innerHTML = "GOOD EVENING !!";
        main_img.style.backgroundImage = 'url(img/lunch_image@2x.png)'
    }else if(hour>=20 && hour<=23){
        title_set1.innerHTML =  "CLOSE YOUR EYES AND GO TO SLEEP";
        title_set.innerHTML = "GOOD NIGHT !!";
        main_img.style.backgroundImage = 'url(img/Component\ 32\ –\ 1@2x.png)'
    }else if(hour>=4 && hour<=11){
        title_set1.innerHTML =  "GRAB SOME HEALTHY BREAKFAST!!!";
        title_set.innerHTML = "GOOD MORNING!! WAKE UP !!";
        main_img.style.backgroundImage = 'url(img/Component\ 30\ –\ 1@2x.png)'
    }else{
        console.log('error')
    }
    if(hour>=12){
        am_pm.innerHTML = 'PM';
    }else{
        am_pm.innerHTML = 'AM';
    }
    if(hour>12){
        hour = hour - 12;
    }
    document.getElementById('hour').innerHTML=hour;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;

}
function alerm(){
    let wake_up = document.getElementById('wake_up');
    let lunch = document.getElementById('lunch');
    let nap = document.getElementById('nap');
    let night = document.getElementById('night');
    let wake_up1 = document.getElementById('wake_up1');
    let lunch1= document.getElementById('lunch1');
    let nap1= document.getElementById('nap1');
    let night1= document.getElementById('night1');

    wake_up1.innerHTML=wake_up.value;
    lunch1.innerHTML=lunch.value;
    nap1.innerHTML=nap.value;
    night1.innerHTML=night.value;
}

let alerm_ok=document.getElementById("btn_ok");
alerm_ok.addEventListener("click", alerm);

// let okok=document.getElementById("btn_ok");
// okok.submit(function(e) {
//     e.preventDefault();
// });

setInterval(()=>{
    time();
},1000)

// let alerm_ok=document.getElementById('btn_ok');
// alerm_ok.addEventListener('click',()=>alerm());

// document.getElementById("btn_ok").addEventListener("click",alerm);
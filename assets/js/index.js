
document.addEventListener("DOMContentLoaded" , function(){

    //PAGE1
    var changeimg = document.getElementById('EOFpage1');
    changeimg.addEventListener("mouseover" , function(e){
        var change = e.target;
        document.getElementById('page1content').style.background = "url(\""+change.src+"\")";
        document.getElementById('page1content').style.backgroundSize = "100% 100%";

    });
    //EOF PAGE1


    //PAGE4


    var arraypath = [
        "img/exmachinabanner.jpg",
        "img/inception26.jpg",
        "img/R-nFpL6x_400x400.jpeg",
        "img/wrath_of_the_titans_ver15.jpg"
    ];
    var arraytext = [
        "Ex Machina",
        "Inception",
        "SpongeBob",
        "Wrath of the Titans"
    ];
    var arrayyears = [
        "2015",
        "2009",
        "2015",
        "2012"
    ];

    var picindexes = 0;
    var rightarrow = document.getElementById('rightpart2page4');
    var leftarrow = document.getElementById('leftpart2page4');
    rightarrow.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('image-containerpage4').style.background =  "url(\""+arraypath[picindexes]+"\")";
        document.getElementById('image-containerpage4').style.width = "220px";
        document.getElementById('image-containerpage4').style.height = "220px";
        document.getElementById('image-containerpage4').style.backgroundSize = 'cover';
        document.querySelector('#descriptionpage4 h1').innerHTML = arraytext[picindexes];
        document.querySelector('#descriptionpage4 h3').innerHTML = arrayyears[picindexes];



        picindexes++;
        if (picindexes == arraypath.length) {
            picindexes = 0;
        }



    } , false) ;

    leftarrow.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('image-containerpage4').style.background =  "url(\""+arraypath[picindexes]+"\")";
        document.getElementById('image-containerpage4').style.width = "220px";
        document.getElementById('image-containerpage4').style.height = "220px";
        document.getElementById('image-containerpage4').style.backgroundSize = 'cover';
        document.querySelector('#descriptionpage4 h1').innerHTML = arraytext[picindexes];
        document.querySelector('#descriptionpage4 h3').innerHTML = arrayyears[picindexes];

        picindexes--;
        if (picindexes < 0) {
            picindexes = 3;
        }


    } , false) ;

    //EOF PAGE 4


    //PAGE 5

    var textup = document.querySelectorAll('#formpage5 input');
    var textup2 = document.querySelector('#formpage5 textarea');

    textup[0].addEventListener('mouseover', function() {
        textup[0].style.height = "60px";
    },false)
    textup[1].addEventListener('mouseover', function() {
        textup[1].style.height = "60px";
    },false)
    textup2.addEventListener('mouseover', function() {
        textup2.style.height = "70px";
    } , false)

    textup[0].addEventListener('mouseout', function() {
        textup[0].style.height = "initial";
    },false)
    textup[1].addEventListener('mouseout', function() {
        textup[1].style.height = "initial";
    },false)
    textup2.addEventListener('mouseout', function() {
        textup2.style.height = "initial";
    } , false)
},false);


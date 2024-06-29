var flag=0;
function controller(a){
    flag = flag + a;
    slides(flag)
}
slides(flag)

function slides(num){

    var slide= document.getElementsByClassName("slide");

    for(x of slide){
        x.style.display = 'none';
    }

    if (slide.length == num){
        flag = 0;
        num = 0;
    }
    if (num < 0){
        flag = slide.length -1 ;
        num = slide.length -1 ;
    }
    slide[num].style.display='block';

}


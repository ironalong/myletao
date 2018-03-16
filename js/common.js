/**
 * Created by Lenovo on 2017/12/28.
 */

function animate(obj, target) {

    clearInterval(obj.timerID);

    obj.timerID = setInterval(function () {

        //取到当前位置
        var current = obj.offsetLeft;

        //获得步长
        var step = target > current ? 10 : -10;

        //用目标 - 当前位置 看是否大于1步，如果大于，我就走这一步
        //否则就到目标再停止计时器

        //当前位置500，目标位置400,400 - 500 = -100   步长为-10，代入后发现要取绝对值才能正确判断
        if (Math.abs(target - current) >= Math.abs(step)) { //390

            //在当前位置上走一步
            current += step;

            //赋值到box
            obj.style.left = current + "px";

        } else {

            obj.style.left = target + "px";
            clearInterval(obj.timerID);
        }


    }, 100);
}


function id(a) {

    return document.getElementById(a);
}

function tag(a) {
    return document.getElementsByTagName(a);
}

function getScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
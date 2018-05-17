window.onload= function () {
    let ul= document.getElementsByClassName("wenzi");
    let li =ul[0].getElementsByTagName("li")
    console.log(li);
    li[0].onclick=function () {
        location.href="myselfindex.html"
    }
}
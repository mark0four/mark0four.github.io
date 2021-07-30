var i = -1;//状态，-1为关，1为开
/*点击事件*/
function side() {
    i = i * (-1);
    openNav()
}
function openNav() {
    if (i == 1) {
        document.getElementById("mySidenav").style.width = "75%";
        document.getElementById("sides").style.width = "25%";
        console.log("open!")
    }
    if (i == -1) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("sides").style.width = "0";
        console.log(i)
    }

}
function day(){
    document.getElementById("all").style.backgroundColor = "white";
    document.getElementById("topbar").style.backgroundColor = "rgba(30, 118, 233, 0.836)";
    document.getElementById("topbar").style.color = "black";
}
function night(){
    document.getElementById("all").style.backgroundColor = "rgb(26, 25, 25)";
    document.getElementById("topbar").style.backgroundColor = "rgb(12, 12, 12)";
    document.getElementById("topbar").style.color = "white";
}

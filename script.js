const setcolor=()=>{
    const randomvar=Math.floor(Math.random()*16777215);
    var randomcode="#" + randomvar.toString(16);

    document.body.style.backgroundColor=randomcode;
    document.getElementById("color-code").innerHTML=randomcode
}
document.getElementById("btn").addEventListener("click", setcolor);
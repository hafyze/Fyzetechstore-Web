console.log("hello World");


function pcPrice(){
    var partsPrice
    var totalPrice = 0;
    var installPrice = 200;

    var cpu = document.getElementById("cpu").value;
    var gpu = document.getElementById("gpu").value;
    var mobo = document.getElementById("mobo").value;
    var ram = document.getElementById("ram").value;
    var storage = document.getElementById("storage").value;
    var casing = document.getElementById("casing").value;
    var psu = document.getElementById("psu").value;
    var cpuCooler = document.getElementById("cpuCooler").value;
    var storage2 = document.getElementById("storage2").value;
    var storage3 = document.getElementById("storage3").value;

     
    partsPrice = +cpu + +gpu + +mobo + +ram + +storage + +casing + +psu + +storage2 + +storage3 + +cpuCooler;
    totalPrice = partsPrice + installPrice;

    document.getElementById("partsPrice").innerHTML = "RM " + partsPrice;
    document.getElementById("totalPrice").innerHTML = "RM " + totalPrice;
}
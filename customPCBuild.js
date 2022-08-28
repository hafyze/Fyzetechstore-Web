console.log("hello World");


function pcPrice(){
    var partsPrice
    var totalPrice = 0;
    var installPrice = 200;

    

    //getting value by id
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

    //getting the name by id
    var cpuComponent = document.getElementById("cpu").name;
    var gpuComponent = document.getElementById("gpu").name;
    var moboComponent = document.getElementById("mobo").name;
    var ramComponent = document.getElementById("ram").name;
    var storageComponent = document.getElementById("storage").name;
    var storageComponent2 = document.getElementById("storage2").name;
    var storageComponent3 = document.getElementById("storage3").name;
    var caseComponent = document.getElementById("casing").name;
    var psuComponent = document.getElementById("psu").name;
    var coolerComponent = document.getElementById("cpuCooler").name;

    //Displays the component name
    document.getElementById("cpuComponent").innerHTML = cpuComponent;
    document.getElementById("gpuComponent").innerHTML = gpuComponent;
    document.getElementById("moboComponent").innerHTML = moboComponent;
    document.getElementById("ramComponent").innerHTML = ramComponent;
    document.getElementById("storageComponent").innerHTML = storageComponent;
    document.getElementById("storageComponent2").innerHTML = storageComponent2;
    document.getElementById("storageComponent3").innerHTML = storageComponent3;
    document.getElementById("caseComponent").innerHTML = caseComponent;
    document.getElementById("psuComponent").innerHTML = psuComponent;
    document.getElementById("coolerComponent").innerHTML = coolerComponent;

    //Displays price of component
    document.getElementById("cpuPrice").innerHTML = "RM " +  cpu;
    document.getElementById("gpuPrice").innerHTML = "RM " + gpu;
    document.getElementById("moboPrice").innerHTML = "RM " + mobo;
    document.getElementById("ramPrice").innerHTML = "RM " + ram;
    document.getElementById("storagePrice").innerHTML = "RM " + storage;
    document.getElementById("storagePrice2").innerHTML = "RM " + storage2;
    document.getElementById("storagePrice3").innerHTML = "RM " + storage3;
    document.getElementById("casePrice").innerHTML = "RM " + casing;
    document.getElementById("psuPrice").innerHTML = "RM " + psu;
    document.getElementById("coolerPrice").innerHTML = "RM " + cpuCooler;

    //DIsplays the parts and total price
    document.getElementById("partsPrice").innerHTML = "RM " + partsPrice;
    document.getElementById("totalPrice").innerHTML = "RM " + totalPrice;

    display(cpu, gpu, mobo, ram, storage, storage2, storage3, casing, psu, cpuCooler);
}

function display(cpu, gpu, mobo, ram, storage, storage2, storage3, casing, psu, cpuCooler){
    console.log("Will be Updated");

    // let cpuName;
    // let gpuName;
    // let moboName;
    // let ramName;
    // let storageName;
    // let storageName2;
    // let storageName3;
    // let casingName;
    // let psuName;
    // let cpuCoolerName;

    //Setting name for cpu
    if(cpu == 0){
        document.getElementById("cpuName").innerHTML = "Did Not pick";
    }else if(cpu == 470){
        document.getElementById("cpuName").innerHTML = "Ryzen 3 3200G";
    }else if(cpu == 600){
        document.getElementById("cpuName").innerHTML = "Ryzen 5 3600";
    }else if(cpu == 850){
        document.getElementById("cpuName").innerHTML = "Ryzen 5 5600";
    }else if(cpu == 749){
        document.getElementById("cpuName").innerHTML = "Ryzen 5 5600G";
    }else if(cpu == 1950){
        document.getElementById("cpuName").innerHTML = "Ryzen 9 5900X";
    }

    //Setting name for gpu
    if(gpu == 0){
        document.getElementById("gpuName").innerHTML = "Integrated Graphics";
    }else if(gpu == 799){
        document.getElementById("gpuName").innerHTML = "Colorful GTX1650 NB";
    }else if(gpu == 841){
        document.getElementById("gpuName").innerHTML = "MSI RX 6500XT Mech";
    }else if(gpu == 929){
        document.getElementById("gpuName").innerHTML = "Zotac GTX 1650 Super";
    }else if(gpu == 999){
        document.getElementById("gpuName").innerHTML = "Colorful GTX1660Super NB";
    }else if(gpu == 1009){
        document.getElementById("gpuName").innerHTML = "Gigabyte GTX 1660 D5";
    }else if(gpu == 1359){
        document.getElementById("gpuName").innerHTML = "Colorful RTX 3050 NB";
    }else if(gpu == 1499){
        document.getElementById("gpuName").innerHTML = "Colorful RTX 3050 Ultra";
    }else if(gpu == 1659){
        document.getElementById("gpuName").innerHTML = "Colorful RTX 3060 NB";
    }else if(gpu == 1179){
        document.getElementById("gpuName").innerHTML = "ASRock RX 6600 Challenger";
    }else if(gpu == 1499){
        document.getElementById("gpuName").innerHTML = "ASRock RX 6600XT Challenger";
    }else if(gpu == 1899){
        document.getElementById("gpuName").innerHTML = "Sapphire RX 6700XT";
    }else if(gpu == 2459){
        document.getElementById("gpuName").innerHTML = "Colorful RTX 3070 NB";
    }else if(gpu == 2489){
        document.getElementById("gpuName").innerHTML = "Palit RTX 3070ti Pro";
    }else if(gpu == 3089){
        document.getElementById("gpuName").innerHTML = "Colorful RTX 3070Ti Ultra";
    }else if(gpu == 3459){
        document.getElementById("gpuName").innerHTML = "Gigabyte RTX 3080 Vision";
    }else if(gpu == 3409){
        document.getElementById("gpuName").innerHTML = "MSI RX 6800XT Gaming Z Trio";
    }
    
    //Setting name for mobo
    if(mobo == 199){
        document.getElementById("moboName").innerHTML = "ASRock A320m-DVS R4.0";
    }else if(mobo == 209){
        document.getElementById("moboName").innerHTML = "MSI A320m A-Pro";
    }else if(mobo == 309){
        document.getElementById("moboName").innerHTML = "MSI B450M A-Pro Max";
    }else if(mobo == 349){
        document.getElementById("moboName").innerHTML = "Asus Prime B550M-A";
    }else if(mobo == 409){
        document.getElementById("moboName").innerHTML = "ASRock B450m Steel Legend";
    }else if(mobo == 380){
        document.getElementById("moboName").innerHTML = "MSI B550m Pro-VDH";
    }else if(mobo == 489){
        document.getElementById("moboName").innerHTML = "MSI B550m Pro-VDH Wifi";
    }else if(mobo == 700){
        document.getElementById("moboName").innerHTML = "Gigabyte Aorus B550 Elite";
    }else if(mobo == 899){
        document.getElementById("moboName").innerHTML = "Asus ROG Strix B550-A White";
    }else if(mobo == 1609){
        document.getElementById("moboName").innerHTML = "Asus ROG Strix X570-E";
    }
    
    //Setting name for ram
    if(ram == 135){
        document.getElementById("ramName").innerHTML = "Kingston Fury 8GB 3200MHz";
    }else if(ram == 150){
        document.getElementById("ramName").innerHTML = "Adata XPG RGB 8GB 3200MHz";
    }else if(ram == 240){
        document.getElementById("ramName").innerHTML = "Kingston Fury 8GB(4GBx2) 3200MHz";
    }else if(ram == 270){
        document.getElementById("ramName").innerHTML = "Kingston Fury 16GB(8GBx2) 3200MHz";
    }else if(ram == 489){
        document.getElementById("ramName").innerHTML = "Kingston Fury 32GB(8GBx4) 3200MHz";
    }else if(ram == 300){
        document.getElementById("ramName").innerHTML = "Adata XPG RGB 16GB(8GBx2) 3200MHz";
    }else if(ram == 589){
        document.getElementById("ramName").innerHTML = "Adata XPG RGB 16GB(8GBx2) 3200MHz";
    }

    //Setting name for storage, storage2 and storage3
    if(storage == 70){
        document.getElementById("storageName").innerHTML = "2.5 120GB SSD";
    }else if(storage == 100){
        document.getElementById("storageName").innerHTML = "2.5 240GB SSD";
    }else if(storage == 159){
        document.getElementById("storageName").innerHTML = "2.5 480GB SSD";
    }else if(storage == 165){
        document.getElementById("storageName").innerHTML = "2.5 500GB SSD";
    }else if(storage == 309){
        document.getElementById("storageName").innerHTML = "2.5 1TB SSD";
    }else if(storage == 129){
        document.getElementById("storageName").innerHTML = "M.2 250GB SSD";
    }else if(storage == 179){
        document.getElementById("storageName").innerHTML = "M.2 500GB SSD";
    }else if(storage == 329){
        document.getElementById("storageName").innerHTML = "M.2 1TB SSD - RM329";
    }

    if(storage2 == 0){
        document.getElementById("storageName2").innerHTML = "No second storage";
    }else if(storage2 == 70){
        document.getElementById("storageName2").innerHTML = "2.5 120GB SSD";
    }else if(storage2 == 100){
        document.getElementById("storageName2").innerHTML = "2.5 240GB SSD";
    }else if(storage2 == 159){
        document.getElementById("storageName2").innerHTML = "2.5 480GB SSD";
    }else if(storage2 == 165){
        document.getElementById("storageName2").innerHTML = "2.5 500GB SSD";
    }else if(storage2 == 309){
        document.getElementById("storageName2").innerHTML = "2.5 1TB SSD";
    }else if(storage2 == 129){
        document.getElementById("storageName2").innerHTML = "M.2 250GB SSD";
    }else if(storage2 == 179){
        document.getElementById("storageName2").innerHTML = "M.2 500GB SSD";
    }else if(storage2 == 329){
        document.getElementById("storageName2").innerHTML = "M.2 1TB SSD - RM329";
    }

    if(storage3 == 0){
        document.getElementById("storageName3").innerHTML = "No second storage";
    }else if(storage3 == 70){
        document.getElementById("storageName3").innerHTML = "2.5 120GB SSD";
    }else if(storage3 == 100){
        document.getElementById("storageName3").innerHTML = "2.5 240GB SSD";
    }else if(storage3 == 159){
        document.getElementById("storageName3").innerHTML = "2.5 480GB SSD";
    }else if(storage3 == 165){
        document.getElementById("storageName3").innerHTML = "2.5 500GB SSD";
    }else if(storage3 == 309){
        document.getElementById("storageName3").innerHTML = "2.5 1TB SSD";
    }else if(storage3 == 129){
        document.getElementById("storageName3").innerHTML = "M.2 250GB SSD";
    }else if(storage3 == 179){
        document.getElementById("storageName3").innerHTML = "M.2 500GB SSD";
    }else if(storage3 == 329){
        document.getElementById("storageName3").innerHTML = "M.2 1TB SSD - RM329";
    }

    //Setting name for case
    if(casing == 159){
        document.getElementById("caseName").innerHTML = "Deepcool Matrexx 40 MATX Black";
    }else if(casing == 149){
        document.getElementById("caseName").innerHTML = "Montech Air 100 Lite MATX Black/White";
    }else if(casing == 169){
        document.getElementById("caseName").innerHTML = "Tecware Flatline MATX Black/White";
    }else if(casing == 209){
        document.getElementById("caseName").innerHTML = "Tecware Nexus Air M ARGB MATX Black/White";
    }else if(casing == 209){
        document.getElementById("caseName").innerHTML = "Montech Air 100 ARGB MATX Black/White";
    }else if(casing == 229){
        document.getElementById("caseName").innerHTML = "Tecware Neo ARGB ATX Black/White";
    }else if(casing == 309){
        document.getElementById("caseName").innerHTML = "Phanteks Eclipse P360A ATX Black/White";
    }else if(casing == 349){
        document.getElementById("caseName").innerHTML = "Phanteks Eclipse P400A ARGB ATX";
    }else if(casing == 529){
        document.getElementById("caseName").innerHTML = "Lian Li O11 Dynamic ATX Black/White";
    }

    //Setting name for psu
    if(psu == 160){
        document.getElementById("psuName").innerHTML = "Aigo GP550 550W 80+Bronze NM";
    }else if(psu == 170){
        document.getElementById("psuName").innerHTML = "Aigo GP650 650W 80+Bronze NM";
    }else if(psu == 299){
        document.getElementById("psuName").innerHTML = "Corsair CV750 750W 80+Bronze NM";
    }else if(psu == 199){
        document.getElementById("psuName").innerHTML = "1STPlayer DK PS-600AX 600W 80+Bronze FM";
    }else if(psu == 469){
        document.getElementById("psuName").innerHTML = "Thermaltake Toughpower GF750w 80+Gold FM";
    }else if(psu == 779){
        document.getElementById("psuName").innerHTML = "Asus ROG Strix 850W 80+Gold FM";
    }

    //Setting name for Cooler
    if(cpuCooler == 0){
        document.getElementById("coolerName").innerHTML = "Stock Cooler";
    }else if(cpuCooler == 80){
        document.getElementById("coolerName").innerHTML = "Deepcool Gammaxx 400XT White";
    }else if(cpuCooler == 83){
        document.getElementById("coolerName").innerHTML = "ID-Cooling SE-224-XT Black";
    }else if(cpuCooler == 124){
        document.getElementById("coolerName").innerHTML = "Deepcool AK400 Black/White";
    }else if(cpuCooler == 374){
        document.getElementById("coolerName").innerHTML = "Noctua NH-U9S Black";
    }else if(cpuCooler == 194){
        document.getElementById("coolerName").innerHTML = "ID-Cooling Frostflow X 240";
    }else if(cpuCooler == 204){
        document.getElementById("coolerName").innerHTML = "ID-Cooling Frostflow 240XT Black";
    }else if(cpuCooler == 229){
        document.getElementById("coolerName").innerHTML = "ID-Cooling Frostflow 240XT Snow Edition";
    }else if(cpuCooler == 1049){
        document.getElementById("coolerName").innerHTML = "NZXT Kraken Z53 RGB White 240mm";
    }else if(cpuCooler == 999){
        document.getElementById("coolerName").innerHTML = "Asus ROG Ryujin II 240mm";
    }
}
//var variklis = new Variklis();

// document.getElementById("listas").innerHTML = ' <tr>'
// + '<td>Tipas</td>'
// +'<td>Kaina</td>'
// +'<td>Firma</td>'
// +'<td>Galia</td>'
// +'</tr>'
// +' <tr>'
// + '<td>Tipas</td>'
// +'<td>Kaina</td>'
// +'<td>Firma</td>'
// +'<td>Galia</td>'
// +'</tr>'

function Variklis(id, tipas, kaina, firma, galia){
    this.id = id;
    this.tipas = tipas;
    this.kaina = kaina;
    this.firma = firma;
    this.galia = galia;
}

var list = new Array();
list.push(new Variklis(1, "V6", 400, "Audi", 131));
list.push(new Variklis(2, "V4", 400, "Audi", 125));
list.push(new Variklis(3, "V8", 800, "Audi", 220));
list.push(new Variklis(4, "V12", 1300, "Audi", 300));
list.push(new Variklis(5, "V12", 1300, "BMW", 300));
list.push(new Variklis(6, "V8", 500, "BMW", 220));
list.push(new Variklis(7, "V6", 400, "BMW", 220));
list.push(new Variklis(8, "V4", 220, "BMW", 90));
list.push(new Variklis(9, "V6", 400, "Audi", 131));
list.push(new Variklis(10, "V6", 300, "Fiat", 80));
list.push(new Variklis(11, "V8", 500, "Fiat", 215));


function onLoad(){

    var htmlstring = "";
    
    for (var i = 0; i < list.length; i ++ ){
        window.console.log(list[i]);
        htmlstring = htmlstring + ' <tr>'+'<td>'+list[i].tipas+'</td>'+'<td>'+list[i].kaina.toString()+'</td>'+'<td>'+list[i].firma+'</td>'+'<td>'+list[i].galia.toString()+'</td>'+'</tr>';
    }

    //htmlstring=' <tr>'+'<td>Tipas</td>'+'<td>Kaina</td>'+'<td>Firma</td>'+'<td>Galia</td>'+'</tr>'
    document.getElementById("listas").innerHTML = htmlstring;
    window.console.log(htmlstring)
}
function btnSubmit()
{
    var selectionTipas = document.getElementById("tipas_select").value;
    var selectionTipasProc = document.getElementById("tipas_proc").value;
    var selectionFirma = document.getElementById("firma_select").value;
    var selectionFirmaProc = document.getElementById("firma_proc").value;
    var selectionKaina = document.getElementById("kaina").value;
    var selectionGalia = document.getElementById("galia").value;





    var htmlstring = "";

    for(var i = 0; i < list.length; i++){
        var tipasskirtumas;
        var firmaskirtumas;
        var kainuS;
        if(selectionTipas === list[i].tipas){
            tipasskirtumas = 0;
        }
        else{
            tipasskirtumas = 1;
        }
        if(selectionFirma === list[i].firma){
            firmaskirtumas = 0;
        }
        else{
            firmaskirtumas = 1;
        }
        var ats = Math.sqrt(Math.pow((list[i].kaina - selectionKaina)/43, 2) + Math.pow((list[i].galia - selectionGalia)/10, 2) + tipasskirtumas + firmaskirtumas);
        
        //htmlstring = htmlstring + '<tr><td>'+ats+'</td></tr>';
        //htmlstring = htmlstring + '<tr><td>'+Math.sqrt(Math.pow((list[i].kaina - selectionKaina), 2))/1300+'</td><td>'+Math.sqrt(Math.pow((list[i].galia - selectionGalia), 2))/300+'</td></tr>'
        htmlstring = selectionTipasProc + " " + selectionFirmaProc;

    }
    document.getElementById("skaiciuListas").innerHTML = htmlstring;
    
    
    console.log(selectionTipas);
    console.log(selectionTipasProc);
    console.log(selectionFirma);
    console.log(selectionFirmaProc);
    console.log(selectionKaina);
    console.log(selectionGalia);
}




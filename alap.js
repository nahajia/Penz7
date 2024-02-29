document.getElementById("collapsibleNavbar").innerHTML=`
<ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="index.html">Pénz egyszeri lekötése</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index_folyamatos.html">Folyamatos befizetés</a>
                      </li>
                    <li class="nav-item">
                      <a class="nav-link" href="index_hitel.html">Hitelkérés</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.penz7.hu">Pénz7</a>
                    </li>
                   
                    
                  </ul>
`

function szamit(){

    var osszeg=parseInt(document.getElementById("osszeg").value)
    var kamatlab=parseInt(document.getElementById("kamatlab").value)
    var ev=parseInt(document.getElementById("ev").value)
    var ado=parseInt(document.getElementById("ado").value)

    var eredmeny=Math.round(osszeg*Math.pow(1+kamatlab/100,ev))
    var adoteljes=Math.round(eredmeny-osszeg)*ado/100
    var eredmenyadozasutan=Math.round(eredmeny-adoteljes)
    document.getElementById("eredmeny").innerHTML=`
    Befizetett összeg: ${osszeg} Ft
    <br>
    Kamat: ${eredmeny-osszeg} Ft
    <br>
    Levonás (kamatadó): ${adoteljes} Ft
    <br>
    Rendelkezésre álló összeg ${ev} év után:
    <br> 
    <span class="szines">
    ${eredmenyadozasutan} Ft
    </span>`
}
function szamitFolyamatos(){

    var osszeg=parseInt(document.getElementById("osszeg").value)
    var ho=parseInt(document.getElementById("ho").value)
    var kamatlab=parseInt(document.getElementById("kamatlab").value)
    var ev=parseInt(document.getElementById("ev").value)
    var ado=parseInt(document.getElementById("ado").value)
    
    var szam=ev*(12/ho)
    
    var eredmeny=osszeg
    for (let i = 0; i < szam; i++) {
        eredmeny=eredmeny*(1+kamatlab/100)+osszeg
        
        
    }
    eredmeny-=osszeg
    //alert(eredmeny)
    var adoteljes=Math.round((eredmeny-szam*osszeg)*ado/100)
    var eredmenyadozasutan=Math.round(eredmeny-adoteljes)
    document.getElementById("eredmeny").innerHTML=`
    Befizetett összeg: ${szam*osszeg} Ft
    <br>
    Kamat: ${Math.round(eredmeny-szam*osszeg)} Ft
    <br>
    Levonás (kamatadó): ${adoteljes} Ft
    <br>
    Rendelkezésre álló összeg ${ev} év után:
    <br> 
    <span class="szines">
    ${eredmenyadozasutan} Ft
    </span>`
}

function szamitHitel(){

    var osszeg=parseInt(document.getElementById("osszeg").value)
    var kamatlab=parseInt(document.getElementById("kamatlab").value)
    var ev=parseInt(document.getElementById("ev").value)
    

    var visszateljes=Math.round(osszeg*Math.pow(1+kamatlab/100,ev))
    
    document.getElementById("eredmeny").innerHTML=`
    Hitelként felvett összeg: ${osszeg} Ft
    <br>
    Visszafizetett összeg ${ev} év után:
    <br> 
    <span class="szines">
    ${visszateljes} Ft
    </span>`
}
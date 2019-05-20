window.onload = function(){
    document.getElementById("btnMessage").addEventListener("click",showMessage);
    document.getElementById("btnSumar").addEventListener("click",sumar);
    document.getElementById("btnRandom").addEventListener("click",tableRandom);
    document.getElementById("btnTMul").addEventListener("click",tablasMul);
    document.getElementById("btnFact").addEventListener("click",factorial);
    document.getElementById("btnPrim").addEventListener("click",primos);
    document.getElementById("btnClear").addEventListener("click",clearTables);
    document.getElementById("btnAsc").addEventListener("click",ordAsc);
    document.getElementById("btnDesc").addEventListener("click",ordDesc);
    document.getElementById("btnLin").addEventListener("click",seacrhLin);
    document.getElementById("btnBin").addEventListener("click",searchBin);

    //En este metodo estan los eventos de la practica 3 (colores en los input text)
    inputColors();
}

//practica 1
function showMessage(){
    var mss = document.getElementById("txtMessage").value;
    alert(mss);
}
//practica 2
function sumar(){
    var num1 = parseInt(document.getElementById("txtNumber1").value);
    var num2 = parseInt(document.getElementById("txtNumber2").value);
    var res = num1 + num2;
    alert("La suma de es: "+res);
}


//practica 3
function inputColors(){

    /*en esta metodo se agruparon todos los eventos de la practica 3 que es muy extensa en codigo
    pero a grandes rasgos se agrega el evento a cada uno de los input text que por defecto su clase es 
    "empy" {esta clase es el estilo que se puso en el css para cambiar el color},
    tambien aclarar que en lugar de llamar a un metodo, el metodo se incorpora dentro del mismo evento,
    esto para ahorrar mucho codigo....
    el evento "focusin" es para cuando el input text tenga el foco, es decir que le hayas dado click
    para escribir, se activa el evento que cambia la clase de "empty" a "active" y el css hace el cambio
    de los colores
    */
    document.getElementById("txtName").addEventListener("focusin",function txtIn(){
        document.getElementById("txtName").className = "form-control active";
    });
    document.getElementById("txtLastN1").addEventListener("focusin",function txtIn(){
        document.getElementById("txtLastN1").className = "form-control active";
    });
    document.getElementById("txtLastN2").addEventListener("focusin",function txtIn(){
        document.getElementById("txtLastN2").className = "form-control active";
    });

    /*este es el evento "focusout" que se activa cuando el evento detecta que te has salido del input text
    ya sea que hayas pasado a otro o hayas dado click fuera de los textbox, y dento de la funcion se valida
    al salir, dejaste vacio o con texto dentro del input.
    -en caso de quedarse vacio, se regresa a la clase "empty" para que cambie a verde
    -en caso contrario, que tenga texto se cambia a la clase "full" para que pase a rojo

    {las clase "empy, active y full"} esta en el style.css
    */
    document.getElementById("txtName").addEventListener("focusout",function txtOut(){
        var testo = document.getElementById("txtName").value;
        if(testo!=""){
            document.getElementById("txtName").className = "form-control full";
        }else{
            document.getElementById("txtName").className = "form-control empty";
        }
    });
    document.getElementById("txtLastN1").addEventListener("focusout",function txtOut(){
        var testo = document.getElementById("txtLastN1").value;
        if(testo!=""){
            document.getElementById("txtLastN1").className = "form-control full";
        }else{
            document.getElementById("txtLastN1").className = "form-control empty";
        }
    });
    document.getElementById("txtLastN2").addEventListener("focusout",function txtOut(){
        var testo = document.getElementById("txtLastN2").value;
        if(testo!=""){
            document.getElementById("txtLastN2").className = "form-control full";
        }else{
            document.getElementById("txtLastN2").className = "form-control empty";
        }
    });
}

//metodo para borrar las tablas
function clearTables(){
    document.getElementById("tablas").innerHTML = "";
}

//practica 4
function tableRandom(){
    //obtenemos el div tabla
    var divTable = document.getElementById("tablas");
    //creamos un nuevo elemento tipo div, y lo guardamos en boxTR
    var boxTR = document.createElement("div");
    //le enviamos sus atributos (id y class)
    boxTR.setAttribute("class","col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4");
    boxTR.setAttribute("id","boxTR");

    //creamos un elemento table
    var tabla = document.createElement("table");
    //le enviamos la clase a table
    tabla.setAttribute("class","table")

    //creamos un elemento thead y le insertamos el HTML de cabecera
    var tHead = document.createElement("thead");
    tHead.innerHTML = "<tr><th>Index</th><th>Numero</th><tr>";
    //agregamos como hijo thead a tabla
    tabla.appendChild(tHead);

    //creamos un elemento tbody
    var tBody = document.createElement("tbody");

    var numRandom = document.getElementById("txtAleatorios").value;
    var numr = 0;

    //ciclo para crear filas <tr>
    for(var i=1; i<=numRandom; i++){
        //creamos el elemento <tr>
        var fila = document.createElement("tr");
        
        //ciclo para crear celdas <td>
        for(var j = 0; j<2; j++){
            //creamos el elemento <td>
            var celda = document.createElement("td");

            //comparamos, si j vale 0 insertamos el indice (i), si no, insertamos el numero pseudoaleatorio
            if(j==0){
                //creamos un elemento de tipo TextNode para almacenar el contenido
                var texto = document.createTextNode(i);
            }else{
                //guardamos el numero random del 1 al 100 y lo convertimos a entero
                numr = parseInt( Math.random()*100);
                //creamos un elemento de tipo TextNode para almacenar el contenido
                var texto = document.createTextNode(numr);
            }
            //agregamos como hijo texto a celda
            celda.appendChild(texto);
            //agregamos como hijo celda a fila
            fila.appendChild(celda);
        }
        //agregamos la fila como hijo de tbody
        tBody.appendChild(fila);
    }

    //agregamos el tbody a la tabla
    tabla.appendChild(tBody);
    //agregamos como hijo la tabla al div que contiene la tabla
    boxTR.appendChild(tabla);
    //lo agregamos como hijo de divTable
    divTable.appendChild(boxTR);
}

//practica 5
function tablasMul(){
    var numTabla = document.getElementById("txtNumTablas").value;
    var limitMul = document.getElementById("txtLimiMul").value;
    //se sigue la misma estructura de la practica 4 para generar tablas, unicamente se mete todo eso
    //en un ciclo para crear mas de 1 tabla hasta n
    for(var t = 1; t<=numTabla; t++){
        var divTable = document.getElementById("tablas");
        var boxTR = document.createElement("div");
        boxTR.setAttribute("class","col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4");
        boxTR.setAttribute("id","boxTR");
    
        var tabla = document.createElement("table");
        tabla.setAttribute("class","table");
    
        var tHead = document.createElement("thead");
        tHead.innerHTML = "<tr><th>Multiplicador * "+t+"</th><th>Resultado</th></tr>";
        tabla.appendChild(tHead);
    
        var tBody = document.createElement("tbody");
    
        for(var i = 1; i<=limitMul; i++){
            var fila = document.createElement("tr");
    
            for(var j = 0; j<2; j++){
                var celda = document.createElement("td");
    
                if(j==0){
                    var testo = document.createTextNode(i);
                }else{
                    var testo = document.createTextNode(i*t);
                }
                celda.appendChild(testo);
                fila.appendChild(celda);
            }
            tBody.appendChild(fila);
        }
    
        tabla.appendChild(tBody);
        boxTR.appendChild(tabla);
        divTable.appendChild(boxTR);
    }
}

//practica 7
function factorial(){
    var num = document.getElementById("txtNumPF").value;
    var res = 1;
    for(var i = 1; i<=num; i++){
        res*=i
    }
    alert("El Factorial de "+num+" es: "+res);
}

//practica 8
function primos(){
    var num = document.getElementById("txtNumPF").value;
    var isPrimo = true;
    //ciclo para obtener el modulo al dividir por todos los numeros desde 2 hasta n
    for(var i=2; i<num; i++){
        //si en cualquiera de las divisiones, el modulo es 0, entonces no es numero primo
        if(num%i==0){
            //no es primo, se iguala a false
            isPrimo=false;
        }
    }

    //comprobamos isPrimo
    if(isPrimo){
        alert("Si es Primo");
    }else{
        alert("No es Primo");
    }
}

//metodo para leer el string separado por ',' y los guarda en un arreglo
function leerString(testo){
    //arreglo donde se guardaran los numeros encontrados
    var arrayDatos = [];
    //indice para recorrer el arreglo cada que se guarde un nuevo valor
    var indice = 0;
    //en esta variable se va guardando cada caracter encontrado hasta llegar a la ','
    var auxWord = "";

    //recorremos toda la cadena
    for(var i = 0; i<testo.length; i++){
        //si el caracter en la posicion i es NO es una ',' entonces se agrega el caracter a auxWord
        if(testo.charAt(i)!=','){
            //si i es igual a la longitud de la cadena, siginica que ya termino la busqueda
            //y como no habra ',' se guarda en el arreglo
            if(i==testo.length-1){
                auxWord+=testo.charAt(i);
                arrayDatos[indice] = parseInt(auxWord);
            }else{
                //de lo contrario sigue el ciclo normal y se va concatenando cada caracter
                auxWord+=testo.charAt(i);
            }
        }else{
            //si el caracter en la posicion i SI es una ',' entonces se guarda la palabra en el arreglo
            //y se limpia auxWord
            arrayDatos[indice] = parseInt(auxWord);
            auxWord="";
            indice++;
        }
    }
    //Imprimimos en consola y devolvemos el arreglo con las palabras
    console.log(arrayDatos);
    return arrayDatos;
}

//practica 9 Orden Ascendente
function ordAsc(){
    //guardamos la cadena del input text
    var cadena = document.getElementById("txtSerieOrd").value;
    //mandamos la cadena al metodo anterior para leer la cadena y que devuelva el arreglo 
    var datos = leerString(cadena);
    var aux;
    var swap = true;
    //esta variable es para validar si hubo un intercambio en valores
    //si al recorrer todo el arreglo, no hay ningun cambio, significa que ya termino el ordenamiento
    while(swap){
        swap = false;
        //recorremos el arreglo de numeros
        for(var i=0; i<datos.length; i++){
            //si es la posicion i es mayor a i+1, hacemos un swap e indicamos que swap es true pues
            //si se realizo un cambio y hay que recorrer de nuevo para validar
            if(datos[i]>datos[i+1]){
                aux = datos[i];
                datos[i] = datos[i+1];
                datos[i+1] = aux;
                swap = true;
            }
        }
    }

    //imprimimos en consola y lo imprimimos en un alert
    console.log(datos);
    alert("Tus datos en orden ascendente quedaron asi: "+datos);
}
//practica 9 Orden Descendente
function ordDesc(){
    //este metodo es EXACTAMENTE el mismo, unicamente se cambia una condicion
    var cadena = document.getElementById("txtSerieOrd").value;
    var datos = leerString(cadena);
    var aux;
    var swap = true;
    while(swap){
        swap = false;
        for(var i=0; i<datos.length-1; i++){
            //aqui se cambia el > por un <  y con esto se invierte el metodo de ordenamiento
            if(datos[i]<datos[i+1]){
                aux = datos[i];
                datos[i] = datos[i+1];
                datos[i+1] = aux;
                swap = true;
            }
        }
    }
    //se imrpime en consola y se manda a un alert
    console.log(datos);
    alert("Tus datos en orden descendente quedaron asi: "+datos);
}

//practica 10 Busqueda Lineal
function seacrhLin(){
    //guardamos la cadena del input text
    var cadena = document.getElementById("txtSearchSerie").value;
    //se manda al metodo leerString para que me devuelva el arreglo con los numeros
    var datos = leerString(cadena);
    //se guarda el numero a buscar
    var numSearch = document.getElementById("txtSearch").value;
    var isExist = false;

    //es una busqueda lineal asi que no es necesario ordenar los datos, asi que se recorre con 1 for
    for(var i = 0; i<datos.length; i++){
        if(datos[i]==numSearch){
            //si existe se indica en la variable booleana
            isExist= true;
        }
    }
    if(isExist){
        alert("El numero "+numSearch+" si existe");
    }else{
        alert("El numero "+numSearch+" no existe");
    }
}
//practica 10 Busqueda Binaria
function searchBin(){
    //guardamos la cadena del input text
    var cadena = document.getElementById("txtSearchSerie").value;
    //se manda al metodo leerString para que me devuelva el arreglo con los numeros
    var datos = leerString(cadena);

    //este metodo requiere que los datos esten ordenados de forma ascendente.
    //en esta parte se repite el mismo metodo de ordenamiento Ascendete por lo que el ciclo es el mismo
    var aux;
    var swap = true;
    while(swap){
        swap = false;
        for(var i=0; i<datos.length-1; i++){
            if(datos[i]>datos[i+1]){
                aux = datos[i];
                datos[i] = datos[i+1];
                datos[i+1] = aux;
                swap = true;
            }
        }
    }//aqui termina el ordenamiento

    //se guarda el numero a buscar
    var numSearch = document.getElementById("txtSearch").value;
    var isExist = false;
    //se guardan los valores medio, izq y der
    var md = datos.length/2;
    var izq = 0;
    var der = datos.length;

    //mientras isExist sea false, es decir, no exista y que el limite izq sea menor o igual al der
    while(!isExist&&izq<=der){
        if(datos[md] == numSearch){
            //si el dato existe se cambia la booleana y se termina el ciclo
            isExist = true;
        }else if(numSearch<datos[md]){
            //de lo contrario, si el numero a buscar es menor al numero medio, se cambia el limite
            //derecho para que sea igual a medio y medio sera igual a md/2
            der=md-1;
            md=parseInt(md/2);
        }else if(numSearch>datos[md]){
            //de lo contrario se valida lo opuesto, si es mayor se remplaza el limite izq por md
            //y md sera igual a (izq + der) / 2 {asi se saca el punto medio de un intervalo} 
            izq=md+1;
            md=parseInt((izq+der)/2);
        }
    }

    //se imrpime en consola y se manda el alert
    console.log(datos);
    if(isExist){
        alert("El numero "+numSearch+" si existe");
    }else{
        alert("El numero "+numSearch+" no existe");
    }
}
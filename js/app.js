//función para el menú desplegable lateral
/*function mostrar() {
    document.getElementById("sidebar").style.width = "20em";
    document.getElementById("contenido").style.marginLeft = "20em";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}*/
//menu de sedes y generaciones
var list =document.getElementById('list');
list.addEventListener('click', function(){
  var texto = list.firstChild.innerHTML;
  var sede = document.getElementById('sede');
  document.getElementById('parrafo').innerHTML = 'SANTIAGO DE CHILE ' + texto;
  /*var menu2 = document.getElementsByClassName('menu_oculto');
  menu2[0].classList.toggle('menu');
  var contenedor = document.getElementsByClassName('contenedor');
  contenedor[0].classList.toggle('contendor2');*/
})

//hacer que el menu cambie cada vez que es seleccionado
var mostrarOcultar = function(e){
    var tabSeleccionado = e.target.dataset.tabSeleccionado;
    var elementosTab = document.getElementsByClassName("tab");
    var overview = document.getElementById("overview");
    var students = document.getElementById("students");
    if(tabSeleccionado==="tabOverview"){
      console.log("overview");
    //ocultar los demas menus
      students.style.display="none";
      elementosTab[0].style.borderBottom = "0.2em solid #F9A91A";
      elementosTab[1].style.borderBottom = "none";
    //tengo que mejorar el borde del boton /students.style.border= "0.1em solid #F7B617";
    //mostrar overview
      overview.style.display="block";
    }else if(tabSeleccionado==="tabStudents"){
      console.log("students");
      //ocultar los demas menus
      overview.style.display="none";
      //mostrar estudiantes
      students.style.display="block";
      elementosTab[1].style.borderBottom = "0.2em solid #F9A91A";
      elementosTab[0].style.borderBottom = "none";
    }
}
var cargarPagina = function(){
    var elementosTab = document.getElementsByClassName("tab");
    for(var i = 0; i < elementosTab.length; i++){
      elementosTab[i].addEventListener("click",mostrarOcultar);
    }
}
cargarPagina();
//grafico de las habilidades tecnicas


/*seccion2*/
//grafico Columnas Enrollments
  google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuffEnrolmment);


      function drawStuffEnrolmment() {
        var data = new google.visualization.arrayToDataTable([
          ['S 0', 'Units'],
          ['S 1', 44],
          ['S 2', 31],
          ['S 3', 12],
          ['S 4', 10],
        ]);

        var options = {
          colors:['#f9a91a'],
          legend: { position: 'none' },
          chart: {
           },
          axes: {

          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('graf_enrolmment'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };
//Grafico Columnas Achievement
  google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuffAachievement);

      function drawStuffAachievement() {
        var data = new google.visualization.arrayToDataTable([
          ["S 0", 'Units'],
          ["S 1", 119],
          ["S 2", 74],
          ["S 3", 90],
          ["S 4", 85]
         
        ]);

        var options = {
          colors:['#f9a91a'],
          legend: { position: 'none' },
          chart: {
            },
          axes: {
          
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('graf_achievement'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };

/*seccion5*/
// grafico satisfacción del estudiante
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawTrendlines);

function drawTrendlines() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');

      data.addRows([
         [0, 0],    [1, 10],   [2, 23],  [3, 16],  [4, 17],
     
      ]);

      var options = {
        hAxis: {
          title: 'Sprint'
        },
        vAxis: {
          title: 'Satidfaction'
        },
        colors: ['#F9A91A', '#F9A91A'],
        trendlines: {
          1: {type: 'linear', color: '#111', opacity: .3}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('graf_student'));
      chart.draw(data, options);
    }
//grafico 
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawTrendlinesTeacher);

function drawTrendlinesTeacher() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');

      data.addRows([
          [0, 0],    [1, 10],   [2, 23],  [3, 16],  [4, 17],
     
      ]);

      var options = {
        hAxis: {
          title: 'Sprint'
        },
        vAxis: {
          title: 'Teacher Rating'
        },
        colors: ['#F9A91A'],
        trendlines: {
          1: {type: 'linear', color: '#111', opacity: .3}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('graf_teacher'));
      chart.draw(data, options);
    }
//grafico de nps
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawTrendlinesNet);

function drawTrendlinesNet() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');

      data.addRows([
        [0, 0],    [1, 10],   [2, 23],  [3, 16],  [4, 17],
     
      ]);

      var options = {
        hAxis: {
          title: 'Sprint'
        },
        vAxis: {
          title: 'Nps'
        },
        colors: ['#F9A91A'],
        trendlines: {
          1: {type: 'linear', color: '#111', opacity: .3}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('graf_net'));
      chart.draw(data, options);
    }


// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);

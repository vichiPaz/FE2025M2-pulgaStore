function mostrarFecha() {
  const ahora = new Date();
  const diasSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  //calculo fecha actual

  const diaSemana = diasSemana[ahora.getDay()];
  const dia = ahora.getDate();
  const mes = meses[ahora.getMonth()];
  const anio = ahora.getFullYear();

  //horas, minutos y segundos

  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  //texto a mostrar en elemento p

  const fechaActual = `${diaSemana} ${dia} de ${mes} del ${anio}, ${hora}:${minutos}:${segundos}`;
  const fechaElement = document.getElementById("fechaActual");
  fechaElement.innerText = fechaActual;
}

setInterval(mostrarFecha, 1000);
mostrarFecha();

$(document).ready(function () {
  const table = $("#example").DataTable({
    ajax: "../data/pedidos.json",
    columns: [
      {
        data: null,
        defaultContent: '<input type="checkbox" class="row-select" />',
        orderable: false,
      },
      { title: "Nombre", data: 0 },
      { title: "Producto", data: 1 },
      { title: "Ciudad", data: 2 },
      { title: "Edad", data: 3 },
      { title: "Fecha de compra", data: 4 },
      { title: "Cantidad", data: 5 },
      {
        data: null,
        defaultContent:
          '<button class="btn btn-outline-danger btn-sm delete-row">' +
          '<span class="material-symbols-outlined">delete</span>' +
          "</button>",
        orderable: false,
      },
    ],
    scrollY: 400,
    scrollCollapse: true,
    scroller: true,
    responsive: true,
    jQueryUI: true,
  });

  $("#example tbody").on("click", ".delete-row", function () {
    table.row($(this).parents("tr")).remove().draw();
  });
});

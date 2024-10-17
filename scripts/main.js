import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var promedioTemporadas = document.getElementById("promedio-temporadas");
renderSeriesInTable(dataSeries);
promedioTemporadas.innerHTML = "".concat(getPromedioTemporadas(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.numero, "</td>\n                           <td>").concat(serie.nombre, "</td>\n                           <td>").concat(serie.plataforma, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioTemporadas(series) {
    var totalTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    return parseFloat((totalTemporadas / series.length).toFixed(2));
}

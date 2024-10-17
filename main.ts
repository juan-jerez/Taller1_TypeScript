
import { dataSeries } from './data.js';
import { Serie } from './serie.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioTemporadas: HTMLElement = document.getElementById("promedio-temporadas")!;

renderSeriesInTable(dataSeries);


promedioTemporadas.innerHTML = `${getPromedioTemporadas(dataSeries)}`
 

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.numero}</td>
                           <td>${serie.nombre}</td>
                           <td>${serie.plataforma}</td>
                           <td>${serie.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getPromedioTemporadas(series: Serie[]): number {
  let totalTemporadas: number = 0;
  series.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporadas);
  return parseFloat((totalTemporadas / series.length).toFixed(2));
}


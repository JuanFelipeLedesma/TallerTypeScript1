// src/app.ts

import { Serie, series } from './data.js';


function createTableRow(serie: Serie): string {
    return `<tr>
                <td>${serie.id}</td>
                <td>${serie.name}</td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
                <td><a href="${serie.url}" target="_blank">Link</a></td>
                <td><img src="${serie.imageUrl}" alt="Image of ${serie.name}" style="width: 100px; height: auto;"></td>
                <td>${serie.description}</td>
            </tr>`;
}

function renderTable(): void {
    const tableBody = document.getElementById('series-table-body');
    if (tableBody) {
        tableBody.innerHTML = ''; // Limpiar el cuerpo de la tabla
        series.forEach(serie => {
            tableBody.innerHTML += createTableRow(serie);
        });
    }
}

document.addEventListener('DOMContentLoaded', renderTable);

// src/app.ts
import { series } from './data.js';
function createTableRow(serie) {
    return "<tr>\n                <td>".concat(serie.id, "</td>\n                <td>").concat(serie.name, "</td>\n                <td>").concat(serie.channel, "</td>\n                <td>").concat(serie.seasons, "</td>\n                <td><a href=\"").concat(serie.url, "\" target=\"_blank\">Link</a></td>\n                <td><img src=\"").concat(serie.imageUrl, "\" alt=\"Image of ").concat(serie.name, "\" style=\"width: 100px; height: auto;\"></td>\n                <td>").concat(serie.description, "</td>\n            </tr>");
}
function renderTable() {
    var tableBody = document.getElementById('series-table-body');
    if (tableBody) {
        tableBody.innerHTML = ''; // Limpiar el cuerpo de la tabla
        series.forEach(function (serie) {
            tableBody.innerHTML += createTableRow(serie);
        });
    }
}
document.addEventListener('DOMContentLoaded', renderTable);
//# sourceMappingURL=app.js.map
/* Rediseño v56 — calendario "¡Agéndalo!" que marca el día de los XV */
(function () {
    'use strict';
    var YEAR = 2026, MONTH = 11, DAY = 20;   // mes empieza en 0: 11 = diciembre

    function buildCalendar() {
        var grid = document.getElementById('rCalGrid');
        if (!grid) return;
        var html = ['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(function (d) {
            return '<span class="r-cal-h">' + d + '</span>';
        }).join('');
        var first = new Date(YEAR, MONTH, 1).getDay();      // 0 = domingo
        var offset = (first + 6) % 7;                        // semana empieza en lunes
        var days = new Date(YEAR, MONTH + 1, 0).getDate();
        for (var i = 0; i < offset; i++) html += '<span></span>';
        for (var d = 1; d <= days; d++) {
            html += d === DAY
                ? '<span class="r-cal-d on" aria-current="date"><i>' + d + '</i></span>'
                : '<span class="r-cal-d">' + d + '</span>';
        }
        grid.innerHTML = html;
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildCalendar);
    else buildCalendar();
})();

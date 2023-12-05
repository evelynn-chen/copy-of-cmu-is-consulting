var colors = ['#C41230','#FDB515','#009647','#008F91','#043673','#007BC0','#EF3A47','#1F4C4C','#182C4B','#719F94'];
var donutColors = ['#C41230','#FDB515','#009647','#008F91','#043673','#007BC0'];
// bubble chart 

document.addEventListener('DOMContentLoaded', function() {
    
    // Doughnut chart
    var donutOptions = {
        cutoutPercentage: 85,
        legend: {position:'bottom', padding:5, labels: {pointStyle:'circle', usePointStyle:true}}
    };

    var donutData = {
        labels: ['Pittsburgh', 'Remote', 'CMU','Global','National','Pennsylvania'],
        datasets: [
            {
                backgroundColor: donutColors.slice(0,6),
                borderWidth: 0,
                data: [118,15,21,2,17,13]
            }
        ]
    };

    var donutCtx = document.getElementById("chDonut1");
    if (donutCtx) {
        new Chart(donutCtx, {
            type: 'doughnut',
            data: donutData,
            options: donutOptions
        });
    }
});

var colors = ['#C41230','#FDB515','#009647','#008F91','#043673','#007BC0','#EF3A47','#1F4C4C','#182C4B','#719F94'];
var donutColors = ['#C41230','#FDB515','#009647','#008F91','#043673','#007BC0'];
// bubble chart 

document.addEventListener('DOMContentLoaded', function() {
    // Bubble chart
    const bubbleDataValues = [57, 27, 15, 4, 14, 3, 4, 23, 6, 2];
    const bubbleDataLabels = ['Education: 57', 'Equity: 27', 'Sustainability: 15', 'Business: 4', 'Health: 14', 'Animals: 3', 'Gov.: 4', 'Social Services: 23', 'Food: 6', 'Other: 2'];

    const locationX = [30, 60, 5, 15, 10, 73, 80, 55, 45, 50];
    const locationY = [150, 235, 80, 45, 190, 180, 175, 100, 270, 220];


    const bubbleData = bubbleDataValues.map((value, index) => ({
        x: locationX[index], // x-coordinate (random for demonstration)
        y: locationY[index], // y-coordinate (random for demonstration)
        r: value * 1,  // radius based on data value
        label: bubbleDataLabels[index], // individual label for each bubble
    }));

    const bubbleColors = colors.slice(0, bubbleDataValues.length);

    const bubbleCtx = document.getElementById('chBubbleChart').getContext('2d');

    new Chart(bubbleCtx, {
        type: 'bubble',
        data: {
            datasets: bubbleData.map(dataPoint => ({
                data: [dataPoint],
                backgroundColor: bubbleColors[bubbleData.indexOf(dataPoint)], // Bubble fill color
                label: dataPoint.label,
            })),
        },
        options: {
            scales: {
                x: {
                    display: false,
                    type: 'linear',
                    position: 'bottom',
                },
                y: {
                    display: false,
                    type: 'linear',
                    position: 'left',
                }
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: function (value, context) {
                        return context.dataset.label;
                    },
                    font: {
                        weight: 'bold',
                    },
                },
            },
            tooltips: {
                callbacks: {
                    label: function (context) {
                        const label = context.dataset.label;
                        const radiusValue = context.parsed.r;
                        return `${label}: ${radiusValue}`;
                    },
                },
            },
        },
    });

    // Doughnut chart
    var donutOptions = {
        cutoutPercentage: 85,
        legend: { position: 'bottom', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
    };

    var donutData = {
        labels: ['Pittsburgh', 'Remote', 'CMU', 'Global', 'National', 'Pennsylvania'],
        datasets: [
            {
                backgroundColor: donutColors.slice(0, 6),
                borderWidth: 0,
                data: [118, 15, 21, 2, 17, 13]
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

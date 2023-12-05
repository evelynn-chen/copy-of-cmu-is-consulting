var colors = ['#C41230','#FDB515','#009647','#008F91','#043673','#007BC0'];

/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 85, 
  legend: {position:'bottom', padding:5, labels: {pointStyle:'circle', usePointStyle:true}}
};

// donut 1
var chDonutData1 = {
    labels: ['Pittsburgh', 'Remote', 'CMU','Global','National','Pennsylvania'],
    datasets: [
      {
        backgroundColor: colors.slice(0,6),
        borderWidth: 0,
        data: [118,15,21,2,17,13]
      }
    ]
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
  new Chart(chDonut1, {
      type: 'doughnut',
      data: chDonutData1,
      options: donutOptions
  });
}


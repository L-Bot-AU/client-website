function displayGraph(selected) {
    var ctx = document.getElementById('myChart').getContext('2d');
    console.log("graph display updated");
    // console.log(allData);
    var points = [];
    var time = [];
    for (const key in allData[selected]) {
        time.push(key);
        points.push(allData[selected][key]);
    }
    // console.table(points);
    // console.table(time);
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: ["", "Mon", "Tues", "Wed", "Thurs", "Fri", "All"][selected],
                data: points,
                backgroundColor: [
                    'rgba(0, 0, 0, 0)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ][selected],
                borderColor: [
                    'rgba(0, 0, 0, 0)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ][selected],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function ceil(n){
    n = -Math.floor((-n)/5);
    return n;
}
function displayGraph(update){
    selected[update] = 1 - selected[update];
    var ctx = document.getElementById('myChart').getContext('2d');
    console.log("graph display updated");
    // console.log(graphData);
    var times = graphData["labels"];
    // console.table(times);
    var allDatasets = [];
    for (let i = 0; i < 8; i++){
        if (selected[i]){
            allDatasets.push(dataset(i));
        }
    }
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: times,
            datasets: allDatasets
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

function dataset(index){
    var data = {label: ["", "Mon", "Tues", "Wed", "Thurs", "Fri"][index],
                data: graphData["data"][index],
                pointHitRadius: 5,
                pointHoverBackgroundColor: [
                    'rgba(0, 0, 0, 0)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ][index],
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: [
                    'rgba(0, 0, 0, 0)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ][index],
                borderWidth: 3
            }
    return data
}

function ceil(n){
    n = -Math.floor((-n)/5);
    return n;
}
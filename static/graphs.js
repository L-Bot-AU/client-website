function displayGraph(update){
    selected[update] = 1 - selected[update];
    var ctx = document.getElementById('myChart').getContext('2d');
    console.log("graph display updated");
    // console.log(allData);
    var time = [];
    for (const key in allData[0]) {
        time.push(key);
    }
    // console.table(time);
    var allDatasets = [];
    for (let i = 0; i < 8; i++){
        if (selected[i]){
            allDatasets.push(dataset(i));
        }
    }
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
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
    var points = [];
    for (const key in allData[index]) {
        points.push(allData[index][key]);
    }
    // console.table(points);
    var data = {label: ["", "Mon", "Tues", "Wed", "Thurs", "Fri", "All"][index],
                data: points,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                // backgroundColor: [
                //     'rgba(0, 0, 0, 0)',
                //     'rgba(255, 99, 132, 0.2)',
                //     'rgba(54, 162, 235, 0.2)',
                //     'rgba(255, 206, 86, 0.2)',
                //     'rgba(75, 192, 192, 0.2)',
                //     'rgba(153, 102, 255, 0.2)',
                //     'rgba(255, 159, 64, 0.2)'
                // ][index],
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
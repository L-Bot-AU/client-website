function displayGraph(update){
    console.log("graph display updated");
    // console.log(graphData);
    var times = window.graphData["labels"];
    // console.table(times);
    window.trends.data.datasets.pop();
    window.trends.data.datasets.push(dataset(update));
    window.trends.update();
}

function dataset(index){
    var data = {label: ["", "Mon", "Tues", "Wed", "Thurs", "Fri"][index],
                data: graphData["data"][index],
                pointHitRadius: 5,
                HoverBackgroundColor: [
                    'rgba(0, 0, 0, 0)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ][index],
                backgroundColor: [
                    'rgba(0, 0, 0, 0)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ][index],
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
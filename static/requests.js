const host = "127.0.0.1";
// const host = "10.219.218.62";
// const host = "192.168.137.1";
const port = 2910;

// todo enable cross origin resource sharing (CORS)?
const socket = io("ws://localhost:5000");

socket.on("connect", () => {
  // either with send()
  socket.send("Hello!");

  // or with emit() and custom event names
  socket.emit("salutations", "Hello!", { "mr": "john" });
});

// handle the event sent with socket.send()
socket.on("message", data => {
  console.log(data);
});

// handle the event sent with socket.emit()
socket.on("greetings", (elem1, elem2, elem3) => {
  console.log(elem1, elem2, elem3);
});

// function updateAll() {
//     libs = ["snr", "jnr"];
//     todo = ["Count"];
//     for (let i = 0; i < 2 ; i++){
//         for (let j = 0; j < 1; j++) {
//             getReq(libs[i] + todo[j], "updText");
//         }
//     }
// }

function getReq(upd, type) {
    let sock = new WebSocket(`ws://${host}:${port}/${upd}`);
    console.log("updating...");
    sock.onmessage = function (event) {
        result = JSON.parse(event.data);//could've been ugly but credits go to inspiration from our lord and saviour
        // console.log("result:", result);
        if (type === "updText"){
            updText(upd, result);
        } else if (type === "graph"){
            console.log("ello");
            console.log(result);
            window.graphData = result;
            window.trends = new Chart(ctx, {
                            type: 'bar',
                            data: {
                                labels: window.graphData["labels"]
                            },
                            options: {
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                            max: 100
                                        }
                                    }]
                                }
                            }
                        });
        } else {
            console.log("unidentified request type");
        }
    }
}

function updText(upd, result){
    document.getElementById(upd).innerHTML = result;
    if (upd.slice(3) === "Count") updCount(upd, result);
}

function updCount(upd, result){
    if (upd[0] === "s") document.getElementById(upd+"%").innerHTML = Math.round(result/84*100); //hard coded library capacities
    else document.getElementById(upd+"%").innerHTML = Math.round(result/108*100);
}

function hardCode(){
    console.log("hardcoded data");
    window.graphData = {"labels": ["morning", "break 1", "break 2"], "data": [[0, 0, 10], [1, 4, 6], [1, 7, 2], [3, 7, 8], [1, 6, 9], [2, 5, 7]]};
}
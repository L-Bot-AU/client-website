// todo make diff functions for each data, main function loops thru each and updates value
// todo Expected?

const host = "127.0.0.1";
const port = 2910;

function updateAll() {
    libs = ["snr", "jnr"];
    todo = ["Count", "Time"];
    console.log("updating...");
    for (let i = 0; i < 2 ; i++){
        for (let j = 0; j < 2; j++) {
            getReq(libs[i] + todo[j], "updText");
        }
    }
}

function getReq(upd, type) {
    let sock = new WebSocket(`ws://${host}:${port}/${upd}`);
    sock.onmessage = function (event) {
        result = JSON.parse(event.data);//could've been ugly but credits go to inspiration from our lord and saviour
        // console.log("result:", result);
        if (type === "updText"){
            updText(upd, result);
        } else if (type === "graph"){
            window.graphData = result;
            displayGraph(0);
        } else {
            console.log("unidentified type");
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
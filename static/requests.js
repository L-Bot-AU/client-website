// todo make diff functions for each data, main function loops thru each and updates value
// todo sleep function

const host = "127.0.0.1";
const port = 2910;

function updateAll() {
    todo = ["snrCount", "jnrCount"];//, "snrPredictions", "jnrPredictions"];
    console.log("updating...");
    for (let i = 0; i < 2 ; i++){
        getReq(todo[i], "updText");
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
    document.getElementById(upd+"%").innerHTML = Math.round(result/84*100);
}

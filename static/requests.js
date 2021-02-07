// todo make diff functions for each data, main function loops thru each and updates value

const host = "127.0.0.1";
const port = 2910;

function updateAll() {
    todo = ["snrCount", "jnrCount", "snrPredictions", "jnrPredictions"];
    for (let i = 0; i < 2 ; i++){
        updText(todo[i]);
    }
}

function updText(upd){
    var result = getReq(upd);
    // console.log(result);
    document.getElementById(upd).innerHTML = result;
}

function getReq(upd) {
    let sock = new WebSocket(`ws://${host}:${port}/${upd}`);
    sock.onmessage = function (event) {
        result = JSON.parse(event.data);//could've been ugly but credits go to inspiration from our lord and saviour
        console.log("result:", result);
        //do stuff
    }
    console.log(result);
    return result;
}

// todo sleep function
// todo get "{lib}Count", "{lib}Events", "{lib}PastData", "{lib}Noise", "{lib}Scanner", "{lib}CompUse"

// todo make diff functions for each data, main function loops thru each and updates value

// todo sleep function


// while (true){
//     updateAll();
// }

// function updateAll(){
//     libs = ["snr"]; //["snr", "jnr"];
//     data = ["Count"]; //["Count", "Events", "PastData", "Noise", "Scanner", "CompUse"];
//     console.log(`l: ${libs.length}, d: ${data.length}`);
//     for (var i = 0; i < libs.length; i++){
//         lib = libs[i];
//         for (var j = 0; j < data.length; j++){
//             action = data[j];
//             // getReq(lib, action);
//             var updated = getReq();
//             console.log(`u: ${updated}`);
//             console.log(updated.responseText);
//             return updated;
//         }
//     }
// }

function getReq() {
    // todo fix up hard code
    lib = "snr";
    data = "Count";

    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        console.log(`s: ${this.readyState}, stst: ${this.status}`);
        if (this.readyState === 1 && this.status === 200) {
            // console.log(this.readyState);
            // console.log(this.responseText);
            return this.responseText;
            // document.body.innerHTML = "";
        }
    }
    xhttp.open("GET", `http://127.0.0.1:5000/${lib}${data}`, true);
    xhttp.send();
    return xhttp;
}
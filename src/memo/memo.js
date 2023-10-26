function exampleFunction() {
    return new Promise((resolve, reject) => {
        var oReq = new XMLHttpRequest();
        oReq.open("GET", "http://localhost:8080");
        oReq.onload = function () {
            resolve(oReq.response); // Resolve 상태
        };
        oReq.onerror = function () {
            reject(oReq.response);  // Reject 상태
        };
        oReq.send();    // pending 상태
    });
}

exampleFunction()
    .then((r) => console.log("Resolved " + r))
    .catch((e) => console.log("Rejected " + e));
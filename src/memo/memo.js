let options = {
    method: "POST",
    headers: [
        ["Content-Type", "application/json"]
    ],
    body: JSON.stringify("")
};

fetch("http://localhost:8080/todo", options)
    .then(respone => {
        // reponse 수신 시 하고 싶은 작업
    })
    .catch(e=> {
        // 에러가 났을 때 하고 싶은 작업
    })
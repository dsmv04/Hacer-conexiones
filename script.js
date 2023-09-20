let requestSpan = document.querySelector("#requests");
let connectionSpan = document.querySelector("#connections");
let username = document.querySelector("#username");

function accept(id) {
    let element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    let element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}


function edit() {
    username.innerText = "Marisa G";
}
let balanceShow = document.querySelector("#amount");
let input = document.querySelector("input");
let tbody = document.querySelector("tbody");



function loadFromLocalStorage() {
    let savedData = localStorage.getItem('data');
    let savedBalance = localStorage.getItem('balance');
    if (savedData) {
        data = JSON.parse(savedData);
    }
    if (savedBalance) {
        balance = JSON.parse(savedBalance);
    }
}

function saveToLocalStorage() {
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('balance', balance);
}

function deleteRow(index, beforeBalance) {
    balance = beforeBalance;
    data.splice(index, 1);
    renderLogs();
    showBalance(balance);
    saveToLocalStorage();
}

function renderLogs() {
    tbody.innerHTML = "";
    data.forEach((el, index) => {
        tbody.innerHTML += `
        <tr>
            <th>${index + 1}</th>
            <th>${el.beforeBalance}</th>
            <th>${el.logType}</th>
            <th>${el.logValue}</th>
            <th>${el.afterBalance}</th>
            <th><button class="btn btn-danger" onclick="deleteRow(${index},${el.beforeBalance})">del</button></th>
        </tr>
    `;
    });
}

function showBalance(val) {
    balanceShow.innerHTML = val;
}

loadFromLocalStorage();
renderLogs();
showBalance(balance);

function deposit() {
    let oldBalance = balance;
    balance += +input.value;
    showBalance(balance);
    let rowObj = {
        beforeBalance: oldBalance,
        logType: "deposit",
        logValue: +input.value,
        afterBalance: balance,
    };
    data.push(rowObj);
    renderLogs();
    saveToLocalStorage();
}

function withdraw() {
    if (+input.value > balance) {
        alert("Value is higher than balance");
    } else {
        let oBalance = balance;
        balance -= +input.value;
        let rowObj = {
            beforeBalance: oBalance,
            logType: "withdraw",
            logValue: +input.value,
            afterBalance: balance,
        };
        data.push(rowObj);
        renderLogs();
        showBalance(balance);
        saveToLocalStorage();
    }
}

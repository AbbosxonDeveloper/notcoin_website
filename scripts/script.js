let coin = document.getElementById("coin");
let main_amount = document.getElementById("main_amount");
let multitap = document.getElementById("multitap")

let getCoin = JSON.parse(localStorage.getItem("coin"));
let getMultitap = JSON.parse(localStorage.getItem("multitap"))
let storageCash = localStorage.setItem("coin", getCoin | 0);
let storagemultitap = localStorage.setItem("multitap", getMultitap | 1)

main_amount.textContent = getCoin | 0;
multitap.textContent = "+" + (getMultitap)

console.log(getCoin, getMultitap);
main_amount.textContent = numberWithCommas(main_amount.textContent)

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

coin.onclick = () => {
    getCoin += getMultitap;
    console.log(getCoin);
    localStorage.setItem("coin", JSON.stringify(getCoin));
    main_amount.textContent = numberWithCommas(getCoin);
}
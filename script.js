let coin = document.getElementById("coin");
let main_amount = document.getElementById("main_amount");
// main_amount.textContent = 999989

let getCoin = JSON.parse(localStorage.getItem("coin"));
let storageCash = localStorage.setItem("coin", getCoin || '0');

main_amount.textContent = getCoin | 0

console.log(getCoin);
main_amount.textContent = numberWithCommas(main_amount.textContent)

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

coin.onclick = () => {
    let toNumber = +main_amount.textContent.split(',').join('');
    getCoin += 1;
    console.log(getCoin);
    localStorage.setItem("coin", JSON.stringify(getCoin));
    main_amount.textContent = numberWithCommas(getCoin);
}
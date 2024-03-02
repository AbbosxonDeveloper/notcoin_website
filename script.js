function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

let coin = document.getElementById("coin")
let main_amount = document.getElementById("main_amount")
main_amount.textContent = 999989
main_amount.textContent = numberWithCommas(main_amount.textContent)

coin.onclick = () => {
    let toNumber = +main_amount.textContent.split(',').join('')
    toNumber += 1;
    main_amount.textContent = numberWithCommas(toNumber)
}
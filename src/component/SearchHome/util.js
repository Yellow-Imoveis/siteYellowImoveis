export function pricesToSell() {
    return _getPricesTo(50000, 10000000, 50000);
}

export function pricesToRent() {
    return _getPricesTo(500, 50000, 500);
}

function _getPricesTo(priceStart, priceEnd, step = 500) {
    const prices = [];
    for (let i = priceStart; i <= priceEnd; i += step) {
        prices.push({ value: i, label: i.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) });
    }

    return prices;
}

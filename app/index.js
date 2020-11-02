var ccxt = require('ccxt')
//https://github.com/ccxt/ccxt/wiki
//https://4traders.club/article/bystraa-rabota-s-birzei-cerez-terminal

//console.log (ccxt.exchanges) // print all available exchanges

async function markets() {
    //Чтобы вручную загрузить рынки, вызовите метод loadMarkets ()/ load_markets ()
    let livecoin = new ccxt.livecoin({
        'enableRateLimit': true,
    })

   // console.log(livecoin.id, await livecoin.load_markets())

    console.log (await livecoin.loadMarkets ())

    let btcusd1 = livecoin.markets['BTC/USD']     // get market structure by symbol
    let btcusd2 = livecoin.market ('BTC/USD')     // same result in a slightly different way

    let btcusdId = livecoin.marketId ('BTC/USD')  // get market id by symbol

    let symbols = livecoin.symbols                // get an array of symbols
    let symbols2 = Object.keys (livecoin.markets) // same as previous line

    console.log (livecoin.id, symbols)            // print all symbols
}

markets();
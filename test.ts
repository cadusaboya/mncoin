const pythClient = new PythHttpClient(connection, pythPublicKey);
const data = await pythClient.getData();

for (let symbol of data.symbols) {
  const price = data.productPrice.get(symbol)!;
  // Sample output:
  // Crypto.SRM/USD: $8.68725 ±$0.0131 Status: Trading
  console.log(`${symbol}: $${price.price} \xB1$${price.confidence} Status: ${PriceStatus[price.status]}`)
}
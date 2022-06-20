export function currencyFormat(currency: string | number) {
  const num = +currency;
  return "R$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

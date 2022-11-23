export function currencyFormat(currency: string | number) {
  const num = +currency;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(num);
}

const formatNumber = (number) => {
  let price = number;
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return formattedPrice;
};

export { formatNumber };

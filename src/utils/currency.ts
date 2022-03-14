export const currencyMapper = (currency?: string) =>
  currency
    ? {
      EUR: '€',
      USD: '$',
    }[currency]
    : '';

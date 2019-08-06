export const EXCHANGE_ERROR: string = 'EXCHANGE_ERROR';
export const EXCHANGE_SEARCH: string = 'EXCHANGE_SEARCH';
export const EXCHANGE_URL: string = 'EXCHANGE_URL';

const actionExchange = (url: string) => ({
  type: EXCHANGE_URL,
  url: url
});

export default actionExchange;

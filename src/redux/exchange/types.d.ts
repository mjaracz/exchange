export type actionExchange = {
  type: string,
  url: string,
  payload: companies[],
  error?: Error,
}

export type stateExchange = {
  isLoading: boolean,
  companies: companies[],
  error: Error | null,
  url: string
}

export type companies = {
  "1. symbol": string,
  "2. name": string,
  "3. type": string,
  "4. region": string,
  "5. marketOpen": string,
  "6. marketClose": string,
  "7. timezone": string,
  "8. currency": string,
  "9. matchScore": string
}

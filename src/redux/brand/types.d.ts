type actionBrand = {
  type: string,
  url: string,
  payload: brand[],
  error: Error
}

export type brand = {
  name: string,
  domain: string,
  logo: string
}

export interface stateBrand {
  isLoading: boolean;
  url: string;
  error: Error | null;
  brands: brand[]
}


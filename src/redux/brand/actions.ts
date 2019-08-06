export const BRAND_URL: string = 'BRAND_URL';
export const BRAND_FETCH: string = 'BRAND_FETCH';
export const BRAND_ERROR: string = 'BRAND_ERROR';

const actionBrand = (url: string) => ({
  type: BRAND_URL,
  url: url
});

export default actionBrand;

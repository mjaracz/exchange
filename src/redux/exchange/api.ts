export const get = (url: string) => fetch(url).then(res => res).then(data => data.json()).then(data => data.bestMatches);
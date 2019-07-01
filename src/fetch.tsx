import { METHODS } from "http";

const API_KEY = '6NW29aowuDui7oth0EpBZqYXtVxMfMQKvel4HpQO4FmsyC_5zYlg2GDZym7HXaUoM7xdJC-LVTXATNs9wRoh1ZVaNNa_bBFJpAvDc8xTsByCoq_VGQL3iR5wBjoVXXYx';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com';
const SEARCH_URL = 'https://api.yelp.com/v3/businesses/search?location=nyc';
const DETAILS_URL = 'https://api.yelp.com/v3/businesses';

const HEADER = {
  'Authorization': `Bearer ${API_KEY}`,
}

export function fetchBusinesses(pageNumber: number, itemsPerPage: number): Promise<any> {
  return fetch(`${PROXY_URL}/${SEARCH_URL}&limit=${itemsPerPage}&offset=${pageNumber*itemsPerPage}`,
  { headers: HEADER, });
}
//${PROXY_URL}/${DETAILS_URL}/${businessId}
export function fetchBusinessDetail(businessId: number): Promise<any> {
  return fetch(`${PROXY_URL}/${DETAILS_URL}/${businessId}`,
  { headers: HEADER, })
}
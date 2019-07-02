const API_KEY =
  '6NW29aowuDui7oth0EpBZqYXtVxMfMQKvel4HpQO4FmsyC_5zYlg2GDZym7HXaUoM7xdJC-LVTXATNs9wRoh1ZVaNNa_bBFJpAvDc8xTsByCoq_VGQL3iR5wBjoVXXYx';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com';
const SEARCH_URL = 'https://api.yelp.com/v3/businesses/search?location=nyc';
const DETAILS_URL = 'https://api.yelp.com/v3/businesses';
const REVIEWS_URL = (businessId: string) =>
  `https://api.yelp.com/v3/businesses/${businessId}/reviews`;

const HEADER = {
  Authorization: `Bearer ${API_KEY}`,
};

async function fetch<T>(url: string, args: object) {
  // eslint-disable-next-line no-undef
  const rsp = await window.fetch(url, args);
  return rsp.json();
}

export interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  location: { display_address: string };
  price: string;
  rating: number;
  categories: { title: string }[];
}

export interface BusinessReview {
  id: string;
  text: string;
}

export function fetchBusinesses(pageNumber: number, itemsPerPage: number) {
  return fetch<Business[]>(
    `${PROXY_URL}/${SEARCH_URL}&limit=${itemsPerPage}&offset=${pageNumber *
      itemsPerPage}`,
    { headers: HEADER },
  );
}
export function fetchBusinessDetail(businessId: string) {
  return fetch<Business>(`${PROXY_URL}/${DETAILS_URL}/${businessId}`, {
    headers: HEADER,
  });
}

export function fetchBusinessReviews(businessId: string) {
  return fetch<BusinessReview>(`${PROXY_URL}/${REVIEWS_URL(businessId)}`, {
    headers: HEADER,
  });
}

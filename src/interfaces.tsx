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

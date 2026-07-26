export interface CategoryItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface ProductItem {
  id: string;
  title: string;
  image: string;
  link: string;
  category?: string;
}

export interface NewsItem {
  id: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
  link: string;
}

export interface Product {
  id: string;
  createdAt: string;
  title: string;
  price: string;
  image: string;
  stock: number;
  quantity?: number;
}

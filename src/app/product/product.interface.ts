export type TProduct = {
  title: string;
  price: number;
  rating: number;
  description: string;
  stock: number;
  quantity: number;
  category: 'Hanging' | 'Indoor' | 'Low' | 'Money' | 'Flowering';
  availability: 'Instock' | 'Outofstock';
  image: string;
};

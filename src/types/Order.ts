export type Item = {
  productId: string;
  quantity: number;
};

export type Order = {
  items: Item[];
  total: number;
};

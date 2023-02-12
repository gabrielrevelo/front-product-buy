export interface Product {
  id: string;
  name: string;
  inventory: number;
	imageUrl: string;
	enabled: boolean;
	min: number;
	max: number;
  quantity: number;
}

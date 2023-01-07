import { products } from "../data/productsData";

interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const categorySet = new Set<string>();
const brandSet = new Set<string>();
const price: number[] = [];
const title: string[] = [];
const stock: number[] = [];

products.forEach((product) => {
  categorySet.add(product.category);
  brandSet.add(product.brand);
  title.push(product.title);
  price.push(product.price);
  stock.push(product.stock);
});

const sortedCategorySet = Array.from(categorySet).sort();
const sortedBrandSet = Array.from(brandSet).sort();

const priceMin: number = Math.min(...price);
const priceMax: number = Math.max(...price);
const stockMin: number = Math.min(...stock);
const stockMax: number = Math.max(...stock);

export { Products, categorySet, brandSet, price, title, stock, sortedCategorySet, sortedBrandSet, priceMin, priceMax, stockMin, stockMax };
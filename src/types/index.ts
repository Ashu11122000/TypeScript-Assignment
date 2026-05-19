export type ProductCategory =
    | "Electronics"
    | "Books"
    | "Clothing"
    | "Accessories"
    | "Home";

export type CurrencyCode = "INR" | "USD";

export type CartItemTuple = [number, string, number];

export type StockStatus =
    | "In Stock"
    | "Limited Stock"
    | "Out of Stock";

export interface Product {
    id: number;
    name: string;
    category: ProductCategory;
    price: number;
    stock: number;
    status: StockStatus;
    imageUrl: string;
}

export interface InventoryStats {
    totalProducts: number;
    inStockCount: number;
    outOfStockCount: number;
    limitedStockCount: number;
}

export interface AppConfig {
    appName: string;
    currency: CurrencyCode;
    version: string;
}
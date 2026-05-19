import type {
    Product,
    CartItemTuple,
} from "../types";

export const products: Product[] = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2999,
        stock: 15,
        status: "In Stock",
        imageUrl:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
        id: 2,
        name: "TypeScript Handbook",
        category: "Books",
        price: 899,
        stock: 6,
        status: "Limited Stock",
        imageUrl:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
        id: 3,
        name: "Cotton T-Shirt",
        category: "Clothing",
        price: 599,
        stock: 0,
        status: "Out of Stock",
        imageUrl:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
        id: 4,
        name: "Leather Wallet",
        category: "Accessories",
        price: 1299,
        stock: 4,
        status: "Limited Stock",
        imageUrl:
            "https://images.unsplash.com/photo-1627123424574-724758594e93",
    },
    {
        id: 5,
        name: "Table Lamp",
        category: "Home",
        price: 1799,
        stock: 12,
        status: "In Stock",
        imageUrl:
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    },
];

export const sampleCartItem: CartItemTuple = [
    1,
    "Wireless Headphones",
    2,
];
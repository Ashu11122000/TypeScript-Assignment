import type {
    Product,
    InventoryStats,
    StockStatus,
} from "../types";

export function getFirstItem<T>(items: T[]): T | undefined {
    return items[0];
}

export function formatCurrency(
    amount: number,
    currencySymbol: string = "₹"
): string {
    return `${currencySymbol}${amount.toLocaleString("en-IN")}`;
}

export function filterProductsByStockStatus(
    products: Product[],
    status: StockStatus
): Product[] {
    return products.filter((product: Product) => {
    return product.status === status;
    });
}

export function calculateInventoryStats(
    products: Product[]
): InventoryStats {
    const inStockCount: number = filterProductsByStockStatus(
        products,
        "In Stock"
    ).length;

    const limitedStockCount: number = filterProductsByStockStatus(
        products,
        "Limited Stock"
    ).length;

    const outOfStockCount: number = filterProductsByStockStatus(
        products,
        "Out of Stock"
    ).length;

    return {
        totalProducts: products.length,
        inStockCount,
        limitedStockCount,
        outOfStockCount,
    };
}

export function findProductById(
    products: Product[],
    productId: number
): Product | undefined {
    return products.find((product: Product) => {
    return product.id === productId;
    });
}
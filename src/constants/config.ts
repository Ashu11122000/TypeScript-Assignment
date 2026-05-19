import type { AppConfig, StockStatus } from "../types";

export const APP_CONFIG: AppConfig = {
    appName: "TypeScript Inventory Manager",
    currency: "INR",
    version: "1.0.0",
};

export const STOCK_STATUSES: StockStatus[] = [
    "In Stock",
    "Limited Stock",
    "Out of Stock",
];

export const LOW_STOCK_THRESHOLD: number = 5;

export const DEFAULT_CURRENCY_SYMBOL: string = "₹";

export const UI_LABELS = {
    productListTitle: "Product Inventory",
    inventorySummaryTitle: "Inventory Summary",
    emptyStateMessage: "No products available.",
    searchPlaceholder: "Search products...",
} as const;
import type { Product } from "../types";
import { formatCurrency } from "../utils/helpers";

export function renderStatsPanel(products: Product[]): string {
    const totalProducts: number = products.length;

    const totalInventoryValue: number = products.reduce(
        (sum: number, product: Product) => {
            return sum + product.price * product.stock;
        },
    0
    );

    const lowStockCount: number = products.filter(
        (product: Product) => product.stock <= 5 && product.stock > 0
    ).length;

    return `
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div class="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 class="text-sm font-medium text-gray-500 mb-2">
                Total Products
            </h3>

            <p class="text-3xl font-bold text-blue-600">
                ${totalProducts}
            </p>
        </div>

        <div class="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 class="text-sm font-medium text-gray-500 mb-2">
                Inventory Value
            </h3>

            <p class="text-3xl font-bold text-green-600">
                ${formatCurrency(totalInventoryValue)}
            </p>
        </div>

        <div class="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 class="text-sm font-medium text-gray-500 mb-2">
                Low Stock Items
            </h3>

            <p class="text-3xl font-bold text-yellow-600">
                ${lowStockCount}
            </p>
        </div>
    </section>`;
}
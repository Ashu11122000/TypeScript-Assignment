import type { Product, StockStatus } from "../types";
import { formatCurrency } from "../utils/helpers";

function getStockBadgeClass(status: StockStatus): string {
    switch (status) {
        case "In Stock":
            return "bg-green-100 text-green-700";

        case "Limited Stock":
            return "bg-yellow-100 text-yellow-700";

        case "Out of Stock":
            return "bg-red-100 text-red-700";

        default:
            return "bg-gray-100 text-gray-700";
    }
}

export function renderProductCard(product: Product): string {
    return `
        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-100">

        <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-semibold uppercase tracking-wide text-gray-500">
                ${product.category}
            </span>

            <span class="px-3 py-1 rounded-full text-xs font-medium ${getStockBadgeClass(product.status)}">
                ${product.status}
            </span>
        </div>

        <div class="mb-4">
            <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-48 object-cover rounded-xl" />
        </div>

        <h3 class="text-xl font-bold text-gray-900 mb-4">
            ${product.name}
        </h3>

        <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-blue-600">
                ${formatCurrency(product.price)}
            </span>

            <span class="text-sm text-gray-500">
                Stock: ${product.stock}
            </span>
        </div>
    </div>`;
}
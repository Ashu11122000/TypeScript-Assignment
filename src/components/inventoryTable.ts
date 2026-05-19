import type { Product, StockStatus } from "../types";
import { formatCurrency } from "../utils/helpers";

function getStatusClass(status: StockStatus): string {
    switch (status) {
        case "In Stock":
            return "text-green-600";

        case "Limited Stock":
            return "text-yellow-600";

        case "Out of Stock":
            return "text-red-600";

        default:
            return "text-gray-600";
    }
}
export function renderInventoryTable(products: Product[]): string {
    const rows: string = products
        .map(
            (product: Product) => `
                <tr class="border-b border-gray-100 hover:bg-gray-50 transition">
                    <td class="px-6 py-4 font-medium text-gray-900">
                        ${product.name}
                    </td>

                    <td class="px-6 py-4 text-gray-600">
                        ${product.category}
                    </td>

                    <td class="px-6 py-4 text-gray-600">
                        ${formatCurrency(product.price)}
                    </td>

                    <td class="px-6 py-4 text-gray-600">
                        ${product.stock}
                    </td>

                    <td class="px-6 py-4 font-semibold ${getStatusClass(product.status)}">
                        ${product.status}
                    </td>
                </tr>
            `
        )
    .join("");

    return `
        <section class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            <div class="px-6 py-4 border-b border-gray-100">
                <h2 class="text-xl font-bold text-gray-900">
                    Inventory Overview
                </h2>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                                Product
                            </th>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                                Category
                            </th>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                                Price
                            </th>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                                Stock
                            </th>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}
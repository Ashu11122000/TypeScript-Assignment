import { products } from "./data/products";
import { APP_CONFIG } from "./constants/config";
import { renderProductCard } from "./components/productCard";
import { renderStatsPanel } from "./components/statsPanel";
import { renderInventoryTable } from "./components/inventoryTable";
import { getFirstItem } from "./utils/helpers";
import type { CartItemTuple } from "./types";

export function initializeApp(): void {
  const appRoot = document.querySelector("#app") as HTMLDivElement | null;

  if (!appRoot) {
    throw new Error("App root element not found.");
  }

  const firstProduct = getFirstItem(products);

  const featuredCartItem: CartItemTuple = firstProduct
    ? [firstProduct.id, firstProduct.name, 1]
    : [0, "No Product", 0];

  const dashboardTitle: string = APP_CONFIG.appName;

  const cartPreview: string = `${featuredCartItem[1]} (${featuredCartItem[2]})`;

  const productCards: string = products
    .map((product) => renderProductCard(product))
    .join("");

  appRoot.innerHTML = `
    <main class="min-h-screen bg-slate-100">
      <div class="max-w-7xl mx-auto px-6 py-10">

        <header class="mb-10">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 class="text-4xl font-bold text-slate-900">
                ${dashboardTitle}
              </h1>

              <p class="text-slate-600 mt-2">
                Featured Cart Item: ${cartPreview}
              </p>
            </div>

            <button
              id="refresh-dashboard"
              class="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Refresh Dashboard
            </button>
          </div>
        </header>

        ${renderStatsPanel(products)}

        <section class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">
            Product Catalog
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${productCards}
          </div>
        </section>

        ${renderInventoryTable(products)}

      </div>
    </main>
  `;

  const refreshButton = document.querySelector(
    "#refresh-dashboard"
  ) as HTMLButtonElement | null;

  if (refreshButton) {
    refreshButton.addEventListener("click", (): void => {
      window.location.reload();
    });
  }
}
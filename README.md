# TypeScript Product Dashboard Assignment

A browser-based TypeScript project built using **HTML5, TailwindCSS, TypeScript, Node.js, and Vite**.

This project is designed as a single complete assignment to demonstrate core TypeScript concepts and browser project setup in a structured, professional way.

---

# Project Objective

This assignment covers the following TypeScript concepts and requirements:

- Set up a basic Node.js or browser project with TypeScript
- Define interfaces and custom types for simple data structures
- Practice explicit type annotation for variables and function signatures
- Implement a function that uses generic types to ensure type safety
- Experiment with type assertion and understand how TypeScript infers types
- Write a small program that utilizes enums and tuples

Instead of creating multiple disconnected examples, this project combines all requirements into one practical mini application.

---

# Project Idea

## TypeScript Product Dashboard

A browser-based dashboard application that demonstrates:

- Product listing
- Inventory management
- Product status tracking
- Typed data rendering
- Generic helper utilities
- DOM interaction with TypeScript
- TailwindCSS UI styling

---

# Tech Stack

- HTML5
- TailwindCSS
- TypeScript
- Vite
- Node.js
- npm

---

# Project Setup Completed So Far

## Step 1: Install Required Tools

Installed:

- Node.js
- npm
- VS Code

Recommended VS Code Extensions:

- Tailwind CSS IntelliSense
- Prettier
- TypeScript Hero
- Error Lens
- Auto Rename Tag

---

## Step 2: Create Project Folder

```bash
mkdir typescript-assignment
cd typescript-assignment
```

---

## Step 3: Initialize Node Project

```bash
npm init -y
```

Generated:

```text
package.json
```

Purpose:

- project metadata
- dependency management
- scripts

---

## Step 4: Create TypeScript Project with Vite

```bash
npm create vite@latest . -- --template vanilla-ts
```

Purpose:

Creates a browser-based TypeScript starter project.

Generated:

```text
index.html
src/
tsconfig.json
vite.config.ts
package.json
```

---

## Step 5: Install Dependencies

```bash
npm install
```

Generated:

```text
node_modules/
package-lock.json
```

Installed:

- TypeScript
- Vite
- Vite internal dependencies

---

## Step 6: Install TailwindCSS

```bash
npm install tailwindcss @tailwindcss/vite
```

Installed:

- tailwindcss
- @tailwindcss/vite

---

## Step 7: Configure TailwindCSS

Updated:

### vite.config.ts

```ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

---

Updated:

### src/style.css

```css
@import "tailwindcss";
```

---

## Step 8: Run Development Server

```bash
npm run dev
```

Expected:

```text
http://localhost:5173
```

Setup verification successful.

---

# Current Project Folder Structure

```text
typescript-assignment/
│
├── node_modules/
│
├── src/
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── data/
│   │   └── products.ts
│   │
│   ├── utils/
│   │   └── helpers.ts
│   │
│   ├── constants/
│   │   └── config.ts
│   │
│   ├── components/
│   │   ├── productCard.ts
│   │   ├── statsPanel.ts
│   │   └── inventoryTable.ts
│   │
│   ├── app.ts
│   ├── main.ts
│   └── style.css
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# Folder Structure Explanation

## src/types/

Contains TypeScript definitions:

- interfaces
- custom types
- enums
- tuples

Examples:

- Product interface
- Product category type
- Stock status enum
- Cart tuple

---

## src/data/

Contains static application data.

Examples:

- product list
- inventory records

---

## src/utils/

Contains reusable helper functions.

Examples:

- generic functions
- currency formatter
- filters
- utility logic

---

## src/constants/

Contains fixed configuration values.

Examples:

- app name
- currency symbol
- UI labels

---

## src/components/

Contains modular UI rendering logic.

Examples:

- product cards
- dashboard stats
- inventory table

---

## src/app.ts

Core application logic.

Responsibilities:

- rendering
- event handling
- DOM interaction
- TypeScript feature demonstrations

---

## src/main.ts

Application entry point.

Loads:

- styles
- app bootstrap logic

---

## src/style.css

TailwindCSS import + custom styling.

---

## index.html

Browser entry point.

Contains:

- HTML5 structure
- app root
- script loading

---

# TypeScript Concepts Covered

This project is designed to demonstrate:

## Type Annotation

Example:

```ts
let totalProducts: number = 10;
```

---

## Type Inference

Example:

```ts
let appName = "Product Dashboard";
```

---

## Interfaces

Example:

```ts
interface Product {}
```

---

## Type Aliases

Example:

```ts
type ProductCategory = "Electronics" | "Books";
```

---

## Enums

Example:

```ts
enum StockStatus {}
```

---

## Tuples

Example:

```ts
type CartItem = [number, string, number];
```

---

## Generics

Example:

```ts
function getFirstItem<T>()
```

---

## Type Assertion

Example:

```ts
document.querySelector() as HTMLDivElement
```

---

## Explicit Function Typing

Example:

```ts
function calculateTotal(price: number): number
```

---

# Assignment Requirement Mapping

| Requirement | Covered |
|----------|---------|
| Set up TypeScript browser project | In Progress |
| Interfaces | Planned |
| Custom types | Planned |
| Explicit type annotations | Planned |
| Generic function | Planned |
| Type assertion | Planned |
| Type inference | Planned |
| Enums | Planned |
| Tuples | Planned |

---

# Next Steps (Implementation Roadmap)

## Phase 1 — Type System Architecture

Create:

```text
src/types/index.ts
```

Implement:

- Product interface
- Inventory interface
- custom type aliases
- StockStatus enum
- Cart tuple

Goal:

Strong TypeScript foundation.

---

## Phase 2 — Static Typed Data

Create:

```text
src/data/products.ts
```

Implement:

- typed product array
- mock inventory data

Goal:

Use interfaces practically.

---

## Phase 3 — Utility Functions

Create:

```text
src/utils/helpers.ts
```

Implement:

- generic reusable function
- currency formatter
- filter helpers
- explicit return types

Goal:

Demonstrate generics + explicit typing.

---

## Phase 4 — Constants

Create:

```text
src/constants/config.ts
```

Implement:

- app title
- currency config
- labels

Goal:

clean architecture.

---

## Phase 5 — UI Components

Create:

```text
src/components/
```

Implement:

### productCard.ts

Generate product card HTML.

---

### statsPanel.ts

Dashboard statistics.

---

### inventoryTable.ts

Inventory listing.

Goal:

modular browser UI.

---

## Phase 6 — Application Logic

Create:

```text
src/app.ts
```

Implement:

- render logic
- event handlers
- DOM manipulation
- type assertion
- type inference examples

Goal:

core application behavior.

---

## Phase 7 — Entry Point

Update:

```text
src/main.ts
```

Implement:

- import styles
- initialize application

Goal:

bootstrap project correctly.

---

## Phase 8 — HTML Integration

Update:

```text
index.html
```

Implement:

- semantic HTML5 structure
- dashboard root container

Goal:

HTML5 compliance.

---

## Phase 9 — Styling

Use:

- Tailwind utility classes

Implement:

- responsive layout
- cards
- tables
- buttons
- dashboard sections

Goal:

clean professional UI.

---

## Phase 10 — Testing

Verify:

```bash
npm run dev
```

Check:

- rendering works
- no TS errors
- all assignment requirements satisfied

---

# Final Expected Features

Completed project will include:

- Product dashboard
- Product cards
- Inventory status
- Dashboard stats
- Typed data structures
- Generic utility functions
- DOM interaction
- Tailwind UI
- Full TypeScript assignment coverage

---

# Run Project

Development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

---

# Final Goal

Deliver a clean, professional, browser-based TypeScript project that demonstrates all assignment requirements in one cohesive application.
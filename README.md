# Fifth & Bean (Coffee Ordering App)

A responsive coffee shop storefront built with Vue 3 and Vite. Visitors can browse a specialty coffee menu, filter drinks by category, add items to a cart, and complete a demo checkout for pickup or delivery.

## Features

- Browse 18 drinks across espresso, milk-based, iced, and specialty categories.
- Filter the menu by category.
- Add drinks to the cart, adjust quantities, or empty the cart.
- See the subtotal and progress toward free delivery.
- Choose pickup or delivery at checkout. Delivery costs 5 RON for orders below 50 RON; orders of 50 RON or more qualify for free delivery.
- See an order confirmation with a generated order number after placing a demo order.
- Switch between dark and light themes.
- Responsive layouts for desktop and mobile screens.

## Technology

- Vue 3 for the application and components.
- Vite for local development and production builds.
- Vue Single File Components (`.vue`) for the app shell, header, footer, and coffee shop view. The interactive views use Vue JSX inside `<script lang="jsx">` blocks.
- `@vitejs/plugin-vue` and `@vitejs/plugin-vue-jsx` to compile Vue SFCs and JSX.
- `gh-pages` for publishing the production build to GitHub Pages.

## Requirements

- Node.js 18+, 20+, or 22+ (supported by the Vite 6 toolchain).
- npm.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal, usually `http://localhost:5173`.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Serve the production build locally for review. |
| `npm run deploy` | Build the app and publish `dist/` to the `gh-pages` branch. |

## Project structure

```text
src/
  App.vue          Root Vue component
  CoffeeShop.vue   Menu, cart, theme, and checkout experience
  SiteHeader.vue   Brand, navigation, theme switch, cart count
  SiteFooter.vue   Store footer
  main.js          Vue app entry point
  styles.css       Global styles, themes, and responsive layout
index.html         Vite HTML entry point
vite.config.js     Vue plugins and GitHub Pages base path
```

## GitHub Pages deployment

Vite is configured with the project base path `/vue-vite-order-coffee/`. This matches a GitHub Pages project site whose repository is named `vue-vite-order-coffee`.

1. Push the project to a GitHub repository named `vue-vite-order-coffee`, or update `base` in `vite.config.js` to match the repository name.
2. Run `npm run deploy`. The command builds the app and pushes the generated `dist/` directory to the `gh-pages` branch.
3. In the repository's GitHub Pages settings, select the `gh-pages` branch as the publishing source if it is not already selected.

Deployment requires a valid Git repository, a configured GitHub remote, and permission to push to it.

## Notes and limitations

- Checkout is for demonstration only. It does not process payments or send orders to a server.
- The menu and pricing are static data in `src/CoffeeShop.vue`.
- Cart, theme, and order state live in memory and reset when the page is reloaded.
- Product and hero imagery load from Unsplash; the DM Sans and Playfair Display fonts load from Google Fonts. These assets require an internet connection.
- The storefront copy is currently in English, while the HTML document language is set to Romanian (`lang="ro"`).

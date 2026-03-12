# Baliserenetours

Baliserenetours is a modern web application offering premium airport transfers, daily car rentals, and guided tours across Bali.

## Tech Stack

This project is built using the **TALL+I stack** (Tailwind, Alpine, Laravel, Livewire + Inertia), tailored specifically towards a React-driven seamless SPA experience using the latest ecosystem versions:

- **Backend:** [Laravel 12](https://laravel.com) (PHP 8.4+)
- **Frontend Stack:** [React 19](https://react.dev) + [Inertia.js v2](https://inertiajs.com)
- **Styling & UI:** [Tailwind CSS v4](https://tailwindcss.com), [Framer Motion](https://motion.dev/), [Lucide React](https://lucide.dev)
- **Administration:** [Filament v5](https://filamentphp.com) (Admin Panel / Server-Driven UI)
- **Code Formatting:** Laravel Pint (PHP), Prettier (JS/CSS)

## Key Features

- **Modern SPA Experience:** Powered by Inertia.js v2, offering features like deferred props, prefetching, and infinite scrolling.
- **SEO Optimized:** Fully integrated SEO infrastructure, meta tags, and schema.org strictly typed JSON-LD.
- **Dynamic Content & Pricing:** Components built out for easily updating features, services, and dynamic pricing models.
- **Server-Driven Admin (Filament):** Extensive use of Filament v5 providing powerful administration configurations for models.

## Development Setup

To get started with local development, follow the steps below:

### Prerequisites

- PHP 8.4+
- Composer
- Node.js & npm/yarn/pnpm

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd inertia-bst
   ```

2. **Install PHP dependencies:**

   ```bash
   composer install
   ```

3. **Install NPM dependencies:**

   ```bash
   npm install
   ```

4. **Environment Setup:**

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

   > Ensure you configure your database settings in the `.env` file before proceeding.

5. **Run Migrations (and seeders):**

   ```bash
   php artisan migrate --seed
   ```

6. **Start the Development Servers:**
   This project leverages Laravel's integrated Vite setup.
   ```bash
   npm run dev
   # In a separate terminal or using Laravel concurrency (if set up):
   php artisan serve
   ```

## Code Standards

- **PHP:** Format the PHP code using Laravel Pint before pushing:
  ```bash
  vendor/bin/pint --dirty --format agent
  ```
- **JS/CSS:** Prettier is configured for the frontend assets (including Tailwind v4 plugins).

## Testing

This project strictly enforces tests. To run tests suites:

```bash
php artisan test --compact
```

Pest test runner is configured and PHPUnit is actively used covering edge cases and regular functionality.

---

_Created and maintained with Laravel Boost guidelines and modern web standards in mind._

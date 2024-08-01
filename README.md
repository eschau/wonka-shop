# Wonka Store App

## Running the app

To get started with the Wonka Store App, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-repo/wonka-store-app.git
   cd wonka-store-app
   ```

1. **Install dependencies:**

    ```sh
    yarn install
    ```

1. **Run the server**
    
    ```sh
    cp .env.sample .env # One-time task to set up secrets
    yarn dev            
    ```

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `prettier:write` – formats all files with Prettier

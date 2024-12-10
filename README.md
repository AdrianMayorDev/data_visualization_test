## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Edit `.env.example` file to add your backend server URL

---

## Project Structure

The project has the following structure:

### Explanation of Key Directories

-   **`src/api`**: Contains API-related code, such as API endpoints.
-   **`src/app`**: Contains the main application components and pages.
-   **`src/components`**: Contains reusable UI components.
-   **`src/layouts`**: Contains layout components that define the structure of different pages.
-   **`src/redux`**: Contains Redux-related code, such as slices and store configuration.
-   **`src/styles`**: Contains global styles.
-   **`src/types`**: Contains TypeScript type definitions.

---

## Main Features

-   **`NameFormComponent`**: A compound component that handles the logic and presentation of the name search form.
-   **`CovidDashboardComponent`**: A container component that handles the business logic and presents the COVID-19 data.

---

## Design Patterns Used

-   **Compound Component**: Used in the `NameFormComponent` to encapsulate the state and logic within the compound component.
-   **Container-Presenter**: Used in the `CovidDashboardComponent` to separate the business logic from the presentation logic.

---

## Technologies Used

-   **Next.js**: A React framework for web applications.
-   **TypeScript**: A programming language that adds static typing to JavaScript.
-   **Redux**: A state management library for JavaScript apps.
-   **Sass**: A CSS preprocessor that adds power and elegance to the basic language.

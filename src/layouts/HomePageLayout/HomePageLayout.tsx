import { BaseCard } from "@/components/BaseCard/BaseCard";
import ReactMarkdown from "react-markdown";

const HomePageLayout = () => {
	const markdownContent = `
# Data Visualization Project

This project uses **Next.js** to create a data visualization application. Below are the main features and components you can find in this project:

## Main Features

- **NameFormComponent**: A compound component that handles the logic and presentation of the name search form.
- **CovidDashboardComponent**: A container component that handles the business logic and presents the COVID-19 data.
- **LoadingSpinner**: A reusable component to display a loading spinner.

## Design Patterns Used

- **Compound Component**: Used in the \`NameFormComponent\` to encapsulate the state and logic within the compound component.
- **Container-Presenter**: Used in the \`CovidDashboardComponent\` to separate the business logic from the presentation logic.


## Technologies Used

- **Next.js**: A React framework for web applications.
- **TypeScript**: A programming language that adds static typing to JavaScript.
- **SCSS**: A CSS preprocessor for more robust and maintainable styles.
- **Recharts**: A charting library for React.

`;

	return (
		<section style={{ maxWidth: "1050px", padding: "1rem" }}>
			<BaseCard>
				<ReactMarkdown>{markdownContent}</ReactMarkdown>
			</BaseCard>
		</section>
	);
};

export { HomePageLayout };

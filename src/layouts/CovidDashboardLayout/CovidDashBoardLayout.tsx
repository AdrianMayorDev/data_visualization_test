import CovidDashboardComponent from "@/components/CovidDashboardComponent/CovidDashboardComponent";
import styles from "./CovidDashboardLayout.module.scss";
import { BaseCard } from "@/components/BaseCard/BaseCard";

const { covidDashboardLayout } = styles;

const CovidDashboardLayout = () => {
	return (
		<section className={covidDashboardLayout}>
			<BaseCard>
				<CovidDashboardComponent />
			</BaseCard>
		</section>
	);
};

export { CovidDashboardLayout };

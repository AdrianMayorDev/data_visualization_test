import CovidDashboardContainer from "@/components/CovidDashboardComponent/CovidDashboardComponent";
import styles from "./CovidDashboardLayout.module.scss";

const { covidDashboardLayout } = styles;

const CovidDashboardLayout = () => {
	return (
		<section className={covidDashboardLayout}>
			<CovidDashboardContainer />
		</section>
	);
};

export { CovidDashboardLayout };

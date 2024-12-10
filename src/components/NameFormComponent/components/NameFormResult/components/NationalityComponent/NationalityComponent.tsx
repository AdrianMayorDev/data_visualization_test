import style from "./NationalityComponent.module.scss";
import { DetailData } from "@/components/DetailData/DetailData";

const { countryDataContainer, countryFlag } = style;

interface NationalityComponentProps {
	nationality: { country_id: string; probability: number }[];
	nationalityFetching: boolean;
}

const NationalityComponent = ({ nationality }: NationalityComponentProps) => {
	const regionNames = new Intl.DisplayNames("en", { type: "region" });

	return (
		<ul>
			{nationality.map((country, index) => {
				const countryName = regionNames.of(`${country.country_id}`) || "Unknown";
				return (
					<li className={countryDataContainer} key={`${country.country_id}_${index}`}>
						<DetailData
							imageSrc={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.country_id}.svg`}
							imageAlt={countryName!}
							imageHeight={48}
							imageWidth={71}
							imageClassName={countryFlag}
							detailText={countryName}
							detailTextBold={`${(country.probability * 100).toFixed(2)}%`}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default NationalityComponent;

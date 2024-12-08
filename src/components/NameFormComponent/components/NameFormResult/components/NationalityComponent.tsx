import Image from "next/image";
import style from "./NationalityComponent.module.scss";

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
				const countryName = regionNames.of(`${country.country_id}`);
				return (
					<li className={countryDataContainer} key={`${country.country_id}_${index}`}>
						<Image
							className={countryFlag}
							alt={countryName!}
							src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.country_id}.svg`}
							width={71}
							height={48}
						/>
						<div>
							<p>{countryName}</p>
							<b>{(country.probability * 100).toFixed(2)}%</b>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default NationalityComponent;

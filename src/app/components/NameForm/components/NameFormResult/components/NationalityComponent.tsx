import Image from "next/image";
import SVGSpinner from "/public/svg-spinner.svg";

interface NationalityComponentProps {
	nationality: { country_id: string; probability: number }[];
	nationalityFetching: boolean;
}

const NationalityComponent = ({ nationality, nationalityFetching }: NationalityComponentProps) => (
	<div>
		<h3>Nationality</h3>
		<ul>
			{nationalityFetching ? (
				<Image src={SVGSpinner} alt='Spinner Icon' height={24} width={24} />
			) : (
				nationality.map((country, index) => (
					<li key={`${country.country_id}_${index}`}>
						<Image
							alt='United States'
							src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.country_id}.svg`}
							width={24}
							height={24}
						/>
						<p>{(country.probability * 100).toFixed(2)}%</p>
					</li>
				))
			)}
		</ul>
	</div>
);

export default NationalityComponent;

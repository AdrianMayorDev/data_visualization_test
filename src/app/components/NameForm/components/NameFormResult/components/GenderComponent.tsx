import Image from "next/image";
import SVGSpinner from "/public/svg-spinner.svg";

interface GenderComponentProps {
	gender: string;
	genderFetching: boolean;
}

const GenderComponent = ({ gender, genderFetching }: GenderComponentProps) => (
	<li>
		<h3>Gender</h3>
		{genderFetching ? <Image src={SVGSpinner} alt='Spinner Icon' height={24} width={24} /> : <p>{gender}</p>}
	</li>
);

export default GenderComponent;

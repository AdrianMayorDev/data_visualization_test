import Image from "next/image";
import SVGSpinner from "/public/svg-spinner.svg";

interface ProbabilityComponentProps {
	probability: number;
	genderFetching: boolean;
}

const ProbabilityComponent = ({ probability, genderFetching }: ProbabilityComponentProps) => (
	<li>
		<h3>Probability</h3>
		{genderFetching ? <Image src={SVGSpinner} alt='Spinner Icon' height={24} width={24} /> : <p>{(probability * 100).toFixed(0)}%</p>}
	</li>
);

export default ProbabilityComponent;

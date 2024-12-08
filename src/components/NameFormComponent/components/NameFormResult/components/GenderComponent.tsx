import Image from "next/image";
import femaleIcon from "/public/female-icon.svg";
import maleIcon from "/public/male-icon.svg";

interface GenderComponentProps {
	gender: string;
	genderFetching: boolean;
	probability: number;
}

const GenderComponent = ({ gender, probability }: GenderComponentProps) => {
	const genderIcon = gender === "male" ? maleIcon : femaleIcon;
	const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
	const capitalizedGender = capitalizeFirstLetter(gender);
	return (
		<li style={{ display: "flex", gap: "4px", alignItems: "center" }}>
			<span>Gender: </span>

			<b>
				{(probability * 100).toFixed(0)}% {capitalizedGender}
			</b>
			<Image src={genderIcon} alt='Gender Icon' width={19} height={19} />
		</li>
	);
};

export default GenderComponent;

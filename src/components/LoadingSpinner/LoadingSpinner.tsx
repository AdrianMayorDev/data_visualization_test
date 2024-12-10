import Image from "next/image";
import styles from "./LoadingSpinner.module.scss";
import SVGSpinner from "/public/svg-spinner.svg";

const { loadingSpinner } = styles;

const LoadingSpinner = () => {
	return <Image className={loadingSpinner} src={SVGSpinner} alt='Spinner Icon' height={40} width={40} />;
};

export { LoadingSpinner };

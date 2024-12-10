import Image from "next/image";

interface IDetailDataProps {
	imageSrc: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
	imageClassName?: string;
	detailText: string;
	detailTextBold: string;
}

const DetailData = ({ imageSrc, imageAlt, imageWidth, imageHeight, imageClassName = "", detailText, detailTextBold }: IDetailDataProps) => {
	return (
		<>
			<Image className={imageClassName} alt={imageAlt} src={imageSrc} width={imageWidth} height={imageHeight} />
			<div>
				<p>{detailText}</p>
				<b>{detailTextBold}</b>
			</div>
		</>
	);
};
export { DetailData };

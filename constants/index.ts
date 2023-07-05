import bus from "../assets/imgs/bus.png";
import mrt from "../assets/imgs/train.jpg";
import qr from "../assets/imgs/qrcode.png";

interface dataProps {
	id: number;
	name: string;
	backgroundColor: string;
	imagesrc: any;
	handler: () => void;
}

interface scheduleProps {
	id: number;
	departuretime: string;
	arrivaltime: string;
	name: string;
	price: string;
	handler: () => void;
}

const primary = "#3A9EC2";

export { bus, mrt, qr, primary, dataProps, scheduleProps };

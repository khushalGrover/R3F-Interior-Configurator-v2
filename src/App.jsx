import Button from "./components/Button";
import { EnviroCanvas } from "./components/canvas/EnviroCanvas";
import { useCustomization } from "./constants/Customization";
import "../src/App.css";
import React, { useState, useEffect } from "react";
function App() {
	const {
		loc,
		setLoc,
		objectProduct,
		activeItem,
		activeObjectProductId,
		focusObjProdIdx,
		focusObjProd,
	} = useCustomization();
	const [isClosed, setIsClosed] = useState(true);

	const handlePrevBtn = () => {
		if (loc === 1) {
			return;
		}
		setLoc((prevLoc) => prevLoc - 1);
	};
	const handleNextBtn = () => {
		if (loc === 9) {
			return;
		}
		setLoc((prevLoc) => prevLoc + 1);
	};

	const handleToggleClick = () => {
		setIsClosed(!isClosed);
	};

	function StarIcon(props) {
		return (
			<svg
				{...props}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
			</svg>
		);
	}

	function removeAfterSecondUnderscore(inputString) {
		let parts = inputString.split("_"); // Split the string by underscore
		if (parts.length > 2) {
			return parts.slice(0, 2).join("_"); // Join the first two parts with an underscore
		}
		return inputString; // Return the original string if there are less than 2 underscores
	}

	function removeBeforeFirstUnderscore(inputString) {
		let parts = inputString.split("_"); // Split the string by underscore
		if (parts.length > 1) {
			return parts.slice(1).join("_"); // Join the first two parts with an underscore
		}
		return inputString; // Return the original string if there are less than 2 underscores
	}

	function Handle2ButtonClicked(name, id) {
		const before_name = removeAfterSecondUnderscore(name);



		console.log("Button Clicked: ", id);
		console.log("name ", name);
		console.log("foucus index: ", focusObjProdIdx);
		window.open(
			`https://visual-and-builds.netlify.app/product/${before_name}?id=${id}`,
			"_blank"
		);
		
	}

	function Handle3ButtonClicked() {}

	const Overlay = () => {
		if (loc === 1) {
			return (
				<div className="configurator">
					<div className="configurator__section">
						<div className="configurator__section__title">
							<h1>{loc}. Welcome</h1>
						</div>
						<div className="configurator__section__values">
							<div className="item__label item--intro">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Tempora rerum natus facilis
								necessitatibus? Sed, earum.
							</div>
						</div>
						<div
							className={"item item--active"}
							onClick={() => setLoc(2)}
						>
							<div className="item__label outline px-2">
								Lets Start
							</div>
						</div>
					</div>
				</div>
			);
		}
	};

	return (
		<>
			<div className="flex flex-col md:flex-row h-dvh w-full items-center  justify-center relative bg-[#191920]">
				<div
					className={`${
						isClosed
							? "w-full h-full"
							: "w-full h-1/2 flex-grow md:w-1/2 md:h-full"
					} relative`}
				>
					<EnviroCanvas />
					<Overlay className="configurator" />
					<div className="absolute md:right-0 md:bottom-9 right-9 bottom-0 z-50">
						<Button
							size="lg"
							variant="other"
							onClick={handleToggleClick}
						>
							{isClosed ? "Show Details" : "Hide Details"}
						</Button>
					</div>
				</div>

				
				{isClosed ? null : (
					<section className="text-gray-100 sm:w-50 md:w-96 flex flex-col content-center gap-4 p-4">
						{objectProduct.docs.map((item, index) => (
							<div
								className={`${
									focusObjProdIdx === index
										? "border-2 border-primary-foreground"
										: ""
								} bg-[#202025] rounded-lg shadow-lg content-center flex p-3`}
							>
								<div className=" content-center">
									<a className="" href="#">
										<img
											src={
												objectProduct?.docs[0]
													?.product_id?.url
											}
											alt="Product Image"
											width="20"
											height="20"
											className="w-full h-20 object-cover group-hover:opacity-80 transition-opacity"
											style={{
												aspectRatio: " 100/ 100",
												objectFit: "fill",
											}} // Corrected this line
										/>
									</a>
								</div>

								<div className="p-4 grow relative">
									<h3 className="text-lg font-semibold text-primary-foreground group-hover:text-primary transition-colors">
										
										{
											objectProduct?.docs[index]
												?.product_id?.name
										}
									</h3>

									<div className="flex items-center justify-start gap-2">
										<span className="text-lg font-semibold text-green-400">
											{`$${
												objectProduct?.docs[index]
													?.product_id?.price -
												objectProduct?.docs[index]
													?.product_id?.discount
											}`}
										</span>
										<span className="text-sm font-semibold text-primary-foreground line-through">
											{"$" +
												objectProduct?.docs[index]
													?.product_id?.price}
										</span>
										<span className="text-sm font-semibold text-primary-foreground bg-gray-700 px-3 rounded-md">
											{"$" +
												objectProduct?.docs[index]
													?.product_id?.discount +
												" off"}
										</span>
									</div>
									<div className="text-sm text-muted-foreground">
										{"By " +
											objectProduct?.docs[index]
												?.product_id?.vendor_name}
									</div>
									<div className="absolute right-0">
										{focusObjProdIdx === index ? "✅" : ""}
									</div>

									
									<button
										className="bg-green-600 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mt-4"
										onClick={() => {
											Handle2ButtonClicked(
												objectProduct?.docs[index]
													?.type,
												objectProduct?.docs[index]
													?.product_id?._id
											);
										}}
									>
										Buy Now
									</button>
								</div>
							</div>
						))}
					</section>
				)}
			</div>
		</>
	);
}

export default App;

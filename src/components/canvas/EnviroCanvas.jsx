import {
	CameraControls,
	Environment,
	AccumulativeShadows,
	RandomizedLight,
	Loader,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";

// import { MainBuilding } from "./BuilingsJsx/MainBuilding";
import { Drawing2 } from "./BuilingsJsx/Drawing2";
import { MainBuilding } from "./BuilingsJsx/MainBuilding";


import { UIManager } from "./canvasUI/UIManager";

import React, { useEffect, useState, useRef, Suspense, lazy } from "react";
import { useCustomization } from "../../constants/Customization";

export const EnviroCanvas = () => {
	const { loc } = useCustomization();
	const cameraControlsRef = useRef(null);

	const handleView = (position, target, enableTransition) => {
		cameraControlsRef.current?.setLookAt(
			position.x,
			position.y,
			position.z,
			target.x,
			target.y,
			target.z,
			enableTransition
		);
		// console.log("Camera Position", position);
	};

	useEffect(() => {
		// console.log("Location: " + loc);
		const views = [
			{
				// Roof Top 
				position: { x: 15, y: 13, z: 15 },
				target: { x: -5, y: 8, z: 0 },
			},
			{
				// dinning room
				position: { x:-2, y: 4, z: 6 },
				target: { x: -7, y: 3, z: 7 },
			},
			{
				position: { x: 18, y: 3, z: -16 },
				target: { x: 15, y: 2, z: -18.4 },
			},
			{
				position: { x: 18, y: 3, z: -18 },
				target: { x: 17, y: 3, z: -21 },
			},
			{
				position: { x: 19, y: 3, z: -15 },
				target: { x: 20, y: 3, z: -20 },
			},
			{
				// kitchen -7, 4, -2
				position: { x: -7, y: 4, z: 5 },
				target: { x: -7, y: 4, z: -2 },
			},
			{
				// Washroom 
				position: { x: 3, y: 4, z: -0.9 },
				target: { x: 4, y: 3.5, z: -3 },
			},
			{
				position: { x: 25, y: 6, z: -15.2 },
				target: { x: 22, y: 6, z: -15.5 },
			},
			{
				// bedroom 0, 4, -2
				position: { x: 0, y: 4, z: 2 },
				target: { x: 0, y: 4, z: -2 },
			},
		];
		const view = views[loc - 1];
		if (view) {
			handleView(view.position, view.target, true);
		}
	}, [loc]);

	return (
		<>
			<Canvas shadows camera={{ fov: 50, position: [-3, -0.5, 5] }}>
				<Suspense fallback={null}>
					<CameraControls
						ref={cameraControlsRef}
						makeDefault
						infinityDolly={true}
						minDistance={1}
						maxDistance={3}
						dollyToCursor={true}
					/>

					<UIManager />
					<MainBuilding />
					<Drawing2 />


					<Environment
						files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr"
						background
						blur={0.8}
					/>
				</Suspense>
			</Canvas>
			<Loader />
		</>
	);
};

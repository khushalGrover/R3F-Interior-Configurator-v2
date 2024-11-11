import {
	CameraControls,
	Environment,
	AccumulativeShadows,
	RandomizedLight,
	Loader,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";

// import { MainBuilding } from "./BuilingsJsx/MainBuilding";

import { MainBuilding } from "./BuilingsJsx/MainBuilding";
import { Dinning } from "./BuilingsJsx/Dinning";
import { D_common } from "./BuilingsJsx/D_common";
import { Drawing } from "./BuilingsJsx/Drawing";
import { Kitchen } from "./BuilingsJsx/Kitchen";
import { K_common } from "./BuilingsJsx/K_common.jsx";
import { H_stairs } from "./BuilingsJsx/H_stairs.jsx";

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
				position: { x: 32, y: 5, z: 0 },
				target: { x: 27, y: 2, z: -10 },
			},
			{
				position: { x: 14, y: 3.2, z: -18 },
				target: { x: 17, y: 1.5, z: -15.4 },
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
				position: { x: 19, y: 3.5, z: -21 },
				target: { x: 20, y: 3, z: -19 },
			},
			{
				position: { x: 31.5, y: 4, z: -16 },
				target: { x: 28.9, y: 2.5, z: -15.5 },
			},
			{
				position: { x: 25, y: 6, z: -15.2 },
				target: { x: 22, y: 6, z: -15.5 },
			},
			{
				position: { x: 18, y: 6, z: -10 },
				target: { x: 16.5, y: 6, z: -11 },
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
					<Drawing />
					<D_common />
					<Dinning />
					<Kitchen />
					<K_common />
					<H_stairs />

					{/*
					<Building />
					<BedRoom />
					<Drawing />
					<Kitchen_1 />
					<Kitchen_2 />
					<Hall />
					<Stairs />
					<StudyArea />
					<SwimmingPool />
					<MasterBedRoom /> 
					*/}

					{/* 
					<AccumulativeShadows
						resolution={1024}
						frames={100}
						color={"#8fa2be"}
						alphaTest={0.68}
						colorBlend={1.5}
						opacity={1.65}
						scale={8}
					>
						<RandomizedLight
							radius={2.6}
							ambient={0.3}
							position={[10, 5, -15]}
							bias={0.001}
						/>
					</AccumulativeShadows>  
					*/}
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

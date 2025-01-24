import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useCustomization } from "../../../constants/Customization";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Kitchen2(props) {
	const { codeOBJ, loc, setLoc } = useCustomization();

	const kt2_tap_a = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/kt2_tap/kt2_tap_a.glb"
	);
	const kt2_tap_b = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/kt2_tap/kt2_tap_b.glb"
	);
	const kt2_tap_c = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/kt2_tap/kt2_tap_c.glb"
	);
	const kt2_tap_d = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/kt2_tap/kt2_tap_d.glb"
	);
	const kt2_tap_e = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/kt2_tap/kt2_tap_e.glb"
	);
	const kt2_tap_f = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/kt2_tap/kt2_tap_f.glb"
	);
	const kt2_tap_g = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/kt2_tap/kt2_tap_g.glb"
	);
	const kt2_tap_h = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/kt2_tap/kt2_tap_h.glb"
	);
	

	return (
		<>
			<primitive object={kt2_tap_a.scene } visible={codeOBJ['ktTaps'] === 0}/>
			<primitive object={kt2_tap_b.scene } visible={codeOBJ['ktTaps'] === 1}/>
			<primitive object={kt2_tap_c.scene } visible={codeOBJ['ktTaps'] === 2}/>
			<primitive object={kt2_tap_d.scene } visible={codeOBJ['ktTaps'] === 3}/>
			<primitive object={kt2_tap_e.scene } visible={codeOBJ['ktTaps'] === 4}/>
			<primitive object={kt2_tap_f.scene } visible={codeOBJ['ktTaps'] === 5}/>
			<primitive object={kt2_tap_g.scene } visible={codeOBJ['ktTaps'] === 6}/>
			<primitive object={kt2_tap_h.scene } visible={codeOBJ['ktTaps'] === 7}/>
			
		</>
	);
}

import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useCustomization } from "../../../constants/Customization";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Drawing2(props) {
	const { codeOBJ, loc, setLoc } = useCustomization();
	
	const d2_sofa_a = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d2_sofa/D2_sofa_a.glb"
	);
	const d2_sofa_b = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d2_sofa/D2_sofa_b.glb"
	);
	const d2_sofa_c = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d2_sofa/D2_sofa_c.glb"
	);
	

	return (
		<>
			<primitive object={d2_sofa_a.scene} visible={codeOBJ['dSofa'] === 0}/>
			<primitive object={d2_sofa_b.scene} visible={codeOBJ['dSofa'] === 1}/>
			<primitive object={d2_sofa_c.scene} visible={codeOBJ['dSofa'] === 2}/>
		</>
	);

    
        
    
	{/* 
	
    const modelPaths = [
		"https://www.backend.visualizenbuild.com/static/d_table/d_table_a.glb",
		"https://www.backend.visualizenbuild.com/static/d_table/d_table_b.glb",
		"https://www.backend.visualizenbuild.com/static/d_sofa/d_sofa_a.glb",
		// "https://www.backend.visualizenbuild.com/static/d_sofa/d_sofa_b.glb",
		// "https://www.backend.visualizenbuild.com/static/d_rug/d_rug_a.glb",
		// "https://www.backend.visualizenbuild.com/static/d_rug/d_rug_b.glb",
		// "https://www.backend.visualizenbuild.com/static/d_self/d_self_a.glb",
		// "https://www.backend.visualizenbuild.com/static/d_self/d_self_b.glb",
        "./public/models/d_commom.glb"
	];
   
	const models = modelPaths.map((path) => useLoader(GLTFLoader, path));

	return (
		<>
			{models.map((model, index) => (
				<primitive key={index} object={model.scene} />
			))}
		</>
	);

		
	*/}
}

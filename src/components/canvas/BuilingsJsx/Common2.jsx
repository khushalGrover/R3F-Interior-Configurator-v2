import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useCustomization } from "../../../constants/Customization";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Common2(props) {
    const { codeOBJ, loc, setLoc } = useCustomization();
    
        
    const kt2_common_item = useLoader(
        GLTFLoader,
        "https://www.backend.visualizenbuild.com/static/kt2_common/kt2_common.glb"
    );
    const d2_common_item = useLoader(
        GLTFLoader,
        "https://www.backend.visualizenbuild.com/static/D2_common/D2_common.glb"
    );
    const mb2_common_item = useLoader(
        GLTFLoader,
        "https://www.backend.visualizenbuild.com/static/mb2_common/mb_common.glb"
    );
    const br2_common_item = useLoader(
        GLTFLoader,
        "https://www.backend.visualizenbuild.com/static/br2_common/br_common.glb"
    );

    return (
        <>
            <primitive object={kt2_common_item.scene} />
			<primitive object={d2_common_item.scene} />
			<primitive object={mb2_common_item.scene} />
			<primitive object={br2_common_item.scene} />

        </>
    );
}

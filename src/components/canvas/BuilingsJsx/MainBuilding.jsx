/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\public\models\Modern House_Interior_v2.5.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MainBuilding(props) {
  const { nodes, materials } = useGLTF('./models/Modern House_Interior_v2.6.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-2.967, 1.64, 1.714]}>
        <mesh geometry={nodes.MH1_OBJ_02.geometry} material={materials.window} />
        <mesh geometry={nodes.MH1_OBJ_02_1.geometry} material={materials['Modern_House_01.001']} />
      </group>
      <mesh geometry={nodes.MH2_Main_Exterior.geometry} material={materials.Wall} position={[-2.967, 1.64, 1.714]} />
      <group position={[-2.967, 1.64, 1.714]}>
        <mesh geometry={nodes.MH1_OBJ_09.geometry} material={materials.MAIN} />
        <mesh geometry={nodes.MH1_OBJ_09_1.geometry} material={materials.floor} />
      </group>
      <mesh geometry={nodes.MH2_Outer_wall.geometry} material={materials.MAIN} position={[-2.967, 1.64, 1.714]} />
      <group position={[-2.967, 1.64, 1.714]}>
        <mesh geometry={nodes.MH1_OBJ_01.geometry} material={materials.floor} />
        <mesh geometry={nodes.MH1_OBJ_01_1.geometry} material={materials.glass} />
        <mesh geometry={nodes.MH1_OBJ_01_2.geometry} material={materials.wood} />
      </group>
      <group position={[-2.967, 1.64, 1.714]}>
        <mesh geometry={nodes.MH1_OBJ_06.geometry} material={materials.window} />
        <mesh geometry={nodes.MH1_OBJ_06_1.geometry} material={materials['Modern_House_01.001']} />
        <mesh geometry={nodes.MH1_OBJ_06_2.geometry} material={materials.MAIN} />
      </group>
      <group position={[-2.967, 1.64, 1.714]}>
        <mesh geometry={nodes.MH1_OBJ_03.geometry} material={materials.floor} />
        <mesh geometry={nodes.MH1_OBJ_03_1.geometry} material={materials.celling} />
        <mesh geometry={nodes.MH1_OBJ_03_2.geometry} material={materials['Wood Floor Procedural']} />
      </group>
      <mesh geometry={nodes.MH2_Ground_Base.geometry} material={materials.ground} position={[-2.967, 1.64, 1.714]} />
      <mesh geometry={nodes.MH2_Intrior_Wall.geometry} material={materials.Wall} position={[-2.967, 1.64, 1.714]} />
      <mesh geometry={nodes.MH2_Outer_Railing.geometry} material={materials.wood} position={[-2.967, 1.64, 1.714]} />
      <mesh geometry={nodes.MH2_Roof_A.geometry} material={materials['Modern_House_01.001']} position={[-5.478, -1.212, 0.519]} />
      <mesh geometry={nodes.MH2_Roof_B.geometry} material={materials['Modern_House_01.001']} position={[-5.478, -1.212, 0.519]} />
      <mesh geometry={nodes.roof_base.geometry} material={materials.MAIN} position={[-5.478, -1.212, 0.519]} />
    </group>
  )
}

useGLTF.preload('./models/Modern House_Interior_v2.6.gltf')

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Char(props) {
  const { nodes, materials } = useGLTF("/model.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -0.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Voxel_mat249}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.Voxel_mat233}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials.Voxel_mat225}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_3.geometry}
          material={materials.Voxel_mat242}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_4.geometry}
          material={materials.Voxel_mat235}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_5.geometry}
          material={materials.Voxel_mat234}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_6.geometry}
          material={materials.Voxel_mat241}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_7.geometry}
          material={materials.Voxel_mat244}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_8.geometry}
          material={materials.Voxel_mat250}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_9.geometry}
          material={materials.Voxel_mat243}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_10.geometry}
          material={materials.Voxel_mat226}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_11.geometry}
          material={materials.Voxel_mat227}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_12.geometry}
          material={materials.Voxel_mat228}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model.glb");
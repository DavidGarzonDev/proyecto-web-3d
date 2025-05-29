import { useCallback, useEffect, useRef, } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const useAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/sounds/coughing.mp3');
  }, []);

  const playSquishSound = useCallback(() => {
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reinicia el audio para reproducir desde el inicio
        audioRef.current.play();
      }
    } catch (error) {
      console.error("Error reproduciendo sonido:", error);
    }
  }, []);

  return { playSquishSound };
};




const Person = (props) => {
  const { playSquishSound } = useAudio();
  
  useEffect(() => {


      const handleKeyDown = (event) => {
        if (event.key === 't' || event.key === 'T') {
          playSquishSound();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [playSquishSound]);


  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d-asthma/person-model.glb')
  const { actions } = useAnimations(animations, group)

  
  const handleClick = () => {
    playSquishSound();
  };


  useEffect(() => {
    actions.Cough.play()
    return () => {
      actions.Cough.stop()
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} scale={5}
      onClick={handleClick}
    >

      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            castShadow
            receiveShadow
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  )
}

export default Person
useGLTF.preload('/models-3d-asthma/person-model.glb')
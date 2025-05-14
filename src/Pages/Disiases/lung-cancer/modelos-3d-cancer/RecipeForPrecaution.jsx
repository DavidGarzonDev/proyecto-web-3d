const RecipeForPrecaution = ({ position = [0, 0, 0], rotation = [-Math.PI / 17, 1.7, 0.2] }) => {
    return (
        <mesh
            position={[0,-2.6,0]}
            rotation={rotation}
            castShadow
            receiveShadow
        >  
            {/* Shallow cylinder to resemble a plate */}
            <cylinderGeometry args={[5, 5, 0.3, 64]} />
            <meshStandardMaterial 
                color="gray"  /* off-white ceramic */
                metalness={0.10}
                roughness={10}
            />
           
        </mesh>
    )
}

export default RecipeForPrecaution
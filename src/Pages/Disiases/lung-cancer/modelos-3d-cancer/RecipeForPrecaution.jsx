const RecipeForPrecaution = ({ position = [0, 0, 0], rotation = [-Math.PI / 17, 1.7, 0.2] }) => {
    return (
        <mesh
            position={[0,-2.6,0]}
            rotation={rotation}
            castShadow
            receiveShadow
        >  
            
            <cylinderGeometry args={[5, 5, 0.3, 64]} />
            <meshStandardMaterial 
                color="gray"  
                metalness={0.10}
                roughness={10}
            />
           
        </mesh>
    )
}

export default RecipeForPrecaution
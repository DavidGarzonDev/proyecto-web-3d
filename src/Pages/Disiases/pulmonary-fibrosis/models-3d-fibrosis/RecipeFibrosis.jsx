/* eslint-disable react/no-unknown-property */
const RecipeFibrosis = () => {
    return (
        <mesh rotation-x={-Math.PI / 2} receiveShadow={true} position={[0, -2.2, 0]} >
            <circleGeometry args={[10, 64]} />
            <shadowMaterial opacity={0.5} />
        </mesh>
    )
}

export default RecipeFibrosis;
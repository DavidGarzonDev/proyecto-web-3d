import { useVideoTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";

const VideoPrecaution = ({ isVisible = true }) => {
    const texture = useVideoTexture("/videos/asthma/ejercicio.mp4", {
        muted: false,
        loop: true,
        autoPlay: false,
        crossOrigin: "anonymous",
        unsuspend: "canplay",
    });


    useEffect(() => {

        const videoElement = texture.source.data;

        if (videoElement) {
            if (isVisible) {
                videoElement.play().catch(error => {
                    console.error("Error al reproducir el video:", error);
                });
            } else {

                videoElement.pause();
                videoElement.currentTime = 0;
            }
        }
    }, [isVisible, texture]);

    if (!isVisible) {
        return null;
    }

    return (
        <mesh position={[0, 0, 0]}>
            <planeGeometry args={[5, 3]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
            <ambientLight intensity={0.5} />
        </mesh>);
}

export default VideoPrecaution;


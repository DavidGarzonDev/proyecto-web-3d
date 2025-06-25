import React, { useEffect, useMemo, useState } from "react";
import { KeyboardControls, Text } from "@react-three/drei";
import Person2 from "../models-3d-asthma/Person2";
import VideoPrecaution from "../videos/VideoPrecaution";

const TogglePersonVideoAsthma = () => {
    const [showVideo, setShowVideo] = useState(false);

    const toggleVideo = () => {
        setShowVideo((prev) => !prev);
    };

    const controls = useMemo(() => [
        { name: "play", keys: ["KeyP"] },
    ], []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === "KeyP") {
                toggleVideo();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            {!showVideo && <Person2 position={[0, -2, 0]} />}
            <VideoPrecaution isVisible={showVideo} />

        </>
    );
};

export default TogglePersonVideoAsthma;

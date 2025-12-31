"use client";

import { useEffect, useRef } from "react";

export function useAudioLevel() {
    const level = useRef(0);

    useEffect(() => {
        let analyser: AnalyserNode;
        let dataArray: Uint8Array<ArrayBuffer>;

        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            const ctx = new AudioContext();
            const source = ctx.createMediaStreamSource(stream);

            analyser = ctx.createAnalyser();
            analyser.fftSize = 256;

            source.connect(analyser);
            dataArray = new Uint8Array(analyser.frequencyBinCount);

            const tick = () => {
                analyser.getByteFrequencyData(dataArray);
                let sum = 0;
                for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
                level.current = sum / dataArray.length / 255;
                requestAnimationFrame(tick);
            };

            tick();
        });
    }, []);

    return level;
}

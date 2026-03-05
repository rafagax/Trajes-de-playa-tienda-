/**
 * @file components\common\AudioController.jsx
 * @description Controlador de música de fondo para la tienda L'Borgina.
 * Gestiona el autoplay y el silencio al interactuar con enlaces externos de WhatsApp o redes sociales.
 */

import React, { useRef, useState, useEffect } from 'react';
import musicaFondo from '../../musica/summer.mp3';

/**
 * AudioController component.
 */
const AudioController = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleSilence = () => audioRef.current?.pause();

        // Escucha el evento global para silenciar el audio
        window.addEventListener('silence-audio', handleSilence);

        // Función para manejar el inicio del audio tras interacción del usuario (Superar restricciones de navegadores)
        const handleInteraction = () => {
            audioRef.current?.play()
                .then(() => removeListeners())
                .catch(e => console.log("Autoplay blocked, waiting for more interaction"));
        };

        const addListeners = () => {
            ['click', 'keydown', 'scroll', 'touchstart', 'touchend'].forEach(e =>
                window.addEventListener(e, handleInteraction)
            );
        };

        const removeListeners = () => {
            ['click', 'keydown', 'scroll', 'touchstart', 'touchend'].forEach(e =>
                window.removeEventListener(e, handleInteraction)
            );
        };

        if (audioRef.current) audioRef.current.volume = 0.5;

        // Intento de autoplay inicial
        audioRef.current?.play().catch(() => addListeners());

        return () => {
            removeListeners();
            window.removeEventListener('silence-audio', handleSilence);
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
    };

    return (
        <div className="audio-control" style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999 }}>
            <audio
                ref={audioRef}
                loop
                src={musicaFondo}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
            <button
                onClick={togglePlay}
                style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    fontSize: '20px'
                }}
                aria-label={isPlaying ? "Silenciar música" : "Escuchar música"}
            >
                {isPlaying ? '🔊' : '🔇'}
            </button>
        </div>
    );
};

export default AudioController;

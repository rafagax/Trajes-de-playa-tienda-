/**
 * @file components\common\AudioController.jsx
 * @description Controlador de música de fondo para la tienda L'Borgina.
 * Gestiona el autoplay y el silencio al interactuar con enlaces externos de WhatsApp o redes sociales.
 * Aplica Lazy Loading para el archivo de audio.
 */

import React, { useRef, useState, useEffect } from 'react';

/**
 * AudioController component.
 */
const AudioController = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleSilence = () => audioRef.current?.pause();

        window.addEventListener('silence-audio', handleSilence);

        let isTryingToPlay = false;

        // Función para manejar el inicio del audio tras interacción del usuario
        const handleInteraction = async () => {
            if (isTryingToPlay) return;
            isTryingToPlay = true;

            try {
                // Carga interactiva (Lazy Load) del archivo de audio optimizado
                if (audioRef.current && (!audioRef.current.src || audioRef.current.src === window.location.href)) {
                    const module = await import('../../musica/summer-opt.mp3');
                    audioRef.current.src = module.default;
                    audioRef.current.load();
                }

                const playPromise = audioRef.current?.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        removeListeners();
                    }).catch(e => {
                        isTryingToPlay = false;
                    });
                }
            } catch (error) {
                console.error("Error loading audio:", error);
                isTryingToPlay = false;
            }
        };

        const addListeners = () => {
            ['click', 'keydown', 'touchstart'].forEach(e =>
                window.addEventListener(e, handleInteraction, { passive: true })
            );
        };

        const removeListeners = () => {
            ['click', 'keydown', 'touchstart'].forEach(e =>
                window.removeEventListener(e, handleInteraction)
            );
        };

        if (audioRef.current) audioRef.current.volume = 0.5;

        // Intentar agregar listeners de inmediato,
        // (ya que no podemos reproducir sin interacción primero y sin el archivo cargado)
        addListeners();

        return () => {
            removeListeners();
            window.removeEventListener('silence-audio', handleSilence);
        };
    }, []);

    const togglePlay = async () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            // Carga bajo demanda si le da directo al botón
            if (audioRef.current && (!audioRef.current.src || audioRef.current.src === window.location.href)) {
                const module = await import('../../musica/summer-opt.mp3');
                audioRef.current.src = module.default;
                audioRef.current.load();
            }
            audioRef.current?.play();
        }
    };

    return (
        <div className="audio-control" style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999 }}>
            <audio
                ref={audioRef}
                loop
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

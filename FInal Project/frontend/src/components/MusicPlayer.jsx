import React, { useRef, useState, useEffect } from "react";

  const songs = [
    { title: "Night Changes", src: "/music/Night Changes.mp3" },
    { title: "Party in the USA", src: "/music/Party in the USA.mp3" },
    { title: "What Makes You Beautiful", src: "/music/What Makes You Beautiful.mp3" },
    { title: "Yellow", src: "/music/Yellow.mp3" },
    { title: "Good don't die", src: "/music/Good don't die.mp3" },
    { title: "Self Control", src: "/music/Self Control.mp3" },
    { title: "Summertime In Paris", src: "/music/Summertime In Paris.mp3" },
    { title: "Yes I'm Changing", src: "/music/Yes I'm Changing.mp3" }
  ];
  

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const playNext = () => {
    setIndex((i) => (i + 1) % songs.length);
  };

  useEffect(() => {
    if (audioRef.current && visible) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [index, visible]);

  const playerBox = (
    <div
      style={{
        position: "fixed",
        top: "80px",
        right: "20px",
        width: "300px",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <h4 style={{ marginBottom: "1rem" }}>
         Now Playing: {songs[index].title}
      </h4>
      <audio
        ref={audioRef}
        src={songs[index].src}
        controls
        onEnded={playNext}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <button className="btn btn-primary w-50" onClick={playNext}>
          Next 
        </button>
        <button className="btn btn-secondary w-50" onClick={() => setVisible(false)}>
          Hide 
        </button>
      </div>
    </div>
  );

  const showButton = (
    <button
      onClick={() => setVisible(true)}
      className="btn btn-outline-primary"
      style={{
        position: "fixed",
        top: "80px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      Show Music Player
    </button>
  );

  return visible ? playerBox : showButton;
}

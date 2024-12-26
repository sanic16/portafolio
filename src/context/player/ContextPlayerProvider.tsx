"use client";

import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { contextPlayer } from "./contextPlayer";

const ContextPlayerProvider: FC<PropsWithChildren> = ({ children }) => {
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const [songs, setSongs] = useState<string[]>([
    "https://juliosanicstatic.codielectro.com/music/calling_for_you.mp3",
    "https://juliosanicstatic.codielectro.com/music/cote_dazur.mp3",
    "https://juliosanicstatic.codielectro.com/music/mysterious_place.mp3",
    "https://juliosanicstatic.codielectro.com/music/toucher.mp3",
    "https://juliosanicstatic.codielectro.com/music/forthcoming.mp3",
    "https://juliosanicstatic.codielectro.com/music/monuments_of_hope.mp3",
  ]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(
    typeof window !== "undefined" &&
      localStorage.getItem("currentSongIndex") !== null &&
      typeof JSON.parse(localStorage.getItem("currentSongIndex") as string) ===
        "number"
      ? JSON.parse(localStorage.getItem("currentSongIndex") as string)
      : 0
  );
  const [isPaused, setIsPaused] = useState(true);
  const [volume, setVolume] = useState<number>(
    typeof window !== "undefined" &&
      localStorage.getItem("volume") !== null &&
      typeof JSON.parse(localStorage.getItem("volume") as string) === "number"
      ? JSON.parse(localStorage.getItem("volume") as string)
      : 1
  );
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(
    typeof window !== "undefined" &&
      localStorage.getItem("isOptionsOpen") !== null &&
      typeof JSON.parse(localStorage.getItem("isOptionsOpen") as string) ===
        "boolean"
      ? JSON.parse(localStorage.getItem("isOptionsOpen") as string)
      : false
  );

  const openOptions = useCallback(() => {
    setIsOptionsOpen(true);
  }, []);

  const closeOptions = useCallback(() => {
    setIsOptionsOpen(false);
  }, []);

  const changeSongs = useCallback((songs: string[]) => {
    setSongs(songs);
  }, []);

  const playAudio = useCallback(() => {
    if (!audioElementRef.current) return;
    audioElementRef.current.play();
    setIsPlaying(true);
    setIsPaused(false);
  }, []);

  const pauseAudio = useCallback(() => {
    if (!audioElementRef.current) return;
    audioElementRef.current.pause();
    setIsPlaying(false);
    setIsPaused(true);
  }, []);

  const stopAudio = useCallback(() => {
    if (!audioElementRef.current) return;
    audioElementRef.current.pause();
    audioElementRef.current.currentTime = 0;
    setIsPlaying(false);
    setIsPaused(true);
  }, []);

  const changeVolume = useCallback((volume: number) => {
    if (!audioElementRef.current) return;
    setVolume(volume);
  }, []);

  const changeCurrentTime = useCallback((time: number) => {
    if (!audioElementRef.current) return;
    audioElementRef.current.currentTime = time;
  }, []);

  const nextSong = useCallback(() => {
    if (!audioElementRef.current) return;
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  }, [songs.length]);

  const previousSong = useCallback(() => {
    if (!audioElementRef.current) return;
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  }, [songs.length]);

  useEffect(() => {
    if (!audioElementRef.current) {
      audioElementRef.current = new Audio();
    }

    const handleSongEnd = () => {
      nextSong();
    };

    audioElementRef.current.addEventListener("ended", handleSongEnd);

    return () => {
      audioElementRef.current?.removeEventListener("ended", handleSongEnd);
    };
  }, [nextSong]);

  useEffect(() => {
    if (!audioElementRef.current) return;

    if (audioElementRef.current.src !== songs[currentSongIndex]) {
      audioElementRef.current.src = songs[currentSongIndex];
    }

    if (isPlaying) {
      audioElementRef.current.play();
    }
  }, [currentSongIndex, isPlaying, songs]);

  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (!audioElementRef.current) return;

    const audioElement = audioElementRef.current;
    const updateTime = () => setCurrentTime(audioElement.currentTime);
    const setAudioDuration = () => setDuration(audioElement.duration);

    audioElement.addEventListener("timeupdate", updateTime);
    audioElement.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audioElement.removeEventListener("timeupdate", updateTime);
      audioElement.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("isOptionsOpen", JSON.stringify(isOptionsOpen));
  }, [isOptionsOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("currentSongIndex", JSON.stringify(currentSongIndex));
  }, [currentSongIndex]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("volume", JSON.stringify(volume));
  }, [volume]);

  return (
    <contextPlayer.Provider
      value={{
        changeCurrentTime,
        changeSongs,
        changeVolume,
        currentSongIndex,
        currentTime,
        duration,
        isPaused,
        isPlaying,
        nextSong,
        pauseAudio,
        playAudio,
        previousSong,
        setCurrentSongIndex,
        songs,
        stopAudio,
        volume,
        isOptionsOpen,
        openOptions,
        closeOptions,
      }}
    >
      {children}
    </contextPlayer.Provider>
  );
};

export default ContextPlayerProvider;

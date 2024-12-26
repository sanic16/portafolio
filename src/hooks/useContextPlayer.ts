import { contextPlayer } from "@/context/player/contextPlayer";
import { useContext } from "react";

const useContextPlayer = () => {
  const context = useContext(contextPlayer);
  if (context === undefined) {
    throw new Error(
      "useContextPlayer must be used within a ContextPlayerProvider"
    );
  }

  return context;
};

export default useContextPlayer;

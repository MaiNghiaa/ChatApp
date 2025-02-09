import React, { createContext, useContext, useMemo } from "react";
import { useFireStore } from "../hook/useFireStore";
import { AuthContext } from "./AuthProvider";

export const RoomContext = createContext();

export default function RoomProvider({ children }) {
  const { user } = useContext(AuthContext);

  const roomsCondition = useMemo(() => {
    if (!user || !user.uid) return null;
    return {
      name: "members",
      operator: "array-contains",
      compareValue: user.uid,
    };
  }, [user]);

  const rooms = useFireStore("rooms", roomsCondition || {});

  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
}

export const useRooms = () => {
  return useContext(RoomContext);
};

/*
    {name:"room name",
    description:"mota",
    members:[uid1,uid2,...]}
    */

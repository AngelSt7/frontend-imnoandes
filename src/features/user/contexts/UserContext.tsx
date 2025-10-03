"use client";
import { createContext, useContext } from "react";
import { UserInfo } from "@/src/features/user/interfaces"

const UserContext = createContext<any>({});

export const UserProvider = ({ user, children }: { user: UserInfo | null, children: any }) => (
  <UserContext.Provider value={user}>{children}</UserContext.Provider>
);

export const useUser  = () => useContext<UserInfo>(UserContext);

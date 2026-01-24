import { create } from "zustand";
import { api } from "@/api";

type User = {
  id: string;
  username: string;
  avatarUrl: string;
};

type AuthState = {
  user: User | null;
  fetchUser: () => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  fetchUser: async () => {
    const user = await api.auth.me.get();
    set({ user });
  },

  logout: () => {
    set({ user: null });
  },
}));

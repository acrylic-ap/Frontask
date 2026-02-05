import { atom } from "jotai";

export const elementListState = atom<Map<string, string[]>>(
  new Map<string, string[]>(),
);

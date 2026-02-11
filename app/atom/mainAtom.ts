import { atom } from "jotai";

export type ListType = "temp" | "payload";

interface ListVariable {
  type: ListType;
}

export const elementListState = atom<Map<string, Map<string, ListVariable>>>(
  new Map<string, Map<string, ListVariable>>(),
);

import type { Writable } from 'svelte/store';

export type IChip = {
    tag: string;
    bgColor: string;
}

export type Stores = {
    chipsStore: Writable<IChip[]>,
    inputStore: Writable<string>
  };

export type StoreFunctions = {
    addChip: (newVal?: string) => void;
    deleteChip: (tag: string) => void;
}

export type StoreContext = Stores & StoreFunctions;
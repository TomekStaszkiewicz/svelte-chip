import type { Writable } from 'svelte/store';

export type IChip = {
    tag: string;
    bgColor: string;
}

export type Stores = {
    chipsStore: Writable<IChip[]>,
    inputStore: Writable<string>
  };
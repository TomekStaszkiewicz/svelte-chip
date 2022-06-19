import { get, writable } from 'svelte/store';

import type { IChip } from './types';

export const inputStore = writable('');
export const chipsStore = writable<IChip[]>([]);

export const addChip = () => {
  const newChipValue = get(inputStore);
  inputStore.set('');
  chipsStore.update((prevValue) => [...prevValue, createChip(newChipValue, prevValue.length)]);
};

const createChip = (tag: string, index: number): IChip => ({
  tag,
  bgColor: getColor(index)
});

const getColor = (index: number) => {
  const id = index % colors.length;

  return colors[id];
};

// find some colors
const colors = [
  'red',
  'blue',
  'yellow',
  'green'
];
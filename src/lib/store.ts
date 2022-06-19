import { get, writable } from 'svelte/store';

import type { IChip } from './types';

export const inputStore = writable('');
export const chipsStore = writable<IChip[]>([]);

export const addChip = () => {
  const newChipValue = get(inputStore);
  inputStore.set('');

  // do not allow to duplicate values
  if(get(chipsStore).some(({ tag }) => tag === newChipValue)) return;

  chipsStore.update((prevValue) => [...prevValue, createChip(newChipValue, prevValue.length)]);
};

export const deleteChip = (tag: string) => {
  chipsStore.update((prevValue) => prevValue.filter((chip) => chip.tag !== tag));
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
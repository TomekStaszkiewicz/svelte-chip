import { get, writable } from 'svelte/store';

import type { Color, IChip, StoreConfig } from './types';

export const getStore = (config: StoreConfig) => {
  const chipsStore = writable<IChip[]>([]);
  const inputStore = writable('');
  const colors = config.colors.length ? config.colors : defaultColors;

  const addChip = (newVal?: string) => {
    const shouldUseDirectValue = newVal && typeof newVal === 'string';
    const newChipValue = shouldUseDirectValue ? newVal : get(inputStore);
    inputStore.set('');
  
    // do not allow to duplicate values
    if(get(chipsStore).some(({ tag }) => tag === newChipValue)) return;
  
    chipsStore.update((prevValue) => [...prevValue, createChip(newChipValue, prevValue.length, colors)]);
  };
  
  const deleteChip = (tag: string) => {
    chipsStore.update((prevValue) => prevValue.filter((chip) => chip.tag !== tag));
  };
  return {
    chipsStore,
    inputStore,
    addChip,
    deleteChip
  };
};


const createChip = (tag: string, index: number, colors: Color[]): IChip => ({
  tag,
  bgColor: getColor(index, colors)
});

const getColor = (index: number, colors: Color[]) => {
  const id = index % colors.length;

  return colors[id];
};

// find some colors
const defaultColors = [
  'red',
  'blue',
  'yellow',
  'green'
];
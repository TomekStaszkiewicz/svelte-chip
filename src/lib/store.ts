import { get, writable } from 'svelte/store';

import type { IChip, Stores } from './types';

const storeMap = new Map<string, Stores>([]);

export const getStore = (id: string) => {
  if(!storeMap.has(id)) {
    storeMap.set(id, {
      chipsStore: writable<IChip[]>([]),
      inputStore: writable('')
    });
  }
  const { chipsStore, inputStore } = storeMap.get(id) as Stores; 
  const addChip = (newVal?: string) => {
    const shouldUseDirectValue = newVal && typeof newVal === 'string';
    const newChipValue = shouldUseDirectValue ? newVal : get(inputStore);
    inputStore.set('');
  
    // do not allow to duplicate values
    if(get(chipsStore).some(({ tag }) => tag === newChipValue)) return;
  
    chipsStore.update((prevValue) => [...prevValue, createChip(newChipValue, prevValue.length)]);
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
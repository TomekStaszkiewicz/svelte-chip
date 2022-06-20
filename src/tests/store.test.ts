import { get } from 'svelte/store';

import * as store from '../lib/store';

function addChip(tag: string) {
  store.inputStore.set(tag);
  store.addChip();
}

describe('store', () => {
  beforeEach(() => {
    // cleanup
    store.chipsStore.set([]);
    store.inputStore.set('');
  });
  it('is initialized with an empty list of chips', () => {
    expect(get(store.chipsStore)).toEqual([]);
    expect(get(store.inputStore)).toEqual('');  
  });

  it('correctly adds new chip', () => {
    const newChipTag = 'a new chip';
    addChip(newChipTag);
    
    expect(get(store.chipsStore)).toHaveLength(1);
    expect(get(store.chipsStore)[0].tag).toEqual(newChipTag);

    expect(get(store.inputStore)).toEqual('');  
  });

  it('does not add chip if one already exists', () => {
    const newChipTag = 'a new chip';
    addChip(newChipTag);
    addChip(newChipTag);
    addChip(newChipTag);

    expect(get(store.chipsStore)).toHaveLength(1);
    expect(get(store.chipsStore)[0].tag).toEqual(newChipTag);
  });

  it('allows to remove the chip', () => {
    const newChipTag = 'a new chip';
    addChip(newChipTag);
    store.deleteChip(newChipTag);

    expect(get(store.chipsStore)).toHaveLength(0);
  });
});
import { get } from 'svelte/store';

import { getStore } from '../lib/store';

const store = getStore('default');

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

  it('allows to add a new chip directly(no input store)', () => {
    store.addChip('some chip');
    store.addChip('another chip');

    expect(get(store.chipsStore)).toHaveLength(2);
    expect(get(store.chipsStore).some(({ tag }) => tag === 'some chip')).toBeTruthy();
    expect(get(store.chipsStore).some(({ tag }) => tag === 'another chip')).toBeTruthy();
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

  describe('multiple stores', () => {
    
    it('adding values', () => {
      const store1 = getStore('store1');
      const store2 = getStore('store2');

      store1.inputStore.set('new value');
      store1.addChip();

      store2.inputStore.set('another value');
      store2.addChip();

      expect(get(store1.chipsStore)).toHaveLength(1);
      expect(get(store1.chipsStore)[0].tag).toEqual('new value');

      expect(get(store2.chipsStore)).toHaveLength(1);
      expect(get(store2.chipsStore)[0].tag).toEqual('another value');
    });

    it('deleting values', () => {
      const store1 = getStore('store1');
      const store2 = getStore('store2');

      store1.inputStore.set('new value');
      store1.addChip();

      store2.inputStore.set('another value');
      store2.addChip();

      store1.deleteChip('new value');


      expect(get(store1.chipsStore)).toHaveLength(0);

      expect(get(store2.chipsStore)).toHaveLength(1);
      expect(get(store2.chipsStore)[0].tag).toEqual('another value');
    });
  });
});
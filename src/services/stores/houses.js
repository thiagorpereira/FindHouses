import create from 'zustand';

export const useHousesStore = create(set => ({
  housesList: [],
  setHouseList: housesList => set({ housesList }),
  /*setHouseList: data => set({ housesList: data }), */

  selectedHouse: null,
  setSelectedHouse: selectedHouse => set({ selectedHouse }),
}));

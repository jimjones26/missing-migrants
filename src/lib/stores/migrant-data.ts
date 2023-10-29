import { writable } from "svelte/store";

const _migrantsDataStore = () => {
  const { set, subscribe } = writable({
    migrants: []
  })

  return {
    subscribe,
    set: (data: any) => set(data),
  }
}

export const migrantsDataStore = _migrantsDataStore()
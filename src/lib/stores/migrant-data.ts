import { writable } from "svelte/store";

const _migrantsDataStore = () => {
  const { set, subscribe } = writable({
    migrants: []
  })

  return {
    subscribe,
    set: (data: MigrantsData) => set(data as any),
  }
}

export const migrantsDataStore = _migrantsDataStore()
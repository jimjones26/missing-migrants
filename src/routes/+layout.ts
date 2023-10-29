import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
  // load raw missing migrant data
  const migrantDataUrl: string = 'https://gist.githubusercontent.com/curran/a9656d711a8ad31d812b8f9963ac441c/raw/MissingMigrants-Global-2019-10-08T09-47-14-subset.csv';
  const migrantDataRes = await fetch(migrantDataUrl)

  // return raw data to layout data object
  return {
    rawMigrantData: await migrantDataRes.text()
  }
}
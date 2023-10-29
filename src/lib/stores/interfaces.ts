interface MigrantDataItem {
  "Reported Date"?: string;
  "Total Dead and Missing"?: number;
  "Location Coordinates"?: string;
}

interface MigrantsData {
  migrants: Array<MigrantDataItem>
}
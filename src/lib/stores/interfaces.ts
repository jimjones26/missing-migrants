interface MigrantDataItem {
  reported_date?: string;
  total_dead_missing?: number;
  location_coordinates?: string;
}

interface MigrantsData {
  migrants: Array<MigrantDataItem>
}
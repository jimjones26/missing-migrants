<script lang="ts">
	import type { LayoutData } from './$types';
	import { setContext } from 'svelte';
	import * as d3 from 'd3';

	import { migrantsDataStore } from '$lib/stores/migrant-data';

	export let data: LayoutData;

	$: migrantsDataStore.set({
		migrants: d3.csvParse(data.rawMigrantData, d3.autoType)
	});

	setContext('migrants', migrantsDataStore);
</script>

<slot />

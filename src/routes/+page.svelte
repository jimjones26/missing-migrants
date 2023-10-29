<script lang="ts">
	import { getContext } from 'svelte';

	const migrantsData: any = getContext('migrants');

	console.log('page.svelte: ', $migrantsData.migrants[0]);
</script>

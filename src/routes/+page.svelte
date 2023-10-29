<script lang="ts">
	import { getContext } from 'svelte';
	import AxisY from '$lib/components/AxisY.svelte';
	import AxisX from '$lib/components/AxisX.svelte';
	import Marks from '$lib/components/Marks.svelte';

	const migrantsData: any = getContext('migrants');

	// width and height for svg container
	const width: number = 960;
	const height: number = 500;

	// inner height, width and margins for svg children
	const margin = { top: 20, right: 30, bottom: 50, left: 70 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;
</script>

<!-- SVG Container -->
<svg {width} {height}>
	<g transform={`translate(${margin.left}, ${margin.top})`}>
		<AxisY />
		<AxisX />
		<Marks />
	</g>
</svg>

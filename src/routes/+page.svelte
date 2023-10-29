<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import * as d3 from 'd3';

	import AxisY from '$lib/components/AxisY.svelte';
	import AxisX from '$lib/components/AxisX.svelte';
	import Marks from '$lib/components/Marks.svelte';

	const migrantsData: Writable<MigrantsData> = getContext('migrants');

	// width and height for svg container
	const width: number = 960;
	const height: number = 500;

	// inner height, width and margins for svg children
	const margin = { top: 20, right: 30, bottom: 50, left: 70 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	// y axis value, label, and scale (total dead and missing)
	const yValue = (item: MigrantDataItem) => item['Total Dead and Missing'];
	const yAxisLabel = 'Total Dead and Missing';

	// x axis value, label, and scale (reported data)
	const xValue = (item: MigrantDataItem) => new Date(item['Reported Date'] as string);
	const xAxisLabel = 'Reported Date';
	const xScale = d3
		.scaleTime()
		.domain(<Iterable<number>>d3.extent($migrantsData.migrants, xValue))
		.range([0, innerWidth])
		.nice();

	// formatter for date data
	const formatTime = d3.timeFormat('%m/%d/%Y');

	// aggregate data into bins
	const [start, stop] = xScale.domain();
	const binnedData = d3
		.bin()
		.value(xValue as any)
		.domain(xScale.domain() as any)
		.thresholds(d3.timeMonths(start, stop) as any)($migrantsData.migrants as Array<number>)
		.map((array: any) => ({
			y: d3.sum(array, yValue),
			x0: array.x0,
			x1: array.x1
		}));

	const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(binnedData, (d) => d.y)])
		.range([innerHeight, 0])
		.nice();
</script>

<!-- SVG Container -->
<svg {width} {height}>
	<g transform={`translate(${margin.left}, ${margin.top})`}>
		<AxisY {yScale} {innerWidth} tickOffset={10} />
		<AxisX {xScale} {innerHeight} tickOffset={10} {formatTime} />
		<Marks data={binnedData} {xScale} {yScale} opacity={0.5} {innerHeight} />
		<text text-anchor="middle" transform={`translate(${-45}, ${innerHeight / 2}) rotate(-90)`}
			>{yAxisLabel}</text
		>
		<text x={innerWidth / 2} y={innerHeight + 45} text-anchor="middle">{xAxisLabel}</text>
	</g>
</svg>

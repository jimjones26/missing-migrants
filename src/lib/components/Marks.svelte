<script lang="ts">
	export let data: Array<MigrantDataItem>;
	export let yScale: any;
	export let yValue: any;
	export let xScale: any;
	export let xValue: any;
	export let circleRadius: number;
	export let opacity: number;
</script>

{#each data as item, i}
	<circle
		cx={xScale(xValue(item))}
		cy={yScale(yValue(item))}
		r={circleRadius}
		fill="#137B80"
		{opacity}
	>
		<title>hover</title>
	</circle>
{/each}

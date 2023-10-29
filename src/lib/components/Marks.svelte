<script lang="ts">
	export let data: any;
	export let yScale: any;
	export let xScale: any;
	export let innerHeight: number;
	export let opacity: number;
</script>

{#each data as item, i}
	<rect
		x={xScale(item.x0)}
		y={yScale(item.y)}
		width={xScale(item.x1) - xScale(item.x0)}
		height={innerHeight - yScale(item.y)}
		fill="#137B80"
		{opacity}
	>
		<title>hover</title>
	</rect>
{/each}

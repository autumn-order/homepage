<script lang="ts">
    import { mode } from "mode-watcher";
	import { onMount } from 'svelte';
	import type { StatsEntryDto } from '$lib/model';
    import { Chart, registerables } from 'chart.js';

    Chart.register(...registerables);

    let xAxis: string[] = [];
    let yAxis: number[] = [];
    let canvas: HTMLCanvasElement;

    $: graph_line_color = $mode === "light" ? "#92400e" : "#92400e";
    $: graph_grid_color = $mode === "light" ? "#d4d4d4" : "#171717";

    onMount(async () => {
        // const autumnOrderStats = await getCorporationStatsEntries(AUTUMN_ORDER_CORPORATION_ID);
        // const autumnHighsecStats = await getCorporationStatsEntries(AUTUMN_HIGHSEC_CORPORATION_ID);

        const combinedStats: StatsEntryDto[] = [];

        const statsMap = new Map<string, number>();

        combinedStats.forEach(entry => {
            if (statsMap.has(entry.date)) {
                statsMap.set(entry.date, statsMap.get(entry.date)! + entry.members);
            } else {
                statsMap.set(entry.date, entry.members);
            }
        });

        const stats = Array.from(statsMap, ([date, members]) => ({ date, members }))
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        yAxis = stats.map(entry => entry.members);
        xAxis = stats
            .map(entry => {
                const date = new Date(entry.date);
                return date.toISOString().slice(0, 10)});

        new Chart(canvas, {
            type: 'line',
            data: {
                labels: xAxis,
                datasets: [{
                    label: "Autumn's Total Member Count",
                    backgroundColor: graph_line_color,
                    borderColor: graph_line_color,
                    data: yAxis,
                }]
            },
            options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: { maxTicksLimit: 7 },
                    grid: {
                        display: false,

                    }
                },
                y: {
                    grid: {
                        color: graph_grid_color,

                    }
                }
            }
        }}
    )})
</script>

<canvas bind:this={canvas}></canvas>

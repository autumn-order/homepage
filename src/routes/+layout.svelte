<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { ModeWatcher } from "mode-watcher";

	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<Header/>
<ModeWatcher/>
{@render children()}
<Footer/>
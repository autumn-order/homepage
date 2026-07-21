<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
		<style>
			html { scroll-padding-top: 88px; }
		</style>
	</svelte:head>

<div class="flex flex-col min-h-screen">
    <Header/>
    {@render children()}
    <Footer/>
</div>

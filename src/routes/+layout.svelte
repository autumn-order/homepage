<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<div class="flex flex-col min-h-screen">
    <Header/>
    {@render children()}
    <Footer/>
</div>

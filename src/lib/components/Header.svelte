<script lang="ts">
	import Fa from "svelte-fa";
	import { APPLY_LINK, DISCORD_LINK } from "$lib/constant";
	import { faDiscord } from "@fortawesome/free-brands-svg-icons";
	import { onMount } from "svelte";
	import { afterNavigate } from "$app/navigation";
	import { faBars} from "@fortawesome/free-solid-svg-icons";

	let dropdownOpen = $state(false);
	let { variant = 'default' as 'default' | 'full' } = $props();

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
		if (dropdownOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }

    function handleScreenSizeChange(event: MediaQueryListEvent) {
		if (event.matches) {
			document.body.classList.remove('overflow-hidden');
			dropdownOpen = false
		}
	}

    onMount(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        mediaQuery.addEventListener('change', handleScreenSizeChange);

        if (mediaQuery.matches) {
            document.body.classList.remove('overflow-hidden');
        }
    });

    afterNavigate(() => {
        dropdownOpen = false;
		document.body.classList.remove('overflow-hidden');
    });
</script>

<header class="bg-base-100 border border-base-300 fixed w-screen border-b flex flex-col items-center z-20">
    <div class="{variant === 'full' ? '' : 'max-w-360'} px-6 py-3 flex justify-between items-center w-full">
        <ul>
            <li>
                <a href="/" class="flex items-center gap-2">
                    <div>
                        <enhanced:img src="/static/logo512black.png" class="w-16 h-16 block dark:hidden" alt="site logo"/>
                        <enhanced:img src="/static/logo512white.png" class="w-16 h-16 hidden dark:block" alt="site logo"/>
                    </div>
                    <h1 class="text-lg sm:text-2xl lg:text-4xl font-bold">
                        Autumn
                    </h1>
                </a>
            </li>
        </ul>
        <ul class="hidden lg:flex items-center gap-2">
            <li>
                <a href={DISCORD_LINK} target="_blank">
                    <button class="btn btn-ghost btn-square" aria-label="Discord">
                        <Fa icon={faDiscord} size="lg"/>
                    </button>
                </a>
            </li>
            <li>
                <a href={APPLY_LINK}>
                    <button class="btn btn-outline flex gap-2">
                        Log In
                    </button>
                </a>
            </li>
            <li>
                <a href={APPLY_LINK}>
                    <button class="btn btn-primary">
                        Begin Your Journey
                    </button>
                </a>
            </li>
        </ul>
        <div class="flex lg:hidden">
            <button class="btn btn-ghost btn-square" onclick={() => toggleDropdown()} aria-label="header dropdown">
                <Fa icon={faBars} size="lg"/>
            </button>
        </div>
    </div>
    {#if dropdownOpen}
        <div class="flex lg:hidden flex-col gap-2 w-full h-screen border-t px-6 py-4">
            <ul>
                <li>
                    <a class="border-color border-b text-hover flex gap-2 items-center w-full p-2" href={APPLY_LINK}>
                        Begin Your Journey
                    </a>
                </li>
                <li>
                    <a class="border-color border-b text-hover flex gap-2 items-center w-full p-2" href={APPLY_LINK}>
                        Log In
                    </a>
                </li>
            </ul>
            <ul class="flex justify-center gap-2">
                <li>
                    <a href={DISCORD_LINK} target="_blank">
                        <button class="btn btn-ghost btn-square" aria-label="Discord">
                            <Fa icon={faDiscord} size="lg"/>
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    {/if}
</header>

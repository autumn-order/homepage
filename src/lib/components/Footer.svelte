<script lang="ts">
    import Fa from "svelte-fa";
    import { APPLY_LINK, DISCORD_LINK } from "$lib/constant";
    import { faDiscord } from "@fortawesome/free-brands-svg-icons";
</script>

<footer class="bg-base-200 flex justify-center w-screen h-48">
    <div class="container flex flex-col justify-between h-full pt-8 pb-10">
        <div>
            <a href="/" class="flex items-center gap-4">
                <div>
                    <enhanced:img src="/static/logo512black.png" class="w-16 h-16 block dark:hidden" alt="site logo"/>
                    <enhanced:img src="/static/logo512white.png" class="w-16 h-16 hidden dark:block" alt="site logo"/>
                </div>
                <h1 class="text-lg sm:text-2xl lg:text-4xl font-bold">
                    The Order of Autumn
                </h1>
            </a>
        </div>
        <ul class="flex gap-2">
            <li>
                <a href={DISCORD_LINK} target="_blank" aria-label="Discord">
                    <button class="btn btn-square btn-ghost" aria-label="Discord">
                        <Fa icon={faDiscord} size="lg"/>
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
    </div>
</footer>

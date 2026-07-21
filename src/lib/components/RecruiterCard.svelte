<script lang="ts">
	import { faDiscord } from "@fortawesome/free-brands-svg-icons";
	import { type RecruiterEntry } from "$lib/model";

	import Fa from "svelte-fa";

    let { recruiter }: { recruiter: RecruiterEntry } = $props();
</script>

<div class="flex gap-4 bg-base-200 border-base-300 border rounded-sm shadow-md p-4 px-6">
    <img
        class="rounded-full w-24 h-24"
        src="https://images.evetech.net/characters/{recruiter.id}/portrait?size=128"
        alt={`${recruiter.name} avatar`}
    />
    <div class="flex flex-col justify-evenly">
        <p class="font-bold">{recruiter.title}</p>
        <p class="font-bold">{recruiter.name}</p>
        <div class="flex gap-1 items-center">
            <Fa icon={faDiscord}/>
            <p>{recruiter.discord}</p>
        </div>
    </div>
</div>

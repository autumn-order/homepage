<script lang="ts">
    import Fa from "svelte-fa";
    import { faUsers } from "@fortawesome/free-solid-svg-icons";

    import { APPLY_LINK } from "$lib/constant";
    import { type CorporationCardEntry } from "$lib/model";
	import { formatNumber } from "$lib/utils";

    let { corporation }: { corporation: CorporationCardEntry } = $props();

    let members = 0;
</script>

<div class="card-style h-100 w-72 flex flex-col items-center gap-2 p-6">
    <img src="https://images.evetech.net/corporations/{corporation.corporation_id}/logo?size=128" alt={`${corporation.corporation_name} Logo`}/>
    <h3 class="font-bold">{corporation.corporation_name}</h3>
    <span>{corporation.location}</span>
    <ul class="flex justify-evenly py-4 gap-4 w-full">
        <li class="flex flex-col items-center">
            <Fa icon={faUsers} size="lg"/>
            <p>Members</p>
            <p>{formatNumber(members)}</p>
        </li>
    </ul>
    <div>
        <a href={APPLY_LINK}>
            <button class="btn btn-primary">
                {corporation.apply_text}
            </button>
        </a>
    </div>
</div>

<script lang="ts">
    import type { FaqEntry } from "$lib/model";

    let { questions }: { questions: FaqEntry[] } = $props();
</script>

<div class="join join-vertical w-full">
    {#each questions as { question, answer }, i}
        <div class="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="faq-accordion" checked={i === 0} />
            <div class="collapse-title font-semibold">{question}</div>
            <div class="collapse-content text-sm">{answer}</div>
        </div>
    {/each}
</div>

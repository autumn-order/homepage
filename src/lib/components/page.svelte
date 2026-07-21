<script lang="ts">
    let { children, class: className = '' } = $props();
</script>

<div
    class="flex flex-col flex-1 min-h-0 overflow-hidden relative {className}"
>
    {@render children()}
</div>

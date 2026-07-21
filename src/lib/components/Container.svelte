<script lang="ts">
    let { children, class: className = '' } = $props();
</script>

<div
    class="container mx-auto px-4 flex flex-col {className}"
>
    {@render children()}
</div>

<script lang="ts">
    import { cn } from "$lib/utils";

    import { Separator } from "$lib/components/ui/separator"
    import {Button} from "$lib/components/ui/button";

    import LightSwitch from "$lib/components/LightSwitch.svelte";

    let className: string | undefined | null = undefined;
    export { className as class };
</script>

<header class={cn("p-8", className)}>
    <div class="p-4 pt-0 flex flex-row justify-between">
        <h1 class="text-3xl font-extrabold">SVG Recolor</h1>
        <div class="flex-row"><LightSwitch/></div>
    </div>
    <Separator/>
</header>
<script lang="ts">
    import {cn, replaceAllColors} from "$lib/utils";
    import ColorPicker, {ChromeVariant} from "svelte-awesome-color-picker";
    import {editedFiles, originalFiles} from "$lib/store";
    import {Button} from "$lib/components/ui/button";

    let className: string | undefined | null;
    export { className as class }

    let hex: string = "#ff0000";

    async function handleColorChange(color: string) {
        editedFiles.set(await replaceAllColors($originalFiles, color));
    }
</script>

<div class={cn("flex flex-col", className)}>
    <div class="flex justify-center">
        <ColorPicker bind:hex components={ChromeVariant} isDialog={false} sliderDirection="horizontal"/>
    </div>
    <Button on:click={() => handleColorChange(hex)}>Apply</Button>
</div>
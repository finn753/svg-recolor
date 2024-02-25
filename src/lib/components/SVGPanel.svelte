<script lang="ts">
    import UploadButton from "$lib/components/UploadButton.svelte";
    import {cn} from "$lib/utils";
    import {originalFiles} from "$lib/store";
    import SVGView from "$lib/components/SVGView.svelte";
    import DownloadButton from "$lib/components/DownloadButton.svelte";

    let className: string | undefined | null = undefined;
    export { className as class };
</script>

<div class={cn("p-4 space-y-2 flex flex-col max-h-full", className)}>
    <div class="overflow-y-auto flex-1">
        <div class="grid grid-cols-2 gap-8 px-8">
            {#each $originalFiles as file}
                <SVGView file={file}/>
            {/each}
        </div>
    </div>
    <UploadButton bind:files={$originalFiles}/>
    <DownloadButton bind:files={$originalFiles}/>
</div>
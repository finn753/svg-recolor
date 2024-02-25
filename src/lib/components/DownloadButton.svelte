<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import JSZip from "jszip";
    import pkg from 'file-saver';
    const {saveAs} = pkg;


    export let files: File[];

    let className: string | undefined | null = undefined;
    export { className as class };

    async function downloadFiles() {
        const zip = new JSZip();

        files.forEach((file, index) => {
            zip.file(file.name || `file-${index + 1}`, file);
        });

        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, "svg-recolored.zip");
    }
</script>

<Button class={className} disabled={!(files && files.length > 0)} on:click={downloadFiles}>Download</Button>

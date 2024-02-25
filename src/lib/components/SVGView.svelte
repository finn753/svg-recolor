<script lang="ts">
    import {AspectRatio} from "$lib/components/ui/aspect-ratio";

    export let file: File;
</script>

<div>
    <div class="p-4 rounded-lg border bg-white shadow-sm overflow-hidden">
        <AspectRatio ratio={1}>
            <object title={file.name} type="image/svg+xml" data={URL.createObjectURL(file)}></object>
        </AspectRatio>
    </div>
</div>
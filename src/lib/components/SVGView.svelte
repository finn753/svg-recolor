<script lang="ts">
    export let file: File;
</script>

<div class="p-8 bg-gray-500 bg-opacity-50 rounded-3xl">
    <object title={file.name} type="image/svg+xml" data={URL.createObjectURL(file)}></object>
    <p>{file.name}</p>
</div>
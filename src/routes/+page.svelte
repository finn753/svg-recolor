<script>
    import SVGPanel from "$lib/components/SVGPanel.svelte";
    import ToolPanel from "$lib/components/ToolPanel.svelte";
    import {Separator} from "$lib/components/ui/separator";
</script>

<div class="flex flex-row h-full max-h-full pb-8">
    <ToolPanel class="flex-[2]"/>
    <Separator orientation="vertical" />
    <SVGPanel class="flex-1"/>
</div>
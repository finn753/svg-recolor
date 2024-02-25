<script>
    import "../app.pcss";
    import Header from "$lib/components/Header.svelte";
    import {ModeWatcher} from "mode-watcher";
</script>

<ModeWatcher/>

<div class="h-dvh max-h-dvh">
    <div class="flex flex-col flex-grow-0 h-full max-h-full">
        <Header/>
        <div class="flex-1 max-h-full overflow-y-auto">
            <slot/>
        </div>
    </div>
</div>
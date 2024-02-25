<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";
    import * as Card from "$lib/components/ui/card";

    import {cn} from "$lib/utils";
    import ColorPicker, {ChromeVariant} from "svelte-awesome-color-picker";
    import MonoTool from "$lib/components/MonoTool.svelte";

    let className: string | undefined | null = undefined;
    export { className as class };
</script>

<div class={cn("flex justify-center", className)}>
    <Tabs.Root class="w-1/2">
        <Tabs.List class="grid w-full grid-cols-2">
            <Tabs.Trigger value="mono">Mono Color</Tabs.Trigger>
            <Tabs.Trigger value="individual">Individual Colors</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="mono">
            <Card.Root>
                <Card.Header>
                    <Card.Title>Mono Color</Card.Title>
                    <Card.Description>Make all the colors the same</Card.Description>
                </Card.Header>
                <Card.Content>
                    <MonoTool />
                </Card.Content>
            </Card.Root>
        </Tabs.Content>
        <Tabs.Content value="individual">
            <Card.Root>
                <Card.Header>
                    <Card.Title>Individual Colors</Card.Title>
                    <Card.Description>Change all the colors of your svg files individually</Card.Description>
                </Card.Header>
                <Card.Content>

                </Card.Content>
            </Card.Root>
        </Tabs.Content>
    </Tabs.Root>
</div>
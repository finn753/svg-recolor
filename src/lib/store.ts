import {writable} from "svelte/store";

export const originalFiles = writable<File[]>([]);
export const editedFiles = writable<File[]>([]);

originalFiles.subscribe(value => {
    editedFiles.set([...value]); // Create a new array to ensure reactivity
});
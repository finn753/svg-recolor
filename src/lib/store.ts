import {writable} from "svelte/store";

export const originalFiles = writable<File[]>([]);
export const editedFiles = writable<File[]>([]);
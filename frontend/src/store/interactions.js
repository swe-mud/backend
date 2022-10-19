import { writable } from 'svelte/store';

export const interactions = writable([ {description: "Halo", event: "lma"} ]);
export const isInteractionModeEnabled = writable(true);

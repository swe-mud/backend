import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);
export const player = writable({ name: '', studentId: '', game_over: false });

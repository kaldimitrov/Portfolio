import { signal } from '@preact/signals-core';

export const theme = signal('dark');

export function toggleTheme() {
	theme.value = theme.value == 'light' ? 'dark' : 'light';
}

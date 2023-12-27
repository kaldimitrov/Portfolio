import { signal } from '@preact/signals-core';

export const theme = signal('dark');
export const isDark = signal(true);

export function toggleTheme() {
	isDark.value = !isDark.value;
	theme.value = isDark.value ? 'dark' : 'light';
}

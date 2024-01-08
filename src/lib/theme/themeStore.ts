import { signal } from '@preact/signals-core';
import { Themes } from './enums/theme';

export const theme = signal(Themes.DARK);

export function toggleTheme() {
	theme.value = theme.value == Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
}

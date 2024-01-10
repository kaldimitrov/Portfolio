import { signal } from '@preact/signals-core';

export const sectionIndex = signal(0);

export function setSectionIndex(index: number) {
	sectionIndex.value = index;
}

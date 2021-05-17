export const cutTags = (text: string = '') => text.replace(/<\/?.+?>/gi, '');

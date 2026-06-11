export const getNotes = () => JSON.parse(localStorage.getItem('nk_notes') || '[]');
export const saveNotes = (notes) => localStorage.setItem('nk_notes', JSON.stringify(notes));

export const getNotebooks = () => JSON.parse(localStorage.getItem('nk_notebooks') || '[]');
export const saveNotebooks = (nb) => localStorage.setItem('nk_notebooks', JSON.stringify(nb));

export const getTags = () => JSON.parse(localStorage.getItem('nk_tags') || '[]');
export const saveTags = (tags) => localStorage.setItem('nk_tags', JSON.stringify(tags));

export const getCurrentUser = () => JSON.parse(localStorage.getItem('nk_user') || '{}');    
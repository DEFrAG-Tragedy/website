export const parseDocumentName = (encodedString: string) => decodeURIComponent(encodedString)
    .replace(/^\//, '') // Rimuove lo slash iniziale
    .replace(/\.xml$/, '');
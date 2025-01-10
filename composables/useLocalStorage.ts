const LAST_SEARCHED_KEY = 'queryDataArray';
const LAST_DOCUMENT_KEY = 'queryDocumentArray';


export const useSaveLastSearchedValue = (values: any) => {
    if (!values.query || values.query.trim() === '') {
        return;
    }

    const storedData = JSON.parse(localStorage.getItem(LAST_SEARCHED_KEY) || '[]');
    const queryString = new URLSearchParams(values).toString();

    const newData = { value: {...values}, url: `/?${queryString}` };

    const isDuplicate = storedData.some((item: any) =>
        JSON.stringify(item.value) === JSON.stringify(newData.value) && item.url === newData.url
    );

    if (!isDuplicate) {
        storedData.push(newData);
        localStorage.setItem(LAST_SEARCHED_KEY, JSON.stringify(storedData));
    }
}


export const useSaveLastUpdatesValue = (path: string) => {
    console.log('useSaveLastUpdatesValue', path);

    if (!path || path.trim() === '') {
        return;
    }
    const storedData = JSON.parse(localStorage.getItem(LAST_DOCUMENT_KEY) || '[]');
    const newData = { url: path };
    const isDuplicate = storedData.some((item: any) =>
        JSON.stringify(item.url) === JSON.stringify(newData.url) && item.url === newData.url
    );

    if (!isDuplicate) {
        storedData.push(newData);
        localStorage.setItem(LAST_DOCUMENT_KEY, JSON.stringify(storedData));
    }
}


export const useReadLastSearchedValue = (isQuery: boolean = true) => {
    const selectedKey = isQuery ? LAST_SEARCHED_KEY : LAST_DOCUMENT_KEY;
    return JSON.parse(localStorage.getItem(selectedKey) || '[]');
}


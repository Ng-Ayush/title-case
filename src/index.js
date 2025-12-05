export function titleCase(str= '') {
    if (typeof str !== 'string') return '';
    return str.replace(/\b\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

export default titleCase;
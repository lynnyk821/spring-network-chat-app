const getElementById = (elementId) => document.getElementById(elementId);
const getHash = (row) => {
    let hash = 0;
    for (let i = 0; i < row.length; i++)
        hash = 31 * hash + row.charCodeAt(i);
    return hash;
}
export { getHash, getElementById }
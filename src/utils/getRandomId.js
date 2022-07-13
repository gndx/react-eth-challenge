export function getRandomId() {
    return (Date.now() * Math.random()).toString(36);
}
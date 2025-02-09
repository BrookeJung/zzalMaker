async function fetchCatApi(text) {
    const OPEN_API_DOMAIN = "https://cataas.com";
    const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
    const responseJson = await response.json();
    return `${OPEN_API_DOMAIN}/cat/${responseJson._id}/says/${text}`;
}

export { fetchCatApi };
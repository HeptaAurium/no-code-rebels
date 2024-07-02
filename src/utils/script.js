
async function fetchData(apiEndpoint, dateInput) {
const response = await fetch(`${apiEndpoint}?start_date=${dateInput}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
});

if (!response.ok) {
    throw new Error('Failed to fetch data');
}

const data = await response.json();
return data;
};

export default fetchData;
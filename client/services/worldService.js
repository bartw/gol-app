const createBody = world => JSON.stringify({ world: world });

const createOptions = world => ({
    method: 'POST',
    body: createBody(world),
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }
});

const getNextWorld = currentWorld => {
    const options = createOptions(currentWorld);
    return fetch('/api/world', options).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    }).then(data => {
        return data.world;
    });
};

const worldService = {
    getNextWorld: getNextWorld
};

export default worldService;
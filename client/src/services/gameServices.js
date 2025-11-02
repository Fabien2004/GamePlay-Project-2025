const baseUrl = 'http://localhost:3000/jasonstore/games';

export default {
    async create(gameData){
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gameData)
        });
        const result = await response.json();
        return result;
    }
}
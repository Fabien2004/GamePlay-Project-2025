import request from "../utills/request";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    async getAll(){
        const result = await request.get(baseUrl);
        return Object.values(result);
    },
    getOne(gameId){
        return request.get(`${baseUrl}/${gameId}`);
    },
    create(gameData){
        return request.post(baseUrl, gameData);
    }
};
import data from "../data/Data"
export class HomeApi {
    static getGraphs() {
        // return fetch('url',
        //     {
        //         method: 'GET',
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         bodyType: 'json'
        //     })
        return data
    }
}
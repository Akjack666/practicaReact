import { API, HOST } from "./Util";

export default class SaleService {
    getSales({ start, limit, sort, includeTotal = true, tag, price, name }) {
        // Empezamos la query
        let query = "?";

        // Añadimos el start
        query += start ? `start=${start}&` : "";
        query += limit ? `limit=${5}&` : "";
        query += sort ? `sort=${'ASC'}&` : "";
        query += includeTotal ? `venta=${true}&` : "";
        query += price ? `precio=${price}&` : "";
        query += name ? `nombre=${name}&` : "";


        // 2. Faltan añadir a la query los demás campos

        // Eliminamos el último & de la query
        query = query.substr(0, query.length - 1);

        return fetch(`${HOST}/${API}/anuncios${query}`, {
            method: "GET"
        }).then(res => res.json());
    }


    getTags() {
        return new Promise((resolve, reject) => {
            let query = `?fields=tags`;
            fetch(`${HOST}/${API}/anuncios${query}`)
                .then(function (response) {

                    return response.json();
                })
                .then(function (myJson) {


                    console.log(myJson)
                    return resolve({

                        ok: true,
                        allowedTags: myJson.results[0].tags
                    })


                });

        })
    }
}
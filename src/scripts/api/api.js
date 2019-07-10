let API = {
    getFromApi: function (database, queryParams) {
        let url = `http://localhost:8088/${database}`
        if (queryParams) {
          url += `?${queryParams}`
        }
        return fetch(url)
        .then( data => data.json() )
      },
    deleteFromApi: function (database, id) {
        return fetch(`http://localhost:8088/${database}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    saveToApi: function (database, info) {
        return fetch(`http://localhost:8088/${database}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
    },
    updateApi: function (database, info) {
        return fetch(`http://localhost:8088/${database}/${info.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
    },
}

export { API }
//generic create fetch function
const fetchCreate = async (url, data) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (!res.ok) {
                throw Error("Could not submit the data.");
            }
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

//generic get fetch function
const fetchGet = async (url, data) => {
    return fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (!res.ok) {
                throw Error("Could not get the data.");
            }
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

//generic delete fetch function
const fetchDelete = (url) => {
    return fetch(url, {
        method: "DELETE",
    })
        .then((res) => {
            if (!res.ok) {
                throw Error("Could not delete the data.");
            }
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export { fetchCreate, fetchDelete, fetchGet };

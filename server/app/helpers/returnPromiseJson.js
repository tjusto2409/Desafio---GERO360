const returnPromiseJson = function(Promise, res) {
    Promise.then(
        result => res.status(200).json(result)
    )
    .catch(
        error => {
            console.error(error);
            res.status(500).json(error);
        }
    )
}

module.exports = returnPromiseJson;
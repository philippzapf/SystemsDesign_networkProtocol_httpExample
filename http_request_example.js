const httpRequest = {
    host: 'localhost',
    port: 8080,
    method: 'POST', //GET, PUT, DELETE, etc.
    path: '/payments',
    headers: {
        'content-type': 'application/json',
        'content-length': 51,
    },
    body: '{"data": "This is a piece of data in JSON Format."}'
}

const httpResponse = {
    statsuCode: 200,
    headers: {
        'access-control-allow-origin': '',
        'content-type': 'application/json',
    },
    body: '{}'
}
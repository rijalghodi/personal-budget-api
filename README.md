# Personal Budget

Simple Node/Express API to manage a portfolio budget using a budget envelope strategy. Users can create, read, update, and delete envelopes.

## Running the app

To run locally, run `npm install`, then `npm run start`

Once the app is running locally, you can access the API at `http://localhost:5000/`

## Testing with Swagger

Swagger documentation and testing available at `http://localhost:5000/api-docs`

To test with Swagger:

- Retrieve envelopes using `GET /api/v1/envelopes`
- Retrieve a single envelope using `GET /api/v1/envelopes/{id}`
- Create an envelope using `POST /api/v1/envelopes`
- Update an envelope using `PUT /api/v1/envelope/{id}`
- Delete an envelope using `DELETE /api/v1/envelope/{id}`
- Transfer money between envelopes using `POST /api/v1/envelope/{fromId}/transfer/{toId}`

## Tachnologies:

- [REST Architecture](https://auth0.com/blog/rest-architecture-part-1-building-api/)
- [Documenting API with Swagger](https://levelup.gitconnected.com/swagger-time-to-document-that-express-api-you-built-9b8faaeae563)
- [Exppress.js](https://expressjs.com/)

## Resources

- [REST Architecture](https://auth0.com/blog/rest-architecture-part-1-building-api/)
- [Documenting your API with Swagger](https://levelup.gitconnected.com/swagger-time-to-document-that-express-api-you-built-9b8faaeae563)
- [Setting up Postman](https://author.codecademy.com/content-items/a5ed0fe82af00dcae4bb69e07d6b5fa8)
- [Swagger Specification](https://swagger.io/docs/specification/basic-structure/)
- [Debugging Javascript code](https://author.codecademy.com/content-items/e8a7f4f36eae1c4ee642af3cea4bfb4a)

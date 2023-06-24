# API Spec

## Create Notes

Request:

- Method : POST
- Endpoint : `/api/notes`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```json
{
  "title": "string",
  "tags": "array of string",
  "body": "string"
}
```

Response body success:

```json
{
  "code": "number",
  "status": "string",
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "createdAt": "string",
    "updatedAt": "string",
    "tags": "array of string",
    "body": "string"
  }
}
```

Response body error:

```json
{
  "code": "number",
  "status": "string",
  "message": "string"
}
```

## Get Note

Request:

- Method : Get
- Endpoint : `/api/notes/{id}`
- Header :
  - Accept : application/json

Response:

```json
{
  "code": "number",
  "status": "string",
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "createdAt": "string",
    "updatedAt": "string",
    "tags": "array of string",
    "body": "string"
  }
}
```

Response error:

```json
{
  "code": "number",
  "status": "string",
  "message": "string"
}
```

## Update Note

Request:

- Method : PUT,
- Endpoint : `/api/notes/{id}`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```json
{
  "title": "string",
  "tags": "array of string",
  "body": "string"
}
```

Response body success:

```json
{
  "code": "number",
  "status": "string",
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "createdAt": "string",
    "updatedAt": "string",
    "tags": "array of string",
    "body": "string"
  }
}
```

Response body error:

```json
{
  "code": "number",
  "status": "string",
  "message": "string"
}
```

## Delete Note

Request:

- Method : DELETE
- Endpoint : `/api/notes/{id}`
- Header :
  - Accept : application/json

Response:

```json
{
  "code": "number",
  "status": "string",
  "message": "string"
}
```

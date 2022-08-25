# API Documentation

## [GET] api/specialities

Returns a list of available specialities.

Sample Request:
`api/specialities`

Sample response:

```json
{
  "data": [
    {
      "name": "Excavation"
    },
    {
      "name": "Electrical"
    },
    {
      "name": "Plumbing"
    },
    {
      "name": "Random"
    }
  ]
}
```

## [GET] api/companies

Returns a paginated list of companies.

Query Params:

- `q` Search by company name
- `page` select page.
- `specialities` Filter by specialities, e.g. spec1,spec2

Response:

- `page` Current page.
- `pages` Total number of pages.
- `items` list of companies.

Sample Request:
`api/companies?q=gig&page=1&specialities=electrical`

Sample response:

```json
{
  "data": {
    "page": 1,
    "pages": 4,
    "items": [
      {
        "id": 1,
        "name": "Gigabox",
        "city": "K’anak’erravan",
        "specialities": [
          "Excavation",
          "Electrical",
          "Plumbing"
        ]
      },
      {
        "id": 2,
        "name": "Gigaclub",
        "city": "Hacıqabul",
        "specialities": [
          "Electrical",
          "Plumbing",
          "Excavation"
        ]
      }
    ]
  }
}
```

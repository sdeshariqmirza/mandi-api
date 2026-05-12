# India Mandi Price API 🌾

Real-time agricultural commodity prices from Indian mandis.
Data sourced directly from Government of India (data.gov.in).

## Live API
🚀 [Try on RapidAPI](https://rapidapi.com/shariqmirza139/api/india-mandi-price-api)

## Endpoints

### Get All Prices
```http
GET /api/mandi/prices
```

### Filter by State
```http
GET /api/mandi/prices/state/Kerala
```

### Filter by Crop
```http
GET /api/mandi/prices/crop/Wheat
```

### Filter by District
```http
GET /api/mandi/prices/district/Alappuzha
```

## Sample Response
```json
{
  "state": "Kerala",
  "district": "Alappuzha",
  "market": "Cherthala APMC",
  "commodity": "Cabbage",
  "min_price": 4000,
  "max_price": 4300,
  "modal_price": 4200,
  "arrival_date": "11/05/2026"
}
```

## Tech Stack
- Node.js + Express
- Deployed on Railway
- Data from data.gov.in

## Pricing
Free plan available on RapidAPI — no credit card needed. 

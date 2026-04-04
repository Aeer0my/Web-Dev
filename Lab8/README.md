# Lab 8 & Lab 9 - Django REST API

## Setup

```bash
cd shop_back
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## API Endpoints
```angular2html
Method	URL	Description
GET	/api/products/	List all products
GET	/api/products/1/	Get product by ID
POST	/api/products/	Create product
PUT	/api/products/1/	Update product
DELETE	/api/products/1/	Delete product
GET	/api/categories/	List all categories
GET	/api/categories/1/	Get category by ID
GET	/api/categories/1/products/	Get products by category
POST	/api/categories/	Create category
PUT	/api/categories/1/	Update category
DELETE	/api/categories/1/	Delete category
```

## Filters
```angular2html
Filter	Example	Description
category	/api/products/?category=1	Filter by category ID
active	/api/products/?active=true	Show only active products
search	/api/products/?search=iphone	Search by name
combined	/api/products/?category=1&active=true&search=iphone	All filters together
```

## Postman Collection
```angular2html
File: shop_back/OnlineShopAPI.postman_collection.json

1. Open Postman

2. Click Import button

3. Select the JSON file

4. Click Send on any request
```

## Admin Panel
```angular2html
URL: http://127.0.0.1:8000/admin

Login with superuser credentials created during setup.
```

## Tech Stack
```angular2html
Django

Django REST Framework

SQLite3

Python 3.x
```
## Example Requests
`Create Category`
POST /api/categories/
```json
{
    "name": "Smartphones"
}
```
`Create Product`
POST /api/products/
```json
{
    "name": "iPhone 15 Pro",
    "price": 852990,
    "description": "Apple flagship smartphone",
    "count": 10,
    "is_active": true,
    "category": 1
}
```
`Update Product`
PUT /api/products/1/
```json
{
    "name": "iPhone 15 Pro Max",
    "price": 929990,
    "description": "Updated description",
    "count": 5,
    "is_active": true,
    "category": 1
}
```
## Author
Arslan, Web Development Course
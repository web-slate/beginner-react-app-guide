# Banking Fake REST API
Fake JSON API services for banking application

## Resources
```
https://my-json-server.typicode.com/shangan23/banking-api/users
https://my-json-server.typicode.com/shangan23/banking-api/accounts
https://my-json-server.typicode.com/shangan23/banking-api/transactions
```

### [Users](https://my-json-server.typicode.com/shangan23/banking-api/users)
```
GET    /users
GET    /users/1
POST   /users
PUT    /users/1
PATCH  /users/1
DELETE /users/1
```  
### [Accounts](https://my-json-server.typicode.com/shangan23/banking-api/accounts)

```
GET    /accounts
GET    /accounts/1
POST   /accounts
PUT    /accounts/1
PATCH  /accounts/1
DELETE /accounts/1
```

### [Transactions](https://my-json-server.typicode.com/shangan23/banking-api/transactions)

```
GET    /transactions
GET    /transactions/1
POST   /transactions
PUT    /transactions/1
PATCH  /transactions/1
DELETE /transactions/1
```


### Filter

Use `.` to access deep properties

```
GET /accounts?txn_currency=rupee&country=INDIA
GET /transactions?id=1&id=2
GET /users?user_name=john
```

### Paginate
Use `_page` and optionally `_limit` to paginate returned data.

```
GET /accounts?_page=7
GET /accounts?_page=7&_limit=20
```

_10 items are returned by default_

### Sort

Add `_sort` and `_order` (ascending order by default)

```
GET /accounts?_sort=account_name&_order=asc
```

For multiple fields, use the following format:

```
GET /accounts?_sort=account_name,country&_order=desc,asc
```

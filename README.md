# Type-Quy Project
### link deploy: https://typequy.firebaseapp.com/
## Created by Jetly - Fajrin - Fadhilah


## Routes

### Login
* Route : http://localhost:3000/users
* Method: POST
* Request Body: 
    ```
    {
      "id": type data integer,
      "username": type data string
    }
    ```
* Response: 
- code: 404
    ```
    {
      "err"{
        "err",
        "msg":"username undefined"
      }
    }
    ```
- code: 500
    ```
    {
      "err"{
            "err",
            "msg":"internal server error"
          }
    }
    ```

### Show all list room
* Route : http://localhost:3000/rooms
* Method: GET
* Response: 
- code: 200
    ```
    [
      {
        "id": type data integer
        "name": type data string,
        "status": type data string
      }
    ]
    ```
- code: 500
    ```
    {
      "err"{
            "err",
            "msg":"internal server error"
          }
    }
    ```

### Show one romm
* Route : http://localhost:3000/rooms/:id
* Method: GET
* Response: 
- code: 200
    ```
    {
      "id": type data integer
      "name": type data string,
      "status": type data string
    }
    ```
- code: 500
    ```
    {
      "err"{
            "err",
            "msg":"internal server error"
          }
    }
    ```

### Create ro0m
* Route : http://localhost:3000/rooms
* Method: POST
* Request Body :
    ```
    {
      "name": type data string
    }
    ```
* Response: 
- code: 200
    ```
    {
      "id": type data integer
      "name": type data string,
      "status": type data string
    }
    ```
- code: 500
    ```
    {
      "err"{
            "err",
            "msg":"internal server error"
          }
    }
    ```

    ```
    {
      "id": type data integer
      "name": type data string,
      "status": type data string
    }
    ```

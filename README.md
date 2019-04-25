# intellectDesign
An Assignment for intellect Design 

## Features

 - User Registration
 - Login
 - CRUD operations with trade
 - Filters with symbol, type, price, date range

 ## Requirements

 - Node.Js latest version
 - MongoDB running on port 27017


## Getting Started

Steps to install project 

```bash

# go to the folder from cmd and run the yarn command, this will install all the relevent dependencies

    yarn

```


```bash

#create a .env file and add these variables into that

    NODE_ENV=development
    PORT=4001
    MONGO_URI=mongodb://localhost:27017/intellect
    MONGO_URI_TESTS=mongodb://localhost:27017/intellect
    MONGO_ENABLED=true
    HOST=localhost
    IO_PORT=8123
    JWT_SECRET=bA2xcjpf8y5aSUFsNB2qN5yymUBSs6es3qHoFpGkec75RCeBb8cpKauGefw5qy4
    JWT_EXPIRATION_MINUTES=120
    USER_ID_LENGTH=8
```



```bash

    #Base path
    http://localhost:4001/api/v1/
 ```   

```bash

    #Register User
    POST http://localhost:4001/api/v1/auth/register

    #Inputs
    name, email, password

    #response
    {"status":true,"code":201,"message":"User registered suucessfully","appVersion":"v1.0.0","result":[{"isActive":false,"isDeleted":false,"isBlocked":false,"status":"PENDING","_id":"5cb580ab7b63317d9a72017d","name":"Ankit","email":"ankit.chavhan89@gmail.com","password":"$2a$10$euDCKZ6qtFxHggCj8kzrA.jWPmVB3SRjhUlC1JqPmx1y3b1rF5iUe","userID":"00000001","uuid":"8d129873-54c6-48f5-a873-cc7efcd795c2","createdAt":"2019-04-16T07:13:47.677Z","updatedAt":"2019-04-16T07:13:47.677Z","__v":0}]}

```

```bash

    #Login User
    POST http://localhost:4001/api/v1/auth/login

    #Inputs
    email, password

    #response
    {"status":true,"code":200,"message":"User logged in successfully","appVersion":"v1.0.0","result":{"email":"ankit.chavhan89@gmail.com","uuid":"8d129873-54c6-48f5-a873-cc7efcd795c2","name":"Ankit","accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTU0MDY1MDAsImlkIjoiNWNiNTgwYWI3YjYzMzE3ZDlhNzIwMTdkIiwidXVpZCI6IjhkMTI5ODczLTU0YzYtNDhmNS1hODczLWNjN2VmY2Q3OTVjMiIsImlhdCI6MTU1NTM5OTMwMH0.kjwyq-xsHoorza1qWTtoL_JR-CoSsAD8g-C_rGBvEgI"}}

    # In response you will get access token here, copy it and send it to headers with key name x-access-token for next API's
    Content-Type: application/x-www-form-urlencoded

    x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTU0Mjc2NDgsImlkIjoiNWNiNWNlOWIzZGM5ZTQ1ZmE1MTg4ZWZlIiwidXVpZCI6ImEyN2E0ODAwLTU3ZDgtNDY0My05NmYwLTYwMDllNDg1NGZlMSIsIm5hbWUiOiJBbmtpdEMiLCJpYXQiOjE1NTU0MjA0NDh9.YccqbzoCGQgtnS72sPTne4VOvh7MDQlQEndcgGj1EYU

```

```bash

    #Create a trade
    POST http://localhost:4001/api/v1/trade/trades

    #Headers

    Content-Type: application/x-www-form-urlencoded    
    x-access-token: your generated token

    #Inputs

    #Must be BUY or SELL
    type: BUY/SELL 

    #Any String
    symbol: ABC

    #Must range between 10-30
    shares: 10

    #Must accept upto 2 decimal places
    price: 10.55

    #response
    {"status":true,"code":201,"message":"success","appVersion":"v1.0.0","result":{"type":"BUY","shares":22,"price":"250","isDeleted":false,"_id":"5cb5dd7b27d9ec6b2d249710","symbol":"ABC","user":{"id":"5cb5ce9b3dc9e45fa5188efe","name":"AnkitC"},"uuid":"1b6ecbe6-f75b-47cc-b1e3-042941f46edf","createdAt":"2019-04-16T13:49:47.675Z","updatedAt":"2019-04-16T13:49:47.675Z","__v":0}}
    

```

```bash

    #get a list of trade
    GET http://localhost:4001/api/v1/trade/trades

    #Headers

    Content-Type: application/x-www-form-urlencoded    
    x-access-token: your generated token


    #response
    {"status":true,"code":201,"message":"success","appVersion":"v1.0.0","result":{"type":"BUY","shares":22,"price":"250","isDeleted":false,"_id":"5cb5dd7b27d9ec6b2d249710","symbol":"ABC","user":{"id":"5cb5ce9b3dc9e45fa5188efe","name":"AnkitC"},"uuid":"1b6ecbe6-f75b-47cc-b1e3-042941f46edf","createdAt":"2019-04-16T13:49:47.675Z","updatedAt":"2019-04-16T13:49:47.675Z","__v":0}}
    

```

```bash

    #Filters trade with symbol, type and date range
    GET http://localhost:4001/api/v1/trade/stocks/ABC/trades/BUY/2019-04-13/2019-04-19

    #Headers

    Content-Type: application/x-www-form-urlencoded    
    x-access-token: your generated token


    #response
    {"status":true,"code":200,"message":"success","appVersion":"v1.0.0","result":[{"user":{"id":"5cb5ce9b3dc9e45fa5188efe","name":"AnkitC"},"type":"BUY","shares":22,"price":"250","isDeleted":false,"_id":"5cb5dd7b27d9ec6b2d249710","symbol":"ABC","uuid":"1b6ecbe6-f75b-47cc-b1e3-042941f46edf","createdAt":"2019-04-16T13:49:47.675Z","updatedAt":"2019-04-16T13:49:47.675Z","__v":0},{"user":{"id":"5cb5ce9b3dc9e45fa5188efe","name":"AnkitC"},"type":"BUY","shares":22,"price":"250","isDeleted":false,"_id":"5cb5d719ba524a69357ecba5","symbol":"ABC","uuid":"d0f15db5-f732-4fdd-bde7-c38b14c699b4","createdAt":"2019-04-16T13:22:33.584Z","updatedAt":"2019-04-16T13:22:33.584Z","__v":0},{"user":{"id":"5cb5ce9b3dc9e45fa5188efe","name":"AnkitC"},"type":"BUY","shares":30,"price":"250","isDeleted":false,"_id":"5cb5d70dba524a69357ecba3","symbol":"ABC","uuid":"e16af637-a7a7-4ba6-a405-7ab88c828ae2","createdAt":"2019-04-16T13:22:21.356Z","updatedAt":"2019-04-16T13:22:21.356Z","__v":0},{"user":{"id":"5cb5ce9b3dc9e45fa5188efe","name":"AnkitC"},"type":"BUY","shares":12,"price":"25","isDeleted":false,"_id":"5cb5d705ba524a69357ecba2","symbol":"ABC","uuid":"747b95ca-d49d-4375-8308-0f1a687ee8d3","createdAt":"2019-04-16T13:22:13.038Z","updatedAt":"2019-04-16T13:22:13.038Z","__v":0},{"user":{"id":"5cb5ce9b3dc9e45fa5188efe","name":"AnkitC"},"type":"BUY","shares":11,"price":"22","isDeleted":false,"_id":"5cb5d6fcba524a69357ecba1","symbol":"ABC","uuid":"27613a31-4bdc-430d-8cb6-b327e32d5427","createdAt":"2019-04-16T13:22:04.320Z","updatedAt":"2019-04-16T13:22:04.320Z","__v":0},{"user":{"id":"5cb5ce9b3dc9e45fa5188efe","name":"AnkitC"},"type":"BUY","shares":13,"price":"55","isDeleted":false,"_id":"5cb5d6efba524a69357ecba0","symbol":"ABC","uuid":"dd76cd41-14f1-4fce-8d7c-5be85e35b2ca","createdAt":"2019-04-16T13:21:51.909Z","updatedAt":"2019-04-16T13:21:51.909Z","__v":0},{"user":{"id":"5cb57de76232257a7d3735a8","name":"Ankit_Chavhan"},"type":"BUY","shares":13,"price":"5000","isDeleted":false,"_id":"5cb596613c0b401a21f1eddb","symbol":"ABC","uuid":"b72c9820-973f-458d-a506-f016536fba30","createdAt":"2019-04-16T08:46:25.124Z","updatedAt":"2019-04-16T08:46:25.124Z","__v":0},{"user":{"id":"5cb57de76232257a7d3735a8","name":"Ankit_Chavhan"},"type":"BUY","shares":13,"price":"30","isDeleted":false,"_id":"5cb58c5dfb46550f1be4a284","symbol":"ABC","uuid":"3ae8636a-1221-47ef-96c3-94d7c5d723d8","createdAt":"2019-04-16T08:03:41.829Z","updatedAt":"2019-04-16T08:03:41.829Z","__v":0},{"user":{"id":"5cb580ab7b63317d9a72017d","name":"Ankit"},"type":"BUY","shares":13,"price":"100","isDeleted":false,"_id":"5cb58b8627bb960ea9a46d9c","symbol":"ABC","uuid":"d0e742dd-a248-49dd-a942-d7767f347338","createdAt":"2019-04-16T08:00:06.453Z","updatedAt":"2019-04-16T08:00:06.453Z","__v":0},{"user":{"id":"5cb580ab7b63317d9a72017d","name":"Ankit"},"type":"BUY","shares":13,"price":"30","isDeleted":false,"_id":"5cb58b5f33c51b0e5f9e0ddc","symbol":"ABC","uuid":"b7f6c470-d272-4eb3-a3df-e8b0b73b0131","createdAt":"2019-04-16T07:59:27.631Z","updatedAt":"2019-04-16T07:59:27.631Z","__v":0},{"user":{"id":"5cb580ab7b63317d9a72017d","name":"Ankit"},"type":"BUY","shares":13,"price":"30","isDeleted":false,"_id":"5cb58ad13283ba0de42ce12b","symbol":"ABC","uuid":"2b47950f-6b45-45a9-9877-60978868aeed","createdAt":"2019-04-16T07:57:05.595Z","updatedAt":"2019-04-16T07:57:05.595Z","__v":0}]}
    

```

```bash

    #Filters trade with symbol and date range
    GET http://localhost:4001/api/v1/trade/stocks/ABC/price/2019-04-13/2019-04-19

    #Headers

    Content-Type: application/x-www-form-urlencoded    
    x-access-token: your generated token


    #response
    {"status":true,"code":200,"message":"success","appVersion":"v1.0.0","result":[{"_id":null,"maxPice":"55","minPrice":"100"}]}
    

```

```bash

    #Delete trade
    DELETE http://localhost:4001/api/v1/trade/erase

    #Headers

    Content-Type: application/x-www-form-urlencoded    
    x-access-token: your generated token


    #response
    {"status":true,"code":200,"message":"All trades are deleted","appVersion":"v1.0.0","result":{"n":0,"ok":1,"deletedCount":0}}

```

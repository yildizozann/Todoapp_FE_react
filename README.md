#  To Do App

This is a to-do application. 
Adding and listing to-dos

**Server: Golang  
Client: React 
Database: Local MongoDB**

---

# Highlights

1. DB connection string, name and collection name moved to `.env` file as environment variable. Using `github.com/joho/godotenv` to read the environment variables.
2. 
## Application Requirement

### golang server requirement

1. golang https://golang.org/dl/
2. goland fiber for https get and post methods `go get -u github.com/gofiber/fiber/v2`
3. mongo-driver package to connect with mongoDB `go get go.mongodb.org/mongo-driver`
4. github.com/joho/godotenv to access the environment variable.

### react client

From the Application directory

`create-react-app client`

## :computer: Start the application

1. Make sure your mongoDB is started
2. Create a `.env` file inside the `go-server` and copy the keys from `.env.example` and update the DB connection string.
3. From go-server directory, open a terminal and run
   `go run main.go`
4. From client directory,  
   a. install all the dependencies using `npm install`  
   b. start client `npm start`


### Create To-Do

Enter a To-Do input box and click submit.












import {createPool} from "mysql2/promise"

export const pool = createPool({

host:"localhost",
user: "gabriel",
password: "1234",
port: "3306",
database: "datadb"

})
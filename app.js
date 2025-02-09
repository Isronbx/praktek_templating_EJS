import express from "express"
import expressEjsLayouts from "express-ejs-layouts"
// import dataKaryawan from "./api/v1/dataKaryawan/router.js"
import routeJabatan from "./api/v1/dataJabatan/router.js"
import routeKaryawan from "./api/v1/dataKaryawan/router.js"

import path from "path"
import { fileURLToPath } from "url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

app.set("view engine", "ejs")

app.use(expressEjsLayouts)

app.set("layout", "./template/app")

app.use(express.static(path.join(__dirname, "public")))

app.use("/dashboard", routeJabatan)
app.use("/dashboard", routeKaryawan)

app.listen(4003, () => {
    console.log("Server is Runing...");
})
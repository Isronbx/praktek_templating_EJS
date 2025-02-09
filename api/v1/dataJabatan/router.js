import express from  "express" //menginport express agar dapat di gunakan
const router = express.Router() //mengimpor module router agar dapat menggunakan enthod router
import { tampilJabatan } from "./controller.js"; //mengimport fungsi controller ke router

router.get("/jabatan", tampilJabatan) //router untuk menampilkan data user

export default router //kemudian router ini di export keluar agar dapat di proses oleh server
import express from  "express" //menginport express agar dapat di gunakan
const router = express.Router() //mengimpor module router agar dapat menggunakan enthod router
import { tampilkaryawan} from "./controller.js"; //mengimport fungsi controller ke router
router.get("/karyawan", tampilkaryawan) //router untuk menampilkan data user
export default router //kemudian router ini di export keluar agar dapat di proses oleh server

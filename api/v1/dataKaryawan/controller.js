import dataKaryawan from "./model.js";
const tampilkaryawan = (req, res) => {
    res.render("karyawan/index", {
        data : dataKaryawan,
        judul : "Data Karyawan"
    })
}

export {
    tampilkaryawan
} 
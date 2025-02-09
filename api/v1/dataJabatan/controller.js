import dataJabatan from "./model.js";
const tampilJabatan = (req, res) => {
    res.render("jabatan/index", {
        data : dataJabatan,
        judul : "Data Jabatan"
    })
}

export {
    tampilJabatan
}

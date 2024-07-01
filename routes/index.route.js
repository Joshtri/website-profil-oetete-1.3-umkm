import express from "express";

import * as mainController from '../controllers/index.controller.js';

const router = express.Router();



router.get('/', mainController.mainPage);
router.get('/fasilitas', mainController.fasilitasPage);
router.get('/peta', mainController.petaPage);
router.get('/sejarah_kelurahan', mainController.sejarahKelurahanPage);
router.get('/profil_umkm', mainController.profilUmkmPage);
router.get('/struktur_kelurahan', mainController.strukturPemPage);
router.get('/visi_misi_kelurahan', mainController.visiMisiPage);


router.get('/publikasi', mainController.publikasiPage);





// router.get('/main_stats');




export default router;
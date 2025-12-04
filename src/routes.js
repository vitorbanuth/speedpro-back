import express from "express";
import { homeController } from "./controllers/homeControllers.js";
import footerController from "./controllers/footerController.js";
import ProductsService from "./services/ProductsService.js";
import { uploadStudentFiles } from "./config/multer.js";
import CardService from './services/cardsService.js'
import FaqService from "./services/faqService.js";
import HomeService from "./services/homeService.js";

export const router = express.Router();

router.get("/", homeController.index);

router.get("/getFooterData", footerController.getFooterData);

router.get("/getTurbos", async (req, res) => {
  try {
    const turbos = await ProductsService.listAllTurbos();
    res.json(turbos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar turbos" });
  }
});

router.get("/getTurboById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const turbo = await ProductsService.getTurboById(id);
    
    if (!turbo) {
      return res.status(404).json({ error: "Turbina não encontrada" });
    }

    res.json(turbo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar turbo" });
  }
});

router.get("/getEscapes", async (req, res) => {
  try {
    const exhausts = await ProductsService.listAllExhausts();
    res.json(exhausts);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar coletores de escapamento" });
  }
});

router.get("/getExhaustById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const turbo = await ProductsService.getExhaustById(id);
    
    if (!turbo) {
      return res.status(404).json({ error: "Coletor não encontrado" });
    }

    res.json(turbo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar coletor" });
  }
});

router.get("/getAdmissao", async (req, res) => {
  try {
    const manifolds = await ProductsService.listAllManifolds();
    res.json(manifolds);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar coletores de admissão" });
  }
});

router.get("/getManifoldById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const turbo = await ProductsService.getManifoldById(id);
    
    if (!turbo) {
      return res.status(404).json({ error: "Coletor não encontrado" });
    }

    res.json(turbo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar coletor" });
  }
});


router.get("/getBicos", async (req, res) => {
  try {
    const injectors = await ProductsService.listAllInjectors();
    res.json(injectors);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar bicos injetores" });
  }
});

router.get("/getInjectorById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const turbo = await ProductsService.getInjectorById(id);
    
    if (!turbo) {
      return res.status(404).json({ error: "Bicos não encontrados" });
    }

    res.json(turbo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar bicos" });
  }
});

router.get("/getBombas", async (req, res) => {
  try {
    const pumps = await ProductsService.listAllPumps();
    res.json(pumps);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar bombas de combustível" });
  }
});

router.get("/getPumpById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const turbo = await ProductsService.getPumpById(id);
    
    if (!turbo) {
      return res.status(404).json({ error: "Bomba não encontrada" });
    }

    res.json(turbo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar bomba" });
  }
});


router.get("/getCards", async (req, res) => {
  try {
    const cards = await CardService.listAllCards();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar cards" });
  }
});

router.get("/getFaqs", async (req, res) => {
  try {
    const cards = await FaqService.listAllFaqs();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar faqs" });
  }
});



router.get("/getHomeData", async (req, res) => {
  try {
    const data = await HomeService.listHomeData();
    const events = await HomeService.listEvents();

    res.json({ data,events});
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar infos do mural" });
  }
});



import { Op, where } from "sequelize";
import { Turbos } from "../models/Turbos.js";
import { Manifolds } from "../models/Manifolds.js";
import { Exhausts } from "../models/Exhausts.js";
import { Injectors } from "../models/Injectors.js";
import { Pumps } from "../models/Pumps.js";

class ProductsService {

    static async listAllTurbos() {
        try {
            return await Turbos.findAll({
                order: [['id', 'ASC']],
            });
        } catch (error) {
            console.error("Erro no Service ao listar Turbinas", error);
            throw new Error("Falha ao buscar Turbinas no banco de dados");
        }
    }

    static async getTurboById(id) {
        try {
            return await Turbos.findByPk(id);
        } catch (error) {
            console.error("Erro no Service ao listar turbina", error);
            throw new Error("Falha ao buscar turbina no banco de dados");
        }
    }

    static async listAllManifolds() {
        try {
            return await Manifolds.findAll({
                order: [['id', 'ASC']],
            });
        } catch (error) {
            console.error("Erro no Service ao listar Coletores de Admissão", error);
            throw new Error("Falha ao buscar Coletores de Admissão no banco de dados");
        }
    }

    static async getManifoldById(id) {
        try {
            return await Manifolds.findByPk(id);
        } catch (error) {
            console.error("Erro no Service ao listar coletor de admissão", error);
            throw new Error("Falha ao buscar coletor de admissão no banco de dados");
        }
    }

    static async listAllExhausts() {
        try {
            return await Exhausts.findAll({
                order: [['id', 'ASC']],
            });
        } catch (error) {
            console.error("Erro no Service ao listar Coletores de Escapemento", error);
            throw new Error("Falha ao buscar Coletores de Escapamento no banco de dados");
        }
    }

    static async getExhaustById(id) {
        try {
            return await Exhausts.findByPk(id);
        } catch (error) {
            console.error("Erro no Service ao listar coletor de escape", error);
            throw new Error("Falha ao buscar coletor de escape no banco de dados");
        }
    }

    static async listAllPumps() {
        try {
            return await Pumps.findAll({
                order: [['id', 'ASC']],
            });
        } catch (error) {
            console.error("Erro no Service ao listar Bombas de Combustível", error);
            throw new Error("Falha ao buscar Bombas de Combustível no banco de dados");
        }
    }

    static async getPumpById(id) {
        try {
            return await Pumps.findByPk(id);
        } catch (error) {
            console.error("Erro no Service ao listar bomba de combustivel", error);
            throw new Error("Falha ao buscar bomba de combustivel no banco de dados");
        }
    }

    

    static async listAllInjectors() {
        try {
            return await Injectors.findAll({
                order: [['id', 'ASC']],
            });
        } catch (error) {
            console.error("Erro no Service ao listar Bicos de Combustível", error);
            throw new Error("Falha ao buscar Bicos de Combustível no banco de dados");
        }
    }

    static async getInjectorById(id) {
        try {
            return await Injectors.findByPk(id);
        } catch (error) {
            console.error("Erro no Service ao listar bico injetor", error);
            throw new Error("Falha ao buscar bico injetor no banco de dados");
        }
    }
}

export default ProductsService;
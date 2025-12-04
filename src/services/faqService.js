
import {Faq} from '../models/Faq.js';

class FaqService {

    static async listAllFaqs(){
        try{
            return await Faq.findAll({
                order: [['id', 'ASC']], 
            }); 
        }catch (error) {
            console.error("Erro no Service o listar Faqs", error);
            throw new Error('Falha ao buscar Faqs no banco de dados');
        }
    }
}

export default FaqService;
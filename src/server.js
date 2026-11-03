import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import doceRoutes from './routes/doceRoutes.js';

const app = express();
const PORT = 3000;

// Configuração do caminho absoluto para ESM (necessário para views EJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Configuração da View Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 2. Middlewares essenciais
app.use(express.urlencoded({ extended: true })); // Permite ler dados de formulários HTML (req.body)
app.use(methodOverride('_method')); // Permite simular PUT e DELETE via ?_method=PUT

// 3. Redirecionamento da raiz / para /doces
app.get('/', (req, res) => {
    res.redirect('/doces');
});

// 4. Registro dos grupos de rotas
app.use('/doces', doceRoutes);

// 5. Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
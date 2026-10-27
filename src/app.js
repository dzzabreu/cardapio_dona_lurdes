import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();


app.get('/api/health', (req, res) => res.json({ status: 'ok'}));

// ── Motor de templates ──────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views')); // diretório dos templates

// ── Middlewares ─────────────────────────────────────────
app.use(express.urlencoded({ extended: true })); // parse de formulários HTML
app.use(express.json());
app.use(express.static(join(__dirname, '..', 'public'))); // arquivos estáticos

export default app;
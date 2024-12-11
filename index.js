import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/db.js';
import studentRoutes from './routes/Routes.js';
import swaggerUi from 'swagger-ui-express';
import specs from "./config/swagger.js";

const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/students', studentRoutes);

// Initialize database and start server
sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch((error) => console.error('Database connection failed:', error));
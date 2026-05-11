const express = require('express');
const mandiRoutes = require('./routes/mandi');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Mandi Price API is running!' });
});

app.use('/api/mandi', mandiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
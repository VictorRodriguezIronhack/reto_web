const app = require('./app')
const PORT = process.env.PORT || 5005

app.listen(PORT, () => {
  console.info(`🏃 on port http://localhost:${PORT}`)
})

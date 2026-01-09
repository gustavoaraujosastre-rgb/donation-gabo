// index.js
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// 🔑 Reemplaza con tu API Key de Roblox si aplica
const API_KEY = "woFYM9bZtUigNAVQ+XrqOF+2b9XqOdXMz8CxcCu/i7EVgXdQZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGRXUWlPaUpTYjJKc2IzaEpiblJsY201aGJDSXNJbWx6Y3lJNklrTnNiM1ZrUVhWMGFHVnVkR2xqWVhScGIyNVRaWEoyYVdObElpd2lZbUZ6WlVGd2FVdGxlU0k2SW5kdlJsbE5PV0phZEZWcFowNUJWbEVyV0hKeFQwWXJNbUk1V0hGUFpGaE5lamhEZUdORGRTOXBOMFZXWjFoa1VTSXNJbTkzYm1WeVNXUWlPaUl4TmpjMk9UUXhPVGN6SWl3aVpYaHdJam94TnpZM09Ua3pPVE14TENKcFlYUWlPakUzTmpjNU9UQXpNekVzSW01aVppSTZNVGMyTnprNU1ETXpNWDAuUmE1UUlzQ1QtdjNuZkhQNG1kTXF4aUFoZTJoVDZpeU9Fall0cDV0MGlRWE1BeHAzZ1ZVdHVPMVQ2OFppeU1obEFTb1hneFNqbTZGT1BmbGktRERJaG5lMzB3MVVjbDdSdjM0ODBObjBzal91S0JJTGYySk1qMGlMMU56SkV0cGFSTVVOQmxkOGZ6OEVXNGRqVFFLUVJiREc4VGFVbDVFa0dPYW4yQkM1NzdhMUFpeGZmX2pPbmJncm40bENtM011QTlXa3NaUDI4WmJRSXc4MjB0M0hXRjBmd1ZLZTlwSmlTYWZDWGJXOXNvenRka1kwWGVfSW9yQlQ1cllYRnFVTHVnVDZUQzZRZGtqeGFEQVdUOVZNYzJ3ekoyUk40OGwzbkJXOFFEU1lOSXdld2VhWE1hQmxDekt4Yjdidm9wUkRwM2tzeGU0OFFFSVRQcDJJa1hWcERB";

// Ruta POST para obtener gamepasses de un usuario
app.post("/getGamepasses", async (req, res) => {
    const userId = req.body.userId;

    if (!userId) {
        return res.status(400).json({ error: "No userId" });
    }

    try {
        const response = await axios.get(
            `https://apis.roblox.com/game-passes/v1/users/${userId}/game-passes?passView=Full`,
            {
                headers: {
                    "Authorization": `Bearer ${API_KEY}`
                }
            }
        );

        res.json(response.data.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Error obteniendo gamepasses" });
    }
});

// 🔥 Puerto dinámico para Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Backend funcionando en puerto", PORT);
});

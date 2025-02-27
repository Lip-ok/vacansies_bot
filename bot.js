require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cron = require("node-cron");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;
const VACANCIES_URL = process.env.VACANCIES_URL;
const PORT = process.env.PORT;
const TIME = process.env.TIME || 4;

if (!BOT_TOKEN || !CHANNEL_ID || !VACANCIES_URL) {
    console.error("❌ Ошибка: Заполните .env файл перед запуском!");
    process.exit(1);
}

const bot = new TelegramBot(BOT_TOKEN, { polling: true }); // Запуск бота с polling

// Функция для получения вакансий и отправки их в канал
async function fetchAndPostVacancies() {
    try {
        console.log("🔍 Запрашиваю вакансии...");
        const response = await axios.get(VACANCIES_URL);
        const vacanciesHtml = response.data;

        const timestampMatch = vacanciesHtml.match(/<h1>(.*?)<\/h1>/);
        const vacancyMatches = [...vacanciesHtml.matchAll(/<div>.*?<a href="(.*?)".*?>(.*?)<\/a>.*?<p>Зарплата: (.*?)<\/p>.*?<p>Ключевые навыки: (.*?)<\/p>.*?<\/div>/gs)];

        if (!timestampMatch || vacancyMatches.length === 0) {
            console.log("⚠️ Вакансии не найдены");
            return;
        }

        const timestamp = timestampMatch[1];

        let message = `📅 *${timestamp}*\n\n`;

        vacancyMatches.forEach(([, url, title, salary, skills], index) => {
            message += `🔥 *${title}*\n💰 Зарплата: ${salary}\n🛠️ Навыки: ${skills}\n🔗 [Открыть вакансию](${url})\n\n`;
        });

        console.log("📨 Отправляю вакансии в канал...");
        await bot.sendMessage(CHANNEL_ID, message, { parse_mode: "Markdown" });

    } catch (error) {
        console.error("❌ Ошибка при запросе вакансий:", error.message);
    }
}

// Массив для хранения вакансий
let vacancies = [];
// Запрос раз в 10 минут
cron.schedule('*/10 * * * *', async () => {
    vacancies = await fetchAndPostVacancies(); // Обновляем вакансии
});

// Отправка вакансий в бот раз в час
cron.schedule('0 * * * *', async () => {
    await sendVacanciesToBot(vacancies); // Отправляем вакансии в бот
});

// Маршрут для тестирования, чтобы запустить бота через Express
app.get('/', (req, res) => {
    res.send('Бот работает!');
});

// Запуск Express сервера
app.listen(PORT, () => {
    console.log(`🤖 Бот запущен на Express! Слушаем порт ${PORT}.`);
});

// Лаунч бота
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Привет! Я бот, который присылает вакансии!");
});

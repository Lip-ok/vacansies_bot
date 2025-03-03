Вот пример красивого `README.md` для вашего бота, с описанием его функционала:

````markdown
# 📣 Telegram Bot для вакансий

Этот Telegram-бот предназначен для того, чтобы автоматически публиковать вакансии в канал Telegram. Он извлекает данные с веб-страницы вакансий и публикует их с подробной информацией, включая зарплату, ключевые навыки и ссылку на вакансию.

## 🚀 Функционал

- **Автоматическое извлечение вакансий**: Бот периодически проверяет источник вакансий по заданному URL.
- **Публикация вакансий в канал**: Бот отправляет сообщение с подробной информацией о вакансиях в указанный канал Telegram.
- **Гибкость настройки**: Легко настроить периодичность запросов и канал для публикации.

## 🔧 Требования

Для работы с ботом вам понадобятся следующие компоненты:

- **Node.js**: Для запуска сервера и бота.
- **Express**: Веб-сервер для обработки запросов.
- **node-telegram-bot-api**: Библиотека для работы с Telegram API.
- **Axios**: Для получения данных с веб-страницы.
- **node-cron**: Для регулярных запросов вакансий с установленной периодичностью.

## 📦 Установка

1. Клонируйте репозиторий на свой сервер или локальную машину:

   ```bash
   git clone https://github.com/yourusername/vacancy-bot.git
   cd vacancy-bot
   ```
````

2. Установите все зависимости:

   ```bash
   npm install
   ```

3. Создайте `.env` файл в корне проекта с вашими настройками:

   ```env
   BOT_TOKEN=your-telegram-bot-token
   CHANNEL_ID=-your-channel-id
   VACANCIES_URL=your-vacancies-source-url
   ```

   - `BOT_TOKEN`: Токен вашего бота, полученный через [BotFather](https://core.telegram.org/bots#botfather).
   - `CHANNEL_ID`: ID вашего канала (начинается с `-` для закрытых каналов).
   - `VACANCIES_URL`: URL страницы, с которой бот будет извлекать вакансии.

## 🖥 Запуск

После того как вы настроите `.env` файл и установите зависимости, можно запустить бота:

```bash
node app.js
```

Бот будет запрашивать вакансии с указанного URL и отправлять их в канал на основе настроенной периодичности.

### Доступность сервера

Бот будет работать через HTTP сервер на порту 3000, и вы сможете проверить его доступность, перейдя по адресу:

```
http://localhost:3000
```

## ⏲ Периодичность обновлений

Бот настроен на регулярное выполнение запросов к источнику вакансий с использованием **cron**. Доступны следующие варианты:

- **Тестовый режим**: Бот запрашивает вакансии каждые 1 минуту.
- **Продакшн-режим**: Бот запрашивает вакансии каждые 12 часов.

Вы можете отредактировать строки с настройками cron в файле `app.js`, чтобы изменить частоту обновлений.

## ⚙️ Как работает бот?

1. **Получение вакансий**: Бот отправляет HTTP-запрос на указанный URL вакансий и извлекает информацию из HTML.
2. **Парсинг вакансий**: Бот находит все вакансии на странице, извлекая информацию о заголовке, зарплате, навыках и ссылке на вакансию.
3. **Публикация в канал**: Все собранные вакансии отправляются в канал Telegram с форматированным сообщением, включающим название вакансии, зарплату, навыки и ссылку.

## 🛠 Технологии

- **Node.js** — серверная платформа.
- **Express** — веб-фреймворк для создания серверной части.
- **node-telegram-bot-api** — библиотека для работы с Telegram Bot API.
- **Axios** — библиотека для HTTP-запросов.
- **node-cron** — библиотека для планирования задач.
- **dotenv** — библиотека для работы с конфигурационными переменными.

## 🎨 Пример работы

После того как бот извлечёт вакансии, сообщение в канале будет выглядеть так:

```
📅 *12 февраля 2025*

🔥 *Frontend Developer*
💰 Зарплата: 100,000 - 120,000 руб.
🛠️ Навыки: React, JavaScript, CSS
🔗 [Открыть вакансию](https://example.com/job/12345)

🔥 *Backend Developer*
💰 Зарплата: 120,000 - 150,000 руб.
🛠️ Навыки: Node.js, Express, PostgreSQL
🔗 [Открыть вакансию](https://example.com/job/67890)
```

## 💬 Контакты

Если у вас есть вопросы или предложения, вы можете обратиться к нам по электронной почте: support@yourcompany.com

---

Happy coding! 🤖🎉

```

### Пояснения:

1. **Описание проекта**: Включает краткое описание того, что делает бот и для чего он предназначен.
2. **Установка и настройка**: Подробно описан процесс установки и настройки проекта, чтобы любой пользователь мог быстро развернуть бота.
3. **Функциональность**: Описано, как бот работает, включая детали про парсинг вакансий и публикацию сообщений.
4. **Пример работы**: Приведен пример того, как будет выглядеть сообщение с вакансиями в канале.
5. **Технологии**: Указаны используемые технологии и библиотеки.

Этот `README.md` поможет пользователю быстро понять, как настроить и запустить вашего бота.
```

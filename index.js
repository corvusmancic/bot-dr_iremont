const { iphonesPrice, ipadesPrice } = require('./price.js');
const { priceBut, buttons, iphones, ipades, message, homeBut } = require('./buttons.js');

const TelegramApi = require('node-telegram-bot-api');

const chatIdAdmin = '-1002105486713';
// const chatIdAdmin = '-1002121086761';

const token = '6519855316:AAFfxJ_Rg3KEuvBeuatcjDAe_kAj4oUKBPA';
// const token = '7134016934:AAG5z42NDhlV1kdbIn_t8PaCj-96pCBJyFw';

const bot = new TelegramApi(token, { polling: true });

const start = () => {
  bot.setMyCommands([
    { command: '/start', description: 'Начало работы с ботом' },
    { command: '/help', description: 'Помощь (Написать нам)' },
  ]);

  bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
      return await bot.sendMessage(
        chatId,
        'Добро пожаловать в бота команды Dr_iRemont, в данном боте вы можете узнать актуальные цены на ремонт вашего гаджета',
        priceBut
      );
    } else if (text === '/help') {
      return await bot.sendMessage(
        chatId,
        `${msg.from.first_name}, если у тебя возникли трудности с ботом, можешь написать нашему оператору @Dr_iRemont`
      );
    } else {
      return await bot.sendMessage(
        chatId,
        'Твой запрос мне не понятен, попробуй ещё раз!'
      );
    }
  });

  bot.on('callback_query', async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data === '001') {
      return await bot.sendMessage(chatId, 'Выбери своё устройство ', buttons);
    } else if (data === '002') {
      bot.sendMessage(
        chatId,
        'Заявка успешно создана, ожидайте ответа оператора ',
        homeBut
      );
      return await bot.sendMessage(
        chatIdAdmin,
        `Прилетела заявочка от \n@${msg.from.username}`
      );
    } else if (data === 'home') {
      return await bot.sendMessage(chatId, 'Выбери своё устройство ', buttons);
    } else if (data === '1') {
      return await bot.sendMessage(
        chatId,
        'Теперь выбери модель своего iPhone ',
        iphones
      );
    } else if (data === '2') {
      return await bot.sendMessage(
        chatId,
        'Теперь выбери модель своего iPad ',
        ipades
      );
    } else if (data === '3' || data === '4' || data === '5') {
      return await bot.sendMessage(
        chatId,
        'К сожелению по данному виду устройств очень сложно правильно назвать вам цену, для уточнения цены напишите нашему оператору @Dr_iRemont'
      );
    } else if (data === 'iphone1') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone1, message);
    } else if (data === 'iphone2') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone2, message);
    } else if (data === 'iphone3') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone3, message);
    } else if (data === 'iphone4') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone4, message);
    } else if (data === 'iphone5') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone5, message);
    } else if (data === 'iphone6') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone6, message);
    } else if (data === 'iphone7') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone7, message);
    } else if (data === 'iphone8') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone8, message);
    } else if (data === 'iphone9') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone9, message);
    } else if (data === 'iphone10') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone10, message);
    } else if (data === 'iphone11') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone11, message);
    } else if (data === 'iphone12') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone12, message);
    } else if (data === 'iphone13') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone13, message);
    } else if (data === 'iphone14') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone14, message);
    } else if (data === 'iphone15') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone15, message);
    } else if (data === 'iphone16') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone16, message);
    } else if (data === 'iphone17') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone17, message);
    } else if (data === 'iphone18') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone18, message);
    } else if (data === 'iphone19') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone19, message);
    } else if (data === 'iphone20') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone20, message);
    } else if (data === 'iphone21') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone21, message);
    } else if (data === 'iphone22') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone22, message);
    } else if (data === 'iphone23') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone23, message);
    } else if (data === 'iphone24') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone24, message);
    } else if (data === 'iphone25') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone25, message);
    } else if (data === 'iphone26') {
      return await bot.sendMessage(chatId, iphonesPrice.iphone26, message);
    } else if (data === 'ipad1') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad1, message);
    } else if (data === 'ipad2') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad2, message);
    } else if (data === 'ipad3') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad3, message);
    } else if (data === 'ipad4') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad4, message);
    } else if (data === 'ipad5') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad5, message);
    } else if (data === 'ipad6') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad6, message);
    } else if (data === 'ipad7') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad7, message);
    } else if (data === 'ipad8') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad8, message);
    } else if (data === 'ipad9') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad9, message);
    } else if (data === 'ipad10') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad10, message);
    } else if (data === 'ipad11') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad11, message);
    } else if (data === 'ipad12') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad12, message);
    } else if (data === 'ipad13') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad13, message);
    } else if (data === 'ipad14') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad14, message);
    } else if (data === 'ipad15') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad15, message);
    } else if (data === 'ipad16') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad16, message);
    } else if (data === 'ipad17') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad17, message);
    } else if (data === 'ipad18') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad18, message);
    } else if (data === 'ipad19') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad19, message);
    } else if (data === 'ipad20') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad20, message);
    } else if (data === 'ipad21') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad21, message);
    } else if (data === 'ipad22') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad22, message);
    } else if (data === 'ipad23') {
      return await bot.sendMessage(chatId, ipadesPrice.ipad23, message);
    }
  });
};

start();

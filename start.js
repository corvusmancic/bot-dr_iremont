let TelegramApi = require('node-telegram-bot-api')


const chatId2 = '-1002105486713'


let token = '6519855316:AAFfxJ_Rg3KEuvBeuatcjDAe_kAj4oUKBPA'


let bot = new TelegramApi(token, {polling: true})


const start = () => {

    bot.setMyCommands([
        {command: '/start', description: 'Начало работы с ботом'},
        {command: '/help', description: 'Помощь'}
    ])
    
    
    bot.on('message' , async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        if(text === '/start'){
            return await bot.sendMessage(chatId, 'Добро пожаловать в бота команды Dr_iRemont, в данном боте вы можете узнать актуальные цены на ремонт вашего гаджета', priceBut)
        }
        else if(text === '/help'){
            return await bot.sendMessage(chatId, `${msg.from.first_name}, если у тебя возникли трудности с ботом, можешь написать нашему оператору @Dr_iRemont`)   
            }
        else{
            return await bot.sendMessage(chatId, 'Твой запрос мне не понятен, попробуй ещё раз!')
        }
    })

    
    bot.on('callback_query', async msg => {
        var data = msg.data; 
        const chatId = msg.message.chat.id;
        if(data === '001'){
            return await bot.sendMessage(chatId, 'Выбери своё устройство ',buttons)
        }
        else if(data === '002'){
            bot.sendMessage(chatId, 'Заявка успешно создана, ожидайте ответа оператора ',buttons)
            return await bot.sendMessage(chatId2, 'Выбери своё устройство ',buttons)
        }
        else if(data === '1'){
            return await bot.sendMessage(chatId, 'Теперь выбери модель своего iPhone ',iphones)
        }
        else if(data === '2'){
            return await bot.sendMessage(chatId, 'Теперь выбери модель своего iPad ',ipades)

        }
        else if(data === '3' || data === '4' || data === '5'){
            return await bot.sendMessage(chatId, 'К сожелению по данному виду устройств очень сложно правильно назвать вам цену, для уточнения цены напишите нашему оператору @Dr_iRemont')
        }
        else if(data === 'iphone1'){
            return await bot.sendMessage(chatId, iphone1)
        }
        else if(data === 'iphone2'){
            return await bot.sendMessage(chatId, iphone2)
        }
        else if(data === 'iphone3'){
            return await bot.sendMessage(chatId, iphone3)
        }
        else if(data === 'iphone4'){
            return await bot.sendMessage(chatId, iphone4)
        }
        else if(data === 'iphone5'){
            return await bot.sendMessage(chatId, iphone5)
        }
        else if(data === 'iphone6'){
            return await bot.sendMessage(chatId, iphone6)
        }
        else if(data === 'iphone7'){
            return await bot.sendMessage(chatId, iphone7)
        }
        else if(data === 'iphone8'){
            return await bot.sendMessage(chatId, iphone8)
        }
        else if(data === 'iphone9'){
            return await bot.sendMessage(chatId, iphone9)
        }
        else if(data === 'iphone10'){
            return await bot.sendMessage(chatId, iphone10)
        }
        else if(data === 'iphone11'){
            return await bot.sendMessage(chatId, iphone11)
        }
        else if(data === 'iphone12'){
            return await bot.sendMessage(chatId, iphone12)
        }
        else if(data === 'iphone13'){
            return await bot.sendMessage(chatId, iphone13)
        }
        else if(data === 'iphone14'){
            return await bot.sendMessage(chatId, iphone14)
        }
        else if(data === 'iphone15'){
            return await bot.sendMessage(chatId, iphone15)
        }
        else if(data === 'iphone16'){
            return await bot.sendMessage(chatId, iphone16)
        }
        else if(data === 'iphone17'){
            return await bot.sendMessage(chatId, iphone17)
        }
        else if(data === 'iphone18'){
            return await bot.sendMessage(chatId, iphone18)
        }
        else if(data === 'iphone19'){
            return await bot.sendMessage(chatId, iphone19)
        }
        else if(data === 'iphone20'){
            return await bot.sendMessage(chatId, iphone20)
        }
        else if(data === 'iphone21'){
            return await bot.sendMessage(chatId, iphone21)
        }
        else if(data === 'iphone22'){
            return await bot.sendMessage(chatId, iphone22)
        }
        else if(data === 'iphone23'){
            return await bot.sendMessage(chatId, iphone23)
        }
        else if(data === 'iphone24'){
            return await bot.sendMessage(chatId, iphone24)
        }
        else if(data === 'iphone25'){
            return await bot.sendMessage(chatId, iphone25)
        }
        else if(data === 'iphone26'){
            return await bot.sendMessage(chatId, iphone26)
        } 
        else if(data === 'ipad1'){
            return await bot.sendMessage(chatId, ipad1)
        }
        else if(data === 'ipad2'){
            return await bot.sendMessage(chatId, ipad2)
        }
        else if(data === 'ipad3'){
            return await bot.sendMessage(chatId, ipad3)
        }
        else if(data === 'ipad4'){
            return await bot.sendMessage(chatId, ipad4)
        }
        else if(data === 'ipad5'){
            return await bot.sendMessage(chatId, ipad5)
        }
        else if(data === 'ipad6'){
            return await bot.sendMessage(chatId, ipad6)
        }
        else if(data === 'ipad7'){
            return await bot.sendMessage(chatId, ipad7)
        }
        else if(data === 'ipad8'){
            return await bot.sendMessage(chatId, ipad8)
        }
        else if(data === 'ipad9'){
            return await bot.sendMessage(chatId, ipad9)
        }
        else if(data === 'ipad10'){
            return await bot.sendMessage(chatId, ipad10)
        }
        else if(data === 'ipad11'){
            return await bot.sendMessage(chatId, ipad11)
        }
        else if(data === 'ipad12'){
            return await bot.sendMessage(chatId, ipad12)
        }
        else if(data === 'ipad13'){
            return await bot.sendMessage(chatId, ipad13)
        }
        else if(data === 'ipad14'){
            return await bot.sendMessage(chatId, ipad14)
        }
        else if(data === 'ipad15'){
            return await bot.sendMessage(chatId, ipad15)
        }
        else if(data === 'ipad16'){
            return await bot.sendMessage(chatId, ipad16)
        }
        else if(data === 'ipad17'){
            return await bot.sendMessage(chatId, ipad17)
        }
        else if(data === 'ipad18'){
            return await bot.sendMessage(chatId, ipad18)
        }
        else if(data === 'ipad19'){
            return await bot.sendMessage(chatId, ipad19)
        }
        else if(data === 'ipad20'){
            return await bot.sendMessage(chatId, ipad20)
        }
        else if(data === 'ipad21'){
            return await bot.sendMessage(chatId, ipad21)
        }
        else if(data === 'ipad22'){
            return await bot.sendMessage(chatId, ipad22)
        }
        else if(data === 'ipad23'){
            return await bot.sendMessage(chatId, ipad23)
        }
    })
}

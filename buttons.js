const priceBut = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
            [{text: 'Узнать цену ремонта' , callback_data: '001'}],
        ]
    })
}


const buttons = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
            [{text: 'iPhone' , callback_data: '1'}],
            [{text: 'iPad' , callback_data: '2'}],
            [{text: 'MacBook' , callback_data: '3'}],
            [{text: 'Android' , callback_data: '4'}],
            [{text: 'PC' , callback_data: '5'}]

        ]
    })
}



const iphones = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
            [{text: '15 Pro Max' , callback_data: 'iphone1'},{text: '15 Pro' , callback_data: 'iphone2'}],
            [{text: '15 Plus' , callback_data: 'iphone3'}, {text: '15' , callback_data: 'iphone4'}],
            [{text: '14 Pro Max' , callback_data: 'iphone5'}, {text: '14 Pro' , callback_data: 'iphone6'}],
            [{text: '14 Plus' , callback_data: 'iphone7'}, {text: '14' , callback_data: 'iphone8'}],
            [{text: '13 Pro Max' , callback_data: 'iphone9'}, {text: '13 Pro' , callback_data: 'iphone10'}],
            [{text: '13' , callback_data: 'iphone11'}, {text: '12 Pro Max' , callback_data: 'iphone12'}],
            [{text: '12 Pro' , callback_data: 'iphone13'}, {text: '12 Mini' , callback_data: 'iphone14'}],
            [{text: '12' , callback_data: 'iphone15'}, {text: '11 Pro Max' , callback_data: 'iphone16'}],
            [{text: '11 Pro' , callback_data: 'iphone17'}, {text: '11' , callback_data: 'iphone18'}],
            [{text: 'XR' , callback_data: 'iphone19'}, {text: 'XS Max' , callback_data: 'iphone20'}],
            [{text: 'XS' , callback_data: 'iphone21'}, {text: 'X' , callback_data: 'iphone22'}],
            [{text: 'SE 2' , callback_data: 'iphone23'}, {text: '8 Plus' , callback_data: 'iphone24'}],
            [{text: '8' , callback_data: 'iphone25'}, {text: '7 Plus' , callback_data: 'iphone26'}]

        ]
    })
}


const ipades = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
            [{text: '7 (2019)' , callback_data: 'ipad1'},{text: '6 (2018)' , callback_data: 'ipad2'}],
            [{text: '5 (2017)' , callback_data: 'ipad3'}, {text: 'Pro 12.9 (2015)' , callback_data: 'ipad4'}],
            [{text: 'Air 3 (2019)' , callback_data: 'ipad5'}, {text: 'Air 2 (2014)' , callback_data: 'ipad6'}],
            [{text: 'Air (2013)' , callback_data: 'ipad7'}, {text: 'Mini 5 (2019)' , callback_data: 'ipad8'}],
            [{text: 'Mini 4 (2015)' , callback_data: 'ipad9'}, {text: 'Mini 3 (2014)' , callback_data: 'ipad10'}],
            [{text: 'Mini 2 (2013)' , callback_data: 'ipad11'}, {text: 'Mini (2012)' , callback_data: 'ipad12'}],
            [{text: '4 (2012)' , callback_data: 'ipad13'}, {text: '3 (2012)' , callback_data: 'ipad14'}],
            [{text: '2 (2011)' , callback_data: 'ipad15'}, {text: 'Pro 12.9 (2020)' , callback_data: 'ipad16'}],
            [{text: 'Pro 12.9 (2017)' , callback_data: 'ipad17'}, {text: 'Pro 12.9 (2018)' , callback_data: 'ipad18'}],
            [{text: 'Pro 11 (2020)' , callback_data: 'ipad19'}, {text: 'Pro 10.5 (2017)' , callback_data: 'ipad20'}],
            [{text: 'Pro 11 (2018)' , callback_data: 'ipad21'}, {text: '8 (2020)' , callback_data: 'ipad22'}],
            [{text: 'Pro 9.7 (2016)' , callback_data: 'ipad23'}]           
        ]
    })
}


const message = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
            [{text: 'Создать заявку на ремонт' , callback_data: '002'}],
        ]
    })
}





const homeBut = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
            [{text: 'Вернуться в начало' , callback_data: 'home'}],
        ]
    })
}




module.exports = {priceBut, buttons, iphones, ipades, message, homeBut}
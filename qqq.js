const { Telegraf } = require('telegraf')
require('dotenv').config()

const TOKEN = (process.env.BOT_TOKEN);
const NUMBER = "79895167918";
const CHANNEL_USERNAME = "QIWI_otzivovka";
const BOT_USERNAME = "QIWI_Marketing_Bot";
const INFO = "QIWI_Team";
const LOL = "Pilotyr";

const menu = {
	start: [
		["🛒 Купить"],
		["🔐 Личный кабинет", "☎️ Помощь"],
		["Отзывы🥝", "🥝FAQ", "🤷 Кто мы?"],
		["Тестовый аккаунт📲","Правила🥝"],
		["👥Реферальная система"]
	],
	wallets: [
		["🥝 - Qiwi Random"],
		[ "🥝 - Qiwi Bruteforce"],
		["🥝 - Qiwi Саморег"],
		["🥝 - Qiwi Stealer"],
		["✖️ Меню"]
	],
	Random: [
        ['Qiwi LITE | Цена: 300.00'],
		['Qiwi MEDIUM | Цена: 700.00'],
		['Qiwi HARD | Цена: 1400.00'],
		["◀️Смотреть категории"]
	],
	Brute: [
        ['Qiwi с балансом - 1.948р'],
		['Qiwi с балансом - 2.876р'],
        ['Qiwi с балансом - 4.784р'],
        ['Qiwi с балансом - 6.948р'],
		['◀️Смотреть категории']
	],
	Lite: [
		['💰Qiwi LITE'],
		['◀️Вернуться']
	],
	Medium: [
		['💰Qiwi MEDIUM'],
		['◀️Вернуться']
	],
	Hard: [
		['💰Qiwi HARD'],
		['◀️Вернуться']
	],
	Brutef: [
	['💰Qiwi - 1.948р'],
	['◀️Вернуться']
],
    Brutefo: [
	['💰Qiwi - 2.876р'],
	['◀️Вернуться']
],
    Brutefor: [
	['💰Qiwi - 4.784р'],
	['◀️Вернуться']
],
    Bruteforc: [
	['◀️Вернуться']	
	],
	Otmena:[
		["✖️Отмена"]
	],
	Samoreg: [
		['Qiwi c балансом - 1000р'],
		['Qiwi c балансом - 2000р'],
		['Qiwi c балансом - 4000р'],
		['Qiwi c балансом - 8000р'],
		['◀️Смотреть категории']	
		],
	Sam: [
		['💰Qiwi - 1.000р'],
		['◀️Вернуться']
		],
	Samo: [
	    ['💰Qiwi - 2.000р'],
		['◀️Вернуться']
		  ],
	Samor: [
		['💰Qiwi - 4.000р'],
		['◀️Вернуться']
		  ],
	Samore:    [
		['💰Qiwi - 8.000р'],
		['◀️Вернуться']
		  ],
	Stealer: [
		['Qiwi c балансом - 4.874р'],
		['Qiwi с балансом - 12.789р'],
		['◀️Смотреть категории']
	        ],
	Ste:    [
		['💰Qiwi - 4.874р'],
		['◀️Вернуться']
		    ],
	Stea:   [
		['💰Qiwi - 12.789р'],
		['◀️Вернуться']
		    ],
	Otmena:[
			["✖️Отмена"]
		]
}
//💰Купить

const Telegram = require("node-telegram-bot-api");
const bot = new Telegram(TOKEN, {
	polling: true
});

bot.on("message", async (message) => {
	if(!message.text) return;
	message.send = (text, params) => bot.sendMessage(message.chat.id, text, params);

	if(message.text.startsWith("/start") || message.text === "✖️ Меню") {
		return message.send("Добро пожаловать в Qiwi Shop🔥", {
			reply_markup: {
				keyboard: menu.start,
				resize_keyboard: true
			}
		});
	}

	if(message.text === "🥝FAQ") {
		return message.send(`✅ – Qiwi Shop 
❓– Что мы продаём?
Brute Qiwi - кошельки людей. Доступ к их-нем кошелькам, подобран с помощью специальных программ.
		
Stealer Qiwi - кошельки взломанных людей, скачавших вирус.
		
Авторег Qiwi - Зарегестрированные кошельки на виртуальные номера, с залитым балансом. Средства на кошельки залиты с помощью различных махинаций, отмыв, МФО и так далее.
		
❓- Как это работает? Купив аккаунт вы сможете расплачиваться своими покупками.Либо же вывести средства удобным для вас способом. От себя же посоветую BANKER.
		
❓- Куда можно вывести деньги?
Вы сможете оплатить любой товар из интернета, перевести на банковскую карту.Либо же на свой основной QIWI кошелёк.

❓- Как снять деньги без СМС подтверждения?
На всех кошельках  отключены СМС подтверждения, то есть Вы сможете снять денежные средства без подтверждения по СМС.
		
❓- Что я получу после покупки?
После оплаты, вы получите LOGIN:PASSWORD от кошелька.
		
❓- Почему сами не выводим деньги?
Если выводить все самим, то  цепочка со всеми кошельками заморозится из-за подозрительной активности. Самые крупные кошельки выводят наши дропы, а мелкие продают наши SUPPORTS.
		
❓- Что делать в случае не валида?
Если данные к кошельку не подошли, либо он заблокирован. Обратитесь к администратору: @Qiwi_supportman Он выдаст вам замену или вернёт средства.
© Qiwi Shop 2022: @QIWI_Marketing_Bot           
Все права защищены.`)};

		if(message.text === "Тестовый аккаунт📲") {
			return message.send(`📛WARNING: На аккаунте включён SMS идентефикатор в качестве ознакомления
Входить с браузера:
			
Логин: +79534473946
Пароль: Tuvina42
Рублевый счёт Баланс: 7491,16 ₽`)}

if(message.text === "Правила🥝") {
	return message.send(`📙ПРАВИЛА НАШЕГО СЕРВИСА📙
	———————————————————
	1️⃣Перевод денег на неактуальный кошелек считается пожертвованием и возврату не подлежит. 
	
	2️⃣Замены и прочее:
	2️⃣.1️⃣ Правила могут изменяться без оповещения
	2️⃣.2️⃣ Деньги за купленный товар по ошибке, не возвращаются
	2️⃣.3️⃣ За неактив в боте больше 30 дней, профиль в боте удаляется (обнуление всей статистики)
	2️⃣.4️⃣ Весь товар предназначен в сугубо ознакомительных целях, администрация магазина не несет ответственности за его использование после покупки. 
	2️⃣.5️⃣ Гарантия на все типы аккаунтов только на момент покупки - 30 минут!
	2️⃣.6️⃣ Все заявки саппорт обрабатывает в течении 72 двух часов.
	
	3️⃣Блокировка:
	3️⃣.1️⃣ Администрация может заблокировать вас в ЛС и боте за использование мультиаккаунта.
	3️⃣.2️⃣ Администрация может заблокировать вас в боте за то, что вы не ознакомились с правилами и помощью. 
	3️⃣.3️⃣ Блокировка в личке означает, что поддержка в сторону заблокированного человека прекращается. Разблокировка невозможна. 
	3️⃣.4️⃣ Администрация может заблокировать вас в личке и боте за флуд, спам, оскорбления, угрозы, мат, клевету, неуважение, введение в заблуждение`)}


	if(message.text === "🛒 Купить") {
		return message.send(`Выберете категорию`, {
			reply_markup: {
				keyboard: menu.wallets,
				resize_keyboard: true
			}
		});
	}

//КАТЕГОРИИ
//КАТЕГОРИИ
//КАТЕГОРИИ

	if(message.text === "🥝 - Qiwi Random") {
		return message.send(`Выберете товар`, {
			reply_markup: {
				keyboard: menu.Random,
				resize_keyboard: true
			}
		});
	}

	if(message.text === "🥝 - Qiwi Bruteforce") {
		return message.send(`Выберете товар`, {
			reply_markup: {
				keyboard: menu.Brute,
				resize_keyboard: true
			}
		});
	}

	if(message.text === "🥝 - Qiwi Саморег") {
		return message.send(`Выберете товар`, {
			reply_markup: {
				keyboard: menu.Samoreg,
				resize_keyboard: true
			}
		});
	}

	if(message.text === "🥝 - Qiwi Stealer") {
		return message.send(`Выберете товар`, {
			reply_markup: {
				keyboard: menu.Stealer,
				resize_keyboard: true
			}
		});
	}



	if(message.text === "◀️Смотреть категории") {
		return message.send(`Выберете категорию`, {
			reply_markup: {
				keyboard: menu.wallets,
				resize_keyboard: true
			}
		});
	}

	if(message.text === "✖️Отмена") {
		return message.send(`Выберете категорию`, {
			reply_markup: {
				keyboard: menu.wallets,
				resize_keyboard: true
			}
		});
	}

    //RANDOM

	if(message.text === "Qiwi LITE | Цена: 300.00") {
		return message.send(`Просмотр товара Qiwi LITE
➖➖➖➖➖➖➖➖➖➖
Описание товара: На аккаунте содержится баланс от 300р - 2.000р
После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 300.00
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Lite,
		        resize_keyboard: true
	        }
        });
    }

	if(message.text === "Qiwi MEDIUM | Цена: 700.00") {
		return message.send(`Просмотр товара Qiwi MEDIUM
➖➖➖➖➖➖➖➖➖➖
Описание товара: На аккаунте содержится баланс от 700р - 4.000р
После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 700.00
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Hard,
		        resize_keyboard: true
	        }
        });
    }

	if(message.text === "Qiwi HARD | Цена: 1400.00") {
		return message.send(`Просмотр товара Qiwi HARD
➖➖➖➖➖➖➖➖➖➖
Описание товара: На аккаунте содержится баланс от 1400р - 8.000р
После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 1400.00
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Hard,
		        resize_keyboard: true
	        }
        });
    }


    //BRUTE

	if(message.text === "Qiwi с балансом - 1.948р") {
		return message.send(`Просмотр товара Qiwi с балансом - 1.948р
➖➖➖➖➖➖➖➖➖➖
Описание товара: После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 487.00
Остаток товара: 1
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Brutef,
		        resize_keyboard: true
	        }
        });
    }

	if(message.text === "Qiwi с балансом - 2.876р") {
		return message.send(`Просмотр товара Qiwi с балансом - 2.876р
➖➖➖➖➖➖➖➖➖➖
Описание товара: После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 719.00
Остаток товара: 1
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Brutefo,
		        resize_keyboard: true
	        }
        });
    }

	if(message.text === "Qiwi с балансом - 4.784р") {
		return message.send(`Просмотр товара Qiwi с балансом - 4.784р
➖➖➖➖➖➖➖➖➖➖
Описание товара: После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 1196.00
Остаток товара: 1
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Brutefor,
		        resize_keyboard: true
	        }
        });
    }

	if(message.text === "Qiwi с балансом - 6.948р") {
		return message.send(`Просмотр товара Qiwi с балансом - 6.948р
➖➖➖➖➖➖➖➖➖➖
Описание товара: После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 1737.00
Остаток товара: 0
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Bruteforc,
		        resize_keyboard: true
	        }
        });
    }


	//Саморег

	if(message.text === "Qiwi c балансом - 1000р") {
		return message.send(`Просмотр товара Qiwi с балансом - 1.000р
➖➖➖➖➖➖➖➖➖➖
Описание товара: После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 250.00
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Sam,
		        resize_keyboard: true
	        }
        });
    }

	if(message.text === "Qiwi c балансом - 2000р") {
		return message.send(`Просмотр товара Qiwi с балансом - 2.000р
➖➖➖➖➖➖➖➖➖➖
Описание товара: После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 500.00
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Samo,
		        resize_keyboard: true
	        }
        });
    }

	if(message.text === "Qiwi c балансом - 4000р") {
		return message.send(`Просмотр товара Qiwi с балансом - 4.000р
➖➖➖➖➖➖➖➖➖➖
Описание товара: После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 1000.00
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Samor,
		        resize_keyboard: true
	        }
        });
    }

	if(message.text === "Qiwi c балансом - 8000р") {
		return message.send(`Просмотр товара Qiwi с балансом - 8.000р
➖➖➖➖➖➖➖➖➖➖
Описание товара: После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 2000.00
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
	        reply_markup: {
		        keyboard: menu.Samore,
		        resize_keyboard: true
	        }
        });
    }

//Stealer

if(message.text === "Qiwi c балансом - 4.874р") {
	return message.send(`Просмотр товара Qiwi с балансом - 4.874р
➖➖➖➖➖➖➖➖➖➖
Описание товара: После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 612.00
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
		reply_markup: {
			keyboard: menu.Ste,
			resize_keyboard: true
		}
	});
}

if(message.text === "Qiwi с балансом - 12.789р") {
	return message.send(`Просмотр товара Qiwi с балансом - 12.789р
➖➖➖➖➖➖➖➖➖➖
Описание товара: После оплаты, бот выдаст данные в формате:
LOGIN: +7*********
PASSWORD: **********
📛 На аккаунт входите не с приложения, а с браузера!
Цена товара: 1598.00
➖➖➖➖➖➖➖➖➖➖
Для покупки нажмите на кнопку с 💰`, {
		reply_markup: {
			keyboard: menu.Stea,
			resize_keyboard: true
		}
	});
}

	if(message.text === "◀️Вернуться") {
		return message.send(`Выберете категорию`, {
			reply_markup: {
				keyboard: menu.wallets,
				resize_keyboard: true
			}
		});
	}







	if(message.text === "☎️ Помощь") {
		return message.send(`👨🏻‍💻По всем вопросам обращаться к @Qiwi_Supportman
⏱Время работы с 8:00 по 23:00 по МСК`);
	}


//ЦЕНЫ И ПОКУПКА 1
//ЦЕНЫ И ПОКУПКА 1
//ЦЕНЫ И ПОКУПКА 1

	if(message.text === "💰Qiwi LITE" || message.text === "💰Qiwi MEDIUM" || message.text === "💰Qiwi HARD") {
		let amount = message.text === "💰Qiwi LITE" ? "300" : message.text === "💰Qiwi MEDIUM" ? "700" : "1400";
		return message.send(`Для получения товара оплатите этот товар.
На данный момент у нас есть только один способ оплаты - это QIWI.

📲 QIWI для оплаты: <code>${NUMBER}</code> (копируется при нажатии)

💵 Сумма: ${amount}₽

🗒 Комментарий для оплаты: <code>${message.from.id}</code> (копируется при нажатии)

Комментарий обязательно!!! Без него покупка не совершится.

После оплаты нажимайте на кнопку "Проверить оплату"`, {
			 parse_mode: "HTML",
			 reply_markup: {
				inline_keyboard: [
					[
						{ text: "🔄 Проверить оплату", callback_data: "confirm"}
					]
				],

				}
			},
	);
	}

	//ЦЕНЫ И ПОКУПКА 2
    //ЦЕНЫ И ПОКУПКА 2
   //ЦЕНЫ И ПОКУПКА 2

	if(message.text === "💰Qiwi - 1.948р" || message.text === "💰Qiwi - 2.876р" || message.text === "💰Qiwi - 4.784р") {
		let amount = message.text === "💰Qiwi - 1.948р" ? "487" : message.text === "💰Qiwi - 2.876р" ? "719" : "1196";
		return message.send(`Для получения товара оплатите этот товар.
На данный момент у нас есть только один способ оплаты - это QIWI.

📲 QIWI для оплаты: <code>${NUMBER}</code> (копируется при нажатии)

💵 Сумма: ${amount}₽

🗒 Комментарий для оплаты: <code>${message.from.id}</code> (копируется при нажатии)

Комментарий обязательно!!! Без него покупка не совершится.

После оплаты нажимайте на кнопку "Проверить оплату"`, {
			 parse_mode: "HTML",
			 reply_markup: {
				inline_keyboard: [
					[
						{ text: "🔄 Проверить оплату", callback_data: "confirm"}
					]
				],

				}
			},
	);
	}

     //ЦЕНЫ И ПОКУПКА 3
    //ЦЕНЫ И ПОКУПКА 3
   //ЦЕНЫ И ПОКУПКА 3

   if(message.text === "💰Qiwi - 1.000р" || message.text === "💰Qiwi - 2.000р" || message.text === "💰Qiwi - 4.000р") {
	let amount = message.text === "💰Qiwi - 1.000р" ? "250" : message.text === "💰Qiwi - 2.000р" ? "500" : "1000";
	return message.send(`Для получения товара оплатите этот товар.
На данный момент у нас есть только один способ оплаты - это QIWI.

📲 QIWI для оплаты: <code>${NUMBER}</code> (копируется при нажатии)

💵 Сумма: ${amount}₽

🗒 Комментарий для оплаты: <code>${message.from.id}</code> (копируется при нажатии)

Комментарий обязательно!!! Без него покупка не совершится.

После оплаты нажимайте на кнопку "Проверить оплату"`, {
		 parse_mode: "HTML",
		 reply_markup: {
			inline_keyboard: [
				[
					{ text: "🔄 Проверить оплату", callback_data: "confirm"}
				]
			],

			}
		},
);
}

if(message.text === "" || message.text === "" || message.text === "💰Qiwi - 8.000р") {
	let amount = message.text === "" ? "" : message.text === "" ? "" : "2000";
	return message.send(`Для получения товара оплатите этот товар.
На данный момент у нас есть только один способ оплаты - это QIWI.

📲 QIWI для оплаты: <code>${NUMBER}</code> (копируется при нажатии)

💵 Сумма: ${amount}₽

🗒 Комментарий для оплаты: <code>${message.from.id}</code> (копируется при нажатии)

Комментарий обязательно!!! Без него покупка не совершится.

После оплаты нажимайте на кнопку "Проверить оплату"`, {
		 parse_mode: "HTML",
		 reply_markup: {
			inline_keyboard: [
				[
					{ text: "🔄 Проверить оплату", callback_data: "confirm"}
				]
			],

			}
		},
);
}

if(message.text === "💰Qiwi - 4.874р" || message.text === "💰Qiwi - 12.789р" || message.text === "") {
	let amount = message.text === "💰Qiwi - 4.874р" ? "612" : message.text === "💰Qiwi - 12.789р" ? "1598" : "";
	return message.send(`Для получения товара оплатите этот товар.
На данный момент у нас есть только один способ оплаты - это QIWI.

📲 QIWI для оплаты: <code>${NUMBER}</code> (копируется при нажатии)

💵 Сумма: ${amount}₽

🗒 Комментарий для оплаты: <code>${message.from.id}</code> (копируется при нажатии)

Комментарий обязательно!!! Без него покупка не совершится.

После оплаты нажимайте на кнопку "Проверить оплату"`, {
		 parse_mode: "HTML",
		 reply_markup: {
			inline_keyboard: [
				[
					{ text: "🔄 Проверить оплату", callback_data: "confirm"}
				]
			],

			}
		},
);
}

	if(message.text === "🔐 Личный кабинет") {
		return message.send(`Личный кабинет!
➖➖➖➖➖➖➖➖➖➖
📝 Ваш ID: ${message.from.id}

🛒 Ваше количество покупок: 0

Ваша сумма покупок: 0 RUB`, {
			reply_markup: {
				inline_keyboard: [
					[
						{ text: "🔄 Обновить информацию", callback_data: "fakerefresh" }
					],
					[
						{ text: "🎟Ввести промокод", callback_data: "bonuss" }
					],
				    [
					{ text: "🛒История покупок", callback_data: "History" }
				    ]
				]
			}
		});
	}

	if(message.text === "Отзывы🥝") {
		return message.send(`Чтобы посмотреть отзывы нажмите на кнопку ниже.`, {
			reply_markup: {
				inline_keyboard: [
					[
						{ text: "Отзывы🥝", url: `https://t.me/${CHANNEL_USERNAME}` },
					]
				]
			}
		});
	}

	if(message.text === "🤷 Кто мы?") {
		return message.send(`Чтобы посмотреть, нажмите на кнопку ниже.`, {
			reply_markup: {
				inline_keyboard: [
					[
						{ text: "🤷 Кто мы?", url: `https://t.me/${INFO}` }
					]
				]
			}
		});
	}


	if(message.text === "👥Реферальная система") {
		return message.send(`В данном боте включена реферальная система. 

Вы можете привлекать рефералов по активной стратегии, выгоду получают обе стороны.
		
Реферал получает 10% к пополнению.
Вы получите 30% с каждой покупки реферала Ваш на баланс.
		
Ссылка для распространения:  https://t.me/${BOT_USERNAME}?start=${message.from.id}`);
	}
});

bot.on("callback_query", async (query) => {
	if(query.data === "confirm") {
		bot.sendMessage(query.message.chat.id, "Оплата не найдена, проверьте наличие комментария к платежу.");
	}

	if(query.data === "fakerefresh") {
		bot.answerCallbackQuery(query.id, "Профиль обновлён.");
	}
	if(query.data === "bonuss") {
		bot.sendMessage(query.message.chat.id, `Пожалуйста, введите промокод.
		
Если бот ничего не ответил - промокод неверный.
		
В таком случае можете попробовать ввести еще раз.` );
	}
	if(query.data === "History") {
		bot.sendMessage(query.message.chat.id, 'У вас отсутствуют покупки.' );
	}
});


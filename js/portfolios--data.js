

/* Данные портфолио | Инфо добавляем в начало массива (выводятся на страницу в таком же порядке) */
var portfoliosData = [
	{
		title : "SEOBAKER",
		miniature : "https://davinskiy.bitbucket.io/portfolios/seobaker/mini.jpg",
		desc : "Макет на тематику продвижение в поисковых системах, сверстанный на флексах, адаптивно.",
		impress : "Красивый, без каких либо заморочек, макет. + очень адекватный и \
					приятный клиент, что, как всегда, только мотивирует, работотать.",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/seobaker/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/seobaker/full-img.jpg"
	},
	{
		title : "Мужское портмоне | Louis Vuitton",
		miniature : "https://davinskiy.bitbucket.io/portfolios/wallets/mini.jpg",
		desc : "Макет про корманные кошельки. Сверстан адаптивно на флексах. \
				На макете нету, но после верстки был добавлен еще один блок (экран)",
		impress : "То что много слайдеров :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/wallets/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/wallets/full-img.jpg"
	},
	{
		title : "Арена недвижимости",
		miniature : "https://davinskiy.bitbucket.io/portfolios/real-estate-arena/mini.jpg",
		desc : "Очень красивый макет по услугам подбора квартир в питере - бесплатно. Сверстан на флексах.",
		impress : "Довольно простой в использовании макет, с понятным функционалом, что может не порадовать. \
					Плюс, довольно адекватный клиент.",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/real-estate-arena/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/real-estate-arena/full-img.jpg"
	},
	{
		title : "Теплоконтакт",
		miniature : "https://davinskiy.bitbucket.io/portfolios/teplokontakt/mini.jpg",
		desc : "Макет строительного характера, представляющий материалы для обеспечение \
				теплоизоляция домов и других помещений. Был сверстан за 3-4 дня, так как был более чем свободен. \
				Заказчик попался вполне адекватный, что не могло не порадовать. Верстал на флексах.",
		impress : "Удобный макет, без каких-либо дизайнерских заморочек, довольно простой при верстке. \
					Был сверстан, как говорится, на одном дыхание. :) Заказчик был доволен. ",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/teplokontakt/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/teplokontakt/full-image.jpg"
	},
	{
		title : "Дождевики",
		miniature : "https://davinskiy.bitbucket.io/portfolios/Rainers/miniature.jpg",
		desc : "Очень интересный макет лендинга про дождевики. \
				Где можно выбрать себе подходящий по размеру и по вкусу цвета (черный / белый) дождевик.",
		impress : "Интересный, сложный, много JS кода, немного не стандартный, вообщем, отличный макет, побольше бы таких :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/Rainers/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/Rainers/full-img.jpg"
	},
	{
		title : "Авто кредит.Редизайн",
		miniature : "https://davinskiy.bitbucket.io/portfolios/auto-credit.redisign/miniature.jpg ",
		desc : "Очередной макет от постоянного клиента. На этот раз редизайн того макета, \
				что было сверстана мною же. На этот раз договорились, что верстка будет на флексах.",
		impress : "По сути такой же макет, что и раньше, разве что по сложности \
					ощутимо было задний фон видео, что немного украсил однотипную верстку :)",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/auto-credit.redisign/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/auto-credit.redisign/full-img.jpg"
	},
	{
		title : "Я ем",
		miniature : "https://davinskiy.bitbucket.io/portfolios/I-eat/mini.jpg ",
		desc : "Еще один макет от прежней заказчицы. На этот раз немного интересный - про еду :) \
				Верстал на флексах, клиентка снова была довольна работой :)",
		impress : "Верстал долго, за 3 дня )) ибо каждый раз, когда открывал макет в фотошопе, я почему-то слышал зов холодильника..",
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/I-eat/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/I-eat/full-image.png"
	},
	{
		title : "Балтсервис",
		miniature : "https://davinskiy.bitbucket.io/portfolios/BaltService/mini.jpg ",
		desc : 'Классический макет на тематику "спецтехники и их комплектующие". Где-то интересный, где обычный :)',
		impress : 'Наверное, только то, что заказчица, которая обратилась с данным макетом, сама довольно неплохо сверстала его. \
					Но она искала другого испольнителя, так как ее верстка, цитируя, "кривая".',
		url_to_work : "https://davinskiy.bitbucket.io/portfolios/BaltService/index.html",
		url_to_jpg : "https://davinskiy.bitbucket.io/portfolios/BaltService/full-img.jpg"
	},
	{
		title : 'GPS Мониторинга под ключ',
		miniature : 'https://davinskiy.bitbucket.io/portfolios/GPS-monitoring/miniature.jpg',
		desc : 'Еще один макет от одного ранего клиента. Про системы GPS мониторинга. \
				Не совсем понял суть этих мониторингов, но макет довольно интересный. :)) \
				Сверстал на бутстрапе.',
		impress : 'Красота в простоте. :) \
					Но потрудиться все-таки немного пришлось - видеофон на главном экране. :)',
		url_to_work : 'https://davinskiy.bitbucket.io/portfolios/GPS-monitoring/index.html',
		url_to_jpg : 'https://davinskiy.bitbucket.io/portfolios/GPS-monitoring/full-image.jpg'
	},
	{
		title : 'Авто кредит',
		miniature : 'https://davinskiy.bitbucket.io/portfolios/auto-credit/miniature.jpg',
		desc : 'Верстал в то время, когда я немного где-то что-то прочел про БЭМ, \
				но не корректно понял суть. В этом можно убедиться, увидев классы в коде вида \
				"how-we-do__steps__step-items__step__dot-line" и "footer__contacts__form__title_overcase-green". \
				Хотя бы понятно, что где находиться :))',
		impress : 'Первый заказ, сделанный на бутстрапе, и вроде неплохе справился - заказчик был доволен. :)',
		url_to_work : 'https://davinskiy.bitbucket.io/portfolios/auto-credit/index.html',
		url_to_jpg : 'https://davinskiy.bitbucket.io/portfolios/auto-credit/full-image.jpg'
	}
];

export default defineEventHandler((event) => {

	return [
		{
			"id": 2,
			"name": "Агент Ассист",
			"link": "/catalog",
			"list": []
		},
		{
			"id": 1,
			"name": "Информация",
			"link": "",
			"list": [
				{
					"id": 1.1,
					"name": "Заказы",
					"link": "/",
					"list": []
				},
				{
					"id": 1.1,
					"name": "Статистика",
					"link": "/about",
					"list": []
				},
			]
		},
		{
			"id": 3,
			"name": "Помощь",
			"link": "/",
			"list": []
		},
	]

})

import {catalog} from "~/server/utils/cagalog.js";

export default defineEventHandler((event) => {
	const { id } = event.context.params

	// catalog() — это функция, возвращающая массив, вызываем её
	const card = catalog.find((item) => String(item.id) === String(id))

	if (!card) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Card not found',
		})
	}

	return card
})

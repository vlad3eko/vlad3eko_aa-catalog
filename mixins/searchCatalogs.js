export default {
	computed: {
		filteredBlogs() {
			return cards.filter(card => {
				return card.title.match(search)
			})
		}
	}
}

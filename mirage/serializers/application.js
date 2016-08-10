// import { JSONAPISerializer } from 'ember-cli-mirage';

// export default JSONAPISerializer.extend({
// });


import { Serializer } from 'ember-cli-mirage';

export default Serializer.extend({
	serialize(res) {
		let data = [];


		res.models.forEach(function(item, i) {
			let taco = {
				attributes: item.attrs,
				id: i,
				type: 'infinitescrolls'
			};

			data.push(taco);
		});

		let payload = {
			data: data,
			meta: {
				total_pages: 4
			}
		};

		return payload;
	}
});

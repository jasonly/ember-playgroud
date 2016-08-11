// import { JSONAPISerializer } from 'ember-cli-mirage';

// export default JSONAPISerializer.extend({
// });


import { Serializer } from 'ember-cli-mirage';

export default Serializer.extend({
	serialize(res, req) {
		let page = parseInt(req.queryParams.page, 10);
		let per =  parseInt(req.queryParams.per_page, 10);

		let data = [];

		// will need to move this to it's own serializer instead of putting it at the application level
		res.models.forEach(function(item, i) {
			let taco = {
				attributes: item.attrs,
				id: i,
				type: 'infinitescrolls'
			};

			data.push(taco);
		});

		let payload = {
			data: data.slice((page - 1) * per, Math.min((page) * per, data.length)),
			meta: {
				total_pages: Math.ceil(data.length/per)
			}
		};

		console.log('PL: ', payload);

		return payload;
	}
});

'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	create: async (ctx) => {
		let entity;
		entity = await strapi.services.room.create({ ...ctx.request.body, host: ctx.state.user.id });
		return entity;
	}
};

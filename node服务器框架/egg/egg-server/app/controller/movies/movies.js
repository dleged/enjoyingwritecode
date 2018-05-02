'use strict';

const Controller = require('egg').Controller;

class MoviesController extends Controller {
	async list(){
		const ctx = this.ctx;
		const page = ctx.query.page || 1;
		const topMovices = await ctx.service.movies.movies.list();
		topMovices.name = '世界电影票房前5名记录';
		topMovices.egg = this;
		await this.ctx.render('movies/movies.tpl', topMovices);
		console.dir(this.ctx);
	}
}

module.exports = MoviesController;

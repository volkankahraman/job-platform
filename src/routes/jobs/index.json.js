import { jobs } from './_data.js';

export async function get(req, res, next) {
	res.end(JSON.stringify(jobs));
}

export async function post(req, res, next) {
	jobs.push(req.body);

	res.end(JSON.stringify(jobs));
}

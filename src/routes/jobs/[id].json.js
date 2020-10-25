import { jobs } from './_data.js';

export async function get(req, res, next) {
	const { id } = req.params;

	let job = jobs.find((j) => j.id == id);
	if (job) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(job));
	} else {
		res.statusCode = 404;
		res.end(JSON.stringify({ error: 'That job is not exist' }));
	}
}

export async function post(req, res, next) {
	const { id, available } = req.body;

	let foundIndex = jobs.findIndex((j) => j.id == id);
	jobs[foundIndex].available = available;

	res.end();
}

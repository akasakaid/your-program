import axios from 'axios';
import FormData from 'form-data';
import { load } from 'cheerio';
import { createReadStream, PathLike } from 'fs';

function append(data: object) {
	const form = new FormData();
	for (const a of Object.entries(data)) {
		form.append(a[0], a[1]);
	}
	return form;
}

export default async function webp2mp4(file: PathLike): Promise<{ status: number; result: string }> {
	try {
		async function request(form: FormData, file = '') {
			return axios.post(file ? `https://ezgif.com/webp-to-mp4/${file}` : 'https://s6.ezgif.com/webp-to-mp4', form, {
				headers: {
					'user-agent':
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/99.0.1150.30',
					'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Microsoft Edge";v="99"',
					'Content-Type': `multipart/form-data; boundary=${form.getBoundary()}`,
				},
			});
		}
		let form = append({
			'new-image-url': '',
			'new-image': createReadStream(file),
		});
		let $ = load((await request(form)).data);
		const filename = $('input[name="file"]').attr('value');
		form = append({
			file: filename,
			convert: 'Convert WebP to MP4!',
		});
		const response = await request(form, filename);
		$ = load(response.data);
		return {
			status: response.status,
			result: `https:${$('div#output > p.outfile > video > source').attr('src')}`,
		};
	} catch (e) {
		throw e;
	}
}

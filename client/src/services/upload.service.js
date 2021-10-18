import axios from 'axios';

class UploadService {
	constructor() {
		this.app = axios.create({
			baseURL: process.env.REACT_APP_API_URL
		});
	}

	fileUpload = (formData) => this.app.post(`/upload`, formData);
}

export default UploadService;

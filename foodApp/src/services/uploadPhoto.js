import axios from 'axios';
import { nanoid } from 'nanoid';

class Uploader {
    constructor(file) {
        this.id = nanoid(8);
        this.file = file;
        this.progress = 0;
        this.error = '';
        this.axiosController = new AbortController();
    }

    async upload() {
        const url = `${import.meta.env.VITE_CLOUDINARY_URL}${import.meta.env.VITE_CLOUDINARY_NAME}/upload`;

        const formData = new FormData();
        formData.append('file', this.file); 
        formData.append('upload_preset', 'kavishka');
        // formData.append('public_id', this.id);

        console.log('came here 1.1')
        try {

            console.log('came here 1.2')
            const response = await axios.post(url,formData,{
               
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: function (progressEvent) {
                    this.progress = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
                }.bind(this),
                signal: this.axiosController.signal,
            });

            return response.data.secure_url;
        } catch (error) {
            console.log(error)
            if (error.name === 'CanceledError') return;

            this.progress = 0;
            this.error = 'Upload Failed';
            throw new Error('Failed to upload image.', {
                cause: {
                    app: error.message,
                    server: null,
                },
            });
        }
    }
    cancel() {
        this.axiosController.abort();
    }

    async retry() {
        this.error = '';
        return this.upload();
    }
}
export default Uploader;
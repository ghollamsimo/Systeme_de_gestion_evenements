import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);

    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + path.extname(file.originalname);

        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

export default upload;

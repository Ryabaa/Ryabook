const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const uploadPath = path.resolve(__dirname, "..", "..", "upload");
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const deleteFileIfExists = async (userId) => {
    try {
        const directoryPath = path.join("upload");
        const files = await fs.promises.readdir(directoryPath);
        const filesToDelete = files.filter((file) => file.includes(userId));

        for (const file of filesToDelete) {
            const filePath = path.join(directoryPath, file);
            await fs.promises.unlink(filePath);
        }
    } catch (error) {
        console.error(`Error deleting file`, error);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        deleteFileIfExists(req.params.id);
        const uniqueName = req.params.id + uuidv4() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

module.exports = {
    upload,
    deleteFileIfExists,
};

const fs = require("fs");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const deleteFileIfExists = async (userId) => {
    try {
        const directoryPath = path.join("storage", "avatars");
        const files = await fs.promises.readdir(directoryPath);
        const filesToDelete = files.filter((file) => file.includes(userId));

        for (const file of filesToDelete) {
            const filePath = path.join(directoryPath, file);
            await fs.promises.unlink(filePath);
        }
    } catch (error) {
        console.error(`Error deleting files in ${directoryPath}:`, error);
    }
};

const saveFile = (file, directory, userId, callback) => {
    const uniqueName = uuidv4() + userId + path.extname(file.originalname);
    const newFilePath = path.join("storage", directory, uniqueName);
    fs.writeFile(newFilePath, file.buffer, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null, uniqueName);
        }
    });
};

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = {
    deleteFileIfExists,
    saveFile,
    upload,
};

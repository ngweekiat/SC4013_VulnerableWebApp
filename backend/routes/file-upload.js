const express = require('express');
const router = express.router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const UPLOAD_DIR = './uploads';

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!fs.existsSync(UPLOAD_DIR)) {
            fs.mkdirSync(UPLOAD_DIR);
        }
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        // Only allow .txt files
        if (!file.originalname.endsWith('.txt')) {
            return cb(new Error('Only .txt files are allowed'));
        }
        cb(null, true);
    },
});

// File upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    const filePath = path.join(UPLOAD_DIR, req.file.filename);

    try {
        // Read date string from the uploaded file
        const dateStr = fs.readFileSync(filePath, 'utf-8').trim();

        // Vulnerability: Executing the parsed date as part of a shell command
        // Note: For the CTF, we use this command insecurely for demonstration purposes.
        console.log(dateStr);
        const command = `date - d '${dateStr}' + '%A'`;

        exec(command, (error, stdout, stderr) => {
            if (error || stderr) {
                console.error(`Command execution error: ${error || stderr}`);
                return res.status(400).json({ error: 'Invalid date format. Please use YYYY-MM-DD.' });
            }

            return res.status(200).json({ output: stdout.trim() });
        });
    } catch (err) {
        console.error(`Error processing file: ${err.message}`);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
    } else if (err) {
        return res.status(400).json({ error: err.message });
    }
    next();
});

module.exports = router;
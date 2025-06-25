const express = require('express');
const xlsx = require('xlsx');
const path = require('path');
const app = express();  
const fs = require('fs');
const multer = require('multer');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(file.fieldname === 'photos') {
      cb(null, 'uploads/photos/');
    } else if(file.fieldname === 'documents') {
      cb(null, 'uploads/documents/');
    }
    else if(file.fieldname === 'videos') {
      cb(null, 'uploads/videos/');
    }
    else cb(null, 'uploads/others/');
  },
  filename: function (req, file, cb) {
    console.log('File received:', file.originalname);
    // Ensure the filename is unique by prepending the current timestamp
    // This prevents overwriting files with the same name
    cb(null, Date.now() +'_' + file.originalname);
  }
});

const upload = multer({ storage: storage });
app.post('/upload', upload.fields([
  { name: 'photos', maxCount: 1000 },   
  { name: 'documents', maxCount: 100 }, 
  { name: 'videos', maxCount: 100 } 
]), (req, res) => {
  console.log('Files uploaded:', req.files);
  res.send('Files uploaded successfully');
});

 // Buat folder jika belum ada
const folders = ['uploads/photos', 'uploads/documents', 'uploads/videos', 'uploads/others'];
folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
  req.setTimeout(0); // 0 = unlimited
  res.setTimeout(0);
  next();
});

app.use((req, res, next) => {
  console.log('Content-Length:', req.headers['content-length']);
  next();
});

  //start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running . . .`);
});


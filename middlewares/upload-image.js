const multer  = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk');
require('dotenv').config;

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_BUCKET_ACCESSKEY_ID,
    secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESS_KEY,
    region: process.env.AWS_BUCKET_REGION,
});

const imageUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: "public-read",
        key: (req, file, cb) => {
            cb(null, `uploads/${Date.now()}_${file.originalname}}`)
        }
    }),
    limits: {fileSize: 1000 * 1000 * 10}
});

module.exports =imageUpload;
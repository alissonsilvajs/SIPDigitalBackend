import aws from 'aws-sdk';
import crypto from 'crypto';
import multer from 'multer';
import multerS3 from 'multer-s3';

import { resolve } from 'path';

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.key = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, file.key);
      });
    }
  }),
  s3: multerS3({
    s3: new aws.S3({
      endpoint: process.env.MULTER_ENDPOINT,
    }),
    bucket: process.env.MULTER_BUCKET_NAME,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const filename = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, filename);
      });
    }
  }),
};

export default {
  destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes[process.env.MULTER_STORAGE_TYPE],
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/png',
      'image/jpg',
      'image/jpeg',
      'video/mp4',
      'video/webm',
      'video/ogg',
      'application/pdf',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
};

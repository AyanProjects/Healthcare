import {
  CreateBucketCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client
} from "@aws-sdk/client-s3";
import Config from "../config";

const s3 = new S3Client(Config.s3Config);
const Bucket = Config.s3Bucket;

const createBucket = async () => {
  try {
    await s3.send(new CreateBucketCommand({ Bucket }));
    console.log("Success. Bucket created.");
  } catch (err) {
    console.log("Error", err);
  }
};

const uploadFile = async (Key, Body) => {
  try {
    await s3.send(new PutObjectCommand({ Bucket, Key, Body }));
    console.log(`Successfully uploaded data to ${Bucket}/${Key}`);
  } catch (err) {
    console.log("Error", err);
  }
};

const getS3Object = async (Key) => {
  try {
    return await s3.send(new GetObjectCommand({ Bucket, Key }));
  } catch (err) {
    console.log("Error", err);
  }
};

const deleteObject = async (Key) => {
  try {
    await s3.send(new DeleteObjectCommand({ Bucket, Key }));
    console.log(`Deleting object ${Key} from ${Bucket}`);
  } catch (err) {
    console.log("Error", err);
  }
};

export { createBucket, deleteObject, getS3Object, uploadFile };

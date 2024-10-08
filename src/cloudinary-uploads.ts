import cloudinary, {
  UploadApiErrorResponse,
  UploadApiResponse,
} from 'cloudinary';

export function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id: public_id,
        overwrite: overwrite,
        invalidate: invalidate,
        resource_type: 'auto',
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
  });
}

export function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id: public_id,
        overwrite: overwrite,
        invalidate: invalidate,
        resource_type: 'video',
        chunk_size: 50000,
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
  });
}

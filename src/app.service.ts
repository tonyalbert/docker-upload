import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async upload(file: Express.Multer.File)  {
    try {
      if (!file) {
        throw new Error("Arquivo não enviado");
      }

      console.log(file.filename);

      return file;
    } catch(error) {
      console.log(error);
    }
  }
}

import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AppService } from './app.service'
import { FileInterceptor } from "@nestjs/platform-express";
import multerConfig from "./files/multer-config";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.appService.upload(file);
  }
}

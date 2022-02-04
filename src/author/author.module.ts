import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService, PrismaService],
})
export class AuthorModule {}

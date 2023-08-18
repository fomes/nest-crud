import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller'; // Importe o UserController
import { UserService } from './user/user.service'; // Importe o UserService
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Adicione o PrismaModule aos imports
  controllers: [AppController, UserController], // Adicione o UserController aos controllers
  providers: [AppService, UserService], // Adicione o UserService aos providers
})
export class AppModule {}

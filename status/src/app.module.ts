import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [JwtModule.register({
    secret: 'guang',
    signOptions: { expiresIn: '60s' },
  })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

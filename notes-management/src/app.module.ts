import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '你的密码',
      database: '数据库名',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    NotesModule
  ]
})
export class AppModule {}

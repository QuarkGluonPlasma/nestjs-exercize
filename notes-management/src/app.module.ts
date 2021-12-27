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
      password: 'xiaoguang1024',
      database: 'hello',
      autoLoadEntities: true,
      synchronize: true,
    }),
    NotesModule
  ]
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    createNoteDto.createTime = createNoteDto.updateTime = new Date();
    createNoteDto.isDelete = false;
    return await this.noteRepository.save(createNoteDto);
  }

  async findAll() {
    return await this.noteRepository.find();
  }

  async findOne(id: number) {
    return await this.noteRepository.findByIds([id]);
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    updateNoteDto.updateTime = new Date();
    return await this.noteRepository.update(id, updateNoteDto);
  }

  async remove(id: number) {
    return await this.noteRepository.delete(id);
  }
}

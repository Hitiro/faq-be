import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  create(createTagDto: CreateTagDto): Promise<Tag> {
    const tag = this.tagRepository.create(createTagDto);
    return this.tagRepository.save(tag);
  }

  findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  findOne(id: string): Promise<Tag> {
    return this.tagRepository.findOneBy({ id });
  }

  update(id: string, updateTagDto: UpdateTagDto) {
    return this.tagRepository
      .createQueryBuilder()
      .update()
      .set({
        titulo: updateTagDto.titulo,
      })
      .where('id = :id', { id })
      .execute();
  }

  remove(id: string) {
    return this.tagRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}

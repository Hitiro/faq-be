import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/tag/entities/tag.entity';
import { Repository } from 'typeorm';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { Faq } from './entities/faq.entity';

@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(Faq)
    private readonly faqRepository: Repository<Faq>,

    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  create(createFaqDto: CreateFaqDto): Promise<Faq> {
    const faq = this.faqRepository.create(createFaqDto);
    return this.faqRepository.save(faq);
  }

  findAll(): Promise<Faq[]> {
    return this.faqRepository.find({
      relations: ['tags'],
    });
  }

  findOne(id: string): Promise<Faq> {
    return this.faqRepository.findOne({
      where: { id: id },
      relations: ['tags'],
    });
  }

  update(id: string, updateFaqDto: UpdateFaqDto) {
    return this.faqRepository
      .createQueryBuilder()
      .update()
      .set({
        titulo: updateFaqDto.titulo,
        descricao: updateFaqDto.descricao,
      })
      .where('id = :id', { id })
      .execute();
  }

  remove(id: string) {
    return this.faqRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}

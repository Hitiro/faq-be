import { Tag } from 'src/tag/entities/tag.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'faqs' })
export class Faq {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  titulo: string;

  @Column({ type: 'varchar', nullable: true })
  descricao: string;

  @ManyToMany(() => Tag)
  @JoinTable({
    name: 'tb_faq_tags',
    joinColumn: {
      name: 'faq_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags: Tag[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

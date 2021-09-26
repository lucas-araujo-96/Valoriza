import {Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn}
  from 'typeorm';

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {}
}

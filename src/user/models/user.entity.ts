import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ name: 'name', length: 70, nullable: false })
    name: string;
  
    @Column({ name: 'password', length: 180, nullable: false })
    password: string;

    @Column({ name: 'roll', length: 180, nullable: false })
    roll: string;
  }
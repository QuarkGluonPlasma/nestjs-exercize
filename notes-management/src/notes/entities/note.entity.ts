import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Note{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    createTime: Date;

    @Column()
    updateTime: Date;

    @Column()
    isDelete: boolean;
}

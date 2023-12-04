import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: 'varchar',
        name: 'name',
        length:10,
        comment: '名称',
    })
    name:string
    @Column({
        type: 'varchar',
        name: 'pwd',
        length:10,
        comment: '密码',
    })
    pwd:string
    @Column({
        type: 'datetime',
        name: 'init_date',
        comment: '创建时间',
        default: () => 'CURRENT_TIMESTAMP',
    })
    initDate:Date
}

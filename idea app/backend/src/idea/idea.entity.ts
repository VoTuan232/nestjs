import { ApiProperty } from "@nestjs/swagger";
import { CommentEntity } from "src/comment/comment.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('idea')
export class IdeaEntity {
    @ApiProperty({
        type: String
    })
    @PrimaryGeneratedColumn('uuid') id: string;

    @ApiProperty({
        type: Date
    })
    @CreateDateColumn() created: Date;

    @ApiProperty({
        type: Date
    })
    @UpdateDateColumn() updated: Date;

    @ApiProperty({
        type: String
    })
    @Column('text') idea: string;

    @ApiProperty({
        type: String
    })
    @Column('text') description: string;

    @ApiProperty({
        type: UserEntity
    })
    @ManyToOne(type => UserEntity, author => author.ideas)
    author: UserEntity;

    @ApiProperty({
        type: [UserEntity]
    })
    @ManyToMany(type => UserEntity, {cascade: true})
    @JoinTable()
    upvotes: UserEntity[];

    @ApiProperty({
        type: [UserEntity]
    })
    @ManyToMany(type => UserEntity, {cascade: true}) 
    @JoinTable()
    downvotes: UserEntity[];

    @ApiProperty({
    })
    @OneToMany(type => CommentEntity, comment => comment.idea, {cascade: true})
    comments: Comment[];
}
 
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaEntity } from 'src/idea/idea.entity';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CommentDTO } from './comment.dto';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}
  private toResponseObject(comment: CommentEntity) {
      const responseObject: any = comment;
      if (comment.author) {
          responseObject.author = comment.author.toResponseObject(false);
      }

      return comment;
  }
    
  async showByIdea(id: string) {
      const idea = await this.ideaRepository.findOne({where: {id}, relations: ['comments', 'comments.author', 'comments.idea']});

      return idea.comments;
  }

  async showByUser(id: string) {
      const commnents = await this.commentRepository.find({where: {author: id}, relations: ['author']});
      return commnents.map(commnent => this.toResponseObject(commnent));
  }

  async show(id: string) {
      const comment = await this.commentRepository.findOne({where: {id}, relations: ['author', 'idea']});
      return comment;
  }

  async create(ideaId: string, userId: string, data: CommentDTO) {
    const idea = await this.ideaRepository.findOne({where: {id: ideaId}})
    const user = await this.userRepository.findOne({where: {id: userId}})

    const comment = await this.commentRepository.create({...data, author: user, idea});
    await this.commentRepository.save(comment);

    return comment;
  }

  async update(commentId: string, userId: string, data: Partial<CommentDTO>) {
      let comment = await this.commentRepository.findOne({where: {id: commentId}, relations: ['author']})
      if (comment.author.id !== userId) {
        throw new HttpException('You do not own this comment', HttpStatus.UNAUTHORIZED);
      }
      await this.commentRepository.update({id: comment.id}, data);
      comment = await this.commentRepository.findOne({where: {id: commentId}, relations: ['author', 'idea']})
      return this.toResponseObject(comment);
  }

  async delete(id: string, userId: string) {
    const comment = await this.commentRepository.findOne({where: {id}, relations: ['author', 'idea']})

    if (comment.author.id !== userId) {
        throw new HttpException('You do not own this comment', HttpStatus.UNAUTHORIZED);
    }
    await this.commentRepository.remove(comment);
    return comment;
  }
}

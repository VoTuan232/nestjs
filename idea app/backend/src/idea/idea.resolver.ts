import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { CommentService } from '../comment/comment.service';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { AuthGuard } from 'src/shared/auth.guard';

@Resolver()
export class IdeaResolver {
  constructor(
    private ideaService: IdeaService,
    private commentService: CommentService,
  ) {}
  @Query()
  ideas(
    @Args('page') page: number = 1,
    @Args('newest') newest: boolean = false,
  ) {
    return this.ideaService.showAll(page, newest);
  }

  @Query()
  async idea(@Args('id') id: string) {
    return await this.ideaService.read(id);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async createIdea(
    @Args('id') id: string,
    @Args() { idea, description }: IdeaDTO,
    @Context('user') user,
  ) {
    const { id: userId } = user;
    const data = { idea, description };
    return await this.ideaService.create(userId, data);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async updateIdea(
    @Args('id') id: string,
    @Args() { idea, description }: IdeaDTO,
    @Context('user') user,
  ) {
    const { id: userId } = user;
    let data: any = {};
    idea && (data.idea = idea);
    description && (data.description = description);
    return await this.ideaService.update(id, userId, data);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async deleteIdea(@Args('id') id: string, @Context('user') user) {
    const { id: userId } = user;
    return await this.ideaService.delete(id, userId);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async upvote(@Args('id') id: string, @Context('user') user) {
    const { id: userId } = user;
    return await this.ideaService.upvote(id, userId);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async downvote(@Args('id') id: string, @Context('user') user) {
    const { id: userId } = user;
    return await this.ideaService.downvote(id, userId);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async bookmark(@Args('id') id: string, @Context('user') user) {
    const { id: userId } = user;
    return await this.ideaService.bookmark(id, userId);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async unbookmark(@Args('id') id: string, @Context('user') user) {
    const { id: userId } = user;
    return await this.ideaService.unbookmark(id, userId);
  }

  @ResolveProperty()
  async comments(@Parent() idea) {
    const { id } = idea;
    return await this.commentService.showByIdea(id);
  }
}

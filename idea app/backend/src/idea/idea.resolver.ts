import { Resolver, Query, Args } from "@nestjs/graphql";
import { IdeaService } from "./idea.service";

@Resolver()
export class IdeaResolver {
    constructor(private ideaService: IdeaService) {}
    @Query()
    ideas(@Args('page') page: number = 1, @Args('newest') newest: boolean = false) {
        return this.ideaService.showAll(page, newest);
    }
}
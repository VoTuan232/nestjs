import { Module } from "@nestjs/common";
import { CatController } from "src/cats/cat.controller";
import { CatService } from "src/cats/cat.service";

@Module({
    controllers: [CatController],
    providers: [CatService],
    // exports: [CatService]
    exports: [CatsModule, CatService]
})
export class CatsModule {}

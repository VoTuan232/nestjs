import { Module } from "@nestjs/common";
import { CatsModule } from "src/cats/cat.module";
import { CatService } from "src/cats/cat.service";
import { TestController } from "./test.controller";

@Module({
    imports: [CatsModule],
    controllers: [TestController],
    // providers: [CatService]
})
export class TestModule {}

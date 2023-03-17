import { Module } from "@nestjs/common";
import { WishesService } from "./wishes.service";
import { WishesController } from "./wishes.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Wish } from "./entities/wish.entity";
import { UsersModule } from "../users/users.module";

@Module({
    imports: [TypeOrmModule.forFeature([Wish]), UsersModule],
    controllers: [WishesController],
    providers: [WishesService],
    exports: [WishesService],
})
export class WishesModule {}

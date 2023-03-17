import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Wish } from "../../wishes/entities/wish.entity";
import { IsBoolean, IsNumber } from "class-validator";

@Entity({ name: "offers" })
export class Offer {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column("numeric", { scale: 2 })
    @IsNumber()
    amount: number;

    @Column({ default: false })
    @IsBoolean()
    hidden: boolean;

    @ManyToOne(() => User, (user) => user.offers)
    user: User;

    @ManyToOne(() => Wish, (wish) => wish.offers, { onDelete: "CASCADE" })
    item: Wish;
}

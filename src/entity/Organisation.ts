import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, UpdateDateColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";

@ObjectType()
@Entity()
export class Organisation extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  legalName: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  phone: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  street: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  zip: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  city: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  country: string;

  @Field({ nullable: true })
  @Column("text", { unique: true, nullable: true })
  vatId: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  logoUrl: string;

  @Field()
  @Column("uuid", { nullable: true })
  ownerId: string;

  @Field(() => User)
  @ManyToOne(() => User, user => user.organisation)
  owner: Promise<User>;

  @OneToMany(() => User, member => member.organisation)
  members: Promise<User>;

  @Field()
  @CreateDateColumn({ type: "timestamp with time zone" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updatedAt: Date;
}

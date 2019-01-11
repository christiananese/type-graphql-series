import { Length, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class OrganisationInput {

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(1, 255)
  name: string;

  @Field({ nullable: true })
  @Length(1, 255)
  legalName: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  street: string;

  @Field({ nullable: true })
  zip: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  vatId: string;

  @Field({ nullable: true })
  logoUrl: string;
}

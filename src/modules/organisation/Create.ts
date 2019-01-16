import { Resolver, /* Query, */ Mutation, Arg, Ctx } from "type-graphql";

import { OrganisationInput } from "./create/OrganisationInput";
import { Organisation } from "../../entity/Organisation";
import { MyContext } from "src/types/MyContext";

@Resolver()
export class CreateOrganisationResolver {
  @Mutation(() => Organisation)
  async createOrganisation(@Ctx() ctx: MyContext, @Arg("data")
  {
    email,
    name,
    legalName,
    vatId,
    street,
    city,
    country,
    zip
  }: OrganisationInput): Promise<Organisation | null> {


    if (!ctx.req.session || !ctx.req.session.userId) {
      return null;
    }

    const organisation = await Organisation.create({
      email,
      name,
      legalName,
      vatId,
      street,
      city,
      country,
      zip,
      ownerId: ctx.req.session!.userId
    })
    .save();

    return organisation;
  }
}

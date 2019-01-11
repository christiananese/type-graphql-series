import { Resolver, /* Query, */ Mutation, Arg } from "type-graphql";

import { OrganisationInput } from "./create/OrganisationInput";
import { Organisation } from "../../entity/Organisation";

@Resolver()
export class CreateOrganisationResolver {
  @Mutation(() => Organisation)
  async createOrganisation(@Arg("data")
  {
    email,
    name,
    legalName,
    vatId,
    street,
    city,
    country,
    zip
  }: OrganisationInput): Promise<Organisation> {

    const organisation = await Organisation.create({
      email,
      name,
      legalName,
      vatId,
      street,
      city,
      country,
      zip
    }).save();

    return organisation;
  }
}

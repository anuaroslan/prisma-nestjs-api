import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookCreateWithoutAuthorInput {

    @Field(() => String, {nullable:false})
    title!: string;
}

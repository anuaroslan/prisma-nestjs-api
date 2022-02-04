import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateNestedManyWithoutAuthorInput } from '../book/book-create-nested-many-without-author.input';

@InputType()
export class AuthorCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => BookCreateNestedManyWithoutAuthorInput, {nullable:true})
    Books?: BookCreateNestedManyWithoutAuthorInput;
}

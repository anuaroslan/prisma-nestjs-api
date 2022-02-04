import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookUncheckedCreateNestedManyWithoutAuthorInput } from '../book/book-unchecked-create-nested-many-without-author.input';

@InputType()
export class AuthorUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => BookUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Books?: BookUncheckedCreateNestedManyWithoutAuthorInput;
}

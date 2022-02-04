import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookScalarWhereInput } from './book-scalar-where.input';
import { BookUpdateManyMutationInput } from './book-update-many-mutation.input';

@InputType()
export class BookUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => BookScalarWhereInput, {nullable:false})
    where!: BookScalarWhereInput;

    @Field(() => BookUpdateManyMutationInput, {nullable:false})
    data!: BookUpdateManyMutationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateWithoutAuthorInput } from './book-update-without-author.input';

@InputType()
export class BookUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: BookWhereUniqueInput;

    @Field(() => BookUpdateWithoutAuthorInput, {nullable:false})
    data!: BookUpdateWithoutAuthorInput;
}

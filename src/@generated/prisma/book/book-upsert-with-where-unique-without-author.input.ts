import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateWithoutAuthorInput } from './book-update-without-author.input';
import { BookCreateWithoutAuthorInput } from './book-create-without-author.input';

@InputType()
export class BookUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: BookWhereUniqueInput;

    @Field(() => BookUpdateWithoutAuthorInput, {nullable:false})
    update!: BookUpdateWithoutAuthorInput;

    @Field(() => BookCreateWithoutAuthorInput, {nullable:false})
    create!: BookCreateWithoutAuthorInput;
}

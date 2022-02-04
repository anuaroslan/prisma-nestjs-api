import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutBooksInput } from './author-update-without-books.input';
import { AuthorCreateWithoutBooksInput } from './author-create-without-books.input';

@InputType()
export class AuthorUpsertWithoutBooksInput {

    @Field(() => AuthorUpdateWithoutBooksInput, {nullable:false})
    update!: AuthorUpdateWithoutBooksInput;

    @Field(() => AuthorCreateWithoutBooksInput, {nullable:false})
    create!: AuthorCreateWithoutBooksInput;
}

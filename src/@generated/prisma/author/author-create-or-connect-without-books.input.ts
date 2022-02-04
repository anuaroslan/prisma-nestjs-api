import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorCreateWithoutBooksInput } from './author-create-without-books.input';

@InputType()
export class AuthorCreateOrConnectWithoutBooksInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: AuthorWhereUniqueInput;

    @Field(() => AuthorCreateWithoutBooksInput, {nullable:false})
    create!: AuthorCreateWithoutBooksInput;
}

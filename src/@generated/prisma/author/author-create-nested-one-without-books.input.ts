import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutBooksInput } from './author-create-without-books.input';
import { AuthorCreateOrConnectWithoutBooksInput } from './author-create-or-connect-without-books.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutBooksInput {

    @Field(() => AuthorCreateWithoutBooksInput, {nullable:true})
    create?: AuthorCreateWithoutBooksInput;

    @Field(() => AuthorCreateOrConnectWithoutBooksInput, {nullable:true})
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: AuthorWhereUniqueInput;
}

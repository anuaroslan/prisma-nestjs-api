import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutBooksInput } from './author-create-without-books.input';
import { AuthorCreateOrConnectWithoutBooksInput } from './author-create-or-connect-without-books.input';
import { AuthorUpsertWithoutBooksInput } from './author-upsert-without-books.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateWithoutBooksInput } from './author-update-without-books.input';

@InputType()
export class AuthorUpdateOneWithoutBooksInput {

    @Field(() => AuthorCreateWithoutBooksInput, {nullable:true})
    create?: AuthorCreateWithoutBooksInput;

    @Field(() => AuthorCreateOrConnectWithoutBooksInput, {nullable:true})
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput;

    @Field(() => AuthorUpsertWithoutBooksInput, {nullable:true})
    upsert?: AuthorUpsertWithoutBooksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: AuthorWhereUniqueInput;

    @Field(() => AuthorUpdateWithoutBooksInput, {nullable:true})
    update?: AuthorUpdateWithoutBooksInput;
}

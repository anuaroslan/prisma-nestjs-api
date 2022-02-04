import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutAuthorInput } from './book-create-without-author.input';
import { BookCreateOrConnectWithoutAuthorInput } from './book-create-or-connect-without-author.input';
import { BookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class BookCreateNestedManyWithoutAuthorInput {

    @Field(() => [BookCreateWithoutAuthorInput], {nullable:true})
    create?: Array<BookCreateWithoutAuthorInput>;

    @Field(() => [BookCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<BookCreateOrConnectWithoutAuthorInput>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    connect?: Array<BookWhereUniqueInput>;
}

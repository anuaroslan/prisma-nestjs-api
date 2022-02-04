import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutAuthorInput } from './book-create-without-author.input';
import { BookCreateOrConnectWithoutAuthorInput } from './book-create-or-connect-without-author.input';
import { BookUpsertWithWhereUniqueWithoutAuthorInput } from './book-upsert-with-where-unique-without-author.input';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateWithWhereUniqueWithoutAuthorInput } from './book-update-with-where-unique-without-author.input';
import { BookUpdateManyWithWhereWithoutAuthorInput } from './book-update-many-with-where-without-author.input';
import { BookScalarWhereInput } from './book-scalar-where.input';

@InputType()
export class BookUncheckedUpdateManyWithoutAuthorInput {

    @Field(() => [BookCreateWithoutAuthorInput], {nullable:true})
    create?: Array<BookCreateWithoutAuthorInput>;

    @Field(() => [BookCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<BookCreateOrConnectWithoutAuthorInput>;

    @Field(() => [BookUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<BookUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    set?: Array<BookWhereUniqueInput>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookWhereUniqueInput>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    delete?: Array<BookWhereUniqueInput>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    connect?: Array<BookWhereUniqueInput>;

    @Field(() => [BookUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<BookUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [BookUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<BookUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [BookScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookScalarWhereInput>;
}

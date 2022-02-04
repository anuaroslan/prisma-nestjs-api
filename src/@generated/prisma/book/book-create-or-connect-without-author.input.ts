import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookCreateWithoutAuthorInput } from './book-create-without-author.input';

@InputType()
export class BookCreateOrConnectWithoutAuthorInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    where!: BookWhereUniqueInput;

    @Field(() => BookCreateWithoutAuthorInput, {nullable:false})
    create!: BookCreateWithoutAuthorInput;
}

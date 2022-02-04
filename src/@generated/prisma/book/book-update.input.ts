import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AuthorUpdateOneWithoutBooksInput } from '../author/author-update-one-without-books.input';

@InputType()
export class BookUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => AuthorUpdateOneWithoutBooksInput, {nullable:true})
    Author?: AuthorUpdateOneWithoutBooksInput;
}

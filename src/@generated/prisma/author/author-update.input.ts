import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookUpdateManyWithoutAuthorInput } from '../book/book-update-many-without-author.input';

@InputType()
export class AuthorUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BookUpdateManyWithoutAuthorInput, {nullable:true})
    Books?: BookUpdateManyWithoutAuthorInput;
}

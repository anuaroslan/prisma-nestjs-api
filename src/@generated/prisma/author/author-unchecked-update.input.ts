import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookUncheckedUpdateManyWithoutAuthorInput } from '../book/book-unchecked-update-many-without-author.input';

@InputType()
export class AuthorUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BookUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    Books?: BookUncheckedUpdateManyWithoutAuthorInput;
}

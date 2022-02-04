import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class BookScalarWhereInput {

    @Field(() => [BookScalarWhereInput], {nullable:true})
    AND?: Array<BookScalarWhereInput>;

    @Field(() => [BookScalarWhereInput], {nullable:true})
    OR?: Array<BookScalarWhereInput>;

    @Field(() => [BookScalarWhereInput], {nullable:true})
    NOT?: Array<BookScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;
}

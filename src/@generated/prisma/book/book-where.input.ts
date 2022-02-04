import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AuthorRelationFilter } from '../author/author-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class BookWhereInput {

    @Field(() => [BookWhereInput], {nullable:true})
    AND?: Array<BookWhereInput>;

    @Field(() => [BookWhereInput], {nullable:true})
    OR?: Array<BookWhereInput>;

    @Field(() => [BookWhereInput], {nullable:true})
    NOT?: Array<BookWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => AuthorRelationFilter, {nullable:true})
    Author?: AuthorRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;
}

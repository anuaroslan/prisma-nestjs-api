import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BookListRelationFilter } from '../book/book-list-relation-filter.input';

@InputType()
export class AuthorWhereInput {

    @Field(() => [AuthorWhereInput], {nullable:true})
    AND?: Array<AuthorWhereInput>;

    @Field(() => [AuthorWhereInput], {nullable:true})
    OR?: Array<AuthorWhereInput>;

    @Field(() => [AuthorWhereInput], {nullable:true})
    NOT?: Array<AuthorWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BookListRelationFilter, {nullable:true})
    Books?: BookListRelationFilter;
}

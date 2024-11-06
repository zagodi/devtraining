import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1730914795195 } from 'src/migrations/1730914795195-CreateCoursesTable';
import { CreateTagsTable1730919039293 } from 'src/migrations/1730919039293-CreateTagsTable';
import { CreateCoursesTagsTable1730919978936 } from 'src/migrations/1730919978936-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1730920404447 } from 'src/migrations/1730920404447-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1730921352089 } from 'src/migrations/1730921352089-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1730914795195,
    CreateTagsTable1730919039293,
    CreateCoursesTagsTable1730919978936,
    AddCoursesIdToCoursesTagsTable1730920404447,
    AddTagsIdToCoursesTagsTable1730921352089,
  ],
});

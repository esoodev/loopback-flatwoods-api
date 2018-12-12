import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {User} from '../models';
import {InmemorydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.userId
> {
  constructor(
    @inject('datasources.inmemorydb') dataSource: InmemorydbDataSource,
  ) {
    super(User, dataSource);
  }
}

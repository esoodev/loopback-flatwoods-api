import {
  BelongsToAccessor,
  DefaultCrudRepository,
  juggler,
  repository,
  createBelongsToAccessor,
  RelationType,
} from '@loopback/repository';
import {GameProfile, User} from '../models';
import {InmemorydbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class GameProfileRepository extends DefaultCrudRepository<
  GameProfile,
  typeof GameProfile.prototype.gameProfileId
> {
  public readonly user: BelongsToAccessor<
    User,
    typeof GameProfile.prototype.gameProfileId
  >;

  constructor(
    @inject('datasources.inmemorydb') dataSource: InmemorydbDataSource,
    @repository.getter('UserRepository')
    userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(GameProfile, dataSource);
    this.user = this._createBelongsToAccessorFor('user', userRepositoryGetter);
  }
}

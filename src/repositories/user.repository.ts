import {
  DefaultCrudRepository,
  juggler,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {User, GameProfile} from '../models';
import {InmemorydbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {GameProfileRepository} from './game-profile.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.userId
> {
  public readonly gameProfiles: HasManyRepositoryFactory<
    GameProfile,
    typeof GameProfile.prototype.gameProfileId
  >;

  constructor(
    @inject('datasources.inmemorydb') dataSource: InmemorydbDataSource,
    @repository.getter('GameProfileRepository')
    getGameProfileRepository: Getter<GameProfileRepository>,
  ) {
    super(User, dataSource);
    this.gameProfiles = this._createHasManyRepositoryFactoryFor(
      'gameProfiles',
      getGameProfileRepository,
    );
  }
}

import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {GameProfile} from '../models';
import {InmemorydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GameProfileRepository extends DefaultCrudRepository<
  GameProfile,
  typeof GameProfile.prototype.gameProfileId
> {
  constructor(
    @inject('datasources.inmemorydb') dataSource: InmemorydbDataSource,
  ) {
    super(GameProfile, dataSource);
  }
}

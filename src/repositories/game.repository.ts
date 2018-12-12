import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Game} from '../models';
import {InmemorydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GameRepository extends DefaultCrudRepository<
  Game,
  typeof Game.prototype.gameId
> {
  constructor(
    @inject('datasources.inmemorydb') dataSource: InmemorydbDataSource,
  ) {
    super(Game, dataSource);
  }
}

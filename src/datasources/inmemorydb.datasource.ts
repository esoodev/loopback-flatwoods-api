import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './inmemorydb.datasource.json';

export class InmemorydbDataSource extends juggler.DataSource {
  static dataSourceName = 'inmemorydb';

  constructor(
    @inject('datasources.config.inmemorydb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

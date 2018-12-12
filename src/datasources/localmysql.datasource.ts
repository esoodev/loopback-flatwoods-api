import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './localmysql.datasource.json';

export class LocalmysqlDataSource extends juggler.DataSource {
  static dataSourceName = 'localmysql';

  constructor(
    @inject('datasources.config.localmysql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

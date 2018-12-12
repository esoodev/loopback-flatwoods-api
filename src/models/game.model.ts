import {Entity, model, property, hasMany} from '@loopback/repository';
import {GameProfile} from './game-profile.model';

@model()
export class Game extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  gameId?: number;

  @property({
    type: 'string',
    required: true,
  })
  gameName: string;

  @property({
    type: 'string',
  })
  developerName?: string;

  @property({
    type: 'string',
  })
  publisherName?: string;

  @property({
    type: 'date',
  })
  createdAt?: string;

  @hasMany(() => GameProfile)
  gameProfiles?: GameProfile[];

  constructor(data?: Partial<Game>) {
    super(data);
  }
}

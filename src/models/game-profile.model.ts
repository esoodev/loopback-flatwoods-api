import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User, Game} from './';

@model()
export class GameProfile extends Entity {
  @property({
    type: 'string',
    required: true,
    id: true,
  })
  gameProfileId?: number;

  @property({
    type: 'string',
  })
  gameProfileNickname: string;

  @property({
    type: 'number',
    default: 1,
  })
  statusId?: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  @belongsTo(() => User)
  userId: number;

  @belongsTo(() => Game)
  gameId: number;

  constructor(data?: Partial<GameProfile>) {
    super(data);
  }
}

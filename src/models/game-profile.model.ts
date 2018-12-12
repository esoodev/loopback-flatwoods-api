import {Entity, model, property} from '@loopback/repository';

@model()
export class GameProfile extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  gameProfileId?: number;

  @property({
    type: 'string',
  })
  gameProfileNickname: string;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'number',
    required: true,
  })
  gameId: number;

  @property({
    type: 'number',
    default: 0,
  })
  statusId?: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  constructor(data?: Partial<GameProfile>) {
    super(data);
  }
}

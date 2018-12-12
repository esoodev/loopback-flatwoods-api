import {Entity, model, property} from '@loopback/repository';

interface packageItem {
  itemId: number;
  itemCount: number;
}

@model()
export class Package extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  packageId?: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  packageItems: packageItem[];

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  constructor(data?: Partial<Package>) {
    super(data);
  }
}

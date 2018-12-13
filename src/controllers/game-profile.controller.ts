import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {GameProfile} from '../models';
import {GameProfileRepository} from '../repositories';

export class GameProfileController {
  constructor(
    @repository(GameProfileRepository)
    public gameProfileRepository : GameProfileRepository,
  ) {}

  @post('/game-profiles', {
    responses: {
      '200': {
        description: 'GameProfile model instance',
        content: {'application/json': {schema: {'x-ts-type': GameProfile}}},
      },
    },
  })
  async create(@requestBody() gameProfile: GameProfile): Promise<GameProfile> {
    return await this.gameProfileRepository.create(gameProfile);
  }

  @get('/game-profiles/count', {
    responses: {
      '200': {
        description: 'GameProfile model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(GameProfile)) where?: Where,
  ): Promise<Count> {
    return await this.gameProfileRepository.count(where);
  }

  @get('/game-profiles', {
    responses: {
      '200': {
        description: 'Array of GameProfile model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': GameProfile}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(GameProfile)) filter?: Filter,
  ): Promise<GameProfile[]> {
    return await this.gameProfileRepository.find(filter);
  }

  @patch('/game-profiles', {
    responses: {
      '200': {
        description: 'GameProfile PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() gameProfile: GameProfile,
    @param.query.object('where', getWhereSchemaFor(GameProfile)) where?: Where,
  ): Promise<Count> {
    return await this.gameProfileRepository.updateAll(gameProfile, where);
  }

  @get('/game-profiles/{id}', {
    responses: {
      '200': {
        description: 'GameProfile model instance',
        content: {'application/json': {schema: {'x-ts-type': GameProfile}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<GameProfile> {
    return await this.gameProfileRepository.findById(id);
  }

  @patch('/game-profiles/{id}', {
    responses: {
      '204': {
        description: 'GameProfile PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() gameProfile: GameProfile,
  ): Promise<void> {
    await this.gameProfileRepository.updateById(id, gameProfile);
  }

  @del('/game-profiles/{id}', {
    responses: {
      '204': {
        description: 'GameProfile DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.gameProfileRepository.deleteById(id);
  }
}

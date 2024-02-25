import { Sequelize } from 'sequelize-typescript';
import ProductModel from '../../../infrastructure/product/repository/sequelize/product.model';
import ProductRepository from '../../../infrastructure/product/repository/sequelize/product.repository';
import { CreateProductUseCase } from './create.product.usecase';

describe('Test create product use case', () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it('should create a new product', async () => {
    const productRepository = new ProductRepository();
    const usecase = new CreateProductUseCase(productRepository);

    const input = {
      id: 'P1',
      name: 'Pincel',
      price: 100,
    };

    const output = {
      id: 'P1',
      name: 'Pincel',
      price: 200,
    };

    const result = await usecase.execute(input);

    expect(output).toEqual(output)
  });
});
import { RouteDynamicModule } from './route-dynamic.module';

describe('RouteDynamicModule', () => {
  let routeDynamicModule: RouteDynamicModule;

  beforeEach(() => {
    routeDynamicModule = new RouteDynamicModule();
  });

  it('should create an instance', () => {
    expect(routeDynamicModule).toBeTruthy();
  });
});

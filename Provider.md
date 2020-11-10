- Fundamental
- Many classes such: services, repositories, factories, helper,...
- Idea: inject dependencies, this means objects can create various relationships with each other
- with decorator @Injectable()

* DI
constructor(private catsService: CatsService) {}
- Create and return instance of CatsService

* Custom provider
- Use IOC: invertion of control to resolves relationship between providers.

* Optional Provider
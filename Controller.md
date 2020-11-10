Controllers are responsible for handling incoming requests and returning responses to the client.

- Co che routing dieu khien controller nao nhan request nao.

- 1 controller co nhieu route, moi route co 1 action khac nhau

- @Controller() decorator, which is required to define a basic controller

- @Controller('cats'): optional route path prefix, easily group a set of related routes, and minimize repetitive code 
=> we don't have to repeat that portion of the path for each route in the file.

- Note that the method name we choose here is completely arbitrary (tuy y) - Why ? 
=> Nest employs two different options for manipulating responses:
1. Standard (recommended)
2. Library-specific mode

* Req Object
Note that when you inject either @Res() or @Response() in a method handler, you put Nest into Library-specific mode for that handler, and you become responsible for managing the response. 

* Resources
@Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), and @Head(). In addition, @All() defines an endpoint that handles all of them.

* Route wildcards
Pattern based routes are supported as well: @Get('ab*cd'): match abcd, ab_cd, abecd

* Status code
the response status code is always 200 by default, except for POST requests which are 201
We can easily change this behavior by adding the @HttpCode(...) decorator at a handler level.

* Header
@Header('Cache-Control', 'none')

* Redirection
To redirect a response to a specific URL : @Redirect('https://nestjs.com', 301)

* Route Parameter
findOne(@Param() params)
findOne(@Param('id') id)

* Sub domain routing

* Scopes
almost everything is shared across incoming requests
We have a connection pool to the database, singleton services with global state, etc

* Async

* Request payload
DTO: shoud use classes
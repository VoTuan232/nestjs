throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

* Override
throw new HttpException({
    status: HttpStatus.FORBIDDEN,
    error: 'This is a custom message',
  }, HttpStatus.FORBIDDEN);

  -Prefer applying filters by using classes instead of instances when possible. 
  It reduces memory usage since Nest can easily reuse instances of the same class across your entire module.
  - use Class: @UseFilters(HttpExceptionFilter)
  - use instance: @UseFilters(new HttpExceptionFilter())

- Apply scope: method, controller, global,...
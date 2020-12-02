- https://www.youtube.com/watch?v=LQWwVDh3Vx4&list=PLBeQxJQNprbiJm55q7nTAfhMmzIC8MWxc&index=5&ab_channel=KelvinMai
### Overview
- Authentication user
- User crud idea
- user upvote/downvote ideas
- User bookmark ideas (many to many relation =>join table)
- User comment ideas
- Ideas can see realtime

### First Setting
- npm i dotenv

### Database Connection
- npm i pg typeorm pg @nestjs/typeorm
- touch ormconfig.json

### Validation Errors, Logging
- npm i class-transformer class-validator

### User Modules
- npm i bcryptjs jsonwebtoken
- npm i @types/jsonwebtoken @types/bcryptjs --save-dev

### Fake data
App Idea Generator - https://appideagenerator.com/
FakerJS - https://github.com/marak/Faker.js/
- mkdir data-loader
- npm init -y
- touch index.js
- npm i faker axios

### Intergrate GrapQL
- npm i @nestjs/graphql graphql apollo-server-express graphql-tools
- npm i @nestjs/common @nestjs/core (Update)
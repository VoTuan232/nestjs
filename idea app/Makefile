create:
	docker-compose exec ideas-app sh -c 'nest new front'

run:
	docker-compose exec ideas-app sh -c 'cd front && npm run start:dev'

front-access:
	docker-compose exec ideas-app sh
pg-access:
	docker-compose exec pgdb bash

pg-run:
	docker-compose exec pgdb bash -c 'psql ideas-app'

create-backend:
	docker-compose exec ideas-app sh -c 'nest new backend'

create-frontend:
	docker-compose exec ideas-app sh -c 'npx create-react-app frontend'

backend-run:
	docker-compose exec ideas-app sh -c 'cd backend && npm run start:dev'

frontend-run:
	docker-compose exec ideas-app sh -c 'cd frontend && npm run start'

access:
	docker-compose exec ideas-app sh
	
pg-access:
	docker-compose exec pgdb bash

pg-run:
	docker-compose exec pgdb bash -c 'psql ideas-app'

chown:
	sudo chown -R $(USER):$(USER) .

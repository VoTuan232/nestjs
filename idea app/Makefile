create-backend:
	docker-compose exec ideas-app sh -c 'nest new backend'

create-frontend-order:
	docker-compose exec ideas-app sh -c 'npm install -g @angular/cli && ng new frontend-order'

create-frontend-payment:
	docker-compose exec ideas-app sh -c 'sudo npx create-react-app frontend-payment'

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

run-fake-data:
	docker-compose exec ideas-app sh -c 'cd data-loader && npm i && node index.js'

chown:
	sudo chown -R $(USER):$(USER) .

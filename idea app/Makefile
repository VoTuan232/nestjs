create-backend:
	docker-compose exec ideas-app sh -c 'nest new backend'

create-frontend:
	docker-compose exec ideas-app sh -c 'npm install -g @angular/cli && ng new frontend'

create-frontend-payment:
	docker-compose exec ideas-app sh -c 'sudo npx create-react-app frontend-payment'

# create-frontend:
# 	docker-compose exec ideas-app sh -c 'npx create-react-app frontend'

# create-frontend:
# 	docker-compose exec ideas-app sh -c 'ng new frontend'

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

fake-data-run:
	docker-compose exec ideas-app sh -c 'cd data-loader && npm i && node index.js'

# chown:
# 	sudo chown -R $(USER):$(USER) .
	# sudo chown -R votuan:votuan *

# chown
	# docker-compose exec ideas-app sh -c 'mkdir ~/.npm-global && npm config set prefix '~/.npm-global && export PATH=~/.npm-global/bin:$PATH'

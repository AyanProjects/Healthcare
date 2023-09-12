init-docker:
	@echo "Installing docker"
	@bash ./docker.sh

setup:
	@cat /dev/null > traefik/accesslog.txt
	@install -m 600 /dev/null traefik/acme.json
	@echo "\n====>Building Containers for local environment<==================\n"
	@docker-compose build
	@echo "\n====>Running Yarn Install for local environment<=================\n"
	@docker-compose run --rm --no-deps frontend yarn
	@docker-compose run --rm --no-deps backend yarn
	@echo "\n====>Completed Setup for local environment<==============\n"

up:
	@echo "\n====>Taking down running containers if any!<==================\n"
	@docker-compose down
	@echo "\n====>Run Yarn install if any!<=================\n"
	@docker-compose run --rm --no-deps frontend yarn
	@docker-compose run --rm --no-deps backend yarn
	@echo "\n====>Taking down running containers if any!<==================\n"
	@docker-compose down
	@echo "\n====>Starting Services using Docker for local environment<=============\n"
	@docker-compose up

attach:
	@echo "\n====>Attaching to Backend console<=========\n"
	@docker attach healthcare_backend

build:
	@echo "\n====>Building Frontend(Cleaning Old Build files, Install new packages)<==============\n"
	@docker-compose run --rm --no-deps frontend sh -c "rm -rf build \
						&& yarn install \
						&& yarn build \
						&& rm -rf serving \
						&& cp -r build serving"


down:
	@echo "\n====>Taking down any running containers<==============\n"
	@docker-compose down

frontend-run:
	@echo "\n====>Attaching to Frontend shell<=========\n"
	@docker-compose run --rm --no-deps frontend bash

backend-run:
	@echo "\n====>Attaching to Backend shell<=========\n"
	@docker-compose run --rm backend bash

# A list of apps located in /apps that we need to build images for
apps = ['backend', 'frontend']

sync_source = sync('.', '/usr/src/app');
install_deps = run('npm i', trigger='package.json')

# This function will define a docker build step for the provided application.
def build_app(name):
    image_name = 'yolkai/{}'.format(name)
    context = '.'
    dockerfile = './apps/{}/Dockerfile'.format(name)

    docker_build(image_name, context, dockerfile=dockerfile, live_update=[sync_source, install_deps])

# Build the base image that includes node_modules and source code
docker_build('yolkai/base', '.')

# Build image for each application
[build_app(name) for name in apps]

# Instruct Tilt to deploy containers with Docker Compose
docker_compose('./docker-compose.yml')

# A list of local resources for running helpful commands from the Tilt web UI
local_resource('migrate', cmd='docker exec tilt_backend_1 /bin/bash -c "cd apps/backend/src && npx sequelize-cli db:migrate"',
    trigger_mode=TRIGGER_MODE_MANUAL, auto_init=False
)
local_resource('rollback last', cmd='docker exec tilt_backend_1 /bin/bash -c "cd apps/backend/src && npx sequelize-cli db:migrate:undo"',
    trigger_mode=TRIGGER_MODE_MANUAL, auto_init=False
)
local_resource('rollback all', cmd='docker exec tilt_backend_1 /bin/bash -c "cd apps/backend/src && npx sequelize-cli db:migrate:undo"',
    trigger_mode=TRIGGER_MODE_MANUAL, auto_init=False
)
local_resource('seed', cmd='docker exec tilt_backend_1 /bin/bash -c "cd apps/backend/src && npx sequelize-cli db:seed:all"',
    trigger_mode=TRIGGER_MODE_MANUAL, auto_init=False
)
local_resource('unseed', cmd='docker exec tilt_backend_1 /bin/bash -c "cd apps/backend/src && npx sequelize-cli db:seed:undo:all"',
    trigger_mode=TRIGGER_MODE_MANUAL, auto_init=False
)

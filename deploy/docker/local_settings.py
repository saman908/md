# Docker local settings for MediaCMS / ZanaCloud
# This file is copied to cms/local_settings.py by deploy/docker/entrypoint.sh
# It overrides cms/settings.py so the app can reach the Postgres and Redis
# containers by their docker-compose service names (db, redis).

FRONTEND_HOST = "http://localhost"

POSTGRES_HOST = "db"
REDIS_LOCATION = "redis://redis:6379/1"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "mediacms",
        "HOST": POSTGRES_HOST,
        "PORT": "5432",
        "USER": "mediacms",
        "PASSWORD": "mediacms",
    }
}

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": REDIS_LOCATION,
        "OPTIONS": {"CLIENT_CLASS": "django_redis.client.DefaultClient"},
    }
}

BROKER_URL = REDIS_LOCATION
CELERY_BROKER_URL = REDIS_LOCATION
CELERY_RESULT_BACKEND = BROKER_URL

MP4HLS_COMMAND = "/home/mediacms.io/mediacms/deploy/docker/Bento4/bin/mp4hls"

DEBUG = False

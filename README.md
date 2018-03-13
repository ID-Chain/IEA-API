
# IdentityChain Indy-API

## Dependencies

- Python
- Pipenv
- Targeted Python Version (w/ virtualenv): Python 3.6

## Quickstart
```
# Install dependencies and virtualenv declared in Pipfile
pipenv install

# activate the virtualenv
pipenv shell

# switch directory
cd identitychain_agent

# optional: run migrations
python manage.py migrate

# run the dev server
python manage.py runserver

# You can now access it at localhost:8000
# Try localhost:8000/api and localhost:8000/api/overview
```


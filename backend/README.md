Create database:
```sh
psql -c "create user gorod with password '123qwe'" postgres
psql -c "create database dobro owner gorod encoding 'UTF8' lc_collate 'ru_RU.utf8' LC_CTYPE 'ru_RU.UTF-8' template template0;" postgres
or
psql -c "create database dobro owner gorod encoding 'UTF8' lc_collate 'ru_RU.UTF-8' LC_CTYPE 'ru_RU.UTF-8' template template0;" postgres


test db
psql -c "create database dobro_test owner gorod encoding 'UTF8' lc_collate 'ru_RU.UTF-8' LC_CTYPE 'ru_RU.UTF-8' template template0;" postgres
```
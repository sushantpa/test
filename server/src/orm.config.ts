import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const ENV = process.env 
function ormConfig(): TypeOrmModuleOptions {
    const commonConf = {
        SYNCRONIZE: false,
        ENTITIES: [__dirname + '/domain/*.entity{.ts,.js}'],
        MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
        CLI: {
            migrationsDir: 'src/migrations',
        },
        MIGRATIONS_RUN: true,
    };

    let ormconfig: TypeOrmModuleOptions = {
        name: 'default',
        type: 'sqlite',
        database: '../target/db/sqlite-dev-db.sql',
        logging: true,
        synchronize: true,
        entities: commonConf.ENTITIES,
        migrations: commonConf.MIGRATIONS,
        cli: commonConf.CLI,
        migrationsRun: commonConf.MIGRATIONS_RUN,
    };

    if (ENV.BACKEND_ENV === 'dev') {
        ormconfig = {
            name: 'default',
            type: 'mysql',
            database: ENV.DB_NAME,
            host: ENV.DB_HOST,
            port: Number(ENV.DB_PORT),
            username: ENV.DB_USERNAME,
            password: ENV.DB_PASSWORD,
            logging: true,
            synchronize: commonConf.SYNCRONIZE,
            entities: commonConf.ENTITIES,
            migrations: commonConf.MIGRATIONS,
            cli: commonConf.CLI,
            migrationsRun: commonConf.MIGRATIONS_RUN,
        };
    }

    if (ENV.BACKEND_ENV === 'prod') {
        ormconfig = {
            name: 'default',
            type: 'mysql',
            database: ENV.DB_NAME,
            host: ENV.DB_HOST,
            port: Number(ENV.DB_PORT),
            username: ENV.DB_USERNAME,
            password: ENV.DB_PASSWORD,
            logging: false,
            synchronize: commonConf.SYNCRONIZE,
            entities: commonConf.ENTITIES,
            migrations: commonConf.MIGRATIONS,
            cli: commonConf.CLI,
            migrationsRun: commonConf.MIGRATIONS_RUN,
        };
    }

    if (ENV.BACKEND_ENV === 'test') {
        ormconfig = {
            name: 'default',
            type: 'sqlite',
            database: ':memory:',
            keepConnectionAlive: true,
            logging: true,
            synchronize: true,
            entities: commonConf.ENTITIES,
            migrations: commonConf.MIGRATIONS,
            cli: commonConf.CLI,
            migrationsRun: commonConf.MIGRATIONS_RUN,
        };
    }
    return ormconfig;
}

export { ormConfig };

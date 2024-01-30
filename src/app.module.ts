import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './tasks/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-proud-smoke-a1tb4ww6-pooler.ap-southeast-1.postgres.vercel-storage.com',
      port: 5432,
      username: 'default',
      password: 'vWD9TjhnV7cA',
      database: 'verceldb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal: true,
      envFilePath: '.env',
    }
    ), 
    AuthModule, 
    HealthModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}

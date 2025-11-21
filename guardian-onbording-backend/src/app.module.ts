import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';
import { OnboardingModule } from './modules/onboarding/onboarding.module';

@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal: true,
      envFilePath: '.env',
    }
    ), 
    AuthModule, 
    HealthModule, ProductsModule, OnboardingModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}

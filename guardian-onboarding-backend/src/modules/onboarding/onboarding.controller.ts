import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';
import { OnboardingCreateDto } from './dtos/onboarding-create.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';

@Controller('onboarding')
export class OnboardingController {
    constructor(private readonly onboardingService: OnboardingService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    createOnboarding(@Body() request: OnboardingCreateDto) {
        return this.onboardingService.createOnboarding(request);
    }
}

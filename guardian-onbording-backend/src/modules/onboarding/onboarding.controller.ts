import { Body, Controller, Post } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';
import { OnboardingCreateDto } from './dtos/onboarding-create.dto';

@Controller('onboarding')
export class OnboardingController {
    constructor(private readonly onboardingService: OnboardingService){}

    @Post()
    createOnboarding(@Body() request: OnboardingCreateDto) {
        return this.onboardingService.createOnboarding(request);
    }
}

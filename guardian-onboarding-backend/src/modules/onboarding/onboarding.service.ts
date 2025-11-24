import { Injectable, InternalServerErrorException} from '@nestjs/common';
import { findOnboardingById, saveOnboarding } from './store/onboarding.store';
import { OnboardingCreateDto } from './dtos/onboarding-create.dto';
import { v4 as uuid} from 'uuid';

@Injectable()
export class OnboardingService {

    createOnboarding(request: OnboardingCreateDto) {
        const onboardingId = uuid();
        saveOnboarding( {
            onboardingId,
            ...request,
            status: 'REQUESTED',
        } );
        const record = findOnboardingById(onboardingId);
        if (!record) {
            throw new InternalServerErrorException('Fallo al registrar el cliente en el sistema, intente nuevamente');
        }

        return {
            onboardingId: record.onboardingId,
            status: record.status,
        };
    }
}

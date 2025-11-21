import { Onboarding } from "../interface/onboarding.interface";

export const onboardingStore: Onboarding[] = [];

export  const saveOnboarding = (onboarding: Onboarding) => {
    onboardingStore.push(onboarding);
}

export const findOnboardingById = (id: string) => {
    return onboardingStore.find(onboarding => onboarding.onboardingId === id);
}
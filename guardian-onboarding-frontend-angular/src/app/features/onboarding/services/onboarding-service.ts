import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

export interface OnboardingRequest {
  name: string;
  documentNumber: string;
  email: string;
  amount: number;
}

export interface OnboardingResponse {
  onboardingId: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  private getAuthHeaders(): Record<string, string> {
    const token = sessionStorage.getItem('accessToken');
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }

  async createOnboarding(data: OnboardingRequest): Promise<OnboardingResponse> {
    const response = await fetch(`${environment.apiUrl}/onboarding`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.message || `Error ${response.status}: ${response.statusText}`;
      const error = new Error(errorMessage);
      (error as any).status = response.status;
      throw error;
    }

    return await response.json();
  }
}

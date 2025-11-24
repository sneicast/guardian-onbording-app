import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OnboardingService, OnboardingResponse } from '../../services/onboarding-service';

@Component({
  selector: 'app-onboarding',
  imports: [FormsModule],
  templateUrl: './onboarding.html',
  styleUrl: './onboarding.css',
})
export class Onboarding {
  name = '';
  documentNumber = '';
  email = '';
  amount: number | null = null;
  onboardingId: string | null = null;
  status: string | null = null;
  showModal = false;
  isSubmitting = false;

  constructor(
    private onboardingService: OnboardingService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  async onSubmit() {
    if (this.isSubmitting) {
      return;
    }

    if (!this.name.trim() || !this.documentNumber.trim() || !this.email.trim() || this.amount === null || this.amount <= 0) {
      alert('Por favor completa todos los campos correctamente');
      return;
    }

    this.isSubmitting = true;

    try {
      const response: OnboardingResponse = await this.onboardingService.createOnboarding({
        name: this.name,
        documentNumber: this.documentNumber,
        email: this.email,
        amount: this.amount,
      });

      this.onboardingId = response.onboardingId;
      this.status = response.status;
      this.name = '';
      this.documentNumber = '';
      this.email = '';
      this.amount = null;
      this.cdr.detectChanges();
      this.showModal = true;
      this.cdr.detectChanges();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      alert(errorMessage);
      
      if (error instanceof Error && (error as any).status === 401) {
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 100);
      }
    } finally {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    }
  }

  closeModal() {
    this.showModal = false;
    this.onboardingId = null;
    this.status = null;
    this.cdr.detectChanges();
  }
}

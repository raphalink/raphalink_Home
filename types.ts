/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface InfrastructureService {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  highlights: string[];
}

export interface HMSFeature {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  workflowStep: string;
  impactMetrics: {
    label: string;
    value: string;
  };
}

export interface HospitalSizeOption {
  id: string;
  name: string;
  description: string;
  bedsRange: string;
  avgDailyPatients: number;
  multiplier: number;
  iconName: string;
}

export interface PainPointOption {
  id: string;
  label: string;
  description: string;
  efficiencyGain: number; // percentage
  satisfactionBoost: number; // percentage
}

export interface SimulatedEvent {
  id: string;
  timestamp: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'alert';
  category: 'clinical' | 'operational' | 'infrastructure' | 'pharmacy';
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  facilityType: string;
  serviceInterest: 'both' | 'infrastructure' | 'hms' | 'other';
  message: string;
}

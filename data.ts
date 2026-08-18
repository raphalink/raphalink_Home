/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { InfrastructureService, HMSFeature, HospitalSizeOption, PainPointOption, SimulatedEvent } from './types';

export const INFRASTRUCTURE_SERVICES: InfrastructureService[] = [
  {
    id: 'turnkey-hospitals',
    title: 'Turnkey Healthcare Infrastructure',
    description: 'Design, structural engineering, and end-to-end medical facility construction compliant with modern healthcare standards.',
    detailedDescription: 'We build future-proof, robust healthcare facilities from greenfield sites to state-of-the-art super-specialty hospitals. Our design principles prioritize clinical workflow flow, physical spatial efficiency, and seamless expansion capabilities.',
    iconName: 'Building2',
    highlights: [
      'NABH & JCI compliance guidelines integrated into structural design',
      'Radiation-shielded diagnostics zones (MRI, CT, X-Ray suites)',
      'Seismic-resistant, heavy-load structures designed for medical hardware',
      'Optimized patient-doctor movement routes to reduce physical bottlenecks'
    ]
  },
  {
    id: 'advanced-cleanrooms',
    title: 'Smart OTs & Cleanrooms',
    description: 'Operating theatre construction with advanced laminar airflow, hermetic sealing, and positive pressure systems.',
    detailedDescription: 'Critical care spaces demand sterile accuracy. We specialize in planning, deploying, and certifying advanced modular Operating Theatres (OT), Intensive Care Units (ICU), and ultra-pure clinical cleanrooms.',
    iconName: 'Layers',
    highlights: [
      'Class 100 to Class 10,000 positive/negative pressure laminar flow systems',
      'Anti-bacterial, seamless epoxy flooring and hermetically sealed doors',
      'Advanced medical gas pendant mounts and heavy-duty structural ceiling grids',
      'Integrated HEPA filtration units with real-time particle tracking sensors'
    ]
  },
  {
    id: 'medical-gas-piping',
    title: 'Medical Gas Pipeline Systems (MGPS)',
    description: 'Certified oxygen, nitrous oxide, vacuum, and surgical air pipeline systems with computerized automated monitoring panels.',
    detailedDescription: 'Crucial life-support systems require absolute structural safety. We build highly regulated MGPS networks engineered to deliver uninterrupted clinical gases to critical zones (OT, ICU, Wards).',
    iconName: 'Gauge',
    highlights: [
      'NFPA-99 and HTM 02-01 standard copper pipelines & medical gas terminals',
      'Duplex & triplex automatic medical air compressions & vacuum plants',
      'Digital alarm telemetry systems indicating pressure drop or leaks instantly',
      'Fully redundant manifold supply configurations for uninterrupted clinical oxygen'
    ]
  },
  {
    id: 'clinical-zoning-hvac',
    title: 'Healthcare HVAC & Air Engineering',
    description: 'Infection control through high-efficiency climate control and customized thermal regulation systems.',
    detailedDescription: 'Air quality in medical environments controls pathogen transmission rates. Our customized HVAC solutions integrate pressure zoning, filtration, and continuous air exchanges to keep wards completely safe.',
    iconName: 'Wind',
    highlights: [
      'Infection-reducing air handling units (AHU) with UV-C germicidal lamps',
      'Strict pressure gradient controls separating isolation wards from public zones',
      'Energy-efficient variable refrigerant flow (VRF) thermal controls',
      'Automated humidity and temperature regulation modules'
    ]
  }
];

export const HMS_FEATURES: HMSFeature[] = [
  {
    id: 'emr-core',
    title: 'Unified Electronic Medical Records (EMR)',
    description: 'Centralized patient medical histories, clinical charting, and digital prescriptions accessible instantly.',
    detailedDescription: 'A paperless, high-security clinical information core. Doctors can review previous diagnoses, imaging results, vital signs, and medication lists on a secure unified interface.',
    iconName: 'ClipboardList',
    workflowStep: 'Patient Consultation & Diagnostics',
    impactMetrics: {
      label: 'Diagnostics Delay Reduction',
      value: '-45%'
    }
  },
  {
    id: 'bed-ward-tracker',
    title: 'Real-Time Ward & Bed Coordinator',
    description: 'Interactive visual grid of hospital bed allocations, occupancy states, and emergency reserves.',
    detailedDescription: 'Eliminate manual registration calling and phone calls. The digital ward map displays occupied, vacant, pending-discharge, and sterile-cleaning bed states in real-time, instantly syncable with triage.',
    iconName: 'Bed',
    workflowStep: 'Admissions & Inpatient Management',
    impactMetrics: {
      label: 'Bed Turnaround Speed',
      value: '+30% Faster'
    }
  },
  {
    id: 'ot-scheduling-engine',
    title: 'OT Resource & Scheduler Optimiser',
    description: 'Intelligent scheduling dashboard matching operating rooms, clinical staffs, and emergency priority levels.',
    detailedDescription: 'Maximize Operating Theatre throughput while avoiding surgeon burnout. Our automated scheduler flags resource conflicts, estimates prep times, and coordinates medical equipment dispatch.',
    iconName: 'CalendarRange',
    workflowStep: 'Surgical Operations Orchestration',
    impactMetrics: {
      label: 'OT Underutilization Saved',
      value: '-28%'
    }
  },
  {
    id: 'pharmacy-inventory-dispatch',
    title: 'Pharmacy & Medical Inventory Dispatcher',
    description: 'Barcoded prescription-to-inventory linking with automated supplier warning levels.',
    detailedDescription: 'Connecting the clinical prescribing desk directly to local pharmacy dispensaries. Tracks drug batches, monitors expiry dates, and alerts inventory managers when vital medicines dip below safety thresholds.',
    iconName: 'PackageCheck',
    workflowStep: 'Prescription & Supply Chain Control',
    impactMetrics: {
      label: 'Stock-out Incidences',
      value: 'Near Zero (<1%)'
    }
  },
  {
    id: 'billing-claims-engine',
    title: 'Integrated Billing & Insurance Engine',
    description: 'Unified billing system pulling clinical lab charges, ward rates, and drug inventories automatically.',
    detailedDescription: 'Say goodbye to lost billable items. This module tracks every lab test, medication dose, and ward hour, producing error-free unified invoices and pre-authorizing third-party insurance claims.',
    iconName: 'Receipt',
    workflowStep: 'Discharge & Financial Clearance',
    impactMetrics: {
      label: 'Discharge Checkout Duration',
      value: 'Reduced to 15m'
    }
  }
];

export const HOSPITAL_SIZES: HospitalSizeOption[] = [
  {
    id: 'clinic',
    name: 'Daycare Clinic & Diagnostic Center',
    description: 'Primarily outpatient consultations, minor procedures, and core laboratory imaging.',
    bedsRange: '5 - 20 Beds',
    avgDailyPatients: 45,
    multiplier: 0.8,
    iconName: 'Stethoscope'
  },
  {
    id: 'midsize',
    name: 'Secondary Care Hospital',
    description: 'Multi-disciplinary clinics, general inpatient wards, emergency care, and standard operating rooms.',
    bedsRange: '50 - 150 Beds',
    avgDailyPatients: 180,
    multiplier: 1.2,
    iconName: 'Hospital'
  },
  {
    id: 'multispecialty',
    name: 'Tertiary Care Super-Specialty Center',
    description: 'Advanced ICUs, modular OTs, research facilities, multi-department inpatient wings, and continuous outpatient flow.',
    bedsRange: '200+ Beds',
    avgDailyPatients: 650,
    multiplier: 2.5,
    iconName: 'ShieldPlus'
  }
];

export const PAIN_POINTS: PainPointOption[] = [
  {
    id: 'slow-discharge',
    label: 'Slow Patient Discharge & Billing Bottlenecks',
    description: 'Discharges take several hours due to fragmented invoicing across pharmacies and labs.',
    efficiencyGain: 18,
    satisfactionBoost: 25
  },
  {
    id: 'bed-coordination',
    label: 'Manual Bed & Ward Allocation Coordination',
    description: 'Inability to track vacant beds instantly across departments leads to triage delays.',
    efficiencyGain: 22,
    satisfactionBoost: 18
  },
  {
    id: 'inventory-leakage',
    label: 'Drug Inventory Expiries & Medicine Stock-outs',
    description: 'Stock shortages or expired batches in dispensaries due to lack of connected supply chains.',
    efficiencyGain: 15,
    satisfactionBoost: 12
  },
  {
    id: 'ot-bottlenecks',
    label: 'Operating Theatre Scheduling Conflicts & Delays',
    description: 'Underutilized OTs combined with surgeon scheduling clashes and patient prep lag.',
    efficiencyGain: 20,
    satisfactionBoost: 15
  }
];

export const INITIAL_EVENTS: SimulatedEvent[] = [
  {
    id: 'evt-1',
    timestamp: '16:15:10',
    message: 'Laminar Airflow system calibrated in Modular OT-3. Pressure: +22 Pa (Optimal).',
    type: 'success',
    category: 'infrastructure'
  },
  {
    id: 'evt-2',
    timestamp: '16:15:45',
    message: 'Smart HMS Sync: Patient #3042 admitted. Auto-allocated Ward B, Bed 12.',
    type: 'success',
    category: 'clinical'
  },
  {
    id: 'evt-3',
    timestamp: '16:16:30',
    message: 'Medical Gas Telemetry: Oxygen pressure manifold stable at 4.2 Bar.',
    type: 'info',
    category: 'infrastructure'
  },
  {
    id: 'evt-4',
    timestamp: '16:17:15',
    message: 'Pharmacy inventory automatic alert: Amoxicillin batches below safety reserve.',
    type: 'warning',
    category: 'pharmacy'
  },
  {
    id: 'evt-5',
    timestamp: '16:18:02',
    message: 'Smart HMS Sync: Lab report uploaded directly to Patient EMR #1994.',
    type: 'info',
    category: 'clinical'
  }
];

export interface WaitlistEntry {
  email: string;
  timestamp: number;
}

export interface FormState {
  email: string;
  status: 'idle' | 'submitting' | 'success' | 'error';
  error?: string;
}
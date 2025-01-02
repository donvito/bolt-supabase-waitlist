import React, { useState } from 'react';
import { Mail, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import type { FormState } from '../types';
import { supabase } from '../lib/supabase';

export default function WaitlistForm() {
  const [form, setForm] = useState<FormState>({
    email: '',
    status: 'idle'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;

    setForm(prev => ({ ...prev, status: 'submitting' }));

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: form.email }]);
      
      if (error) throw error;
      setForm({ email: '', status: 'success' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong';
      setForm(prev => ({
        ...prev,
        status: 'error',
        error: message
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={e => setForm(prev => ({ ...prev, email: e.target.value, status: 'idle' }))}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
          disabled={form.status === 'submitting'}
        />
      </div>

      <button
        type="submit"
        disabled={form.status === 'submitting'}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {form.status === 'submitting' ? (
          <>
            <Loader2 className="animate-spin h-5 w-5" />
            <span>Joining...</span>
          </>
        ) : (
          <span>Join the Waitlist</span>
        )}
      </button>

      {form.status === 'success' && (
        <div className="flex items-center space-x-2 text-green-600">
          <CheckCircle2 className="h-5 w-5" />
          <span>You've been added to the waitlist!</span>
        </div>
      )}

      {form.status === 'error' && (
        <div className="flex items-center space-x-2 text-red-600">
          <XCircle className="h-5 w-5" />
          <span>{form.error}</span>
        </div>
      )}
    </form>
  );
}
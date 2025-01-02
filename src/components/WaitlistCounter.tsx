import React from 'react';
import { Users } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function WaitlistCounter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    async function getCount() {
      const { count: waitlistCount } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });
      
      setCount(waitlistCount || 0);
    }

    getCount();

    // Subscribe to realtime changes
    const channel = supabase
      .channel('waitlist_db_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'waitlist' },
        () => getCount()
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="flex items-center space-x-2 text-gray-600">
      <Users className="h-5 w-5" />
      <span className="font-medium">{count.toLocaleString()}</span>
      <span>people on the waitlist</span>
    </div>
  );
}
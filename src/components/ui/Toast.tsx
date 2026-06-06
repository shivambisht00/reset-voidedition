'use client';

import { useCart } from '@/lib/CartContext';

export default function Toast() {
  const { toast } = useCart();
  return (
    <div className={`toast-notification ${toast ? 'show' : ''}`}>
      {toast}
    </div>
  );
}

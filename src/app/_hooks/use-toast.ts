'use client';

import { useEffect, useState } from 'react';
import type { ToastProps, ToastActionElement } from '../_components/ui/toast';

type Toast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const TOAST_LIMIT = 1;
const TOAST_DURATION = 5000;

let currentToasts: Toast[] = [];

const listeners: Array<(toasts: Toast[]) => void> = [];

function notify() {
  listeners.forEach((listener) => listener(currentToasts));
}

function generateId() {
  return `${Date.now()}-${Math.random()}`;
}

export function toast(props: Omit<Toast, 'id'>) {
  const id = generateId();

  const newToast: Toast = {
    ...props,
    id,
    open: true,
    onOpenChange: (open) => {
      if (!open) dismiss(id);
    },
  };

  currentToasts = [newToast, ...currentToasts].slice(0, TOAST_LIMIT);
  notify();

  setTimeout(() => dismiss(id), TOAST_DURATION);

  return { id };
}

export function dismiss(id?: string) {
  currentToasts = currentToasts.map((toast) =>
    !id || toast.id === id ? { ...toast, open: false } : toast
  );
  notify();
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>(currentToasts);

  useEffect(() => {
    listeners.push(setToasts);
    return () => {
      const index = listeners.indexOf(setToasts);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return { toasts, toast, dismiss };
}

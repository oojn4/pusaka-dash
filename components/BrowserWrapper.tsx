// components/BrowserWrapper.tsx (Client Component)
"use client"; // This marks the component as a client component

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function BrowserWrapper({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

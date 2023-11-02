import NavbarVariant from '@/components/nav-bar-variant';
import React from 'react'
import AboutOne from './_components/about-one';
import WorkTogether from '@/components/work-together';
import AboutTwo from './_components/about-two';

export default function page() {
  return <div className="min-h-screen">
    <NavbarVariant />
    <AboutOne />
    <AboutTwo />
    <WorkTogether />
  </div>;
}

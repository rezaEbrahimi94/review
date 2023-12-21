'use client';

import React from 'react';
import { MainSectionStyled } from '@/components/layout/style';
import { MainSectionProps } from '@/components/layout/type';


const MainSection = ({ extend, ...props }: MainSectionProps) => {
  return (
    <MainSectionStyled id='SamMainSection-Root'
      className={`SamMainSection-Root ${extend ? 'SamMainSection-Root-extend' : 'SamMainSection-narrow'}`}
      {...props}
    />
  )
}

export default MainSection;

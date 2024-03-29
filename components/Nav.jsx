'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// import { signIn, signOut, useSesssion, getProviders } from 'next-auth';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  return (
    <nav className="w-full pt-3 mb-16 flex-between">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          className="object-contain"
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={100}
          height={100}
        />
        <p className="logo_text">Promptopia</p>
      </Link>
    </nav>
  );
};

export default Nav;

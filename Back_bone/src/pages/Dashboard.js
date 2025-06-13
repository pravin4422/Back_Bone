import React from 'react';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}

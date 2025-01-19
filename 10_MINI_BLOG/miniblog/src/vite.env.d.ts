/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_firebaseAPIKey: string;
  readonly VITE_firebaseAuthDomain: string;
  readonly VITE_firebaseProjectId: string;
  readonly VITE_firebaseStorageBucket: string;
  readonly VITE_firebaseMessagingSenderId: string;
  readonly VITE_firebaseAppId: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

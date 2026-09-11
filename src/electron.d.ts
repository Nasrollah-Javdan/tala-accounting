export {};

declare global {
  interface Window {
    electronAPI: {
      isElectron: boolean;
      getAppInfo: () => Promise<{
        name: string;
        version: string;
        platform: string;
      }>;
    };
  }
}
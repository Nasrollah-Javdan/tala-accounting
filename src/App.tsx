import { useEffect, useState } from 'react';

function App() {
  const [appInfo, setAppInfo] = useState<{
    name: string;
    version: string;
    platform: string;
  } | null>(null);

  useEffect(() => {
    if (window.electronAPI) {
      window.electronAPI.getAppInfo().then(setAppInfo);
    }
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>نرم‌افزار حسابداری طلا</h1>

      <p>
        React + Vite با موفقیت اجرا شد.
      </p>

      {appInfo ? (
        <div>
          <p>Electron: متصل ✅</p>
          <p>Version: {appInfo.version}</p>
          <p>Platform: {appInfo.platform}</p>
        </div>
      ) : (
        <p>
          در حال حاضر در حالت مرورگر هستید.
        </p>
      )}
    </div>
  );
}

export default App;
const Vault = () => {
  const [isLocked, setIsLocked] = React.useState(true);
  const [accessCode, setAccessCode] = React.useState('');

  const handleUnlock = () => {
    if (accessCode === '1234') setIsLocked(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-cyan-400">
      <div className="relative w-full max-w-2xl rounded-2xl border border-cyan-500/30 bg-black/60 p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)]">
        
        {/* Header Decor */}
        <div className="absolute top-4 left-6 flex gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500/50 animate-pulse" />
          <div className="h-2 w-2 rounded-full bg-cyan-500/50" />
        </div>

        {isLocked ? (
          /* LOCKED STATE */
          <div className="flex flex-col items-center py-10 text-center">
            <span className="mb-4 text-6xl">🔒</span>
            <h2 className="mb-2 text-2xl font-mono tracking-widest uppercase">Encrypted Sector</h2>
            <p className="mb-8 text-sm text-cyan-500/60 uppercase tracking-tighter">Enter Authorization Key</p>
            
            <input 
              type="password"
              placeholder="****"
              className="mb-4 border-b border-cyan-500/40 bg-transparent px-4 py-2 text-center text-2xl tracking-[1em] outline-none focus:border-cyan-400"
              onChange={(e) => setAccessCode(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && handleUnlock()}
            />
            
            <button 
              onClick={handleUnlock}
              className="mt-4 rounded border border-cyan-500/50 px-8 py-2 text-xs uppercase tracking-widest transition-all hover:bg-cyan-500/20 active:scale-95"
            >
              Verify Identity
            </button>
          </div>
        ) : (
          /* UNLOCKED STATE */
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="mb-6 flex items-center justify-between border-b border-cyan-500/20 pb-4">
              <h2 className="font-mono text-xl tracking-tighter">DATA_STREAM_v0.4</h2>
              <span className="text-xs text-green-400 animate-pulse">● SECURE CONNECTION</span>
            </div>
            
            <div className="space-y-4 font-mono text-sm uppercase">
              <div className="flex justify-between rounded bg-white/5 p-3 hover:bg-white/10 transition-colors">
                <span>File: Project_Phoenix.sh</span>
                <span className="text-cyan-600">Download</span>
              </div>
              <div className="flex justify-between rounded bg-white/5 p-3 hover:bg-white/10 transition-colors">
                <span>File: Alpha_Build_02.pkg</span>
                <span className="text-cyan-600">Download</span>
              </div>
              <div className="flex justify-between rounded bg-white/5 p-3 hover:bg-white/10 transition-colors">
                <span>Note: Master_Seed_Keys.txt</span>
                <span className="text-red-900/80 line-through underline">Redacted</span>
              </div>
            </div>

            <button 
              onClick={() => setIsLocked(true)}
              className="mt-8 text-[10px] uppercase text-cyan-900 hover:text-cyan-400 transition-colors"
            >
              Terminate Session
            </button>
          </div>
        )}
      </div>

      {/* Background Decor */}
      <div className="pointer-events-none absolute bottom-20 right-20 text-[100px] font-black opacity-[0.03] select-none">
        010110
      </div>
    </div>
  );
};

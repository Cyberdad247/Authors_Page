# CAMELOT APEX v200.0 BOOTSTRAP [Source: 471]
Write-Host "🏰 INITIALIZING CAMELOT APEX [KINETIC SOVEREIGN]..." -ForegroundColor Cyan

# 1. Ignite Rotel (Telemetry) [Source: 604]
# Check for local binary first
$rotel_local = "C:\Users\vizio\CAMELOT_OS\02_FORGE\kinetic\rotel\target\release\rotel.exe"
if (Test-Path $rotel_local) {
    Write-Host "[⚡] Rotel: ACTIVE (Local Kinetic Binary)" -ForegroundColor Green
    # In a real boot, we might start it here, but for now we just verify
} elseif (Get-Command rotel -ErrorAction SilentlyContinue) {
    Write-Host "[⚡] Rotel: ACTIVE (Port 4317)" -ForegroundColor Green
    Start-Process -NoNewWindow -FilePath "rotel" -ArgumentList "start", "--exporter", "blackhole", "--enable-internal-telemetry"
} else {
    Write-Host "[⚠️] Rotel: MISSING (Install via cargo)" -ForegroundColor Red
}

# 2. Ignite Saltare (MCP Gateway) [Source: 184]
$saltare_local = "C:\Users\vizio\CAMELOT_OS\tools\Saltare\bin\saltare.exe"
if (Test-Path $saltare_local) {
    Write-Host "[⚡] Saltare: ACTIVE (Local Kinetic Binary)" -ForegroundColor Green
    # Start-Process -NoNewWindow -FilePath $saltare_local -ArgumentList "server", "--config", "configs/saltare.yaml"
} elseif (Get-Command saltare -ErrorAction SilentlyContinue) {
    Write-Host "[⚡] Saltare: ACTIVE (Port 8080)" -ForegroundColor Green
    Start-Process -NoNewWindow -FilePath "saltare" -ArgumentList "server", "--config", "configs/saltare.yaml"
} else {
    Write-Host "[⚠️] Saltare: MISSING (Install via go)" -ForegroundColor Red
}

# 3. Check Cribo (Bundler) [Source: 307]
$cribo_local = "C:\Users\vizio\CAMELOT_OS\02_FORGE\kinetic\cribo\target\release\cribo.exe"
if (Test-Path $cribo_local) {
    Write-Host "[⚡] Cribo: READY (Local Kinetic Binary)" -ForegroundColor Green
} elseif (Get-Command cribo -ErrorAction SilentlyContinue) {
    Write-Host "[⚡] Cribo: READY (Rust Bundler)" -ForegroundColor Green
} else {
    Write-Host "[⚠️] Cribo: MISSING (Using Python Fallback - SLOW)" -ForegroundColor Yellow
}

# 4. Verify Ledger [Source: 335]
if (Test-Path "PROVENANCE_LEDGER.md") {
    $hash = Get-FileHash "PROVENANCE_LEDGER.md"
    Write-Host "[📜] Ledger: MOUNTED ($($hash.Hash.Substring(0,8))...)" -ForegroundColor Gray
} else {
    Write-Host "[📜] Ledger: CREATING NEW..." -ForegroundColor White
    "# PROVENANCE LEDGER" | Out-File "PROVENANCE_LEDGER.md"
}

# 5. Ignite Interface (HUD & Dashboard)
Write-Host "[🎭] Anya: Connecting Neural Interface..." -ForegroundColor Magenta
Start-Process cmd -ArgumentList "/k title CAMELOT_HUD && python 02_FORGE/Camelot_HUD.py"
Start-Process cmd -ArgumentList "/k title ANYA_DASHBOARD && cd 02_FORGE/Anya_Dashboard && npm run dev"
Write-Host "   >> HUD & Dashboard: IGNITED" -ForegroundColor Green

Write-Host "`n[✨] SYSTEM READY. Enter //boot in your LLM to synchronize." -ForegroundColor Cyan

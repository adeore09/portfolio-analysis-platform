import { useState } from "react";
import "./DashboardPage.css";

function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const sidebarMenuItems = [
    { id: "dashboard", label: "Dashboard", svgPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "portfolio", label: "Portfolio Management", svgPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zm9 0v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2z" },
    { id: "analytics", label: "Reports & Analytics", svgPath: "M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { id: "risk", label: "Risk Analysis Matrix", svgPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { id: "performance", label: "Performance & Capital", svgPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { id: "reports", label: "Audit Logs & Reports", svgPath: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" },
    { id: "settings", label: "System Settings", svgPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
    { id: "profile", label: "User Profile Account", svgPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  ];

  return (
    <div className="dashboard-app-frame">
      
      {/* 1. COMPREHENSIVE SIDEBAR PANEL (Width & Alignment updated) */}
      <aside className="app-sidebar">
        <div className="sidebar-brand-wrapper">
          <div className="brand-symbol">✕</div>
          <div className="sidebar-brand">Port<span>X</span></div>
        </div>
        
        <nav className="sidebar-nav">
          {sidebarMenuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item-btn ${activeMenu === item.id ? "active-nav" : ""}`}
              onClick={() => setActiveMenu(item.id)}
            >
              <div className="icon-box-wrapper">
                <svg className="nav-vector-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.svgPath}></path>
                </svg>
              </div>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* RIGHT SIDE DATA AXIS */}
      <div className="app-workspace-column">
        
        {/* 2. PIXEL-PERFECT TOP BAR */}
        <header className="app-top-bar">
          <div className="top-bar-search-box">
            <svg className="search-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input type="text" placeholder="Search investments, ticker parameters..." />
          </div>
          
          <div className="top-bar-actions">
            <div className="currency-selector-badge">
              <span className="currency-pill type-inactive">INR</span>
              <span className="currency-pill type-active">USD Holdings</span>
            </div>
            
            <button className="icon-action-btn notification-alert-dot">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </button>
            
            <div className="user-profile-badge">
              <div className="avatar-circle">A</div>
              <div className="user-profile-meta">
                <span className="user-name-label">Atharva</span>
                <span className="user-role-label">Portfolio Manager</span>
              </div>
            </div>
          </div>
        </header>

        {/* 3. APP INNER CONTENT GRID */}
        <main className="workspace-view-content">
          
          {/* Dashboard Header Summary Info */}
          <div className="view-header-row">
            <div>
              <h1 className="view-title">Hello Atharva 👋</h1>
              <p className="view-subtitle">Let's set up your quantitative interface configuration dashboard parameters.</p>
            </div>
            <button className="btn-quick-add">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
              </svg>
              Add Holding
            </button>
          </div>

          {/* DYNAMIC METRIC CARDS MOCKING DATA STRUCTURE TO REMOVE BLANK SPACE WHITESPACE */}
          <div className="dashboard-metrics-grid">
            <div className="metric-skeleton-card">
              <div className="metric-card-row">
                <div className="metric-icon-box">$</div>
                <div className="trend-indicator up">▲ --%</div>
              </div>
              <div className="metric-value-ghost">--,--,--</div>
              <div className="metric-title-lbl">Total Investment Amount</div>
            </div>

            <div className="metric-skeleton-card">
              <div className="metric-card-row">
                <div className="metric-icon-box">📈</div>
                <div className="trend-indicator up">▲ --%</div>
              </div>
              <div className="metric-value-ghost">--,--,--</div>
              <div className="metric-title-lbl">Total Accumulated Profit</div>
            </div>

            <div className="metric-skeleton-card">
              <div className="metric-card-row">
                <div className="metric-icon-box">⏱</div>
                <div className="trend-indicator">Stable</div>
              </div>
              <div className="metric-value-ghost">--</div>
              <div className="metric-title-lbl">Active Ticker Assets</div>
            </div>

            <div className="metric-skeleton-card">
              <div className="metric-card-row">
                <div className="metric-icon-box">🛡</div>
                <div className="trend-indicator down">▼ --%</div>
              </div>
              <div className="metric-value-ghost">--.--</div>
              <div className="metric-title-lbl">Portfolio Sharpe Ratio</div>
            </div>
          </div>

          {/* LOWER SECTION OVERVIEW: CHARTS PLACEHOLDER GRID MIXED WITH ACTION MODAL OVERLAY */}
          <div className="dashboard-charts-row">
            <div className="chart-skeleton-box large-span">
              <div className="box-title-header">Asset Allocation Breakdown</div>
              <div className="empty-chart-vector-placeholder"></div>
            </div>
            <div className="chart-skeleton-box short-span">
              <div className="box-title-header">Sector Concentration Exposure</div>
              <div className="empty-chart-donut-placeholder"></div>
            </div>

            {/* FLOATING ACTION INTERACTIVE BLOCK INJECTION OVERLAY */}
            <div className="workspace-interactive-onboarding-layer">
              <div className="minimal-empty-state-card">
                <div className="empty-icon-frame">
                  <svg width="22" height="22" fill="none" stroke="#00d4aa" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <h3>Add your first portfolio holding</h3>
                <p>Import a brokerage CSV file or search native NSE/BSE equity symbols to initialize real-time analytics graphs.</p>
                <div className="empty-state-actions">
                  <button className="btn-empty-primary">Search Stocks</button>
                  <button className="btn-empty-secondary">Import CSV File</button>
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}

export default DashboardPage;
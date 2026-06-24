import MetricCards from "../MetricCards/MetricCards"
import "./DashboardPreview.css"

function DashboardPreview(){
    return(
        <div>
            <h2>Dashboard Panel Overview</h2>
            {/* <MetricCards
                title = "Portfolio value"
                value="$1430294"
                />
            <MetricCards
                title="Todays P/L"
                value="+2.34%"
            />
            <MetricCards
                title="Sharpe Ratio"
                value="1.34"
            />
            <MetricCards
                title="Risk Score"
                value="Moderate"
            /> */}
            <div className="dashboard-wrapper">
                <div className="dashboard-container">
                    <div className="Metriccards">
                        <div className="AssetName">
                            {/* <img className="ticker-symbol" alt=""></img> */}
                            <div className="assetcompany">
                                <div className="asset">Portfolio Value</div>
                                <div className="description">Retirement Portfolio</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="value">$ 1,201,234</div>
                            <div className="badge">
                                <div className="badge-base">
                                    <img className="iconslong-arrow-up" alt=""/>
                                    <div className="badgetext">11.01%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Metriccards">
                        <div className="AssetName">
                            {/* <img className="ticker-symbol" alt=""></img> */}
                            <div className="assetcompany">
                                <div className="asset">Today P/L</div>
                                <div className="description">Todays Profit and Loss</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="value">+2.34%</div>
                            <div className="badge">
                                <div className="badge-base">
                                    <img className="iconslong-arrow-up" alt=""/>
                                    <div className="badgetext">+0.34%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Metriccards">
                        <div className="AssetName">
                            {/* <img className="ticker-symbol" alt=""></img> */}
                            <div className="assetcompany">
                                <div className="asset">Sharpe Ratio</div>
                                <div className="description">Retirement Portfolio</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="value">1.34</div>
                            <div className="badge">
                                <div className="badge-base">
                                    {/* <img className="iconslong-arrow-up" alt=""/> */}
                                    <div className="badgetext">Good</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Metriccards">
                        <div className="AssetName">
                            {/* <img className="ticker-symbol" alt=""></img> */}
                            <div className="assetcompany">
                                <div className="asset">Risk Score</div>
                                <div className="description">Retirement Portfolio</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="value">Low</div>
                            <div className="badge">
                                <div className="badge-base">
                                    {/* <img className="iconslong-arrow-up" alt=""/> */}
                                    <div className="badgetext">Stable</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="analysis-section">
                    <div className="analysis-card chart-card">
                        <h3 className="section-title">Portfolio Allocation</h3>
                        <div className="chart-container">
                            <div className="pure-css-pie"></div>
                            <div className="chart-legend">
                                <div className="legend-item"><span className="dot tcs"></span> TCS (20%)</div>
                                <div className="legend-item"><span className="dot infy"></span> INFY (15%)</div>
                                <div className="legend-item"><span className="dot hdfc"></span> HDFCBK (12%)</div>
                                <div className="legend-item"><span className="dot others"></span> Others (53%)</div>
                            </div>
                        </div>
                    </div>

                    <div className="analysis-card table-card">
                        <h3 className="section-title">Top Holdings</h3>
                        <table className="holdings-table">
                            <thead>
                                <tr>
                                    <th>Ticker</th>
                                    <th>Weight</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="ticker-weight-bold">TCS</td>
                                    <td>20%</td>
                                    <td>$120,000</td>
                                </tr>
                                <tr>
                                    <td className="ticker-weight-bold">INFY</td>
                                    <td>15%</td>
                                    <td>$90,000</td>
                                </tr>
                                <tr>
                                    <td className="ticker-weight-bold">HDFCBK</td>
                                    <td>12%</td>
                                    <td>$75,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DashboardPreview
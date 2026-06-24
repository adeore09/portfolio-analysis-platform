
function MetricCards({ title, subtitle, value, badgeText, hasArrow }) {
  return (
    <div className="Metriccards">
      <div className="AssetName">
        <div className="assetcompany">
          <div className="asset">{title}</div>
          <div className="description">{subtitle}</div>
        </div>
      </div>
      <div className="content">
        <div className="value">{value}</div>
        <div className="badge">
          <div className="badge-base">
            {hasArrow && (
              <svg className="iconslong-arrow-up" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '12px', height: '12px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            )}
            <div className="badgetext">{badgeText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricCards;
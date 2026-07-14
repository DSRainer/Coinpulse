const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image skeleton" />
        <div className="info">
          <div className="header-line-sm skeleton" />
          <div className="header-line-lg skeleton" />
        </div>
      </div>
      <div className="period-button-skeleton skeleton" />
      <div className="chart">
        <div className="chart-skeleton skeleton" />
      </div>
    </div>
  );
};

export default CoinOverviewFallback;

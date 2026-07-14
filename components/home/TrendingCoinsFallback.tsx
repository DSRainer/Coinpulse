const TrendingCoinsFallback = () => {
  const rows = Array.from({ length: 4 });

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div className="trending-coins-table">
        {rows.map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-5 py-3 border-b border-dark-400/30"
          >
            <div className="name-cell">
              <div className="name-link">
                <div className="name-image skeleton" />
                <div className="name-line skeleton" />
              </div>
            </div>
            <div className="change-cell">
              <div className="price-change">
                <div className="change-icon skeleton" />
                <div className="change-line skeleton" />
              </div>
            </div>
            <div className="price-cell">
              <div className="price-line skeleton" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoinsFallback;

const CategoriesFallback = () => {
  const rows = Array.from({ length: 6 });

  return (
    <div id="categories-fallback" className="custom-scrollbar">
      <h4>Top Categories</h4>
      <div className="mt-3">
        {rows.map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-5 py-4 border-b border-dark-400/30"
          >
            {/* Category Name */}
            <div className="flex-1">
              <div className="category-skeleton skeleton" />
            </div>

            {/* Top Gainers (3 coins) */}
            <div className="top-gainers-cell">
              <div className="coin-skeleton skeleton" />
              <div className="coin-skeleton skeleton" />
              <div className="coin-skeleton skeleton" />
            </div>

            {/* 24H Change */}
            <div className="change-cell">
              <div className="change-icon skeleton" />
              <div className="value-skeleton-sm skeleton" />
            </div>

            {/* Market Cap */}
            <div className="market-cap-cell">
              <div className="value-skeleton-md skeleton" />
            </div>

            {/* 24H Volume */}
            <div className="volume-cell">
              <div className="value-skeleton-lg skeleton" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFallback;

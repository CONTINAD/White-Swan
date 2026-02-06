import './Chart.css';

const Chart = () => {
    return (
        <section className="chart-section">
            <div className="chart-container">
                <h2 className="chart-title">Market Data</h2>
                <div className="chart-wrapper">
                    <iframe
                        src="https://dexscreener.com/solana/5iC72jzRib1MpFRTrQSf8hibNEnMs9bGAeWVU87Npump?embed=1&theme=dark&trades=0&info=0"
                        title="DexScreener Chart"
                        className="chart-iframe"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Chart;

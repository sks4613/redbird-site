export default function Home() {
  return (
    <main style={{
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
      padding: '2rem',
      lineHeight: 1.6
    }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Digital Gratitude. Made for the Game — and the Future.
      </h1>

      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2>What is Redbird?</h2>
        <p>Redbird is a stable, tax-based token built to tip, transfer, and empower. Born from poker and service culture, it supports those who give, play, and serve.</p>

        <h2>Tokenomics</h2>
        <ul>
          <li>Stable $1 Value</li>
          <li>1% Reflections to Holders</li>
          <li>2.5% Creator Fund</li>
          <li>1% Marketing</li>
        </ul>

        <h2>Use Cases</h2>
        <ul>
          <li>Tipping casino dealers</li>
          <li>Poker game buy-ins, transfers, tournament pools</li>
          <li>Used to support service workers such as teachers, first responders, donations and charitable causes</li>
        </ul>

        <h2>Community Impact</h2>
        <p>Giving back to those who serve. Transparency + accessibility. A cultural movement, not just a token.</p>

        <h2>Roadmap</h2>
        <ul>
          <li>Phase 1: Launch token + site</li>
          <li>Phase 2: Mobile app with tipping support</li>
          <li>Phase 3: Sector-based profiles</li>
          <li>Phase 4: Marketplace / NFT rewards</li>
        </ul>

        <h2>Join the Flock</h2>
        <p>Connect with us to tip, transfer, and empower through Redbird.</p>
      </section>
    </main>
  );
}

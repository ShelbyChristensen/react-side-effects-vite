function JokeDisplay({ joke, loading, error }) {
  if (loading) return <p className="joke-container">Loading...</p>;
  if (error) return <p className="joke-container" style={{ color: 'red' }}>{error}</p>;
  return <p className="joke-container">{joke}</p>;
}

export default JokeDisplay;

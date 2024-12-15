const Shimmer = () => {
  return (
    <div className="shimmer-container" data-testid="shimmer-container">
      {Array(20).fill(1).map((_,idx)=>(
      <div className="shimmer-card" key={`shimmer_${idx}`}></div>
      ))}
    </div>
  );
};

export default Shimmer;

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const containerStarStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

const starStyle = {
  width: "48px",
  height: "48px",
  display: "block",
  cursor: "pointer",
};

export default function StarRating({ max }) {
  return (
    <div style={containerStyle}>
      <div style={containerStarStyle}>
        {Array.from({ length: max }, (_, i) => {
          return <span>{`Star${i + 1}`}</span>;
        })}
      </div>
      <p style={textStyle}>{max} star</p>
    </div>
  );
}

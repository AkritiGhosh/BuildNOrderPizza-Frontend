import useTheme from "../../hooks/useTheme";

const ThemeButton = () => {
  const { darkTheme, toggleTheme } = useTheme();

  const getCoordinates = (angle: number, distance: number) => {
    angle = angle * (Math.PI / 180);
    return {
      x: 60 + Math.cos(angle) * distance,
      y: 60 + Math.sin(angle) * distance,
    };
  };
  const coordinates = [
    { x1: 50, x2: 50, y1: 0, y2: 12.5 },
    { x1: 100, x2: 87.5, y1: 50, y2: 50 },
    { x1: 50, x2: 50, y1: 100, y2: 87.5 },
    { x1: 0, x2: 12.5, y1: 50, y2: 50 },
  ];
  const angles = [45, 135, 225, 315];
  return (
    <svg
      onClick={() => toggleTheme()}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 120 120"
      className="transition-transform duration-300 ease-in-out"
    >
      <circle
        cx="60"
        cy="60"
        r="20"
        fill="currentColor"
        className={`transition-transform duration-300 ease-in-out origin-center z-10 ${
          !darkTheme ? "scale-[2.5]" : "scale-100"
        }`}
      />
      {coordinates?.map((coords) => (
        <line
          key={`${coords.x1}${coords.y1}`}
          x1={coords.x1 + 10}
          x2={coords.x2 + 10}
          y1={coords.y1 + 10}
          y2={coords.y2 + 10}
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          className={`transition-transform duration-300 ease-in-out origin-center z-10 ${
            !darkTheme ? "scale-50" : "scale-100"
          }`}
        />
      ))}
      {angles?.map((angle) => (
        <line
          key={angle}
          x1={getCoordinates(angle, 37.5).x}
          y1={getCoordinates(angle, 37.5).y}
          x2={getCoordinates(angle, 50).x}
          y2={getCoordinates(angle, 50).y}
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          className={`transition-transform duration-300 ease-in-out origin-center z-10 ${
            !darkTheme ? "scale-50" : "scale-100"
          }`}
        />
      ))}

      <circle
        cx="140"
        cy="-10"
        r="30"
        fill="white"
        className={`transition-all duration-100 ease-in-out origin-center z-30 ${
          !darkTheme
            ? "-translate-x-12 translate-y-12 scale-100"
            : "translate-x-0 translate-y-0 scale-0"
        }`}
      />
    </svg>
  );
};

export default ThemeButton;

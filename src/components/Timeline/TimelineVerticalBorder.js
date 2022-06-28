export const TimelineVerticalBorder = () => {
  return (
    <>
      <div className="absolute top-0 left-1/2 z-0 min-h-screen border border-gray-300 md:h-96"></div>
      <div className="absolute top-96 left-1/2 z-0 min-h-screen border border-gray-300"></div>
    </>
  );
};
export const TimelineVerticalBorderLast = () => {
  return (
    <>
      <div className="absolute top-0 left-1/2 z-0 min-h-screen border border-gray-300 md:h-96"></div>
      <div className="absolute top-96 left-1/2 z-0 h-screen border border-gray-300 md:h-96"></div>
    </>
  );
};

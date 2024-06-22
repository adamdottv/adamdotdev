export default async function OfficeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        className="absolute left-1/2 top-1/2 -z-20 h-auto min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="media/office-b-roll-720p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 -z-10 bg-black/75 text-white text-opacity-[15%]">
        <svg
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 -left-40 min-h-full min-w-full scale-150 sm:-left-20 sm:scale-125 xl:-top-20 xl:left-20 xl:scale-150"
        >
          <path d="M300 0V1080" stroke="currentColor" />
          <path d="M340 0V1080" stroke="currentColor" />
          <path d="M100 0V1080" stroke="currentColor" />
          <path d="M1820 0V1080" stroke="currentColor" />
          <path d="M1620 0V1080" stroke="currentColor" />
          <path d="M1588 0V1080" stroke="currentColor" />
          <path d="M1920 300L-4.76837e-06 300" stroke="currentColor" />
          <path d="M1920 780L-4.76837e-06 780" stroke="currentColor" />
          <path d="M1920 980L-4.76837e-06 980" stroke="currentColor" />
          <path d="M1920 100L-4.76837e-06 99.9999" stroke="currentColor" />
        </svg>
      </div>
    </div>
  );
}

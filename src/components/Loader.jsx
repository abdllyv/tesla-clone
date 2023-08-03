const Loader = () => {
  return (
    <div
      className="loader tds-loader"
      aria-busy="false"
      aria-live="polite"
      role="status"
    >
      <svg
        className="tds-icon tds-icon-loader"
        viewBox="0 0 51 51"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath
          id="tds-loader-clip-path-pre-checkout"
          transform="translate(-44.5 -44.5)"
        >
          <path
            fill="none"
            d="M70 45.5a2.5 2.5 0 010 5 19.5 19.5 0 1014.23 6.17 2.5 2.5 0 113.65-3.42A24.5 24.5 0 1170 45.5z"
          ></path>
        </clipPath>
        <image
          width="51"
          height="51"
          clipPath="url(#tds-loader-clip-path-pre-checkout)"
          href="data:image/png;base64,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"
        ></image>
      </svg>
      <svg
        fill="#5c5e62"
        className="tds-icon tds-icon-logo"
        viewBox="0 0 51 51"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 7.151l3.302-4.036c0 0 5.656 0.12 11.292 2.74-1.443 2.182-4.307 3.25-4.307 3.25-0.193-1.917-1.536-2.385-5.807-2.385l-4.479 25.281-4.51-25.286c-4.24 0-5.583 0.469-5.776 2.385 0 0-2.865-1.057-4.307-3.24 5.635-2.62 11.292-2.74 11.292-2.74l3.302 4.031h-0.005zM16 1.953c4.552-0.042 9.766 0.703 15.104 3.036 0.714-1.292 0.896-1.859 0.896-1.859-5.833-2.313-11.297-3.109-16-3.13-4.703 0.021-10.167 0.813-16 3.13 0 0 0.26 0.703 0.896 1.865 5.339-2.344 10.552-3.083 15.104-3.047z" />
      </svg>
    </div>
  );
};

export default Loader;

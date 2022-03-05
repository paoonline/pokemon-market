module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundBlack: "#1F1D2B",
        "hover-dropdown": "#252836",
        "border-hover": "#393c49",
        "gray-not-active": "rgba(255, 255, 255, 0.08)",
        "gray-active": "rgba(255, 255, 255, 0.18)",
        "gray-disabled": "rgba(255, 255, 255, 0.08)",
        "button-orange": "#EA7C69",
        "gray-card": "#ABBBC2",
      },
      fontSize: {
        xlnew: 26,
      },
      width: {
        102: "102px",
        144: "144px",
        54: "54px",
        44: "44px",
      },
      height: {
        142: "142px",
        176: "176px",
        38: "38px",
        54: "54px",
      },
    },
  },
  plugins: [],
};

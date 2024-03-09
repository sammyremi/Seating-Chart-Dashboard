/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        4: "repeat(4, minmax(0, 60px))",
        16: "repeat(16, minmax(0, 50px))",
        13: "repeat(13, minmax(0, 50px))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
        21: "repeat(21, minmax(0, 1fr))",
        22: "repeat(22, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        1: "repeat(1, minmax(0, 35px))",
        2: "repeat(2, minmax(0, 35px))",
        3: "repeat(3, minmax(0, 35px))",
        4: "repeat(4, minmax(0, 35px))",
        5: "repeat(5, minmax(0, 35px))",
        6: "repeat(6, minmax(0, 35px))",
        7: "repeat(7, minmax(0, 35px))",
        8: "repeat(8, minmax(0, 35px))",
        9: "repeat(9, minmax(0, 35px))",
        10: "repeat(10, minmax(0, 35px))",
        11: "repeat(11, minmax(0, 38px))",
        12: "repeat(12, minmax(0, 35px))",
        13: "repeat(13, minmax(0, 35px))",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
      },
    },
  },
  plugins: [],
};
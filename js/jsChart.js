/** @format */

// views chart

const chartOptions = {
  chart: {
    type: "area",
    height: 310,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: ["#5CB00D"],
  series: [{ name: "Measurable stuff", data: [18, 50, 42, 65, 41, 65] }],
  dataLabels: { enabled: false },
  stroke: { width: 3, curve: "smooth" },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: ["Feb", "Apr", "Jun", "Aug", "Oct", "Dec"],
    axisBorder: { show: true },
    labels: { style: { colors: "#a7a7a7", fontFamily: "Poppins" } },
  },
  yaxis: {
    show: true,
  },
  grid: {
    borderColor: "rgba(0, 0, 0, 0, 0)",
    padding: { top: 0, bottom: -8, left: 12, right: 12 },
  },
  tooltip: {
    enabled: true,
    y: { formatter: (value) => `${value}K` },
    style: { fontFamily: "Poppins" },
  },
  markers: { show: false },
};

const chart = new ApexCharts(
  document.querySelector("#curve_chart"),
  chartOptions
);
chart.render();

// click chart

const chartOptions1 = {
  chart: {
    type: "area",
    height: 310,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: ["#5CB00D"],
  series: [{ name: "Measurable stuff", data: [18, 50, 42, 94, 41, 65] }],
  dataLabels: { enabled: false },
  stroke: { width: 3, curve: "smooth" },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: ["Feb", "Apr", "Jun", "Aug", "Oct", "Dec"],
    axisBorder: { show: false },
    labels: { style: { colors: "#a7a7a7", fontFamily: "Poppins" } },
  },
  yaxis: {
    show: true,
  },
  grid: {
    borderColor: "rgba(0, 0, 0, 0, 0)",
    padding: { top: 0, bottom: -8, left: 12, right: 12 },
  },
  tooltip: {
    enabled: true,
    y: { formatter: (value) => `${value}K` },
    style: { fontFamily: "Poppins" },
  },
  markers: { show: false },
};

const chart1 = new ApexCharts(
  document.querySelector("#curve_chart_Click"),
  chartOptions1
);
chart1.render();

// side views chart

const chartOptions2 = {
  chart: {
    type: "area",
    height: 270,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: ["#5CB00D"],
  series: [{ name: "Measurable stuff", data: [18, 50, 42, 94, 41, 65] }],
  dataLabels: { enabled: false },
  stroke: { width: 3, curve: "smooth" },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: ["Feb", "Apr", "Jun", "Aug", "Oct", "Dec"],
    axisBorder: { show: false },
    labels: { style: { colors: "#a7a7a7", fontFamily: "Poppins" } },
  },
  yaxis: {
    show: true,
  },
  grid: {
    borderColor: "rgba(0, 0, 0, 0, 0)",
    padding: { top: 0, bottom: -8, left: 12, right: 0 },
  },
  tooltip: {
    enabled: true,
    y: { formatter: (value) => `${value}K` },
    style: { fontFamily: "Poppins" },
  },
  markers: { show: false },
};

const chart2 = new ApexCharts(
  document.querySelector("#curve_chart_Click_sub_1"),
  chartOptions2
);
chart2.render();

// side click chart

const chartOptions3 = {
  chart: {
    type: "bar",
    height: 270,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: ["#5BAE0D"],
  series: [{ name: "Measurable stuff", data: [18, 50, 42, 94, 41, 65] }],
  dataLabels: { enabled: false },

  xaxis: {
    categories: ["Feb", "Apr", "Jun", "Aug", "Oct", "Dec"],
    axisBorder: { show: false },
    labels: { style: { colors: "#a7a7a7", fontFamily: "Poppins" } },
  },
  yaxis: {
    show: true,
  },
  grid: {
    borderColor: "rgba(0, 0, 0, 0, 0)",
    padding: { top: 0, bottom: -8, left: 0, right: 0 },
  },
  tooltip: {
    enabled: true,
    y: { formatter: (value) => `${value}K` },
    style: { fontFamily: "Poppins" },
  },
  markers: { show: false },
};

const chart3 = new ApexCharts(
  document.querySelector("#curve_chart_Click_sub_2"),
  chartOptions3
);
chart3.render();

// side views chart

const chartOptions4 = {
  chart: {
    type: "area",
    height: 270,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: ["#5CB00D"],
  series: [{ name: "Measurable stuff", data: [18, 50, 42, 94, 41, 65] }],
  dataLabels: { enabled: false },
  stroke: { width: 3, curve: "smooth" },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: ["Feb", "Apr", "Jun", "Aug", "Oct", "Dec"],
    axisBorder: { show: false },
    labels: { style: { colors: "#a7a7a7", fontFamily: "Poppins" } },
  },
  yaxis: {
    show: true,
  },
  grid: {
    borderColor: "rgba(0, 0, 0, 0, 0)",
    padding: { top: 0, bottom: -8, left: 12, right: 0 },
  },
  tooltip: {
    enabled: true,
    y: { formatter: (value) => `${value}K` },
    style: { fontFamily: "Poppins" },
  },
  markers: { show: false },
};

const chart4 = new ApexCharts(
  document.querySelector("#curve_chart_Click_sub_3"),
  chartOptions4
);
chart4.render();

// side click chart

const chartOptions5 = {
  chart: {
    type: "bar",
    height: 270,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: ["#5BAE0D"],
  series: [{ name: "Measurable stuff", data: [18, 50, 42, 94, 41, 65] }],
  dataLabels: { enabled: false },

  xaxis: {
    categories: ["Feb", "Apr", "Jun", "Aug", "Oct", "Dec"],
    axisBorder: { show: false },
    labels: { style: { colors: "#a7a7a7", fontFamily: "Poppins" } },
  },
  yaxis: {
    show: true,
  },
  grid: {
    borderColor: "rgba(0, 0, 0, 0, 0)",
    padding: { top: 0, bottom: -8, left: 0, right: 0 },
  },
  tooltip: {
    enabled: true,
    y: { formatter: (value) => `${value}K` },
    style: { fontFamily: "Poppins" },
  },
  markers: { show: false },
};

const chart5 = new ApexCharts(
  document.querySelector("#curve_chart_Click_sub_4"),
  chartOptions5
);
chart5.render();



//  pro plan chart 


   const chartOptions999 = {
     series: [44, 295],
     labels: ["Click", "Views"],

     chart: {
       type: "donut",
       toolbar: { show: false },
       zoom: { enabled: false },
     },
     colors: ["#0098ED", "#5BAE0D"],

     dataLabels: { enabled: false },

     tooltip: {
       style: { fontFamily: "Poppins" },
     },

     legend: {
       show: false,
     },

     plotOptions: {
       pie: {
         donut: {
           background: "#006766",
           size: "85%",
           color: "#fff",

           labels: {
             show: true,
             name: {
               show: true,
               color: "#fff",
             },
             color: "#fff",

             total: {
               fontSize: "24px",
               color: "#fff",
               show: true,
             },
             value: {
               show: true,
               color: "#fff",
               fontSize: "20px",
             },
           },
         },
       },
     },
   };

   const chart999 = new ApexCharts(
     document.querySelector(".chart9999"),
     chartOptions999
   );
   chart999.render();
   const chart9991 = new ApexCharts(
     document.querySelector(".chart99991"),
     chartOptions999
   );
   chart9991.render();
   const chart9992 = new ApexCharts(
     document.querySelector(".chart99992"),
     chartOptions999
   );
   chart9992.render();
   const chart9993 = new ApexCharts(
     document.querySelector(".chart99993"),
     chartOptions999
   );
   chart9993.render();


//  pro plan chart  end 
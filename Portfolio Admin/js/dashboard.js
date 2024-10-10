$(function () {
  //
  // Carousel
  //
  $(".counter-carousel").owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    nav: false,
    rtl: true,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 5,
      },
      1400: {
        items: 6,
      },
    },
  });

  // =====================================
  // Profit
  // =====================================
  var options = {
    series: [
      {
        name: "Sale Success",
        data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.5, 2.7, 2.2, 3.6, 1.5, 1.5, 2.7],
      },
      {
        name: "Sale Loss",
        data: [-2.8, -1.1, -2.5, -1.5, -1.2, -2.8, -1.1, -2.5, -1.5, -1.2, -2.8, -1.1],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      fontFamily: "Plus Jakarta Sans,sans-serif",
      foreColor: "#adb0bb",
      height: 300,
      stacked: true,
      offsetX: -20
    },
    colors: ["var(--bs-primary)", "var(--bs-secondary)"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "70%",
        columnWidth: "20%",
        borderRadius: [5],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: -4,
      max: 4,
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      show: false,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      }
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#revenue-chart"), options);
  chart.render();

  // =====================================
  // Leads update
  // =====================================

  var options = {
    series: [44, 55, 67, 83, 76],
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'All Leads',
            formatter: function (w) {
              return 249;
            },
          },
        },
      },
    },
    colors: ["var(--bs-primary)", "var(--bs-secondary)", "var(--bs-success)", "var(--bs-warning)", "var(--bs-danger)"], // Specify your desired colors here
    labels: ['test 1', 'test 2', 'Missed Calls', 'Answered Calls', 'Unanswered Calls'],
    legend: {
      show: true,
      position: 'bottom', // Set the legend position to bottom
      labels: {
        colors: ['#000'], // Specify color of legend labels
      },
      markers: {
        fillColors: ["var(--bs-primary)", "var(--bs-secondary)", "var(--bs-success)", "var(--bs-warning)", "var(--bs-danger)"], // Match the colors with series colors
      },
      itemMargin: {
        horizontal: 5, // Adjust horizontal spacing between legend items
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  
  // =====================================
  // Breakup
  // =====================================
  var breakup = {
    color: "#adb5bd",
    series: [38, 40, 25],
    labels: ["2022", "2021", "2020"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["var(--bs-primary)", "#ecf2ff", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();

  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "var(--bs-secondary)",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.15,
        opacityTo: 0,
        stops: [20, 180],
      },
      opacity:0.5
    },


    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();

  // =====================================
  // Salary
  // =====================================
  var salary = {
    series: [
      {
        name: "Employee Salary",
        data: [20, 15, 30, 25, 10, 15],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      height: 260,
      type: "bar",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    colors: ["#f2f6fad9", "#f2f6fad9", "var(--bs-primary)", "#f2f6fad9", "#f2f6fad9", "#f2f6fad9"],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "45%",
        distributed: true,
        endingShape: "rounded",
      },
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [["Apr"], ["May"], ["June"], ["July"], ["Aug"], ["Sept"]],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#salary"), salary);
  chart.render();

  // =====================================
  // Customers
  // =====================================
  var customers = {
    chart: {
      id: "sparkline3",
      type: "area",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    series: [
      {
        name: "Customers",
        color: "var(--bs-secondary)",
        data: [30, 25, 35, 20, 30, 40],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.12,
        opacityTo: 0,
        stops: [20, 180],
      },
    },


    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#customers"), customers).render();

  // =====================================
  // performers by call handling
  // =====================================
    // Stacked Bar Chart -------> BAR CHART
    var options_stacked = {
      series: [
        {
          name: "Outbound Calls",
          data: [44, 55, 41, 37, 22],
        },
        {
          name: "Inbound Calls",
          data: [53, 32, 33, 52, 13],
        },
        {
          name: "Missed Calls",
          data: [12, 17, 11, 9, 15],
        },
        {
          name: "Answered Calls",
          data: [9, 7, 5, 8, 6],
        },
        {
          name: "Unanswered Calls",
          data: [25, 12, 19, 32, 25],
        },
      ],
      chart: {
        fontFamily: '"Nunito Sans", sans-serif',
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      grid: {
        borderColor: "transparent",
      },
      colors: ["var(--bs-primary)", "var(--bs-secondary)", "#ffae1f", "#fa896b", "#39b69a"],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "70%",
          columnWidth: "20%",
          borderRadius: [5],
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all'
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        title: {
          text: 'No. of Calls',
        },
        categories: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'],
        labels: {
          formatter: function (val) {
            return val;
          },
          style: {
            colors: [
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
            ],
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
        labels: {
          style: {
            colors: [
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
            ],
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
        theme: "dark",
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
        labels: {
          colors: ["#a1aab2"],
        },
      },
    };
  
    var chart_bar_stacked = new ApexCharts(
      document.querySelector("#chart-bar-stacked"),
      options_stacked
    );
    chart_bar_stacked.render();

 // Stacked Bar Chart -------> BAR CHART
 var options_stacked = {
  series: [
    {
      name: "Answered",
      data: [44, 55, 41, 37, 22, 23],
    },
    {
      name: "Call Backs",
      data: [53, 32, 33, 52, 13, 34],
    },
    {
      name: "Interested",
      data: [12, 17, 11, 9, 15, 43],
    },
    {
      name: "Not Interested",
      data: [9, 7, 5, 8, 6, 5],
    },
    {
      name: "Closed",
      data: [25, 12, 19, 32, 25, 23],
    },
    {
      name: "Backout",
      data: [25, 12, 19, 32, 25, 34],
    },
  ],
  chart: {
    fontFamily: '"Nunito Sans", sans-serif',
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  grid: {
    borderColor: "transparent",
  },
  colors: ["var(--bs-primary)", "var(--bs-secondary)","var(--bs-info)", "#ffae1f", "#fa896b", "#39b69a"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "70%",
      columnWidth: "20%",
      borderRadius: [5],
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    },
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  xaxis: {
    title: {
      text: 'No. of Leads',
    },
    categories: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'],
    labels: {
      formatter: function (val) {
        return val;
      },
      style: {
        colors: [
          "#a1aab2",
          "#a1aab2",
          "#a1aab2",
          "#a1aab2",
          "#a1aab2",
        ],
      },
    },
  },
  yaxis: {
    title: {
      text: undefined,
    },
    labels: {
      style: {
        colors: [
          "#a1aab2",
          "#a1aab2",
          "#a1aab2",
          "#a1aab2",
          "#a1aab2",
        ],
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      },
    },
    theme: "dark",
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetX: 40,
    labels: {
      colors: ["#a1aab2"],
    },
  },
};

var chart_bar_stacked = new ApexCharts(
  document.querySelector("#chart-bar-stacked2"),
  options_stacked
);
chart_bar_stacked.render();

      // Custome circle Radial Bar Chart -------> RADIAL CHART
      var options_custom_circle = {
        series: [70, 63, 81, 92, 95], // Use numeric values for time
        chart: {
          fontFamily: '"Nunito Sans", sans-serif',
          height: 390,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ["var(--bs-primary)", "var(--bs-secondary)", "#ffae1f", "#fa896b", "#39b69a"],
        labels: ["Agent 1", "Agent 2", "Agent 2", "Agent 4", "Agent 5"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 30,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            // Convert numeric value to time format (e.g., '12hrs')
            var timeFormat = opts.w.config.series[opts.seriesIndex] + 'hrs';
            return seriesName + ":  " + timeFormat;
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        }],
      };
      
      var chart_radial_custom_circle = new ApexCharts(
        document.querySelector("#chart-radial-circle"),
        options_custom_circle
      );
      chart_radial_custom_circle.render();
      

      // Custome lead by status
      var options = {
        series: [42, 47, 52, 58, 65, 50],
        chart: {
        width: 380,
        type: 'polarArea'
      },
      labels: ['Answered', 'Call Backs', 'Interested', 'Not Interested', 'Closed', 'Backout'],
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      },
      colors: ["var(--bs-primary)", "var(--bs-secondary)","var(--bs-info)", "#ffae1f", "#fa896b", "#39b69a"],

      };

      var chart = new ApexCharts(document.querySelector("#chart2"), options);
      chart.render();
    
  // =====================================
  // Stats
  // =====================================
  var stats = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 180,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Weekly Stats",
        color: "var(--bs-primary)",
        data: [5, 15, 10, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.20,
        opacityTo: 0,
        stops: [20, 180],
      },
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#stats"), stats).render();
});



// Monthly Volume Vs daily Avg

var options = {
  series: [{
  name: 'Website Blog',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Social Media',
  type: 'line',
  data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
}],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  width: [0, 4]
},
title: {
  text: 'Traffic Sources'
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', ],
xaxis: {
  type: 'datetime'
},
yaxis: [{
  title: {
    text: 'Website Blog',
  },

}, {
  opposite: true,
  title: {
    text: 'Social Media'
  }
}]
};

var chart = new ApexCharts(document.querySelector("#monthly-volume"), options);
chart.render();


$(function () {
  // Simple Pie Chart -------> PIE CHART
  var options_simple = {
    series: [44, 55, 30, 43, 22],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      width: 380,
      type: "pie",
    },
    colors: ["var(--bs-primary)", "var(--bs-secondary)", "var(--bs-warning)", "var(--bs-info)", "var(--bs-danger)"],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    }],
    legend: {
      labels: {
        colors: ["#a1aab2"],
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.globals.labels[opts.seriesIndex] + ' ' + val.toFixed(0) + "%";
      },
    },
  };
  
  var chart_pie_simple = new ApexCharts(
    document.querySelector("#chart-pie-simple"),
    options_simple
  );
  chart_pie_simple.render();


  var options_line = {
    series: [{
      name: "Desktops",
      data: [80, 140, 100, 110, 10, 130, 120, 116, 148, 34, 13, 89, 140, 56, 97, 45],
    }, ],
    chart: {
      height: 350,
      type: "line",
      fontFamily: '"Nunito Sans",sans-serif',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["var(--bs-primary)"],
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["rgba(0,0,0,0.2)", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
      borderColor: "transparent",
    },
    xaxis: {
      categories: [
        "1 Jan 2024",
        "3 Jan 2024",
        "5 Jan 2024",
        "7 Jan 2024",
        "9 Jan 2024",
        "11 Jan 2024",
        "13 Jan 2024",
        "15 Jan 2024",
        "17 Jan 2024",
        "19 Jan 2024",
        "21 Jan 2024",
        "23 Jan 2024",
        "25 Jan 2024",
        "27 Jan 2024",
        "29 Jan 2024",
        "31 Jan 2024",
      ],
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart_line_basic = new ApexCharts(
    document.querySelector("#chart-line-basic"),
    options_line
  );
  chart_line_basic.render();
  
});
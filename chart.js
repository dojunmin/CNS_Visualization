  Highcharts.chart("container", {
    title: {
      text: "LG CNS HomePage Customer journey analysis",
    },
    subtitle: {
      text: '2022.05.16 ~ 2022.05.20'
    },
    accessibility: {
      point: {
        valueDescriptionFormat:
          "{index}. {point.from} to {point.to}, {point.weight}.",
      },
    },
    series: [
      {
        keys: ["from", "to", "weight"],
        data: [         
          ["메인", "인재채용_", 629],
          ["메인", "회사소개", 536],
          ["메인", "비즈니스/클라우드", 224],
          ["메인", "DX자료실", 220],
          ["메인", "이탈", 2500],
          ["메인", "기타", 953],
          
          ["인재채용", "메인_", 35],
          ["인재채용", "회사소개", 15],
          ["인재채용", "DX자료실", 12],
          ["인재채용", "비즈니스/클라우드", 1],          
          ["인재채용", "이탈", 835],          
          ["인재채용", "기타", 42],          

          ["인재채용_", "메인__", 139],
          ["인재채용_", "DX자료실__", 10],
          ["인재채용_", "회사소개__", 25],
          ["인재채용_", "비즈니스/클라우드__", 19],
          ["인재채용_", "이탈_", 531],
          ["인재채용_", "기타_", 86],
          ["메인_", "인재채용__", 34],
          ["메인_", "DX자료실__", 13],
          ["메인_", "회사소개__", 13],
          ["메인_", "비즈니스/클라우드__", 12],          
          ["메인_", "이탈_", 73],
          ["메인_", "기타_", 70],
          ["회사소개", "메인__", 85],
          ["회사소개", "DX자료실__", 8],
          ["회사소개", "인재채용__", 34],
          ["회사소개", "비즈니스/클라우드__", 33],
          ["회사소개", "이탈_", 277],
          ["회사소개", "기타_", 147],
          ["DX자료실", "메인__", 51],
          ["DX자료실", "회사소개__", 25],
          ["DX자료실", "인재채용__", 17],
          ["DX자료실", "비즈니스/클라우드__", 19],
          ["DX자료실", "이탈_", 85],
          ["DX자료실", "기타_", 181],
          ["비즈니스/클라우드", "메인__", 36],
          ["비즈니스/클라우드", "DX자료실__", 34],
          ["비즈니스/클라우드", "회사소개__", 21],
          ["비즈니스/클라우드", "인재채용__", 8],
          ["비즈니스/클라우드", "이탈_", 64],
          ["비즈니스/클라우드", "기타_", 138],

          ["메인__", "인재채용___", 83],
          ["메인__", "DX자료실___", 22],
          ["메인__", "회사소개___", 52],
          ["메인__", "비즈니스/클라우드___", 29],
          ["메인__", "이탈___", 212],
          ["메인__", "기타__", 142],
          ["인재채용__", "메인___", 14],
          ["인재채용__", "DX자료실___", 5],
          ["인재채용__", "회사소개___", 9],
          ["인재채용__", "비즈니스/클라우드___", 2],
          ["인재채용__", "이탈___", 82],
          ["인재채용__", "기타__", 20],
          ["회사소개__", "메인___", 14],
          ["회사소개__", "DX자료실___", 4],
          ["회사소개__", "인재채용___", 19],
          ["회사소개__", "비즈니스/클라우드___", 11],
          ["회사소개__", "이탈___", 59],
          ["회사소개__", "기타__", 47],
          ["DX자료실__", "메인___", 5],
          ["DX자료실__", "회사소개___", 13],
          ["DX자료실__", "인재채용___", 6],
          ["DX자료실__", "비즈니스/클라우드___", 12],
          ["DX자료실__", "이탈___", 32],
          ["DX자료실__", "기타__", 89],
          ["비즈니스/클라우드__", "메인___", 20],
          ["비즈니스/클라우드__", "DX자료실___", 7],
          ["비즈니스/클라우드__", "회사소개___", 8],
          ["비즈니스/클라우드__", "인재채용___", 5],
          ["비즈니스/클라우드__", "이탈___", 32],
          ["비즈니스/클라우드__", "기타__", 50],
        ],
        events: {          
          click: function (event) {
            if (event.point.name === "메인") {
              drawChartMain();
              document.getElementById("chart_main").style.height = "400px";
              document.getElementById("chart_career").style.height = "0px";
              drawWordCloud();
              drawGraphLCP();
              drawGraphFID();
              drawGraphCLS();
              document.getElementById(
                "beausable"
              ).innerHTML = `<a href="https://tool.beusable.net/report/62820a4b6af1f0214219bdbc/" target="_black"><img src=".\\main_heatmap.png" style="width:30%; height:30%;"></img></a>`
              + `<a href="https://tool.beusable.net/report/62820a4b6af1f0214219bdbc/" target="_black"><img src=".\\main_move.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`
                + `<a href="https://tool.beusable.net/report/62820a4b6af1f0214219bdbc/" target="_black"><img src=".\\main_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`;
              // document.getElementById("vital_main").style.visibility = "visible";
              // document.getElementById("vital_career").style.height = "0px";
              // document.getElementById("vital_company").style.height = "0px";
              // document.getElementById("vital_dx").style.height = "0px";
              // document.getElementById("vital_biz").style.height = "0px";              
            } else if (event.point.name === "인재채용") {
              drawChartCareer();
              drawGraphLCP();
              drawGraphFID();
              drawGraphCLS();
              document.getElementById("chart_main").style.height = "0px";
              document.getElementById("chart_career").style.height = "400px";
              document.getElementById(
                "beausable"
              ).innerHTML = `<a href="https://tool.beusable.net/report/6281fdba6af1f0214219bda9/" target="_black"><img src=".\\career_heatmap.png" style="width:30%; height:30%;" ></img></a>`
              + `<a href="https://tool.beusable.net/report/6281fdba6af1f0214219bda9/" target="_black"><img src=".\\career_move.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`
                + `<a href="https://tool.beusable.net/report/6281fdba6af1f0214219bda9/" target="_black"><img src=".\\career_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`;
            } else if (event.point.name === "DX자료실" || event.point.name === "DX자료실_" || event.point.name === "DX자료실__" || event.point.name === "DX자료실___") {
              drawGraphLCP();
              drawGraphFID();
              drawGraphCLS();
              document.getElementById("chart_main").style.height = "0px";
              document.getElementById("chart_career").style.height = "0px";
              document.getElementById(
                "beausable"
              ).innerHTML = `<a href="https://tool.beusable.net/report/6281fd616af1f0214219bda6/" target="_black"><img src=".\\dx_heatmap.png" style="width:30%; height:30%;"></img></a>`
              + `<a href="https://tool.beusable.net/report/6281fd616af1f0214219bda6/" target="_black"><img src=".\\dx_move.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`
                + `<a href="https://tool.beusable.net/report/6281fd616af1f0214219bda6/" target="_black"><img src=".\\dx_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`;
            } else if (event.point.name === "비즈니스/클라우드" || event.point.name === "비즈니스/클라우드_" || event.point.name === "비즈니스/클라우드__" || event.point.name === "비즈니스/클라우드___") {
              drawGraphLCP();
              drawGraphFID();
              drawGraphCLS();
              document.getElementById("chart_main").style.height = "0px";
              document.getElementById("chart_career").style.height = "0px";
              document.getElementById(
                "beausable"
              ).innerHTML = `<a href="https://tool.beusable.net/report/6281fbe96af1f0214219bd93/" target="_black"><img height="30%", src=".\\business_heatmap.png" style="width:30%; height:30%;"></img></a>`
              + `<a href="https://tool.beusable.net/report/6281fbe96af1f0214219bd93/" target="_black"><img src=".\\business_move.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`
                + `<a href="https://tool.beusable.net/report/6281fbe96af1f0214219bd93/" target="_black"><img src=".\\business_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`;
            } else if (event.point.name === "회사소개" || event.point.name === "회사소개_" || event.point.name === "회사소개__" || event.point.name === "회사소개___") {
              drawGraphLCP();
              drawGraphFID();
              drawGraphCLS();
              document.getElementById("chart_main").style.height = "0px";
              document.getElementById("chart_career").style.height = "0px";
              document.getElementById(
                "beausable"
                ).innerHTML = `<a href="https://tool.beusable.net/report/6281fbe96af1f0214219bd93/" target="_black"><img height="30%", src=".\\business_heatmap.png" style="width:30%; height:30%;"></img></a>`
                + `<a href="https://tool.beusable.net/report/6281fbe96af1f0214219bd93/" target="_black"><img src=".\\business_move.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`
                  + `<a href="https://tool.beusable.net/report/6281fbe96af1f0214219bd93/" target="_black"><img src=".\\business_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`;
            } else if (event.point.name === "메인_" || event.point.name === "메인__" || event.point.name === "메인___") {
              drawGraphLCP();
              drawGraphFID();
              drawGraphCLS();
              document.getElementById(
                "beausable"
              ).innerHTML = `<a href="https://tool.beusable.net/report/62820a4b6af1f0214219bdbc/" target="_black"><img src=".\\main_heatmap.png" style="width:30%; height:30%;"></img></a>`
              + `<a href="https://tool.beusable.net/report/62820a4b6af1f0214219bdbc/" target="_black"><img src=".\\main_move.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`
                + `<a href="https://tool.beusable.net/report/62820a4b6af1f0214219bdbc/" target="_black"><img src=".\\main_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`;
            } else if (event.point.name === "인재채용_" || event.point.name === "인재채용__" || event.point.name === "인재채용___") {              
              drawGraphLCP();
              drawGraphFID();
              drawGraphCLS();              
              document.getElementById(
                "beausable"
              ).innerHTML = `<a href="https://tool.beusable.net/report/6281fdba6af1f0214219bda9/" target="_black"><img src=".\\career_heatmap.png" style="width:30%; height:30%;" ></img></a>`
              + `<a href="https://tool.beusable.net/report/6281fdba6af1f0214219bda9/" target="_black"><img src=".\\career_move.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`
                + `<a href="https://tool.beusable.net/report/6281fdba6af1f0214219bda9/" target="_black"><img src=".\\career_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img></a>`;
            } else if (event.point.name === "이탈" || event.point.name === "이탈_" || event.point.name === "이탈__" || event.point.name === "이탈___") {
              drawGraphLCP();
              drawGraphFID();
              drawGraphCLS();
              drawWordCloud();
              document.getElementById("chart_main").style.height = "0px";
              document.getElementById("chart_career").style.height = "0px";
            } else if (event.point.name === "기타" || event.point.name === "기타_" || event.point.name === "기타__") {
              drawGraphLCP();
              drawGraphFID();
              drawGraphCLS();
              drawWordCloud();
              document.getElementById("chart_main").style.height = "0px";
              document.getElementById("chart_career").style.height = "0px";
            }
          }
        },
        type: "sankey",
        name: "pageflow",
      },
    ]
  });  

  // function drawGraph() {
  //   Highcharts.chart('graph', {
  //     chart: {
  //       type: 'bar'
  //     },
  //     title: {
  //       text: 'LG CNS 홈페이지 Web Vitals'
  //     },
  //     subtitle: {
  //       text: '2022.05.16 ~ 2022.05.20'
  //     },
  //     xAxis: {
  //       categories: ['LCP', 'FID', 'CLS'],
  //       title: {
  //         text: null
  //       }
  //     },
  //     yAxis: {
  //       min: 0,
  //       title: {
  //         text: '시간 (msec)',
  //         align: 'high'
  //       },
  //       labels: {
  //         overflow: 'justify'
  //       }
  //     },
  //     tooltip: {
  //       valueSuffix: 'msec'
  //     },
  //     plotOptions: {
  //       bar: {
  //         dataLabels: {
  //           enabled: true
  //         }
  //       }
  //     },
  //     legend: {
  //       layout: 'vertical',
  //       align: 'right',
  //       verticalAlign: 'top',
  //       x: -40,
  //       y: 80,
  //       floating: true,
  //       borderWidth: 1,
  //       backgroundColor:
  //         Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
  //       shadow: true
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     series: [{
  //       name: '전체페이지',
  //       data: [0.8, 0.5, 0.03]
  //     }, {
  //       name: '메인',
  //       data: [1.5, 0.6, 0.05]
  //     }, {
  //       name: '인재채용',
  //       data: [0.6, 0.5, 0.04]
  //     }, {
  //       name: '회사소개',
  //       data: [1.0, 0.7, 0.03]
  //     }, {
  //       name: 'DX자료실',
  //       data: [0.9, 0.6, 0.05]
  //     }, {
  //       name: '비즈니스/클라우드',
  //       data: [1.3, 0.8, 0.09]
  //     }]
  //   });
  // }

  function drawGraphLCP() {    
Highcharts.chart('graph_LCP', {
  chart: {
    type: 'column'
  },
  title: {
    align: 'center',
    text: 'LG CNS 홈페이지 Web Vitals 평균 (LCP)'
  },
  subtitle: {
    align: 'center',
    text: '2022.05.16 ~ 2022.05.20'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: '초 (sec)'
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true
      }
    }
  },

  series: [
    {
      name: "LCP",
      colorByPoint: true,
      data: [
        {
          name: "전체페이지",
          y: 1.523
        },
        {
          name: "메인",
          y: 1.523
        },
        {
          name: "인재채용",
          y: 1.497          
        },
        {
          name: "회사소개",
          y: 1.528          
        },
        {
          name: "비즈니스/클라우드",
          y: 1.254
        },
        {
          name: "DX자료실",
          y: 0.796
        }
      ]
    }
  ]
});
  }

  function drawGraphFID() {
    // Create the chart
Highcharts.chart('graph_FID', {
  chart: {
    type: 'column'
  },
  title: {
    align: 'center',
    text: 'LG CNS 홈페이지 Web Vitals 평균 (FID)'
  },
  subtitle: {
    align: 'center',
    text: '2022.05.16 ~ 2022.05.20'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: '밀리세컨드 (ms)'
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true
      }
    }
  },

  series: [
    {
      name: "FID",
      colorByPoint: true,
      data: [
        {
          name: "전체페이지",
          y: 8.314
        },
        {
          name: "메인",
          y: 9.611
        },
        {
          name: "인재채용",
          y: 15.082
        },
        {
          name: "회사소개",
          y: 6.835
        },
        {
          name: "비즈니스/클라우드",
          y: 4.053
        },
        {
          name: "DX자료실",
          y: 2.531
        }
      ]
    }
  ]
});
  }

  function drawGraphCLS() {
    // Create the chart
Highcharts.chart('graph_CLS', {
  chart: {
    type: 'column'
  },
  title: {
    align: 'center',
    text: 'LG CNS 홈페이지 Web Vitals 평균 (CLS)'
  },
  subtitle: {
    align: 'center',
    text: '2022.05.16 ~ 2022.05.20'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'CLS'
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true
      }
    }
  },

  series: [
    {
      name: "CLS",
      colorByPoint: true,
      data: [
        {
          name: "전체페이지",
          y: 0.0472
        },
        {
          name: "메인",
          y: 0.1398
        },
        {
          name: "인재채용",
          y: 0.0249
        },
        {
          name: "회사소개",
          y: 0.0113
        },
        {
          name: "비즈니스/클라우드",
          y: 0.0067
        },
        {
          name: "DX자료실",
          y: 0.0074
        }
      ]
    }
  ]
});
  }

  function drawChartMain() {
    Highcharts.chart('chart_main', {

      chart: {
        type: 'item'
      },
    
      title: {
        text: 'LG CNS 홈페이지 유입 차트 (메인 페이지)'
      },
    
      subtitle: {
        text: '2022.05.16 ~ 2022.05.20'
      },
    
      legend: {
        labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
      },
    
      series: [{
        name: 'Representatives',
        keys: ['name', 'y', 'color', 'label'],
        data: [
          ['Naver/검색', 1734, '#64A12D', 'Naver'],
          ['Google/검색', 1327, '#009EE0', 'Google'],
          ['직접 유입', 991, '#FFED00', 'Direct'],
          ['Naver 링크', 266, '#EB001F', 'Naver/링크'],
          ['Daum/검색', 131, '#BE3075', 'Daum']
        ],
        dataLabels: {
          enabled: true,
          format: '{point.label}'
        },
    
        // Circular options
        center: ['50%', '88%'],
        size: '170%',
        startAngle: -100,
        endAngle: 100
      }],
    
      responsive: {
        rules: [{
          condition: {
            maxWidth: 600
          },
          chartOptions: {
            series: [{
              dataLabels: {
                distance: -30
              }
            }]
          }
        }]
      }
    });
  }

  function drawChartCareer() {
    Highcharts.chart('chart_career', {

      chart: {
        type: 'item'
      },
    
      title: {
        text: 'LG CNS 홈페이지 유입 차트 (인재채용 페이지)'
      },
    
      subtitle: {
        text: '2022.05.16 ~ 2022.05.20'
      },
    
      legend: {
        labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
      },
    
      series: [{
        name: 'Representatives',
        keys: ['name', 'y', 'color', 'label'],
        data: [
          ['Google/검색', 417, '#009EE0', 'Google'],
          ['Naver/검색', 282, '#64A12D', 'Naver'],          
          ['Naver 링크', 104, '#EB001F', 'Naver/링크'],
          ['직접 유입', 75, '#FFED00', 'Direct']
        ],
        dataLabels: {
          enabled: true,
          format: '{point.label}'
        },
    
        // Circular options
        center: ['50%', '88%'],
        size: '170%',
        startAngle: -100,
        endAngle: 100
      }],
    
      responsive: {
        rules: [{
          condition: {
            maxWidth: 600
          },
          chartOptions: {
            series: [{
              dataLabels: {
                distance: -30
              }
            }]
          }
        }]
      }
    });
  }

  function drawWordCloud() {
    const text =
        "느림, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다, 어렵다"
        + ", 컨텐츠부족, 페이지 이동, 로딩시간, 유익한, CNS이미지대표하기부족, 달라진게없음, 새로운컨텐츠부족, 내용이어려움 "
        + ", 인재채용과연관성부족, 메인보다블로그, 느림, 컨텐츠부족, 페이지 이동, 느림"
        + ", 컨텐츠부족, 페이지 이동,느림, 컨텐츠부족, 페이지이동, 혼란스러움, 흥미반감, 흥미반감, 흥미반감"
        + ", 산만하다, 산만하다,산만하다,산만하다,산만하다,산만하다,산만하다 "
        + ", 직관적이지않음, 직관적이지않음, 직관적이지않음, 직관적이지않음"
      lines = text.split(/[,\. ]+/g),
      data = lines.reduce((arr, word) => {
        let obj = Highcharts.find(arr, (obj) => obj.name === word);
        console.log(arr);
        if (obj) {
          obj.weight += 1;
        } else {
          obj = {
            name: word,
            weight: 1,
          };
          arr.push(obj);
        }
        return arr;
      }, []);
  
    Highcharts.chart("word_cloud", {
      accessibility: {
        screenReaderSection: {
          beforeChartFormat:
            "<h5>{chartTitle}</h5>" +
            "<div>{chartSubtitle}</div>" +
            "<div>{chartLongdesc}</div>" +
            "<div>{viewTableButton}</div>",
        },
      },
      series: [
        {
          type: "wordcloud",
          data,
          name: "Occurrences",
        },
      ],
      title: {
        text: "LG CNS 홈페이지 설문조사 결과",
      },
    });
  }
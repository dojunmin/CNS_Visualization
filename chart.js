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
          // ["naver", "메인", 1065],
          // ["google", "메인", 812],
          // ["다이렉트", "메인", 639],
          // ["naver/링크", "메인", 162],
          // ["naver", "인재채용", 176, 1],
          // ["google", "인재채용", 243, 1],
          // ["다이렉트", "인재채용", 47, 1],
          // ["naver/링크", "인재채용", 72, 1],          
          //["메인", "신입사원/하계인턴 채용", 211],
          ["메인", "비즈니스/클라우드", 139],
          ["메인", "DX자료실", 145],
          ["메인", "회사소개", 336],          
          ["메인", "인재채용", 405],
          ["비즈니스/클라우드", "문의하기", 35],
          ["비즈니스/클라우드", "CloudXper", 20],
          ["비즈니스/클라우드", "CloudXper ProOps", 19],
          ["비즈니스/클라우드", "데이터센터", 19],
          ["DX자료실", "문의하기", 15],
          ["DX자료실", "미션 잉글리시", 110],
          ["DX자료실", "LISA 스피킹 클래스", 69],
          ["DX자료실", "LISA TOST", 79],
          ["DX자료실", "하루조각", 97],
          ["회사소개", "문의하기", 33],
          ["회사소개", "CEO소개", 21],
          ["회사소개", "History", 53],
          ["회사소개", "Vision", 29],
          ["회사소개", "투자정보", 269],          
          ["인재채용", "문의하기", 40],
          ["인재채용", "DX 지원하기", 205],
          ["인재채용", "스마트팩토리 지원하기", 150],
          ["인재채용", "인턴(학사)", 78],          
          ["인재채용", "인턴(석/박사)", 59],
          // ["인재채용", "메인", 92],
          // ["인재채용", "DX자료실", 8],
          // ["인재채용", "회사소개", 14],        
          // ["인재채용", "비즈니스/클라우드", 5],
          // ["회사소개", "메인", 52],
          // ["회사소개", "DX자료실", 5],        
          // ["회사소개", "비즈니스/클라우드", 19],
          // ["DX자료실", "메인", 32],
          // ["DX자료실", "인재채용", 15],
          // ["DX자료실", "회사소개", 15],        
          // ["DX자료실", "비즈니스/클라우드", 14]
        ],
        events: {          
          click: function (event) {
            if (event.point.name === "메인") {
              drawChart();
              drawGraph();
              drawWordCloud();              
              document.getElementById(
                "beausable"
              ).innerHTML = `<img src=".\\main_heatmap.png" style="width:30%; height:30%;"></img>`
              + `<img src=".\\main_move.png" style="width:30%; height:30%; margin-left:3%;"></img>`
                + `<img src=".\\main_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img>`;
              // document.getElementById("vital_main").style.visibility = "visible";
              // document.getElementById("vital_career").style.height = "0px";
              // document.getElementById("vital_company").style.height = "0px";
              // document.getElementById("vital_dx").style.height = "0px";
              // document.getElementById("vital_biz").style.height = "0px";              
            } else if (event.point.name === "인재채용") {
              document.getElementById(
                "beausable"
              ).innerHTML = `<img src=".\\career_heatmap.png" style="width:30%; height:30%;"></img>`
              + `<img src=".\\career_move.png" style="width:30%; height:30%; margin-left:3%;"></img>`
                + `<img src=".\\career_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img>`;
              // document.getElementById("chart").style.height = "0px";
              // document.getElementById("graph").style.height = "0px";
              // document.getElementById("word_cloud").style.height = "0px";              
              // document.getElementById("vital_main").style.height = "0px";
              // document.getElementById("vital_career").style.visibility = "visible";
              // document.getElementById("vital_company").style.height = "0px";
              // document.getElementById("vital_dx").style.height = "0px";
              // document.getElementById("vital_biz").style.height = "0px";              
            } else if (event.point.name === "DX자료실") {
              document.getElementById(
                "beausable"
              ).innerHTML = `<img src=".\\dx_heatmap.png" style="width:30%; height:30%;"></img>`
              + `<img src=".\\dx_move.png" style="width:30%; height:30%; margin-left:3%;"></img>`
                + `<img src=".\\dx_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img>`;
              // document.getElementById("vital_main").style.height = "0px";
              // document.getElementById("vital_career").style.height = "0px";
              // document.getElementById("vital_company").style.height = "0px";
              // document.getElementById("vital_dx").style.visibility = "visible";
              // document.getElementById("vital_biz").style.height = "0px";
            } else if (event.point.name === "비즈니스/클라우드") {
              document.getElementById(
                "beausable"
              ).innerHTML = `<img height="30%", src=".\\business_heatmap.png" style="width:30%; height:30%;"></img>`
              + `<img src=".\\business_move.png" style="width:30%; height:30%; margin-left:3%;"></img>`
                + `<img src=".\\business_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img>`;
              // document.getElementById("vital_main").style.height = "0px";
              // document.getElementById("vital_career").style.height = "0px";
              // document.getElementById("vital_company").style.height = "0px";
              // document.getElementById("vital_dx").style.height = "0px";
              // document.getElementById("vital_biz").style.visibility = "visible";
            } else if (event.point.name === "회사소개") {
              document.getElementById(
                "beausable"
              ).innerHTML = `<img src=".\\business_heatmap.png" style="width:30%; height:30%;"></img>`
              + `<img src=".\\business_move.png" style="width:30%; height:30%; margin-left:3%;"></img>`
                + `<img src=".\\business_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img>`;
              // document.getElementById("vital_main").style.height = "0px";
              // document.getElementById("vital_career").style.height = "0px";
              // document.getElementById("vital_company").style.visibility = "visible";
              // document.getElementById("vital_dx").style.height = "0px";
              // document.getElementById("vital_biz").style.height = "0px";
            }
          },
        },
        type: "sankey",
        name: "pageflow",
      },
    ]
  });

  function drawWordCloud() {
    const text =
        "느림, 컨텐츠부족, 페이지 이동, 로딩시간, 유익한, CNS이미지대표하기부족, 달라진게없음, 새로운컨텐츠부족, 내용이어려움, 내용이어려움,내용이어려움,내용이어려움,내용이어려움,내용이어려움,내용이어려움,내용이어려움,인재채용과연관성부족, 메인보다블로그, 느림, 컨텐츠부족, 페이지 이동,느림, 컨텐츠부족, 페이지 이동,느림, 컨텐츠부족, 페이지 이동",
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

  function drawGraph() {
    Highcharts.chart('graph', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'LG CNS 홈페이지 Web Vitals'
      },
      subtitle: {
        text: '2022.05.16 ~ 2022.05.20'
      },
      xAxis: {
        categories: ['LCP', 'FID', 'CLS'],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: '시간 (msec)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: 'msec'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: '전체페이지',
        data: [0.8, 0.5, 0.03]
      }, {
        name: '메인',
        data: [1.5, 0.6, 0.05]
      }, {
        name: '인재채용',
        data: [0.6, 0.5, 0.04]
      }, {
        name: '회사소개',
        data: [1.0, 0.7, 0.03]
      }, {
        name: 'DX자료실',
        data: [0.9, 0.6, 0.05]
      }, {
        name: '비즈니스/클라우드',
        data: [1.3, 0.8, 0.09]
      }]
    });
  }

  function drawChart() {
    Highcharts.chart('chart', {

      chart: {
        type: 'item'
      },
    
      title: {
        text: 'LG CNS 홈페이지 유입 차트'
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
          ['Naver/검색', 1065, '#64A12D', 'Naver'],
          ['Google/검색', 812, '#009EE0', 'Google'],
          ['직접 유입', 639, '#FFED00', 'Direct'],
          ['Naver 링크', 162, '#EB001F', 'Naver/링크']
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
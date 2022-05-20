  Highcharts.chart("container", {
    title: {
      text: "LG CNS HomePage Customer journey analysis",
    },
    accessibility: {
      point: {
        valueDescriptionFormat:
          "{index}. {point.from} to {point.to}, {point.weight}.",
      },
    },
    series: [
      {
        keys: ["from", "to", "weight", "labelrank"],
        data: [
          ["naver", "메인", 1065],
          ["google", "메인", 812],
          ["다이렉트", "메인", 639],
          ["naver/링크", "메인", 162],
          // ["naver", "인재채용", 176, 1],
          // ["google", "인재채용", 243, 1],
          // ["다이렉트", "인재채용", 47, 1],
          // ["naver/링크", "인재채용", 72, 1],
          ["메인", "인재채용", 405],
          //["메인", "신입사원/하계인턴 채용", 211],
          ["메인", "회사소개", 336],
          ["메인", "DX자료실", 145],
          ["메인", "비즈니스/클라우드", 139],
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
              document.getElementById(
                "beausable"
              ).innerHTML = `<img src="C:\\img\\main_heatmap.png" style="width:30%; height:30%;"></img>`
              + `<img src="C:\\img\\main_move.png" style="width:30%; height:30%; margin-left:3%;"></img>`
                + `<img src="C:\\img\\main_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img>`;
              document.getElementById("vital_main").style.visibility = "visible";
              document.getElementById("vital_career").style.height = "0px";
              document.getElementById("vital_company").style.height = "0px";
              document.getElementById("vital_dx").style.height = "0px";
              document.getElementById("vital_biz").style.height = "0px";
              // document.getElementById(
              //   "webvitals"
              // ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;              
            } else if (event.point.name === "인재채용") {
              document.getElementById(
                "beausable"
              ).innerHTML = `<img src="C:\\img\\career_heatmap.png" style="width:30%; height:30%;"></img>`
              + `<img src="C:\\img\\career_move.png" style="width:30%; height:30%; margin-left:3%;"></img>`
                + `<img src="C:\\img\\career_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img>`;
              document.getElementById("vital_main").style.height = "0px";
              document.getElementById("vital_career").style.visibility = "visible";
              document.getElementById("vital_company").style.height = "0px";
              document.getElementById("vital_dx").style.height = "0px";
              document.getElementById("vital_biz").style.height = "0px";
              // document.getElementById(
              //   "webvitals"
              // ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;              
            } else if (event.point.name === "DX자료실") {
              document.getElementById(
                "beausable"
              ).innerHTML = `<img src="C:\\img\\dx_heatmap.png" style="width:30%; height:30%;"></img>`
              + `<img src="C:\\img\\dx_move.png" style="width:30%; height:30%; margin-left:3%;"></img>`
                + `<img src="C:\\img\\dx_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img>`;
              document.getElementById("vital_main").style.height = "0px";
              document.getElementById("vital_career").style.height = "0px";
              document.getElementById("vital_company").style.height = "0px";
              document.getElementById("vital_dx").style.visibility = "visible";
              document.getElementById("vital_biz").style.height = "0px";
              // document.getElementById(
              //   "webvitals"
              // ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;              
            } else if (event.point.name === "비즈니스/클라우드") {
              document.getElementById(
                "beausable"
              ).innerHTML = `<img height="30%", src="C:\\img\\business_heatmap.png" style="width:30%; height:30%;"></img>`
              + `<img src="C:\\img\\business_move.png" style="width:30%; height:30%; margin-left:3%;"></img>`
                + `<img src="C:\\img\\business_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img>`;
              document.getElementById("vital_main").style.height = "0px";
              document.getElementById("vital_career").style.height = "0px";
              document.getElementById("vital_company").style.height = "0px";
              document.getElementById("vital_dx").style.height = "0px";
              document.getElementById("vital_biz").style.visibility = "visible";
              // document.getElementById(
              //   "webvitals"
              // ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;              
            } else if (event.point.name === "회사소개") {
              document.getElementById(
                "beausable"
              ).innerHTML = `<img src="C:\\img\\business_heatmap.png" style="width:30%; height:30%;"></img>`
              + `<img src="C:\\img\\business_move.png" style="width:30%; height:30%; margin-left:3%;"></img>`
                + `<img src="C:\\img\\business_scroll.png" style="width:30%; height:30%; margin-left:3%;"></img>`;
              document.getElementById("vital_main").style.height = "0px";
              document.getElementById("vital_career").style.height = "0px";
              document.getElementById("vital_company").style.visibility = "visible";
              document.getElementById("vital_dx").style.height = "0px";
              document.getElementById("vital_biz").style.height = "0px";
              // document.getElementById(
              //   "webvitals"
              // ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;
              
            }
          },
        },
        type: "sankey",
        name: "pageflow",
      },
    ]
  });


// function drawVisualization(event_name) {
//   var data = google.visualization.arrayToDataTable([
//     ['Vitals', '전체페이지 ', event_name],
//     ['LCP', 20, 30],
//     ['FID', 25, 30],
//     ['CLS', 45, 40]
//   ]);
//   var options = {
//     title: 'Page Web Vitals 평균',
//     vAxis: { title: "명" },
//     hAxis: { title: "월" },
//     seriesType: "bars",
//     series: { 5: { type: "line" } }
//   };
//   var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
//   chart.draw(data, options);
// }
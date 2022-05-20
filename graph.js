function drawVisualization() {
    var data_main = google.visualization.arrayToDataTable([
        ['Vitals', '전체페이지 ', '메인'],
        ['LCP', 0.8, 1.5],
        ['FID', 0.5, 0.6],
        ['CLS', 0.03, 0.05]
    ]);
    var data_career = google.visualization.arrayToDataTable([
        ['Vitals', '전체페이지 ', '인재채용'],
        ['LCP', 0.8, 0.6],
        ['FID', 0.5, 0.5],
        ['CLS', 0.03, 0.04]
    ]);
    var data_company = google.visualization.arrayToDataTable([
        ['Vitals', '전체페이지 ', '회사소개'],
        ['LCP', 0.8, 1.0],
        ['FID', 0.5, 0.7],
        ['CLS', 0.03, 0.03]
    ]);
    var data_dx = google.visualization.arrayToDataTable([
        ['Vitals', '전체페이지 ', 'DX자료실'],
        ['LCP', 0.8, 0.9],
        ['FID', 0.5, 0.6],
        ['CLS', 0.03, 0.05]
    ]);
    var data_biz = google.visualization.arrayToDataTable([
        ['Vitals', '전체페이지 ', '비즈니스/클라우드'],
        ['LCP', 0.8, 1.3],
        ['FID', 0.5, 0.8],
        ['CLS', 0.03, 0.09]
    ]);
    var options = {
        title: 'Page Web Vitals 평균',        
        seriesType: "bars",
        series: { 5: { type: "line" } }
    };
    var chart_main = new google.visualization.ComboChart(document.getElementById('vital_main'));
    var chart_career = new google.visualization.ComboChart(document.getElementById('vital_career'));
    var chart_company = new google.visualization.ComboChart(document.getElementById('vital_company'));
    var chart_dx = new google.visualization.ComboChart(document.getElementById('vital_dx'));
    var chart_biz = new google.visualization.ComboChart(document.getElementById('vital_biz'));
    
    chart_main.draw(data_main, options);
    chart_career.draw(data_career, options);
    chart_company.draw(data_company, options);
    chart_dx.draw(data_dx, options);
    chart_biz.draw(data_biz, options);
}
google.setOnLoadCallback(drawVisualization);
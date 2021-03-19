/*!
 *
 * 
 * EVERTEC Tienda
 * Version: 1.0.0
 * Author: jhon.montoya@outlook.com
 *
 */


(function(window, document, $, undefined) {
    'use strict';

    if (typeof $ === 'undefined') {
        throw new Error('This application\'s JavaScript requires jQuery');
    }

    $(function() {

        // Restore body classes
        // -----------------------------------
        var $body = $('body');
        new StateToggler().restoreState($body);

        // enable settings toggle after restore
        $('#chk-fixed').prop('checked', $body.hasClass('layout-fixed'));
        $('#chk-collapsed').prop('checked', $body.hasClass('aside-collapsed'));
        $('#chk-collapsed-text').prop('checked', $body.hasClass('aside-collapsed-text'));
        $('#chk-boxed').prop('checked', $body.hasClass('layout-boxed'));
        $('#chk-float').prop('checked', $body.hasClass('aside-float'));
        $('#chk-hover').prop('checked', $body.hasClass('aside-hover'));

        // When ready display the offsidebar
        $('.offsidebar.d-none').removeClass('d-none');

        // Disable warning "Synchronous XMLHttpRequest on the main thread is deprecated.."
        $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
            options.async = true;
        });

    }); // doc ready

})(window, document, window.jQuery);
// Knob chart
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initKnob);

    function initKnob() {

        if (!$.fn.knob) return;

        var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['info']
        };
        $('#knob-chart1').knob(knobLoaderOptions1);

        var knobLoaderOptions2 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['purple'],
            readOnly: true
        };
        $('#knob-chart2').knob(knobLoaderOptions2);

        var knobLoaderOptions3 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['info'],
            bgColor: APP_COLORS['gray'],
            angleOffset: -125,
            angleArc: 250
        };
        $('#knob-chart3').knob(knobLoaderOptions3);

        var knobLoaderOptions4 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['pink'],
            displayPrevious: true,
            thickness: 0.1,
            lineCap: 'round'
        };
        $('#knob-chart4').knob(knobLoaderOptions4);

    }

})(window, document, window.jQuery);
// Chart JS
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initChartJS);

    function initChartJS() {

        if (typeof Chart === 'undefined') return;

        // random values for demo
        var rFactor = function() {
            return Math.round(Math.random() * 100);
        };

        // Line chart
        // -----------------------------------

        var lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(114,102,186,0.2)',
                borderColor: 'rgba(114,102,186,1)',
                pointBorderColor: '#fff',
                data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
            }, {
                label: 'My Second dataset',
                backgroundColor: 'rgba(35,183,229,0.2)',
                borderColor: 'rgba(35,183,229,1)',
                pointBorderColor: '#fff',
                data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
            }]
        };

        var lineOptions = {
            legend: {
                display: false
            }
        };
        var linectx = document.getElementById('chartjs-linechart').getContext('2d');
        var lineChart = new Chart(linectx, {
            data: lineData,
            type: 'line',
            options: lineOptions
        });

        // Bar chart
        // -----------------------------------

        var barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                backgroundColor: '#23b7e5',
                borderColor: '#23b7e5',
                data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
            }, {
                backgroundColor: '#5d9cec',
                borderColor: '#5d9cec',
                data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
            }]
        };

        var barOptions = {
            legend: {
                display: false
            }
        };
        var barctx = document.getElementById('chartjs-barchart').getContext('2d');
        var barChart = new Chart(barctx, {
            data: barData,
            type: 'bar',
            options: barOptions
        });

        //  Doughnut chart
        // -----------------------------------

        var doughnutData = {
            labels: [
                'Purple',
                'Yellow',
                'Blue'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#7266ba',
                    '#fad732',
                    '#23b7e5'
                ],
                hoverBackgroundColor: [
                    '#7266ba',
                    '#fad732',
                    '#23b7e5'
                ]
            }]
        };

        var doughnutOptions = {
            legend: {
                display: false
            }
        };
        var doughnutctx = document.getElementById('chartjs-doughnutchart').getContext('2d');
        var doughnutChart = new Chart(doughnutctx, {
            data: doughnutData,
            type: 'doughnut',
            options: doughnutOptions
        });

        // Pie chart
        // -----------------------------------

        var pieData = {
            labels: [
                'Purple',
                'Yellow',
                'Blue'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#7266ba',
                    '#fad732',
                    '#23b7e5'
                ],
                hoverBackgroundColor: [
                    '#7266ba',
                    '#fad732',
                    '#23b7e5'
                ]
            }]
        };

        var pieOptions = {
            legend: {
                display: false
            }
        };
        var piectx = document.getElementById('chartjs-piechart').getContext('2d');
        var pieChart = new Chart(piectx, {
            data: pieData,
            type: 'pie',
            options: pieOptions
        });

        // Polar chart
        // -----------------------------------

        var polarData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3
                ],
                backgroundColor: [
                    '#f532e5',
                    '#7266ba',
                    '#f532e5',
                    '#7266ba'
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                'Label 1',
                'Label 2',
                'Label 3',
                'Label 4'
            ]
        };

        var polarOptions = {
            legend: {
                display: false
            }
        };
        var polarctx = document.getElementById('chartjs-polarchart').getContext('2d');
        var polarChart = new Chart(polarctx, {
            data: polarData,
            type: 'polarArea',
            options: polarOptions
        });

        // Radar chart
        // -----------------------------------

        var radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(114,102,186,0.2)',
                borderColor: 'rgba(114,102,186,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: 'My Second dataset',
                backgroundColor: 'rgba(151,187,205,0.2)',
                borderColor: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        };

        var radarOptions = {
            legend: {
                display: false
            }
        };
        var radarctx = document.getElementById('chartjs-radarchart').getContext('2d');
        var radarChart = new Chart(radarctx, {
            data: radarData,
            type: 'radar',
            options: radarOptions
        });

    }

})(window, document, window.jQuery);
// Chartist
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initChartists);

    function initChartists() {

        if (typeof Chartist === 'undefined') return;

        // Bar bipolar
        // -----------------------------------
        var data1 = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
                [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
        };

        var options1 = {
            high: 10,
            low: -10,
            height: 280,
            axisX: {
                labelInterpolationFnc: function(value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        };

        new Chartist.Bar('#ct-bar1', data1, options1);

        // Bar Horizontal
        // -----------------------------------
        new Chartist.Bar('#ct-bar2', {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            series: [
                [5, 4, 3, 7, 5, 10, 3],
                [3, 2, 9, 5, 4, 6, 4]
            ]
        }, {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            height: 280,
            axisY: {
                offset: 70
            }
        });

        // Line
        // -----------------------------------
        new Chartist.Line('#ct-line1', {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
                [12, 9, 7, 8, 5],
                [2, 1, 3.5, 7, 3],
                [1, 3, 4, 5, 6]
            ]
        }, {
            fullWidth: true,
            height: 280,
            chartPadding: {
                right: 40
            }
        });


        // SVG Animation
        // -----------------------------------

        var chart1 = new Chartist.Line('#ct-line3', {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
                [1, 5, 2, 5, 4, 3],
                [2, 3, 4, 8, 1, 2],
                [5, 4, 3, 2, 1, 0.5]
            ]
        }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
            height: 300
        });

        chart1.on('draw', function(data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
        });


        // Slim animation
        // -----------------------------------


        var chart = new Chartist.Line('#ct-line2', {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
                [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
        }, {
            low: 0,
            height: 300
        });

        // Let's put a sequence number aside so we can use it in the event callbacks
        var seq = 0,
            delays = 80,
            durations = 500;

        // Once the chart is fully created we reset the sequence
        chart.on('created', function() {
            seq = 0;
        });

        // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        chart.on('draw', function(data) {
            seq++;

            if (data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                    opacity: {
                        // The delay when we like to start the animation
                        begin: seq * delays + 1000,
                        // Duration of the animation
                        dur: durations,
                        // The value where the animation should start
                        from: 0,
                        // The value where it should end
                        to: 1
                    }
                });
            } else if (data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                    y: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.y + 100,
                        to: data.y,
                        // We can specify an easing function from Chartist.Svg.Easing
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                    x: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 100,
                        to: data.x,
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    x2: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[data.axis.units.pos + '1'] - 30,
                    to: data[data.axis.units.pos + '1'],
                    easing: 'easeOutQuart'
                };

                var pos2Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[data.axis.units.pos + '2'] - 100,
                    to: data[data.axis.units.pos + '2'],
                    easing: 'easeOutQuart'
                };

                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                };

                data.element.animate(animations);
            }
        });

        // For the sake of the example we update the chart every time it's created with a delay of 10 seconds
        chart.on('created', function() {
            if (window.__exampleAnimateTimeout) {
                clearTimeout(window.__exampleAnimateTimeout);
                window.__exampleAnimateTimeout = null;
            }
            window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
        });

    }

})(window, document, window.jQuery);
// Easypie chart Loader
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initEasyPieChart);

    function initEasyPieChart() {

        if (!$.fn.easyPieChart) return;

        // Usage via data attributes
        // <div class="easypie-chart" data-easypiechart data-percent="X" data-optionName="value"></div>
        $('[data-easypiechart]').each(function() {
            var $elem = $(this);
            var options = $elem.data();
            $elem.easyPieChart(options || {});
        });

        // programmatic usage
        var pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: APP_COLORS['success'],
            trackColor: false,
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'circle'
        };
        $('#easypie1').easyPieChart(pieOptions1);

        var pieOptions2 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: APP_COLORS['warning'],
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'circle'
        };
        $('#easypie2').easyPieChart(pieOptions2);

        var pieOptions3 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: APP_COLORS['danger'],
            trackColor: false,
            scaleColor: APP_COLORS['gray'],
            lineWidth: 15,
            lineCap: 'circle'
        };
        $('#easypie3').easyPieChart(pieOptions3);

        var pieOptions4 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: APP_COLORS['danger'],
            trackColor: APP_COLORS['yellow'],
            scaleColor: APP_COLORS['gray-dark'],
            lineWidth: 15,
            lineCap: 'circle'
        };
        $('#easypie4').easyPieChart(pieOptions4);

    }

})(window, document, window.jQuery);
// CHART SPLINE
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';

    $(initFlotSpline);

    function initFlotSpline() {

        var data = [{
            "label": "Uniques",
            "color": "#768294",
            "data": [
                ["Mar", 70],
                ["Apr", 85],
                ["May", 59],
                ["Jun", 93],
                ["Jul", 66],
                ["Aug", 86],
                ["Sep", 60]
            ]
        }, {
            "label": "Recurrent",
            "color": "#1f92fe",
            "data": [
                ["Mar", 21],
                ["Apr", 12],
                ["May", 27],
                ["Jun", 24],
                ["Jul", 16],
                ["Aug", 39],
                ["Sep", 15]
            ]
        }];

        var datav2 = [{
            "label": "Hours",
            "color": "#23b7e5",
            "data": [
                ["Jan", 70],
                ["Feb", 20],
                ["Mar", 70],
                ["Apr", 85],
                ["May", 59],
                ["Jun", 93],
                ["Jul", 66],
                ["Aug", 86],
                ["Sep", 60],
                ["Oct", 60],
                ["Nov", 12],
                ["Dec", 50]
            ]
        }, {
            "label": "Commits",
            "color": "#7266ba",
            "data": [
                ["Jan", 20],
                ["Feb", 70],
                ["Mar", 30],
                ["Apr", 50],
                ["May", 85],
                ["Jun", 43],
                ["Jul", 96],
                ["Aug", 36],
                ["Sep", 80],
                ["Oct", 10],
                ["Nov", 72],
                ["Dec", 31]
            ]
        }];

        var datav3 = [{
            "label": "Home",
            "color": "#1ba3cd",
            "data": [
                ["1", 38],
                ["2", 40],
                ["3", 42],
                ["4", 48],
                ["5", 50],
                ["6", 70],
                ["7", 145],
                ["8", 70],
                ["9", 59],
                ["10", 48],
                ["11", 38],
                ["12", 29],
                ["13", 30],
                ["14", 22],
                ["15", 28]
            ]
        }, {
            "label": "Overall",
            "color": "#3a3f51",
            "data": [
                ["1", 16],
                ["2", 18],
                ["3", 17],
                ["4", 16],
                ["5", 30],
                ["6", 110],
                ["7", 19],
                ["8", 18],
                ["9", 110],
                ["10", 19],
                ["11", 16],
                ["12", 10],
                ["13", 20],
                ["14", 10],
                ["15", 20]
            ]
        }];

        var options = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150, // optional: use it for a clear represetation
                tickColor: '#eee',
                //position: 'right' or 'left',
                tickFormatter: function(v) {
                    return v /* + ' visitors'*/ ;
                }
            },
            shadowSize: 0
        };

        var chart = $('.chart-spline');
        if (chart.length)
            $.plot(chart, data, options);

        var chartv2 = $('.chart-splinev2');
        if (chartv2.length)
            $.plot(chartv2, datav2, options);

        var chartv3 = $('.chart-splinev3');
        if (chartv3.length)
            $.plot(chartv3, datav3, options);

    }

})(window, document, window.jQuery);

// CHART AREA
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotArea)

    function initFlotArea() {

        var data = [{
            "label": "Uniques",
            "color": "#aad874",
            "data": [
                ["Mar", 50],
                ["Apr", 84],
                ["May", 52],
                ["Jun", 88],
                ["Jul", 69],
                ["Aug", 92],
                ["Sep", 58]
            ]
        }, {
            "label": "Recurrent",
            "color": "#7dc7df",
            "data": [
                ["Mar", 13],
                ["Apr", 44],
                ["May", 44],
                ["Jun", 27],
                ["Jul", 38],
                ["Aug", 11],
                ["Sep", 39]
            ]
        }];

        var options = {
            series: {
                lines: {
                    show: true,
                    fill: 0.8
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                tickColor: '#eee',
                // position: 'right' or 'left'
                tickFormatter: function(v) {
                    return v + ' visitors';
                }
            },
            shadowSize: 0
        };

        var chart = $('.chart-area');
        if (chart.length)
            $.plot(chart, data, options);

    }

})(window, document, window.jQuery);

// CHART BAR
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotBar)

    function initFlotBar() {

        var data = [{
            "label": "Sales",
            "color": "#9cd159",
            "data": [
                ["Jan", 27],
                ["Feb", 82],
                ["Mar", 56],
                ["Apr", 14],
                ["May", 28],
                ["Jun", 77],
                ["Jul", 23],
                ["Aug", 49],
                ["Sep", 81],
                ["Oct", 20]
            ]
        }];

        var options = {
            series: {
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                // position: 'right' or 'left'
                tickColor: '#eee'
            },
            shadowSize: 0
        };

        var chart = $('.chart-bar');
        if (chart.length)
            $.plot(chart, data, options);

    }

})(window, document, window.jQuery);


// CHART BAR STACKED
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotBarStacked);

    function initFlotBarStacked() {

        var data = [{
            "label": "Tweets",
            "color": "#51bff2",
            "data": [
                ["Jan", 56],
                ["Feb", 81],
                ["Mar", 97],
                ["Apr", 44],
                ["May", 24],
                ["Jun", 85],
                ["Jul", 94],
                ["Aug", 78],
                ["Sep", 52],
                ["Oct", 17],
                ["Nov", 90],
                ["Dec", 62]
            ]
        }, {
            "label": "Likes",
            "color": "#4a8ef1",
            "data": [
                ["Jan", 69],
                ["Feb", 135],
                ["Mar", 14],
                ["Apr", 100],
                ["May", 100],
                ["Jun", 62],
                ["Jul", 115],
                ["Aug", 22],
                ["Sep", 104],
                ["Oct", 132],
                ["Nov", 72],
                ["Dec", 61]
            ]
        }, {
            "label": "+1",
            "color": "#f0693a",
            "data": [
                ["Jan", 29],
                ["Feb", 36],
                ["Mar", 47],
                ["Apr", 21],
                ["May", 5],
                ["Jun", 49],
                ["Jul", 37],
                ["Aug", 44],
                ["Sep", 28],
                ["Oct", 9],
                ["Nov", 12],
                ["Dec", 35]
            ]
        }];

        var datav2 = [{
            "label": "Pending",
            "color": "#9289ca",
            "data": [
                ["Pj1", 86],
                ["Pj2", 136],
                ["Pj3", 97],
                ["Pj4", 110],
                ["Pj5", 62],
                ["Pj6", 85],
                ["Pj7", 115],
                ["Pj8", 78],
                ["Pj9", 104],
                ["Pj10", 82],
                ["Pj11", 97],
                ["Pj12", 110],
                ["Pj13", 62]
            ]
        }, {
            "label": "Assigned",
            "color": "#7266ba",
            "data": [
                ["Pj1", 49],
                ["Pj2", 81],
                ["Pj3", 47],
                ["Pj4", 44],
                ["Pj5", 100],
                ["Pj6", 49],
                ["Pj7", 94],
                ["Pj8", 44],
                ["Pj9", 52],
                ["Pj10", 17],
                ["Pj11", 47],
                ["Pj12", 44],
                ["Pj13", 100]
            ]
        }, {
            "label": "Completed",
            "color": "#564aa3",
            "data": [
                ["Pj1", 29],
                ["Pj2", 56],
                ["Pj3", 14],
                ["Pj4", 21],
                ["Pj5", 5],
                ["Pj6", 24],
                ["Pj7", 37],
                ["Pj8", 22],
                ["Pj9", 28],
                ["Pj10", 9],
                ["Pj11", 14],
                ["Pj12", 21],
                ["Pj13", 5]
            ]
        }];

        var options = {
            series: {
                stack: true,
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                // position: 'right' or 'left'
                tickColor: '#eee'
            },
            shadowSize: 0
        };

        var chart = $('.chart-bar-stacked');
        if (chart.length)
            $.plot(chart, data, options);

        var chartv2 = $('.chart-bar-stackedv2');
        if (chartv2.length)
            $.plot(chartv2, datav2, options);

    }

})(window, document, window.jQuery);

// CHART DONUT
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotDonut);

    function initFlotDonut() {

        var data = [{
            "color": "#39C558",
            "data": 60,
            "label": "Coffee"
        }, {
            "color": "#00b4ff",
            "data": 90,
            "label": "CSS"
        }, {
            "color": "#FFBE41",
            "data": 50,
            "label": "LESS"
        }, {
            "color": "#ff3e43",
            "data": 80,
            "label": "Jade"
        }, {
            "color": "#937fc7",
            "data": 116,
            "label": "AngularJS"
        }];

        var options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5 // This makes the donut shape
                }
            }
        };

        var chart = $('.chart-donut');
        if (chart.length)
            $.plot(chart, data, options);

    }

})(window, document, window.jQuery);

// CHART LINE
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotLine)

    function initFlotLine() {

        var data = [{
            "label": "Complete",
            "color": "#5ab1ef",
            "data": [
                ["Jan", 188],
                ["Feb", 183],
                ["Mar", 185],
                ["Apr", 199],
                ["May", 190],
                ["Jun", 194],
                ["Jul", 194],
                ["Aug", 184],
                ["Sep", 74]
            ]
        }, {
            "label": "In Progress",
            "color": "#f5994e",
            "data": [
                ["Jan", 153],
                ["Feb", 116],
                ["Mar", 136],
                ["Apr", 119],
                ["May", 148],
                ["Jun", 133],
                ["Jul", 118],
                ["Aug", 161],
                ["Sep", 59]
            ]
        }, {
            "label": "Cancelled",
            "color": "#d87a80",
            "data": [
                ["Jan", 111],
                ["Feb", 97],
                ["Mar", 93],
                ["Apr", 110],
                ["May", 102],
                ["Jun", 93],
                ["Jul", 92],
                ["Aug", 92],
                ["Sep", 44]
            ]
        }];

        var options = {
            series: {
                lines: {
                    show: true,
                    fill: 0.01
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#eee',
                mode: 'categories'
            },
            yaxis: {
                // position: 'right' or 'left'
                tickColor: '#eee'
            },
            shadowSize: 0
        };

        var chart = $('.chart-line');
        if (chart.length)
            $.plot(chart, data, options);

    }

})(window, document, window.jQuery);


// CHART PIE
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotPie);

    function initFlotPie() {

        var data = [{
            "label": "jQuery",
            "color": "#4acab4",
            "data": 30
        }, {
            "label": "CSS",
            "color": "#ffea88",
            "data": 40
        }, {
            "label": "LESS",
            "color": "#ff8153",
            "data": 90
        }, {
            "label": "SASS",
            "color": "#878bb6",
            "data": 75
        }, {
            "label": "Jade",
            "color": "#b2d767",
            "data": 120
        }];

        var options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0,
                    label: {
                        show: true,
                        radius: 0.8,
                        formatter: function(label, series) {
                            return '<div class="flot-pie-label">' +
                                //label + ' : ' +
                                Math.round(series.percent) +
                                '%</div>';
                        },
                        background: {
                            opacity: 0.8,
                            color: '#222'
                        }
                    }
                }
            }
        };

        var chart = $('.chart-pie');
        if (chart.length)
            $.plot(chart, data, options);

    }

})(window, document, window.jQuery);
// Morris
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initMorris);

    function initMorris() {

        if (typeof Morris === 'undefined') return;

        var chartdata = [
            { y: "2006", a: 100, b: 90 },
            { y: "2007", a: 75, b: 65 },
            { y: "2008", a: 50, b: 40 },
            { y: "2009", a: 75, b: 65 },
            { y: "2010", a: 50, b: 40 },
            { y: "2011", a: 75, b: 65 },
            { y: "2012", a: 100, b: 90 }
        ];

        var donutdata = [
            { label: "Download Sales", value: 12 },
            { label: "In-Store Sales", value: 30 },
            { label: "Mail-Order Sales", value: 20 }
        ];

        // Line Chart
        // -----------------------------------

        new Morris.Line({
            element: 'morris-line',
            data: chartdata,
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Serie A", "Serie B"],
            lineColors: ["#31C0BE", "#7a92a3"],
            resize: true
        });

        // Donut Chart
        // -----------------------------------
        new Morris.Donut({
            element: 'morris-donut',
            data: donutdata,
            colors: ['#f05050', '#fad732', '#ff902b'],
            resize: true
        });

        // Bar Chart
        // -----------------------------------
        new Morris.Bar({
            element: 'morris-bar',
            data: chartdata,
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Series A", "Series B"],
            xLabelMargin: 2,
            barColors: ['#23b7e5', '#f05050'],
            resize: true
        });

        // Area Chart
        // -----------------------------------
        new Morris.Area({
            element: 'morris-area',
            data: chartdata,
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Serie A", "Serie B"],
            lineColors: ['#7266ba', '#23b7e5'],
            resize: true
        });

    }

})(window, document, window.jQuery);
// Rickshaw
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initMorris);

    function initMorris() {

        if (typeof Rickshaw === 'undefined') return;

        var seriesData = [
            [],
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(150);

        for (var i = 0; i < 150; i++) {
            random.addData(seriesData);
        }

        var series1 = [{
            color: "#c05020",
            data: seriesData[0],
            name: 'New York'
        }, {
            color: "#30c020",
            data: seriesData[1],
            name: 'London'
        }, {
            color: "#6060c0",
            data: seriesData[2],
            name: 'Tokyo'
        }];

        var graph1 = new Rickshaw.Graph({
            element: document.querySelector("#rickshaw1"),
            series: series1,
            renderer: 'area'
        });

        graph1.render();


        // Graph 2
        // -----------------------------------

        var graph2 = new Rickshaw.Graph({
            element: document.querySelector("#rickshaw2"),
            renderer: 'area',
            stroke: true,
            series: [{
                data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }],
                color: '#f05050'
            }, {
                data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }],
                color: '#fad732'
            }]
        });

        graph2.render();

        // Graph 3
        // -----------------------------------


        var graph3 = new Rickshaw.Graph({
            element: document.querySelector("#rickshaw3"),
            renderer: 'line',
            series: [{
                data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }],
                color: '#7266ba'
            }, {
                data: [{ x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 }],
                color: '#23b7e5'
            }]
        });
        graph3.render();


        // Graph 4
        // -----------------------------------


        var graph4 = new Rickshaw.Graph({
            element: document.querySelector("#rickshaw4"),
            renderer: 'bar',
            series: [{
                data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }],
                color: '#fad732'
            }, {
                data: [{ x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 }],
                color: '#ff902b'

            }]
        });
        graph4.render();

    }

})(window, document, window.jQuery);
// SPARKLINE
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initSparkline);

    function initSparkline() {

        $('[data-sparkline]').each(initSparkLine);

        function initSparkLine() {
            var $element = $(this),
                options = $element.data(),
                values = options.values && options.values.split(',');

            options.type = options.type || 'bar'; // default chart is bar
            options.disableHiddenCheck = true;

            $element.sparkline(values, options);

            if (options.resize) {
                $(window).resize(function() {
                    $element.sparkline(values, options);
                });
            }
        }
    }

})(window, document, window.jQuery);
// Start Bootstrap JS
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initBootstrap);

    function initBootstrap() {

        // POPOVER
        // -----------------------------------

        $('[data-toggle="popover"]').popover();

        // TOOLTIP
        // -----------------------------------

        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

        // DROPDOWN INPUTS
        // -----------------------------------
        $('.dropdown input').on('click focus', function(event) {
            event.stopPropagation();
        });

    }

})(window, document, window.jQuery);
// Module: card-tools
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initCardDismiss);
    $(initCardCollapse);
    $(initCardRefresh);


    /**
     * Dismiss cards
     * [data-tool="card-dismiss"]
     *
     * Requires animo.js
     */
    function initCardDismiss() {
        var cardSelector = '[data-tool="card-dismiss"]',
            removeEvent = 'card.remove',
            removedEvent = 'card.removed';

        $(document).on('click', cardSelector, function() {

            // find the first parent card
            var parent = $(this).closest('.card');
            var deferred = new $.Deferred();

            // Trigger the event and finally remove the element
            parent.trigger(removeEvent, [parent, deferred]);
            // needs resolve() to be called
            deferred.done(removeElement);

            function removeElement() {
                parent.animo({ animation: 'bounceOut' }, destroyCard);
            }

            function destroyCard() {
                var col = parent.parent();

                $.when(parent.trigger(removedEvent, [parent]))
                    .done(function() {
                        parent.remove();
                        // remove the parent if it is a row and is empty and not a sortable (portlet)
                        col
                            .trigger(removedEvent) // An event to catch when the card has been removed from DOM
                            .filter(function() {
                                var el = $(this);
                                return (el.is('[class*="col-"]:not(.sortable)') && el.children('*').length === 0);
                            }).remove();
                    });
            }
        });
    }


    /**
     * Collapse cards
     * [data-tool="card-collapse"]
     *
     * Also uses browser storage to keep track
     * of cards collapsed state
     */
    function initCardCollapse() {
        var cardSelector = '[data-tool="card-collapse"]',
            storageKeyName = 'jq-cardState';

        // Prepare the card to be collapsable and its events
        $(cardSelector).each(function() {
            // find the first parent card
            var $this = $(this),
                parent = $this.closest('.card'),
                wrapper = parent.find('.card-wrapper'),
                collapseOpts = { toggle: false },
                iconElement = $this.children('em'),
                cardId = parent.attr('id');

            // if wrapper not added, add it
            // we need a wrapper to avoid jumping due to the paddings
            if (!wrapper.length) {
                wrapper =
                    parent.children('.card-heading').nextAll() //find('.card-body, .card-footer')
                    .wrapAll('<div/>')
                    .parent()
                    .addClass('card-wrapper');
                collapseOpts = {};
            }

            // Init collapse and bind events to switch icons
            wrapper
                .collapse(collapseOpts)
                .on('hide.bs.collapse', function() {
                    setIconHide(iconElement);
                    saveCardState(cardId, 'hide');
                    wrapper.prev('.card-heading').addClass('card-heading-collapsed');
                })
                .on('show.bs.collapse', function() {
                    setIconShow(iconElement);
                    saveCardState(cardId, 'show');
                    wrapper.prev('.card-heading').removeClass('card-heading-collapsed');
                });

            // Load the saved state if exists
            var currentState = loadCardState(cardId);
            if (currentState) {
                setTimeout(function() { wrapper.collapse(currentState); }, 50);
                saveCardState(cardId, currentState);
            }

        });

        // finally catch clicks to toggle card collapse
        $(document).on('click', cardSelector, function() {

            var parent = $(this).closest('.card');
            var wrapper = parent.find('.card-wrapper');

            wrapper.collapse('toggle');

        });

        /////////////////////////////////////////////
        // Common use functions for card collapse //
        /////////////////////////////////////////////
        function setIconShow(iconEl) {
            iconEl.removeClass('fa-plus').addClass('fa-minus');
        }

        function setIconHide(iconEl) {
            iconEl.removeClass('fa-minus').addClass('fa-plus');
        }

        function saveCardState(id, state) {
            var data = Storages.localStorage.get(storageKeyName);
            if (!data) { data = {}; }
            data[id] = state;
            Storages.localStorage.set(storageKeyName, data);
        }

        function loadCardState(id) {
            var data = Storages.localStorage.get(storageKeyName);
            if (data) {
                return data[id] || false;
            }
        }
    }


    /**
     * Refresh cards
     * [data-tool="card-refresh"]
     * [data-spinner="standard"]
     */
    function initCardRefresh() {
        var cardSelector = '[data-tool="card-refresh"]',
            refreshEvent = 'card.refresh',
            whirlClass = 'whirl',
            defaultSpinner = 'standard';

        // method to clear the spinner when done
        function removeSpinner() {
            this.removeClass(whirlClass);
        }

        // catch clicks to toggle card refresh
        $(document).on('click', cardSelector, function() {
            var $this = $(this),
                card = $this.parents('.card').eq(0),
                spinner = $this.data('spinner') || defaultSpinner;

            // start showing the spinner
            card.addClass(whirlClass + ' ' + spinner);

            // attach as public method
            card.removeSpinner = removeSpinner;

            // Trigger the event and send the card object
            $this.trigger(refreshEvent, [card]);

        });
    }

})(window, document, window.jQuery);



// GLOBAL CONSTANTS
// -----------------------------------

(function(window, document, $, undefined){

    window.APP_COLORS = {
        'primary':                '#5d9cec',
        'success':                '#27c24c',
        'info':                   '#23b7e5',
        'warning':                '#ff902b',
        'danger':                 '#f05050',
        'inverse':                '#131e26',
        'green':                  '#37bc9b',
        'pink':                   '#f532e5',
        'purple':                 '#7266ba',
        'dark':                   '#3a3f51',
        'yellow':                 '#fad732',
        'gray-darker':            '#232735',
        'gray-dark':              '#3a3f51',
        'gray':                   '#dde6e9',
        'gray-light':             '#e4eaec',
        'gray-lighter':           '#edf1f2'
    };

    window.APP_MEDIAQUERY = {
        'desktopLG':             1200,
        'desktop':                992,
        'tablet':                 768,
        'mobile':                 480
    };

})(window, document, window.jQuery);
// FULLSCREEN
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initScreenFull);

    function initScreenFull() {
        if (typeof screenfull === 'undefined') return;

        var $doc = $(document);
        var $fsToggler = $('[data-toggle-fullscreen]');

        // Not supported under IE
        var ua = window.navigator.userAgent;
        if (ua.indexOf("MSIE ") > 0 || !!ua.match(/Trident.*rv\:11\./)) {
            $fsToggler.addClass('hide');
        }

        if (!$fsToggler.is(':visible')) // hidden on mobiles or IE
            return;

        $fsToggler.on('click', function(e) {
            e.preventDefault();

            if (screenfull.enabled) {

                screenfull.toggle();

                // Switch icon indicator
                toggleFSIcon($fsToggler);

            } else {
                console.log('Fullscreen not enabled');
            }
        });

        if (screenfull.raw && screenfull.raw.fullscreenchange)
            $doc.on(screenfull.raw.fullscreenchange, function() {
                toggleFSIcon($fsToggler);
            });

        function toggleFSIcon($element) {
            if (screenfull.isFullscreen)
                $element.children('em').removeClass('fa-expand').addClass('fa-compress');
            else
                $element.children('em').removeClass('fa-compress').addClass('fa-expand');
        }

    }

})(window, document, window.jQuery);
// LOAD CUSTOM CSS
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initLoadCSS);

    function initLoadCSS() {

        $('[data-load-css]').on('click', function(e) {

            var element = $(this);

            if (element.is('a'))
                e.preventDefault();

            var uri = element.data('loadCss'),
                link;

            if (uri) {
                link = createLink(uri);
                if (!link) {
                    $.error('Error creating stylesheet link element.');
                }
            } else {
                $.error('No stylesheet location defined.');
            }

        });
    }

    function createLink(uri) {
        

        var linkId = 'autoloaded-stylesheet',
            oldLink = $('#' + linkId).attr('id', linkId + '-old');

        $('head').append($('<link/>').attr({
            'id': linkId,
            'rel': 'stylesheet',
            'href': uri
        }));

        if (oldLink.length) {
            oldLink.remove();
        }

        return $('#' + linkId);
    }

})(window, document, window.jQuery);
// NAVBAR SEARCH
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initNavbarSearch);

    function initNavbarSearch() {

        var navSearch = new navbarSearchInput();

        // Open search input
        var $searchOpen = $('[data-search-open]');

        $searchOpen
            .on('click', function(e) { e.stopPropagation(); })
            .on('click', navSearch.toggle);

        // Close search input
        var $searchDismiss = $('[data-search-dismiss]');
        var inputSelector = '.navbar-form input[type="text"]';

        $(inputSelector)
            .on('click', function(e) { e.stopPropagation(); })
            .on('keyup', function(e) {
                if (e.keyCode == 27) // ESC
                    navSearch.dismiss();
            });

        // click anywhere closes the search
        $(document).on('click', navSearch.dismiss);
        // dismissable options
        $searchDismiss
            .on('click', function(e) { e.stopPropagation(); })
            .on('click', navSearch.dismiss);

    }

    var navbarSearchInput = function() {
        var navbarFormSelector = 'form.navbar-form';
        return {
            toggle: function() {

                var navbarForm = $(navbarFormSelector);

                navbarForm.toggleClass('open');

                var isOpen = navbarForm.hasClass('open');

                navbarForm.find('input')[isOpen ? 'focus' : 'blur']();

            },

            dismiss: function() {
                $(navbarFormSelector)
                    .removeClass('open') // Close control
                    .find('input[type="text"]').blur() // remove focus
                // .val('')                    // Empty input
                ;
            }
        };

    }

})(window, document, window.jQuery);
// NOW TIMER
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initNowTimer);

    function initNowTimer() {

        $('[data-now]').each(function() {
            var element = $(this),
                format = element.data('format');

            function updateTime() {
                var dt = moment(new Date()).format(format);
                element.text(dt);
            }

            updateTime();
            setInterval(updateTime, 1000);

        });
    }

})(window, document, window.jQuery);
// Toggle RTL mode for demo
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initRTL);

    function initRTL() {
        var maincss = $('#maincss');
        var bscss = $('#bscss');
        $('#chk-rtl').on('change', function() {
            // app rtl check
            maincss.attr('href', this.checked ? '/Content/css/app-rtl.css' : '/Content/css/app.css');
            // bootstrap rtl check
            bscss.attr('href', this.checked ? '/Content/css/bootstrap-rtl.css' : '/Content/css/bootstrap.css');
        });
    }

})(window, document, window.jQuery);
// SIDEBAR
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initSidebar);


    var $win;
    var $html;
    var $body;
    var $sidebar;

    function initSidebar() {

        $win = $(window);
        $html = $('html');
        $body = $('body');
        $sidebar = $('.sidebar');

        // AUTOCOLLAPSE ITEMS
        // -----------------------------------

        var sidebarCollapse = $sidebar.find('.collapse');
        sidebarCollapse.on('show.bs.collapse', function(event) {

            event.stopPropagation();
            if ($(this).parents('.collapse').length === 0)
                sidebarCollapse.filter('.show').collapse('hide');

        });

        // SIDEBAR ACTIVE STATE
        // -----------------------------------

        // Find current active item
        var currentItem = $('.sidebar .active').parents('li');

        // hover mode don't try to expand active collapse
        if (!useAsideHover())
            currentItem
            .addClass('active') // activate the parent
            .children('.collapse') // find the collapse
            .collapse('show'); // and show it

        // remove this if you use only collapsible sidebar items
        $sidebar.find('li > a + ul').on('show.bs.collapse', function(e) {
            if (useAsideHover()) e.preventDefault();
        });

        // SIDEBAR COLLAPSED ITEM HANDLER
        // -----------------------------------


        var eventName = isTouch() ? 'click' : 'mouseenter';
        var subNav = $();
        $sidebar.on(eventName, '.sidebar-nav > li', function() {

            if (isSidebarCollapsed() || useAsideHover()) {

                subNav.trigger('mouseleave');
                subNav = toggleMenuItem($(this));

                // Used to detect click and touch events outside the sidebar
                sidebarAddBackdrop();
            }

        });

        var sidebarAnyclickClose = $sidebar.data('sidebarAnyclickClose');

        // Allows to close
        if (typeof sidebarAnyclickClose !== 'undefined') {

            $('.wrapper').on('click.sidebar', function(e) {
                // don't check if sidebar not visible
                if (!$body.hasClass('aside-toggled')) return;

                var $target = $(e.target);
                if (!$target.parents('.aside-container').length && // if not child of sidebar
                    !$target.is('#user-block-toggle') && // user block toggle anchor
                    !$target.parent().is('#user-block-toggle') // user block toggle icon
                ) {
                    $body.removeClass('aside-toggled');
                }

            });
        }
    }

    function sidebarAddBackdrop() {
        var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop' });
        $backdrop.insertAfter('.aside-container').on("click mouseenter", function() {
            removeFloatingNav();
        });
    }

    // Open the collapse sidebar submenu items when on touch devices
    // - desktop only opens on hover
    function toggleTouchItem($element) {
        $element
            .siblings('li')
            .removeClass('open')
            .end()
            .toggleClass('open');
    }

    // Handles hover to open items under collapsed menu
    // -----------------------------------
    function toggleMenuItem($listItem) {

        removeFloatingNav();

        var ul = $listItem.children('ul');

        if (!ul.length) return $();
        if ($listItem.hasClass('open')) {
            toggleTouchItem($listItem);
            return $();
        }

        var $aside = $('.aside-container');
        var $asideInner = $('.aside-inner'); // for top offset calculation
        // float aside uses extra padding on aside
        var mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);

        var subNav = ul.clone().appendTo($aside);

        toggleTouchItem($listItem);

        var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
        var vwHeight = $win.height();

        subNav
            .addClass('nav-floating')
            .css({
                position: isFixed() ? 'fixed' : 'absolute',
                top: itemTop,
                bottom: (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });

        subNav.on('mouseleave', function() {
            toggleTouchItem($listItem);
            subNav.remove();
        });

        return subNav;
    }

    function removeFloatingNav() {
        $('.sidebar-subnav.nav-floating').remove();
        $('.dropdown-backdrop').remove();
        $('.sidebar li.open').removeClass('open');
    }

    function isTouch() {
        return $html.hasClass('touch');
    }

    function isSidebarCollapsed() {
        return $body.hasClass('aside-collapsed') || $body.hasClass('aside-collapsed-text');
    }

    function isSidebarToggled() {
        return $body.hasClass('aside-toggled');
    }

    function isMobile() {
        return $win.width() < APP_MEDIAQUERY.tablet;
    }

    function isFixed() {
        return $body.hasClass('layout-fixed');
    }

    function useAsideHover() {
        return $body.hasClass('aside-hover');
    }

})(window, document, window.jQuery);
// SLIMSCROLL
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initSlimsSroll);

    function initSlimsSroll() {

        $('[data-scrollable]').each(function() {

            var element = $(this),
                defaultHeight = 250;

            element.slimScroll({
                height: (element.data('height') || defaultHeight)
            });

        });
    }

})(window, document, window.jQuery);
// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initTableCheckAll);

    function initTableCheckAll() {

        $('[data-check-all]').on('change', function() {
            var $this = $(this),
                index = $this.index() + 1,
                checkbox = $this.find('input[type="checkbox"]'),
                table = $this.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child(' + index + ') input[type="checkbox"]')
                .prop('checked', checkbox[0].checked);

        });

    }

})(window, document, window.jQuery);
// TOGGLE STATE
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initToggleState);

    function initToggleState() {

        var $body = $('body');
        var toggle = new StateToggler();

        $('[data-toggle-state]')
            .on('click', function(e) {
                // e.preventDefault();
                e.stopPropagation();
                var element = $(this),
                    classname = element.data('toggleState'),
                    target = element.data('target'),
                    noPersist = (element.attr('data-no-persist') !== undefined);

                // Specify a target selector to toggle classname
                // use body by default
                var $target = target ? $(target) : $body;

                if (classname) {
                    if ($target.hasClass(classname)) {
                        $target.removeClass(classname);
                        if (!noPersist)
                            toggle.removeState(classname);
                    } else {
                        $target.addClass(classname);
                        if (!noPersist)
                            toggle.addState(classname);
                    }

                }

                // some elements may need this when toggled class change the content size
                $(window).resize();

            });

    }

    // Handle states to/from localstorage
    var StateToggler = function() {

        var STORAGE_KEY_NAME = 'jq-toggleState';

        /** Add a state to the browser storage to be restored later */
        this.addState = function(classname) {
            var data = Storages.localStorage.get(STORAGE_KEY_NAME);
            if (data instanceof Array) data.push(classname);
            else data = [classname];
            Storages.localStorage.set(STORAGE_KEY_NAME, data);
        };
        /** Remove a state from the browser storage */
        this.removeState = function(classname) {
            var data = Storages.localStorage.get(STORAGE_KEY_NAME);
            if (data) {
                var index = data.indexOf(classname);
                if (index !== -1) data.splice(index, 1);
                Storages.localStorage.set(STORAGE_KEY_NAME, data);
            }
        };
        /** Load the state string and restore the classlist */
        this.restoreState = function($elem) {
            var data = Storages.localStorage.get(STORAGE_KEY_NAME);
            if (data instanceof Array)
                $elem.addClass(data.join(' '));
        };
    };

    window.StateToggler = StateToggler;

})(window, document, window.jQuery);
/**=========================================================
 * Module: trigger-resize.js
 * Triggers a window resize event from any element
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    $(initTriggerResize);

    function initTriggerResize() {
        var element = $('[data-trigger-resize]');
        var value = element.data('triggerResize')
        element.on('click', function() {
            setTimeout(function() {
                // all IE friendly dispatchEvent
                var evt = document.createEvent('UIEvents');
                evt.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(evt);
                // modern dispatchEvent way
                // window.dispatchEvent(new Event('resize'));
            }, value || 300);
        });
    }

})(window, document, window.jQuery);
// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    // When dom ready, init calendar and events
    $(initFullCalendar);

    function initFullCalendar() {

        if (!$.fn.fullCalendar) return;

        // The element that will display the calendar
        var calendar = $('#calendar');

        var demoEvents = createDemoEvents();

        initExternalEvents(calendar);

        initCalendar(calendar, demoEvents);

    }


    // global shared var to know what we are dragging
    var draggingEvent = null;

    /**
     * ExternalEvent object
     * @param jQuery Object elements Set of element as jQuery objects
     */
    var ExternalEvent = function(elements) {

        if (!elements) return;

        elements.each(function() {
            var $this = $(this);
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var calendarEventObject = {
                title: $.trim($this.text()) // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $this.data('calendarEventObject', calendarEventObject);

            // make the event draggable using jQuery UI
            $this.draggable({
                zIndex: 1070,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });

        });
    };

    /**
     * Invoke full calendar plugin and attach behavior
     * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
     * @param  EventObject [events] An object with the event list to load when the calendar displays
     */
    function initCalendar(calElement, events) {

        // check to remove elements from the list
        var removeAfterDrop = $('#remove-after-drop');

        calElement.fullCalendar({
            // isRTL: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            buttonIcons: { // note the space at the beginning
                prev: ' fa fa-caret-left',
                next: ' fa fa-caret-right'
            },
            buttonText: {
                today: 'today',
                month: 'month',
                week: 'week',
                day: 'day'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            drop: function(date, allDay) { // this function is called when something is dropped

                var $this = $(this),
                    // retrieve the dropped element's stored Event Object
                    originalEventObject = $this.data('calendarEventObject');

                // if something went wrong, abort
                if (!originalEventObject) return;

                // clone the object to avoid multiple events with reference to the same object
                var clonedEventObject = $.extend({}, originalEventObject);

                // assign the reported date
                clonedEventObject.start = date;
                clonedEventObject.allDay = allDay;
                clonedEventObject.backgroundColor = $this.css('background-color');
                clonedEventObject.borderColor = $this.css('border-color');

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks"
                // (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                calElement.fullCalendar('renderEvent', clonedEventObject, true);

                // if necessary remove the element from the list
                if (removeAfterDrop.is(':checked')) {
                    $this.remove();
                }
            },
            eventDragStart: function(event, js, ui) {
                draggingEvent = event;
            },
            // This array is the events sources
            events: events
        });
    }

    /**
     * Inits the external events card
     * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
     */
    function initExternalEvents(calElement) {
        // Card with the external events list
        var externalEvents = $('.external-events');

        // init the external events in the card
        new ExternalEvent(externalEvents.children('div'));

        // External event color is danger-red by default
        var currColor = '#f6504d';
        // Color selector button
        var eventAddBtn = $('.external-event-add-btn');
        // New external event name input
        var eventNameInput = $('.external-event-name');
        // Color switchers
        var eventColorSelector = $('.external-event-color-selector .circle');

        // Trash events Droparea
        $('.external-events-trash').droppable({
            accept: '.fc-event',
            activeClass: 'active',
            hoverClass: 'hovered',
            tolerance: 'touch',
            drop: function(event, ui) {

                // You can use this function to send an ajax request
                // to remove the event from the repository

                if (draggingEvent) {
                    var eid = draggingEvent.id || draggingEvent._id;
                    // Remove the event
                    calElement.fullCalendar('removeEvents', eid);
                    // Remove the dom element
                    ui.draggable.remove();
                    // clear
                    draggingEvent = null;
                }
            }
        });

        eventColorSelector.click(function(e) {
            e.preventDefault();
            var $this = $(this);

            // Save color
            currColor = $this.css('background-color');
            // De-select all and select the current one
            eventColorSelector.removeClass('selected');
            $this.addClass('selected');
        });

        eventAddBtn.click(function(e) {
            e.preventDefault();

            // Get event name from input
            var val = eventNameInput.val();
            // Dont allow empty values
            if ($.trim(val) === '') return;

            // Create new event element
            var newEvent = $('<div/>').css({
                    'background-color': currColor,
                    'border-color': currColor,
                    'color': '#fff'
                })
                .html(val);

            // Prepends to the external events list
            externalEvents.prepend(newEvent);
            // Initialize the new event element
            new ExternalEvent(newEvent);
            // Clear input
            eventNameInput.val('');
        });
    }

    /**
     * Creates an array of events to display in the first load of the calendar
     * Wrap into this function a request to a source to get via ajax the stored events
     * @return Array The array with the events
     */
    function createDemoEvents() {
        // Date for the calendar events (dummy data)
        var date = new Date();
        var d = date.getDate(),
            m = date.getMonth(),
            y = date.getFullYear();

        return [{
            title: 'All Day Event',
            start: new Date(y, m, 1),
            backgroundColor: '#f56954', //red
            borderColor: '#f56954' //red
        }, {
            title: 'Long Event',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2),
            backgroundColor: '#f39c12', //yellow
            borderColor: '#f39c12' //yellow
        }, {
            title: 'Meeting',
            start: new Date(y, m, d, 10, 30),
            allDay: false,
            backgroundColor: '#0073b7', //Blue
            borderColor: '#0073b7' //Blue
        }, {
            title: 'Lunch',
            start: new Date(y, m, d, 12, 0),
            end: new Date(y, m, d, 14, 0),
            allDay: false,
            backgroundColor: '#00c0ef', //Info (aqua)
            borderColor: '#00c0ef' //Info (aqua)
        }, {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            backgroundColor: '#00a65a', //Success (green)
            borderColor: '#00a65a' //Success (green)
        }, {
            title: 'Open Google',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: '//google.com/',
            backgroundColor: '#3c8dbc', //Primary (light-blue)
            borderColor: '#3c8dbc' //Primary (light-blue)
        }];
    }

})(window, document, window.jQuery);
// JQCloud
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initWordCloud);

    function initWordCloud() {

        if (!$.fn.jQCloud) return;

        //Create an array of word objects, each representing a word in the cloud
        var word_array = [
            { text: 'Lorem', weight: 13, /*link: 'http://themicon.co'*/ },
            { text: 'Ipsum', weight: 10.5 },
            { text: 'Dolor', weight: 9.4 },
            { text: 'Sit', weight: 8 },
            { text: 'Amet', weight: 6.2 },
            { text: 'Consectetur', weight: 5 },
            { text: 'Adipiscing', weight: 5 },
            { text: 'Sit', weight: 8 },
            { text: 'Amet', weight: 6.2 },
            { text: 'Consectetur', weight: 5 },
            { text: 'Adipiscing', weight: 5 }
        ];

        $("#jqcloud").jQCloud(word_array, {
            width: 240,
            height: 200,
            steps: 7
        });

    }

})(window, document, window.jQuery);
// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initSearch);

    function initSearch() {

        if (!$.fn.slider) return;
        if (!$.fn.chosen) return;
        if (!$.fn.datepicker) return;

        // BOOTSTRAP SLIDER CTRL
        // -----------------------------------

        $('[data-ui-slider]').slider();

        // CHOSEN
        // -----------------------------------

        $('.chosen-select').chosen();

        // DATETIMEPICKER
        // -----------------------------------

        $('#datetimepicker').datepicker({
            orientation: 'bottom',
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-crosshairs',
                clear: 'fa fa-trash'
            }
        });

    }

})(window, document, window.jQuery);
// Demo Cards
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initCardDemo);

    function initCardDemo() {

        /**
         * This functions show a demonstration of how to use
         * the card tools system via custom event.
         */

        $('.card.card-demo')
            .on('card.refresh', function(e, card) {

                // perform any action when a .card triggers a refresh event
                setTimeout(function() {

                    // when the action is done, just remove the spinner class
                    card.removeSpinner();

                }, 3000);

            })
            .on('hide.bs.collapse', function(event) {

                console.log('Card Collapse Hide');

            })
            .on('show.bs.collapse', function(event) {

                console.log('Card Collapse Show');

            })
            .on('card.remove', function(event, card, deferred) {
                console.log('Removing Card');
                // Call resolve() to continue removing the card
                // perform checks to avoid removing card if some user action is required
                deferred.resolve();
            })
            .on('card.removed', function(event, card) {

                console.log('Removed Card');

            });

    }

})(window, document, window.jQuery);
// Nestable demo
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initNestable);

    function initNestable() {

        if (!$.fn.nestable) return;

        var updateOutput = function(e) {
            var list = e.length ? e : $(e.target),
                output = list.data('output');
            if (window.JSON) {
                output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
            } else {
                output.val('JSON browser support required for this demo.');
            }
        };

        // activate Nestable for list 1
        $('#nestable').nestable({
                group: 1
            })
            .on('change', updateOutput);

        // activate Nestable for list 2
        $('#nestable2').nestable({
                group: 1
            })
            .on('change', updateOutput);

        // output initial serialised data
        updateOutput($('#nestable').data('output', $('#nestable-output')));
        updateOutput($('#nestable2').data('output', $('#nestable2-output')));

        $('.js-nestable-action').on('click', function(e) {
            var target = $(e.target),
                action = target.data('action');
            if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
        });

    }

})(window, document, window.jQuery);
/**=========================================================
 * Module: notify.js
 * Create toggleable notifications that fade out automatically.
 * Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)
 * [data-toggle="notify"]
 * [data-options="options in json format" ]
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    $(initNotify);

    function initNotify() {

        var Selector = '[data-notify]',
            autoloadSelector = '[data-onload]',
            doc = $(document);

        $(Selector).each(function() {

            var $this = $(this),
                onload = $this.data('onload');

            if (onload !== undefined) {
                setTimeout(function() {
                    notifyNow($this);
                }, 800);
            }

            $this.on('click', function(e) {
                e.preventDefault();
                notifyNow($this);
            });

        });

    }

    function notifyNow($element) {
        var message = $element.data('message'),
            options = $element.data('options');

        if (!message)
            $.error('Notify: No message specified');

        $.notify(message, options || {});
    }


})(window, document, window.jQuery);


/**
 * Notify Addon definition as jQuery plugin
 * Adapted version to work with Bootstrap classes
 * More information http://getuikit.com/docs/addons_notify.html
 */

(function($, window, document) {

    var containers = {},
        messages = {},

        notify = function(options) {

            if ($.type(options) == 'string') {
                options = { message: options };
            }

            if (arguments[1]) {
                options = $.extend(options, $.type(arguments[1]) == 'string' ? { status: arguments[1] } : arguments[1]);
            }

            return (new Message(options)).show();
        },
        closeAll = function(group, instantly) {
            if (group) {
                for (var id in messages) { if (group === messages[id].group) messages[id].close(instantly); }
            } else {
                for (var id in messages) { messages[id].close(instantly); }
            }
        };

    var Message = function(options) {

        var $this = this;

        this.options = $.extend({}, Message.defaults, options);

        this.uuid = "ID" + (new Date().getTime()) + "RAND" + (Math.ceil(Math.random() * 100000));
        this.element = $([
            // alert-dismissable enables bs close icon
            '<div class="uk-notify-message alert-dismissable">',
            '<a class="close">&times;</a>',
            '<div>' + this.options.message + '</div>',
            '</div>'

        ].join('')).data("notifyMessage", this);

        // status
        if (this.options.status) {
            this.element.addClass('alert alert-' + this.options.status);
            this.currentstatus = this.options.status;
        }

        this.group = this.options.group;

        messages[this.uuid] = this;

        if (!containers[this.options.pos]) {
            containers[this.options.pos] = $('<div class="uk-notify uk-notify-' + this.options.pos + '"></div>').appendTo('body').on("click", ".uk-notify-message", function() {
                $(this).data("notifyMessage").close();
            });
        }
    };


    $.extend(Message.prototype, {

        uuid: false,
        element: false,
        timout: false,
        currentstatus: "",
        group: false,

        show: function() {

            if (this.element.is(":visible")) return;

            var $this = this;

            containers[this.options.pos].show().prepend(this.element);

            var marginbottom = parseInt(this.element.css("margin-bottom"), 10);

            this.element.css({ "opacity": 0, "margin-top": -1 * this.element.outerHeight(), "margin-bottom": 0 }).animate({ "opacity": 1, "margin-top": 0, "margin-bottom": marginbottom }, function() {

                if ($this.options.timeout) {

                    var closefn = function() { $this.close(); };

                    $this.timeout = setTimeout(closefn, $this.options.timeout);

                    $this.element.hover(
                        function() { clearTimeout($this.timeout); },
                        function() { $this.timeout = setTimeout(closefn, $this.options.timeout); }
                    );
                }

            });

            return this;
        },

        close: function(instantly) {

            var $this = this,
                finalize = function() {
                    $this.element.remove();

                    if (!containers[$this.options.pos].children().length) {
                        containers[$this.options.pos].hide();
                    }

                    delete messages[$this.uuid];
                };

            if (this.timeout) clearTimeout(this.timeout);

            if (instantly) {
                finalize();
            } else {
                this.element.animate({ "opacity": 0, "margin-top": -1 * this.element.outerHeight(), "margin-bottom": 0 }, function() {
                    finalize();
                });
            }
        },

        content: function(html) {

            var container = this.element.find(">div");

            if (!html) {
                return container.html();
            }

            container.html(html);

            return this;
        },

        status: function(status) {

            if (!status) {
                return this.currentstatus;
            }

            this.element.removeClass('alert alert-' + this.currentstatus).addClass('alert alert-' + status);

            this.currentstatus = status;

            return this;
        }
    });

    Message.defaults = {
        message: "",
        status: "normal",
        timeout: 5000,
        group: null,
        pos: 'top-center'
    };


    $["notify"] = notify;
    $["notify"].message = Message;
    $["notify"].closeAll = closeAll;

    return notify;

}(jQuery, window, document));
/**=========================================================
 * Module: play-animation.js
 * Provides a simple way to run animation with a click
 * Targeted elements must have
 *   [data-animate"]
 *   [data-target="Target element affected by the animation"]
 *   [data-play="Animation name (http://daneden.github.io/animate.css/)"]
 *
 * Requires animo.js
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    $(initPlayAnimation)

    function initPlayAnimation() {

        var Selector = '[data-animate]';

        // Run click triggered animations
        $(document).on('click', Selector, function() {

            var $this = $(this),
                targetSel = $this.data('target'),
                animation = $this.data('play') || 'bounce';

            if (targetSel) {
                $(targetSel).animo({ animation: animation });
            }

        });

    }

})(window, document, window.jQuery);
/**=========================================================
 * Module: portlet.js
 * Drag and drop any card to change its position
 * The Selector should could be applied to any object that contains
 * card, so .col-* element are ideal.
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    var STORAGE_KEY_NAME = 'jq-portletState';

    $(initPortlets);

    function initPortlets() {

        // Component is NOT optional
        if (!$.fn.sortable) return;

        var Selector = '[data-toggle="portlet"]';

        $(Selector).sortable({
            connectWith:          Selector,
            items:                'div.card',
            handle:               '.portlet-handler',
            opacity:              0.7,
            placeholder:          'portlet box-placeholder',
            cancel:               '.portlet-cancel',
            forcePlaceholderSize: true,
            iframeFix:            false,
            tolerance:            'pointer',
            helper:               'original',
            revert:               200,
            forceHelperSize:      true,
            update:               savePortletOrder,
            create:               loadPortletOrder
        })
        // optionally disables mouse selection
        //.disableSelection()
        ;

    }

    function savePortletOrder(event, ui) {

        var data = Storages.localStorage.get(STORAGE_KEY_NAME);

        if (!data) { data = {}; }

        data[this.id] = $(this).sortable('toArray');

        if (data) {
            Storages.localStorage.set(STORAGE_KEY_NAME, data);
        }

    }

    function loadPortletOrder() {

        var data = Storages.localStorage.get(STORAGE_KEY_NAME);

        if (data) {

            var porletId = this.id,
                cards = data[porletId];

            if (cards) {
                var portlet = $('#' + porletId);

                $.each(cards, function(index, value) {
                    $('#' + value).appendTo(portlet);
                });
            }

        }

    }

    // Reset porlet save state
    window.resetPorlets = function(e) {
        Storages.localStorage.remove(STORAGE_KEY_NAME);
        // reload the page
        window.location.reload();
    }

})(window, document, window.jQuery);
// HTML5 Sortable demo
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initSortable);

    function initSortable() {

        if (typeof sortable === 'undefined') return;

        sortable('.sortable', {
            forcePlaceholderSize: true,
            placeholder: '<div class="box-placeholder p0 m0"><div></div></div>'
        });

    }

})(window, document, window.jQuery);
// Sweet Alert
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initSweetAlert);

    function initSweetAlert() {

        $('#swal-demo1').on('click', function(e) {
            e.preventDefault();
            swal("Here's a message!")
        });

        $('#swal-demo2').on('click', function(e) {
            e.preventDefault();
            swal("Here's a message!", "It's pretty, isn't it?")
        });

        $('#swal-demo3').on('click', function(e) {
            e.preventDefault();
            swal("Good job!", "You clicked the button!", "success")
        });

        $('#swal-demo4').on('click', function(e) {
            e.preventDefault();
            swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this imaginary file!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function() {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                });

        });

        $('#swal-demo5').on('click', function(e) {
            e.preventDefault();
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function(isConfirm) {
                if (isConfirm) {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            });

        });

    }

})(window, document, window.jQuery);
// Color picker
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initColorPicker);

    function initColorPicker() {

        if (!$.fn.colorpicker) return;

        $('.demo-colorpicker').colorpicker();

        $('#demo_selectors').colorpicker({
            colorSelectors: {
                'default': '#777777',
                'primary': APP_COLORS['primary'],
                'success': APP_COLORS['success'],
                'info': APP_COLORS['info'],
                'warning': APP_COLORS['warning'],
                'danger': APP_COLORS['danger']
            }
        });

    }

})(window, document, window.jQuery);
// Forms Demo
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initFormsDemo);

    function initFormsDemo() {

        if (!$.fn.slider) return;
        if (!$.fn.chosen) return;
        if (!$.fn.inputmask) return;
        if (!$.fn.filestyle) return;
        if (!$.fn.wysiwyg) return;
        if (!$.fn.datepicker) return;

        // BOOTSTRAP SLIDER CTRL
        // -----------------------------------

        $('[data-ui-slider]').slider();

        // CHOSEN
        // -----------------------------------

        $('.chosen-select').chosen();

        // MASKED
        // -----------------------------------

        $('[data-masked]').inputmask();

        // FILESTYLE
        // -----------------------------------

        $('.filestyle').filestyle();

        // WYSIWYG
        // -----------------------------------

        $('.wysiwyg').wysiwyg();


        // DATETIMEPICKER
        // -----------------------------------

        $('#datetimepicker1').datepicker({
            orientation: 'bottom',
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-crosshairs',
                clear: 'fa fa-trash'
            }
        });
        // only time
        $('#datetimepicker2').datepicker({
            format: 'mm-dd-yyyy'
        });

    }

})(window, document, window.jQuery);
/**=========================================================
 * Module: Image Cropper
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    $(initImageCropper);

    function initImageCropper() {

        if (!$.fn.cropper) return;

        var $image = $('.img-container > img'),
            $dataX = $('#dataX'),
            $dataY = $('#dataY'),
            $dataHeight = $('#dataHeight'),
            $dataWidth = $('#dataWidth'),
            $dataRotate = $('#dataRotate'),
            options = {
                // data: {
                //   x: 420,
                //   y: 60,
                //   width: 640,
                //   height: 360
                // },
                // strict: false,
                // responsive: false,
                // checkImageOrigin: false

                // modal: false,
                // guides: false,
                // highlight: false,
                // background: false,

                // autoCrop: false,
                // autoCropArea: 0.5,
                // dragCrop: false,
                // movable: false,
                // rotatable: false,
                // zoomable: false,
                // touchDragZoom: false,
                // mouseWheelZoom: false,
                // cropBoxMovable: false,
                // cropBoxResizable: false,
                // doubleClickToggle: false,

                // minCanvasWidth: 320,
                // minCanvasHeight: 180,
                // minCropBoxWidth: 160,
                // minCropBoxHeight: 90,
                // minContainerWidth: 320,
                // minContainerHeight: 180,

                // build: null,
                // built: null,
                // dragstart: null,
                // dragmove: null,
                // dragend: null,
                // zoomin: null,
                // zoomout: null,

                aspectRatio: 16 / 9,
                preview: '.img-preview',
                crop: function(data) {
                    $dataX.val(Math.round(data.x));
                    $dataY.val(Math.round(data.y));
                    $dataHeight.val(Math.round(data.height));
                    $dataWidth.val(Math.round(data.width));
                    $dataRotate.val(Math.round(data.rotate));
                }
            };

        $image.on({
            'build.cropper': function(e) {
                console.log(e.type);
            },
            'built.cropper': function(e) {
                console.log(e.type);
            },
            'dragstart.cropper': function(e) {
                console.log(e.type, e.dragType);
            },
            'dragmove.cropper': function(e) {
                console.log(e.type, e.dragType);
            },
            'dragend.cropper': function(e) {
                console.log(e.type, e.dragType);
            },
            'zoomin.cropper': function(e) {
                console.log(e.type);
            },
            'zoomout.cropper': function(e) {
                console.log(e.type);
            },
            'change.cropper': function(e) {
                console.log(e.type);
            }
        }).cropper(options);


        // Methods
        $(document.body).on('click', '[data-method]', function() {
            var data = $(this).data(),
                $target,
                result;

            if (!$image.data('cropper')) {
                return;
            }

            if (data.method) {
                data = $.extend({}, data); // Clone a new one

                if (typeof data.target !== 'undefined') {
                    $target = $(data.target);

                    if (typeof data.option === 'undefined') {
                        try {
                            data.option = JSON.parse($target.val());
                        } catch (e) {
                            console.log(e.message);
                        }
                    }
                }

                result = $image.cropper(data.method, data.option);

                if (data.method === 'getCroppedCanvas') {
                    $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);
                }

                if ($.isPlainObject(result) && $target) {
                    try {
                        $target.val(JSON.stringify(result));
                    } catch (e) {
                        console.log(e.message);
                    }
                }

            }
        }).on('keydown', function(e) {

            if (!$image.data('cropper')) {
                return;
            }

            switch (e.which) {
                case 37:
                    e.preventDefault();
                    $image.cropper('move', -1, 0);
                    break;

                case 38:
                    e.preventDefault();
                    $image.cropper('move', 0, -1);
                    break;

                case 39:
                    e.preventDefault();
                    $image.cropper('move', 1, 0);
                    break;

                case 40:
                    e.preventDefault();
                    $image.cropper('move', 0, 1);
                    break;
            }

        });


        // Import image
        var $inputImage = $('#inputImage'),
            URL = window.URL || window.webkitURL,
            blobURL;

        if (URL) {
            $inputImage.change(function() {
                var files = this.files,
                    file;

                if (!$image.data('cropper')) {
                    return;
                }

                if (files && files.length) {
                    file = files[0];

                    if (/^image\/\w+$/.test(file.type)) {
                        blobURL = URL.createObjectURL(file);
                        $image.one('built.cropper', function() {
                            URL.revokeObjectURL(blobURL); // Revoke when load complete
                        }).cropper('reset').cropper('replace', blobURL);
                        $inputImage.val('');
                    } else {
                        alert('Please choose an image file.');
                    }
                }
            });
        } else {
            $inputImage.parent().remove();
        }


        // Options
        $('.docs-options :checkbox').on('change', function() {
            var $this = $(this);

            if (!$image.data('cropper')) {
                return;
            }

            options[$this.val()] = $this.prop('checked');
            $image.cropper('destroy').cropper(options);
        });


        // Tooltips
        $('[data-toggle="tooltip"]').tooltip();

    }

})(window, document, window.jQuery);
// Select2
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initSelect2);

    function initSelect2() {

        if (!$.fn.select2) return;

        // Select 2

        $('#select2-1').select2({
            theme: 'bootstrap4'
        });
        $('#select2-2').select2({
            theme: 'bootstrap4'
        });
        $('#select2-3').select2({
            theme: 'bootstrap4'
        });
        $('#select2-4').select2({
            placeholder: 'Select a state',
            allowClear: true,
            theme: 'bootstrap4'
        });

    }

})(window, document, window.jQuery);
(function(window, document, $, undefined) {
    'use strict';

    if (typeof Dropzone === 'undefined') return;

    // Prevent Dropzone from auto discovering
    // This is useful when you want to create the
    // Dropzone programmatically later
    Dropzone.autoDiscover = false;

    $(initDropzone);

    function initDropzone() {

        // Dropzone settings
        var dropzoneOptions = {
            autoProcessQueue: false,
            uploadMultiple: true,
            parallelUploads: 100,
            maxFiles: 100,
            dictDefaultMessage: '<em class="fa fa-upload text-muted"></em><br>Drop files here to upload', // default messages before first drop
            paramName: 'file', // The name that will be used to transfer the file
            maxFilesize: 2, // MB
            addRemoveLinks: true,
            accept: function(file, done) {
                if (file.name === 'justinbieber.jpg') {
                    done('Naha, you dont. :)');
                } else {
                    done();
                }
            },
            init: function() {
                var dzHandler = this;

                this.element.querySelector('button[type=submit]').addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    dzHandler.processQueue();
                });
                this.on('addedfile', function(file) {
                    console.log('Added file: ' + file.name);
                });
                this.on('removedfile', function(file) {
                    console.log('Removed file: ' + file.name);
                });
                this.on('sendingmultiple', function() {

                });
                this.on('successmultiple', function( /*files, response*/ ) {

                });
                this.on('errormultiple', function( /*files, response*/ ) {

                });
            }

        };

        var dropzoneArea = new Dropzone('#dropzone-area', dropzoneOptions);

    }

})(window, document, window.jQuery);

(function(window, document, $, undefined) {
    'use strict';



    $(initWizard);

    function initWizard() {

        if (!$.fn.validate) return;

        var form = $("#frmInscripcion");
        form.validate({
            errorPlacement: function errorPlacement(error, element) { element.before(error); },
            lang: 'es',
            rules: {
                confirm: {
                    equalTo: "#password"
                },

                entrevistaID: {
                    required: true
                }
            }
        });
        form.children("div").steps({
            headerTag: "h4",
            bodyTag: "fieldset",
            //transitionEffect: "slideLeft",
            labels: {
                cancel: "Cancelar",
                current: "Paso actual:",
                pagination: "Paginaci�n",
                finish: "Finalizar",
                next: "Siguiente",
                previous: "Anterior",
                loading: "Cargando ..."
            },
            onStepChanging: function (event, currentIndex, newIndex) {
                $('.actions > ul > li:last-child a').css('background-color', '#f89406');
                form.validate().settings.ignore = ":disabled,:hidden:not('select.form-control')";
                return form.valid();
            },
            onFinishing: function(event, currentIndex) {
                form.validate().settings.ignore = ":disabled";
                return form.valid();
            },
            onFinished: function(event, currentIndex) {
                alert("Submitted!");

                // Submit form
                $(this).submit();
            }
        });



        $('.chosen-select321').chosen({
            no_results_text: "No se encontraron resultados",
            placeholder_text_single: "Seleccione una opci\u00F3n...",
            placeholder_text_multiple: "Seleccione una opci\u00F3n..."
        });

        $('.select321').select2({
            theme: 'bootstrap4',
        });




    }

})(window, document, window.jQuery);
// Xeditable Demo
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initXEditable);

    function initXEditable() {

        if (!$.fn.editable) return

        // Font Awesome support
        $.fn.editableform.buttons =
            '<button type="submit" class="btn btn-primary btn-sm editable-submit">' +
            '<i class="fa fa-fw fa-check"></i>' +
            '</button>' +
            '<button type="button" class="btn btn-default btn-sm editable-cancel">' +
            '<i class="fa fa-fw fa-times"></i>' +
            '</button>';

        //defaults
        //$.fn.editable.defaults.url = 'url/to/server';

        //enable / disable
        $('#enable').click(function() {
            $('#user .editable').editable('toggleDisabled');
        });

        //editables
        $('#username').editable({
            // url: 'url/to/server',
            type: 'text',
            pk: 1,
            name: 'username',
            title: 'Enter username',
            mode: 'inline'
        });

        $('#firstname').editable({
            validate: function(value) {
                if ($.trim(value) === '') return 'This field is required';
            },
            mode: 'inline'
        });

        $('#sex').editable({
            prepend: "not selected",
            source: [
                { value: 1, text: 'Male' },
                { value: 2, text: 'Female' }
            ],
            display: function(value, sourceData) {
                var colors = { "": "gray", 1: "green", 2: "blue" },
                    elem = $.grep(sourceData, function(o) { return o.value == value; });

                if (elem.length) {
                    $(this).text(elem[0].text).css("color", colors[value]);
                } else {
                    $(this).empty();
                }
            },
            mode: 'inline'
        });

        $('#status').editable({
            mode: 'inline'
        });

        $('#group').editable({
            showbuttons: false,
            mode: 'inline'
        });

        $('#dob').editable({
            mode: 'inline'
        });

        $('#event').editable({
            placement: 'right',
            combodate: {
                firstItem: 'name'
            },
            mode: 'inline'
        });

        $('#comments').editable({
            showbuttons: 'bottom',
            mode: 'inline'
        });

        $('#note').editable({
            mode: 'inline'
        });
        $('#pencil').click(function(e) {
            e.stopPropagation();
            e.preventDefault();
            $('#note').editable('toggle');
        });

        $('#user .editable').on('hidden', function(e, reason) {
            if (reason === 'save' || reason === 'nochange') {
                var $next = $(this).closest('tr').next().find('.editable');
                if ($('#autoopen').is(':checked')) {
                    setTimeout(function() {
                        $next.editable('show');
                    }, 300);
                } else {
                    $next.focus();
                }
            }
        });

        // TABLE
        // -----------------------------------

        $('#users a').editable({
            type: 'text',
            name: 'username',
            title: 'Enter username',
            mode: 'inline'
        });

    }

})(window, document, window.jQuery);
var funciones_varias = {

    soloNumeros: function (obj) {
        'use strict';

        obj.value = obj.value.replace(/\D/g, "");
    }
};
/**=========================================================
 * Module: gmap.js
 * Init Google Map plugin
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    $(initGoogleMaps);

    // -------------------------
    // Map Style definition
    // -------------------------
    // Get more styles from http://snazzymaps.com/style/29/light-monochrome
    // - Just replace and assign to 'MapStyles' the new style array
    var MapStyles = [{ featureType: 'water', stylers: [{ visibility: 'on' }, { color: '#bdd1f9' }] }, { featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#334165' }] }, { featureType: 'landscape', stylers: [{ color: '#e9ebf1' }] }, { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#c5c6c6' }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#d8dbe0' }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#cfd5e0' }] }, { featureType: 'administrative', stylers: [{ visibility: 'on' }, { lightness: 33 }] }, { featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'on' }, { lightness: 20 }] }, { featureType: 'road', stylers: [{ color: '#d8dbe0', lightness: 20 }] }];


    function initGoogleMaps() {

        if (!$.fn.gMap) return;

        var mapSelector = '[data-gmap]';
        var gMapRefs = [];

        $(mapSelector).each(function() {

            var $this = $(this),
                addresses = $this.data('address') && $this.data('address').split(';'),
                titles = $this.data('title') && $this.data('title').split(';'),
                zoom = $this.data('zoom') || 14,
                maptype = $this.data('maptype') || 'ROADMAP', // or 'TERRAIN'
                markers = [];

            if (addresses) {
                for (var a in addresses) {
                    if (typeof addresses[a] == 'string') {
                        markers.push({
                            address: addresses[a],
                            html: (titles && titles[a]) || '',
                            popup: true /* Always popup */
                        });
                    }
                }

                var options = {
                    controls: {
                        panControl: true,
                        zoomControl: true,
                        mapTypeControl: true,
                        scaleControl: true,
                        streetViewControl: true,
                        overviewMapControl: true
                    },
                    scrollwheel: false,
                    maptype: maptype,
                    markers: markers,
                    zoom: zoom
                    // More options https://github.com/marioestrada/jQuery-gMap
                };

                var gMap = $this.gMap(options);

                var ref = gMap.data('gMap.reference');
                // save in the map references list
                gMapRefs.push(ref);

                // set the styles
                if ($this.data('styled') !== undefined) {

                    ref.setOptions({
                        styles: MapStyles
                    });

                }
            }

        }); //each

    }

})(window, document, window.jQuery);
// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initVectorMap);

    function initVectorMap() {

        var element = $('[data-vector-map]');

        var seriesData = {
            'CA': 11100, // Canada
            'DE': 2510, // Germany
            'FR': 3710, // France
            'AU': 5710, // Australia
            'GB': 8310, // Great Britain
            'RU': 9310, // Russia
            'BR': 6610, // Brazil
            'IN': 7810, // India
            'CN': 4310, // China
            'US': 839, // USA
            'SA': 410 // Saudi Arabia
        };

        var markersData = [
            { latLng: [41.90, 12.45], name: 'Vatican City' },
            { latLng: [43.73, 7.41], name: 'Monaco' },
            { latLng: [-0.52, 166.93], name: 'Nauru' },
            { latLng: [-8.51, 179.21], name: 'Tuvalu' },
            { latLng: [7.11, 171.06], name: 'Marshall Islands' },
            { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
            { latLng: [3.2, 73.22], name: 'Maldives' },
            { latLng: [35.88, 14.5], name: 'Malta' },
            { latLng: [41.0, -71.06], name: 'New England' },
            { latLng: [12.05, -61.75], name: 'Grenada' },
            { latLng: [13.16, -59.55], name: 'Barbados' },
            { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
            { latLng: [-4.61, 55.45], name: 'Seychelles' },
            { latLng: [7.35, 134.46], name: 'Palau' },
            { latLng: [42.5, 1.51], name: 'Andorra' }
        ];

        new VectorMap(element, seriesData, markersData);

    }

})(window, document, window.jQuery);
// JVECTOR MAP
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    // Allow Global access
    window.VectorMap = VectorMap

    var defaultColors = {
        markerColor: '#23b7e5', // the marker points
        bgColor: 'transparent', // the background
        scaleColors: ['#878c9a'], // the color of the region in the serie
        regionFill: '#bbbec6' // the base region color
    };

    function VectorMap(element, seriesData, markersData) {

        if (!element || !element.length) return;

        var attrs = element.data(),
            mapHeight = attrs.height || '300',
            options = {
                markerColor: attrs.markerColor || defaultColors.markerColor,
                bgColor: attrs.bgColor || defaultColors.bgColor,
                scale: attrs.scale || 1,
                scaleColors: attrs.scaleColors || defaultColors.scaleColors,
                regionFill: attrs.regionFill || defaultColors.regionFill,
                mapName: attrs.mapName || 'world_mill_en'
            };

        element.css('height', mapHeight);

        init(element, options, seriesData, markersData);

        function init($element, opts, series, markers) {

            $element.vectorMap({
                map: opts.mapName,
                backgroundColor: opts.bgColor,
                zoomMin: 1,
                zoomMax: 8,
                zoomOnScroll: false,
                regionStyle: {
                    initial: {
                        'fill': opts.regionFill,
                        'fill-opacity': 1,
                        'stroke': 'none',
                        'stroke-width': 1.5,
                        'stroke-opacity': 1
                    },
                    hover: {
                        'fill-opacity': 0.8
                    },
                    selected: {
                        fill: 'blue'
                    },
                    selectedHover: {}
                },
                focusOn: { x: 0.4, y: 0.6, scale: opts.scale },
                markerStyle: {
                    initial: {
                        fill: opts.markerColor,
                        stroke: opts.markerColor
                    }
                },
                onRegionLabelShow: function(e, el, code) {
                    if (series && series[code])
                        el.html(el.html() + ': ' + series[code] + ' visitors');
                },
                markers: markers,
                series: {
                    regions: [{
                        values: series,
                        scale: opts.scaleColors,
                        normalizeFunction: 'polynomial'
                    }]
                },
            });

        } // end init
    };

})(window, document, window.jQuery);
/**
 * Used for user pages
 * Login and Register
 */
(function(window, document, $, undefined) {
    'use strict';

    $(initParsleyForPages);

    function initParsleyForPages() {

        // Parsley options setup for bootstrap validation classes
        var parsleyOptions = {
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            classHandler: function (ParsleyField) {
                var el = ParsleyField.$element.parents('.form-group').find('input');
                if (!el.length) // support custom checkbox
                    el = ParsleyField.$element.parents('.c-checkbox').find('label');
                return el;
            },
            errorsContainer: function (ParsleyField) {
                return ParsleyField.$element.parents('.form-group');
            },
            errorsWrapper: '<div class="text-help">',
            errorTemplate: '<div></div>'
        };

        //// Register form validation with Parsley
        var formLogin = $("#formLogin");
        if (formLogin.length)
            formLogin.parsley(parsleyOptions);

        var formListarAmortizacion = $("#formListarAmortizacion");
        if (formListarAmortizacion.length)
            formListarAmortizacion.parsley(parsleyOptions);

        var formCambioClave = $("#formCambioClave");
        if (formCambioClave.length)
            formCambioClave.parsley(parsleyOptions);

        var formRecuperarClave = $("#formRecuperarClave");
        if (formRecuperarClave.length)
            formRecuperarClave.parsley(parsleyOptions);

        var formContabilizar = $("#formContabilizar");
        if (formContabilizar.length)
            formContabilizar.parsley(parsleyOptions);

        var formCrearGlobal = $("#formCrearGlobal");
        if (formCrearGlobal.length)
            formCrearGlobal.parsley(parsleyOptions);

        var formEditarGlobal = $("#formEditarGlobal");
        if (formEditarGlobal.length)
            formEditarGlobal.parsley(parsleyOptions);

        var formCrearOrdenDeCompra = $("#formCrearOrdenDeCompra");
        if (formCrearOrdenDeCompra.length)
            formCrearOrdenDeCompra.parsley(parsleyOptions);

        var formDireccionCasaGlobal = $("#formDireccionCasaGlobal");
        if (formDireccionCasaGlobal.length)
            formDireccionCasaGlobal.parsley(parsleyOptions);
    }

})(window, document, window.jQuery);
var security_Index = {

    login: function () {
        'use strict';

        $("#formLogin").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var loginViewModel = {
                        "Email": $("#email").val(),
                        "Password": $("#password").val(),
                        "RememberMe": $("#rememberMe").is(':checked')

                    };

                    var token = $('input[name="__RequestVerificationToken"]').val();

                    var jsonAPI;
                    $.getJSON('https://ipapi.co/json/', function (data) {
                        jsonAPI = JSON.stringify(data, null, 2);

                        $.ajax({
                            type: "POST",
                            url: rootHost + 'Security/Login',
                            data: { __RequestVerificationToken: token, model: loginViewModel, JsonAPI: jsonAPI },
                            async: true,
                            dataType: 'JSON',
                            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                            success: function (response) {


                                switch (response.msn) {
                                    case "0":
                                        window.location = rootHost + "Home/Welcome";
                                        break;
                                    default:
                                        swal("Validación", response.msn, "warning");
                                        break;

                                    case "200":
                                        swal("Oops!", response.error, "error");
                                        break;
                                }

                            },
                            error: function (response) {

                                swal("Oops!", JSON.stringify(response), "error");
                            }
                        });
                    });
                }

            } catch (ex) {

                swal("Oops!", "Error en el método login \n" + ex, "error");
            }
        });
    },
    logOff: function () {
        'use strict';

        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/LogOff',
                data: {},
                async: true,
                dataType: 'JSON',
                success: function (response) {

                    if (response.msn === "success") {
                        window.location = rootHost + "Home/Index";
                    } else {
                        swal("Oops!", response.msn, "error");
                    }
                },
                error: function (response) {

                    swal("Oops!", JSON.stringify(response), "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método logOff \n" + ex, "error");
        }
    },
    forgotPassword: function () {
        'use strict';

        $("#formRecuperarClave").submit(function (e) {
            try {
                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var email = $("#resetInputEmail1").val();

                    var token = $('input[name="__RequestVerificationToken"]').val();

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/ForgotPassword',
                        data: { __RequestVerificationToken: token, Email: email },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn.length > 0) {

                                swal("Notificación", response.msn, "success");

                            } else {

                                swal("Oops!", response.error, "error");
                            }
                        },
                        error: function (ex) {

                            swal("Oops!", ex, "error");
                        }
                    });

                }

            } catch (ex) {

                swal("Oops!", "Error en el método forgotPassword \n" + ex, "error");
            }

        });
    }
};
/**
 * Clase que contiene los método para crear un usuario.
 * */


var security_CrearUsuario = {

    crearUsuario: function () {
        'use strict';

        $("#formCrearGlobal").submit(function (e) {
            try {
                debugger;
                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var formData = $(this).serialize();

                    var formCrearGlobal = $("#formCrearGlobal");
                    formData = new FormData(formCrearGlobal[0]);

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/CrearUsuario',
                        data: formData,
                        async: true,
                        contentType: false,
                        processData: false,
                        success: function (response) {

                            if (response.msn === "success") {

                                swal("Notificación", "El usuario se creo correctamente en el sistema.", "success");
                                window.location = rootHost + "Home/Index";

                            } else {

                                swal("Oops!", response.error, "error");
                            }
                        },
                        error: function (ex) {

                            swal("Oops!", ex, "error");
                        }
                    });

                }

            } catch (ex) {

                swal("Oops!", "Error en el método crearUsuario \n" + ex, "error");
            }
        });
    }

};
$(document).on('change', '[data-cascade-combo]', function (event) {

    
    var id = $(this).attr('data-cascade-combo');

    var url = $(this).attr('data-cascade-combo-source');

    var paramName = $(this).attr('data-cascade-combo-param-name');

    var data = {};
    data[paramName] = id;

    $.ajax({
        url: url,
        data: { id: $(this).val() },
        success: function (data) {

            $(id).html('');
            

            $.each(data,
                function (index, type) {
                    var content = '<option value="' + type.id + '">' + type.Nombre + '</option>';
                    $(id).append(content);
                });

            $('.selectpicker').selectpicker('refresh');

            $(id).trigger("chosen:updated");
        }
    });
});
$(function () {
    $('form').parsley();
});
window.Parsley.on('field:error', function () {
    // This global callback will be called for any field that fails validation.
    this.$element.closest('.tab-pane').addClass('validation_error');
    $('.tab-content .tab-pane.validation_error:eq(0)').addClass('first_tab_with_errors');
    current_tab_id = $('.tab-content .tab-pane.validation_error.first_tab_with_errors').attr('id');
    $('.nav-tabs a[href="' + '#' + current_tab_id + '"]').tab('show');
    $('.nav-tabs a[href="' + '#' + (this.$element.closest('.tab-pane').attr('id')) + '"]').addClass('validation_errors');
}); 
window.Parsley.on('field:success', function () {
    // This global callback will be called for any field that fails validation.
    if (this.$element.closest('.validation_error').children().find('.parsley-error').length) {
        //console.log(this.$element.attr('id'));
    } else {
        $('.nav-tabs a[href="' + '#' + (this.$element.closest('.tab-pane').attr('id')) + '"]').removeClass('validation_errors');
        //console.log(this.$element.attr('id'));
    }
});
// Unobtrusive Ajax support library for jQuery
// Copyright (C) Microsoft Corporation. All rights reserved.
// @version v3.2.5
// 
// Microsoft grants you the right to use these script files for the sole
// purpose of either: (i) interacting through your browser with the Microsoft
// website or online service, subject to the applicable licensing or use
// terms; or (ii) using the files as included with a Microsoft product subject
// to that product's license terms. Microsoft reserves all other rights to the
// files not expressly granted by Microsoft, whether by implication, estoppel
// or otherwise. Insofar as a script file is dual licensed under GPL,
// Microsoft neither took the code under GPL nor distributes it thereunder but
// under the terms set out in this paragraph. All notices and licenses
// below are for informational purposes only.

/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: false */
/*global window: false, jQuery: false */

(function ($) {
    var data_click = "unobtrusiveAjaxClick",
        data_target = "unobtrusiveAjaxClickTarget",
        data_validation = "unobtrusiveValidation";

    function getFunction(code, argNames) {
        var fn = window, parts = (code || "").split(".");
        while (fn && parts.length) {
            fn = fn[parts.shift()];
        }
        if (typeof (fn) === "function") {
            return fn;
        }
        argNames.push(code);
        return Function.constructor.apply(null, argNames);
    }

    function isMethodProxySafe(method) {
        return method === "GET" || method === "POST";
    }

    function asyncOnBeforeSend(xhr, method) {
        if (!isMethodProxySafe(method)) {
            xhr.setRequestHeader("X-HTTP-Method-Override", method);
        }
    }

    function asyncOnSuccess(element, data, contentType) {
        var mode;

        if (contentType.indexOf("application/x-javascript") !== -1) {  // jQuery already executes JavaScript for us
            return;
        }

        mode = (element.getAttribute("data-ajax-mode") || "").toUpperCase();
        $(element.getAttribute("data-ajax-update")).each(function (i, update) {
            var top;

            switch (mode) {
                case "BEFORE":
                    $(update).prepend(data);
                    break;
                case "AFTER":
                    $(update).append(data);
                    break;
                case "REPLACE-WITH":
                    $(update).replaceWith(data);
                    break;
                default:
                    $(update).html(data);
                    break;
            }
        });
    }

    function asyncRequest(element, options) {
        var confirm, loading, method, duration;

        confirm = element.getAttribute("data-ajax-confirm");
        if (confirm && !window.confirm(confirm)) {
            return;
        }

        loading = $(element.getAttribute("data-ajax-loading"));
        duration = parseInt(element.getAttribute("data-ajax-loading-duration"), 10) || 0;

        $.extend(options, {
            type: element.getAttribute("data-ajax-method") || undefined,
            url: element.getAttribute("data-ajax-url") || undefined,
            cache: (element.getAttribute("data-ajax-cache") || "").toLowerCase() === "true",
            beforeSend: function (xhr) {
                var result;
                asyncOnBeforeSend(xhr, method);
                result = getFunction(element.getAttribute("data-ajax-begin"), ["xhr"]).apply(element, arguments);
                if (result !== false) {
                    loading.show(duration);
                }
                return result;
            },
            complete: function () {
                loading.hide(duration);
                getFunction(element.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(element, arguments);
            },
            success: function (data, status, xhr) {
                asyncOnSuccess(element, data, xhr.getResponseHeader("Content-Type") || "text/html");
                getFunction(element.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(element, arguments);
            },
            error: function () {
                getFunction(element.getAttribute("data-ajax-failure"), ["xhr", "status", "error"]).apply(element, arguments);
            }
        });

        options.data.push({ name: "X-Requested-With", value: "XMLHttpRequest" });

        method = options.type.toUpperCase();
        if (!isMethodProxySafe(method)) {
            options.type = "POST";
            options.data.push({ name: "X-HTTP-Method-Override", value: method });
        }

        $.ajax(options);
    }

    function validate(form) {
        var validationInfo = $(form).data(data_validation);
        return !validationInfo || !validationInfo.validate || validationInfo.validate();
    }

    $(document).on("click", "a[data-ajax=true]", function (evt) {
        evt.preventDefault();
        asyncRequest(this, {
            url: this.href,
            type: "GET",
            data: []
        });
    });

    $(document).on("click", "form[data-ajax=true] input[type=image]", function (evt) {
        var name = evt.target.name,
            target = $(evt.target),
            form = $(target.parents("form")[0]),
            offset = target.offset();

        form.data(data_click, [
            { name: name + ".x", value: Math.round(evt.pageX - offset.left) },
            { name: name + ".y", value: Math.round(evt.pageY - offset.top) }
        ]);

        setTimeout(function () {
            form.removeData(data_click);
        }, 0);
    });

    $(document).on("click", "form[data-ajax=true] :submit", function (evt) {
        var name = evt.currentTarget.name,
            target = $(evt.target),
            form = $(target.parents("form")[0]);

        form.data(data_click, name ? [{ name: name, value: evt.currentTarget.value }] : []);
        form.data(data_target, target);

        setTimeout(function () {
            form.removeData(data_click);
            form.removeData(data_target);
        }, 0);
    });

    $(document).on("submit", "form[data-ajax=true]", function (evt) {
        var clickInfo = $(this).data(data_click) || [],
            clickTarget = $(this).data(data_target),
            isCancel = clickTarget && (clickTarget.hasClass("cancel") || clickTarget.attr('formnovalidate') !== undefined);
        evt.preventDefault();
        if (!isCancel && !validate(this)) {
            return;
        }
        asyncRequest(this, {
            url: this.action,
            type: this.method || "GET",
            data: clickInfo.concat($(this).serializeArray())
        });
    });
}(jQuery));

var waitingDialog = waitingDialog || (function ($) {
    'use strict';

    // Creating modal dialog's DOM
    var $dialog = $(
        '<div class="modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:20%;">' +
        '<div class="modal-dialog modal-m">' +
        '<div class="modal-body" style="">' +
        '<div class="whirl duo" style="width: 100%;margin-bottom:0;"></div></div>' +
        '</div>' +
        '</div></div>');

    return {

        show: function (message, options) {

            if (typeof options === 'undefined') {
                options = {};
            }
            if (typeof message === 'undefined') {
                message = 'Loading';
            }

            var settings = $.extend({
                dialogSize: 'm',
                progressType: '',
                onHide: null // This callback runs after the dialog was hidden
            }, options);

            // Configuring dialog
            $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
            $dialog.find('.progress-bar').attr('class', 'progress-bar');
            if (settings.progressType) {
                $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
            }
            //$dialog.find('h3').text(message);
            // Adding callbacks
            if (typeof settings.onHide === 'function') {
                $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                    settings.onHide.call($dialog);
                });
            }

            $dialog.modal();
        },
        /**
		 * Closes dialog
		 */
        hide: function () {

            
            $dialog.modal('hide');
        }
    };

})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5pbml0LmpzIiwiY2hhcnRzL2NoYXJ0LWtub2IuanMiLCJjaGFydHMvY2hhcnQuanMiLCJjaGFydHMvY2hhcnRpc3QuanMiLCJjaGFydHMvZWFzeXBpZWNoYXJ0LmpzIiwiY2hhcnRzL2Zsb3QuanMiLCJjaGFydHMvbW9ycmlzLmpzIiwiY2hhcnRzL3JpY2tzaGF3LmpzIiwiY2hhcnRzL3NwYXJrbGluZS5qcyIsImNvbW1vbi9ib290c3RyYXAtc3RhcnQuanMiLCJjb21tb24vY2FyZC10b29scy5qcyIsImNvbW1vbi9jb25zdGFudHMuanMiLCJjb21tb24vZnVsbHNjcmVlbi5qcyIsImNvbW1vbi9sb2FkLWNzcy5qcyIsImNvbW1vbi9uYXZiYXItc2VhcmNoLmpzIiwiY29tbW9uL25vdy5qcyIsImNvbW1vbi9ydGwuanMiLCJjb21tb24vc2lkZWJhci5qcyIsImNvbW1vbi9zbGltc2Nyb2xsLmpzIiwiY29tbW9uL3RhYmxlLWNoZWNrYWxsLmpzIiwiY29tbW9uL3RvZ2dsZS1zdGF0ZS5qcyIsImNvbW1vbi90cmlnZ2VyLXJlc2l6ZS5qcyIsImV4dHJhcy9jYWxlbmRhci5qcyIsImV4dHJhcy9qcWNsb3VkLmpzIiwiZXh0cmFzL3NlYXJjaC5qcyIsImVsZW1lbnRzL2NhcmRzLmpzIiwiZWxlbWVudHMvbmVzdGFibGUuanMiLCJlbGVtZW50cy9ub3RpZnkuanMiLCJlbGVtZW50cy9wbGF5LWFuaW1hdGlvbi5qcyIsImVsZW1lbnRzL3BvcmxldHMuanMiLCJlbGVtZW50cy9zb3J0YWJsZS5qcyIsImVsZW1lbnRzL3N3ZWV0YWxlcnQuanMiLCJmb3Jtcy9jb2xvci1waWNrZXIuanMiLCJmb3Jtcy9mb3Jtcy5qcyIsImZvcm1zL2ltYWdlY3JvcC5qcyIsImZvcm1zL3NlbGVjdDIuanMiLCJmb3Jtcy91cGxvYWQuanMiLCJmb3Jtcy93aXphcmQuanMiLCJmb3Jtcy94ZWRpdGFibGUuanMiLCJHbG9iYWwvZnVuY2lvbmVzR2xvYmFsZXMuanMiLCJtYXBzL2dtYXAuanMiLCJtYXBzL3ZlY3Rvci5tYXAuZGVtby5qcyIsIm1hcHMvdmVjdG9yLm1hcC5qcyIsInBhZ2VzL3BhZ2VzLmpzIiwic2VjdXJpdHkvSW5kZXguanMiLCJzZWN1cml0eS9fQ3JlYXJVc3VhcmlvLmpzIiwiY2FzY2FkZS5jb21iby5qcyIsImN1c3RvbS5qcyIsImpxdWVyeS51bm9idHJ1c2l2ZS1hamF4LmpzIiwid2FpdGluZ0RpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKlxyXG4gKiBcclxuICogRVZFUlRFQyBUaWVuZGFcclxuICogVmVyc2lvbjogMS4wLjBcclxuICogQXV0aG9yOiBqaG9uLm1vbnRveWFAb3V0bG9vay5jb21cclxuICpcclxuICovXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYXBwbGljYXRpb25cXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gUmVzdG9yZSBib2R5IGNsYXNzZXNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICBuZXcgU3RhdGVUb2dnbGVyKCkucmVzdG9yZVN0YXRlKCRib2R5KTtcclxuXHJcbiAgICAgICAgLy8gZW5hYmxlIHNldHRpbmdzIHRvZ2dsZSBhZnRlciByZXN0b3JlXHJcbiAgICAgICAgJCgnI2Noay1maXhlZCcpLnByb3AoJ2NoZWNrZWQnLCAkYm9keS5oYXNDbGFzcygnbGF5b3V0LWZpeGVkJykpO1xyXG4gICAgICAgICQoJyNjaGstY29sbGFwc2VkJykucHJvcCgnY2hlY2tlZCcsICRib2R5Lmhhc0NsYXNzKCdhc2lkZS1jb2xsYXBzZWQnKSk7XHJcbiAgICAgICAgJCgnI2Noay1jb2xsYXBzZWQtdGV4dCcpLnByb3AoJ2NoZWNrZWQnLCAkYm9keS5oYXNDbGFzcygnYXNpZGUtY29sbGFwc2VkLXRleHQnKSk7XHJcbiAgICAgICAgJCgnI2Noay1ib3hlZCcpLnByb3AoJ2NoZWNrZWQnLCAkYm9keS5oYXNDbGFzcygnbGF5b3V0LWJveGVkJykpO1xyXG4gICAgICAgICQoJyNjaGstZmxvYXQnKS5wcm9wKCdjaGVja2VkJywgJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLWZsb2F0JykpO1xyXG4gICAgICAgICQoJyNjaGstaG92ZXInKS5wcm9wKCdjaGVja2VkJywgJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLWhvdmVyJykpO1xyXG5cclxuICAgICAgICAvLyBXaGVuIHJlYWR5IGRpc3BsYXkgdGhlIG9mZnNpZGViYXJcclxuICAgICAgICAkKCcub2Zmc2lkZWJhci5kLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcblxyXG4gICAgICAgIC8vIERpc2FibGUgd2FybmluZyBcIlN5bmNocm9ub3VzIFhNTEh0dHBSZXF1ZXN0IG9uIHRoZSBtYWluIHRocmVhZCBpcyBkZXByZWNhdGVkLi5cIlxyXG4gICAgICAgICQuYWpheFByZWZpbHRlcihmdW5jdGlvbihvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pOyAvLyBkb2MgcmVhZHlcclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEtub2IgY2hhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRLbm9iKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0S25vYigpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmtub2IpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGtub2JMb2FkZXJPcHRpb25zMSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICc1MCUnLCAvLyByZXNwb25zaXZlXHJcbiAgICAgICAgICAgIGRpc3BsYXlJbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgZmdDb2xvcjogQVBQX0NPTE9SU1snaW5mbyddXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKCcja25vYi1jaGFydDEnKS5rbm9iKGtub2JMb2FkZXJPcHRpb25zMSk7XHJcblxyXG4gICAgICAgIHZhciBrbm9iTG9hZGVyT3B0aW9uczIgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJywgLy8gcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICBkaXNwbGF5SW5wdXQ6IHRydWUsXHJcbiAgICAgICAgICAgIGZnQ29sb3I6IEFQUF9DT0xPUlNbJ3B1cnBsZSddLFxyXG4gICAgICAgICAgICByZWFkT25seTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2tub2ItY2hhcnQyJykua25vYihrbm9iTG9hZGVyT3B0aW9uczIpO1xyXG5cclxuICAgICAgICB2YXIga25vYkxvYWRlck9wdGlvbnMzID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzUwJScsIC8vIHJlc3BvbnNpdmVcclxuICAgICAgICAgICAgZGlzcGxheUlucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICBmZ0NvbG9yOiBBUFBfQ09MT1JTWydpbmZvJ10sXHJcbiAgICAgICAgICAgIGJnQ29sb3I6IEFQUF9DT0xPUlNbJ2dyYXknXSxcclxuICAgICAgICAgICAgYW5nbGVPZmZzZXQ6IC0xMjUsXHJcbiAgICAgICAgICAgIGFuZ2xlQXJjOiAyNTBcclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNrbm9iLWNoYXJ0MycpLmtub2Ioa25vYkxvYWRlck9wdGlvbnMzKTtcclxuXHJcbiAgICAgICAgdmFyIGtub2JMb2FkZXJPcHRpb25zNCA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICc1MCUnLCAvLyByZXNwb25zaXZlXHJcbiAgICAgICAgICAgIGRpc3BsYXlJbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgZmdDb2xvcjogQVBQX0NPTE9SU1sncGluayddLFxyXG4gICAgICAgICAgICBkaXNwbGF5UHJldmlvdXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRoaWNrbmVzczogMC4xLFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAncm91bmQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKCcja25vYi1jaGFydDQnKS5rbm9iKGtub2JMb2FkZXJPcHRpb25zNCk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ2hhcnQgSlNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRDaGFydEpTKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2hhcnRKUygpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBDaGFydCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gcmFuZG9tIHZhbHVlcyBmb3IgZGVtb1xyXG4gICAgICAgIHZhciByRmFjdG9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIExpbmUgY2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgbGluZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ015IEZpcnN0IGRhdGFzZXQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxMTQsMTAyLDE4NiwwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxMTQsMTAyLDE4NiwxKScsXHJcbiAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ015IFNlY29uZCBkYXRhc2V0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMzUsMTgzLDIyOSwwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgzNSwxODMsMjI5LDEpJyxcclxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtyRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCldXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGxpbmVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBsaW5lY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0anMtbGluZWNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgbGluZUNoYXJ0ID0gbmV3IENoYXJ0KGxpbmVjdHgsIHtcclxuICAgICAgICAgICAgZGF0YTogbGluZURhdGEsXHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgb3B0aW9uczogbGluZU9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFyIGNoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIGJhckRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjNiN2U1JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzIzYjdlNScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNWQ5Y2VjJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzVkOWNlYycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBiYXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBiYXJjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRqcy1iYXJjaGFydCcpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIGJhckNoYXJ0ID0gbmV3IENoYXJ0KGJhcmN0eCwge1xyXG4gICAgICAgICAgICBkYXRhOiBiYXJEYXRhLFxyXG4gICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgb3B0aW9uczogYmFyT3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAgRG91Z2hudXQgY2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgZG91Z2hudXREYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgICAgICdQdXJwbGUnLFxyXG4gICAgICAgICAgICAgICAgJ1llbGxvdycsXHJcbiAgICAgICAgICAgICAgICAnQmx1ZSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzAwLCA1MCwgMTAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjNzI2NmJhJyxcclxuICAgICAgICAgICAgICAgICAgICAnI2ZhZDczMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMyM2I3ZTUnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzcyNjZiYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNmYWQ3MzInLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMjNiN2U1J1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBkb3VnaG51dE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGRvdWdobnV0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0anMtZG91Z2hudXRjaGFydCcpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIGRvdWdobnV0Q2hhcnQgPSBuZXcgQ2hhcnQoZG91Z2hudXRjdHgsIHtcclxuICAgICAgICAgICAgZGF0YTogZG91Z2hudXREYXRhLFxyXG4gICAgICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBkb3VnaG51dE9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUGllIGNoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIHBpZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICAgICAgJ1B1cnBsZScsXHJcbiAgICAgICAgICAgICAgICAnWWVsbG93JyxcclxuICAgICAgICAgICAgICAgICdCbHVlJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGRhdGE6IFszMDAsIDUwLCAxMDBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJyM3MjY2YmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjZmFkNzMyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzIzYjdlNSdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjNzI2NmJhJyxcclxuICAgICAgICAgICAgICAgICAgICAnI2ZhZDczMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMyM2I3ZTUnXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHBpZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHBpZWN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydGpzLXBpZWNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgcGllQ2hhcnQgPSBuZXcgQ2hhcnQocGllY3R4LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHBpZURhdGEsXHJcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBwaWVPcHRpb25zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFBvbGFyIGNoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIHBvbGFyRGF0YSA9IHtcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgNyxcclxuICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJyNmNTMyZTUnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjNzI2NmJhJyxcclxuICAgICAgICAgICAgICAgICAgICAnI2Y1MzJlNScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyM3MjY2YmEnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNeSBkYXRhc2V0JyAvLyBmb3IgbGVnZW5kXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgICAgICdMYWJlbCAxJyxcclxuICAgICAgICAgICAgICAgICdMYWJlbCAyJyxcclxuICAgICAgICAgICAgICAgICdMYWJlbCAzJyxcclxuICAgICAgICAgICAgICAgICdMYWJlbCA0J1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHBvbGFyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcG9sYXJjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRqcy1wb2xhcmNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgcG9sYXJDaGFydCA9IG5ldyBDaGFydChwb2xhcmN0eCwge1xyXG4gICAgICAgICAgICBkYXRhOiBwb2xhckRhdGEsXHJcbiAgICAgICAgICAgIHR5cGU6ICdwb2xhckFyZWEnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBwb2xhck9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmFkYXIgY2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgcmFkYXJEYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnRWF0aW5nJywgJ0RyaW5raW5nJywgJ1NsZWVwaW5nJywgJ0Rlc2lnbmluZycsICdDb2RpbmcnLCAnQ3ljbGluZycsICdSdW5uaW5nJ10sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNeSBGaXJzdCBkYXRhc2V0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTE0LDEwMiwxODYsMC4yKScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTE0LDEwMiwxODYsMSknLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzY1LCA1OSwgOTAsIDgxLCA1NiwgNTUsIDQwXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ015IFNlY29uZCBkYXRhc2V0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUxLDE4NywyMDUsMC4yKScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTUxLDE4NywyMDUsMSknLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzI4LCA0OCwgNDAsIDE5LCA5NiwgMjcsIDEwMF1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcmFkYXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByYWRhcmN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydGpzLXJhZGFyY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciByYWRhckNoYXJ0ID0gbmV3IENoYXJ0KHJhZGFyY3R4LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHJhZGFyRGF0YSxcclxuICAgICAgICAgICAgdHlwZTogJ3JhZGFyJyxcclxuICAgICAgICAgICAgb3B0aW9uczogcmFkYXJPcHRpb25zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ2hhcnRpc3RcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRDaGFydGlzdHMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDaGFydGlzdHMoKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgQ2hhcnRpc3QgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIEJhciBiaXBvbGFyXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB2YXIgZGF0YTEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydXMScsICdXMicsICdXMycsICdXNCcsICdXNScsICdXNicsICdXNycsICdXOCcsICdXOScsICdXMTAnXSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMiwgNCwgOCwgNiwgLTIsIC0xLCAtNCwgLTYsIC0yXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMxID0ge1xyXG4gICAgICAgICAgICBoaWdoOiAxMCxcclxuICAgICAgICAgICAgbG93OiAtMTAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwLFxyXG4gICAgICAgICAgICBheGlzWDoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggJSAyID09PSAwID8gdmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbmV3IENoYXJ0aXN0LkJhcignI2N0LWJhcjEnLCBkYXRhMSwgb3B0aW9uczEpO1xyXG5cclxuICAgICAgICAvLyBCYXIgSG9yaXpvbnRhbFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgbmV3IENoYXJ0aXN0LkJhcignI2N0LWJhcjInLCB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JywgJ1N1bmRheSddLFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIFs1LCA0LCAzLCA3LCA1LCAxMCwgM10sXHJcbiAgICAgICAgICAgICAgICBbMywgMiwgOSwgNSwgNCwgNiwgNF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VyaWVzQmFyRGlzdGFuY2U6IDEwLFxyXG4gICAgICAgICAgICByZXZlcnNlRGF0YTogdHJ1ZSxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbEJhcnM6IHRydWUsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwLFxyXG4gICAgICAgICAgICBheGlzWToge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiA3MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIExpbmVcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIG5ldyBDaGFydGlzdC5MaW5lKCcjY3QtbGluZTEnLCB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5J10sXHJcbiAgICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICAgICAgWzEyLCA5LCA3LCA4LCA1XSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAzLjUsIDcsIDNdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDMsIDQsIDUsIDZdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODAsXHJcbiAgICAgICAgICAgIGNoYXJ0UGFkZGluZzoge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIFNWRyBBbmltYXRpb25cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgY2hhcnQxID0gbmV3IENoYXJ0aXN0LkxpbmUoJyNjdC1saW5lMycsIHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXHJcbiAgICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICAgICAgWzEsIDUsIDIsIDUsIDQsIDNdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDMsIDQsIDgsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzUsIDQsIDMsIDIsIDEsIDAuNV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbG93OiAwLFxyXG4gICAgICAgICAgICBzaG93QXJlYTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd1BvaW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjaGFydDEub24oJ2RyYXcnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdsaW5lJyB8fCBkYXRhLnR5cGUgPT09ICdhcmVhJykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IDIwMDAgKiBkYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGEucGF0aC5jbG9uZSgpLnNjYWxlKDEsIDApLnRyYW5zbGF0ZSgwLCBkYXRhLmNoYXJ0UmVjdC5oZWlnaHQoKSkuc3RyaW5naWZ5KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhLnBhdGguY2xvbmUoKS5zdHJpbmdpZnkoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBDaGFydGlzdC5TdmcuRWFzaW5nLmVhc2VPdXRRdWludFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBTbGltIGFuaW1hdGlvblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnRpc3QuTGluZSgnI2N0LWxpbmUyJywge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICBbMTIsIDksIDcsIDgsIDUsIDQsIDYsIDIsIDMsIDMsIDQsIDZdLFxyXG4gICAgICAgICAgICAgICAgWzQsIDUsIDMsIDcsIDMsIDUsIDUsIDMsIDQsIDQsIDUsIDVdLFxyXG4gICAgICAgICAgICAgICAgWzUsIDMsIDQsIDUsIDYsIDMsIDMsIDQsIDUsIDYsIDMsIDRdLFxyXG4gICAgICAgICAgICAgICAgWzMsIDQsIDUsIDYsIDcsIDYsIDQsIDUsIDYsIDcsIDYsIDNdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxvdzogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTGV0J3MgcHV0IGEgc2VxdWVuY2UgbnVtYmVyIGFzaWRlIHNvIHdlIGNhbiB1c2UgaXQgaW4gdGhlIGV2ZW50IGNhbGxiYWNrc1xyXG4gICAgICAgIHZhciBzZXEgPSAwLFxyXG4gICAgICAgICAgICBkZWxheXMgPSA4MCxcclxuICAgICAgICAgICAgZHVyYXRpb25zID0gNTAwO1xyXG5cclxuICAgICAgICAvLyBPbmNlIHRoZSBjaGFydCBpcyBmdWxseSBjcmVhdGVkIHdlIHJlc2V0IHRoZSBzZXF1ZW5jZVxyXG4gICAgICAgIGNoYXJ0Lm9uKCdjcmVhdGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlcSA9IDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE9uIGVhY2ggZHJhd24gZWxlbWVudCBieSBDaGFydGlzdCB3ZSB1c2UgdGhlIENoYXJ0aXN0LlN2ZyBBUEkgdG8gdHJpZ2dlciBTTUlMIGFuaW1hdGlvbnNcclxuICAgICAgICBjaGFydC5vbignZHJhdycsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgc2VxKys7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnbGluZScpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBkcmF3biBlbGVtZW50IGlzIGEgbGluZSB3ZSBkbyBhIHNpbXBsZSBvcGFjaXR5IGZhZGUgaW4uIFRoaXMgY291bGQgYWxzbyBiZSBhY2hpZXZlZCB1c2luZyBDU1MzIGFuaW1hdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZGVsYXkgd2hlbiB3ZSBsaWtlIHRvIHN0YXJ0IHRoZSBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyArIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIER1cmF0aW9uIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB2YWx1ZSB3aGVyZSB0aGUgYW5pbWF0aW9uIHNob3VsZCBzdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdmFsdWUgd2hlcmUgaXQgc2hvdWxkIGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gJ2xhYmVsJyAmJiBkYXRhLmF4aXMgPT09ICd4Jykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGEueSArIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IGRhdGEueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIHNwZWNpZnkgYW4gZWFzaW5nIGZ1bmN0aW9uIGZyb20gQ2hhcnRpc3QuU3ZnLkVhc2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAnbGFiZWwnICYmIGRhdGEuYXhpcyA9PT0gJ3knKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YS54IC0gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAncG9pbnQnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGEueCAtIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB4Mjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YS54IC0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAnZ3JpZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVzaW5nIGRhdGEuYXhpcyB3ZSBnZXQgeCBvciB5IHdoaWNoIHdlIGNhbiB1c2UgdG8gY29uc3RydWN0IG91ciBhbmltYXRpb24gZGVmaW5pdGlvbiBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zMUFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cjogZHVyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGFbZGF0YS5heGlzLnVuaXRzLnBvcyArICcxJ10gLSAzMCxcclxuICAgICAgICAgICAgICAgICAgICB0bzogZGF0YVtkYXRhLmF4aXMudW5pdHMucG9zICsgJzEnXSxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwb3MyQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YVtkYXRhLmF4aXMudW5pdHMucG9zICsgJzInXSAtIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICB0bzogZGF0YVtkYXRhLmF4aXMudW5pdHMucG9zICsgJzInXSxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zW2RhdGEuYXhpcy51bml0cy5wb3MgKyAnMSddID0gcG9zMUFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnNbZGF0YS5heGlzLnVuaXRzLnBvcyArICcyJ10gPSBwb3MyQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uc1snb3BhY2l0eSddID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICB0bzogMSxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hbmltYXRlKGFuaW1hdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEZvciB0aGUgc2FrZSBvZiB0aGUgZXhhbXBsZSB3ZSB1cGRhdGUgdGhlIGNoYXJ0IGV2ZXJ5IHRpbWUgaXQncyBjcmVhdGVkIHdpdGggYSBkZWxheSBvZiAxMCBzZWNvbmRzXHJcbiAgICAgICAgY2hhcnQub24oJ2NyZWF0ZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5fX2V4YW1wbGVBbmltYXRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHdpbmRvdy5fX2V4YW1wbGVBbmltYXRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX19leGFtcGxlQW5pbWF0ZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5fX2V4YW1wbGVBbmltYXRlVGltZW91dCA9IHNldFRpbWVvdXQoY2hhcnQudXBkYXRlLmJpbmQoY2hhcnQpLCAxMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gRWFzeXBpZSBjaGFydCBMb2FkZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRFYXN5UGllQ2hhcnQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRFYXN5UGllQ2hhcnQoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5lYXN5UGllQ2hhcnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gVXNhZ2UgdmlhIGRhdGEgYXR0cmlidXRlc1xyXG4gICAgICAgIC8vIDxkaXYgY2xhc3M9XCJlYXN5cGllLWNoYXJ0XCIgZGF0YS1lYXN5cGllY2hhcnQgZGF0YS1wZXJjZW50PVwiWFwiIGRhdGEtb3B0aW9uTmFtZT1cInZhbHVlXCI+PC9kaXY+XHJcbiAgICAgICAgJCgnW2RhdGEtZWFzeXBpZWNoYXJ0XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gJGVsZW0uZGF0YSgpO1xyXG4gICAgICAgICAgICAkZWxlbS5lYXN5UGllQ2hhcnQob3B0aW9ucyB8fCB7fSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHByb2dyYW1tYXRpYyB1c2FnZVxyXG4gICAgICAgIHZhciBwaWVPcHRpb25zMSA9IHtcclxuICAgICAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFyQ29sb3I6IEFQUF9DT0xPUlNbJ3N1Y2Nlc3MnXSxcclxuICAgICAgICAgICAgdHJhY2tDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjYWxlQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDEwLFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAnY2lyY2xlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2Vhc3lwaWUxJykuZWFzeVBpZUNoYXJ0KHBpZU9wdGlvbnMxKTtcclxuXHJcbiAgICAgICAgdmFyIHBpZU9wdGlvbnMyID0ge1xyXG4gICAgICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYXJDb2xvcjogQVBQX0NPTE9SU1snd2FybmluZyddLFxyXG4gICAgICAgICAgICB0cmFja0NvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgc2NhbGVDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogNCxcclxuICAgICAgICAgICAgbGluZUNhcDogJ2NpcmNsZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNlYXN5cGllMicpLmVhc3lQaWVDaGFydChwaWVPcHRpb25zMik7XHJcblxyXG4gICAgICAgIHZhciBwaWVPcHRpb25zMyA9IHtcclxuICAgICAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFyQ29sb3I6IEFQUF9DT0xPUlNbJ2RhbmdlciddLFxyXG4gICAgICAgICAgICB0cmFja0NvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgc2NhbGVDb2xvcjogQVBQX0NPTE9SU1snZ3JheSddLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDE1LFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAnY2lyY2xlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2Vhc3lwaWUzJykuZWFzeVBpZUNoYXJ0KHBpZU9wdGlvbnMzKTtcclxuXHJcbiAgICAgICAgdmFyIHBpZU9wdGlvbnM0ID0ge1xyXG4gICAgICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYXJDb2xvcjogQVBQX0NPTE9SU1snZGFuZ2VyJ10sXHJcbiAgICAgICAgICAgIHRyYWNrQ29sb3I6IEFQUF9DT0xPUlNbJ3llbGxvdyddLFxyXG4gICAgICAgICAgICBzY2FsZUNvbG9yOiBBUFBfQ09MT1JTWydncmF5LWRhcmsnXSxcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAxNSxcclxuICAgICAgICAgICAgbGluZUNhcDogJ2NpcmNsZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNlYXN5cGllNCcpLmVhc3lQaWVDaGFydChwaWVPcHRpb25zNCk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ0hBUlQgU1BMSU5FXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRGbG90U3BsaW5lKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RmxvdFNwbGluZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVW5pcXVlc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzc2ODI5NFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDcwXSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCA4NV0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgNTldLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDkzXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCA2Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgODZdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDYwXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUmVjdXJyZW50XCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMWY5MmZlXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgMjFdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDEyXSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCAyN10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgMjRdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDE2XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCAzOV0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgMTVdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGF2MiA9IFt7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJIb3Vyc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzIzYjdlNVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDcwXSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCAyMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgNzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDg1XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCA1OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgOTNdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDY2XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCA4Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNjBdLFxyXG4gICAgICAgICAgICAgICAgW1wiT2N0XCIsIDYwXSxcclxuICAgICAgICAgICAgICAgIFtcIk5vdlwiLCAxMl0sXHJcbiAgICAgICAgICAgICAgICBbXCJEZWNcIiwgNTBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb21taXRzXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNzI2NmJhXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgMjBdLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDcwXSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCAzMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgNTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDg1XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA0M10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgOTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDM2XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA4MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJPY3RcIiwgMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTm92XCIsIDcyXSxcclxuICAgICAgICAgICAgICAgIFtcIkRlY1wiLCAzMV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgZGF0YXYzID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMxYmEzY2RcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIjFcIiwgMzhdLFxyXG4gICAgICAgICAgICAgICAgW1wiMlwiLCA0MF0sXHJcbiAgICAgICAgICAgICAgICBbXCIzXCIsIDQyXSxcclxuICAgICAgICAgICAgICAgIFtcIjRcIiwgNDhdLFxyXG4gICAgICAgICAgICAgICAgW1wiNVwiLCA1MF0sXHJcbiAgICAgICAgICAgICAgICBbXCI2XCIsIDcwXSxcclxuICAgICAgICAgICAgICAgIFtcIjdcIiwgMTQ1XSxcclxuICAgICAgICAgICAgICAgIFtcIjhcIiwgNzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiOVwiLCA1OV0sXHJcbiAgICAgICAgICAgICAgICBbXCIxMFwiLCA0OF0sXHJcbiAgICAgICAgICAgICAgICBbXCIxMVwiLCAzOF0sXHJcbiAgICAgICAgICAgICAgICBbXCIxMlwiLCAyOV0sXHJcbiAgICAgICAgICAgICAgICBbXCIxM1wiLCAzMF0sXHJcbiAgICAgICAgICAgICAgICBbXCIxNFwiLCAyMl0sXHJcbiAgICAgICAgICAgICAgICBbXCIxNVwiLCAyOF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk92ZXJhbGxcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMzYTNmNTFcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIjFcIiwgMTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiMlwiLCAxOF0sXHJcbiAgICAgICAgICAgICAgICBbXCIzXCIsIDE3XSxcclxuICAgICAgICAgICAgICAgIFtcIjRcIiwgMTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiNVwiLCAzMF0sXHJcbiAgICAgICAgICAgICAgICBbXCI2XCIsIDExMF0sXHJcbiAgICAgICAgICAgICAgICBbXCI3XCIsIDE5XSxcclxuICAgICAgICAgICAgICAgIFtcIjhcIiwgMThdLFxyXG4gICAgICAgICAgICAgICAgW1wiOVwiLCAxMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTBcIiwgMTldLFxyXG4gICAgICAgICAgICAgICAgW1wiMTFcIiwgMTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTJcIiwgMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTNcIiwgMjBdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTRcIiwgMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTVcIiwgMjBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3BsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVuc2lvbjogMC40LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAwLjVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmNmYydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKGxhYmVsLCB4LCB5KSB7IHJldHVybiB4ICsgJyA6ICcgKyB5OyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZmNmY2ZjJyxcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdjYXRlZ29yaWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAxNTAsIC8vIG9wdGlvbmFsOiB1c2UgaXQgZm9yIGEgY2xlYXIgcmVwcmVzZXRhdGlvblxyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICAvL3Bvc2l0aW9uOiAncmlnaHQnIG9yICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXR0ZXI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiAvKiArICcgdmlzaXRvcnMnKi8gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gJCgnLmNoYXJ0LXNwbGluZScpO1xyXG4gICAgICAgIGlmIChjaGFydC5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydCwgZGF0YSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciBjaGFydHYyID0gJCgnLmNoYXJ0LXNwbGluZXYyJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0djIubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnR2MiwgZGF0YXYyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0djMgPSAkKCcuY2hhcnQtc3BsaW5ldjMnKTtcclxuICAgICAgICBpZiAoY2hhcnR2My5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydHYzLCBkYXRhdjMsIG9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuLy8gQ0hBUlQgQVJFQVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3RBcmVhKVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGbG90QXJlYSgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVW5pcXVlc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2FhZDg3NFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDUwXSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCA4NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgNTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDg4XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCA2OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgOTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDU4XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUmVjdXJyZW50XCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjN2RjN2RmXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgMTNdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCA0NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgMjddLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDM4XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCAxMV0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgMzldXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IDAuOFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZjZmMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbihsYWJlbCwgeCwgeSkgeyByZXR1cm4geCArICcgOiAnICsgeTsgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2ZjZmNmYycsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY2F0ZWdvcmllcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246ICdyaWdodCcgb3IgJ2xlZnQnXHJcbiAgICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyAnIHZpc2l0b3JzJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9ICQoJy5jaGFydC1hcmVhJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcbi8vIENIQVJUIEJBUlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3RCYXIpXHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZsb3RCYXIoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlNhbGVzXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOWNkMTU5XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgMjddLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDgyXSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCA1Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgMTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDI4XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA3N10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgMjNdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDQ5XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA4MV0sXHJcbiAgICAgICAgICAgICAgICBbXCJPY3RcIiwgMjBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgYmFyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBiYXJXaWR0aDogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IDAuOVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmY2ZjJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24obGFiZWwsIHgsIHkpIHsgcmV0dXJuIHggKyAnIDogJyArIHk7IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNmY2ZjZmMnLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NhdGVnb3JpZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogJ3JpZ2h0JyBvciAnbGVmdCdcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtYmFyJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcblxyXG4vLyBDSEFSVCBCQVIgU1RBQ0tFRFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3RCYXJTdGFja2VkKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RmxvdEJhclN0YWNrZWQoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlR3ZWV0c1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzUxYmZmMlwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDU2XSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCA4MV0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgOTddLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCAyNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgODVdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDk0XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCA3OF0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiT2N0XCIsIDE3XSxcclxuICAgICAgICAgICAgICAgIFtcIk5vdlwiLCA5MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJEZWNcIiwgNjJdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJMaWtlc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzRhOGVmMVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDY5XSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCAxMzVdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDE0XSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCAxMDBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDEwMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgNjJdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDExNV0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgMjJdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDEwNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJPY3RcIiwgMTMyXSxcclxuICAgICAgICAgICAgICAgIFtcIk5vdlwiLCA3Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJEZWNcIiwgNjFdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIrMVwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2YwNjkzYVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDI5XSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCAzNl0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgNDddLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDIxXSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCA1XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA0OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgMzddLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCAyOF0sXHJcbiAgICAgICAgICAgICAgICBbXCJPY3RcIiwgOV0sXHJcbiAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgMTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiRGVjXCIsIDM1XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBkYXRhdjIgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUGVuZGluZ1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzkyODljYVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiUGoxXCIsIDg2XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMlwiLCAxMzZdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGozXCIsIDk3XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNFwiLCAxMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo1XCIsIDYyXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNlwiLCA4NV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajdcIiwgMTE1XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqOFwiLCA3OF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajlcIiwgMTA0XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTBcIiwgODJdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMVwiLCA5N10sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEyXCIsIDExMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEzXCIsIDYyXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQXNzaWduZWRcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM3MjY2YmFcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIlBqMVwiLCA0OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajJcIiwgODFdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGozXCIsIDQ3XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNFwiLCA0NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajVcIiwgMTAwXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNlwiLCA0OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajdcIiwgOTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo4XCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqOVwiLCA1Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEwXCIsIDE3XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTFcIiwgNDddLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMlwiLCA0NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEzXCIsIDEwMF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvbXBsZXRlZFwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzU2NGFhM1wiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiUGoxXCIsIDI5XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMlwiLCA1Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajNcIiwgMTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo0XCIsIDIxXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNVwiLCA1XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNlwiLCAyNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajdcIiwgMzddLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo4XCIsIDIyXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqOVwiLCAyOF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEwXCIsIDldLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMVwiLCAxNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEyXCIsIDIxXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTNcIiwgNV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBzdGFjazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyV2lkdGg6IDAuNixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAwLjlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmNmYydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKGxhYmVsLCB4LCB5KSB7IHJldHVybiB4ICsgJyA6ICcgKyB5OyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZmNmY2ZjJyxcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdjYXRlZ29yaWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246ICdyaWdodCcgb3IgJ2xlZnQnXHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWVlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gJCgnLmNoYXJ0LWJhci1zdGFja2VkJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0djIgPSAkKCcuY2hhcnQtYmFyLXN0YWNrZWR2MicpO1xyXG4gICAgICAgIGlmIChjaGFydHYyLmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0djIsIGRhdGF2Miwgb3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7XHJcblxyXG4vLyBDSEFSVCBET05VVFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3REb251dCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZsb3REb251dCgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzM5QzU1OFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogNjAsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb2ZmZWVcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwMGI0ZmZcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDkwLFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ1NTXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjRkZCRTQxXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiA1MCxcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkxFU1NcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZjNlNDNcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDgwLFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSmFkZVwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzkzN2ZjN1wiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogMTE2LFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQW5ndWxhckpTXCJcclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgcGllOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclJhZGl1czogMC41IC8vIFRoaXMgbWFrZXMgdGhlIGRvbnV0IHNoYXBlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtZG9udXQnKTtcclxuICAgICAgICBpZiAoY2hhcnQubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnQsIGRhdGEsIG9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuLy8gQ0hBUlQgTElORVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3RMaW5lKVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGbG90TGluZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ29tcGxldGVcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM1YWIxZWZcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIkphblwiLCAxODhdLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDE4M10sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgMTg1XSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCAxOTldLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDE5MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgMTk0XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCAxOTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDE4NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNzRdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJJbiBQcm9ncmVzc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2Y1OTk0ZVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDE1M10sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgMTE2XSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCAxMzZdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDExOV0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgMTQ4XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCAxMzNdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDExOF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgMTYxXSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA1OV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNhbmNlbGxlZFwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2Q4N2E4MFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDExMV0sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgOTddLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDkzXSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCAxMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDEwMl0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgOTNdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDkyXSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCA5Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNDRdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IDAuMDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogNFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmY2ZjJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24obGFiZWwsIHgsIHkpIHsgcmV0dXJuIHggKyAnIDogJyArIHk7IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NhdGVnb3JpZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogJ3JpZ2h0JyBvciAnbGVmdCdcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtbGluZScpO1xyXG4gICAgICAgIGlmIChjaGFydC5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydCwgZGF0YSwgb3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7XHJcblxyXG5cclxuLy8gQ0hBUlQgUElFXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICAgJChpbml0RmxvdFBpZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZsb3RQaWUoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcImpRdWVyeVwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzRhY2FiNFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogMzBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDU1NcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmVhODhcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDQwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTEVTU1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmODE1M1wiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogOTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTQVNTXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjODc4YmI2XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiA3NVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkphZGVcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNiMmQ3NjdcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDEyMFxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBwaWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMC44LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGxhYmVsLCBzZXJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImZsb3QtcGllLWxhYmVsXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9sYWJlbCArICcgOiAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHNlcmllcy5wZXJjZW50KSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyU8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMyMjInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtcGllJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBNb3JyaXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRNb3JyaXMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNb3JyaXMoKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgTW9ycmlzID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgY2hhcnRkYXRhID0gW1xyXG4gICAgICAgICAgICB7IHk6IFwiMjAwNlwiLCBhOiAxMDAsIGI6IDkwIH0sXHJcbiAgICAgICAgICAgIHsgeTogXCIyMDA3XCIsIGE6IDc1LCBiOiA2NSB9LFxyXG4gICAgICAgICAgICB7IHk6IFwiMjAwOFwiLCBhOiA1MCwgYjogNDAgfSxcclxuICAgICAgICAgICAgeyB5OiBcIjIwMDlcIiwgYTogNzUsIGI6IDY1IH0sXHJcbiAgICAgICAgICAgIHsgeTogXCIyMDEwXCIsIGE6IDUwLCBiOiA0MCB9LFxyXG4gICAgICAgICAgICB7IHk6IFwiMjAxMVwiLCBhOiA3NSwgYjogNjUgfSxcclxuICAgICAgICAgICAgeyB5OiBcIjIwMTJcIiwgYTogMTAwLCBiOiA5MCB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdmFyIGRvbnV0ZGF0YSA9IFtcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJEb3dubG9hZCBTYWxlc1wiLCB2YWx1ZTogMTIgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJJbi1TdG9yZSBTYWxlc1wiLCB2YWx1ZTogMzAgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJNYWlsLU9yZGVyIFNhbGVzXCIsIHZhbHVlOiAyMCB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gTGluZSBDaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIG5ldyBNb3JyaXMuTGluZSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdtb3JyaXMtbGluZScsXHJcbiAgICAgICAgICAgIGRhdGE6IGNoYXJ0ZGF0YSxcclxuICAgICAgICAgICAgeGtleTogJ3knLFxyXG4gICAgICAgICAgICB5a2V5czogW1wiYVwiLCBcImJcIl0sXHJcbiAgICAgICAgICAgIGxhYmVsczogW1wiU2VyaWUgQVwiLCBcIlNlcmllIEJcIl0sXHJcbiAgICAgICAgICAgIGxpbmVDb2xvcnM6IFtcIiMzMUMwQkVcIiwgXCIjN2E5MmEzXCJdLFxyXG4gICAgICAgICAgICByZXNpemU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRG9udXQgQ2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIG5ldyBNb3JyaXMuRG9udXQoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnbW9ycmlzLWRvbnV0JyxcclxuICAgICAgICAgICAgZGF0YTogZG9udXRkYXRhLFxyXG4gICAgICAgICAgICBjb2xvcnM6IFsnI2YwNTA1MCcsICcjZmFkNzMyJywgJyNmZjkwMmInXSxcclxuICAgICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhciBDaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgbmV3IE1vcnJpcy5CYXIoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnbW9ycmlzLWJhcicsXHJcbiAgICAgICAgICAgIGRhdGE6IGNoYXJ0ZGF0YSxcclxuICAgICAgICAgICAgeGtleTogJ3knLFxyXG4gICAgICAgICAgICB5a2V5czogW1wiYVwiLCBcImJcIl0sXHJcbiAgICAgICAgICAgIGxhYmVsczogW1wiU2VyaWVzIEFcIiwgXCJTZXJpZXMgQlwiXSxcclxuICAgICAgICAgICAgeExhYmVsTWFyZ2luOiAyLFxyXG4gICAgICAgICAgICBiYXJDb2xvcnM6IFsnIzIzYjdlNScsICcjZjA1MDUwJ10sXHJcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBcmVhIENoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBuZXcgTW9ycmlzLkFyZWEoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnbW9ycmlzLWFyZWEnLFxyXG4gICAgICAgICAgICBkYXRhOiBjaGFydGRhdGEsXHJcbiAgICAgICAgICAgIHhrZXk6ICd5JyxcclxuICAgICAgICAgICAgeWtleXM6IFtcImFcIiwgXCJiXCJdLFxyXG4gICAgICAgICAgICBsYWJlbHM6IFtcIlNlcmllIEFcIiwgXCJTZXJpZSBCXCJdLFxyXG4gICAgICAgICAgICBsaW5lQ29sb3JzOiBbJyM3MjY2YmEnLCAnIzIzYjdlNSddLFxyXG4gICAgICAgICAgICByZXNpemU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBSaWNrc2hhd1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdE1vcnJpcyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1vcnJpcygpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBSaWNrc2hhdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIHNlcmllc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgW11cclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciByYW5kb20gPSBuZXcgUmlja3NoYXcuRml4dHVyZXMuUmFuZG9tRGF0YSgxNTApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbS5hZGREYXRhKHNlcmllc0RhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlcmllczEgPSBbe1xyXG4gICAgICAgICAgICBjb2xvcjogXCIjYzA1MDIwXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHNlcmllc0RhdGFbMF0sXHJcbiAgICAgICAgICAgIG5hbWU6ICdOZXcgWW9yaydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMzMGMwMjBcIixcclxuICAgICAgICAgICAgZGF0YTogc2VyaWVzRGF0YVsxXSxcclxuICAgICAgICAgICAgbmFtZTogJ0xvbmRvbidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM2MDYwYzBcIixcclxuICAgICAgICAgICAgZGF0YTogc2VyaWVzRGF0YVsyXSxcclxuICAgICAgICAgICAgbmFtZTogJ1Rva3lvJ1xyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgZ3JhcGgxID0gbmV3IFJpY2tzaGF3LkdyYXBoKHtcclxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWNrc2hhdzFcIiksXHJcbiAgICAgICAgICAgIHNlcmllczogc2VyaWVzMSxcclxuICAgICAgICAgICAgcmVuZGVyZXI6ICdhcmVhJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBncmFwaDEucmVuZGVyKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBHcmFwaCAyXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIGdyYXBoMiA9IG5ldyBSaWNrc2hhdy5HcmFwaCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlja3NoYXcyXCIpLFxyXG4gICAgICAgICAgICByZW5kZXJlcjogJ2FyZWEnLFxyXG4gICAgICAgICAgICBzdHJva2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7IHg6IDAsIHk6IDQwIH0sIHsgeDogMSwgeTogNDkgfSwgeyB4OiAyLCB5OiAzOCB9LCB7IHg6IDMsIHk6IDMwIH0sIHsgeDogNCwgeTogMzIgfV0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmMDUwNTAnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7IHg6IDAsIHk6IDQwIH0sIHsgeDogMSwgeTogNDkgfSwgeyB4OiAyLCB5OiAzOCB9LCB7IHg6IDMsIHk6IDMwIH0sIHsgeDogNCwgeTogMzIgfV0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmYWQ3MzInXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdyYXBoMi5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgLy8gR3JhcGggM1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgICAgICB2YXIgZ3JhcGgzID0gbmV3IFJpY2tzaGF3LkdyYXBoKHtcclxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWNrc2hhdzNcIiksXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiAnbGluZScsXHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7IHg6IDAsIHk6IDQwIH0sIHsgeDogMSwgeTogNDkgfSwgeyB4OiAyLCB5OiAzOCB9LCB7IHg6IDMsIHk6IDMwIH0sIHsgeDogNCwgeTogMzIgfV0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM3MjY2YmEnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7IHg6IDAsIHk6IDIwIH0sIHsgeDogMSwgeTogMjQgfSwgeyB4OiAyLCB5OiAxOSB9LCB7IHg6IDMsIHk6IDE1IH0sIHsgeDogNCwgeTogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMyM2I3ZTUnXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3JhcGgzLnJlbmRlcigpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gR3JhcGggNFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgICAgICB2YXIgZ3JhcGg0ID0gbmV3IFJpY2tzaGF3LkdyYXBoKHtcclxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWNrc2hhdzRcIiksXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiAnYmFyJyxcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3sgeDogMCwgeTogNDAgfSwgeyB4OiAxLCB5OiA0OSB9LCB7IHg6IDIsIHk6IDM4IH0sIHsgeDogMywgeTogMzAgfSwgeyB4OiA0LCB5OiAzMiB9XSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZhZDczMidcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3sgeDogMCwgeTogMjAgfSwgeyB4OiAxLCB5OiAyNCB9LCB7IHg6IDIsIHk6IDE5IH0sIHsgeDogMywgeTogMTUgfSwgeyB4OiA0LCB5OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTAyYidcclxuXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3JhcGg0LnJlbmRlcigpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFNQQVJLTElORVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFNwYXJrbGluZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNwYXJrbGluZSgpIHtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtc3BhcmtsaW5lXScpLmVhY2goaW5pdFNwYXJrTGluZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXRTcGFya0xpbmUoKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gJGVsZW1lbnQuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gb3B0aW9ucy52YWx1ZXMgJiYgb3B0aW9ucy52YWx1ZXMuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnYmFyJzsgLy8gZGVmYXVsdCBjaGFydCBpcyBiYXJcclxuICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlSGlkZGVuQ2hlY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnQuc3BhcmtsaW5lKHZhbHVlcywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5yZXNpemUpIHtcclxuICAgICAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQuc3BhcmtsaW5lKHZhbHVlcywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFN0YXJ0IEJvb3RzdHJhcCBKU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdEJvb3RzdHJhcCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEJvb3RzdHJhcCgpIHtcclxuXHJcbiAgICAgICAgLy8gUE9QT1ZFUlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcblxyXG4gICAgICAgIC8vIFRPT0xUSVBcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCh7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIERST1BET1dOIElOUFVUU1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgJCgnLmRyb3Bkb3duIGlucHV0Jykub24oJ2NsaWNrIGZvY3VzJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gTW9kdWxlOiBjYXJkLXRvb2xzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0Q2FyZERpc21pc3MpO1xyXG4gICAgJChpbml0Q2FyZENvbGxhcHNlKTtcclxuICAgICQoaW5pdENhcmRSZWZyZXNoKTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNtaXNzIGNhcmRzXHJcbiAgICAgKiBbZGF0YS10b29sPVwiY2FyZC1kaXNtaXNzXCJdXHJcbiAgICAgKlxyXG4gICAgICogUmVxdWlyZXMgYW5pbW8uanNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5pdENhcmREaXNtaXNzKCkge1xyXG4gICAgICAgIHZhciBjYXJkU2VsZWN0b3IgPSAnW2RhdGEtdG9vbD1cImNhcmQtZGlzbWlzc1wiXScsXHJcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50ID0gJ2NhcmQucmVtb3ZlJyxcclxuICAgICAgICAgICAgcmVtb3ZlZEV2ZW50ID0gJ2NhcmQucmVtb3ZlZCc7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGNhcmRTZWxlY3RvciwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBmaXJzdCBwYXJlbnQgY2FyZFxyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpO1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgZXZlbnQgYW5kIGZpbmFsbHkgcmVtb3ZlIHRoZSBlbGVtZW50XHJcbiAgICAgICAgICAgIHBhcmVudC50cmlnZ2VyKHJlbW92ZUV2ZW50LCBbcGFyZW50LCBkZWZlcnJlZF0pO1xyXG4gICAgICAgICAgICAvLyBuZWVkcyByZXNvbHZlKCkgdG8gYmUgY2FsbGVkXHJcbiAgICAgICAgICAgIGRlZmVycmVkLmRvbmUocmVtb3ZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmFuaW1vKHsgYW5pbWF0aW9uOiAnYm91bmNlT3V0JyB9LCBkZXN0cm95Q2FyZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3lDYXJkKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbCA9IHBhcmVudC5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLndoZW4ocGFyZW50LnRyaWdnZXIocmVtb3ZlZEV2ZW50LCBbcGFyZW50XSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBwYXJlbnQgaWYgaXQgaXMgYSByb3cgYW5kIGlzIGVtcHR5IGFuZCBub3QgYSBzb3J0YWJsZSAocG9ydGxldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpZ2dlcihyZW1vdmVkRXZlbnQpIC8vIEFuIGV2ZW50IHRvIGNhdGNoIHdoZW4gdGhlIGNhcmQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIERPTVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZWwuaXMoJ1tjbGFzcyo9XCJjb2wtXCJdOm5vdCguc29ydGFibGUpJykgJiYgZWwuY2hpbGRyZW4oJyonKS5sZW5ndGggPT09IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsYXBzZSBjYXJkc1xyXG4gICAgICogW2RhdGEtdG9vbD1cImNhcmQtY29sbGFwc2VcIl1cclxuICAgICAqXHJcbiAgICAgKiBBbHNvIHVzZXMgYnJvd3NlciBzdG9yYWdlIHRvIGtlZXAgdHJhY2tcclxuICAgICAqIG9mIGNhcmRzIGNvbGxhcHNlZCBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbml0Q2FyZENvbGxhcHNlKCkge1xyXG4gICAgICAgIHZhciBjYXJkU2VsZWN0b3IgPSAnW2RhdGEtdG9vbD1cImNhcmQtY29sbGFwc2VcIl0nLFxyXG4gICAgICAgICAgICBzdG9yYWdlS2V5TmFtZSA9ICdqcS1jYXJkU3RhdGUnO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIHRoZSBjYXJkIHRvIGJlIGNvbGxhcHNhYmxlIGFuZCBpdHMgZXZlbnRzXHJcbiAgICAgICAgJChjYXJkU2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IHBhcmVudCBjYXJkXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSAkdGhpcy5jbG9zZXN0KCcuY2FyZCcpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlciA9IHBhcmVudC5maW5kKCcuY2FyZC13cmFwcGVyJyksXHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZU9wdHMgPSB7IHRvZ2dsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIGljb25FbGVtZW50ID0gJHRoaXMuY2hpbGRyZW4oJ2VtJyksXHJcbiAgICAgICAgICAgICAgICBjYXJkSWQgPSBwYXJlbnQuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHdyYXBwZXIgbm90IGFkZGVkLCBhZGQgaXRcclxuICAgICAgICAgICAgLy8gd2UgbmVlZCBhIHdyYXBwZXIgdG8gYXZvaWQganVtcGluZyBkdWUgdG8gdGhlIHBhZGRpbmdzXHJcbiAgICAgICAgICAgIGlmICghd3JhcHBlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIgPVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbignLmNhcmQtaGVhZGluZycpLm5leHRBbGwoKSAvL2ZpbmQoJy5jYXJkLWJvZHksIC5jYXJkLWZvb3RlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgLndyYXBBbGwoJzxkaXYvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjYXJkLXdyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlT3B0cyA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0IGNvbGxhcHNlIGFuZCBiaW5kIGV2ZW50cyB0byBzd2l0Y2ggaWNvbnNcclxuICAgICAgICAgICAgd3JhcHBlclxyXG4gICAgICAgICAgICAgICAgLmNvbGxhcHNlKGNvbGxhcHNlT3B0cylcclxuICAgICAgICAgICAgICAgIC5vbignaGlkZS5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEljb25IaWRlKGljb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlQ2FyZFN0YXRlKGNhcmRJZCwgJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnByZXYoJy5jYXJkLWhlYWRpbmcnKS5hZGRDbGFzcygnY2FyZC1oZWFkaW5nLWNvbGxhcHNlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEljb25TaG93KGljb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlQ2FyZFN0YXRlKGNhcmRJZCwgJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnByZXYoJy5jYXJkLWhlYWRpbmcnKS5yZW1vdmVDbGFzcygnY2FyZC1oZWFkaW5nLWNvbGxhcHNlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBMb2FkIHRoZSBzYXZlZCBzdGF0ZSBpZiBleGlzdHNcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IGxvYWRDYXJkU3RhdGUoY2FyZElkKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgd3JhcHBlci5jb2xsYXBzZShjdXJyZW50U3RhdGUpOyB9LCA1MCk7XHJcbiAgICAgICAgICAgICAgICBzYXZlQ2FyZFN0YXRlKGNhcmRJZCwgY3VycmVudFN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZmluYWxseSBjYXRjaCBjbGlja3MgdG8gdG9nZ2xlIGNhcmQgY29sbGFwc2VcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBjYXJkU2VsZWN0b3IsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKTtcclxuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBwYXJlbnQuZmluZCgnLmNhcmQtd3JhcHBlcicpO1xyXG5cclxuICAgICAgICAgICAgd3JhcHBlci5jb2xsYXBzZSgndG9nZ2xlJyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBDb21tb24gdXNlIGZ1bmN0aW9ucyBmb3IgY2FyZCBjb2xsYXBzZSAvL1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEljb25TaG93KGljb25FbCkge1xyXG4gICAgICAgICAgICBpY29uRWwucmVtb3ZlQ2xhc3MoJ2ZhLXBsdXMnKS5hZGRDbGFzcygnZmEtbWludXMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEljb25IaWRlKGljb25FbCkge1xyXG4gICAgICAgICAgICBpY29uRWwucmVtb3ZlQ2xhc3MoJ2ZhLW1pbnVzJykuYWRkQ2xhc3MoJ2ZhLXBsdXMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNhdmVDYXJkU3RhdGUoaWQsIHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gU3RvcmFnZXMubG9jYWxTdG9yYWdlLmdldChzdG9yYWdlS2V5TmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghZGF0YSkgeyBkYXRhID0ge307IH1cclxuICAgICAgICAgICAgZGF0YVtpZF0gPSBzdGF0ZTtcclxuICAgICAgICAgICAgU3RvcmFnZXMubG9jYWxTdG9yYWdlLnNldChzdG9yYWdlS2V5TmFtZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2FyZFN0YXRlKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gU3RvcmFnZXMubG9jYWxTdG9yYWdlLmdldChzdG9yYWdlS2V5TmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtpZF0gfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVmcmVzaCBjYXJkc1xyXG4gICAgICogW2RhdGEtdG9vbD1cImNhcmQtcmVmcmVzaFwiXVxyXG4gICAgICogW2RhdGEtc3Bpbm5lcj1cInN0YW5kYXJkXCJdXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluaXRDYXJkUmVmcmVzaCgpIHtcclxuICAgICAgICB2YXIgY2FyZFNlbGVjdG9yID0gJ1tkYXRhLXRvb2w9XCJjYXJkLXJlZnJlc2hcIl0nLFxyXG4gICAgICAgICAgICByZWZyZXNoRXZlbnQgPSAnY2FyZC5yZWZyZXNoJyxcclxuICAgICAgICAgICAgd2hpcmxDbGFzcyA9ICd3aGlybCcsXHJcbiAgICAgICAgICAgIGRlZmF1bHRTcGlubmVyID0gJ3N0YW5kYXJkJztcclxuXHJcbiAgICAgICAgLy8gbWV0aG9kIHRvIGNsZWFyIHRoZSBzcGlubmVyIHdoZW4gZG9uZVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVNwaW5uZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3Mod2hpcmxDbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYXRjaCBjbGlja3MgdG8gdG9nZ2xlIGNhcmQgcmVmcmVzaFxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGNhcmRTZWxlY3RvciwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBjYXJkID0gJHRoaXMucGFyZW50cygnLmNhcmQnKS5lcSgwKSxcclxuICAgICAgICAgICAgICAgIHNwaW5uZXIgPSAkdGhpcy5kYXRhKCdzcGlubmVyJykgfHwgZGVmYXVsdFNwaW5uZXI7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGFydCBzaG93aW5nIHRoZSBzcGlubmVyXHJcbiAgICAgICAgICAgIGNhcmQuYWRkQ2xhc3Mod2hpcmxDbGFzcyArICcgJyArIHNwaW5uZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXR0YWNoIGFzIHB1YmxpYyBtZXRob2RcclxuICAgICAgICAgICAgY2FyZC5yZW1vdmVTcGlubmVyID0gcmVtb3ZlU3Bpbm5lcjtcclxuXHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIGV2ZW50IGFuZCBzZW5kIHRoZSBjYXJkIG9iamVjdFxyXG4gICAgICAgICAgICAkdGhpcy50cmlnZ2VyKHJlZnJlc2hFdmVudCwgW2NhcmRdKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcblxyXG4iLCIvLyBHTE9CQUwgQ09OU1RBTlRTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKXtcclxuXHJcbiAgICB3aW5kb3cuQVBQX0NPTE9SUyA9IHtcclxuICAgICAgICAncHJpbWFyeSc6ICAgICAgICAgICAgICAgICcjNWQ5Y2VjJyxcclxuICAgICAgICAnc3VjY2Vzcyc6ICAgICAgICAgICAgICAgICcjMjdjMjRjJyxcclxuICAgICAgICAnaW5mbyc6ICAgICAgICAgICAgICAgICAgICcjMjNiN2U1JyxcclxuICAgICAgICAnd2FybmluZyc6ICAgICAgICAgICAgICAgICcjZmY5MDJiJyxcclxuICAgICAgICAnZGFuZ2VyJzogICAgICAgICAgICAgICAgICcjZjA1MDUwJyxcclxuICAgICAgICAnaW52ZXJzZSc6ICAgICAgICAgICAgICAgICcjMTMxZTI2JyxcclxuICAgICAgICAnZ3JlZW4nOiAgICAgICAgICAgICAgICAgICcjMzdiYzliJyxcclxuICAgICAgICAncGluayc6ICAgICAgICAgICAgICAgICAgICcjZjUzMmU1JyxcclxuICAgICAgICAncHVycGxlJzogICAgICAgICAgICAgICAgICcjNzI2NmJhJyxcclxuICAgICAgICAnZGFyayc6ICAgICAgICAgICAgICAgICAgICcjM2EzZjUxJyxcclxuICAgICAgICAneWVsbG93JzogICAgICAgICAgICAgICAgICcjZmFkNzMyJyxcclxuICAgICAgICAnZ3JheS1kYXJrZXInOiAgICAgICAgICAgICcjMjMyNzM1JyxcclxuICAgICAgICAnZ3JheS1kYXJrJzogICAgICAgICAgICAgICcjM2EzZjUxJyxcclxuICAgICAgICAnZ3JheSc6ICAgICAgICAgICAgICAgICAgICcjZGRlNmU5JyxcclxuICAgICAgICAnZ3JheS1saWdodCc6ICAgICAgICAgICAgICcjZTRlYWVjJyxcclxuICAgICAgICAnZ3JheS1saWdodGVyJzogICAgICAgICAgICcjZWRmMWYyJ1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuQVBQX01FRElBUVVFUlkgPSB7XHJcbiAgICAgICAgJ2Rlc2t0b3BMRyc6ICAgICAgICAgICAgIDEyMDAsXHJcbiAgICAgICAgJ2Rlc2t0b3AnOiAgICAgICAgICAgICAgICA5OTIsXHJcbiAgICAgICAgJ3RhYmxldCc6ICAgICAgICAgICAgICAgICA3NjgsXHJcbiAgICAgICAgJ21vYmlsZSc6ICAgICAgICAgICAgICAgICA0ODBcclxuICAgIH07XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBGVUxMU0NSRUVOXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U2NyZWVuRnVsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNjcmVlbkZ1bGwoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzY3JlZW5mdWxsID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgJGRvYyA9ICQoZG9jdW1lbnQpO1xyXG4gICAgICAgIHZhciAkZnNUb2dnbGVyID0gJCgnW2RhdGEtdG9nZ2xlLWZ1bGxzY3JlZW5dJyk7XHJcblxyXG4gICAgICAgIC8vIE5vdCBzdXBwb3J0ZWQgdW5kZXIgSUVcclxuICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICBpZiAodWEuaW5kZXhPZihcIk1TSUUgXCIpID4gMCB8fCAhIXVhLm1hdGNoKC9UcmlkZW50LipydlxcOjExXFwuLykpIHtcclxuICAgICAgICAgICAgJGZzVG9nZ2xlci5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEkZnNUb2dnbGVyLmlzKCc6dmlzaWJsZScpKSAvLyBoaWRkZW4gb24gbW9iaWxlcyBvciBJRVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICRmc1RvZ2dsZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2NyZWVuZnVsbC5lbmFibGVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NyZWVuZnVsbC50b2dnbGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTd2l0Y2ggaWNvbiBpbmRpY2F0b3JcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUZTSWNvbigkZnNUb2dnbGVyKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRnVsbHNjcmVlbiBub3QgZW5hYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChzY3JlZW5mdWxsLnJhdyAmJiBzY3JlZW5mdWxsLnJhdy5mdWxsc2NyZWVuY2hhbmdlKVxyXG4gICAgICAgICAgICAkZG9jLm9uKHNjcmVlbmZ1bGwucmF3LmZ1bGxzY3JlZW5jaGFuZ2UsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlRlNJY29uKCRmc1RvZ2dsZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRlNJY29uKCRlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChzY3JlZW5mdWxsLmlzRnVsbHNjcmVlbilcclxuICAgICAgICAgICAgICAgICRlbGVtZW50LmNoaWxkcmVuKCdlbScpLnJlbW92ZUNsYXNzKCdmYS1leHBhbmQnKS5hZGRDbGFzcygnZmEtY29tcHJlc3MnKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuY2hpbGRyZW4oJ2VtJykucmVtb3ZlQ2xhc3MoJ2ZhLWNvbXByZXNzJykuYWRkQ2xhc3MoJ2ZhLWV4cGFuZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBMT0FEIENVU1RPTSBDU1NcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRMb2FkQ1NTKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TG9hZENTUygpIHtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtbG9hZC1jc3NdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXMoJ2EnKSlcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1cmkgPSBlbGVtZW50LmRhdGEoJ2xvYWRDc3MnKSxcclxuICAgICAgICAgICAgICAgIGxpbms7XHJcblxyXG4gICAgICAgICAgICBpZiAodXJpKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rID0gY3JlYXRlTGluayh1cmkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5lcnJvcignRXJyb3IgY3JlYXRpbmcgc3R5bGVzaGVldCBsaW5rIGVsZW1lbnQuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkLmVycm9yKCdObyBzdHlsZXNoZWV0IGxvY2F0aW9uIGRlZmluZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTGluayh1cmkpIHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdmFyIGxpbmtJZCA9ICdhdXRvbG9hZGVkLXN0eWxlc2hlZXQnLFxyXG4gICAgICAgICAgICBvbGRMaW5rID0gJCgnIycgKyBsaW5rSWQpLmF0dHIoJ2lkJywgbGlua0lkICsgJy1vbGQnKTtcclxuXHJcbiAgICAgICAgJCgnaGVhZCcpLmFwcGVuZCgkKCc8bGluay8+JykuYXR0cih7XHJcbiAgICAgICAgICAgICdpZCc6IGxpbmtJZCxcclxuICAgICAgICAgICAgJ3JlbCc6ICdzdHlsZXNoZWV0JyxcclxuICAgICAgICAgICAgJ2hyZWYnOiB1cmlcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGlmIChvbGRMaW5rLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBvbGRMaW5rLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICQoJyMnICsgbGlua0lkKTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIE5BVkJBUiBTRUFSQ0hcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXROYXZiYXJTZWFyY2gpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXROYXZiYXJTZWFyY2goKSB7XHJcblxyXG4gICAgICAgIHZhciBuYXZTZWFyY2ggPSBuZXcgbmF2YmFyU2VhcmNoSW5wdXQoKTtcclxuXHJcbiAgICAgICAgLy8gT3BlbiBzZWFyY2ggaW5wdXRcclxuICAgICAgICB2YXIgJHNlYXJjaE9wZW4gPSAkKCdbZGF0YS1zZWFyY2gtb3Blbl0nKTtcclxuXHJcbiAgICAgICAgJHNlYXJjaE9wZW5cclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSlcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIG5hdlNlYXJjaC50b2dnbGUpO1xyXG5cclxuICAgICAgICAvLyBDbG9zZSBzZWFyY2ggaW5wdXRcclxuICAgICAgICB2YXIgJHNlYXJjaERpc21pc3MgPSAkKCdbZGF0YS1zZWFyY2gtZGlzbWlzc10nKTtcclxuICAgICAgICB2YXIgaW5wdXRTZWxlY3RvciA9ICcubmF2YmFyLWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nO1xyXG5cclxuICAgICAgICAkKGlucHV0U2VsZWN0b3IpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0pXHJcbiAgICAgICAgICAgIC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3KSAvLyBFU0NcclxuICAgICAgICAgICAgICAgICAgICBuYXZTZWFyY2guZGlzbWlzcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY2xpY2sgYW55d2hlcmUgY2xvc2VzIHRoZSBzZWFyY2hcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBuYXZTZWFyY2guZGlzbWlzcyk7XHJcbiAgICAgICAgLy8gZGlzbWlzc2FibGUgb3B0aW9uc1xyXG4gICAgICAgICRzZWFyY2hEaXNtaXNzXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0pXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBuYXZTZWFyY2guZGlzbWlzcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBuYXZiYXJTZWFyY2hJbnB1dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBuYXZiYXJGb3JtU2VsZWN0b3IgPSAnZm9ybS5uYXZiYXItZm9ybSc7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbmF2YmFyRm9ybSA9ICQobmF2YmFyRm9ybVNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuYXZiYXJGb3JtLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlzT3BlbiA9IG5hdmJhckZvcm0uaGFzQ2xhc3MoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuYXZiYXJGb3JtLmZpbmQoJ2lucHV0JylbaXNPcGVuID8gJ2ZvY3VzJyA6ICdibHVyJ10oKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBkaXNtaXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQobmF2YmFyRm9ybVNlbGVjdG9yKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnb3BlbicpIC8vIENsb3NlIGNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0nKS5ibHVyKCkgLy8gcmVtb3ZlIGZvY3VzXHJcbiAgICAgICAgICAgICAgICAvLyAudmFsKCcnKSAgICAgICAgICAgICAgICAgICAgLy8gRW1wdHkgaW5wdXRcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gTk9XIFRJTUVSXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0Tm93VGltZXIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXROb3dUaW1lcigpIHtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtbm93XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGVsZW1lbnQuZGF0YSgnZm9ybWF0Jyk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaW1lKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdChmb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0KGR0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXBkYXRlVGltZSgpO1xyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lLCAxMDAwKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBUb2dnbGUgUlRMIG1vZGUgZm9yIGRlbW9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0UlRMKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UlRMKCkge1xyXG4gICAgICAgIHZhciBtYWluY3NzID0gJCgnI21haW5jc3MnKTtcclxuICAgICAgICB2YXIgYnNjc3MgPSAkKCcjYnNjc3MnKTtcclxuICAgICAgICAkKCcjY2hrLXJ0bCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gYXBwIHJ0bCBjaGVja1xyXG4gICAgICAgICAgICBtYWluY3NzLmF0dHIoJ2hyZWYnLCB0aGlzLmNoZWNrZWQgPyAnL0NvbnRlbnQvY3NzL2FwcC1ydGwuY3NzJyA6ICcvQ29udGVudC9jc3MvYXBwLmNzcycpO1xyXG4gICAgICAgICAgICAvLyBib290c3RyYXAgcnRsIGNoZWNrXHJcbiAgICAgICAgICAgIGJzY3NzLmF0dHIoJ2hyZWYnLCB0aGlzLmNoZWNrZWQgPyAnL0NvbnRlbnQvY3NzL2Jvb3RzdHJhcC1ydGwuY3NzJyA6ICcvQ29udGVudC9jc3MvYm9vdHN0cmFwLmNzcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gU0lERUJBUlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTaWRlYmFyKTtcclxuXHJcblxyXG4gICAgdmFyICR3aW47XHJcbiAgICB2YXIgJGh0bWw7XHJcbiAgICB2YXIgJGJvZHk7XHJcbiAgICB2YXIgJHNpZGViYXI7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNpZGViYXIoKSB7XHJcblxyXG4gICAgICAgICR3aW4gPSAkKHdpbmRvdyk7XHJcbiAgICAgICAgJGh0bWwgPSAkKCdodG1sJyk7XHJcbiAgICAgICAgJGJvZHkgPSAkKCdib2R5Jyk7XHJcbiAgICAgICAgJHNpZGViYXIgPSAkKCcuc2lkZWJhcicpO1xyXG5cclxuICAgICAgICAvLyBBVVRPQ09MTEFQU0UgSVRFTVNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgc2lkZWJhckNvbGxhcHNlID0gJHNpZGViYXIuZmluZCgnLmNvbGxhcHNlJyk7XHJcbiAgICAgICAgc2lkZWJhckNvbGxhcHNlLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnRzKCcuY29sbGFwc2UnKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyQ29sbGFwc2UuZmlsdGVyKCcuc2hvdycpLmNvbGxhcHNlKCdoaWRlJyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTSURFQkFSIEFDVElWRSBTVEFURVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIC8vIEZpbmQgY3VycmVudCBhY3RpdmUgaXRlbVxyXG4gICAgICAgIHZhciBjdXJyZW50SXRlbSA9ICQoJy5zaWRlYmFyIC5hY3RpdmUnKS5wYXJlbnRzKCdsaScpO1xyXG5cclxuICAgICAgICAvLyBob3ZlciBtb2RlIGRvbid0IHRyeSB0byBleHBhbmQgYWN0aXZlIGNvbGxhcHNlXHJcbiAgICAgICAgaWYgKCF1c2VBc2lkZUhvdmVyKCkpXHJcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJykgLy8gYWN0aXZhdGUgdGhlIHBhcmVudFxyXG4gICAgICAgICAgICAuY2hpbGRyZW4oJy5jb2xsYXBzZScpIC8vIGZpbmQgdGhlIGNvbGxhcHNlXHJcbiAgICAgICAgICAgIC5jb2xsYXBzZSgnc2hvdycpOyAvLyBhbmQgc2hvdyBpdFxyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGhpcyBpZiB5b3UgdXNlIG9ubHkgY29sbGFwc2libGUgc2lkZWJhciBpdGVtc1xyXG4gICAgICAgICRzaWRlYmFyLmZpbmQoJ2xpID4gYSArIHVsJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VBc2lkZUhvdmVyKCkpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU0lERUJBUiBDT0xMQVBTRUQgSVRFTSBIQU5ETEVSXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gICAgICAgIHZhciBldmVudE5hbWUgPSBpc1RvdWNoKCkgPyAnY2xpY2snIDogJ21vdXNlZW50ZXInO1xyXG4gICAgICAgIHZhciBzdWJOYXYgPSAkKCk7XHJcbiAgICAgICAgJHNpZGViYXIub24oZXZlbnROYW1lLCAnLnNpZGViYXItbmF2ID4gbGknLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1NpZGViYXJDb2xsYXBzZWQoKSB8fCB1c2VBc2lkZUhvdmVyKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdWJOYXYudHJpZ2dlcignbW91c2VsZWF2ZScpO1xyXG4gICAgICAgICAgICAgICAgc3ViTmF2ID0gdG9nZ2xlTWVudUl0ZW0oJCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXNlZCB0byBkZXRlY3QgY2xpY2sgYW5kIHRvdWNoIGV2ZW50cyBvdXRzaWRlIHRoZSBzaWRlYmFyXHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyQWRkQmFja2Ryb3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHNpZGViYXJBbnljbGlja0Nsb3NlID0gJHNpZGViYXIuZGF0YSgnc2lkZWJhckFueWNsaWNrQ2xvc2UnKTtcclxuXHJcbiAgICAgICAgLy8gQWxsb3dzIHRvIGNsb3NlXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzaWRlYmFyQW55Y2xpY2tDbG9zZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy53cmFwcGVyJykub24oJ2NsaWNrLnNpZGViYXInLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBjaGVjayBpZiBzaWRlYmFyIG5vdCB2aXNpYmxlXHJcbiAgICAgICAgICAgICAgICBpZiAoISRib2R5Lmhhc0NsYXNzKCdhc2lkZS10b2dnbGVkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkdGFyZ2V0LnBhcmVudHMoJy5hc2lkZS1jb250YWluZXInKS5sZW5ndGggJiYgLy8gaWYgbm90IGNoaWxkIG9mIHNpZGViYXJcclxuICAgICAgICAgICAgICAgICAgICAhJHRhcmdldC5pcygnI3VzZXItYmxvY2stdG9nZ2xlJykgJiYgLy8gdXNlciBibG9jayB0b2dnbGUgYW5jaG9yXHJcbiAgICAgICAgICAgICAgICAgICAgISR0YXJnZXQucGFyZW50KCkuaXMoJyN1c2VyLWJsb2NrLXRvZ2dsZScpIC8vIHVzZXIgYmxvY2sgdG9nZ2xlIGljb25cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdhc2lkZS10b2dnbGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2lkZWJhckFkZEJhY2tkcm9wKCkge1xyXG4gICAgICAgIHZhciAkYmFja2Ryb3AgPSAkKCc8ZGl2Lz4nLCB7ICdjbGFzcyc6ICdkcm9wZG93bi1iYWNrZHJvcCcgfSk7XHJcbiAgICAgICAgJGJhY2tkcm9wLmluc2VydEFmdGVyKCcuYXNpZGUtY29udGFpbmVyJykub24oXCJjbGljayBtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZW1vdmVGbG9hdGluZ05hdigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wZW4gdGhlIGNvbGxhcHNlIHNpZGViYXIgc3VibWVudSBpdGVtcyB3aGVuIG9uIHRvdWNoIGRldmljZXNcclxuICAgIC8vIC0gZGVza3RvcCBvbmx5IG9wZW5zIG9uIGhvdmVyXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVUb3VjaEl0ZW0oJGVsZW1lbnQpIHtcclxuICAgICAgICAkZWxlbWVudFxyXG4gICAgICAgICAgICAuc2libGluZ3MoJ2xpJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdvcGVuJylcclxuICAgICAgICAgICAgLmVuZCgpXHJcbiAgICAgICAgICAgIC50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZXMgaG92ZXIgdG8gb3BlbiBpdGVtcyB1bmRlciBjb2xsYXBzZWQgbWVudVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnVJdGVtKCRsaXN0SXRlbSkge1xyXG5cclxuICAgICAgICByZW1vdmVGbG9hdGluZ05hdigpO1xyXG5cclxuICAgICAgICB2YXIgdWwgPSAkbGlzdEl0ZW0uY2hpbGRyZW4oJ3VsJyk7XHJcblxyXG4gICAgICAgIGlmICghdWwubGVuZ3RoKSByZXR1cm4gJCgpO1xyXG4gICAgICAgIGlmICgkbGlzdEl0ZW0uaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICB0b2dnbGVUb3VjaEl0ZW0oJGxpc3RJdGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuICQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciAkYXNpZGUgPSAkKCcuYXNpZGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdmFyICRhc2lkZUlubmVyID0gJCgnLmFzaWRlLWlubmVyJyk7IC8vIGZvciB0b3Agb2Zmc2V0IGNhbGN1bGF0aW9uXHJcbiAgICAgICAgLy8gZmxvYXQgYXNpZGUgdXNlcyBleHRyYSBwYWRkaW5nIG9uIGFzaWRlXHJcbiAgICAgICAgdmFyIG1hciA9IHBhcnNlSW50KCRhc2lkZUlubmVyLmNzcygncGFkZGluZy10b3AnKSwgMCkgKyBwYXJzZUludCgkYXNpZGUuY3NzKCdwYWRkaW5nLXRvcCcpLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIHN1Yk5hdiA9IHVsLmNsb25lKCkuYXBwZW5kVG8oJGFzaWRlKTtcclxuXHJcbiAgICAgICAgdG9nZ2xlVG91Y2hJdGVtKCRsaXN0SXRlbSk7XHJcblxyXG4gICAgICAgIHZhciBpdGVtVG9wID0gKCRsaXN0SXRlbS5wb3NpdGlvbigpLnRvcCArIG1hcikgLSAkc2lkZWJhci5zY3JvbGxUb3AoKTtcclxuICAgICAgICB2YXIgdndIZWlnaHQgPSAkd2luLmhlaWdodCgpO1xyXG5cclxuICAgICAgICBzdWJOYXZcclxuICAgICAgICAgICAgLmFkZENsYXNzKCduYXYtZmxvYXRpbmcnKVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpc0ZpeGVkKCkgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogaXRlbVRvcCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogKHN1Yk5hdi5vdXRlckhlaWdodCh0cnVlKSArIGl0ZW1Ub3AgPiB2d0hlaWdodCkgPyAwIDogJ2F1dG8nXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdWJOYXYub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlVG91Y2hJdGVtKCRsaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIHN1Yk5hdi5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1Yk5hdjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGbG9hdGluZ05hdigpIHtcclxuICAgICAgICAkKCcuc2lkZWJhci1zdWJuYXYubmF2LWZsb2F0aW5nJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnLmRyb3Bkb3duLWJhY2tkcm9wJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnLnNpZGViYXIgbGkub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNUb3VjaCgpIHtcclxuICAgICAgICByZXR1cm4gJGh0bWwuaGFzQ2xhc3MoJ3RvdWNoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNTaWRlYmFyQ29sbGFwc2VkKCkge1xyXG4gICAgICAgIHJldHVybiAkYm9keS5oYXNDbGFzcygnYXNpZGUtY29sbGFwc2VkJykgfHwgJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLWNvbGxhcHNlZC10ZXh0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNTaWRlYmFyVG9nZ2xlZCgpIHtcclxuICAgICAgICByZXR1cm4gJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLXRvZ2dsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc01vYmlsZSgpIHtcclxuICAgICAgICByZXR1cm4gJHdpbi53aWR0aCgpIDwgQVBQX01FRElBUVVFUlkudGFibGV0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRml4ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICRib2R5Lmhhc0NsYXNzKCdsYXlvdXQtZml4ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1c2VBc2lkZUhvdmVyKCkge1xyXG4gICAgICAgIHJldHVybiAkYm9keS5oYXNDbGFzcygnYXNpZGUtaG92ZXInKTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFNMSU1TQ1JPTExcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTbGltc1Nyb2xsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2xpbXNTcm9sbCgpIHtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdEhlaWdodCA9IDI1MDtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2xpbVNjcm9sbCh7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IChlbGVtZW50LmRhdGEoJ2hlaWdodCcpIHx8IGRlZmF1bHRIZWlnaHQpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEN1c3RvbSBqUXVlcnlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0VGFibGVDaGVja0FsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFRhYmxlQ2hlY2tBbGwoKSB7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNoZWNrLWFsbF0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9ICR0aGlzLmluZGV4KCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tib3ggPSAkdGhpcy5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSxcclxuICAgICAgICAgICAgICAgIHRhYmxlID0gJHRoaXMucGFyZW50cygndGFibGUnKTtcclxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRvIGFmZmVjdCBvbmx5IHRoZSBjb3JyZWN0IGNoZWNrYm94IGNvbHVtblxyXG4gICAgICAgICAgICB0YWJsZS5maW5kKCd0Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKCcgKyBpbmRleCArICcpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXHJcbiAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIGNoZWNrYm94WzBdLmNoZWNrZWQpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBUT0dHTEUgU1RBVEVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRUb2dnbGVTdGF0ZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFRvZ2dsZVN0YXRlKCkge1xyXG5cclxuICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XHJcbiAgICAgICAgdmFyIHRvZ2dsZSA9IG5ldyBTdGF0ZVRvZ2dsZXIoKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlLXN0YXRlXScpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZSA9IGVsZW1lbnQuZGF0YSgndG9nZ2xlU3RhdGUnKSxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBlbGVtZW50LmRhdGEoJ3RhcmdldCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vUGVyc2lzdCA9IChlbGVtZW50LmF0dHIoJ2RhdGEtbm8tcGVyc2lzdCcpICE9PSB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNwZWNpZnkgYSB0YXJnZXQgc2VsZWN0b3IgdG8gdG9nZ2xlIGNsYXNzbmFtZVxyXG4gICAgICAgICAgICAgICAgLy8gdXNlIGJvZHkgYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSB0YXJnZXQgPyAkKHRhcmdldCkgOiAkYm9keTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR0YXJnZXQuaGFzQ2xhc3MoY2xhc3NuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKGNsYXNzbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9QZXJzaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLnJlbW92ZVN0YXRlKGNsYXNzbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcyhjbGFzc25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vUGVyc2lzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5hZGRTdGF0ZShjbGFzc25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc29tZSBlbGVtZW50cyBtYXkgbmVlZCB0aGlzIHdoZW4gdG9nZ2xlZCBjbGFzcyBjaGFuZ2UgdGhlIGNvbnRlbnQgc2l6ZVxyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBzdGF0ZXMgdG8vZnJvbSBsb2NhbHN0b3JhZ2VcclxuICAgIHZhciBTdGF0ZVRvZ2dsZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIFNUT1JBR0VfS0VZX05BTUUgPSAnanEtdG9nZ2xlU3RhdGUnO1xyXG5cclxuICAgICAgICAvKiogQWRkIGEgc3RhdGUgdG8gdGhlIGJyb3dzZXIgc3RvcmFnZSB0byBiZSByZXN0b3JlZCBsYXRlciAqL1xyXG4gICAgICAgIHRoaXMuYWRkU3RhdGUgPSBmdW5jdGlvbihjbGFzc25hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KFNUT1JBR0VfS0VZX05BTUUpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSBkYXRhLnB1c2goY2xhc3NuYW1lKTtcclxuICAgICAgICAgICAgZWxzZSBkYXRhID0gW2NsYXNzbmFtZV07XHJcbiAgICAgICAgICAgIFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5zZXQoU1RPUkFHRV9LRVlfTkFNRSwgZGF0YSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKiogUmVtb3ZlIGEgc3RhdGUgZnJvbSB0aGUgYnJvd3NlciBzdG9yYWdlICovXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uKGNsYXNzbmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5nZXQoU1RPUkFHRV9LRVlfTkFNRSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBkYXRhLmluZGV4T2YoY2xhc3NuYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIGRhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5zZXQoU1RPUkFHRV9LRVlfTkFNRSwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKiBMb2FkIHRoZSBzdGF0ZSBzdHJpbmcgYW5kIHJlc3RvcmUgdGhlIGNsYXNzbGlzdCAqL1xyXG4gICAgICAgIHRoaXMucmVzdG9yZVN0YXRlID0gZnVuY3Rpb24oJGVsZW0pIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KFNUT1JBR0VfS0VZX05BTUUpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAgJGVsZW0uYWRkQ2xhc3MoZGF0YS5qb2luKCcgJykpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5TdGF0ZVRvZ2dsZXIgPSBTdGF0ZVRvZ2dsZXI7XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogTW9kdWxlOiB0cmlnZ2VyLXJlc2l6ZS5qc1xyXG4gKiBUcmlnZ2VycyBhIHdpbmRvdyByZXNpemUgZXZlbnQgZnJvbSBhbnkgZWxlbWVudFxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRUcmlnZ2VyUmVzaXplKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0VHJpZ2dlclJlc2l6ZSgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9ICQoJ1tkYXRhLXRyaWdnZXItcmVzaXplXScpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQuZGF0YSgndHJpZ2dlclJlc2l6ZScpXHJcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsbCBJRSBmcmllbmRseSBkaXNwYXRjaEV2ZW50XHJcbiAgICAgICAgICAgICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1VJRXZlbnRzJyk7XHJcbiAgICAgICAgICAgICAgICBldnQuaW5pdFVJRXZlbnQoJ3Jlc2l6ZScsIHRydWUsIGZhbHNlLCB3aW5kb3csIDApO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcclxuICAgICAgICAgICAgICAgIC8vIG1vZGVybiBkaXNwYXRjaEV2ZW50IHdheVxyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XHJcbiAgICAgICAgICAgIH0sIHZhbHVlIHx8IDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDdXN0b20galF1ZXJ5XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8vIFdoZW4gZG9tIHJlYWR5LCBpbml0IGNhbGVuZGFyIGFuZCBldmVudHNcclxuICAgICQoaW5pdEZ1bGxDYWxlbmRhcik7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZ1bGxDYWxlbmRhcigpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmZ1bGxDYWxlbmRhcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBUaGUgZWxlbWVudCB0aGF0IHdpbGwgZGlzcGxheSB0aGUgY2FsZW5kYXJcclxuICAgICAgICB2YXIgY2FsZW5kYXIgPSAkKCcjY2FsZW5kYXInKTtcclxuXHJcbiAgICAgICAgdmFyIGRlbW9FdmVudHMgPSBjcmVhdGVEZW1vRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGluaXRFeHRlcm5hbEV2ZW50cyhjYWxlbmRhcik7XHJcblxyXG4gICAgICAgIGluaXRDYWxlbmRhcihjYWxlbmRhciwgZGVtb0V2ZW50cyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBnbG9iYWwgc2hhcmVkIHZhciB0byBrbm93IHdoYXQgd2UgYXJlIGRyYWdnaW5nXHJcbiAgICB2YXIgZHJhZ2dpbmdFdmVudCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRlcm5hbEV2ZW50IG9iamVjdFxyXG4gICAgICogQHBhcmFtIGpRdWVyeSBPYmplY3QgZWxlbWVudHMgU2V0IG9mIGVsZW1lbnQgYXMgalF1ZXJ5IG9iamVjdHNcclxuICAgICAqL1xyXG4gICAgdmFyIEV4dGVybmFsRXZlbnQgPSBmdW5jdGlvbihlbGVtZW50cykge1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnRzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBFdmVudCBPYmplY3QgKGh0dHA6Ly9hcnNoYXcuY29tL2Z1bGxjYWxlbmRhci9kb2NzL2V2ZW50X2RhdGEvRXZlbnRfT2JqZWN0LylcclxuICAgICAgICAgICAgLy8gaXQgZG9lc24ndCBuZWVkIHRvIGhhdmUgYSBzdGFydCBvciBlbmRcclxuICAgICAgICAgICAgdmFyIGNhbGVuZGFyRXZlbnRPYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJC50cmltKCR0aGlzLnRleHQoKSkgLy8gdXNlIHRoZSBlbGVtZW50J3MgdGV4dCBhcyB0aGUgZXZlbnQgdGl0bGVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBFdmVudCBPYmplY3QgaW4gdGhlIERPTSBlbGVtZW50IHNvIHdlIGNhbiBnZXQgdG8gaXQgbGF0ZXJcclxuICAgICAgICAgICAgJHRoaXMuZGF0YSgnY2FsZW5kYXJFdmVudE9iamVjdCcsIGNhbGVuZGFyRXZlbnRPYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gbWFrZSB0aGUgZXZlbnQgZHJhZ2dhYmxlIHVzaW5nIGpRdWVyeSBVSVxyXG4gICAgICAgICAgICAkdGhpcy5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDcwLFxyXG4gICAgICAgICAgICAgICAgcmV2ZXJ0OiB0cnVlLCAvLyB3aWxsIGNhdXNlIHRoZSBldmVudCB0byBnbyBiYWNrIHRvIGl0c1xyXG4gICAgICAgICAgICAgICAgcmV2ZXJ0RHVyYXRpb246IDAgLy8gIG9yaWdpbmFsIHBvc2l0aW9uIGFmdGVyIHRoZSBkcmFnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2UgZnVsbCBjYWxlbmRhciBwbHVnaW4gYW5kIGF0dGFjaCBiZWhhdmlvclxyXG4gICAgICogQHBhcmFtICBqUXVlcnkgW2NhbEVsZW1lbnRdIFRoZSBjYWxlbmRhciBkb20gZWxlbWVudCB3cmFwcGVkIGludG8galF1ZXJ5XHJcbiAgICAgKiBAcGFyYW0gIEV2ZW50T2JqZWN0IFtldmVudHNdIEFuIG9iamVjdCB3aXRoIHRoZSBldmVudCBsaXN0IHRvIGxvYWQgd2hlbiB0aGUgY2FsZW5kYXIgZGlzcGxheXNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5pdENhbGVuZGFyKGNhbEVsZW1lbnQsIGV2ZW50cykge1xyXG5cclxuICAgICAgICAvLyBjaGVjayB0byByZW1vdmUgZWxlbWVudHMgZnJvbSB0aGUgbGlzdFxyXG4gICAgICAgIHZhciByZW1vdmVBZnRlckRyb3AgPSAkKCcjcmVtb3ZlLWFmdGVyLWRyb3AnKTtcclxuXHJcbiAgICAgICAgY2FsRWxlbWVudC5mdWxsQ2FsZW5kYXIoe1xyXG4gICAgICAgICAgICAvLyBpc1JUTDogdHJ1ZSxcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5JyxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnbW9udGgsYWdlbmRhV2VlayxhZ2VuZGFEYXknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvbkljb25zOiB7IC8vIG5vdGUgdGhlIHNwYWNlIGF0IHRoZSBiZWdpbm5pbmdcclxuICAgICAgICAgICAgICAgIHByZXY6ICcgZmEgZmEtY2FyZXQtbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBuZXh0OiAnIGZhIGZhLWNhcmV0LXJpZ2h0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBidXR0b25UZXh0OiB7XHJcbiAgICAgICAgICAgICAgICB0b2RheTogJ3RvZGF5JyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbW9udGgnLFxyXG4gICAgICAgICAgICAgICAgd2VlazogJ3dlZWsnLFxyXG4gICAgICAgICAgICAgICAgZGF5OiAnZGF5J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZHJvcHBhYmxlOiB0cnVlLCAvLyB0aGlzIGFsbG93cyB0aGluZ3MgdG8gYmUgZHJvcHBlZCBvbnRvIHRoZSBjYWxlbmRhclxyXG4gICAgICAgICAgICBkcm9wOiBmdW5jdGlvbihkYXRlLCBhbGxEYXkpIHsgLy8gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiBzb21ldGhpbmcgaXMgZHJvcHBlZFxyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgdGhlIGRyb3BwZWQgZWxlbWVudCdzIHN0b3JlZCBFdmVudCBPYmplY3RcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50T2JqZWN0ID0gJHRoaXMuZGF0YSgnY2FsZW5kYXJFdmVudE9iamVjdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHNvbWV0aGluZyB3ZW50IHdyb25nLCBhYm9ydFxyXG4gICAgICAgICAgICAgICAgaWYgKCFvcmlnaW5hbEV2ZW50T2JqZWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2xvbmUgdGhlIG9iamVjdCB0byBhdm9pZCBtdWx0aXBsZSBldmVudHMgd2l0aCByZWZlcmVuY2UgdG8gdGhlIHNhbWUgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xvbmVkRXZlbnRPYmplY3QgPSAkLmV4dGVuZCh7fSwgb3JpZ2luYWxFdmVudE9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWduIHRoZSByZXBvcnRlZCBkYXRlXHJcbiAgICAgICAgICAgICAgICBjbG9uZWRFdmVudE9iamVjdC5zdGFydCA9IGRhdGU7XHJcbiAgICAgICAgICAgICAgICBjbG9uZWRFdmVudE9iamVjdC5hbGxEYXkgPSBhbGxEYXk7XHJcbiAgICAgICAgICAgICAgICBjbG9uZWRFdmVudE9iamVjdC5iYWNrZ3JvdW5kQ29sb3IgPSAkdGhpcy5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgICAgICAgICAgIGNsb25lZEV2ZW50T2JqZWN0LmJvcmRlckNvbG9yID0gJHRoaXMuY3NzKCdib3JkZXItY29sb3InKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgdGhlIGV2ZW50IG9uIHRoZSBjYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGxhc3QgYHRydWVgIGFyZ3VtZW50IGRldGVybWluZXMgaWYgdGhlIGV2ZW50IFwic3RpY2tzXCJcclxuICAgICAgICAgICAgICAgIC8vIChodHRwOi8vYXJzaGF3LmNvbS9mdWxsY2FsZW5kYXIvZG9jcy9ldmVudF9yZW5kZXJpbmcvcmVuZGVyRXZlbnQvKVxyXG4gICAgICAgICAgICAgICAgY2FsRWxlbWVudC5mdWxsQ2FsZW5kYXIoJ3JlbmRlckV2ZW50JywgY2xvbmVkRXZlbnRPYmplY3QsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIG5lY2Vzc2FyeSByZW1vdmUgdGhlIGVsZW1lbnQgZnJvbSB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZUFmdGVyRHJvcC5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBldmVudERyYWdTdGFydDogZnVuY3Rpb24oZXZlbnQsIGpzLCB1aSkge1xyXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmdFdmVudCA9IGV2ZW50O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBUaGlzIGFycmF5IGlzIHRoZSBldmVudHMgc291cmNlc1xyXG4gICAgICAgICAgICBldmVudHM6IGV2ZW50c1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdHMgdGhlIGV4dGVybmFsIGV2ZW50cyBjYXJkXHJcbiAgICAgKiBAcGFyYW0gIGpRdWVyeSBbY2FsRWxlbWVudF0gVGhlIGNhbGVuZGFyIGRvbSBlbGVtZW50IHdyYXBwZWQgaW50byBqUXVlcnlcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5pdEV4dGVybmFsRXZlbnRzKGNhbEVsZW1lbnQpIHtcclxuICAgICAgICAvLyBDYXJkIHdpdGggdGhlIGV4dGVybmFsIGV2ZW50cyBsaXN0XHJcbiAgICAgICAgdmFyIGV4dGVybmFsRXZlbnRzID0gJCgnLmV4dGVybmFsLWV2ZW50cycpO1xyXG5cclxuICAgICAgICAvLyBpbml0IHRoZSBleHRlcm5hbCBldmVudHMgaW4gdGhlIGNhcmRcclxuICAgICAgICBuZXcgRXh0ZXJuYWxFdmVudChleHRlcm5hbEV2ZW50cy5jaGlsZHJlbignZGl2JykpO1xyXG5cclxuICAgICAgICAvLyBFeHRlcm5hbCBldmVudCBjb2xvciBpcyBkYW5nZXItcmVkIGJ5IGRlZmF1bHRcclxuICAgICAgICB2YXIgY3VyckNvbG9yID0gJyNmNjUwNGQnO1xyXG4gICAgICAgIC8vIENvbG9yIHNlbGVjdG9yIGJ1dHRvblxyXG4gICAgICAgIHZhciBldmVudEFkZEJ0biA9ICQoJy5leHRlcm5hbC1ldmVudC1hZGQtYnRuJyk7XHJcbiAgICAgICAgLy8gTmV3IGV4dGVybmFsIGV2ZW50IG5hbWUgaW5wdXRcclxuICAgICAgICB2YXIgZXZlbnROYW1lSW5wdXQgPSAkKCcuZXh0ZXJuYWwtZXZlbnQtbmFtZScpO1xyXG4gICAgICAgIC8vIENvbG9yIHN3aXRjaGVyc1xyXG4gICAgICAgIHZhciBldmVudENvbG9yU2VsZWN0b3IgPSAkKCcuZXh0ZXJuYWwtZXZlbnQtY29sb3Itc2VsZWN0b3IgLmNpcmNsZScpO1xyXG5cclxuICAgICAgICAvLyBUcmFzaCBldmVudHMgRHJvcGFyZWFcclxuICAgICAgICAkKCcuZXh0ZXJuYWwtZXZlbnRzLXRyYXNoJykuZHJvcHBhYmxlKHtcclxuICAgICAgICAgICAgYWNjZXB0OiAnLmZjLWV2ZW50JyxcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M6ICdhY3RpdmUnLFxyXG4gICAgICAgICAgICBob3ZlckNsYXNzOiAnaG92ZXJlZCcsXHJcbiAgICAgICAgICAgIHRvbGVyYW5jZTogJ3RvdWNoJyxcclxuICAgICAgICAgICAgZHJvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbiB0byBzZW5kIGFuIGFqYXggcmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgLy8gdG8gcmVtb3ZlIHRoZSBldmVudCBmcm9tIHRoZSByZXBvc2l0b3J5XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRyYWdnaW5nRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWlkID0gZHJhZ2dpbmdFdmVudC5pZCB8fCBkcmFnZ2luZ0V2ZW50Ll9pZDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsRWxlbWVudC5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycsIGVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBkb20gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIHVpLmRyYWdnYWJsZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhclxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nRXZlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50Q29sb3JTZWxlY3Rvci5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNhdmUgY29sb3JcclxuICAgICAgICAgICAgY3VyckNvbG9yID0gJHRoaXMuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgICAgIC8vIERlLXNlbGVjdCBhbGwgYW5kIHNlbGVjdCB0aGUgY3VycmVudCBvbmVcclxuICAgICAgICAgICAgZXZlbnRDb2xvclNlbGVjdG9yLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRBZGRCdG4uY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgZXZlbnQgbmFtZSBmcm9tIGlucHV0XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBldmVudE5hbWVJbnB1dC52YWwoKTtcclxuICAgICAgICAgICAgLy8gRG9udCBhbGxvdyBlbXB0eSB2YWx1ZXNcclxuICAgICAgICAgICAgaWYgKCQudHJpbSh2YWwpID09PSAnJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBldmVudCBlbGVtZW50XHJcbiAgICAgICAgICAgIHZhciBuZXdFdmVudCA9ICQoJzxkaXYvPicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBjdXJyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IGN1cnJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnI2ZmZidcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuaHRtbCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJlcGVuZHMgdG8gdGhlIGV4dGVybmFsIGV2ZW50cyBsaXN0XHJcbiAgICAgICAgICAgIGV4dGVybmFsRXZlbnRzLnByZXBlbmQobmV3RXZlbnQpO1xyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBuZXcgZXZlbnQgZWxlbWVudFxyXG4gICAgICAgICAgICBuZXcgRXh0ZXJuYWxFdmVudChuZXdFdmVudCk7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIGlucHV0XHJcbiAgICAgICAgICAgIGV2ZW50TmFtZUlucHV0LnZhbCgnJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGFycmF5IG9mIGV2ZW50cyB0byBkaXNwbGF5IGluIHRoZSBmaXJzdCBsb2FkIG9mIHRoZSBjYWxlbmRhclxyXG4gICAgICogV3JhcCBpbnRvIHRoaXMgZnVuY3Rpb24gYSByZXF1ZXN0IHRvIGEgc291cmNlIHRvIGdldCB2aWEgYWpheCB0aGUgc3RvcmVkIGV2ZW50c1xyXG4gICAgICogQHJldHVybiBBcnJheSBUaGUgYXJyYXkgd2l0aCB0aGUgZXZlbnRzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbW9FdmVudHMoKSB7XHJcbiAgICAgICAgLy8gRGF0ZSBmb3IgdGhlIGNhbGVuZGFyIGV2ZW50cyAoZHVtbXkgZGF0YSlcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGQgPSBkYXRlLmdldERhdGUoKSxcclxuICAgICAgICAgICAgbSA9IGRhdGUuZ2V0TW9udGgoKSxcclxuICAgICAgICAgICAgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWxsIERheSBFdmVudCcsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSh5LCBtLCAxKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y1Njk1NCcsIC8vcmVkXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2Y1Njk1NCcgLy9yZWRcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG9uZyBFdmVudCcsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSh5LCBtLCBkIC0gNSksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IERhdGUoeSwgbSwgZCAtIDIpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjM5YzEyJywgLy95ZWxsb3dcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZjM5YzEyJyAvL3llbGxvd1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNZWV0aW5nJyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKHksIG0sIGQsIDEwLCAzMCksXHJcbiAgICAgICAgICAgIGFsbERheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDczYjcnLCAvL0JsdWVcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDA3M2I3JyAvL0JsdWVcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTHVuY2gnLFxyXG4gICAgICAgICAgICBzdGFydDogbmV3IERhdGUoeSwgbSwgZCwgMTIsIDApLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKHksIG0sIGQsIDE0LCAwKSxcclxuICAgICAgICAgICAgYWxsRGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwYzBlZicsIC8vSW5mbyAoYXF1YSlcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDBjMGVmJyAvL0luZm8gKGFxdWEpXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JpcnRoZGF5IFBhcnR5JyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKHksIG0sIGQgKyAxLCAxOSwgMCksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IERhdGUoeSwgbSwgZCArIDEsIDIyLCAzMCksXHJcbiAgICAgICAgICAgIGFsbERheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMGE2NWEnLCAvL1N1Y2Nlc3MgKGdyZWVuKVxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwMGE2NWEnIC8vU3VjY2VzcyAoZ3JlZW4pXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0aXRsZTogJ09wZW4gR29vZ2xlJyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKHksIG0sIDI4KSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgRGF0ZSh5LCBtLCAyOSksXHJcbiAgICAgICAgICAgIHVybDogJy8vZ29vZ2xlLmNvbS8nLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjM2M4ZGJjJywgLy9QcmltYXJ5IChsaWdodC1ibHVlKVxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyMzYzhkYmMnIC8vUHJpbWFyeSAobGlnaHQtYmx1ZSlcclxuICAgICAgICB9XTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEpRQ2xvdWRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0V29yZENsb3VkKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0V29yZENsb3VkKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4ualFDbG91ZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL0NyZWF0ZSBhbiBhcnJheSBvZiB3b3JkIG9iamVjdHMsIGVhY2ggcmVwcmVzZW50aW5nIGEgd29yZCBpbiB0aGUgY2xvdWRcclxuICAgICAgICB2YXIgd29yZF9hcnJheSA9IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnTG9yZW0nLCB3ZWlnaHQ6IDEzLCAvKmxpbms6ICdodHRwOi8vdGhlbWljb24uY28nKi8gfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnSXBzdW0nLCB3ZWlnaHQ6IDEwLjUgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnRG9sb3InLCB3ZWlnaHQ6IDkuNCB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdTaXQnLCB3ZWlnaHQ6IDggfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnQW1ldCcsIHdlaWdodDogNi4yIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbnNlY3RldHVyJywgd2VpZ2h0OiA1IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0FkaXBpc2NpbmcnLCB3ZWlnaHQ6IDUgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnU2l0Jywgd2VpZ2h0OiA4IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0FtZXQnLCB3ZWlnaHQ6IDYuMiB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdDb25zZWN0ZXR1cicsIHdlaWdodDogNSB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdBZGlwaXNjaW5nJywgd2VpZ2h0OiA1IH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAkKFwiI2pxY2xvdWRcIikualFDbG91ZCh3b3JkX2FycmF5LCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICBzdGVwczogN1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEN1c3RvbSBqUXVlcnlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U2VhcmNoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2VhcmNoKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uc2xpZGVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCEkLmZuLmNob3NlbikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghJC5mbi5kYXRlcGlja2VyKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIEJPT1RTVFJBUCBTTElERVIgQ1RSTFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXVpLXNsaWRlcl0nKS5zbGlkZXIoKTtcclxuXHJcbiAgICAgICAgLy8gQ0hPU0VOXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnLmNob3Nlbi1zZWxlY3QnKS5jaG9zZW4oKTtcclxuXHJcbiAgICAgICAgLy8gREFURVRJTUVQSUNLRVJcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCcjZGF0ZXRpbWVwaWNrZXInKS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgb3JpZW50YXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICBpY29uczoge1xyXG4gICAgICAgICAgICAgICAgdGltZTogJ2ZhIGZhLWNsb2NrLW8nLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogJ2ZhIGZhLWNhbGVuZGFyJyxcclxuICAgICAgICAgICAgICAgIHVwOiAnZmEgZmEtY2hldnJvbi11cCcsXHJcbiAgICAgICAgICAgICAgICBkb3duOiAnZmEgZmEtY2hldnJvbi1kb3duJyxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzOiAnZmEgZmEtY2hldnJvbi1sZWZ0JyxcclxuICAgICAgICAgICAgICAgIG5leHQ6ICdmYSBmYS1jaGV2cm9uLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIHRvZGF5OiAnZmEgZmEtY3Jvc3NoYWlycycsXHJcbiAgICAgICAgICAgICAgICBjbGVhcjogJ2ZhIGZhLXRyYXNoJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gRGVtbyBDYXJkc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdENhcmREZW1vKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2FyZERlbW8oKSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb25zIHNob3cgYSBkZW1vbnN0cmF0aW9uIG9mIGhvdyB0byB1c2VcclxuICAgICAgICAgKiB0aGUgY2FyZCB0b29scyBzeXN0ZW0gdmlhIGN1c3RvbSBldmVudC5cclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgJCgnLmNhcmQuY2FyZC1kZW1vJylcclxuICAgICAgICAgICAgLm9uKCdjYXJkLnJlZnJlc2gnLCBmdW5jdGlvbihlLCBjYXJkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcGVyZm9ybSBhbnkgYWN0aW9uIHdoZW4gYSAuY2FyZCB0cmlnZ2VycyBhIHJlZnJlc2ggZXZlbnRcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGFjdGlvbiBpcyBkb25lLCBqdXN0IHJlbW92ZSB0aGUgc3Bpbm5lciBjbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQucmVtb3ZlU3Bpbm5lcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FyZCBDb2xsYXBzZSBIaWRlJyk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXJkIENvbGxhcHNlIFNob3cnKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignY2FyZC5yZW1vdmUnLCBmdW5jdGlvbihldmVudCwgY2FyZCwgZGVmZXJyZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmluZyBDYXJkJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBDYWxsIHJlc29sdmUoKSB0byBjb250aW51ZSByZW1vdmluZyB0aGUgY2FyZFxyXG4gICAgICAgICAgICAgICAgLy8gcGVyZm9ybSBjaGVja3MgdG8gYXZvaWQgcmVtb3ZpbmcgY2FyZCBpZiBzb21lIHVzZXIgYWN0aW9uIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignY2FyZC5yZW1vdmVkJywgZnVuY3Rpb24oZXZlbnQsIGNhcmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlZCBDYXJkJyk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBOZXN0YWJsZSBkZW1vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0TmVzdGFibGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXROZXN0YWJsZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLm5lc3RhYmxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciB1cGRhdGVPdXRwdXQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZS5sZW5ndGggPyBlIDogJChlLnRhcmdldCksXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBsaXN0LmRhdGEoJ291dHB1dCcpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LkpTT04pIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWwod2luZG93LkpTT04uc3RyaW5naWZ5KGxpc3QubmVzdGFibGUoJ3NlcmlhbGl6ZScpKSk7IC8vLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsKCdKU09OIGJyb3dzZXIgc3VwcG9ydCByZXF1aXJlZCBmb3IgdGhpcyBkZW1vLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZhdGUgTmVzdGFibGUgZm9yIGxpc3QgMVxyXG4gICAgICAgICQoJyNuZXN0YWJsZScpLm5lc3RhYmxlKHtcclxuICAgICAgICAgICAgICAgIGdyb3VwOiAxXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignY2hhbmdlJywgdXBkYXRlT3V0cHV0KTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZhdGUgTmVzdGFibGUgZm9yIGxpc3QgMlxyXG4gICAgICAgICQoJyNuZXN0YWJsZTInKS5uZXN0YWJsZSh7XHJcbiAgICAgICAgICAgICAgICBncm91cDogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NoYW5nZScsIHVwZGF0ZU91dHB1dCk7XHJcblxyXG4gICAgICAgIC8vIG91dHB1dCBpbml0aWFsIHNlcmlhbGlzZWQgZGF0YVxyXG4gICAgICAgIHVwZGF0ZU91dHB1dCgkKCcjbmVzdGFibGUnKS5kYXRhKCdvdXRwdXQnLCAkKCcjbmVzdGFibGUtb3V0cHV0JykpKTtcclxuICAgICAgICB1cGRhdGVPdXRwdXQoJCgnI25lc3RhYmxlMicpLmRhdGEoJ291dHB1dCcsICQoJyNuZXN0YWJsZTItb3V0cHV0JykpKTtcclxuXHJcbiAgICAgICAgJCgnLmpzLW5lc3RhYmxlLWFjdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdGFyZ2V0LmRhdGEoJ2FjdGlvbicpO1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnZXhwYW5kLWFsbCcpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kZCcpLm5lc3RhYmxlKCdleHBhbmRBbGwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY29sbGFwc2UtYWxsJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmRkJykubmVzdGFibGUoJ2NvbGxhcHNlQWxsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogTW9kdWxlOiBub3RpZnkuanNcclxuICogQ3JlYXRlIHRvZ2dsZWFibGUgbm90aWZpY2F0aW9ucyB0aGF0IGZhZGUgb3V0IGF1dG9tYXRpY2FsbHkuXHJcbiAqIEJhc2VkIG9uIE5vdGlmeSBhZGRvbiBmcm9tIFVJS2l0IChodHRwOi8vZ2V0dWlraXQuY29tL2RvY3MvYWRkb25zX25vdGlmeS5odG1sKVxyXG4gKiBbZGF0YS10b2dnbGU9XCJub3RpZnlcIl1cclxuICogW2RhdGEtb3B0aW9ucz1cIm9wdGlvbnMgaW4ganNvbiBmb3JtYXRcIiBdXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdE5vdGlmeSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE5vdGlmeSgpIHtcclxuXHJcbiAgICAgICAgdmFyIFNlbGVjdG9yID0gJ1tkYXRhLW5vdGlmeV0nLFxyXG4gICAgICAgICAgICBhdXRvbG9hZFNlbGVjdG9yID0gJ1tkYXRhLW9ubG9hZF0nLFxyXG4gICAgICAgICAgICBkb2MgPSAkKGRvY3VtZW50KTtcclxuXHJcbiAgICAgICAgJChTZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBvbmxvYWQgPSAkdGhpcy5kYXRhKCdvbmxvYWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvbmxvYWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnlOb3coJHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSwgODAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5Tm93KCR0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBub3RpZnlOb3coJGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9ICRlbGVtZW50LmRhdGEoJ21lc3NhZ2UnKSxcclxuICAgICAgICAgICAgb3B0aW9ucyA9ICRlbGVtZW50LmRhdGEoJ29wdGlvbnMnKTtcclxuXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlKVxyXG4gICAgICAgICAgICAkLmVycm9yKCdOb3RpZnk6IE5vIG1lc3NhZ2Ugc3BlY2lmaWVkJyk7XHJcblxyXG4gICAgICAgICQubm90aWZ5KG1lc3NhZ2UsIG9wdGlvbnMgfHwge30pO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBOb3RpZnkgQWRkb24gZGVmaW5pdGlvbiBhcyBqUXVlcnkgcGx1Z2luXHJcbiAqIEFkYXB0ZWQgdmVyc2lvbiB0byB3b3JrIHdpdGggQm9vdHN0cmFwIGNsYXNzZXNcclxuICogTW9yZSBpbmZvcm1hdGlvbiBodHRwOi8vZ2V0dWlraXQuY29tL2RvY3MvYWRkb25zX25vdGlmeS5odG1sXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQpIHtcclxuXHJcbiAgICB2YXIgY29udGFpbmVycyA9IHt9LFxyXG4gICAgICAgIG1lc3NhZ2VzID0ge30sXHJcblxyXG4gICAgICAgIG5vdGlmeSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICgkLnR5cGUob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7IG1lc3NhZ2U6IG9wdGlvbnMgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1sxXSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKG9wdGlvbnMsICQudHlwZShhcmd1bWVudHNbMV0pID09ICdzdHJpbmcnID8geyBzdGF0dXM6IGFyZ3VtZW50c1sxXSB9IDogYXJndW1lbnRzWzFdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChuZXcgTWVzc2FnZShvcHRpb25zKSkuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VBbGwgPSBmdW5jdGlvbihncm91cCwgaW5zdGFudGx5KSB7XHJcbiAgICAgICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gbWVzc2FnZXMpIHsgaWYgKGdyb3VwID09PSBtZXNzYWdlc1tpZF0uZ3JvdXApIG1lc3NhZ2VzW2lkXS5jbG9zZShpbnN0YW50bHkpOyB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBtZXNzYWdlcykgeyBtZXNzYWdlc1tpZF0uY2xvc2UoaW5zdGFudGx5KTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB2YXIgTWVzc2FnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIE1lc3NhZ2UuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLnV1aWQgPSBcIklEXCIgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpICsgXCJSQU5EXCIgKyAoTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKFtcclxuICAgICAgICAgICAgLy8gYWxlcnQtZGlzbWlzc2FibGUgZW5hYmxlcyBicyBjbG9zZSBpY29uXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidWstbm90aWZ5LW1lc3NhZ2UgYWxlcnQtZGlzbWlzc2FibGVcIj4nLFxyXG4gICAgICAgICAgICAnPGEgY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L2E+JyxcclxuICAgICAgICAgICAgJzxkaXY+JyArIHRoaXMub3B0aW9ucy5tZXNzYWdlICsgJzwvZGl2PicsXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcblxyXG4gICAgICAgIF0uam9pbignJykpLmRhdGEoXCJub3RpZnlNZXNzYWdlXCIsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBzdGF0dXNcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXR1cykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2FsZXJ0IGFsZXJ0LScgKyB0aGlzLm9wdGlvbnMuc3RhdHVzKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50c3RhdHVzID0gdGhpcy5vcHRpb25zLnN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSB0aGlzLm9wdGlvbnMuZ3JvdXA7XHJcblxyXG4gICAgICAgIG1lc3NhZ2VzW3RoaXMudXVpZF0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIWNvbnRhaW5lcnNbdGhpcy5vcHRpb25zLnBvc10pIHtcclxuICAgICAgICAgICAgY29udGFpbmVyc1t0aGlzLm9wdGlvbnMucG9zXSA9ICQoJzxkaXYgY2xhc3M9XCJ1ay1ub3RpZnkgdWstbm90aWZ5LScgKyB0aGlzLm9wdGlvbnMucG9zICsgJ1wiPjwvZGl2PicpLmFwcGVuZFRvKCdib2R5Jykub24oXCJjbGlja1wiLCBcIi51ay1ub3RpZnktbWVzc2FnZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZGF0YShcIm5vdGlmeU1lc3NhZ2VcIikuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgJC5leHRlbmQoTWVzc2FnZS5wcm90b3R5cGUsIHtcclxuXHJcbiAgICAgICAgdXVpZDogZmFsc2UsXHJcbiAgICAgICAgZWxlbWVudDogZmFsc2UsXHJcbiAgICAgICAgdGltb3V0OiBmYWxzZSxcclxuICAgICAgICBjdXJyZW50c3RhdHVzOiBcIlwiLFxyXG4gICAgICAgIGdyb3VwOiBmYWxzZSxcclxuXHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmlzKFwiOnZpc2libGVcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXJzW3RoaXMub3B0aW9ucy5wb3NdLnNob3coKS5wcmVwZW5kKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWFyZ2luYm90dG9tID0gcGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1ib3R0b21cIiksIDEwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jc3MoeyBcIm9wYWNpdHlcIjogMCwgXCJtYXJnaW4tdG9wXCI6IC0xICogdGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCksIFwibWFyZ2luLWJvdHRvbVwiOiAwIH0pLmFuaW1hdGUoeyBcIm9wYWNpdHlcIjogMSwgXCJtYXJnaW4tdG9wXCI6IDAsIFwibWFyZ2luLWJvdHRvbVwiOiBtYXJnaW5ib3R0b20gfSwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLm9wdGlvbnMudGltZW91dCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VmbiA9IGZ1bmN0aW9uKCkgeyAkdGhpcy5jbG9zZSgpOyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChjbG9zZWZuLCAkdGhpcy5vcHRpb25zLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5lbGVtZW50LmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgY2xlYXJUaW1lb3V0KCR0aGlzLnRpbWVvdXQpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgJHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoY2xvc2VmbiwgJHRoaXMub3B0aW9ucy50aW1lb3V0KTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbihpbnN0YW50bHkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBmaW5hbGl6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyc1skdGhpcy5vcHRpb25zLnBvc10uY2hpbGRyZW4oKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyc1skdGhpcy5vcHRpb25zLnBvc10uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzWyR0aGlzLnV1aWRdO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluc3RhbnRseSkge1xyXG4gICAgICAgICAgICAgICAgZmluYWxpemUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hbmltYXRlKHsgXCJvcGFjaXR5XCI6IDAsIFwibWFyZ2luLXRvcFwiOiAtMSAqIHRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpLCBcIm1hcmdpbi1ib3R0b21cIjogMCB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjb250ZW50OiBmdW5jdGlvbihodG1sKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCI+ZGl2XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFodG1sKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmh0bWwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmh0bWwoaHRtbCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzdGF0dXM6IGZ1bmN0aW9uKHN0YXR1cykge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRzdGF0dXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnYWxlcnQgYWxlcnQtJyArIHRoaXMuY3VycmVudHN0YXR1cykuYWRkQ2xhc3MoJ2FsZXJ0IGFsZXJ0LScgKyBzdGF0dXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50c3RhdHVzID0gc3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgTWVzc2FnZS5kZWZhdWx0cyA9IHtcclxuICAgICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJub3JtYWxcIixcclxuICAgICAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgICAgIGdyb3VwOiBudWxsLFxyXG4gICAgICAgIHBvczogJ3RvcC1jZW50ZXInXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAkW1wibm90aWZ5XCJdID0gbm90aWZ5O1xyXG4gICAgJFtcIm5vdGlmeVwiXS5tZXNzYWdlID0gTWVzc2FnZTtcclxuICAgICRbXCJub3RpZnlcIl0uY2xvc2VBbGwgPSBjbG9zZUFsbDtcclxuXHJcbiAgICByZXR1cm4gbm90aWZ5O1xyXG5cclxufShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpKTsiLCIvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogTW9kdWxlOiBwbGF5LWFuaW1hdGlvbi5qc1xyXG4gKiBQcm92aWRlcyBhIHNpbXBsZSB3YXkgdG8gcnVuIGFuaW1hdGlvbiB3aXRoIGEgY2xpY2tcclxuICogVGFyZ2V0ZWQgZWxlbWVudHMgbXVzdCBoYXZlXHJcbiAqICAgW2RhdGEtYW5pbWF0ZVwiXVxyXG4gKiAgIFtkYXRhLXRhcmdldD1cIlRhcmdldCBlbGVtZW50IGFmZmVjdGVkIGJ5IHRoZSBhbmltYXRpb25cIl1cclxuICogICBbZGF0YS1wbGF5PVwiQW5pbWF0aW9uIG5hbWUgKGh0dHA6Ly9kYW5lZGVuLmdpdGh1Yi5pby9hbmltYXRlLmNzcy8pXCJdXHJcbiAqXHJcbiAqIFJlcXVpcmVzIGFuaW1vLmpzXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFBsYXlBbmltYXRpb24pXHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFBsYXlBbmltYXRpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBTZWxlY3RvciA9ICdbZGF0YS1hbmltYXRlXSc7XHJcblxyXG4gICAgICAgIC8vIFJ1biBjbGljayB0cmlnZ2VyZWQgYW5pbWF0aW9uc1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTZWwgPSAkdGhpcy5kYXRhKCd0YXJnZXQnKSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9ICR0aGlzLmRhdGEoJ3BsYXknKSB8fCAnYm91bmNlJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRTZWwpIHtcclxuICAgICAgICAgICAgICAgICQodGFyZ2V0U2VsKS5hbmltbyh7IGFuaW1hdGlvbjogYW5pbWF0aW9uIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBNb2R1bGU6IHBvcnRsZXQuanNcclxuICogRHJhZyBhbmQgZHJvcCBhbnkgY2FyZCB0byBjaGFuZ2UgaXRzIHBvc2l0aW9uXHJcbiAqIFRoZSBTZWxlY3RvciBzaG91bGQgY291bGQgYmUgYXBwbGllZCB0byBhbnkgb2JqZWN0IHRoYXQgY29udGFpbnNcclxuICogY2FyZCwgc28gLmNvbC0qIGVsZW1lbnQgYXJlIGlkZWFsLlxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgU1RPUkFHRV9LRVlfTkFNRSA9ICdqcS1wb3J0bGV0U3RhdGUnO1xyXG5cclxuICAgICQoaW5pdFBvcnRsZXRzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UG9ydGxldHMoKSB7XHJcblxyXG4gICAgICAgIC8vIENvbXBvbmVudCBpcyBOT1Qgb3B0aW9uYWxcclxuICAgICAgICBpZiAoISQuZm4uc29ydGFibGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIFNlbGVjdG9yID0gJ1tkYXRhLXRvZ2dsZT1cInBvcnRsZXRcIl0nO1xyXG5cclxuICAgICAgICAkKFNlbGVjdG9yKS5zb3J0YWJsZSh7XHJcbiAgICAgICAgICAgIGNvbm5lY3RXaXRoOiAgICAgICAgICBTZWxlY3RvcixcclxuICAgICAgICAgICAgaXRlbXM6ICAgICAgICAgICAgICAgICdkaXYuY2FyZCcsXHJcbiAgICAgICAgICAgIGhhbmRsZTogICAgICAgICAgICAgICAnLnBvcnRsZXQtaGFuZGxlcicsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6ICAgICAgICAgICAgICAwLjcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAgICAgICAgICAncG9ydGxldCBib3gtcGxhY2Vob2xkZXInLFxyXG4gICAgICAgICAgICBjYW5jZWw6ICAgICAgICAgICAgICAgJy5wb3J0bGV0LWNhbmNlbCcsXHJcbiAgICAgICAgICAgIGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxyXG4gICAgICAgICAgICBpZnJhbWVGaXg6ICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRvbGVyYW5jZTogICAgICAgICAgICAncG9pbnRlcicsXHJcbiAgICAgICAgICAgIGhlbHBlcjogICAgICAgICAgICAgICAnb3JpZ2luYWwnLFxyXG4gICAgICAgICAgICByZXZlcnQ6ICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICBmb3JjZUhlbHBlclNpemU6ICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgdXBkYXRlOiAgICAgICAgICAgICAgIHNhdmVQb3J0bGV0T3JkZXIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogICAgICAgICAgICAgICBsb2FkUG9ydGxldE9yZGVyXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBvcHRpb25hbGx5IGRpc2FibGVzIG1vdXNlIHNlbGVjdGlvblxyXG4gICAgICAgIC8vLmRpc2FibGVTZWxlY3Rpb24oKVxyXG4gICAgICAgIDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZVBvcnRsZXRPcmRlcihldmVudCwgdWkpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KFNUT1JBR0VfS0VZX05BTUUpO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEpIHsgZGF0YSA9IHt9OyB9XHJcblxyXG4gICAgICAgIGRhdGFbdGhpcy5pZF0gPSAkKHRoaXMpLnNvcnRhYmxlKCd0b0FycmF5Jyk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5zZXQoU1RPUkFHRV9LRVlfTkFNRSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUG9ydGxldE9yZGVyKCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5nZXQoU1RPUkFHRV9LRVlfTkFNRSk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9ybGV0SWQgPSB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgY2FyZHMgPSBkYXRhW3BvcmxldElkXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYXJkcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcnRsZXQgPSAkKCcjJyArIHBvcmxldElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goY2FyZHMsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUpLmFwcGVuZFRvKHBvcnRsZXQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXNldCBwb3JsZXQgc2F2ZSBzdGF0ZVxyXG4gICAgd2luZG93LnJlc2V0UG9ybGV0cyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UucmVtb3ZlKFNUT1JBR0VfS0VZX05BTUUpO1xyXG4gICAgICAgIC8vIHJlbG9hZCB0aGUgcGFnZVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEhUTUw1IFNvcnRhYmxlIGRlbW9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTb3J0YWJsZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNvcnRhYmxlKCkge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNvcnRhYmxlID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBzb3J0YWJsZSgnLnNvcnRhYmxlJywge1xyXG4gICAgICAgICAgICBmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICc8ZGl2IGNsYXNzPVwiYm94LXBsYWNlaG9sZGVyIHAwIG0wXCI+PGRpdj48L2Rpdj48L2Rpdj4nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gU3dlZXQgQWxlcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTd2VldEFsZXJ0KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U3dlZXRBbGVydCgpIHtcclxuXHJcbiAgICAgICAgJCgnI3N3YWwtZGVtbzEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3dhbChcIkhlcmUncyBhIG1lc3NhZ2UhXCIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNzd2FsLWRlbW8yJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN3YWwoXCJIZXJlJ3MgYSBtZXNzYWdlIVwiLCBcIkl0J3MgcHJldHR5LCBpc24ndCBpdD9cIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI3N3YWwtZGVtbzMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3dhbChcIkdvb2Qgam9iIVwiLCBcIllvdSBjbGlja2VkIHRoZSBidXR0b24hXCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjc3dhbC1kZW1vNCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3Ugd2lsbCBub3QgYmUgYWJsZSB0byByZWNvdmVyIHRoaXMgaW1hZ2luYXJ5IGZpbGUhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiI0RENkI1NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25Db25maXJtOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoXCJEZWxldGVkIVwiLCBcIllvdXIgaW1hZ2luYXJ5IGZpbGUgaGFzIGJlZW4gZGVsZXRlZC5cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjc3dhbC1kZW1vNScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IHdpbGwgbm90IGJlIGFibGUgdG8gcmVjb3ZlciB0aGlzIGltYWdpbmFyeSBmaWxlIVwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiNERDZCNTVcIixcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgY2FuY2VsIHBseCFcIixcclxuICAgICAgICAgICAgICAgIGNsb3NlT25Db25maXJtOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGlzQ29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQ29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoXCJEZWxldGVkIVwiLCBcIllvdXIgaW1hZ2luYXJ5IGZpbGUgaGFzIGJlZW4gZGVsZXRlZC5cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKFwiQ2FuY2VsbGVkXCIsIFwiWW91ciBpbWFnaW5hcnkgZmlsZSBpcyBzYWZlIDopXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDb2xvciBwaWNrZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRDb2xvclBpY2tlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENvbG9yUGlja2VyKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uY29sb3JwaWNrZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgJCgnLmRlbW8tY29sb3JwaWNrZXInKS5jb2xvcnBpY2tlcigpO1xyXG5cclxuICAgICAgICAkKCcjZGVtb19zZWxlY3RvcnMnKS5jb2xvcnBpY2tlcih7XHJcbiAgICAgICAgICAgIGNvbG9yU2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAnZGVmYXVsdCc6ICcjNzc3Nzc3JyxcclxuICAgICAgICAgICAgICAgICdwcmltYXJ5JzogQVBQX0NPTE9SU1sncHJpbWFyeSddLFxyXG4gICAgICAgICAgICAgICAgJ3N1Y2Nlc3MnOiBBUFBfQ09MT1JTWydzdWNjZXNzJ10sXHJcbiAgICAgICAgICAgICAgICAnaW5mbyc6IEFQUF9DT0xPUlNbJ2luZm8nXSxcclxuICAgICAgICAgICAgICAgICd3YXJuaW5nJzogQVBQX0NPTE9SU1snd2FybmluZyddLFxyXG4gICAgICAgICAgICAgICAgJ2Rhbmdlcic6IEFQUF9DT0xPUlNbJ2RhbmdlciddXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBGb3JtcyBEZW1vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdEZvcm1zRGVtbyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZvcm1zRGVtbygpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLnNsaWRlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghJC5mbi5jaG9zZW4pIHJldHVybjtcclxuICAgICAgICBpZiAoISQuZm4uaW5wdXRtYXNrKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCEkLmZuLmZpbGVzdHlsZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghJC5mbi53eXNpd3lnKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCEkLmZuLmRhdGVwaWNrZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gQk9PVFNUUkFQIFNMSURFUiBDVFJMXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdWktc2xpZGVyXScpLnNsaWRlcigpO1xyXG5cclxuICAgICAgICAvLyBDSE9TRU5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCcuY2hvc2VuLXNlbGVjdCcpLmNob3NlbigpO1xyXG5cclxuICAgICAgICAvLyBNQVNLRURcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCdbZGF0YS1tYXNrZWRdJykuaW5wdXRtYXNrKCk7XHJcblxyXG4gICAgICAgIC8vIEZJTEVTVFlMRVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJy5maWxlc3R5bGUnKS5maWxlc3R5bGUoKTtcclxuXHJcbiAgICAgICAgLy8gV1lTSVdZR1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJy53eXNpd3lnJykud3lzaXd5ZygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gREFURVRJTUVQSUNLRVJcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCcjZGF0ZXRpbWVwaWNrZXIxJykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgaWNvbnM6IHtcclxuICAgICAgICAgICAgICAgIHRpbWU6ICdmYSBmYS1jbG9jay1vJyxcclxuICAgICAgICAgICAgICAgIGRhdGU6ICdmYSBmYS1jYWxlbmRhcicsXHJcbiAgICAgICAgICAgICAgICB1cDogJ2ZhIGZhLWNoZXZyb24tdXAnLFxyXG4gICAgICAgICAgICAgICAgZG93bjogJ2ZhIGZhLWNoZXZyb24tZG93bicsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91czogJ2ZhIGZhLWNoZXZyb24tbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBuZXh0OiAnZmEgZmEtY2hldnJvbi1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICB0b2RheTogJ2ZhIGZhLWNyb3NzaGFpcnMnLFxyXG4gICAgICAgICAgICAgICAgY2xlYXI6ICdmYSBmYS10cmFzaCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIG9ubHkgdGltZVxyXG4gICAgICAgICQoJyNkYXRldGltZXBpY2tlcjInKS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgZm9ybWF0OiAnbW0tZGQteXl5eSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogTW9kdWxlOiBJbWFnZSBDcm9wcGVyXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdEltYWdlQ3JvcHBlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEltYWdlQ3JvcHBlcigpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmNyb3BwZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyICRpbWFnZSA9ICQoJy5pbWctY29udGFpbmVyID4gaW1nJyksXHJcbiAgICAgICAgICAgICRkYXRhWCA9ICQoJyNkYXRhWCcpLFxyXG4gICAgICAgICAgICAkZGF0YVkgPSAkKCcjZGF0YVknKSxcclxuICAgICAgICAgICAgJGRhdGFIZWlnaHQgPSAkKCcjZGF0YUhlaWdodCcpLFxyXG4gICAgICAgICAgICAkZGF0YVdpZHRoID0gJCgnI2RhdGFXaWR0aCcpLFxyXG4gICAgICAgICAgICAkZGF0YVJvdGF0ZSA9ICQoJyNkYXRhUm90YXRlJyksXHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHg6IDQyMCxcclxuICAgICAgICAgICAgICAgIC8vICAgeTogNjAsXHJcbiAgICAgICAgICAgICAgICAvLyAgIHdpZHRoOiA2NDAsXHJcbiAgICAgICAgICAgICAgICAvLyAgIGhlaWdodDogMzYwXHJcbiAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2tJbWFnZU9yaWdpbjogZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBtb2RhbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBndWlkZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGF1dG9Dcm9wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGF1dG9Dcm9wQXJlYTogMC41LFxyXG4gICAgICAgICAgICAgICAgLy8gZHJhZ0Nyb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gbW92YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyByb3RhdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gem9vbWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gdG91Y2hEcmFnWm9vbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBtb3VzZVdoZWVsWm9vbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBjcm9wQm94TW92YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBjcm9wQm94UmVzaXphYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGRvdWJsZUNsaWNrVG9nZ2xlOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBtaW5DYW52YXNXaWR0aDogMzIwLFxyXG4gICAgICAgICAgICAgICAgLy8gbWluQ2FudmFzSGVpZ2h0OiAxODAsXHJcbiAgICAgICAgICAgICAgICAvLyBtaW5Dcm9wQm94V2lkdGg6IDE2MCxcclxuICAgICAgICAgICAgICAgIC8vIG1pbkNyb3BCb3hIZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgLy8gbWluQ29udGFpbmVyV2lkdGg6IDMyMCxcclxuICAgICAgICAgICAgICAgIC8vIG1pbkNvbnRhaW5lckhlaWdodDogMTgwLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGJ1aWxkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gYnVpbHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBkcmFnc3RhcnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBkcmFnbW92ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIGRyYWdlbmQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyB6b29taW46IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyB6b29tb3V0OiBudWxsLFxyXG5cclxuICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiAxNiAvIDksXHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3OiAnLmltZy1wcmV2aWV3JyxcclxuICAgICAgICAgICAgICAgIGNyb3A6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZGF0YVgudmFsKE1hdGgucm91bmQoZGF0YS54KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRhdGFZLnZhbChNYXRoLnJvdW5kKGRhdGEueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkYXRhSGVpZ2h0LnZhbChNYXRoLnJvdW5kKGRhdGEuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRhdGFXaWR0aC52YWwoTWF0aC5yb3VuZChkYXRhLndpZHRoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRhdGFSb3RhdGUudmFsKE1hdGgucm91bmQoZGF0YS5yb3RhdGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJGltYWdlLm9uKHtcclxuICAgICAgICAgICAgJ2J1aWxkLmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnYnVpbHQuY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdkcmFnc3RhcnQuY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSwgZS5kcmFnVHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdkcmFnbW92ZS5jcm9wcGVyJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50eXBlLCBlLmRyYWdUeXBlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2RyYWdlbmQuY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSwgZS5kcmFnVHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd6b29taW4uY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd6b29tb3V0LmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnY2hhbmdlLmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY3JvcHBlcihvcHRpb25zKTtcclxuXHJcblxyXG4gICAgICAgIC8vIE1ldGhvZHNcclxuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjbGljaycsICdbZGF0YS1tZXRob2RdJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkaW1hZ2UuZGF0YSgnY3JvcHBlcicpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLm1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9ICQuZXh0ZW5kKHt9LCBkYXRhKTsgLy8gQ2xvbmUgYSBuZXcgb25lXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnRhcmdldCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0ID0gJChkYXRhLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5vcHRpb24gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm9wdGlvbiA9IEpTT04ucGFyc2UoJHRhcmdldC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJGltYWdlLmNyb3BwZXIoZGF0YS5tZXRob2QsIGRhdGEub3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5tZXRob2QgPT09ICdnZXRDcm9wcGVkQ2FudmFzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNnZXRDcm9wcGVkQ2FudmFzTW9kYWwnKS5tb2RhbCgpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkLmlzUGxhaW5PYmplY3QocmVzdWx0KSAmJiAkdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC52YWwoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGltYWdlLmRhdGEoJ2Nyb3BwZXInKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZS5jcm9wcGVyKCdtb3ZlJywgLTEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZS5jcm9wcGVyKCdtb3ZlJywgMCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZS5jcm9wcGVyKCdtb3ZlJywgMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGltYWdlLmNyb3BwZXIoJ21vdmUnLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIEltcG9ydCBpbWFnZVxyXG4gICAgICAgIHZhciAkaW5wdXRJbWFnZSA9ICQoJyNpbnB1dEltYWdlJyksXHJcbiAgICAgICAgICAgIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTCxcclxuICAgICAgICAgICAgYmxvYlVSTDtcclxuXHJcbiAgICAgICAgaWYgKFVSTCkge1xyXG4gICAgICAgICAgICAkaW5wdXRJbWFnZS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLmZpbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkaW1hZ2UuZGF0YSgnY3JvcHBlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlID0gZmlsZXNbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgvXmltYWdlXFwvXFx3KyQvLnRlc3QoZmlsZS50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9iVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlLm9uZSgnYnVpbHQuY3JvcHBlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTsgLy8gUmV2b2tlIHdoZW4gbG9hZCBjb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jcm9wcGVyKCdyZXNldCcpLmNyb3BwZXIoJ3JlcGxhY2UnLCBibG9iVVJMKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0SW1hZ2UudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIGNob29zZSBhbiBpbWFnZSBmaWxlLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGlucHV0SW1hZ2UucGFyZW50KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICAgICQoJy5kb2NzLW9wdGlvbnMgOmNoZWNrYm94Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkaW1hZ2UuZGF0YSgnY3JvcHBlcicpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnNbJHRoaXMudmFsKCldID0gJHRoaXMucHJvcCgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAkaW1hZ2UuY3JvcHBlcignZGVzdHJveScpLmNyb3BwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBUb29sdGlwc1xyXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gU2VsZWN0MlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFNlbGVjdDIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTZWxlY3QyKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uc2VsZWN0MikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBTZWxlY3QgMlxyXG5cclxuICAgICAgICAkKCcjc2VsZWN0Mi0xJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwNCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjc2VsZWN0Mi0yJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwNCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjc2VsZWN0Mi0zJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwNCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjc2VsZWN0Mi00Jykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGEgc3RhdGUnLFxyXG4gICAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcDQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGlmICh0eXBlb2YgRHJvcHpvbmUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgLy8gUHJldmVudCBEcm9wem9uZSBmcm9tIGF1dG8gZGlzY292ZXJpbmdcclxuICAgIC8vIFRoaXMgaXMgdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gY3JlYXRlIHRoZVxyXG4gICAgLy8gRHJvcHpvbmUgcHJvZ3JhbW1hdGljYWxseSBsYXRlclxyXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XHJcblxyXG4gICAgJChpbml0RHJvcHpvbmUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXREcm9wem9uZSgpIHtcclxuXHJcbiAgICAgICAgLy8gRHJvcHpvbmUgc2V0dGluZ3NcclxuICAgICAgICB2YXIgZHJvcHpvbmVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhdXRvUHJvY2Vzc1F1ZXVlOiBmYWxzZSxcclxuICAgICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFsbGVsVXBsb2FkczogMTAwLFxyXG4gICAgICAgICAgICBtYXhGaWxlczogMTAwLFxyXG4gICAgICAgICAgICBkaWN0RGVmYXVsdE1lc3NhZ2U6ICc8ZW0gY2xhc3M9XCJmYSBmYS11cGxvYWQgdGV4dC1tdXRlZFwiPjwvZW0+PGJyPkRyb3AgZmlsZXMgaGVyZSB0byB1cGxvYWQnLCAvLyBkZWZhdWx0IG1lc3NhZ2VzIGJlZm9yZSBmaXJzdCBkcm9wXHJcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ2ZpbGUnLCAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxyXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMiwgLy8gTUJcclxuICAgICAgICAgICAgYWRkUmVtb3ZlTGlua3M6IHRydWUsXHJcbiAgICAgICAgICAgIGFjY2VwdDogZnVuY3Rpb24oZmlsZSwgZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUubmFtZSA9PT0gJ2p1c3RpbmJpZWJlci5qcGcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgnTmFoYSwgeW91IGRvbnQuIDopJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHpIYW5kbGVyID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGR6SGFuZGxlci5wcm9jZXNzUXVldWUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbignYWRkZWRmaWxlJywgZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRlZCBmaWxlOiAnICsgZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbigncmVtb3ZlZGZpbGUnLCBmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZWQgZmlsZTogJyArIGZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ3NlbmRpbmdtdWx0aXBsZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbignc3VjY2Vzc211bHRpcGxlJywgZnVuY3Rpb24oIC8qZmlsZXMsIHJlc3BvbnNlKi8gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKCdlcnJvcm11bHRpcGxlJywgZnVuY3Rpb24oIC8qZmlsZXMsIHJlc3BvbnNlKi8gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGRyb3B6b25lQXJlYSA9IG5ldyBEcm9wem9uZSgnI2Ryb3B6b25lLWFyZWEnLCBkcm9wem9uZU9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIlxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuXHJcbiAgICAkKGluaXRXaXphcmQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRXaXphcmQoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi52YWxpZGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgZm9ybSA9ICQoXCIjZnJtSW5zY3JpcGNpb25cIik7XHJcbiAgICAgICAgZm9ybS52YWxpZGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiBlcnJvclBsYWNlbWVudChlcnJvciwgZWxlbWVudCkgeyBlbGVtZW50LmJlZm9yZShlcnJvcik7IH0sXHJcbiAgICAgICAgICAgIGxhbmc6ICdlcycsXHJcbiAgICAgICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICBjb25maXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXF1YWxUbzogXCIjcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBlbnRyZXZpc3RhSUQ6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9ybS5jaGlsZHJlbihcImRpdlwiKS5zdGVwcyh7XHJcbiAgICAgICAgICAgIGhlYWRlclRhZzogXCJoNFwiLFxyXG4gICAgICAgICAgICBib2R5VGFnOiBcImZpZWxkc2V0XCIsXHJcbiAgICAgICAgICAgIC8vdHJhbnNpdGlvbkVmZmVjdDogXCJzbGlkZUxlZnRcIixcclxuICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6IFwiQ2FuY2VsYXJcIixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IFwiUGFzbyBhY3R1YWw6XCIsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBcIlBhZ2luYWNp77+9blwiLFxyXG4gICAgICAgICAgICAgICAgZmluaXNoOiBcIkZpbmFsaXphclwiLFxyXG4gICAgICAgICAgICAgICAgbmV4dDogXCJTaWd1aWVudGVcIixcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzOiBcIkFudGVyaW9yXCIsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBcIkNhcmdhbmRvIC4uLlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uU3RlcENoYW5naW5nOiBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnRJbmRleCwgbmV3SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5hY3Rpb25zID4gdWwgPiBsaTpsYXN0LWNoaWxkIGEnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2Y4OTQwNicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS52YWxpZGF0ZSgpLnNldHRpbmdzLmlnbm9yZSA9IFwiOmRpc2FibGVkLDpoaWRkZW46bm90KCdzZWxlY3QuZm9ybS1jb250cm9sJylcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnZhbGlkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRmluaXNoaW5nOiBmdW5jdGlvbihldmVudCwgY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnZhbGlkYXRlKCkuc2V0dGluZ3MuaWdub3JlID0gXCI6ZGlzYWJsZWRcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnZhbGlkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uKGV2ZW50LCBjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiU3VibWl0dGVkIVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdWJtaXQgZm9ybVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICQoJy5jaG9zZW4tc2VsZWN0MzIxJykuY2hvc2VuKHtcclxuICAgICAgICAgICAgbm9fcmVzdWx0c190ZXh0OiBcIk5vIHNlIGVuY29udHJhcm9uIHJlc3VsdGFkb3NcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJfdGV4dF9zaW5nbGU6IFwiU2VsZWNjaW9uZSB1bmEgb3BjaVxcdTAwRjNuLi4uXCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGU6IFwiU2VsZWNjaW9uZSB1bmEgb3BjaVxcdTAwRjNuLi4uXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNlbGVjdDMyMScpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcDQnLFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFhlZGl0YWJsZSBEZW1vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0WEVkaXRhYmxlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0WEVkaXRhYmxlKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uZWRpdGFibGUpIHJldHVyblxyXG5cclxuICAgICAgICAvLyBGb250IEF3ZXNvbWUgc3VwcG9ydFxyXG4gICAgICAgICQuZm4uZWRpdGFibGVmb3JtLmJ1dHRvbnMgPVxyXG4gICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGVkaXRhYmxlLXN1Ym1pdFwiPicgK1xyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jaGVja1wiPjwvaT4nICtcclxuICAgICAgICAgICAgJzwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGVkaXRhYmxlLWNhbmNlbFwiPicgK1xyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS10aW1lc1wiPjwvaT4nICtcclxuICAgICAgICAgICAgJzwvYnV0dG9uPic7XHJcblxyXG4gICAgICAgIC8vZGVmYXVsdHNcclxuICAgICAgICAvLyQuZm4uZWRpdGFibGUuZGVmYXVsdHMudXJsID0gJ3VybC90by9zZXJ2ZXInO1xyXG5cclxuICAgICAgICAvL2VuYWJsZSAvIGRpc2FibGVcclxuICAgICAgICAkKCcjZW5hYmxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJyN1c2VyIC5lZGl0YWJsZScpLmVkaXRhYmxlKCd0b2dnbGVEaXNhYmxlZCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2VkaXRhYmxlc1xyXG4gICAgICAgICQoJyN1c2VybmFtZScpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgLy8gdXJsOiAndXJsL3RvL3NlcnZlcicsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgcGs6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6ICd1c2VybmFtZScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnRW50ZXIgdXNlcm5hbWUnLFxyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjZmlyc3RuYW1lJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkLnRyaW0odmFsdWUpID09PSAnJykgcmV0dXJuICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI3NleCcpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgcHJlcGVuZDogXCJub3Qgc2VsZWN0ZWRcIixcclxuICAgICAgICAgICAgc291cmNlOiBbXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiAxLCB0ZXh0OiAnTWFsZScgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IDIsIHRleHQ6ICdGZW1hbGUnIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGlzcGxheTogZnVuY3Rpb24odmFsdWUsIHNvdXJjZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb2xvcnMgPSB7IFwiXCI6IFwiZ3JheVwiLCAxOiBcImdyZWVuXCIsIDI6IFwiYmx1ZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9ICQuZ3JlcChzb3VyY2VEYXRhLCBmdW5jdGlvbihvKSB7IHJldHVybiBvLnZhbHVlID09IHZhbHVlOyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQoZWxlbVswXS50ZXh0KS5jc3MoXCJjb2xvclwiLCBjb2xvcnNbdmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjc3RhdHVzJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjZ3JvdXAnKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIHNob3didXR0b25zOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2RvYicpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2V2ZW50JykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIGNvbWJvZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgZmlyc3RJdGVtOiAnbmFtZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2NvbW1lbnRzJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBzaG93YnV0dG9uczogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNub3RlJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNwZW5jaWwnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnI25vdGUnKS5lZGl0YWJsZSgndG9nZ2xlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyN1c2VyIC5lZGl0YWJsZScpLm9uKCdoaWRkZW4nLCBmdW5jdGlvbihlLCByZWFzb24pIHtcclxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gJ3NhdmUnIHx8IHJlYXNvbiA9PT0gJ25vY2hhbmdlJykge1xyXG4gICAgICAgICAgICAgICAgdmFyICRuZXh0ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLm5leHQoKS5maW5kKCcuZWRpdGFibGUnKTtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYXV0b29wZW4nKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRuZXh0LmVkaXRhYmxlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG5leHQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUQUJMRVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJyN1c2VycyBhJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICd1c2VybmFtZScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnRW50ZXIgdXNlcm5hbWUnLFxyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsInZhciBmdW5jaW9uZXNfdmFyaWFzID0ge1xyXG5cclxuICAgIHNvbG9OdW1lcm9zOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICAgICBvYmoudmFsdWUgPSBvYmoudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG4gICAgfVxyXG59OyIsIi8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBNb2R1bGU6IGdtYXAuanNcclxuICogSW5pdCBHb29nbGUgTWFwIHBsdWdpblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRHb29nbGVNYXBzKTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBNYXAgU3R5bGUgZGVmaW5pdGlvblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gR2V0IG1vcmUgc3R5bGVzIGZyb20gaHR0cDovL3NuYXp6eW1hcHMuY29tL3N0eWxlLzI5L2xpZ2h0LW1vbm9jaHJvbWVcclxuICAgIC8vIC0gSnVzdCByZXBsYWNlIGFuZCBhc3NpZ24gdG8gJ01hcFN0eWxlcycgdGhlIG5ldyBzdHlsZSBhcnJheVxyXG4gICAgdmFyIE1hcFN0eWxlcyA9IFt7IGZlYXR1cmVUeXBlOiAnd2F0ZXInLCBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb24nIH0sIHsgY29sb3I6ICcjYmRkMWY5JyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAnYWxsJywgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJywgc3R5bGVyczogW3sgY29sb3I6ICcjMzM0MTY1JyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAnbGFuZHNjYXBlJywgc3R5bGVyczogW3sgY29sb3I6ICcjZTllYmYxJyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2M1YzZjNicgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3JvYWQuYXJ0ZXJpYWwnLCBlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3sgY29sb3I6ICcjZmZmJyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncm9hZC5sb2NhbCcsIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNmZmYnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICd0cmFuc2l0JywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2Q4ZGJlMCcgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3BvaScsIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNjZmQ1ZTAnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZScsIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvbicgfSwgeyBsaWdodG5lc3M6IDMzIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsIGVsZW1lbnRUeXBlOiAnbGFiZWxzJywgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29uJyB9LCB7IGxpZ2h0bmVzczogMjAgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3JvYWQnLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNkOGRiZTAnLCBsaWdodG5lc3M6IDIwIH1dIH1dO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0R29vZ2xlTWFwcygpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmdNYXApIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIG1hcFNlbGVjdG9yID0gJ1tkYXRhLWdtYXBdJztcclxuICAgICAgICB2YXIgZ01hcFJlZnMgPSBbXTtcclxuXHJcbiAgICAgICAgJChtYXBTZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzZXMgPSAkdGhpcy5kYXRhKCdhZGRyZXNzJykgJiYgJHRoaXMuZGF0YSgnYWRkcmVzcycpLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgICB0aXRsZXMgPSAkdGhpcy5kYXRhKCd0aXRsZScpICYmICR0aGlzLmRhdGEoJ3RpdGxlJykuc3BsaXQoJzsnKSxcclxuICAgICAgICAgICAgICAgIHpvb20gPSAkdGhpcy5kYXRhKCd6b29tJykgfHwgMTQsXHJcbiAgICAgICAgICAgICAgICBtYXB0eXBlID0gJHRoaXMuZGF0YSgnbWFwdHlwZScpIHx8ICdST0FETUFQJywgLy8gb3IgJ1RFUlJBSU4nXHJcbiAgICAgICAgICAgICAgICBtYXJrZXJzID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAoYWRkcmVzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhIGluIGFkZHJlc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWRkcmVzc2VzW2FdID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzZXNbYV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiAodGl0bGVzICYmIHRpdGxlc1thXSkgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogdHJ1ZSAvKiBBbHdheXMgcG9wdXAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbkNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnZpZXdNYXBDb250cm9sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwdHlwZTogbWFwdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzOiBtYXJrZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIHpvb206IHpvb21cclxuICAgICAgICAgICAgICAgICAgICAvLyBNb3JlIG9wdGlvbnMgaHR0cHM6Ly9naXRodWIuY29tL21hcmlvZXN0cmFkYS9qUXVlcnktZ01hcFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZ01hcCA9ICR0aGlzLmdNYXAob3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlZiA9IGdNYXAuZGF0YSgnZ01hcC5yZWZlcmVuY2UnKTtcclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgaW4gdGhlIG1hcCByZWZlcmVuY2VzIGxpc3RcclxuICAgICAgICAgICAgICAgIGdNYXBSZWZzLnB1c2gocmVmKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIHN0eWxlc1xyXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoJ3N0eWxlZCcpICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IE1hcFN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTsgLy9lYWNoXHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ3VzdG9tIGpRdWVyeVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRWZWN0b3JNYXApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRWZWN0b3JNYXAoKSB7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gJCgnW2RhdGEtdmVjdG9yLW1hcF0nKTtcclxuXHJcbiAgICAgICAgdmFyIHNlcmllc0RhdGEgPSB7XHJcbiAgICAgICAgICAgICdDQSc6IDExMTAwLCAvLyBDYW5hZGFcclxuICAgICAgICAgICAgJ0RFJzogMjUxMCwgLy8gR2VybWFueVxyXG4gICAgICAgICAgICAnRlInOiAzNzEwLCAvLyBGcmFuY2VcclxuICAgICAgICAgICAgJ0FVJzogNTcxMCwgLy8gQXVzdHJhbGlhXHJcbiAgICAgICAgICAgICdHQic6IDgzMTAsIC8vIEdyZWF0IEJyaXRhaW5cclxuICAgICAgICAgICAgJ1JVJzogOTMxMCwgLy8gUnVzc2lhXHJcbiAgICAgICAgICAgICdCUic6IDY2MTAsIC8vIEJyYXppbFxyXG4gICAgICAgICAgICAnSU4nOiA3ODEwLCAvLyBJbmRpYVxyXG4gICAgICAgICAgICAnQ04nOiA0MzEwLCAvLyBDaGluYVxyXG4gICAgICAgICAgICAnVVMnOiA4MzksIC8vIFVTQVxyXG4gICAgICAgICAgICAnU0EnOiA0MTAgLy8gU2F1ZGkgQXJhYmlhXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIG1hcmtlcnNEYXRhID0gW1xyXG4gICAgICAgICAgICB7IGxhdExuZzogWzQxLjkwLCAxMi40NV0sIG5hbWU6ICdWYXRpY2FuIENpdHknIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDMuNzMsIDcuNDFdLCBuYW1lOiAnTW9uYWNvJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWy0wLjUyLCAxNjYuOTNdLCBuYW1lOiAnTmF1cnUnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbLTguNTEsIDE3OS4yMV0sIG5hbWU6ICdUdXZhbHUnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNy4xMSwgMTcxLjA2XSwgbmFtZTogJ01hcnNoYWxsIElzbGFuZHMnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbMTcuMywgLTYyLjczXSwgbmFtZTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFszLjIsIDczLjIyXSwgbmFtZTogJ01hbGRpdmVzJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzM1Ljg4LCAxNC41XSwgbmFtZTogJ01hbHRhJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzQxLjAsIC03MS4wNl0sIG5hbWU6ICdOZXcgRW5nbGFuZCcgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxMi4wNSwgLTYxLjc1XSwgbmFtZTogJ0dyZW5hZGEnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbMTMuMTYsIC01OS41NV0sIG5hbWU6ICdCYXJiYWRvcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxNy4xMSwgLTYxLjg1XSwgbmFtZTogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbLTQuNjEsIDU1LjQ1XSwgbmFtZTogJ1NleWNoZWxsZXMnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNy4zNSwgMTM0LjQ2XSwgbmFtZTogJ1BhbGF1JyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzQyLjUsIDEuNTFdLCBuYW1lOiAnQW5kb3JyYScgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIG5ldyBWZWN0b3JNYXAoZWxlbWVudCwgc2VyaWVzRGF0YSwgbWFya2Vyc0RhdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEpWRUNUT1IgTUFQXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgLy8gQWxsb3cgR2xvYmFsIGFjY2Vzc1xyXG4gICAgd2luZG93LlZlY3Rvck1hcCA9IFZlY3Rvck1hcFxyXG5cclxuICAgIHZhciBkZWZhdWx0Q29sb3JzID0ge1xyXG4gICAgICAgIG1hcmtlckNvbG9yOiAnIzIzYjdlNScsIC8vIHRoZSBtYXJrZXIgcG9pbnRzXHJcbiAgICAgICAgYmdDb2xvcjogJ3RyYW5zcGFyZW50JywgLy8gdGhlIGJhY2tncm91bmRcclxuICAgICAgICBzY2FsZUNvbG9yczogWycjODc4YzlhJ10sIC8vIHRoZSBjb2xvciBvZiB0aGUgcmVnaW9uIGluIHRoZSBzZXJpZVxyXG4gICAgICAgIHJlZ2lvbkZpbGw6ICcjYmJiZWM2JyAvLyB0aGUgYmFzZSByZWdpb24gY29sb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gVmVjdG9yTWFwKGVsZW1lbnQsIHNlcmllc0RhdGEsIG1hcmtlcnNEYXRhKSB7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGF0dHJzID0gZWxlbWVudC5kYXRhKCksXHJcbiAgICAgICAgICAgIG1hcEhlaWdodCA9IGF0dHJzLmhlaWdodCB8fCAnMzAwJyxcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1hcmtlckNvbG9yOiBhdHRycy5tYXJrZXJDb2xvciB8fCBkZWZhdWx0Q29sb3JzLm1hcmtlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcjogYXR0cnMuYmdDb2xvciB8fCBkZWZhdWx0Q29sb3JzLmJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogYXR0cnMuc2NhbGUgfHwgMSxcclxuICAgICAgICAgICAgICAgIHNjYWxlQ29sb3JzOiBhdHRycy5zY2FsZUNvbG9ycyB8fCBkZWZhdWx0Q29sb3JzLnNjYWxlQ29sb3JzLFxyXG4gICAgICAgICAgICAgICAgcmVnaW9uRmlsbDogYXR0cnMucmVnaW9uRmlsbCB8fCBkZWZhdWx0Q29sb3JzLnJlZ2lvbkZpbGwsXHJcbiAgICAgICAgICAgICAgICBtYXBOYW1lOiBhdHRycy5tYXBOYW1lIHx8ICd3b3JsZF9taWxsX2VuJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBlbGVtZW50LmNzcygnaGVpZ2h0JywgbWFwSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaW5pdChlbGVtZW50LCBvcHRpb25zLCBzZXJpZXNEYXRhLCBtYXJrZXJzRGF0YSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoJGVsZW1lbnQsIG9wdHMsIHNlcmllcywgbWFya2Vycykge1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnQudmVjdG9yTWFwKHtcclxuICAgICAgICAgICAgICAgIG1hcDogb3B0cy5tYXBOYW1lLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBvcHRzLmJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB6b29tTWluOiAxLFxyXG4gICAgICAgICAgICAgICAgem9vbU1heDogOCxcclxuICAgICAgICAgICAgICAgIHpvb21PblNjcm9sbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZWdpb25TdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpbGwnOiBvcHRzLnJlZ2lvbkZpbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaWxsLW9wYWNpdHknOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLXdpZHRoJzogMS41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLW9wYWNpdHknOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmlsbC1vcGFjaXR5JzogMC44XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnYmx1ZSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSG92ZXI6IHt9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9jdXNPbjogeyB4OiAwLjQsIHk6IDAuNiwgc2NhbGU6IG9wdHMuc2NhbGUgfSxcclxuICAgICAgICAgICAgICAgIG1hcmtlclN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBvcHRzLm1hcmtlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IG9wdHMubWFya2VyQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25SZWdpb25MYWJlbFNob3c6IGZ1bmN0aW9uKGUsIGVsLCBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcmllcyAmJiBzZXJpZXNbY29kZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmh0bWwoZWwuaHRtbCgpICsgJzogJyArIHNlcmllc1tjb2RlXSArICcgdmlzaXRvcnMnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXJrZXJzOiBtYXJrZXJzLFxyXG4gICAgICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBzZXJpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBvcHRzLnNjYWxlQ29sb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVGdW5jdGlvbjogJ3BvbHlub21pYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IC8vIGVuZCBpbml0XHJcbiAgICB9O1xyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLyoqXHJcbiAqIFVzZWQgZm9yIHVzZXIgcGFnZXNcclxuICogTG9naW4gYW5kIFJlZ2lzdGVyXHJcbiAqL1xyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0UGFyc2xleUZvclBhZ2VzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UGFyc2xleUZvclBhZ2VzKCkge1xyXG5cclxuICAgICAgICAvLyBQYXJzbGV5IG9wdGlvbnMgc2V0dXAgZm9yIGJvb3RzdHJhcCB2YWxpZGF0aW9uIGNsYXNzZXNcclxuICAgICAgICB2YXIgcGFyc2xleU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGVycm9yQ2xhc3M6ICdpcy1pbnZhbGlkJyxcclxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnaXMtdmFsaWQnLFxyXG4gICAgICAgICAgICBjbGFzc0hhbmRsZXI6IGZ1bmN0aW9uIChQYXJzbGV5RmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9IFBhcnNsZXlGaWVsZC4kZWxlbWVudC5wYXJlbnRzKCcuZm9ybS1ncm91cCcpLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsLmxlbmd0aCkgLy8gc3VwcG9ydCBjdXN0b20gY2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBlbCA9IFBhcnNsZXlGaWVsZC4kZWxlbWVudC5wYXJlbnRzKCcuYy1jaGVja2JveCcpLmZpbmQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yc0NvbnRhaW5lcjogZnVuY3Rpb24gKFBhcnNsZXlGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNsZXlGaWVsZC4kZWxlbWVudC5wYXJlbnRzKCcuZm9ybS1ncm91cCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcnNXcmFwcGVyOiAnPGRpdiBjbGFzcz1cInRleHQtaGVscFwiPicsXHJcbiAgICAgICAgICAgIGVycm9yVGVtcGxhdGU6ICc8ZGl2PjwvZGl2PidcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLy8vIFJlZ2lzdGVyIGZvcm0gdmFsaWRhdGlvbiB3aXRoIFBhcnNsZXlcclxuICAgICAgICB2YXIgZm9ybUxvZ2luID0gJChcIiNmb3JtTG9naW5cIik7XHJcbiAgICAgICAgaWYgKGZvcm1Mb2dpbi5sZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcm1Mb2dpbi5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1MaXN0YXJBbW9ydGl6YWNpb24gPSAkKFwiI2Zvcm1MaXN0YXJBbW9ydGl6YWNpb25cIik7XHJcbiAgICAgICAgaWYgKGZvcm1MaXN0YXJBbW9ydGl6YWNpb24ubGVuZ3RoKVxyXG4gICAgICAgICAgICBmb3JtTGlzdGFyQW1vcnRpemFjaW9uLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgZm9ybUNhbWJpb0NsYXZlID0gJChcIiNmb3JtQ2FtYmlvQ2xhdmVcIik7XHJcbiAgICAgICAgaWYgKGZvcm1DYW1iaW9DbGF2ZS5sZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcm1DYW1iaW9DbGF2ZS5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1SZWN1cGVyYXJDbGF2ZSA9ICQoXCIjZm9ybVJlY3VwZXJhckNsYXZlXCIpO1xyXG4gICAgICAgIGlmIChmb3JtUmVjdXBlcmFyQ2xhdmUubGVuZ3RoKVxyXG4gICAgICAgICAgICBmb3JtUmVjdXBlcmFyQ2xhdmUucGFyc2xleShwYXJzbGV5T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciBmb3JtQ29udGFiaWxpemFyID0gJChcIiNmb3JtQ29udGFiaWxpemFyXCIpO1xyXG4gICAgICAgIGlmIChmb3JtQ29udGFiaWxpemFyLmxlbmd0aClcclxuICAgICAgICAgICAgZm9ybUNvbnRhYmlsaXphci5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1DcmVhckdsb2JhbCA9ICQoXCIjZm9ybUNyZWFyR2xvYmFsXCIpO1xyXG4gICAgICAgIGlmIChmb3JtQ3JlYXJHbG9iYWwubGVuZ3RoKVxyXG4gICAgICAgICAgICBmb3JtQ3JlYXJHbG9iYWwucGFyc2xleShwYXJzbGV5T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciBmb3JtRWRpdGFyR2xvYmFsID0gJChcIiNmb3JtRWRpdGFyR2xvYmFsXCIpO1xyXG4gICAgICAgIGlmIChmb3JtRWRpdGFyR2xvYmFsLmxlbmd0aClcclxuICAgICAgICAgICAgZm9ybUVkaXRhckdsb2JhbC5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1DcmVhck9yZGVuRGVDb21wcmEgPSAkKFwiI2Zvcm1DcmVhck9yZGVuRGVDb21wcmFcIik7XHJcbiAgICAgICAgaWYgKGZvcm1DcmVhck9yZGVuRGVDb21wcmEubGVuZ3RoKVxyXG4gICAgICAgICAgICBmb3JtQ3JlYXJPcmRlbkRlQ29tcHJhLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgZm9ybURpcmVjY2lvbkNhc2FHbG9iYWwgPSAkKFwiI2Zvcm1EaXJlY2Npb25DYXNhR2xvYmFsXCIpO1xyXG4gICAgICAgIGlmIChmb3JtRGlyZWNjaW9uQ2FzYUdsb2JhbC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcm1EaXJlY2Npb25DYXNhR2xvYmFsLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwidmFyIHNlY3VyaXR5X0luZGV4ID0ge1xyXG5cclxuICAgIGxvZ2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICAgICAkKFwiI2Zvcm1Mb2dpblwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcm0ucGFyc2xleSgpLnZhbGlkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucGFyc2xleSgpLmlzVmFsaWQoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9naW5WaWV3TW9kZWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRW1haWxcIjogJChcIiNlbWFpbFwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQYXNzd29yZFwiOiAkKFwiI3Bhc3N3b3JkXCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJlbWVtYmVyTWVcIjogJChcIiNyZW1lbWJlck1lXCIpLmlzKCc6Y2hlY2tlZCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9ICQoJ2lucHV0W25hbWU9XCJfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiXScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIganNvbkFQSTtcclxuICAgICAgICAgICAgICAgICAgICAkLmdldEpTT04oJ2h0dHBzOi8vaXBhcGkuY28vanNvbi8nLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uQVBJID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJvb3RIb3N0ICsgJ1NlY3VyaXR5L0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW46IHRva2VuLCBtb2RlbDogbG9naW5WaWV3TW9kZWwsIEpzb25BUEk6IGpzb25BUEkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5tc24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJvb3RIb3N0ICsgXCJIb21lL1dlbGNvbWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIlZhbGlkYWNpw7NuXCIsIHJlc3BvbnNlLm1zbiwgXCJ3YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMjAwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgcmVzcG9uc2UuZXJyb3IsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBcIkVycm9yIGVuIGVsIG3DqXRvZG8gbG9naW4gXFxuXCIgKyBleCwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxvZ09mZjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogcm9vdEhvc3QgKyAnU2VjdXJpdHkvTG9nT2ZmJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5tc24gPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJvb3RIb3N0ICsgXCJIb21lL0luZGV4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIHJlc3BvbnNlLm1zbiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuXHJcbiAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBcIkVycm9yIGVuIGVsIG3DqXRvZG8gbG9nT2ZmIFxcblwiICsgZXgsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvcmdvdFBhc3N3b3JkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICAgICAkKFwiI2Zvcm1SZWN1cGVyYXJDbGF2ZVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybS5wYXJzbGV5KCkudmFsaWRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5wYXJzbGV5KCkuaXNWYWxpZCgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWFpbCA9ICQoXCIjcmVzZXRJbnB1dEVtYWlsMVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gJCgnaW5wdXRbbmFtZT1cIl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJvb3RIb3N0ICsgJ1NlY3VyaXR5L0ZvcmdvdFBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbjogdG9rZW4sIEVtYWlsOiBlbWFpbCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubXNuLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk5vdGlmaWNhY2nDs25cIiwgcmVzcG9uc2UubXNuLCBcInN1Y2Nlc3NcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIHJlc3BvbnNlLmVycm9yLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIGV4LCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgXCJFcnJvciBlbiBlbCBtw6l0b2RvIGZvcmdvdFBhc3N3b3JkIFxcblwiICsgZXgsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07IiwiLyoqXHJcbiAqIENsYXNlIHF1ZSBjb250aWVuZSBsb3MgbcOpdG9kbyBwYXJhIGNyZWFyIHVuIHVzdWFyaW8uXHJcbiAqICovXHJcblxyXG5cclxudmFyIHNlY3VyaXR5X0NyZWFyVXN1YXJpbyA9IHtcclxuXHJcbiAgICBjcmVhclVzdWFyaW86IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgICQoXCIjZm9ybUNyZWFyR2xvYmFsXCIpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcm0ucGFyc2xleSgpLnZhbGlkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucGFyc2xleSgpLmlzVmFsaWQoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybUNyZWFyR2xvYmFsID0gJChcIiNmb3JtQ3JlYXJHbG9iYWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUNyZWFyR2xvYmFsWzBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcm9vdEhvc3QgKyAnU2VjdXJpdHkvQ3JlYXJVc3VhcmlvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm1zbiA9PT0gXCJzdWNjZXNzXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk5vdGlmaWNhY2nDs25cIiwgXCJFbCB1c3VhcmlvIHNlIGNyZW8gY29ycmVjdGFtZW50ZSBlbiBlbCBzaXN0ZW1hLlwiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcm9vdEhvc3QgKyBcIkhvbWUvSW5kZXhcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgcmVzcG9uc2UuZXJyb3IsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgZXgsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBcIkVycm9yIGVuIGVsIG3DqXRvZG8gY3JlYXJVc3VhcmlvIFxcblwiICsgZXgsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn07IiwiJChkb2N1bWVudCkub24oJ2NoYW5nZScsICdbZGF0YS1jYXNjYWRlLWNvbWJvXScsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgIFxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNhc2NhZGUtY29tYm8nKTtcclxuXHJcbiAgICB2YXIgdXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNhc2NhZGUtY29tYm8tc291cmNlJyk7XHJcblxyXG4gICAgdmFyIHBhcmFtTmFtZSA9ICQodGhpcykuYXR0cignZGF0YS1jYXNjYWRlLWNvbWJvLXBhcmFtLW5hbWUnKTtcclxuXHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZGF0YVtwYXJhbU5hbWVdID0gaWQ7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7IGlkOiAkKHRoaXMpLnZhbCgpIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICQoaWQpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChkYXRhLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGluZGV4LCB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyB0eXBlLmlkICsgJ1wiPicgKyB0eXBlLk5vbWJyZSArICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICQoaWQpLmFwcGVuZChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xyXG5cclxuICAgICAgICAgICAgJChpZCkudHJpZ2dlcihcImNob3Nlbjp1cGRhdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2Zvcm0nKS5wYXJzbGV5KCk7XHJcbn0pO1xyXG53aW5kb3cuUGFyc2xleS5vbignZmllbGQ6ZXJyb3InLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUaGlzIGdsb2JhbCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBmb3IgYW55IGZpZWxkIHRoYXQgZmFpbHMgdmFsaWRhdGlvbi5cclxuICAgIHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnLnRhYi1wYW5lJykuYWRkQ2xhc3MoJ3ZhbGlkYXRpb25fZXJyb3InKTtcclxuICAgICQoJy50YWItY29udGVudCAudGFiLXBhbmUudmFsaWRhdGlvbl9lcnJvcjplcSgwKScpLmFkZENsYXNzKCdmaXJzdF90YWJfd2l0aF9lcnJvcnMnKTtcclxuICAgIGN1cnJlbnRfdGFiX2lkID0gJCgnLnRhYi1jb250ZW50IC50YWItcGFuZS52YWxpZGF0aW9uX2Vycm9yLmZpcnN0X3RhYl93aXRoX2Vycm9ycycpLmF0dHIoJ2lkJyk7XHJcbiAgICAkKCcubmF2LXRhYnMgYVtocmVmPVwiJyArICcjJyArIGN1cnJlbnRfdGFiX2lkICsgJ1wiXScpLnRhYignc2hvdycpO1xyXG4gICAgJCgnLm5hdi10YWJzIGFbaHJlZj1cIicgKyAnIycgKyAodGhpcy4kZWxlbWVudC5jbG9zZXN0KCcudGFiLXBhbmUnKS5hdHRyKCdpZCcpKSArICdcIl0nKS5hZGRDbGFzcygndmFsaWRhdGlvbl9lcnJvcnMnKTtcclxufSk7IFxyXG53aW5kb3cuUGFyc2xleS5vbignZmllbGQ6c3VjY2VzcycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFRoaXMgZ2xvYmFsIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGZvciBhbnkgZmllbGQgdGhhdCBmYWlscyB2YWxpZGF0aW9uLlxyXG4gICAgaWYgKHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnLnZhbGlkYXRpb25fZXJyb3InKS5jaGlsZHJlbigpLmZpbmQoJy5wYXJzbGV5LWVycm9yJykubGVuZ3RoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcubmF2LXRhYnMgYVtocmVmPVwiJyArICcjJyArICh0aGlzLiRlbGVtZW50LmNsb3Nlc3QoJy50YWItcGFuZScpLmF0dHIoJ2lkJykpICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd2YWxpZGF0aW9uX2Vycm9ycycpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpKTtcclxuICAgIH1cclxufSk7IiwiLy8gVW5vYnRydXNpdmUgQWpheCBzdXBwb3J0IGxpYnJhcnkgZm9yIGpRdWVyeVxyXG4vLyBDb3B5cmlnaHQgKEMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gQHZlcnNpb24gdjMuMi41XHJcbi8vIFxyXG4vLyBNaWNyb3NvZnQgZ3JhbnRzIHlvdSB0aGUgcmlnaHQgdG8gdXNlIHRoZXNlIHNjcmlwdCBmaWxlcyBmb3IgdGhlIHNvbGVcclxuLy8gcHVycG9zZSBvZiBlaXRoZXI6IChpKSBpbnRlcmFjdGluZyB0aHJvdWdoIHlvdXIgYnJvd3NlciB3aXRoIHRoZSBNaWNyb3NvZnRcclxuLy8gd2Vic2l0ZSBvciBvbmxpbmUgc2VydmljZSwgc3ViamVjdCB0byB0aGUgYXBwbGljYWJsZSBsaWNlbnNpbmcgb3IgdXNlXHJcbi8vIHRlcm1zOyBvciAoaWkpIHVzaW5nIHRoZSBmaWxlcyBhcyBpbmNsdWRlZCB3aXRoIGEgTWljcm9zb2Z0IHByb2R1Y3Qgc3ViamVjdFxyXG4vLyB0byB0aGF0IHByb2R1Y3QncyBsaWNlbnNlIHRlcm1zLiBNaWNyb3NvZnQgcmVzZXJ2ZXMgYWxsIG90aGVyIHJpZ2h0cyB0byB0aGVcclxuLy8gZmlsZXMgbm90IGV4cHJlc3NseSBncmFudGVkIGJ5IE1pY3Jvc29mdCwgd2hldGhlciBieSBpbXBsaWNhdGlvbiwgZXN0b3BwZWxcclxuLy8gb3Igb3RoZXJ3aXNlLiBJbnNvZmFyIGFzIGEgc2NyaXB0IGZpbGUgaXMgZHVhbCBsaWNlbnNlZCB1bmRlciBHUEwsXHJcbi8vIE1pY3Jvc29mdCBuZWl0aGVyIHRvb2sgdGhlIGNvZGUgdW5kZXIgR1BMIG5vciBkaXN0cmlidXRlcyBpdCB0aGVyZXVuZGVyIGJ1dFxyXG4vLyB1bmRlciB0aGUgdGVybXMgc2V0IG91dCBpbiB0aGlzIHBhcmFncmFwaC4gQWxsIG5vdGljZXMgYW5kIGxpY2Vuc2VzXHJcbi8vIGJlbG93IGFyZSBmb3IgaW5mb3JtYXRpb25hbCBwdXJwb3NlcyBvbmx5LlxyXG5cclxuLypqc2xpbnQgd2hpdGU6IHRydWUsIGJyb3dzZXI6IHRydWUsIG9uZXZhcjogdHJ1ZSwgdW5kZWY6IHRydWUsIG5vbWVuOiB0cnVlLCBlcWVxZXE6IHRydWUsIHBsdXNwbHVzOiB0cnVlLCBiaXR3aXNlOiB0cnVlLCByZWdleHA6IHRydWUsIG5ld2NhcDogdHJ1ZSwgaW1tZWQ6IHRydWUsIHN0cmljdDogZmFsc2UgKi9cclxuLypnbG9iYWwgd2luZG93OiBmYWxzZSwgalF1ZXJ5OiBmYWxzZSAqL1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICB2YXIgZGF0YV9jbGljayA9IFwidW5vYnRydXNpdmVBamF4Q2xpY2tcIixcclxuICAgICAgICBkYXRhX3RhcmdldCA9IFwidW5vYnRydXNpdmVBamF4Q2xpY2tUYXJnZXRcIixcclxuICAgICAgICBkYXRhX3ZhbGlkYXRpb24gPSBcInVub2J0cnVzaXZlVmFsaWRhdGlvblwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZ1bmN0aW9uKGNvZGUsIGFyZ05hbWVzKSB7XHJcbiAgICAgICAgdmFyIGZuID0gd2luZG93LCBwYXJ0cyA9IChjb2RlIHx8IFwiXCIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICB3aGlsZSAoZm4gJiYgcGFydHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZuID0gZm5bcGFydHMuc2hpZnQoKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgKGZuKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJnTmFtZXMucHVzaChjb2RlKTtcclxuICAgICAgICByZXR1cm4gRnVuY3Rpb24uY29uc3RydWN0b3IuYXBwbHkobnVsbCwgYXJnTmFtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTWV0aG9kUHJveHlTYWZlKG1ldGhvZCkge1xyXG4gICAgICAgIHJldHVybiBtZXRob2QgPT09IFwiR0VUXCIgfHwgbWV0aG9kID09PSBcIlBPU1RcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhc3luY09uQmVmb3JlU2VuZCh4aHIsIG1ldGhvZCkge1xyXG4gICAgICAgIGlmICghaXNNZXRob2RQcm94eVNhZmUobWV0aG9kKSkge1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtSFRUUC1NZXRob2QtT3ZlcnJpZGVcIiwgbWV0aG9kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXN5bmNPblN1Y2Nlc3MoZWxlbWVudCwgZGF0YSwgY29udGVudFR5cGUpIHtcclxuICAgICAgICB2YXIgbW9kZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LWphdmFzY3JpcHRcIikgIT09IC0xKSB7ICAvLyBqUXVlcnkgYWxyZWFkeSBleGVjdXRlcyBKYXZhU2NyaXB0IGZvciB1c1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb2RlID0gKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LW1vZGVcIikgfHwgXCJcIikudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAkKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LXVwZGF0ZVwiKSkuZWFjaChmdW5jdGlvbiAoaSwgdXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3A7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJCRUZPUkVcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKHVwZGF0ZSkucHJlcGVuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBRlRFUlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICQodXBkYXRlKS5hcHBlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUkVQTEFDRS1XSVRIXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJCh1cGRhdGUpLnJlcGxhY2VXaXRoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAkKHVwZGF0ZSkuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFzeW5jUmVxdWVzdChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGNvbmZpcm0sIGxvYWRpbmcsIG1ldGhvZCwgZHVyYXRpb247XHJcblxyXG4gICAgICAgIGNvbmZpcm0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYWpheC1jb25maXJtXCIpO1xyXG4gICAgICAgIGlmIChjb25maXJtICYmICF3aW5kb3cuY29uZmlybShjb25maXJtKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkaW5nID0gJChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYWpheC1sb2FkaW5nXCIpKTtcclxuICAgICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWxvYWRpbmctZHVyYXRpb25cIiksIDEwKSB8fCAwO1xyXG5cclxuICAgICAgICAkLmV4dGVuZChvcHRpb25zLCB7XHJcbiAgICAgICAgICAgIHR5cGU6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LW1ldGhvZFwiKSB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHVybDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtdXJsXCIpIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY2FjaGU6IChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYWpheC1jYWNoZVwiKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIixcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGFzeW5jT25CZWZvcmVTZW5kKHhociwgbWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGdldEZ1bmN0aW9uKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWJlZ2luXCIpLCBbXCJ4aHJcIl0pLmFwcGx5KGVsZW1lbnQsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcuc2hvdyhkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZy5oaWRlKGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGdldEZ1bmN0aW9uKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWNvbXBsZXRlXCIpLCBbXCJ4aHJcIiwgXCJzdGF0dXNcIl0pLmFwcGx5KGVsZW1lbnQsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICAgICAgYXN5bmNPblN1Y2Nlc3MoZWxlbWVudCwgZGF0YSwgeGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpIHx8IFwidGV4dC9odG1sXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2V0RnVuY3Rpb24oZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtc3VjY2Vzc1wiKSwgW1wiZGF0YVwiLCBcInN0YXR1c1wiLCBcInhoclwiXSkuYXBwbHkoZWxlbWVudCwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGdldEZ1bmN0aW9uKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWZhaWx1cmVcIiksIFtcInhoclwiLCBcInN0YXR1c1wiLCBcImVycm9yXCJdKS5hcHBseShlbGVtZW50LCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wdGlvbnMuZGF0YS5wdXNoKHsgbmFtZTogXCJYLVJlcXVlc3RlZC1XaXRoXCIsIHZhbHVlOiBcIlhNTEh0dHBSZXF1ZXN0XCIgfSk7XHJcblxyXG4gICAgICAgIG1ldGhvZCA9IG9wdGlvbnMudHlwZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGlmICghaXNNZXRob2RQcm94eVNhZmUobWV0aG9kKSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnR5cGUgPSBcIlBPU1RcIjtcclxuICAgICAgICAgICAgb3B0aW9ucy5kYXRhLnB1c2goeyBuYW1lOiBcIlgtSFRUUC1NZXRob2QtT3ZlcnJpZGVcIiwgdmFsdWU6IG1ldGhvZCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuYWpheChvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShmb3JtKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkYXRpb25JbmZvID0gJChmb3JtKS5kYXRhKGRhdGFfdmFsaWRhdGlvbik7XHJcbiAgICAgICAgcmV0dXJuICF2YWxpZGF0aW9uSW5mbyB8fCAhdmFsaWRhdGlvbkluZm8udmFsaWRhdGUgfHwgdmFsaWRhdGlvbkluZm8udmFsaWRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiYVtkYXRhLWFqYXg9dHJ1ZV1cIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFzeW5jUmVxdWVzdCh0aGlzLCB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5ocmVmLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBbXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImZvcm1bZGF0YS1hamF4PXRydWVdIGlucHV0W3R5cGU9aW1hZ2VdXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGV2dC50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgdGFyZ2V0ID0gJChldnQudGFyZ2V0KSxcclxuICAgICAgICAgICAgZm9ybSA9ICQodGFyZ2V0LnBhcmVudHMoXCJmb3JtXCIpWzBdKSxcclxuICAgICAgICAgICAgb2Zmc2V0ID0gdGFyZ2V0Lm9mZnNldCgpO1xyXG5cclxuICAgICAgICBmb3JtLmRhdGEoZGF0YV9jbGljaywgW1xyXG4gICAgICAgICAgICB7IG5hbWU6IG5hbWUgKyBcIi54XCIsIHZhbHVlOiBNYXRoLnJvdW5kKGV2dC5wYWdlWCAtIG9mZnNldC5sZWZ0KSB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IG5hbWUgKyBcIi55XCIsIHZhbHVlOiBNYXRoLnJvdW5kKGV2dC5wYWdlWSAtIG9mZnNldC50b3ApIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlRGF0YShkYXRhX2NsaWNrKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJmb3JtW2RhdGEtYWpheD10cnVlXSA6c3VibWl0XCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGV2dC5jdXJyZW50VGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgIHRhcmdldCA9ICQoZXZ0LnRhcmdldCksXHJcbiAgICAgICAgICAgIGZvcm0gPSAkKHRhcmdldC5wYXJlbnRzKFwiZm9ybVwiKVswXSk7XHJcblxyXG4gICAgICAgIGZvcm0uZGF0YShkYXRhX2NsaWNrLCBuYW1lID8gW3sgbmFtZTogbmFtZSwgdmFsdWU6IGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlIH1dIDogW10pO1xyXG4gICAgICAgIGZvcm0uZGF0YShkYXRhX3RhcmdldCwgdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlRGF0YShkYXRhX2NsaWNrKTtcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmVEYXRhKGRhdGFfdGFyZ2V0KTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKFwic3VibWl0XCIsIFwiZm9ybVtkYXRhLWFqYXg9dHJ1ZV1cIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIHZhciBjbGlja0luZm8gPSAkKHRoaXMpLmRhdGEoZGF0YV9jbGljaykgfHwgW10sXHJcbiAgICAgICAgICAgIGNsaWNrVGFyZ2V0ID0gJCh0aGlzKS5kYXRhKGRhdGFfdGFyZ2V0KSxcclxuICAgICAgICAgICAgaXNDYW5jZWwgPSBjbGlja1RhcmdldCAmJiAoY2xpY2tUYXJnZXQuaGFzQ2xhc3MoXCJjYW5jZWxcIikgfHwgY2xpY2tUYXJnZXQuYXR0cignZm9ybW5vdmFsaWRhdGUnKSAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIWlzQ2FuY2VsICYmICF2YWxpZGF0ZSh0aGlzKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jUmVxdWVzdCh0aGlzLCB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5hY3Rpb24sXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMubWV0aG9kIHx8IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGNsaWNrSW5mby5jb25jYXQoJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0oalF1ZXJ5KSk7XHJcbiIsInZhciB3YWl0aW5nRGlhbG9nID0gd2FpdGluZ0RpYWxvZyB8fCAoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBDcmVhdGluZyBtb2RhbCBkaWFsb2cncyBET01cclxuICAgIHZhciAkZGlhbG9nID0gJChcclxuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsXCIgZGF0YS1iYWNrZHJvcD1cInN0YXRpY1wiIGRhdGEta2V5Ym9hcmQ9XCJmYWxzZVwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9XCJwYWRkaW5nLXRvcDoyMCU7XCI+JyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbVwiPicgK1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiIHN0eWxlPVwiXCI+JyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJ3aGlybCBkdW9cIiBzdHlsZT1cIndpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206MDtcIj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgJzwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdMb2FkaW5nJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoe1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nU2l6ZTogJ20nLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NUeXBlOiAnJyxcclxuICAgICAgICAgICAgICAgIG9uSGlkZTogbnVsbCAvLyBUaGlzIGNhbGxiYWNrIHJ1bnMgYWZ0ZXIgdGhlIGRpYWxvZyB3YXMgaGlkZGVuXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29uZmlndXJpbmcgZGlhbG9nXHJcbiAgICAgICAgICAgICRkaWFsb2cuZmluZCgnLm1vZGFsLWRpYWxvZycpLmF0dHIoJ2NsYXNzJywgJ21vZGFsLWRpYWxvZycpLmFkZENsYXNzKCdtb2RhbC0nICsgc2V0dGluZ3MuZGlhbG9nU2l6ZSk7XHJcbiAgICAgICAgICAgICRkaWFsb2cuZmluZCgnLnByb2dyZXNzLWJhcicpLmF0dHIoJ2NsYXNzJywgJ3Byb2dyZXNzLWJhcicpO1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MucHJvZ3Jlc3NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAkZGlhbG9nLmZpbmQoJy5wcm9ncmVzcy1iYXInKS5hZGRDbGFzcygncHJvZ3Jlc3MtYmFyLScgKyBzZXR0aW5ncy5wcm9ncmVzc1R5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vJGRpYWxvZy5maW5kKCdoMycpLnRleHQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIEFkZGluZyBjYWxsYmFja3NcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5vbkhpZGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICRkaWFsb2cub2ZmKCdoaWRkZW4uYnMubW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkhpZGUuY2FsbCgkZGlhbG9nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkZGlhbG9nLm1vZGFsKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuXHRcdCAqIENsb3NlcyBkaWFsb2dcclxuXHRcdCAqL1xyXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkZGlhbG9nLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbn0pKGpRdWVyeSk7Il19

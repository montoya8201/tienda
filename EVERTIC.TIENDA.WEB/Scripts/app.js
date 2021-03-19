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
var operacionesComercio = {
    crearOrdenDeCompraAsync: function () {

        'use strict';
        $("#formCrearOrdenDeCompra").submit(function (e) {

            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {


                    var token = $('input[name="__RequestVerificationToken"]').val();


                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Compras/CrearOrdenDeCompraAsync',
                        data: { __RequestVerificationToken: token },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn === "success") {

                                swal("Notificación", "La orden de compra se creó correctamente en el sistema.", "success");


                            } else {

                                swal("Oops!", response.error, "error");
                            }
                        },
                        error: function (ex) {

                            swal("Oops!", ex, "error");
                        }
                    });
                }

            }
            catch (ex) {

                swal("Oops!", "Error en el método crearOrdenDeCompraAsync \n" + ex, "error");
            }
        });

    }

};
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5pbml0LmpzIiwiY2hhcnRzL2NoYXJ0LWtub2IuanMiLCJjaGFydHMvY2hhcnQuanMiLCJjaGFydHMvY2hhcnRpc3QuanMiLCJjaGFydHMvZWFzeXBpZWNoYXJ0LmpzIiwiY2hhcnRzL2Zsb3QuanMiLCJjaGFydHMvbW9ycmlzLmpzIiwiY2hhcnRzL3JpY2tzaGF3LmpzIiwiY2hhcnRzL3NwYXJrbGluZS5qcyIsImNvbWVyY2lvL0NvbWVyY2lvLmpzIiwiY29tbW9uL2Jvb3RzdHJhcC1zdGFydC5qcyIsImNvbW1vbi9jYXJkLXRvb2xzLmpzIiwiY29tbW9uL2NvbnN0YW50cy5qcyIsImNvbW1vbi9mdWxsc2NyZWVuLmpzIiwiY29tbW9uL2xvYWQtY3NzLmpzIiwiY29tbW9uL25hdmJhci1zZWFyY2guanMiLCJjb21tb24vbm93LmpzIiwiY29tbW9uL3J0bC5qcyIsImNvbW1vbi9zaWRlYmFyLmpzIiwiY29tbW9uL3NsaW1zY3JvbGwuanMiLCJjb21tb24vdGFibGUtY2hlY2thbGwuanMiLCJjb21tb24vdG9nZ2xlLXN0YXRlLmpzIiwiY29tbW9uL3RyaWdnZXItcmVzaXplLmpzIiwiZWxlbWVudHMvY2FyZHMuanMiLCJlbGVtZW50cy9uZXN0YWJsZS5qcyIsImVsZW1lbnRzL25vdGlmeS5qcyIsImVsZW1lbnRzL3BsYXktYW5pbWF0aW9uLmpzIiwiZWxlbWVudHMvcG9ybGV0cy5qcyIsImVsZW1lbnRzL3NvcnRhYmxlLmpzIiwiZWxlbWVudHMvc3dlZXRhbGVydC5qcyIsImV4dHJhcy9jYWxlbmRhci5qcyIsImV4dHJhcy9qcWNsb3VkLmpzIiwiZXh0cmFzL3NlYXJjaC5qcyIsImZvcm1zL2NvbG9yLXBpY2tlci5qcyIsImZvcm1zL2Zvcm1zLmpzIiwiZm9ybXMvaW1hZ2Vjcm9wLmpzIiwiZm9ybXMvc2VsZWN0Mi5qcyIsImZvcm1zL3VwbG9hZC5qcyIsImZvcm1zL3dpemFyZC5qcyIsImZvcm1zL3hlZGl0YWJsZS5qcyIsIkdsb2JhbC9mdW5jaW9uZXNHbG9iYWxlcy5qcyIsIm1hcHMvZ21hcC5qcyIsIm1hcHMvdmVjdG9yLm1hcC5kZW1vLmpzIiwibWFwcy92ZWN0b3IubWFwLmpzIiwicGFnZXMvcGFnZXMuanMiLCJzZWN1cml0eS9JbmRleC5qcyIsInNlY3VyaXR5L19DcmVhclVzdWFyaW8uanMiLCJjYXNjYWRlLmNvbWJvLmpzIiwiY3VzdG9tLmpzIiwianF1ZXJ5LnVub2J0cnVzaXZlLWFqYXguanMiLCJ3YWl0aW5nRGlhbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5cUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9QQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICpcclxuICogXHJcbiAqIEVWRVJURUMgVGllbmRhXHJcbiAqIFZlcnNpb246IDEuMC4wXHJcbiAqIEF1dGhvcjogamhvbi5tb250b3lhQG91dGxvb2suY29tXHJcbiAqXHJcbiAqL1xyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGFwcGxpY2F0aW9uXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeScpO1xyXG4gICAgfVxyXG5cclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8vIFJlc3RvcmUgYm9keSBjbGFzc2VzXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XHJcbiAgICAgICAgbmV3IFN0YXRlVG9nZ2xlcigpLnJlc3RvcmVTdGF0ZSgkYm9keSk7XHJcblxyXG4gICAgICAgIC8vIGVuYWJsZSBzZXR0aW5ncyB0b2dnbGUgYWZ0ZXIgcmVzdG9yZVxyXG4gICAgICAgICQoJyNjaGstZml4ZWQnKS5wcm9wKCdjaGVja2VkJywgJGJvZHkuaGFzQ2xhc3MoJ2xheW91dC1maXhlZCcpKTtcclxuICAgICAgICAkKCcjY2hrLWNvbGxhcHNlZCcpLnByb3AoJ2NoZWNrZWQnLCAkYm9keS5oYXNDbGFzcygnYXNpZGUtY29sbGFwc2VkJykpO1xyXG4gICAgICAgICQoJyNjaGstY29sbGFwc2VkLXRleHQnKS5wcm9wKCdjaGVja2VkJywgJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLWNvbGxhcHNlZC10ZXh0JykpO1xyXG4gICAgICAgICQoJyNjaGstYm94ZWQnKS5wcm9wKCdjaGVja2VkJywgJGJvZHkuaGFzQ2xhc3MoJ2xheW91dC1ib3hlZCcpKTtcclxuICAgICAgICAkKCcjY2hrLWZsb2F0JykucHJvcCgnY2hlY2tlZCcsICRib2R5Lmhhc0NsYXNzKCdhc2lkZS1mbG9hdCcpKTtcclxuICAgICAgICAkKCcjY2hrLWhvdmVyJykucHJvcCgnY2hlY2tlZCcsICRib2R5Lmhhc0NsYXNzKCdhc2lkZS1ob3ZlcicpKTtcclxuXHJcbiAgICAgICAgLy8gV2hlbiByZWFkeSBkaXNwbGF5IHRoZSBvZmZzaWRlYmFyXHJcbiAgICAgICAgJCgnLm9mZnNpZGViYXIuZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cclxuICAgICAgICAvLyBEaXNhYmxlIHdhcm5pbmcgXCJTeW5jaHJvbm91cyBYTUxIdHRwUmVxdWVzdCBvbiB0aGUgbWFpbiB0aHJlYWQgaXMgZGVwcmVjYXRlZC4uXCJcclxuICAgICAgICAkLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24ob3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUikge1xyXG4gICAgICAgICAgICBvcHRpb25zLmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTsgLy8gZG9jIHJlYWR5XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBLbm9iIGNoYXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0S25vYik7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEtub2IoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5rbm9iKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBrbm9iTG9hZGVyT3B0aW9uczEgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJywgLy8gcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICBkaXNwbGF5SW5wdXQ6IHRydWUsXHJcbiAgICAgICAgICAgIGZnQ29sb3I6IEFQUF9DT0xPUlNbJ2luZm8nXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2tub2ItY2hhcnQxJykua25vYihrbm9iTG9hZGVyT3B0aW9uczEpO1xyXG5cclxuICAgICAgICB2YXIga25vYkxvYWRlck9wdGlvbnMyID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzUwJScsIC8vIHJlc3BvbnNpdmVcclxuICAgICAgICAgICAgZGlzcGxheUlucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICBmZ0NvbG9yOiBBUFBfQ09MT1JTWydwdXJwbGUnXSxcclxuICAgICAgICAgICAgcmVhZE9ubHk6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNrbm9iLWNoYXJ0MicpLmtub2Ioa25vYkxvYWRlck9wdGlvbnMyKTtcclxuXHJcbiAgICAgICAgdmFyIGtub2JMb2FkZXJPcHRpb25zMyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICc1MCUnLCAvLyByZXNwb25zaXZlXHJcbiAgICAgICAgICAgIGRpc3BsYXlJbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgZmdDb2xvcjogQVBQX0NPTE9SU1snaW5mbyddLFxyXG4gICAgICAgICAgICBiZ0NvbG9yOiBBUFBfQ09MT1JTWydncmF5J10sXHJcbiAgICAgICAgICAgIGFuZ2xlT2Zmc2V0OiAtMTI1LFxyXG4gICAgICAgICAgICBhbmdsZUFyYzogMjUwXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKCcja25vYi1jaGFydDMnKS5rbm9iKGtub2JMb2FkZXJPcHRpb25zMyk7XHJcblxyXG4gICAgICAgIHZhciBrbm9iTG9hZGVyT3B0aW9uczQgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJywgLy8gcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICBkaXNwbGF5SW5wdXQ6IHRydWUsXHJcbiAgICAgICAgICAgIGZnQ29sb3I6IEFQUF9DT0xPUlNbJ3BpbmsnXSxcclxuICAgICAgICAgICAgZGlzcGxheVByZXZpb3VzOiB0cnVlLFxyXG4gICAgICAgICAgICB0aGlja25lc3M6IDAuMSxcclxuICAgICAgICAgICAgbGluZUNhcDogJ3JvdW5kJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2tub2ItY2hhcnQ0Jykua25vYihrbm9iTG9hZGVyT3B0aW9uczQpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIENoYXJ0IEpTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0Q2hhcnRKUyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENoYXJ0SlMoKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgQ2hhcnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHJhbmRvbSB2YWx1ZXMgZm9yIGRlbW9cclxuICAgICAgICB2YXIgckZhY3RvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBMaW5lIGNoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIGxpbmVEYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J10sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNeSBGaXJzdCBkYXRhc2V0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTE0LDEwMiwxODYsMC4yKScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTE0LDEwMiwxODYsMSknLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogW3JGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNeSBTZWNvbmQgZGF0YXNldCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDM1LDE4MywyMjksMC4yKScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMzUsMTgzLDIyOSwxKScsXHJcbiAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBsaW5lT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgbGluZWN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydGpzLWxpbmVjaGFydCcpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIGxpbmVDaGFydCA9IG5ldyBDaGFydChsaW5lY3R4LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IGxpbmVEYXRhLFxyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IGxpbmVPcHRpb25zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhciBjaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHZhciBiYXJEYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J10sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIzYjdlNScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMyM2I3ZTUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogW3JGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzVkOWNlYycsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyM1ZDljZWMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogW3JGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKV1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgYmFyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgYmFyY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0anMtYmFyY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBiYXJDaGFydCA9IG5ldyBDaGFydChiYXJjdHgsIHtcclxuICAgICAgICAgICAgZGF0YTogYmFyRGF0YSxcclxuICAgICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IGJhck9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gIERvdWdobnV0IGNoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIGRvdWdobnV0RGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbXHJcbiAgICAgICAgICAgICAgICAnUHVycGxlJyxcclxuICAgICAgICAgICAgICAgICdZZWxsb3cnLFxyXG4gICAgICAgICAgICAgICAgJ0JsdWUnXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogWzMwMCwgNTAsIDEwMF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzcyNjZiYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNmYWQ3MzInLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMjNiN2U1J1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJyM3MjY2YmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjZmFkNzMyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzIzYjdlNSdcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZG91Z2hudXRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBkb3VnaG51dGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydGpzLWRvdWdobnV0Y2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBkb3VnaG51dENoYXJ0ID0gbmV3IENoYXJ0KGRvdWdobnV0Y3R4LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IGRvdWdobnV0RGF0YSxcclxuICAgICAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgICAgICAgb3B0aW9uczogZG91Z2hudXRPcHRpb25zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFBpZSBjaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHZhciBwaWVEYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgICAgICdQdXJwbGUnLFxyXG4gICAgICAgICAgICAgICAgJ1llbGxvdycsXHJcbiAgICAgICAgICAgICAgICAnQmx1ZSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzAwLCA1MCwgMTAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjNzI2NmJhJyxcclxuICAgICAgICAgICAgICAgICAgICAnI2ZhZDczMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMyM2I3ZTUnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzcyNjZiYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNmYWQ3MzInLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMjNiN2U1J1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBwaWVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBwaWVjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRqcy1waWVjaGFydCcpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIHBpZUNoYXJ0ID0gbmV3IENoYXJ0KHBpZWN0eCwge1xyXG4gICAgICAgICAgICBkYXRhOiBwaWVEYXRhLFxyXG4gICAgICAgICAgICB0eXBlOiAncGllJyxcclxuICAgICAgICAgICAgb3B0aW9uczogcGllT3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBQb2xhciBjaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHZhciBwb2xhckRhdGEgPSB7XHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgIDExLFxyXG4gICAgICAgICAgICAgICAgICAgIDE2LFxyXG4gICAgICAgICAgICAgICAgICAgIDcsXHJcbiAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjZjUzMmU1JyxcclxuICAgICAgICAgICAgICAgICAgICAnIzcyNjZiYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNmNTMyZTUnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjNzI2NmJhJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTXkgZGF0YXNldCcgLy8gZm9yIGxlZ2VuZFxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgbGFiZWxzOiBbXHJcbiAgICAgICAgICAgICAgICAnTGFiZWwgMScsXHJcbiAgICAgICAgICAgICAgICAnTGFiZWwgMicsXHJcbiAgICAgICAgICAgICAgICAnTGFiZWwgMycsXHJcbiAgICAgICAgICAgICAgICAnTGFiZWwgNCdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBwb2xhck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHBvbGFyY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0anMtcG9sYXJjaGFydCcpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIHBvbGFyQ2hhcnQgPSBuZXcgQ2hhcnQocG9sYXJjdHgsIHtcclxuICAgICAgICAgICAgZGF0YTogcG9sYXJEYXRhLFxyXG4gICAgICAgICAgICB0eXBlOiAncG9sYXJBcmVhJyxcclxuICAgICAgICAgICAgb3B0aW9uczogcG9sYXJPcHRpb25zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJhZGFyIGNoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIHJhZGFyRGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJ0VhdGluZycsICdEcmlua2luZycsICdTbGVlcGluZycsICdEZXNpZ25pbmcnLCAnQ29kaW5nJywgJ0N5Y2xpbmcnLCAnUnVubmluZyddLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTXkgRmlyc3QgZGF0YXNldCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDExNCwxMDIsMTg2LDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDExNCwxMDIsMTg2LDEpJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs2NSwgNTksIDkwLCA4MSwgNTYsIDU1LCA0MF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNeSBTZWNvbmQgZGF0YXNldCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE1MSwxODcsMjA1LDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDE1MSwxODcsMjA1LDEpJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsyOCwgNDgsIDQwLCAxOSwgOTYsIDI3LCAxMDBdXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHJhZGFyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcmFkYXJjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRqcy1yYWRhcmNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgcmFkYXJDaGFydCA9IG5ldyBDaGFydChyYWRhcmN0eCwge1xyXG4gICAgICAgICAgICBkYXRhOiByYWRhckRhdGEsXHJcbiAgICAgICAgICAgIHR5cGU6ICdyYWRhcicsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHJhZGFyT3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIENoYXJ0aXN0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0Q2hhcnRpc3RzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2hhcnRpc3RzKCkge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIENoYXJ0aXN0ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBCYXIgYmlwb2xhclxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdmFyIGRhdGExID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnVzEnLCAnVzInLCAnVzMnLCAnVzQnLCAnVzUnLCAnVzYnLCAnVzcnLCAnVzgnLCAnVzknLCAnVzEwJ10sXHJcbiAgICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICAgICAgWzEsIDIsIDQsIDgsIDYsIC0yLCAtMSwgLTQsIC02LCAtMl1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zMSA9IHtcclxuICAgICAgICAgICAgaGlnaDogMTAsXHJcbiAgICAgICAgICAgIGxvdzogLTEwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MCxcclxuICAgICAgICAgICAgYXhpc1g6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ICUgMiA9PT0gMCA/IHZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG5ldyBDaGFydGlzdC5CYXIoJyNjdC1iYXIxJywgZGF0YTEsIG9wdGlvbnMxKTtcclxuXHJcbiAgICAgICAgLy8gQmFyIEhvcml6b250YWxcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIG5ldyBDaGFydGlzdC5CYXIoJyNjdC1iYXIyJywge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICBbNSwgNCwgMywgNywgNSwgMTAsIDNdLFxyXG4gICAgICAgICAgICAgICAgWzMsIDIsIDksIDUsIDQsIDYsIDRdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNlcmllc0JhckRpc3RhbmNlOiAxMCxcclxuICAgICAgICAgICAgcmV2ZXJzZURhdGE6IHRydWUsXHJcbiAgICAgICAgICAgIGhvcml6b250YWxCYXJzOiB0cnVlLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MCxcclxuICAgICAgICAgICAgYXhpc1k6IHtcclxuICAgICAgICAgICAgICAgIG9mZnNldDogNzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBMaW5lXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBuZXcgQ2hhcnRpc3QuTGluZSgnI2N0LWxpbmUxJywge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheSddLFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIFsxMiwgOSwgNywgOCwgNV0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMy41LCA3LCAzXSxcclxuICAgICAgICAgICAgICAgIFsxLCAzLCA0LCA1LCA2XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwLFxyXG4gICAgICAgICAgICBjaGFydFBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA0MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBTVkcgQW5pbWF0aW9uXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0MSA9IG5ldyBDaGFydGlzdC5MaW5lKCcjY3QtbGluZTMnLCB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIFsxLCA1LCAyLCA1LCA0LCAzXSxcclxuICAgICAgICAgICAgICAgIFsyLCAzLCA0LCA4LCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFs1LCA0LCAzLCAyLCAxLCAwLjVdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxvdzogMCxcclxuICAgICAgICAgICAgc2hvd0FyZWE6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dQb2ludDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2hhcnQxLm9uKCdkcmF3JywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnbGluZScgfHwgZGF0YS50eXBlID09PSAnYXJlYScpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAyMDAwICogZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBkYXRhLnBhdGguY2xvbmUoKS5zY2FsZSgxLCAwKS50cmFuc2xhdGUoMCwgZGF0YS5jaGFydFJlY3QuaGVpZ2h0KCkpLnN0cmluZ2lmeSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogZGF0YS5wYXRoLmNsb25lKCkuc3RyaW5naWZ5KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogQ2hhcnRpc3QuU3ZnLkVhc2luZy5lYXNlT3V0UXVpbnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gU2xpbSBhbmltYXRpb25cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0aXN0LkxpbmUoJyNjdC1saW5lMicsIHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ10sXHJcbiAgICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICAgICAgWzEyLCA5LCA3LCA4LCA1LCA0LCA2LCAyLCAzLCAzLCA0LCA2XSxcclxuICAgICAgICAgICAgICAgIFs0LCA1LCAzLCA3LCAzLCA1LCA1LCAzLCA0LCA0LCA1LCA1XSxcclxuICAgICAgICAgICAgICAgIFs1LCAzLCA0LCA1LCA2LCAzLCAzLCA0LCA1LCA2LCAzLCA0XSxcclxuICAgICAgICAgICAgICAgIFszLCA0LCA1LCA2LCA3LCA2LCA0LCA1LCA2LCA3LCA2LCAzXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsb3c6IDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIExldCdzIHB1dCBhIHNlcXVlbmNlIG51bWJlciBhc2lkZSBzbyB3ZSBjYW4gdXNlIGl0IGluIHRoZSBldmVudCBjYWxsYmFja3NcclxuICAgICAgICB2YXIgc2VxID0gMCxcclxuICAgICAgICAgICAgZGVsYXlzID0gODAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9ucyA9IDUwMDtcclxuXHJcbiAgICAgICAgLy8gT25jZSB0aGUgY2hhcnQgaXMgZnVsbHkgY3JlYXRlZCB3ZSByZXNldCB0aGUgc2VxdWVuY2VcclxuICAgICAgICBjaGFydC5vbignY3JlYXRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXEgPSAwO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBPbiBlYWNoIGRyYXduIGVsZW1lbnQgYnkgQ2hhcnRpc3Qgd2UgdXNlIHRoZSBDaGFydGlzdC5TdmcgQVBJIHRvIHRyaWdnZXIgU01JTCBhbmltYXRpb25zXHJcbiAgICAgICAgY2hhcnQub24oJ2RyYXcnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHNlcSsrO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ2xpbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZHJhd24gZWxlbWVudCBpcyBhIGxpbmUgd2UgZG8gYSBzaW1wbGUgb3BhY2l0eSBmYWRlIGluLiBUaGlzIGNvdWxkIGFsc28gYmUgYWNoaWV2ZWQgdXNpbmcgQ1NTMyBhbmltYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGRlbGF5IHdoZW4gd2UgbGlrZSB0byBzdGFydCB0aGUgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMgKyAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cjogZHVyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdmFsdWUgd2hlcmUgdGhlIGFuaW1hdGlvbiBzaG91bGQgc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHZhbHVlIHdoZXJlIGl0IHNob3VsZCBlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdsYWJlbCcgJiYgZGF0YS5heGlzID09PSAneCcpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cjogZHVyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBkYXRhLnkgKyAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbiBzcGVjaWZ5IGFuIGVhc2luZyBmdW5jdGlvbiBmcm9tIENoYXJ0aXN0LlN2Zy5FYXNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YXJ0J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gJ2xhYmVsJyAmJiBkYXRhLmF4aXMgPT09ICd5Jykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGEueCAtIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IGRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YXJ0J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gJ3BvaW50Jykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHgxOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cjogZHVyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBkYXRhLnggLSAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IGRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YXJ0J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeDI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGEueCAtIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cjogZHVyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YXJ0J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gJ2dyaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVc2luZyBkYXRhLmF4aXMgd2UgZ2V0IHggb3IgeSB3aGljaCB3ZSBjYW4gdXNlIHRvIGNvbnN0cnVjdCBvdXIgYW5pbWF0aW9uIGRlZmluaXRpb24gb2JqZWN0c1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvczFBbmltYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBkYXRhW2RhdGEuYXhpcy51bml0cy5wb3MgKyAnMSddIC0gMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGRhdGFbZGF0YS5heGlzLnVuaXRzLnBvcyArICcxJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YXJ0J1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zMkFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cjogZHVyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGFbZGF0YS5heGlzLnVuaXRzLnBvcyArICcyJ10gLSAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGRhdGFbZGF0YS5heGlzLnVuaXRzLnBvcyArICcyJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YXJ0J1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uc1tkYXRhLmF4aXMudW5pdHMucG9zICsgJzEnXSA9IHBvczFBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zW2RhdGEuYXhpcy51bml0cy5wb3MgKyAnMiddID0gcG9zMkFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnNbJ29wYWNpdHknXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cjogZHVyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YXJ0J1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYW5pbWF0ZShhbmltYXRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBGb3IgdGhlIHNha2Ugb2YgdGhlIGV4YW1wbGUgd2UgdXBkYXRlIHRoZSBjaGFydCBldmVyeSB0aW1lIGl0J3MgY3JlYXRlZCB3aXRoIGEgZGVsYXkgb2YgMTAgc2Vjb25kc1xyXG4gICAgICAgIGNoYXJ0Lm9uKCdjcmVhdGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuX19leGFtcGxlQW5pbWF0ZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh3aW5kb3cuX19leGFtcGxlQW5pbWF0ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Ll9fZXhhbXBsZUFuaW1hdGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cuX19leGFtcGxlQW5pbWF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGNoYXJ0LnVwZGF0ZS5iaW5kKGNoYXJ0KSwgMTIwMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEVhc3lwaWUgY2hhcnQgTG9hZGVyXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0RWFzeVBpZUNoYXJ0KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RWFzeVBpZUNoYXJ0KCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uZWFzeVBpZUNoYXJ0KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIFVzYWdlIHZpYSBkYXRhIGF0dHJpYnV0ZXNcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzPVwiZWFzeXBpZS1jaGFydFwiIGRhdGEtZWFzeXBpZWNoYXJ0IGRhdGEtcGVyY2VudD1cIlhcIiBkYXRhLW9wdGlvbk5hbWU9XCJ2YWx1ZVwiPjwvZGl2PlxyXG4gICAgICAgICQoJ1tkYXRhLWVhc3lwaWVjaGFydF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9ICRlbGVtLmRhdGEoKTtcclxuICAgICAgICAgICAgJGVsZW0uZWFzeVBpZUNoYXJ0KG9wdGlvbnMgfHwge30pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBwcm9ncmFtbWF0aWMgdXNhZ2VcclxuICAgICAgICB2YXIgcGllT3B0aW9uczEgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGU6IHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJhckNvbG9yOiBBUFBfQ09MT1JTWydzdWNjZXNzJ10sXHJcbiAgICAgICAgICAgIHRyYWNrQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZUNvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAxMCxcclxuICAgICAgICAgICAgbGluZUNhcDogJ2NpcmNsZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNlYXN5cGllMScpLmVhc3lQaWVDaGFydChwaWVPcHRpb25zMSk7XHJcblxyXG4gICAgICAgIHZhciBwaWVPcHRpb25zMiA9IHtcclxuICAgICAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFyQ29sb3I6IEFQUF9DT0xPUlNbJ3dhcm5pbmcnXSxcclxuICAgICAgICAgICAgdHJhY2tDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjYWxlQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDQsXHJcbiAgICAgICAgICAgIGxpbmVDYXA6ICdjaXJjbGUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKCcjZWFzeXBpZTInKS5lYXN5UGllQ2hhcnQocGllT3B0aW9uczIpO1xyXG5cclxuICAgICAgICB2YXIgcGllT3B0aW9uczMgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGU6IHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJhckNvbG9yOiBBUFBfQ09MT1JTWydkYW5nZXInXSxcclxuICAgICAgICAgICAgdHJhY2tDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjYWxlQ29sb3I6IEFQUF9DT0xPUlNbJ2dyYXknXSxcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAxNSxcclxuICAgICAgICAgICAgbGluZUNhcDogJ2NpcmNsZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNlYXN5cGllMycpLmVhc3lQaWVDaGFydChwaWVPcHRpb25zMyk7XHJcblxyXG4gICAgICAgIHZhciBwaWVPcHRpb25zNCA9IHtcclxuICAgICAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFyQ29sb3I6IEFQUF9DT0xPUlNbJ2RhbmdlciddLFxyXG4gICAgICAgICAgICB0cmFja0NvbG9yOiBBUFBfQ09MT1JTWyd5ZWxsb3cnXSxcclxuICAgICAgICAgICAgc2NhbGVDb2xvcjogQVBQX0NPTE9SU1snZ3JheS1kYXJrJ10sXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMTUsXHJcbiAgICAgICAgICAgIGxpbmVDYXA6ICdjaXJjbGUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKCcjZWFzeXBpZTQnKS5lYXN5UGllQ2hhcnQocGllT3B0aW9uczQpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIENIQVJUIFNQTElORVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0RmxvdFNwbGluZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZsb3RTcGxpbmUoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlVuaXF1ZXNcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM3NjgyOTRcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCA3MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgODVdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDU5XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA5M10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgNjZdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDg2XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA2MF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJlY3VycmVudFwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzFmOTJmZVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDIxXSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCAxMl0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgMjddLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDI0XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCAxNl0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgMzldLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDE1XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBkYXRhdjIgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSG91cnNcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMyM2I3ZTVcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIkphblwiLCA3MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgMjBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDcwXSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCA4NV0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgNTldLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDkzXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCA2Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgODZdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDYwXSxcclxuICAgICAgICAgICAgICAgIFtcIk9jdFwiLCA2MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgMTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiRGVjXCIsIDUwXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ29tbWl0c1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzcyNjZiYVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDIwXSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCA3MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgMzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDUwXSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCA4NV0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgNDNdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDk2XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCAzNl0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgODBdLFxyXG4gICAgICAgICAgICAgICAgW1wiT2N0XCIsIDEwXSxcclxuICAgICAgICAgICAgICAgIFtcIk5vdlwiLCA3Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJEZWNcIiwgMzFdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGF2MyA9IFt7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJIb21lXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMWJhM2NkXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCIxXCIsIDM4XSxcclxuICAgICAgICAgICAgICAgIFtcIjJcIiwgNDBdLFxyXG4gICAgICAgICAgICAgICAgW1wiM1wiLCA0Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCI0XCIsIDQ4XSxcclxuICAgICAgICAgICAgICAgIFtcIjVcIiwgNTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiNlwiLCA3MF0sXHJcbiAgICAgICAgICAgICAgICBbXCI3XCIsIDE0NV0sXHJcbiAgICAgICAgICAgICAgICBbXCI4XCIsIDcwXSxcclxuICAgICAgICAgICAgICAgIFtcIjlcIiwgNTldLFxyXG4gICAgICAgICAgICAgICAgW1wiMTBcIiwgNDhdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTFcIiwgMzhdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTJcIiwgMjldLFxyXG4gICAgICAgICAgICAgICAgW1wiMTNcIiwgMzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTRcIiwgMjJdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTVcIiwgMjhdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJPdmVyYWxsXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjM2EzZjUxXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCIxXCIsIDE2XSxcclxuICAgICAgICAgICAgICAgIFtcIjJcIiwgMThdLFxyXG4gICAgICAgICAgICAgICAgW1wiM1wiLCAxN10sXHJcbiAgICAgICAgICAgICAgICBbXCI0XCIsIDE2XSxcclxuICAgICAgICAgICAgICAgIFtcIjVcIiwgMzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiNlwiLCAxMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiN1wiLCAxOV0sXHJcbiAgICAgICAgICAgICAgICBbXCI4XCIsIDE4XSxcclxuICAgICAgICAgICAgICAgIFtcIjlcIiwgMTEwXSxcclxuICAgICAgICAgICAgICAgIFtcIjEwXCIsIDE5XSxcclxuICAgICAgICAgICAgICAgIFtcIjExXCIsIDE2XSxcclxuICAgICAgICAgICAgICAgIFtcIjEyXCIsIDEwXSxcclxuICAgICAgICAgICAgICAgIFtcIjEzXCIsIDIwXSxcclxuICAgICAgICAgICAgICAgIFtcIjE0XCIsIDEwXSxcclxuICAgICAgICAgICAgICAgIFtcIjE1XCIsIDIwXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAuNCxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogMC41XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZjZmMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbihsYWJlbCwgeCwgeSkgeyByZXR1cm4geCArICcgOiAnICsgeTsgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2ZjZmNmYycsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY2F0ZWdvcmllcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIG1heDogMTUwLCAvLyBvcHRpb25hbDogdXNlIGl0IGZvciBhIGNsZWFyIHJlcHJlc2V0YXRpb25cclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgLy9wb3NpdGlvbjogJ3JpZ2h0JyBvciAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgLyogKyAnIHZpc2l0b3JzJyovIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9ICQoJy5jaGFydC1zcGxpbmUnKTtcclxuICAgICAgICBpZiAoY2hhcnQubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnQsIGRhdGEsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgY2hhcnR2MiA9ICQoJy5jaGFydC1zcGxpbmV2MicpO1xyXG4gICAgICAgIGlmIChjaGFydHYyLmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0djIsIGRhdGF2Miwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciBjaGFydHYzID0gJCgnLmNoYXJ0LXNwbGluZXYzJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0djMubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnR2MywgZGF0YXYzLCBvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcbi8vIENIQVJUIEFSRUFcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbiAgICAkKGluaXRGbG90QXJlYSlcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RmxvdEFyZWEoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlVuaXF1ZXNcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNhYWQ4NzRcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCA1MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgODRdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDUyXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA4OF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgNjldLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDkyXSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA1OF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJlY3VycmVudFwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzdkYzdkZlwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDEzXSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCA0NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgNDRdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDI3XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCAzOF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgMTFdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDM5XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAwLjhcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogNFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmY2ZjJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24obGFiZWwsIHgsIHkpIHsgcmV0dXJuIHggKyAnIDogJyArIHk7IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNmY2ZjZmMnLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NhdGVnb3JpZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiAncmlnaHQnIG9yICdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcjogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgJyB2aXNpdG9ycyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtYXJlYScpO1xyXG4gICAgICAgIGlmIChjaGFydC5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydCwgZGF0YSwgb3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7XHJcblxyXG4vLyBDSEFSVCBCQVJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbiAgICAkKGluaXRGbG90QmFyKVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGbG90QmFyKCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IFt7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTYWxlc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzljZDE1OVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDI3XSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCA4Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgNTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDE0XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCAyOF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgNzddLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDIzXSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCA0OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgODFdLFxyXG4gICAgICAgICAgICAgICAgW1wiT2N0XCIsIDIwXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyV2lkdGg6IDAuNixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAwLjlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmNmYydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKGxhYmVsLCB4LCB5KSB7IHJldHVybiB4ICsgJyA6ICcgKyB5OyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZmNmY2ZjJyxcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdjYXRlZ29yaWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246ICdyaWdodCcgb3IgJ2xlZnQnXHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWVlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gJCgnLmNoYXJ0LWJhcicpO1xyXG4gICAgICAgIGlmIChjaGFydC5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydCwgZGF0YSwgb3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7XHJcblxyXG5cclxuLy8gQ0hBUlQgQkFSIFNUQUNLRURcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbiAgICAkKGluaXRGbG90QmFyU3RhY2tlZCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZsb3RCYXJTdGFja2VkKCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IFt7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUd2VldHNcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM1MWJmZjJcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIkphblwiLCA1Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgODFdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDk3XSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCA0NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgMjRdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDg1XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCA5NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgNzhdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDUyXSxcclxuICAgICAgICAgICAgICAgIFtcIk9jdFwiLCAxN10sXHJcbiAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgOTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiRGVjXCIsIDYyXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTGlrZXNcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM0YThlZjFcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIkphblwiLCA2OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgMTM1XSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCAxNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgMTAwXSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCAxMDBdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDYyXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCAxMTVdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDIyXSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCAxMDRdLFxyXG4gICAgICAgICAgICAgICAgW1wiT2N0XCIsIDEzMl0sXHJcbiAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgNzJdLFxyXG4gICAgICAgICAgICAgICAgW1wiRGVjXCIsIDYxXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiKzFcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmMDY5M2FcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIkphblwiLCAyOV0sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgMzZdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDQ3XSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCAyMV0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgNV0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgNDldLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDM3XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCA0NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgMjhdLFxyXG4gICAgICAgICAgICAgICAgW1wiT2N0XCIsIDldLFxyXG4gICAgICAgICAgICAgICAgW1wiTm92XCIsIDEyXSxcclxuICAgICAgICAgICAgICAgIFtcIkRlY1wiLCAzNV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgZGF0YXYyID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBlbmRpbmdcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM5Mjg5Y2FcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIlBqMVwiLCA4Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajJcIiwgMTM2XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqM1wiLCA5N10sXHJcbiAgICAgICAgICAgICAgICBbXCJQajRcIiwgMTEwXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNVwiLCA2Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajZcIiwgODVdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo3XCIsIDExNV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajhcIiwgNzhdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo5XCIsIDEwNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEwXCIsIDgyXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTFcIiwgOTddLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMlwiLCAxMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxM1wiLCA2Ml1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFzc2lnbmVkXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNzI2NmJhXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJQajFcIiwgNDldLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoyXCIsIDgxXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqM1wiLCA0N10sXHJcbiAgICAgICAgICAgICAgICBbXCJQajRcIiwgNDRdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo1XCIsIDEwMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajZcIiwgNDldLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo3XCIsIDk0XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqOFwiLCA0NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajlcIiwgNTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMFwiLCAxN10sXHJcbiAgICAgICAgICAgICAgICBbXCJQajExXCIsIDQ3XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTJcIiwgNDRdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxM1wiLCAxMDBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb21wbGV0ZWRcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM1NjRhYTNcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIlBqMVwiLCAyOV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajJcIiwgNTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGozXCIsIDE0XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNFwiLCAyMV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajVcIiwgNV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajZcIiwgMjRdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo3XCIsIDM3XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqOFwiLCAyMl0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajlcIiwgMjhdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMFwiLCA5XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTFcIiwgMTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMlwiLCAyMV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEzXCIsIDVdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgc3RhY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhcldpZHRoOiAwLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogMC45XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZjZmMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbihsYWJlbCwgeCwgeSkgeyByZXR1cm4geCArICcgOiAnICsgeTsgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2ZjZmNmYycsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY2F0ZWdvcmllcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiAncmlnaHQnIG9yICdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VlZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9ICQoJy5jaGFydC1iYXItc3RhY2tlZCcpO1xyXG4gICAgICAgIGlmIChjaGFydC5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydCwgZGF0YSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciBjaGFydHYyID0gJCgnLmNoYXJ0LWJhci1zdGFja2VkdjInKTtcclxuICAgICAgICBpZiAoY2hhcnR2Mi5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydHYyLCBkYXRhdjIsIG9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuLy8gQ0hBUlQgRE9OVVRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbiAgICAkKGluaXRGbG90RG9udXQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGbG90RG9udXQoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW3tcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMzOUM1NThcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDYwLFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ29mZmVlXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDBiNGZmXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiA5MCxcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNTU1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI0ZGQkU0MVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogNTAsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJMRVNTXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmYzZTQzXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiA4MCxcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkphZGVcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM5MzdmYzdcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDExNixcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFuZ3VsYXJKU1wiXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgIHBpZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJSYWRpdXM6IDAuNSAvLyBUaGlzIG1ha2VzIHRoZSBkb251dCBzaGFwZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gJCgnLmNoYXJ0LWRvbnV0Jyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcbi8vIENIQVJUIExJTkVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbiAgICAkKGluaXRGbG90TGluZSlcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RmxvdExpbmUoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvbXBsZXRlXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNWFiMWVmXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgMTg4XSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCAxODNdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDE4NV0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgMTk5XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCAxOTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDE5NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgMTk0XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCAxODRdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDc0XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSW4gUHJvZ3Jlc3NcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmNTk5NGVcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIkphblwiLCAxNTNdLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDExNl0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgMTM2XSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCAxMTldLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDE0OF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgMTMzXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCAxMThdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDE2MV0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNTldXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDYW5jZWxsZWRcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNkODdhODBcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIkphblwiLCAxMTFdLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDk3XSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCA5M10sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgMTEwXSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCAxMDJdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDkzXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCA5Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgOTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDQ0XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAwLjAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmNmYydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKGxhYmVsLCB4LCB5KSB7IHJldHVybiB4ICsgJyA6ICcgKyB5OyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdjYXRlZ29yaWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246ICdyaWdodCcgb3IgJ2xlZnQnXHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWVlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gJCgnLmNoYXJ0LWxpbmUnKTtcclxuICAgICAgICBpZiAoY2hhcnQubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnQsIGRhdGEsIG9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuXHJcbi8vIENIQVJUIFBJRVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3RQaWUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGbG90UGllKCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IFt7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJqUXVlcnlcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM0YWNhYjRcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDMwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ1NTXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZlYTg4XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiA0MFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkxFU1NcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZjgxNTNcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDkwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiU0FTU1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzg3OGJiNlwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogNzVcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJKYWRlXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjYjJkNzY3XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiAxMjBcclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgcGllOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclJhZGl1czogMCxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDAuOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihsYWJlbCwgc2VyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJmbG90LXBpZS1sYWJlbFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbGFiZWwgKyAnIDogJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChzZXJpZXMucGVyY2VudCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICclPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMjIyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gJCgnLmNoYXJ0LXBpZScpO1xyXG4gICAgICAgIGlmIChjaGFydC5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydCwgZGF0YSwgb3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gTW9ycmlzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0TW9ycmlzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TW9ycmlzKCkge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIE1vcnJpcyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ZGF0YSA9IFtcclxuICAgICAgICAgICAgeyB5OiBcIjIwMDZcIiwgYTogMTAwLCBiOiA5MCB9LFxyXG4gICAgICAgICAgICB7IHk6IFwiMjAwN1wiLCBhOiA3NSwgYjogNjUgfSxcclxuICAgICAgICAgICAgeyB5OiBcIjIwMDhcIiwgYTogNTAsIGI6IDQwIH0sXHJcbiAgICAgICAgICAgIHsgeTogXCIyMDA5XCIsIGE6IDc1LCBiOiA2NSB9LFxyXG4gICAgICAgICAgICB7IHk6IFwiMjAxMFwiLCBhOiA1MCwgYjogNDAgfSxcclxuICAgICAgICAgICAgeyB5OiBcIjIwMTFcIiwgYTogNzUsIGI6IDY1IH0sXHJcbiAgICAgICAgICAgIHsgeTogXCIyMDEyXCIsIGE6IDEwMCwgYjogOTAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHZhciBkb251dGRhdGEgPSBbXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiRG93bmxvYWQgU2FsZXNcIiwgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiSW4tU3RvcmUgU2FsZXNcIiwgdmFsdWU6IDMwIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiTWFpbC1PcmRlciBTYWxlc1wiLCB2YWx1ZTogMjAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIExpbmUgQ2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICBuZXcgTW9ycmlzLkxpbmUoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnbW9ycmlzLWxpbmUnLFxyXG4gICAgICAgICAgICBkYXRhOiBjaGFydGRhdGEsXHJcbiAgICAgICAgICAgIHhrZXk6ICd5JyxcclxuICAgICAgICAgICAgeWtleXM6IFtcImFcIiwgXCJiXCJdLFxyXG4gICAgICAgICAgICBsYWJlbHM6IFtcIlNlcmllIEFcIiwgXCJTZXJpZSBCXCJdLFxyXG4gICAgICAgICAgICBsaW5lQ29sb3JzOiBbXCIjMzFDMEJFXCIsIFwiIzdhOTJhM1wiXSxcclxuICAgICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIERvbnV0IENoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBuZXcgTW9ycmlzLkRvbnV0KHtcclxuICAgICAgICAgICAgZWxlbWVudDogJ21vcnJpcy1kb251dCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRvbnV0ZGF0YSxcclxuICAgICAgICAgICAgY29sb3JzOiBbJyNmMDUwNTAnLCAnI2ZhZDczMicsICcjZmY5MDJiJ10sXHJcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBCYXIgQ2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIG5ldyBNb3JyaXMuQmFyKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJ21vcnJpcy1iYXInLFxyXG4gICAgICAgICAgICBkYXRhOiBjaGFydGRhdGEsXHJcbiAgICAgICAgICAgIHhrZXk6ICd5JyxcclxuICAgICAgICAgICAgeWtleXM6IFtcImFcIiwgXCJiXCJdLFxyXG4gICAgICAgICAgICBsYWJlbHM6IFtcIlNlcmllcyBBXCIsIFwiU2VyaWVzIEJcIl0sXHJcbiAgICAgICAgICAgIHhMYWJlbE1hcmdpbjogMixcclxuICAgICAgICAgICAgYmFyQ29sb3JzOiBbJyMyM2I3ZTUnLCAnI2YwNTA1MCddLFxyXG4gICAgICAgICAgICByZXNpemU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXJlYSBDaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgbmV3IE1vcnJpcy5BcmVhKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJ21vcnJpcy1hcmVhJyxcclxuICAgICAgICAgICAgZGF0YTogY2hhcnRkYXRhLFxyXG4gICAgICAgICAgICB4a2V5OiAneScsXHJcbiAgICAgICAgICAgIHlrZXlzOiBbXCJhXCIsIFwiYlwiXSxcclxuICAgICAgICAgICAgbGFiZWxzOiBbXCJTZXJpZSBBXCIsIFwiU2VyaWUgQlwiXSxcclxuICAgICAgICAgICAgbGluZUNvbG9yczogWycjNzI2NmJhJywgJyMyM2I3ZTUnXSxcclxuICAgICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gUmlja3NoYXdcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRNb3JyaXMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNb3JyaXMoKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgUmlja3NoYXcgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBzZXJpZXNEYXRhID0gW1xyXG4gICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgcmFuZG9tID0gbmV3IFJpY2tzaGF3LkZpeHR1cmVzLlJhbmRvbURhdGEoMTUwKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTA7IGkrKykge1xyXG4gICAgICAgICAgICByYW5kb20uYWRkRGF0YShzZXJpZXNEYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZXJpZXMxID0gW3tcclxuICAgICAgICAgICAgY29sb3I6IFwiI2MwNTAyMFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBzZXJpZXNEYXRhWzBdLFxyXG4gICAgICAgICAgICBuYW1lOiAnTmV3IFlvcmsnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBjb2xvcjogXCIjMzBjMDIwXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHNlcmllc0RhdGFbMV0sXHJcbiAgICAgICAgICAgIG5hbWU6ICdMb25kb24nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBjb2xvcjogXCIjNjA2MGMwXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHNlcmllc0RhdGFbMl0sXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2t5bydcclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIGdyYXBoMSA9IG5ldyBSaWNrc2hhdy5HcmFwaCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlja3NoYXcxXCIpLFxyXG4gICAgICAgICAgICBzZXJpZXM6IHNlcmllczEsXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiAnYXJlYSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ3JhcGgxLnJlbmRlcigpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gR3JhcGggMlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHZhciBncmFwaDIgPSBuZXcgUmlja3NoYXcuR3JhcGgoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpY2tzaGF3MlwiKSxcclxuICAgICAgICAgICAgcmVuZGVyZXI6ICdhcmVhJyxcclxuICAgICAgICAgICAgc3Ryb2tlOiB0cnVlLFxyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbeyB4OiAwLCB5OiA0MCB9LCB7IHg6IDEsIHk6IDQ5IH0sIHsgeDogMiwgeTogMzggfSwgeyB4OiAzLCB5OiAzMCB9LCB7IHg6IDQsIHk6IDMyIH1dLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZjA1MDUwJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbeyB4OiAwLCB5OiA0MCB9LCB7IHg6IDEsIHk6IDQ5IH0sIHsgeDogMiwgeTogMzggfSwgeyB4OiAzLCB5OiAzMCB9LCB7IHg6IDQsIHk6IDMyIH1dLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmFkNzMyJ1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBncmFwaDIucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIC8vIEdyYXBoIDNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGdyYXBoMyA9IG5ldyBSaWNrc2hhdy5HcmFwaCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlja3NoYXczXCIpLFxyXG4gICAgICAgICAgICByZW5kZXJlcjogJ2xpbmUnLFxyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbeyB4OiAwLCB5OiA0MCB9LCB7IHg6IDEsIHk6IDQ5IH0sIHsgeDogMiwgeTogMzggfSwgeyB4OiAzLCB5OiAzMCB9LCB7IHg6IDQsIHk6IDMyIH1dLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjNzI2NmJhJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbeyB4OiAwLCB5OiAyMCB9LCB7IHg6IDEsIHk6IDI0IH0sIHsgeDogMiwgeTogMTkgfSwgeyB4OiAzLCB5OiAxNSB9LCB7IHg6IDQsIHk6IDE2IH1dLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMjNiN2U1J1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdyYXBoMy5yZW5kZXIoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIEdyYXBoIDRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGdyYXBoNCA9IG5ldyBSaWNrc2hhdy5HcmFwaCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlja3NoYXc0XCIpLFxyXG4gICAgICAgICAgICByZW5kZXJlcjogJ2JhcicsXHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7IHg6IDAsIHk6IDQwIH0sIHsgeDogMSwgeTogNDkgfSwgeyB4OiAyLCB5OiAzOCB9LCB7IHg6IDMsIHk6IDMwIH0sIHsgeDogNCwgeTogMzIgfV0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmYWQ3MzInXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7IHg6IDAsIHk6IDIwIH0sIHsgeDogMSwgeTogMjQgfSwgeyB4OiAyLCB5OiAxOSB9LCB7IHg6IDMsIHk6IDE1IH0sIHsgeDogNCwgeTogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjkwMmInXHJcblxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdyYXBoNC5yZW5kZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBTUEFSS0xJTkVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTcGFya2xpbmUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTcGFya2xpbmUoKSB7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXNwYXJrbGluZV0nKS5lYWNoKGluaXRTcGFya0xpbmUpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbml0U3BhcmtMaW5lKCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICRlbGVtZW50LmRhdGEoKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IG9wdGlvbnMudmFsdWVzICYmIG9wdGlvbnMudmFsdWVzLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJ2Jhcic7IC8vIGRlZmF1bHQgY2hhcnQgaXMgYmFyXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGlzYWJsZUhpZGRlbkNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICRlbGVtZW50LnNwYXJrbGluZSh2YWx1ZXMsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVzaXplKSB7XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRlbGVtZW50LnNwYXJrbGluZSh2YWx1ZXMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCJ2YXIgb3BlcmFjaW9uZXNDb21lcmNpbyA9IHtcclxuICAgIGNyZWFyT3JkZW5EZUNvbXByYUFzeW5jOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuICAgICAgICAkKFwiI2Zvcm1DcmVhck9yZGVuRGVDb21wcmFcIikuc3VibWl0KGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybS5wYXJzbGV5KCkudmFsaWRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5wYXJzbGV5KCkuaXNWYWxpZCgpKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSAkKCdpbnB1dFtuYW1lPVwiX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW5cIl0nKS52YWwoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJvb3RIb3N0ICsgJ0NvbXByYXMvQ3JlYXJPcmRlbkRlQ29tcHJhQXN5bmMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IF9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuOiB0b2tlbiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubXNuID09PSBcInN1Y2Nlc3NcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiTm90aWZpY2FjacOzblwiLCBcIkxhIG9yZGVuIGRlIGNvbXByYSBzZSBjcmXDsyBjb3JyZWN0YW1lbnRlIGVuIGVsIHNpc3RlbWEuXCIsIFwic3VjY2Vzc1wiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIHJlc3BvbnNlLmVycm9yLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIGV4LCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBcIkVycm9yIGVuIGVsIG3DqXRvZG8gY3JlYXJPcmRlbkRlQ29tcHJhQXN5bmMgXFxuXCIgKyBleCwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn07IiwiLy8gU3RhcnQgQm9vdHN0cmFwIEpTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0Qm9vdHN0cmFwKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Qm9vdHN0cmFwKCkge1xyXG5cclxuICAgICAgICAvLyBQT1BPVkVSXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcclxuXHJcbiAgICAgICAgLy8gVE9PTFRJUFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnYm9keSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRFJPUERPV04gSU5QVVRTXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAkKCcuZHJvcGRvd24gaW5wdXQnKS5vbignY2xpY2sgZm9jdXMnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBNb2R1bGU6IGNhcmQtdG9vbHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRDYXJkRGlzbWlzcyk7XHJcbiAgICAkKGluaXRDYXJkQ29sbGFwc2UpO1xyXG4gICAgJChpbml0Q2FyZFJlZnJlc2gpO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc21pc3MgY2FyZHNcclxuICAgICAqIFtkYXRhLXRvb2w9XCJjYXJkLWRpc21pc3NcIl1cclxuICAgICAqXHJcbiAgICAgKiBSZXF1aXJlcyBhbmltby5qc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbml0Q2FyZERpc21pc3MoKSB7XHJcbiAgICAgICAgdmFyIGNhcmRTZWxlY3RvciA9ICdbZGF0YS10b29sPVwiY2FyZC1kaXNtaXNzXCJdJyxcclxuICAgICAgICAgICAgcmVtb3ZlRXZlbnQgPSAnY2FyZC5yZW1vdmUnLFxyXG4gICAgICAgICAgICByZW1vdmVkRXZlbnQgPSAnY2FyZC5yZW1vdmVkJztcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgY2FyZFNlbGVjdG9yLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IHBhcmVudCBjYXJkXHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJyk7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBldmVudCBhbmQgZmluYWxseSByZW1vdmUgdGhlIGVsZW1lbnRcclxuICAgICAgICAgICAgcGFyZW50LnRyaWdnZXIocmVtb3ZlRXZlbnQsIFtwYXJlbnQsIGRlZmVycmVkXSk7XHJcbiAgICAgICAgICAgIC8vIG5lZWRzIHJlc29sdmUoKSB0byBiZSBjYWxsZWRcclxuICAgICAgICAgICAgZGVmZXJyZWQuZG9uZShyZW1vdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYW5pbW8oeyBhbmltYXRpb246ICdib3VuY2VPdXQnIH0sIGRlc3Ryb3lDYXJkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZGVzdHJveUNhcmQoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sID0gcGFyZW50LnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICQud2hlbihwYXJlbnQudHJpZ2dlcihyZW1vdmVkRXZlbnQsIFtwYXJlbnRdKSlcclxuICAgICAgICAgICAgICAgICAgICAuZG9uZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHBhcmVudCBpZiBpdCBpcyBhIHJvdyBhbmQgaXMgZW1wdHkgYW5kIG5vdCBhIHNvcnRhYmxlIChwb3J0bGV0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKHJlbW92ZWRFdmVudCkgLy8gQW4gZXZlbnQgdG8gY2F0Y2ggd2hlbiB0aGUgY2FyZCBoYXMgYmVlbiByZW1vdmVkIGZyb20gRE9NXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlbC5pcygnW2NsYXNzKj1cImNvbC1cIl06bm90KC5zb3J0YWJsZSknKSAmJiBlbC5jaGlsZHJlbignKicpLmxlbmd0aCA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbGxhcHNlIGNhcmRzXHJcbiAgICAgKiBbZGF0YS10b29sPVwiY2FyZC1jb2xsYXBzZVwiXVxyXG4gICAgICpcclxuICAgICAqIEFsc28gdXNlcyBicm93c2VyIHN0b3JhZ2UgdG8ga2VlcCB0cmFja1xyXG4gICAgICogb2YgY2FyZHMgY29sbGFwc2VkIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluaXRDYXJkQ29sbGFwc2UoKSB7XHJcbiAgICAgICAgdmFyIGNhcmRTZWxlY3RvciA9ICdbZGF0YS10b29sPVwiY2FyZC1jb2xsYXBzZVwiXScsXHJcbiAgICAgICAgICAgIHN0b3JhZ2VLZXlOYW1lID0gJ2pxLWNhcmRTdGF0ZSc7XHJcblxyXG4gICAgICAgIC8vIFByZXBhcmUgdGhlIGNhcmQgdG8gYmUgY29sbGFwc2FibGUgYW5kIGl0cyBldmVudHNcclxuICAgICAgICAkKGNhcmRTZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgZmlyc3QgcGFyZW50IGNhcmRcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHBhcmVudCA9ICR0aGlzLmNsb3Nlc3QoJy5jYXJkJyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyID0gcGFyZW50LmZpbmQoJy5jYXJkLXdyYXBwZXInKSxcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlT3B0cyA9IHsgdG9nZ2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgaWNvbkVsZW1lbnQgPSAkdGhpcy5jaGlsZHJlbignZW0nKSxcclxuICAgICAgICAgICAgICAgIGNhcmRJZCA9IHBhcmVudC5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgd3JhcHBlciBub3QgYWRkZWQsIGFkZCBpdFxyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIGEgd3JhcHBlciB0byBhdm9pZCBqdW1waW5nIGR1ZSB0byB0aGUgcGFkZGluZ3NcclxuICAgICAgICAgICAgaWYgKCF3cmFwcGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlciA9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuKCcuY2FyZC1oZWFkaW5nJykubmV4dEFsbCgpIC8vZmluZCgnLmNhcmQtYm9keSwgLmNhcmQtZm9vdGVyJylcclxuICAgICAgICAgICAgICAgICAgICAud3JhcEFsbCgnPGRpdi8+JylcclxuICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2NhcmQtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VPcHRzID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEluaXQgY29sbGFwc2UgYW5kIGJpbmQgZXZlbnRzIHRvIHN3aXRjaCBpY29uc1xyXG4gICAgICAgICAgICB3cmFwcGVyXHJcbiAgICAgICAgICAgICAgICAuY29sbGFwc2UoY29sbGFwc2VPcHRzKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SWNvbkhpZGUoaWNvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVDYXJkU3RhdGUoY2FyZElkLCAnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucHJldignLmNhcmQtaGVhZGluZycpLmFkZENsYXNzKCdjYXJkLWhlYWRpbmctY29sbGFwc2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SWNvblNob3coaWNvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVDYXJkU3RhdGUoY2FyZElkLCAnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucHJldignLmNhcmQtaGVhZGluZycpLnJlbW92ZUNsYXNzKCdjYXJkLWhlYWRpbmctY29sbGFwc2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIExvYWQgdGhlIHNhdmVkIHN0YXRlIGlmIGV4aXN0c1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gbG9hZENhcmRTdGF0ZShjYXJkSWQpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB3cmFwcGVyLmNvbGxhcHNlKGN1cnJlbnRTdGF0ZSk7IH0sIDUwKTtcclxuICAgICAgICAgICAgICAgIHNhdmVDYXJkU3RhdGUoY2FyZElkLCBjdXJyZW50U3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBmaW5hbGx5IGNhdGNoIGNsaWNrcyB0byB0b2dnbGUgY2FyZCBjb2xsYXBzZVxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGNhcmRTZWxlY3RvciwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpO1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHBhcmVudC5maW5kKCcuY2FyZC13cmFwcGVyJyk7XHJcblxyXG4gICAgICAgICAgICB3cmFwcGVyLmNvbGxhcHNlKCd0b2dnbGUnKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIENvbW1vbiB1c2UgZnVuY3Rpb25zIGZvciBjYXJkIGNvbGxhcHNlIC8vXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0SWNvblNob3coaWNvbkVsKSB7XHJcbiAgICAgICAgICAgIGljb25FbC5yZW1vdmVDbGFzcygnZmEtcGx1cycpLmFkZENsYXNzKCdmYS1taW51cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0SWNvbkhpZGUoaWNvbkVsKSB7XHJcbiAgICAgICAgICAgIGljb25FbC5yZW1vdmVDbGFzcygnZmEtbWludXMnKS5hZGRDbGFzcygnZmEtcGx1cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2F2ZUNhcmRTdGF0ZShpZCwgc3RhdGUpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KHN0b3JhZ2VLZXlOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7IGRhdGEgPSB7fTsgfVxyXG4gICAgICAgICAgICBkYXRhW2lkXSA9IHN0YXRlO1xyXG4gICAgICAgICAgICBTdG9yYWdlcy5sb2NhbFN0b3JhZ2Uuc2V0KHN0b3JhZ2VLZXlOYW1lLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRDYXJkU3RhdGUoaWQpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KHN0b3JhZ2VLZXlOYW1lKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2lkXSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWZyZXNoIGNhcmRzXHJcbiAgICAgKiBbZGF0YS10b29sPVwiY2FyZC1yZWZyZXNoXCJdXHJcbiAgICAgKiBbZGF0YS1zcGlubmVyPVwic3RhbmRhcmRcIl1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5pdENhcmRSZWZyZXNoKCkge1xyXG4gICAgICAgIHZhciBjYXJkU2VsZWN0b3IgPSAnW2RhdGEtdG9vbD1cImNhcmQtcmVmcmVzaFwiXScsXHJcbiAgICAgICAgICAgIHJlZnJlc2hFdmVudCA9ICdjYXJkLnJlZnJlc2gnLFxyXG4gICAgICAgICAgICB3aGlybENsYXNzID0gJ3doaXJsJyxcclxuICAgICAgICAgICAgZGVmYXVsdFNwaW5uZXIgPSAnc3RhbmRhcmQnO1xyXG5cclxuICAgICAgICAvLyBtZXRob2QgdG8gY2xlYXIgdGhlIHNwaW5uZXIgd2hlbiBkb25lXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlU3Bpbm5lcigpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyh3aGlybENsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhdGNoIGNsaWNrcyB0byB0b2dnbGUgY2FyZCByZWZyZXNoXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgY2FyZFNlbGVjdG9yLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGNhcmQgPSAkdGhpcy5wYXJlbnRzKCcuY2FyZCcpLmVxKDApLFxyXG4gICAgICAgICAgICAgICAgc3Bpbm5lciA9ICR0aGlzLmRhdGEoJ3NwaW5uZXInKSB8fCBkZWZhdWx0U3Bpbm5lcjtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXJ0IHNob3dpbmcgdGhlIHNwaW5uZXJcclxuICAgICAgICAgICAgY2FyZC5hZGRDbGFzcyh3aGlybENsYXNzICsgJyAnICsgc3Bpbm5lcik7XHJcblxyXG4gICAgICAgICAgICAvLyBhdHRhY2ggYXMgcHVibGljIG1ldGhvZFxyXG4gICAgICAgICAgICBjYXJkLnJlbW92ZVNwaW5uZXIgPSByZW1vdmVTcGlubmVyO1xyXG5cclxuICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgZXZlbnQgYW5kIHNlbmQgdGhlIGNhcmQgb2JqZWN0XHJcbiAgICAgICAgICAgICR0aGlzLnRyaWdnZXIocmVmcmVzaEV2ZW50LCBbY2FyZF0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuXHJcbiIsIi8vIEdMT0JBTCBDT05TVEFOVFNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpe1xyXG5cclxuICAgIHdpbmRvdy5BUFBfQ09MT1JTID0ge1xyXG4gICAgICAgICdwcmltYXJ5JzogICAgICAgICAgICAgICAgJyM1ZDljZWMnLFxyXG4gICAgICAgICdzdWNjZXNzJzogICAgICAgICAgICAgICAgJyMyN2MyNGMnLFxyXG4gICAgICAgICdpbmZvJzogICAgICAgICAgICAgICAgICAgJyMyM2I3ZTUnLFxyXG4gICAgICAgICd3YXJuaW5nJzogICAgICAgICAgICAgICAgJyNmZjkwMmInLFxyXG4gICAgICAgICdkYW5nZXInOiAgICAgICAgICAgICAgICAgJyNmMDUwNTAnLFxyXG4gICAgICAgICdpbnZlcnNlJzogICAgICAgICAgICAgICAgJyMxMzFlMjYnLFxyXG4gICAgICAgICdncmVlbic6ICAgICAgICAgICAgICAgICAgJyMzN2JjOWInLFxyXG4gICAgICAgICdwaW5rJzogICAgICAgICAgICAgICAgICAgJyNmNTMyZTUnLFxyXG4gICAgICAgICdwdXJwbGUnOiAgICAgICAgICAgICAgICAgJyM3MjY2YmEnLFxyXG4gICAgICAgICdkYXJrJzogICAgICAgICAgICAgICAgICAgJyMzYTNmNTEnLFxyXG4gICAgICAgICd5ZWxsb3cnOiAgICAgICAgICAgICAgICAgJyNmYWQ3MzInLFxyXG4gICAgICAgICdncmF5LWRhcmtlcic6ICAgICAgICAgICAgJyMyMzI3MzUnLFxyXG4gICAgICAgICdncmF5LWRhcmsnOiAgICAgICAgICAgICAgJyMzYTNmNTEnLFxyXG4gICAgICAgICdncmF5JzogICAgICAgICAgICAgICAgICAgJyNkZGU2ZTknLFxyXG4gICAgICAgICdncmF5LWxpZ2h0JzogICAgICAgICAgICAgJyNlNGVhZWMnLFxyXG4gICAgICAgICdncmF5LWxpZ2h0ZXInOiAgICAgICAgICAgJyNlZGYxZjInXHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5BUFBfTUVESUFRVUVSWSA9IHtcclxuICAgICAgICAnZGVza3RvcExHJzogICAgICAgICAgICAgMTIwMCxcclxuICAgICAgICAnZGVza3RvcCc6ICAgICAgICAgICAgICAgIDk5MixcclxuICAgICAgICAndGFibGV0JzogICAgICAgICAgICAgICAgIDc2OCxcclxuICAgICAgICAnbW9iaWxlJzogICAgICAgICAgICAgICAgIDQ4MFxyXG4gICAgfTtcclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEZVTExTQ1JFRU5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTY3JlZW5GdWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2NyZWVuRnVsbCgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHNjcmVlbmZ1bGwgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciAkZG9jID0gJChkb2N1bWVudCk7XHJcbiAgICAgICAgdmFyICRmc1RvZ2dsZXIgPSAkKCdbZGF0YS10b2dnbGUtZnVsbHNjcmVlbl0nKTtcclxuXHJcbiAgICAgICAgLy8gTm90IHN1cHBvcnRlZCB1bmRlciBJRVxyXG4gICAgICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgIGlmICh1YS5pbmRleE9mKFwiTVNJRSBcIikgPiAwIHx8ICEhdWEubWF0Y2goL1RyaWRlbnQuKnJ2XFw6MTFcXC4vKSkge1xyXG4gICAgICAgICAgICAkZnNUb2dnbGVyLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISRmc1RvZ2dsZXIuaXMoJzp2aXNpYmxlJykpIC8vIGhpZGRlbiBvbiBtb2JpbGVzIG9yIElFXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgJGZzVG9nZ2xlci5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzY3JlZW5mdWxsLmVuYWJsZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JlZW5mdWxsLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN3aXRjaCBpY29uIGluZGljYXRvclxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlRlNJY29uKCRmc1RvZ2dsZXIpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIG5vdCBlbmFibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNjcmVlbmZ1bGwucmF3ICYmIHNjcmVlbmZ1bGwucmF3LmZ1bGxzY3JlZW5jaGFuZ2UpXHJcbiAgICAgICAgICAgICRkb2Mub24oc2NyZWVuZnVsbC5yYXcuZnVsbHNjcmVlbmNoYW5nZSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVGU0ljb24oJGZzVG9nZ2xlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVGU0ljb24oJGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHNjcmVlbmZ1bGwuaXNGdWxsc2NyZWVuKVxyXG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuY2hpbGRyZW4oJ2VtJykucmVtb3ZlQ2xhc3MoJ2ZhLWV4cGFuZCcpLmFkZENsYXNzKCdmYS1jb21wcmVzcycpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5jaGlsZHJlbignZW0nKS5yZW1vdmVDbGFzcygnZmEtY29tcHJlc3MnKS5hZGRDbGFzcygnZmEtZXhwYW5kJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIExPQUQgQ1VTVE9NIENTU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdExvYWRDU1MpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRMb2FkQ1NTKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1sb2FkLWNzc10nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pcygnYScpKVxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVyaSA9IGVsZW1lbnQuZGF0YSgnbG9hZENzcycpLFxyXG4gICAgICAgICAgICAgICAgbGluaztcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmkpIHtcclxuICAgICAgICAgICAgICAgIGxpbmsgPSBjcmVhdGVMaW5rKHVyaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmVycm9yKCdFcnJvciBjcmVhdGluZyBzdHlsZXNoZWV0IGxpbmsgZWxlbWVudC4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQuZXJyb3IoJ05vIHN0eWxlc2hlZXQgbG9jYXRpb24gZGVmaW5lZC4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVMaW5rKHVyaSkge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB2YXIgbGlua0lkID0gJ2F1dG9sb2FkZWQtc3R5bGVzaGVldCcsXHJcbiAgICAgICAgICAgIG9sZExpbmsgPSAkKCcjJyArIGxpbmtJZCkuYXR0cignaWQnLCBsaW5rSWQgKyAnLW9sZCcpO1xyXG5cclxuICAgICAgICAkKCdoZWFkJykuYXBwZW5kKCQoJzxsaW5rLz4nKS5hdHRyKHtcclxuICAgICAgICAgICAgJ2lkJzogbGlua0lkLFxyXG4gICAgICAgICAgICAncmVsJzogJ3N0eWxlc2hlZXQnLFxyXG4gICAgICAgICAgICAnaHJlZic6IHVyaVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgaWYgKG9sZExpbmsubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG9sZExpbmsucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJCgnIycgKyBsaW5rSWQpO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gTkFWQkFSIFNFQVJDSFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdE5hdmJhclNlYXJjaCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE5hdmJhclNlYXJjaCgpIHtcclxuXHJcbiAgICAgICAgdmFyIG5hdlNlYXJjaCA9IG5ldyBuYXZiYXJTZWFyY2hJbnB1dCgpO1xyXG5cclxuICAgICAgICAvLyBPcGVuIHNlYXJjaCBpbnB1dFxyXG4gICAgICAgIHZhciAkc2VhcmNoT3BlbiA9ICQoJ1tkYXRhLXNlYXJjaC1vcGVuXScpO1xyXG5cclxuICAgICAgICAkc2VhcmNoT3BlblxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgbmF2U2VhcmNoLnRvZ2dsZSk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIHNlYXJjaCBpbnB1dFxyXG4gICAgICAgIHZhciAkc2VhcmNoRGlzbWlzcyA9ICQoJ1tkYXRhLXNlYXJjaC1kaXNtaXNzXScpO1xyXG4gICAgICAgIHZhciBpbnB1dFNlbGVjdG9yID0gJy5uYXZiYXItZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSc7XHJcblxyXG4gICAgICAgICQoaW5wdXRTZWxlY3RvcilcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSlcclxuICAgICAgICAgICAgLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMjcpIC8vIEVTQ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdlNlYXJjaC5kaXNtaXNzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjbGljayBhbnl3aGVyZSBjbG9zZXMgdGhlIHNlYXJjaFxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIG5hdlNlYXJjaC5kaXNtaXNzKTtcclxuICAgICAgICAvLyBkaXNtaXNzYWJsZSBvcHRpb25zXHJcbiAgICAgICAgJHNlYXJjaERpc21pc3NcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSlcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIG5hdlNlYXJjaC5kaXNtaXNzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5hdmJhclNlYXJjaElucHV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5hdmJhckZvcm1TZWxlY3RvciA9ICdmb3JtLm5hdmJhci1mb3JtJztcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBuYXZiYXJGb3JtID0gJChuYXZiYXJGb3JtU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdmJhckZvcm0udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaXNPcGVuID0gbmF2YmFyRm9ybS5oYXNDbGFzcygnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdmJhckZvcm0uZmluZCgnaW5wdXQnKVtpc09wZW4gPyAnZm9jdXMnIDogJ2JsdXInXSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGRpc21pc3M6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChuYXZiYXJGb3JtU2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdvcGVuJykgLy8gQ2xvc2UgY29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLmJsdXIoKSAvLyByZW1vdmUgZm9jdXNcclxuICAgICAgICAgICAgICAgIC8vIC52YWwoJycpICAgICAgICAgICAgICAgICAgICAvLyBFbXB0eSBpbnB1dFxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBOT1cgVElNRVJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXROb3dUaW1lcik7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE5vd1RpbWVyKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1ub3ddJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZWxlbWVudC5kYXRhKCdmb3JtYXQnKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHQgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KGZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHQoZHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lKCk7XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKHVwZGF0ZVRpbWUsIDEwMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFRvZ2dsZSBSVEwgbW9kZSBmb3IgZGVtb1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRSVEwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRSVEwoKSB7XHJcbiAgICAgICAgdmFyIG1haW5jc3MgPSAkKCcjbWFpbmNzcycpO1xyXG4gICAgICAgIHZhciBic2NzcyA9ICQoJyNic2NzcycpO1xyXG4gICAgICAgICQoJyNjaGstcnRsJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBhcHAgcnRsIGNoZWNrXHJcbiAgICAgICAgICAgIG1haW5jc3MuYXR0cignaHJlZicsIHRoaXMuY2hlY2tlZCA/ICcvQ29udGVudC9jc3MvYXBwLXJ0bC5jc3MnIDogJy9Db250ZW50L2Nzcy9hcHAuY3NzJyk7XHJcbiAgICAgICAgICAgIC8vIGJvb3RzdHJhcCBydGwgY2hlY2tcclxuICAgICAgICAgICAgYnNjc3MuYXR0cignaHJlZicsIHRoaXMuY2hlY2tlZCA/ICcvQ29udGVudC9jc3MvYm9vdHN0cmFwLXJ0bC5jc3MnIDogJy9Db250ZW50L2Nzcy9ib290c3RyYXAuY3NzJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBTSURFQkFSXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFNpZGViYXIpO1xyXG5cclxuXHJcbiAgICB2YXIgJHdpbjtcclxuICAgIHZhciAkaHRtbDtcclxuICAgIHZhciAkYm9keTtcclxuICAgIHZhciAkc2lkZWJhcjtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2lkZWJhcigpIHtcclxuXHJcbiAgICAgICAgJHdpbiA9ICQod2luZG93KTtcclxuICAgICAgICAkaHRtbCA9ICQoJ2h0bWwnKTtcclxuICAgICAgICAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICAkc2lkZWJhciA9ICQoJy5zaWRlYmFyJyk7XHJcblxyXG4gICAgICAgIC8vIEFVVE9DT0xMQVBTRSBJVEVNU1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHZhciBzaWRlYmFyQ29sbGFwc2UgPSAkc2lkZWJhci5maW5kKCcuY29sbGFwc2UnKTtcclxuICAgICAgICBzaWRlYmFyQ29sbGFwc2Uub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudHMoJy5jb2xsYXBzZScpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHNpZGViYXJDb2xsYXBzZS5maWx0ZXIoJy5zaG93JykuY29sbGFwc2UoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNJREVCQVIgQUNUSVZFIFNUQVRFXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgLy8gRmluZCBjdXJyZW50IGFjdGl2ZSBpdGVtXHJcbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gJCgnLnNpZGViYXIgLmFjdGl2ZScpLnBhcmVudHMoJ2xpJyk7XHJcblxyXG4gICAgICAgIC8vIGhvdmVyIG1vZGUgZG9uJ3QgdHJ5IHRvIGV4cGFuZCBhY3RpdmUgY29sbGFwc2VcclxuICAgICAgICBpZiAoIXVzZUFzaWRlSG92ZXIoKSlcclxuICAgICAgICAgICAgY3VycmVudEl0ZW1cclxuICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKSAvLyBhY3RpdmF0ZSB0aGUgcGFyZW50XHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLmNvbGxhcHNlJykgLy8gZmluZCB0aGUgY29sbGFwc2VcclxuICAgICAgICAgICAgLmNvbGxhcHNlKCdzaG93Jyk7IC8vIGFuZCBzaG93IGl0XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGlzIGlmIHlvdSB1c2Ugb25seSBjb2xsYXBzaWJsZSBzaWRlYmFyIGl0ZW1zXHJcbiAgICAgICAgJHNpZGViYXIuZmluZCgnbGkgPiBhICsgdWwnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKHVzZUFzaWRlSG92ZXIoKSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTSURFQkFSIENPTExBUFNFRCBJVEVNIEhBTkRMRVJcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGlzVG91Y2goKSA/ICdjbGljaycgOiAnbW91c2VlbnRlcic7XHJcbiAgICAgICAgdmFyIHN1Yk5hdiA9ICQoKTtcclxuICAgICAgICAkc2lkZWJhci5vbihldmVudE5hbWUsICcuc2lkZWJhci1uYXYgPiBsaScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzU2lkZWJhckNvbGxhcHNlZCgpIHx8IHVzZUFzaWRlSG92ZXIoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN1Yk5hdi50cmlnZ2VyKCdtb3VzZWxlYXZlJyk7XHJcbiAgICAgICAgICAgICAgICBzdWJOYXYgPSB0b2dnbGVNZW51SXRlbSgkKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVc2VkIHRvIGRldGVjdCBjbGljayBhbmQgdG91Y2ggZXZlbnRzIG91dHNpZGUgdGhlIHNpZGViYXJcclxuICAgICAgICAgICAgICAgIHNpZGViYXJBZGRCYWNrZHJvcCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgc2lkZWJhckFueWNsaWNrQ2xvc2UgPSAkc2lkZWJhci5kYXRhKCdzaWRlYmFyQW55Y2xpY2tDbG9zZScpO1xyXG5cclxuICAgICAgICAvLyBBbGxvd3MgdG8gY2xvc2VcclxuICAgICAgICBpZiAodHlwZW9mIHNpZGViYXJBbnljbGlja0Nsb3NlICE9PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgICAgICAgICAgJCgnLndyYXBwZXInKS5vbignY2xpY2suc2lkZWJhcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRvbid0IGNoZWNrIGlmIHNpZGViYXIgbm90IHZpc2libGVcclxuICAgICAgICAgICAgICAgIGlmICghJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLXRvZ2dsZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoISR0YXJnZXQucGFyZW50cygnLmFzaWRlLWNvbnRhaW5lcicpLmxlbmd0aCAmJiAvLyBpZiBub3QgY2hpbGQgb2Ygc2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgICEkdGFyZ2V0LmlzKCcjdXNlci1ibG9jay10b2dnbGUnKSAmJiAvLyB1c2VyIGJsb2NrIHRvZ2dsZSBhbmNob3JcclxuICAgICAgICAgICAgICAgICAgICAhJHRhcmdldC5wYXJlbnQoKS5pcygnI3VzZXItYmxvY2stdG9nZ2xlJykgLy8gdXNlciBibG9jayB0b2dnbGUgaWNvblxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ2FzaWRlLXRvZ2dsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaWRlYmFyQWRkQmFja2Ryb3AoKSB7XHJcbiAgICAgICAgdmFyICRiYWNrZHJvcCA9ICQoJzxkaXYvPicsIHsgJ2NsYXNzJzogJ2Ryb3Bkb3duLWJhY2tkcm9wJyB9KTtcclxuICAgICAgICAkYmFja2Ryb3AuaW5zZXJ0QWZ0ZXIoJy5hc2lkZS1jb250YWluZXInKS5vbihcImNsaWNrIG1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZsb2F0aW5nTmF2KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3BlbiB0aGUgY29sbGFwc2Ugc2lkZWJhciBzdWJtZW51IGl0ZW1zIHdoZW4gb24gdG91Y2ggZGV2aWNlc1xyXG4gICAgLy8gLSBkZXNrdG9wIG9ubHkgb3BlbnMgb24gaG92ZXJcclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRvdWNoSXRlbSgkZWxlbWVudCkge1xyXG4gICAgICAgICRlbGVtZW50XHJcbiAgICAgICAgICAgIC5zaWJsaW5ncygnbGknKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ29wZW4nKVxyXG4gICAgICAgICAgICAuZW5kKClcclxuICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlcyBob3ZlciB0byBvcGVuIGl0ZW1zIHVuZGVyIGNvbGxhcHNlZCBtZW51XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudUl0ZW0oJGxpc3RJdGVtKSB7XHJcblxyXG4gICAgICAgIHJlbW92ZUZsb2F0aW5nTmF2KCk7XHJcblxyXG4gICAgICAgIHZhciB1bCA9ICRsaXN0SXRlbS5jaGlsZHJlbigndWwnKTtcclxuXHJcbiAgICAgICAgaWYgKCF1bC5sZW5ndGgpIHJldHVybiAkKCk7XHJcbiAgICAgICAgaWYgKCRsaXN0SXRlbS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVRvdWNoSXRlbSgkbGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gJCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyICRhc2lkZSA9ICQoJy5hc2lkZS1jb250YWluZXInKTtcclxuICAgICAgICB2YXIgJGFzaWRlSW5uZXIgPSAkKCcuYXNpZGUtaW5uZXInKTsgLy8gZm9yIHRvcCBvZmZzZXQgY2FsY3VsYXRpb25cclxuICAgICAgICAvLyBmbG9hdCBhc2lkZSB1c2VzIGV4dHJhIHBhZGRpbmcgb24gYXNpZGVcclxuICAgICAgICB2YXIgbWFyID0gcGFyc2VJbnQoJGFzaWRlSW5uZXIuY3NzKCdwYWRkaW5nLXRvcCcpLCAwKSArIHBhcnNlSW50KCRhc2lkZS5jc3MoJ3BhZGRpbmctdG9wJyksIDApO1xyXG5cclxuICAgICAgICB2YXIgc3ViTmF2ID0gdWwuY2xvbmUoKS5hcHBlbmRUbygkYXNpZGUpO1xyXG5cclxuICAgICAgICB0b2dnbGVUb3VjaEl0ZW0oJGxpc3RJdGVtKTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1Ub3AgPSAoJGxpc3RJdGVtLnBvc2l0aW9uKCkudG9wICsgbWFyKSAtICRzaWRlYmFyLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHZhciB2d0hlaWdodCA9ICR3aW4uaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIHN1Yk5hdlxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ25hdi1mbG9hdGluZycpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGlzRml4ZWQoKSA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBpdGVtVG9wLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAoc3ViTmF2Lm91dGVySGVpZ2h0KHRydWUpICsgaXRlbVRvcCA+IHZ3SGVpZ2h0KSA/IDAgOiAnYXV0bydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN1Yk5hdi5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVUb3VjaEl0ZW0oJGxpc3RJdGVtKTtcclxuICAgICAgICAgICAgc3ViTmF2LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3ViTmF2O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZsb2F0aW5nTmF2KCkge1xyXG4gICAgICAgICQoJy5zaWRlYmFyLXN1Ym5hdi5uYXYtZmxvYXRpbmcnKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCcuZHJvcGRvd24tYmFja2Ryb3AnKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCcuc2lkZWJhciBsaS5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1RvdWNoKCkge1xyXG4gICAgICAgIHJldHVybiAkaHRtbC5oYXNDbGFzcygndG91Y2gnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1NpZGViYXJDb2xsYXBzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICRib2R5Lmhhc0NsYXNzKCdhc2lkZS1jb2xsYXBzZWQnKSB8fCAkYm9keS5oYXNDbGFzcygnYXNpZGUtY29sbGFwc2VkLXRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1NpZGViYXJUb2dnbGVkKCkge1xyXG4gICAgICAgIHJldHVybiAkYm9keS5oYXNDbGFzcygnYXNpZGUtdG9nZ2xlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gICAgICAgIHJldHVybiAkd2luLndpZHRoKCkgPCBBUFBfTUVESUFRVUVSWS50YWJsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGaXhlZCgpIHtcclxuICAgICAgICByZXR1cm4gJGJvZHkuaGFzQ2xhc3MoJ2xheW91dC1maXhlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVzZUFzaWRlSG92ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICRib2R5Lmhhc0NsYXNzKCdhc2lkZS1ob3ZlcicpO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gU0xJTVNDUk9MTFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFNsaW1zU3JvbGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTbGltc1Nyb2xsKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0SGVpZ2h0ID0gMjUwO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zbGltU2Nyb2xsKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogKGVsZW1lbnQuZGF0YSgnaGVpZ2h0JykgfHwgZGVmYXVsdEhlaWdodClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ3VzdG9tIGpRdWVyeVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRUYWJsZUNoZWNrQWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0VGFibGVDaGVja0FsbCgpIHtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY2hlY2stYWxsXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gJHRoaXMuaW5kZXgoKSArIDEsXHJcbiAgICAgICAgICAgICAgICBjaGVja2JveCA9ICR0aGlzLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLFxyXG4gICAgICAgICAgICAgICAgdGFibGUgPSAkdGhpcy5wYXJlbnRzKCd0YWJsZScpO1xyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdG8gYWZmZWN0IG9ubHkgdGhlIGNvcnJlY3QgY2hlY2tib3ggY29sdW1uXHJcbiAgICAgICAgICAgIHRhYmxlLmZpbmQoJ3Rib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoJyArIGluZGV4ICsgJykgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcclxuICAgICAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgY2hlY2tib3hbMF0uY2hlY2tlZCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFRPR0dMRSBTVEFURVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFRvZ2dsZVN0YXRlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0VG9nZ2xlU3RhdGUoKSB7XHJcblxyXG4gICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICB2YXIgdG9nZ2xlID0gbmV3IFN0YXRlVG9nZ2xlcigpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS10b2dnbGUtc3RhdGVdJylcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lID0gZWxlbWVudC5kYXRhKCd0b2dnbGVTdGF0ZScpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGVsZW1lbnQuZGF0YSgndGFyZ2V0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9QZXJzaXN0ID0gKGVsZW1lbnQuYXR0cignZGF0YS1uby1wZXJzaXN0JykgIT09IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3BlY2lmeSBhIHRhcmdldCBzZWxlY3RvciB0byB0b2dnbGUgY2xhc3NuYW1lXHJcbiAgICAgICAgICAgICAgICAvLyB1c2UgYm9keSBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICB2YXIgJHRhcmdldCA9IHRhcmdldCA/ICQodGFyZ2V0KSA6ICRib2R5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHRhcmdldC5oYXNDbGFzcyhjbGFzc25hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoY2xhc3NuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub1BlcnNpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUucmVtb3ZlU3RhdGUoY2xhc3NuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKGNsYXNzbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9QZXJzaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmFkZFN0YXRlKGNsYXNzbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzb21lIGVsZW1lbnRzIG1heSBuZWVkIHRoaXMgd2hlbiB0b2dnbGVkIGNsYXNzIGNoYW5nZSB0aGUgY29udGVudCBzaXplXHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlIHN0YXRlcyB0by9mcm9tIGxvY2Fsc3RvcmFnZVxyXG4gICAgdmFyIFN0YXRlVG9nZ2xlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgU1RPUkFHRV9LRVlfTkFNRSA9ICdqcS10b2dnbGVTdGF0ZSc7XHJcblxyXG4gICAgICAgIC8qKiBBZGQgYSBzdGF0ZSB0byB0aGUgYnJvd3NlciBzdG9yYWdlIHRvIGJlIHJlc3RvcmVkIGxhdGVyICovXHJcbiAgICAgICAgdGhpcy5hZGRTdGF0ZSA9IGZ1bmN0aW9uKGNsYXNzbmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5nZXQoU1RPUkFHRV9LRVlfTkFNRSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpIGRhdGEucHVzaChjbGFzc25hbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGRhdGEgPSBbY2xhc3NuYW1lXTtcclxuICAgICAgICAgICAgU3RvcmFnZXMubG9jYWxTdG9yYWdlLnNldChTVE9SQUdFX0tFWV9OQU1FLCBkYXRhKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKiBSZW1vdmUgYSBzdGF0ZSBmcm9tIHRoZSBicm93c2VyIHN0b3JhZ2UgKi9cclxuICAgICAgICB0aGlzLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24oY2xhc3NuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gU3RvcmFnZXMubG9jYWxTdG9yYWdlLmdldChTVE9SQUdFX0tFWV9OQU1FKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGRhdGEuaW5kZXhPZihjbGFzc25hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkgZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZXMubG9jYWxTdG9yYWdlLnNldChTVE9SQUdFX0tFWV9OQU1FLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqIExvYWQgdGhlIHN0YXRlIHN0cmluZyBhbmQgcmVzdG9yZSB0aGUgY2xhc3NsaXN0ICovXHJcbiAgICAgICAgdGhpcy5yZXN0b3JlU3RhdGUgPSBmdW5jdGlvbigkZWxlbSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5nZXQoU1RPUkFHRV9LRVlfTkFNRSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICAkZWxlbS5hZGRDbGFzcyhkYXRhLmpvaW4oJyAnKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LlN0YXRlVG9nZ2xlciA9IFN0YXRlVG9nZ2xlcjtcclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBNb2R1bGU6IHRyaWdnZXItcmVzaXplLmpzXHJcbiAqIFRyaWdnZXJzIGEgd2luZG93IHJlc2l6ZSBldmVudCBmcm9tIGFueSBlbGVtZW50XHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFRyaWdnZXJSZXNpemUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRUcmlnZ2VyUmVzaXplKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gJCgnW2RhdGEtdHJpZ2dlci1yZXNpemVdJyk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZWxlbWVudC5kYXRhKCd0cmlnZ2VyUmVzaXplJylcclxuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxsIElFIGZyaWVuZGx5IGRpc3BhdGNoRXZlbnRcclxuICAgICAgICAgICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnVUlFdmVudHMnKTtcclxuICAgICAgICAgICAgICAgIGV2dC5pbml0VUlFdmVudCgncmVzaXplJywgdHJ1ZSwgZmFsc2UsIHdpbmRvdywgMCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gbW9kZXJuIGRpc3BhdGNoRXZlbnQgd2F5XHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuICAgICAgICAgICAgfSwgdmFsdWUgfHwgMzAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIERlbW8gQ2FyZHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRDYXJkRGVtbyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhcmREZW1vKCkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9ucyBzaG93IGEgZGVtb25zdHJhdGlvbiBvZiBob3cgdG8gdXNlXHJcbiAgICAgICAgICogdGhlIGNhcmQgdG9vbHMgc3lzdGVtIHZpYSBjdXN0b20gZXZlbnQuXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICQoJy5jYXJkLmNhcmQtZGVtbycpXHJcbiAgICAgICAgICAgIC5vbignY2FyZC5yZWZyZXNoJywgZnVuY3Rpb24oZSwgY2FyZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHBlcmZvcm0gYW55IGFjdGlvbiB3aGVuIGEgLmNhcmQgdHJpZ2dlcnMgYSByZWZyZXNoIGV2ZW50XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBhY3Rpb24gaXMgZG9uZSwganVzdCByZW1vdmUgdGhlIHNwaW5uZXIgY2xhc3NcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLnJlbW92ZVNwaW5uZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignaGlkZS5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhcmQgQ29sbGFwc2UgSGlkZScpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FyZCBDb2xsYXBzZSBTaG93Jyk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NhcmQucmVtb3ZlJywgZnVuY3Rpb24oZXZlbnQsIGNhcmQsIGRlZmVycmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZpbmcgQ2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FsbCByZXNvbHZlKCkgdG8gY29udGludWUgcmVtb3ZpbmcgdGhlIGNhcmRcclxuICAgICAgICAgICAgICAgIC8vIHBlcmZvcm0gY2hlY2tzIHRvIGF2b2lkIHJlbW92aW5nIGNhcmQgaWYgc29tZSB1c2VyIGFjdGlvbiBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NhcmQucmVtb3ZlZCcsIGZ1bmN0aW9uKGV2ZW50LCBjYXJkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZWQgQ2FyZCcpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gTmVzdGFibGUgZGVtb1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdE5lc3RhYmxlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TmVzdGFibGUoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5uZXN0YWJsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgdXBkYXRlT3V0cHV0ID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IGUubGVuZ3RoID8gZSA6ICQoZS50YXJnZXQpLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gbGlzdC5kYXRhKCdvdXRwdXQnKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5KU09OKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsKHdpbmRvdy5KU09OLnN0cmluZ2lmeShsaXN0Lm5lc3RhYmxlKCdzZXJpYWxpemUnKSkpOyAvLywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbCgnSlNPTiBicm93c2VyIHN1cHBvcnQgcmVxdWlyZWQgZm9yIHRoaXMgZGVtby4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGFjdGl2YXRlIE5lc3RhYmxlIGZvciBsaXN0IDFcclxuICAgICAgICAkKCcjbmVzdGFibGUnKS5uZXN0YWJsZSh7XHJcbiAgICAgICAgICAgICAgICBncm91cDogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NoYW5nZScsIHVwZGF0ZU91dHB1dCk7XHJcblxyXG4gICAgICAgIC8vIGFjdGl2YXRlIE5lc3RhYmxlIGZvciBsaXN0IDJcclxuICAgICAgICAkKCcjbmVzdGFibGUyJykubmVzdGFibGUoe1xyXG4gICAgICAgICAgICAgICAgZ3JvdXA6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCB1cGRhdGVPdXRwdXQpO1xyXG5cclxuICAgICAgICAvLyBvdXRwdXQgaW5pdGlhbCBzZXJpYWxpc2VkIGRhdGFcclxuICAgICAgICB1cGRhdGVPdXRwdXQoJCgnI25lc3RhYmxlJykuZGF0YSgnb3V0cHV0JywgJCgnI25lc3RhYmxlLW91dHB1dCcpKSk7XHJcbiAgICAgICAgdXBkYXRlT3V0cHV0KCQoJyNuZXN0YWJsZTInKS5kYXRhKCdvdXRwdXQnLCAkKCcjbmVzdGFibGUyLW91dHB1dCcpKSk7XHJcblxyXG4gICAgICAgICQoJy5qcy1uZXN0YWJsZS1hY3Rpb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRhcmdldC5kYXRhKCdhY3Rpb24nKTtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2V4cGFuZC1hbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZGQnKS5uZXN0YWJsZSgnZXhwYW5kQWxsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2NvbGxhcHNlLWFsbCcpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kZCcpLm5lc3RhYmxlKCdjb2xsYXBzZUFsbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIE1vZHVsZTogbm90aWZ5LmpzXHJcbiAqIENyZWF0ZSB0b2dnbGVhYmxlIG5vdGlmaWNhdGlvbnMgdGhhdCBmYWRlIG91dCBhdXRvbWF0aWNhbGx5LlxyXG4gKiBCYXNlZCBvbiBOb3RpZnkgYWRkb24gZnJvbSBVSUtpdCAoaHR0cDovL2dldHVpa2l0LmNvbS9kb2NzL2FkZG9uc19ub3RpZnkuaHRtbClcclxuICogW2RhdGEtdG9nZ2xlPVwibm90aWZ5XCJdXHJcbiAqIFtkYXRhLW9wdGlvbnM9XCJvcHRpb25zIGluIGpzb24gZm9ybWF0XCIgXVxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXROb3RpZnkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXROb3RpZnkoKSB7XHJcblxyXG4gICAgICAgIHZhciBTZWxlY3RvciA9ICdbZGF0YS1ub3RpZnldJyxcclxuICAgICAgICAgICAgYXV0b2xvYWRTZWxlY3RvciA9ICdbZGF0YS1vbmxvYWRdJyxcclxuICAgICAgICAgICAgZG9jID0gJChkb2N1bWVudCk7XHJcblxyXG4gICAgICAgICQoU2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgb25sb2FkID0gJHRoaXMuZGF0YSgnb25sb2FkJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAob25sb2FkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5Tm93KCR0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICR0aGlzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIG5vdGlmeU5vdygkdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbm90aWZ5Tm93KCRlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSAkZWxlbWVudC5kYXRhKCdtZXNzYWdlJyksXHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSAkZWxlbWVudC5kYXRhKCdvcHRpb25zJyk7XHJcblxyXG4gICAgICAgIGlmICghbWVzc2FnZSlcclxuICAgICAgICAgICAgJC5lcnJvcignTm90aWZ5OiBObyBtZXNzYWdlIHNwZWNpZmllZCcpO1xyXG5cclxuICAgICAgICAkLm5vdGlmeShtZXNzYWdlLCBvcHRpb25zIHx8IHt9KTtcclxuICAgIH1cclxuXHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcblxyXG4vKipcclxuICogTm90aWZ5IEFkZG9uIGRlZmluaXRpb24gYXMgalF1ZXJ5IHBsdWdpblxyXG4gKiBBZGFwdGVkIHZlcnNpb24gdG8gd29yayB3aXRoIEJvb3RzdHJhcCBjbGFzc2VzXHJcbiAqIE1vcmUgaW5mb3JtYXRpb24gaHR0cDovL2dldHVpa2l0LmNvbS9kb2NzL2FkZG9uc19ub3RpZnkuaHRtbFxyXG4gKi9cclxuXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50KSB7XHJcblxyXG4gICAgdmFyIGNvbnRhaW5lcnMgPSB7fSxcclxuICAgICAgICBtZXNzYWdlcyA9IHt9LFxyXG5cclxuICAgICAgICBub3RpZnkgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoJC50eXBlKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0geyBtZXNzYWdlOiBvcHRpb25zIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHNbMV0pIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChvcHRpb25zLCAkLnR5cGUoYXJndW1lbnRzWzFdKSA9PSAnc3RyaW5nJyA/IHsgc3RhdHVzOiBhcmd1bWVudHNbMV0gfSA6IGFyZ3VtZW50c1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAobmV3IE1lc3NhZ2Uob3B0aW9ucykpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlQWxsID0gZnVuY3Rpb24oZ3JvdXAsIGluc3RhbnRseSkge1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGlkIGluIG1lc3NhZ2VzKSB7IGlmIChncm91cCA9PT0gbWVzc2FnZXNbaWRdLmdyb3VwKSBtZXNzYWdlc1tpZF0uY2xvc2UoaW5zdGFudGx5KTsgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gbWVzc2FnZXMpIHsgbWVzc2FnZXNbaWRdLmNsb3NlKGluc3RhbnRseSk7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgdmFyIE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBNZXNzYWdlLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy51dWlkID0gXCJJRFwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSArIFwiUkFORFwiICsgKE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJChbXHJcbiAgICAgICAgICAgIC8vIGFsZXJ0LWRpc21pc3NhYmxlIGVuYWJsZXMgYnMgY2xvc2UgaWNvblxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInVrLW5vdGlmeS1tZXNzYWdlIGFsZXJ0LWRpc21pc3NhYmxlXCI+JyxcclxuICAgICAgICAgICAgJzxhIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9hPicsXHJcbiAgICAgICAgICAgICc8ZGl2PicgKyB0aGlzLm9wdGlvbnMubWVzc2FnZSArICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG5cclxuICAgICAgICBdLmpvaW4oJycpKS5kYXRhKFwibm90aWZ5TWVzc2FnZVwiLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gc3RhdHVzXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0dXMpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZENsYXNzKCdhbGVydCBhbGVydC0nICsgdGhpcy5vcHRpb25zLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudHN0YXR1cyA9IHRoaXMub3B0aW9ucy5zdGF0dXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdyb3VwID0gdGhpcy5vcHRpb25zLmdyb3VwO1xyXG5cclxuICAgICAgICBtZXNzYWdlc1t0aGlzLnV1aWRdID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCFjb250YWluZXJzW3RoaXMub3B0aW9ucy5wb3NdKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcnNbdGhpcy5vcHRpb25zLnBvc10gPSAkKCc8ZGl2IGNsYXNzPVwidWstbm90aWZ5IHVrLW5vdGlmeS0nICsgdGhpcy5vcHRpb25zLnBvcyArICdcIj48L2Rpdj4nKS5hcHBlbmRUbygnYm9keScpLm9uKFwiY2xpY2tcIiwgXCIudWstbm90aWZ5LW1lc3NhZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRhdGEoXCJub3RpZnlNZXNzYWdlXCIpLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgICQuZXh0ZW5kKE1lc3NhZ2UucHJvdG90eXBlLCB7XHJcblxyXG4gICAgICAgIHV1aWQ6IGZhbHNlLFxyXG4gICAgICAgIGVsZW1lbnQ6IGZhbHNlLFxyXG4gICAgICAgIHRpbW91dDogZmFsc2UsXHJcbiAgICAgICAgY3VycmVudHN0YXR1czogXCJcIixcclxuICAgICAgICBncm91cDogZmFsc2UsXHJcblxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyc1t0aGlzLm9wdGlvbnMucG9zXS5zaG93KCkucHJlcGVuZCh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hcmdpbmJvdHRvbSA9IHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tYm90dG9tXCIpLCAxMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY3NzKHsgXCJvcGFjaXR5XCI6IDAsIFwibWFyZ2luLXRvcFwiOiAtMSAqIHRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpLCBcIm1hcmdpbi1ib3R0b21cIjogMCB9KS5hbmltYXRlKHsgXCJvcGFjaXR5XCI6IDEsIFwibWFyZ2luLXRvcFwiOiAwLCBcIm1hcmdpbi1ib3R0b21cIjogbWFyZ2luYm90dG9tIH0sIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5vcHRpb25zLnRpbWVvdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlZm4gPSBmdW5jdGlvbigpIHsgJHRoaXMuY2xvc2UoKTsgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoY2xvc2VmbiwgJHRoaXMub3B0aW9ucy50aW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZWxlbWVudC5ob3ZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7IGNsZWFyVGltZW91dCgkdGhpcy50aW1lb3V0KTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7ICR0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsb3NlZm4sICR0aGlzLm9wdGlvbnMudGltZW91dCk7IH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oaW5zdGFudGx5KSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgZmluYWxpemUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lcnNbJHRoaXMub3B0aW9ucy5wb3NdLmNoaWxkcmVuKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcnNbJHRoaXMub3B0aW9ucy5wb3NdLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1skdGhpcy51dWlkXTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0KSBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnN0YW50bHkpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsaXplKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYW5pbWF0ZSh7IFwib3BhY2l0eVwiOiAwLCBcIm1hcmdpbi10b3BcIjogLTEgKiB0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKSwgXCJtYXJnaW4tYm90dG9tXCI6IDAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29udGVudDogZnVuY3Rpb24oaHRtbCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5maW5kKFwiPmRpdlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5odG1sKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5odG1sKGh0bWwpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc3RhdHVzOiBmdW5jdGlvbihzdGF0dXMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50c3RhdHVzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2FsZXJ0IGFsZXJ0LScgKyB0aGlzLmN1cnJlbnRzdGF0dXMpLmFkZENsYXNzKCdhbGVydCBhbGVydC0nICsgc3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudHN0YXR1cyA9IHN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIE1lc3NhZ2UuZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgdGltZW91dDogNTAwMCxcclxuICAgICAgICBncm91cDogbnVsbCxcclxuICAgICAgICBwb3M6ICd0b3AtY2VudGVyJ1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgJFtcIm5vdGlmeVwiXSA9IG5vdGlmeTtcclxuICAgICRbXCJub3RpZnlcIl0ubWVzc2FnZSA9IE1lc3NhZ2U7XHJcbiAgICAkW1wibm90aWZ5XCJdLmNsb3NlQWxsID0gY2xvc2VBbGw7XHJcblxyXG4gICAgcmV0dXJuIG5vdGlmeTtcclxuXHJcbn0oalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KSk7IiwiLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIE1vZHVsZTogcGxheS1hbmltYXRpb24uanNcclxuICogUHJvdmlkZXMgYSBzaW1wbGUgd2F5IHRvIHJ1biBhbmltYXRpb24gd2l0aCBhIGNsaWNrXHJcbiAqIFRhcmdldGVkIGVsZW1lbnRzIG11c3QgaGF2ZVxyXG4gKiAgIFtkYXRhLWFuaW1hdGVcIl1cclxuICogICBbZGF0YS10YXJnZXQ9XCJUYXJnZXQgZWxlbWVudCBhZmZlY3RlZCBieSB0aGUgYW5pbWF0aW9uXCJdXHJcbiAqICAgW2RhdGEtcGxheT1cIkFuaW1hdGlvbiBuYW1lIChodHRwOi8vZGFuZWRlbi5naXRodWIuaW8vYW5pbWF0ZS5jc3MvKVwiXVxyXG4gKlxyXG4gKiBSZXF1aXJlcyBhbmltby5qc1xyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRQbGF5QW5pbWF0aW9uKVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRQbGF5QW5pbWF0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgU2VsZWN0b3IgPSAnW2RhdGEtYW5pbWF0ZV0nO1xyXG5cclxuICAgICAgICAvLyBSdW4gY2xpY2sgdHJpZ2dlcmVkIGFuaW1hdGlvbnNcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3RvciwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0U2VsID0gJHRoaXMuZGF0YSgndGFyZ2V0JyksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24gPSAkdGhpcy5kYXRhKCdwbGF5JykgfHwgJ2JvdW5jZSc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0U2VsKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRhcmdldFNlbCkuYW5pbW8oeyBhbmltYXRpb246IGFuaW1hdGlvbiB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogTW9kdWxlOiBwb3J0bGV0LmpzXHJcbiAqIERyYWcgYW5kIGRyb3AgYW55IGNhcmQgdG8gY2hhbmdlIGl0cyBwb3NpdGlvblxyXG4gKiBUaGUgU2VsZWN0b3Igc2hvdWxkIGNvdWxkIGJlIGFwcGxpZWQgdG8gYW55IG9iamVjdCB0aGF0IGNvbnRhaW5zXHJcbiAqIGNhcmQsIHNvIC5jb2wtKiBlbGVtZW50IGFyZSBpZGVhbC5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIFNUT1JBR0VfS0VZX05BTUUgPSAnanEtcG9ydGxldFN0YXRlJztcclxuXHJcbiAgICAkKGluaXRQb3J0bGV0cyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFBvcnRsZXRzKCkge1xyXG5cclxuICAgICAgICAvLyBDb21wb25lbnQgaXMgTk9UIG9wdGlvbmFsXHJcbiAgICAgICAgaWYgKCEkLmZuLnNvcnRhYmxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBTZWxlY3RvciA9ICdbZGF0YS10b2dnbGU9XCJwb3J0bGV0XCJdJztcclxuXHJcbiAgICAgICAgJChTZWxlY3Rvcikuc29ydGFibGUoe1xyXG4gICAgICAgICAgICBjb25uZWN0V2l0aDogICAgICAgICAgU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIGl0ZW1zOiAgICAgICAgICAgICAgICAnZGl2LmNhcmQnLFxyXG4gICAgICAgICAgICBoYW5kbGU6ICAgICAgICAgICAgICAgJy5wb3J0bGV0LWhhbmRsZXInLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAgICAgICAgICAgICAgMC43LFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogICAgICAgICAgJ3BvcnRsZXQgYm94LXBsYWNlaG9sZGVyJyxcclxuICAgICAgICAgICAgY2FuY2VsOiAgICAgICAgICAgICAgICcucG9ydGxldC1jYW5jZWwnLFxyXG4gICAgICAgICAgICBmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgaWZyYW1lRml4OiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICB0b2xlcmFuY2U6ICAgICAgICAgICAgJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICBoZWxwZXI6ICAgICAgICAgICAgICAgJ29yaWdpbmFsJyxcclxuICAgICAgICAgICAgcmV2ZXJ0OiAgICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgZm9yY2VIZWxwZXJTaXplOiAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIHVwZGF0ZTogICAgICAgICAgICAgICBzYXZlUG9ydGxldE9yZGVyLFxyXG4gICAgICAgICAgICBjcmVhdGU6ICAgICAgICAgICAgICAgbG9hZFBvcnRsZXRPcmRlclxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gb3B0aW9uYWxseSBkaXNhYmxlcyBtb3VzZSBzZWxlY3Rpb25cclxuICAgICAgICAvLy5kaXNhYmxlU2VsZWN0aW9uKClcclxuICAgICAgICA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVQb3J0bGV0T3JkZXIoZXZlbnQsIHVpKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gU3RvcmFnZXMubG9jYWxTdG9yYWdlLmdldChTVE9SQUdFX0tFWV9OQU1FKTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhKSB7IGRhdGEgPSB7fTsgfVxyXG5cclxuICAgICAgICBkYXRhW3RoaXMuaWRdID0gJCh0aGlzKS5zb3J0YWJsZSgndG9BcnJheScpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBTdG9yYWdlcy5sb2NhbFN0b3JhZ2Uuc2V0KFNUT1JBR0VfS0VZX05BTUUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFBvcnRsZXRPcmRlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KFNUT1JBR0VfS0VZX05BTUUpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvcmxldElkID0gdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIGNhcmRzID0gZGF0YVtwb3JsZXRJZF07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FyZHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3J0bGV0ID0gJCgnIycgKyBwb3JsZXRJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKGNhcmRzLCBmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlKS5hcHBlbmRUbyhwb3J0bGV0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXQgcG9ybGV0IHNhdmUgc3RhdGVcclxuICAgIHdpbmRvdy5yZXNldFBvcmxldHMgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgU3RvcmFnZXMubG9jYWxTdG9yYWdlLnJlbW92ZShTVE9SQUdFX0tFWV9OQU1FKTtcclxuICAgICAgICAvLyByZWxvYWQgdGhlIHBhZ2VcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBIVE1MNSBTb3J0YWJsZSBkZW1vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U29ydGFibGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTb3J0YWJsZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzb3J0YWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgc29ydGFibGUoJy5zb3J0YWJsZScsIHtcclxuICAgICAgICAgICAgZm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnPGRpdiBjbGFzcz1cImJveC1wbGFjZWhvbGRlciBwMCBtMFwiPjxkaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFN3ZWV0IEFsZXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U3dlZXRBbGVydCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFN3ZWV0QWxlcnQoKSB7XHJcblxyXG4gICAgICAgICQoJyNzd2FsLWRlbW8xJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN3YWwoXCJIZXJlJ3MgYSBtZXNzYWdlIVwiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjc3dhbC1kZW1vMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzd2FsKFwiSGVyZSdzIGEgbWVzc2FnZSFcIiwgXCJJdCdzIHByZXR0eSwgaXNuJ3QgaXQ/XCIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNzd2FsLWRlbW8zJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN3YWwoXCJHb29kIGpvYiFcIiwgXCJZb3UgY2xpY2tlZCB0aGUgYnV0dG9uIVwiLCBcInN1Y2Nlc3NcIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI3N3YWwtZGVtbzQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IHdpbGwgbm90IGJlIGFibGUgdG8gcmVjb3ZlciB0aGlzIGltYWdpbmFyeSBmaWxlIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiNERDZCNTVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ29uZmlybTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKFwiRGVsZXRlZCFcIiwgXCJZb3VyIGltYWdpbmFyeSBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI3N3YWwtZGVtbzUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJlY292ZXIgdGhpcyBpbWFnaW5hcnkgZmlsZSFcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjREQ2QjU1XCIsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSBpdCFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIGNhbmNlbCBwbHghXCIsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ29uZmlybTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihpc0NvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0NvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKFwiRGVsZXRlZCFcIiwgXCJZb3VyIGltYWdpbmFyeSBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbChcIkNhbmNlbGxlZFwiLCBcIllvdXIgaW1hZ2luYXJ5IGZpbGUgaXMgc2FmZSA6KVwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ3VzdG9tIGpRdWVyeVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBXaGVuIGRvbSByZWFkeSwgaW5pdCBjYWxlbmRhciBhbmQgZXZlbnRzXHJcbiAgICAkKGluaXRGdWxsQ2FsZW5kYXIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGdWxsQ2FsZW5kYXIoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5mdWxsQ2FsZW5kYXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGRpc3BsYXkgdGhlIGNhbGVuZGFyXHJcbiAgICAgICAgdmFyIGNhbGVuZGFyID0gJCgnI2NhbGVuZGFyJyk7XHJcblxyXG4gICAgICAgIHZhciBkZW1vRXZlbnRzID0gY3JlYXRlRGVtb0V2ZW50cygpO1xyXG5cclxuICAgICAgICBpbml0RXh0ZXJuYWxFdmVudHMoY2FsZW5kYXIpO1xyXG5cclxuICAgICAgICBpbml0Q2FsZW5kYXIoY2FsZW5kYXIsIGRlbW9FdmVudHMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gZ2xvYmFsIHNoYXJlZCB2YXIgdG8ga25vdyB3aGF0IHdlIGFyZSBkcmFnZ2luZ1xyXG4gICAgdmFyIGRyYWdnaW5nRXZlbnQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0ZXJuYWxFdmVudCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBqUXVlcnkgT2JqZWN0IGVsZW1lbnRzIFNldCBvZiBlbGVtZW50IGFzIGpRdWVyeSBvYmplY3RzXHJcbiAgICAgKi9cclxuICAgIHZhciBFeHRlcm5hbEV2ZW50ID0gZnVuY3Rpb24oZWxlbWVudHMpIHtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50cykgcmV0dXJuO1xyXG5cclxuICAgICAgICBlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gRXZlbnQgT2JqZWN0IChodHRwOi8vYXJzaGF3LmNvbS9mdWxsY2FsZW5kYXIvZG9jcy9ldmVudF9kYXRhL0V2ZW50X09iamVjdC8pXHJcbiAgICAgICAgICAgIC8vIGl0IGRvZXNuJ3QgbmVlZCB0byBoYXZlIGEgc3RhcnQgb3IgZW5kXHJcbiAgICAgICAgICAgIHZhciBjYWxlbmRhckV2ZW50T2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICQudHJpbSgkdGhpcy50ZXh0KCkpIC8vIHVzZSB0aGUgZWxlbWVudCdzIHRleHQgYXMgdGhlIGV2ZW50IHRpdGxlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9yZSB0aGUgRXZlbnQgT2JqZWN0IGluIHRoZSBET00gZWxlbWVudCBzbyB3ZSBjYW4gZ2V0IHRvIGl0IGxhdGVyXHJcbiAgICAgICAgICAgICR0aGlzLmRhdGEoJ2NhbGVuZGFyRXZlbnRPYmplY3QnLCBjYWxlbmRhckV2ZW50T2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIGV2ZW50IGRyYWdnYWJsZSB1c2luZyBqUXVlcnkgVUlcclxuICAgICAgICAgICAgJHRoaXMuZHJhZ2dhYmxlKHtcclxuICAgICAgICAgICAgICAgIHpJbmRleDogMTA3MCxcclxuICAgICAgICAgICAgICAgIHJldmVydDogdHJ1ZSwgLy8gd2lsbCBjYXVzZSB0aGUgZXZlbnQgdG8gZ28gYmFjayB0byBpdHNcclxuICAgICAgICAgICAgICAgIHJldmVydER1cmF0aW9uOiAwIC8vICBvcmlnaW5hbCBwb3NpdGlvbiBhZnRlciB0aGUgZHJhZ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlIGZ1bGwgY2FsZW5kYXIgcGx1Z2luIGFuZCBhdHRhY2ggYmVoYXZpb3JcclxuICAgICAqIEBwYXJhbSAgalF1ZXJ5IFtjYWxFbGVtZW50XSBUaGUgY2FsZW5kYXIgZG9tIGVsZW1lbnQgd3JhcHBlZCBpbnRvIGpRdWVyeVxyXG4gICAgICogQHBhcmFtICBFdmVudE9iamVjdCBbZXZlbnRzXSBBbiBvYmplY3Qgd2l0aCB0aGUgZXZlbnQgbGlzdCB0byBsb2FkIHdoZW4gdGhlIGNhbGVuZGFyIGRpc3BsYXlzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluaXRDYWxlbmRhcihjYWxFbGVtZW50LCBldmVudHMpIHtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgdG8gcmVtb3ZlIGVsZW1lbnRzIGZyb20gdGhlIGxpc3RcclxuICAgICAgICB2YXIgcmVtb3ZlQWZ0ZXJEcm9wID0gJCgnI3JlbW92ZS1hZnRlci1kcm9wJyk7XHJcblxyXG4gICAgICAgIGNhbEVsZW1lbnQuZnVsbENhbGVuZGFyKHtcclxuICAgICAgICAgICAgLy8gaXNSVEw6IHRydWUsXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICByaWdodDogJ21vbnRoLGFnZW5kYVdlZWssYWdlbmRhRGF5J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBidXR0b25JY29uczogeyAvLyBub3RlIHRoZSBzcGFjZSBhdCB0aGUgYmVnaW5uaW5nXHJcbiAgICAgICAgICAgICAgICBwcmV2OiAnIGZhIGZhLWNhcmV0LWxlZnQnLFxyXG4gICAgICAgICAgICAgICAgbmV4dDogJyBmYSBmYS1jYXJldC1yaWdodCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnV0dG9uVGV4dDoge1xyXG4gICAgICAgICAgICAgICAgdG9kYXk6ICd0b2RheScsXHJcbiAgICAgICAgICAgICAgICBtb250aDogJ21vbnRoJyxcclxuICAgICAgICAgICAgICAgIHdlZWs6ICd3ZWVrJyxcclxuICAgICAgICAgICAgICAgIGRheTogJ2RheSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRyb3BwYWJsZTogdHJ1ZSwgLy8gdGhpcyBhbGxvd3MgdGhpbmdzIHRvIGJlIGRyb3BwZWQgb250byB0aGUgY2FsZW5kYXJcclxuICAgICAgICAgICAgZHJvcDogZnVuY3Rpb24oZGF0ZSwgYWxsRGF5KSB7IC8vIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gc29tZXRoaW5nIGlzIGRyb3BwZWRcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBkcm9wcGVkIGVsZW1lbnQncyBzdG9yZWQgRXZlbnQgT2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudE9iamVjdCA9ICR0aGlzLmRhdGEoJ2NhbGVuZGFyRXZlbnRPYmplY3QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiBzb21ldGhpbmcgd2VudCB3cm9uZywgYWJvcnRcclxuICAgICAgICAgICAgICAgIGlmICghb3JpZ2luYWxFdmVudE9iamVjdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNsb25lIHRoZSBvYmplY3QgdG8gYXZvaWQgbXVsdGlwbGUgZXZlbnRzIHdpdGggcmVmZXJlbmNlIHRvIHRoZSBzYW1lIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgdmFyIGNsb25lZEV2ZW50T2JqZWN0ID0gJC5leHRlbmQoe30sIG9yaWdpbmFsRXZlbnRPYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbiB0aGUgcmVwb3J0ZWQgZGF0ZVxyXG4gICAgICAgICAgICAgICAgY2xvbmVkRXZlbnRPYmplY3Quc3RhcnQgPSBkYXRlO1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkRXZlbnRPYmplY3QuYWxsRGF5ID0gYWxsRGF5O1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkRXZlbnRPYmplY3QuYmFja2dyb3VuZENvbG9yID0gJHRoaXMuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgICAgICAgICBjbG9uZWRFdmVudE9iamVjdC5ib3JkZXJDb2xvciA9ICR0aGlzLmNzcygnYm9yZGVyLWNvbG9yJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBldmVudCBvbiB0aGUgY2FsZW5kYXJcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBsYXN0IGB0cnVlYCBhcmd1bWVudCBkZXRlcm1pbmVzIGlmIHRoZSBldmVudCBcInN0aWNrc1wiXHJcbiAgICAgICAgICAgICAgICAvLyAoaHR0cDovL2Fyc2hhdy5jb20vZnVsbGNhbGVuZGFyL2RvY3MvZXZlbnRfcmVuZGVyaW5nL3JlbmRlckV2ZW50LylcclxuICAgICAgICAgICAgICAgIGNhbEVsZW1lbnQuZnVsbENhbGVuZGFyKCdyZW5kZXJFdmVudCcsIGNsb25lZEV2ZW50T2JqZWN0LCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiBuZWNlc3NhcnkgcmVtb3ZlIHRoZSBlbGVtZW50IGZyb20gdGhlIGxpc3RcclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVBZnRlckRyb3AuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXZlbnREcmFnU3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCBqcywgdWkpIHtcclxuICAgICAgICAgICAgICAgIGRyYWdnaW5nRXZlbnQgPSBldmVudDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gVGhpcyBhcnJheSBpcyB0aGUgZXZlbnRzIHNvdXJjZXNcclxuICAgICAgICAgICAgZXZlbnRzOiBldmVudHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRzIHRoZSBleHRlcm5hbCBldmVudHMgY2FyZFxyXG4gICAgICogQHBhcmFtICBqUXVlcnkgW2NhbEVsZW1lbnRdIFRoZSBjYWxlbmRhciBkb20gZWxlbWVudCB3cmFwcGVkIGludG8galF1ZXJ5XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluaXRFeHRlcm5hbEV2ZW50cyhjYWxFbGVtZW50KSB7XHJcbiAgICAgICAgLy8gQ2FyZCB3aXRoIHRoZSBleHRlcm5hbCBldmVudHMgbGlzdFxyXG4gICAgICAgIHZhciBleHRlcm5hbEV2ZW50cyA9ICQoJy5leHRlcm5hbC1ldmVudHMnKTtcclxuXHJcbiAgICAgICAgLy8gaW5pdCB0aGUgZXh0ZXJuYWwgZXZlbnRzIGluIHRoZSBjYXJkXHJcbiAgICAgICAgbmV3IEV4dGVybmFsRXZlbnQoZXh0ZXJuYWxFdmVudHMuY2hpbGRyZW4oJ2RpdicpKTtcclxuXHJcbiAgICAgICAgLy8gRXh0ZXJuYWwgZXZlbnQgY29sb3IgaXMgZGFuZ2VyLXJlZCBieSBkZWZhdWx0XHJcbiAgICAgICAgdmFyIGN1cnJDb2xvciA9ICcjZjY1MDRkJztcclxuICAgICAgICAvLyBDb2xvciBzZWxlY3RvciBidXR0b25cclxuICAgICAgICB2YXIgZXZlbnRBZGRCdG4gPSAkKCcuZXh0ZXJuYWwtZXZlbnQtYWRkLWJ0bicpO1xyXG4gICAgICAgIC8vIE5ldyBleHRlcm5hbCBldmVudCBuYW1lIGlucHV0XHJcbiAgICAgICAgdmFyIGV2ZW50TmFtZUlucHV0ID0gJCgnLmV4dGVybmFsLWV2ZW50LW5hbWUnKTtcclxuICAgICAgICAvLyBDb2xvciBzd2l0Y2hlcnNcclxuICAgICAgICB2YXIgZXZlbnRDb2xvclNlbGVjdG9yID0gJCgnLmV4dGVybmFsLWV2ZW50LWNvbG9yLXNlbGVjdG9yIC5jaXJjbGUnKTtcclxuXHJcbiAgICAgICAgLy8gVHJhc2ggZXZlbnRzIERyb3BhcmVhXHJcbiAgICAgICAgJCgnLmV4dGVybmFsLWV2ZW50cy10cmFzaCcpLmRyb3BwYWJsZSh7XHJcbiAgICAgICAgICAgIGFjY2VwdDogJy5mYy1ldmVudCcsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzOiAnYWN0aXZlJyxcclxuICAgICAgICAgICAgaG92ZXJDbGFzczogJ2hvdmVyZWQnLFxyXG4gICAgICAgICAgICB0b2xlcmFuY2U6ICd0b3VjaCcsXHJcbiAgICAgICAgICAgIGRyb3A6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdXNlIHRoaXMgZnVuY3Rpb24gdG8gc2VuZCBhbiBhamF4IHJlcXVlc3RcclxuICAgICAgICAgICAgICAgIC8vIHRvIHJlbW92ZSB0aGUgZXZlbnQgZnJvbSB0aGUgcmVwb3NpdG9yeVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkcmFnZ2luZ0V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVpZCA9IGRyYWdnaW5nRXZlbnQuaWQgfHwgZHJhZ2dpbmdFdmVudC5faWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbEVsZW1lbnQuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnLCBlaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZG9tIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB1aS5kcmFnZ2FibGUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xlYXJcclxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZ0V2ZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudENvbG9yU2VsZWN0b3IuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBTYXZlIGNvbG9yXHJcbiAgICAgICAgICAgIGN1cnJDb2xvciA9ICR0aGlzLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgICAgICAvLyBEZS1zZWxlY3QgYWxsIGFuZCBzZWxlY3QgdGhlIGN1cnJlbnQgb25lXHJcbiAgICAgICAgICAgIGV2ZW50Q29sb3JTZWxlY3Rvci5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50QWRkQnRuLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IGV2ZW50IG5hbWUgZnJvbSBpbnB1dFxyXG4gICAgICAgICAgICB2YXIgdmFsID0gZXZlbnROYW1lSW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgIC8vIERvbnQgYWxsb3cgZW1wdHkgdmFsdWVzXHJcbiAgICAgICAgICAgIGlmICgkLnRyaW0odmFsKSA9PT0gJycpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgZXZlbnQgZWxlbWVudFxyXG4gICAgICAgICAgICB2YXIgbmV3RXZlbnQgPSAkKCc8ZGl2Lz4nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogY3VyckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICdib3JkZXItY29sb3InOiBjdXJyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJyNmZmYnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmh0bWwodmFsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXBlbmRzIHRvIHRoZSBleHRlcm5hbCBldmVudHMgbGlzdFxyXG4gICAgICAgICAgICBleHRlcm5hbEV2ZW50cy5wcmVwZW5kKG5ld0V2ZW50KTtcclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgbmV3IGV2ZW50IGVsZW1lbnRcclxuICAgICAgICAgICAgbmV3IEV4dGVybmFsRXZlbnQobmV3RXZlbnQpO1xyXG4gICAgICAgICAgICAvLyBDbGVhciBpbnB1dFxyXG4gICAgICAgICAgICBldmVudE5hbWVJbnB1dC52YWwoJycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBpbiB0aGUgZmlyc3QgbG9hZCBvZiB0aGUgY2FsZW5kYXJcclxuICAgICAqIFdyYXAgaW50byB0aGlzIGZ1bmN0aW9uIGEgcmVxdWVzdCB0byBhIHNvdXJjZSB0byBnZXQgdmlhIGFqYXggdGhlIHN0b3JlZCBldmVudHNcclxuICAgICAqIEByZXR1cm4gQXJyYXkgVGhlIGFycmF5IHdpdGggdGhlIGV2ZW50c1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEZW1vRXZlbnRzKCkge1xyXG4gICAgICAgIC8vIERhdGUgZm9yIHRoZSBjYWxlbmRhciBldmVudHMgKGR1bW15IGRhdGEpXHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBkID0gZGF0ZS5nZXREYXRlKCksXHJcbiAgICAgICAgICAgIG0gPSBkYXRlLmdldE1vbnRoKCksXHJcbiAgICAgICAgICAgIHkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0FsbCBEYXkgRXZlbnQnLFxyXG4gICAgICAgICAgICBzdGFydDogbmV3IERhdGUoeSwgbSwgMSksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNTY5NTQnLCAvL3JlZFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNmNTY5NTQnIC8vcmVkXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0xvbmcgRXZlbnQnLFxyXG4gICAgICAgICAgICBzdGFydDogbmV3IERhdGUoeSwgbSwgZCAtIDUpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKHksIG0sIGQgLSAyKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YzOWMxMicsIC8veWVsbG93XHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2YzOWMxMicgLy95ZWxsb3dcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVldGluZycsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSh5LCBtLCBkLCAxMCwgMzApLFxyXG4gICAgICAgICAgICBhbGxEYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA3M2I3JywgLy9CbHVlXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzAwNzNiNycgLy9CbHVlXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0x1bmNoJyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKHksIG0sIGQsIDEyLCAwKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgRGF0ZSh5LCBtLCBkLCAxNCwgMCksXHJcbiAgICAgICAgICAgIGFsbERheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMGMwZWYnLCAvL0luZm8gKGFxdWEpXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzAwYzBlZicgLy9JbmZvIChhcXVhKVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCaXJ0aGRheSBQYXJ0eScsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSh5LCBtLCBkICsgMSwgMTksIDApLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKHksIG0sIGQgKyAxLCAyMiwgMzApLFxyXG4gICAgICAgICAgICBhbGxEYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDBhNjVhJywgLy9TdWNjZXNzIChncmVlbilcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDBhNjVhJyAvL1N1Y2Nlc3MgKGdyZWVuKVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdPcGVuIEdvb2dsZScsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSh5LCBtLCAyOCksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IERhdGUoeSwgbSwgMjkpLFxyXG4gICAgICAgICAgICB1cmw6ICcvL2dvb2dsZS5jb20vJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzNjOGRiYycsIC8vUHJpbWFyeSAobGlnaHQtYmx1ZSlcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjM2M4ZGJjJyAvL1ByaW1hcnkgKGxpZ2h0LWJsdWUpXHJcbiAgICAgICAgfV07XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBKUUNsb3VkXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFdvcmRDbG91ZCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFdvcmRDbG91ZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmpRQ2xvdWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy9DcmVhdGUgYW4gYXJyYXkgb2Ygd29yZCBvYmplY3RzLCBlYWNoIHJlcHJlc2VudGluZyBhIHdvcmQgaW4gdGhlIGNsb3VkXHJcbiAgICAgICAgdmFyIHdvcmRfYXJyYXkgPSBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0xvcmVtJywgd2VpZ2h0OiAxMywgLypsaW5rOiAnaHR0cDovL3RoZW1pY29uLmNvJyovIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0lwc3VtJywgd2VpZ2h0OiAxMC41IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0RvbG9yJywgd2VpZ2h0OiA5LjQgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnU2l0Jywgd2VpZ2h0OiA4IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0FtZXQnLCB3ZWlnaHQ6IDYuMiB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdDb25zZWN0ZXR1cicsIHdlaWdodDogNSB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdBZGlwaXNjaW5nJywgd2VpZ2h0OiA1IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1NpdCcsIHdlaWdodDogOCB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdBbWV0Jywgd2VpZ2h0OiA2LjIgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnQ29uc2VjdGV0dXInLCB3ZWlnaHQ6IDUgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnQWRpcGlzY2luZycsIHdlaWdodDogNSB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgJChcIiNqcWNsb3VkXCIpLmpRQ2xvdWQod29yZF9hcnJheSwge1xyXG4gICAgICAgICAgICB3aWR0aDogMjQwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgICAgICAgc3RlcHM6IDdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDdXN0b20galF1ZXJ5XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFNlYXJjaCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNlYXJjaCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLnNsaWRlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghJC5mbi5jaG9zZW4pIHJldHVybjtcclxuICAgICAgICBpZiAoISQuZm4uZGF0ZXBpY2tlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBCT09UU1RSQVAgU0xJREVSIENUUkxcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCdbZGF0YS11aS1zbGlkZXJdJykuc2xpZGVyKCk7XHJcblxyXG4gICAgICAgIC8vIENIT1NFTlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJy5jaG9zZW4tc2VsZWN0JykuY2hvc2VuKCk7XHJcblxyXG4gICAgICAgIC8vIERBVEVUSU1FUElDS0VSXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnI2RhdGV0aW1lcGlja2VyJykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgaWNvbnM6IHtcclxuICAgICAgICAgICAgICAgIHRpbWU6ICdmYSBmYS1jbG9jay1vJyxcclxuICAgICAgICAgICAgICAgIGRhdGU6ICdmYSBmYS1jYWxlbmRhcicsXHJcbiAgICAgICAgICAgICAgICB1cDogJ2ZhIGZhLWNoZXZyb24tdXAnLFxyXG4gICAgICAgICAgICAgICAgZG93bjogJ2ZhIGZhLWNoZXZyb24tZG93bicsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91czogJ2ZhIGZhLWNoZXZyb24tbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBuZXh0OiAnZmEgZmEtY2hldnJvbi1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICB0b2RheTogJ2ZhIGZhLWNyb3NzaGFpcnMnLFxyXG4gICAgICAgICAgICAgICAgY2xlYXI6ICdmYSBmYS10cmFzaCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIENvbG9yIHBpY2tlclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdENvbG9yUGlja2VyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q29sb3JQaWNrZXIoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5jb2xvcnBpY2tlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAkKCcuZGVtby1jb2xvcnBpY2tlcicpLmNvbG9ycGlja2VyKCk7XHJcblxyXG4gICAgICAgICQoJyNkZW1vX3NlbGVjdG9ycycpLmNvbG9ycGlja2VyKHtcclxuICAgICAgICAgICAgY29sb3JTZWxlY3RvcnM6IHtcclxuICAgICAgICAgICAgICAgICdkZWZhdWx0JzogJyM3Nzc3NzcnLFxyXG4gICAgICAgICAgICAgICAgJ3ByaW1hcnknOiBBUFBfQ09MT1JTWydwcmltYXJ5J10sXHJcbiAgICAgICAgICAgICAgICAnc3VjY2Vzcyc6IEFQUF9DT0xPUlNbJ3N1Y2Nlc3MnXSxcclxuICAgICAgICAgICAgICAgICdpbmZvJzogQVBQX0NPTE9SU1snaW5mbyddLFxyXG4gICAgICAgICAgICAgICAgJ3dhcm5pbmcnOiBBUFBfQ09MT1JTWyd3YXJuaW5nJ10sXHJcbiAgICAgICAgICAgICAgICAnZGFuZ2VyJzogQVBQX0NPTE9SU1snZGFuZ2VyJ11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEZvcm1zIERlbW9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0Rm9ybXNEZW1vKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Rm9ybXNEZW1vKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uc2xpZGVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCEkLmZuLmNob3NlbikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghJC5mbi5pbnB1dG1hc2spIHJldHVybjtcclxuICAgICAgICBpZiAoISQuZm4uZmlsZXN0eWxlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCEkLmZuLnd5c2l3eWcpIHJldHVybjtcclxuICAgICAgICBpZiAoISQuZm4uZGF0ZXBpY2tlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBCT09UU1RSQVAgU0xJREVSIENUUkxcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCdbZGF0YS11aS1zbGlkZXJdJykuc2xpZGVyKCk7XHJcblxyXG4gICAgICAgIC8vIENIT1NFTlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJy5jaG9zZW4tc2VsZWN0JykuY2hvc2VuKCk7XHJcblxyXG4gICAgICAgIC8vIE1BU0tFRFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJ1tkYXRhLW1hc2tlZF0nKS5pbnB1dG1hc2soKTtcclxuXHJcbiAgICAgICAgLy8gRklMRVNUWUxFXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnLmZpbGVzdHlsZScpLmZpbGVzdHlsZSgpO1xyXG5cclxuICAgICAgICAvLyBXWVNJV1lHXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnLnd5c2l3eWcnKS53eXNpd3lnKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBEQVRFVElNRVBJQ0tFUlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJyNkYXRldGltZXBpY2tlcjEnKS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgb3JpZW50YXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICBpY29uczoge1xyXG4gICAgICAgICAgICAgICAgdGltZTogJ2ZhIGZhLWNsb2NrLW8nLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogJ2ZhIGZhLWNhbGVuZGFyJyxcclxuICAgICAgICAgICAgICAgIHVwOiAnZmEgZmEtY2hldnJvbi11cCcsXHJcbiAgICAgICAgICAgICAgICBkb3duOiAnZmEgZmEtY2hldnJvbi1kb3duJyxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzOiAnZmEgZmEtY2hldnJvbi1sZWZ0JyxcclxuICAgICAgICAgICAgICAgIG5leHQ6ICdmYSBmYS1jaGV2cm9uLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIHRvZGF5OiAnZmEgZmEtY3Jvc3NoYWlycycsXHJcbiAgICAgICAgICAgICAgICBjbGVhcjogJ2ZhIGZhLXRyYXNoJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gb25seSB0aW1lXHJcbiAgICAgICAgJCgnI2RhdGV0aW1lcGlja2VyMicpLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgICAgICBmb3JtYXQ6ICdtbS1kZC15eXl5J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBNb2R1bGU6IEltYWdlIENyb3BwZXJcclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0SW1hZ2VDcm9wcGVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0SW1hZ2VDcm9wcGVyKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uY3JvcHBlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgJGltYWdlID0gJCgnLmltZy1jb250YWluZXIgPiBpbWcnKSxcclxuICAgICAgICAgICAgJGRhdGFYID0gJCgnI2RhdGFYJyksXHJcbiAgICAgICAgICAgICRkYXRhWSA9ICQoJyNkYXRhWScpLFxyXG4gICAgICAgICAgICAkZGF0YUhlaWdodCA9ICQoJyNkYXRhSGVpZ2h0JyksXHJcbiAgICAgICAgICAgICRkYXRhV2lkdGggPSAkKCcjZGF0YVdpZHRoJyksXHJcbiAgICAgICAgICAgICRkYXRhUm90YXRlID0gJCgnI2RhdGFSb3RhdGUnKSxcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIC8vIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgeDogNDIwLFxyXG4gICAgICAgICAgICAgICAgLy8gICB5OiA2MCxcclxuICAgICAgICAgICAgICAgIC8vICAgd2lkdGg6IDY0MCxcclxuICAgICAgICAgICAgICAgIC8vICAgaGVpZ2h0OiAzNjBcclxuICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gcmVzcG9uc2l2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVja0ltYWdlT3JpZ2luOiBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG1vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGd1aWRlczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBoaWdobGlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYXV0b0Nyb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gYXV0b0Nyb3BBcmVhOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAvLyBkcmFnQ3JvcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIHJvdGF0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyB6b29tYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyB0b3VjaERyYWdab29tOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIG1vdXNlV2hlZWxab29tOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGNyb3BCb3hNb3ZhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGNyb3BCb3hSZXNpemFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gZG91YmxlQ2xpY2tUb2dnbGU6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG1pbkNhbnZhc1dpZHRoOiAzMjAsXHJcbiAgICAgICAgICAgICAgICAvLyBtaW5DYW52YXNIZWlnaHQ6IDE4MCxcclxuICAgICAgICAgICAgICAgIC8vIG1pbkNyb3BCb3hXaWR0aDogMTYwLFxyXG4gICAgICAgICAgICAgICAgLy8gbWluQ3JvcEJveEhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICAvLyBtaW5Db250YWluZXJXaWR0aDogMzIwLFxyXG4gICAgICAgICAgICAgICAgLy8gbWluQ29udGFpbmVySGVpZ2h0OiAxODAsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYnVpbGQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBidWlsdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIGRyYWdzdGFydDogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIGRyYWdtb3ZlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gZHJhZ2VuZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIHpvb21pbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIHpvb21vdXQ6IG51bGwsXHJcblxyXG4gICAgICAgICAgICAgICAgYXNwZWN0UmF0aW86IDE2IC8gOSxcclxuICAgICAgICAgICAgICAgIHByZXZpZXc6ICcuaW1nLXByZXZpZXcnLFxyXG4gICAgICAgICAgICAgICAgY3JvcDogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRkYXRhWC52YWwoTWF0aC5yb3VuZChkYXRhLngpKTtcclxuICAgICAgICAgICAgICAgICAgICAkZGF0YVkudmFsKE1hdGgucm91bmQoZGF0YS55KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRhdGFIZWlnaHQudmFsKE1hdGgucm91bmQoZGF0YS5oZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAkZGF0YVdpZHRoLnZhbChNYXRoLnJvdW5kKGRhdGEud2lkdGgpKTtcclxuICAgICAgICAgICAgICAgICAgICAkZGF0YVJvdGF0ZS52YWwoTWF0aC5yb3VuZChkYXRhLnJvdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAkaW1hZ2Uub24oe1xyXG4gICAgICAgICAgICAnYnVpbGQuY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdidWlsdC5jcm9wcGVyJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2RyYWdzdGFydC5jcm9wcGVyJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50eXBlLCBlLmRyYWdUeXBlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2RyYWdtb3ZlLmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUsIGUuZHJhZ1R5cGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnZHJhZ2VuZC5jcm9wcGVyJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50eXBlLCBlLmRyYWdUeXBlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3pvb21pbi5jcm9wcGVyJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3pvb21vdXQuY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdjaGFuZ2UuY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jcm9wcGVyKG9wdGlvbnMpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gTWV0aG9kc1xyXG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkub24oJ2NsaWNrJywgJ1tkYXRhLW1ldGhvZF0nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICR0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRpbWFnZS5kYXRhKCdjcm9wcGVyJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEubWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gJC5leHRlbmQoe30sIGRhdGEpOyAvLyBDbG9uZSBhIG5ldyBvbmVcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEudGFyZ2V0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICR0YXJnZXQgPSAkKGRhdGEudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLm9wdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub3B0aW9uID0gSlNPTi5wYXJzZSgkdGFyZ2V0LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAkaW1hZ2UuY3JvcHBlcihkYXRhLm1ldGhvZCwgZGF0YS5vcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm1ldGhvZCA9PT0gJ2dldENyb3BwZWRDYW52YXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2dldENyb3BwZWRDYW52YXNNb2RhbCcpLm1vZGFsKCkuZmluZCgnLm1vZGFsLWJvZHknKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdChyZXN1bHQpICYmICR0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LnZhbChKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkaW1hZ2UuZGF0YSgnY3JvcHBlcicpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGltYWdlLmNyb3BwZXIoJ21vdmUnLCAtMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGltYWdlLmNyb3BwZXIoJ21vdmUnLCAwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGltYWdlLmNyb3BwZXIoJ21vdmUnLCAxLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW1hZ2UuY3JvcHBlcignbW92ZScsIDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gSW1wb3J0IGltYWdlXHJcbiAgICAgICAgdmFyICRpbnB1dEltYWdlID0gJCgnI2lucHV0SW1hZ2UnKSxcclxuICAgICAgICAgICAgVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMLFxyXG4gICAgICAgICAgICBibG9iVVJMO1xyXG5cclxuICAgICAgICBpZiAoVVJMKSB7XHJcbiAgICAgICAgICAgICRpbnB1dEltYWdlLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IHRoaXMuZmlsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISRpbWFnZS5kYXRhKCdjcm9wcGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGUgPSBmaWxlc1swXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eaW1hZ2VcXC9cXHcrJC8udGVzdChmaWxlLnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2JVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW1hZ2Uub25lKCdidWlsdC5jcm9wcGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2JVUkwpOyAvLyBSZXZva2Ugd2hlbiBsb2FkIGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNyb3BwZXIoJ3Jlc2V0JykuY3JvcHBlcigncmVwbGFjZScsIGJsb2JVUkwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXRJbWFnZS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgY2hvb3NlIGFuIGltYWdlIGZpbGUuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkaW5wdXRJbWFnZS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBPcHRpb25zXHJcbiAgICAgICAgJCgnLmRvY3Mtb3B0aW9ucyA6Y2hlY2tib3gnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRpbWFnZS5kYXRhKCdjcm9wcGVyJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9uc1skdGhpcy52YWwoKV0gPSAkdGhpcy5wcm9wKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICRpbWFnZS5jcm9wcGVyKCdkZXN0cm95JykuY3JvcHBlcihvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIFRvb2x0aXBzXHJcbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBTZWxlY3QyXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U2VsZWN0Mik7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNlbGVjdDIoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5zZWxlY3QyKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIFNlbGVjdCAyXHJcblxyXG4gICAgICAgICQoJyNzZWxlY3QyLTEnKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgdGhlbWU6ICdib290c3RyYXA0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNzZWxlY3QyLTInKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgdGhlbWU6ICdib290c3RyYXA0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNzZWxlY3QyLTMnKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgdGhlbWU6ICdib290c3RyYXA0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNzZWxlY3QyLTQnKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgYSBzdGF0ZScsXHJcbiAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwNCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBEcm9wem9uZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAvLyBQcmV2ZW50IERyb3B6b25lIGZyb20gYXV0byBkaXNjb3ZlcmluZ1xyXG4gICAgLy8gVGhpcyBpcyB1c2VmdWwgd2hlbiB5b3Ugd2FudCB0byBjcmVhdGUgdGhlXHJcbiAgICAvLyBEcm9wem9uZSBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyXHJcbiAgICBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAkKGluaXREcm9wem9uZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdERyb3B6b25lKCkge1xyXG5cclxuICAgICAgICAvLyBEcm9wem9uZSBzZXR0aW5nc1xyXG4gICAgICAgIHZhciBkcm9wem9uZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGF1dG9Qcm9jZXNzUXVldWU6IGZhbHNlLFxyXG4gICAgICAgICAgICB1cGxvYWRNdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYWxsZWxVcGxvYWRzOiAxMDAsXHJcbiAgICAgICAgICAgIG1heEZpbGVzOiAxMDAsXHJcbiAgICAgICAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogJzxlbSBjbGFzcz1cImZhIGZhLXVwbG9hZCB0ZXh0LW11dGVkXCI+PC9lbT48YnI+RHJvcCBmaWxlcyBoZXJlIHRvIHVwbG9hZCcsIC8vIGRlZmF1bHQgbWVzc2FnZXMgYmVmb3JlIGZpcnN0IGRyb3BcclxuICAgICAgICAgICAgcGFyYW1OYW1lOiAnZmlsZScsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXHJcbiAgICAgICAgICAgIG1heEZpbGVzaXplOiAyLCAvLyBNQlxyXG4gICAgICAgICAgICBhZGRSZW1vdmVMaW5rczogdHJ1ZSxcclxuICAgICAgICAgICAgYWNjZXB0OiBmdW5jdGlvbihmaWxlLCBkb25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5uYW1lID09PSAnanVzdGluYmllYmVyLmpwZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCdOYWhhLCB5b3UgZG9udC4gOiknKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkekhhbmRsZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZHpIYW5kbGVyLnByb2Nlc3NRdWV1ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKCdhZGRlZGZpbGUnLCBmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGVkIGZpbGU6ICcgKyBmaWxlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKCdyZW1vdmVkZmlsZScsIGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlZCBmaWxlOiAnICsgZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbignc2VuZGluZ211bHRpcGxlJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKCdzdWNjZXNzbXVsdGlwbGUnLCBmdW5jdGlvbiggLypmaWxlcywgcmVzcG9uc2UqLyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ2Vycm9ybXVsdGlwbGUnLCBmdW5jdGlvbiggLypmaWxlcywgcmVzcG9uc2UqLyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZHJvcHpvbmVBcmVhID0gbmV3IERyb3B6b25lKCcjZHJvcHpvbmUtYXJlYScsIGRyb3B6b25lT3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5cclxuICAgICQoaW5pdFdpemFyZCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFdpemFyZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLnZhbGlkYXRlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBmb3JtID0gJChcIiNmcm1JbnNjcmlwY2lvblwiKTtcclxuICAgICAgICBmb3JtLnZhbGlkYXRlKHtcclxuICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIGVycm9yUGxhY2VtZW50KGVycm9yLCBlbGVtZW50KSB7IGVsZW1lbnQuYmVmb3JlKGVycm9yKTsgfSxcclxuICAgICAgICAgICAgbGFuZzogJ2VzJyxcclxuICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgIGNvbmZpcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBlcXVhbFRvOiBcIiNwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGVudHJldmlzdGFJRDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtLmNoaWxkcmVuKFwiZGl2XCIpLnN0ZXBzKHtcclxuICAgICAgICAgICAgaGVhZGVyVGFnOiBcImg0XCIsXHJcbiAgICAgICAgICAgIGJvZHlUYWc6IFwiZmllbGRzZXRcIixcclxuICAgICAgICAgICAgLy90cmFuc2l0aW9uRWZmZWN0OiBcInNsaWRlTGVmdFwiLFxyXG4gICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbDogXCJDYW5jZWxhclwiLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudDogXCJQYXNvIGFjdHVhbDpcIixcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IFwiUGFnaW5hY2nvv71uXCIsXHJcbiAgICAgICAgICAgICAgICBmaW5pc2g6IFwiRmluYWxpemFyXCIsXHJcbiAgICAgICAgICAgICAgICBuZXh0OiBcIlNpZ3VpZW50ZVwiLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6IFwiQW50ZXJpb3JcIixcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IFwiQ2FyZ2FuZG8gLi4uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25TdGVwQ2hhbmdpbmc6IGZ1bmN0aW9uIChldmVudCwgY3VycmVudEluZGV4LCBuZXdJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmFjdGlvbnMgPiB1bCA+IGxpOmxhc3QtY2hpbGQgYScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZjg5NDA2Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnZhbGlkYXRlKCkuc2V0dGluZ3MuaWdub3JlID0gXCI6ZGlzYWJsZWQsOmhpZGRlbjpub3QoJ3NlbGVjdC5mb3JtLWNvbnRyb2wnKVwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0udmFsaWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25GaW5pc2hpbmc6IGZ1bmN0aW9uKGV2ZW50LCBjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0udmFsaWRhdGUoKS5zZXR0aW5ncy5pZ25vcmUgPSBcIjpkaXNhYmxlZFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0udmFsaWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25GaW5pc2hlZDogZnVuY3Rpb24oZXZlbnQsIGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJTdWJtaXR0ZWQhXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN1Ym1pdCBmb3JtXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgJCgnLmNob3Nlbi1zZWxlY3QzMjEnKS5jaG9zZW4oe1xyXG4gICAgICAgICAgICBub19yZXN1bHRzX3RleHQ6IFwiTm8gc2UgZW5jb250cmFyb24gcmVzdWx0YWRvc1wiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZTogXCJTZWxlY2Npb25lIHVuYSBvcGNpXFx1MDBGM24uLi5cIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZTogXCJTZWxlY2Npb25lIHVuYSBvcGNpXFx1MDBGM24uLi5cIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuc2VsZWN0MzIxJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwNCcsXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gWGVkaXRhYmxlIERlbW9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRYRWRpdGFibGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRYRWRpdGFibGUoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5lZGl0YWJsZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIC8vIEZvbnQgQXdlc29tZSBzdXBwb3J0XHJcbiAgICAgICAgJC5mbi5lZGl0YWJsZWZvcm0uYnV0dG9ucyA9XHJcbiAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc20gZWRpdGFibGUtc3VibWl0XCI+JyArXHJcbiAgICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWNoZWNrXCI+PC9pPicgK1xyXG4gICAgICAgICAgICAnPC9idXR0b24+JyArXHJcbiAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gZWRpdGFibGUtY2FuY2VsXCI+JyArXHJcbiAgICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLWZ3IGZhLXRpbWVzXCI+PC9pPicgK1xyXG4gICAgICAgICAgICAnPC9idXR0b24+JztcclxuXHJcbiAgICAgICAgLy9kZWZhdWx0c1xyXG4gICAgICAgIC8vJC5mbi5lZGl0YWJsZS5kZWZhdWx0cy51cmwgPSAndXJsL3RvL3NlcnZlcic7XHJcblxyXG4gICAgICAgIC8vZW5hYmxlIC8gZGlzYWJsZVxyXG4gICAgICAgICQoJyNlbmFibGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnI3VzZXIgLmVkaXRhYmxlJykuZWRpdGFibGUoJ3RvZ2dsZURpc2FibGVkJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vZWRpdGFibGVzXHJcbiAgICAgICAgJCgnI3VzZXJuYW1lJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICAvLyB1cmw6ICd1cmwvdG8vc2VydmVyJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBwazogMSxcclxuICAgICAgICAgICAgbmFtZTogJ3VzZXJuYW1lJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdFbnRlciB1c2VybmFtZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNmaXJzdG5hbWUnKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQudHJpbSh2YWx1ZSkgPT09ICcnKSByZXR1cm4gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjc2V4JykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBwcmVwZW5kOiBcIm5vdCBzZWxlY3RlZFwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IFtcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IDEsIHRleHQ6ICdNYWxlJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogMiwgdGV4dDogJ0ZlbWFsZScgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmdW5jdGlvbih2YWx1ZSwgc291cmNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbG9ycyA9IHsgXCJcIjogXCJncmF5XCIsIDE6IFwiZ3JlZW5cIiwgMjogXCJibHVlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtID0gJC5ncmVwKHNvdXJjZURhdGEsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8udmFsdWUgPT0gdmFsdWU7IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykudGV4dChlbGVtWzBdLnRleHQpLmNzcyhcImNvbG9yXCIsIGNvbG9yc1t2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNzdGF0dXMnKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNncm91cCcpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgc2hvd2J1dHRvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjZG9iJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjZXZlbnQnKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgY29tYm9kYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdEl0ZW06ICduYW1lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjY29tbWVudHMnKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIHNob3didXR0b25zOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI25vdGUnKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI3BlbmNpbCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcjbm90ZScpLmVkaXRhYmxlKCd0b2dnbGUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI3VzZXIgLmVkaXRhYmxlJykub24oJ2hpZGRlbicsIGZ1bmN0aW9uKGUsIHJlYXNvbikge1xyXG4gICAgICAgICAgICBpZiAocmVhc29uID09PSAnc2F2ZScgfHwgcmVhc29uID09PSAnbm9jaGFuZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykubmV4dCgpLmZpbmQoJy5lZGl0YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJyNhdXRvb3BlbicpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG5leHQuZWRpdGFibGUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkbmV4dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRBQkxFXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnI3VzZXJzIGEnKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgbmFtZTogJ3VzZXJuYW1lJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdFbnRlciB1c2VybmFtZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwidmFyIGZ1bmNpb25lc192YXJpYXMgPSB7XHJcblxyXG4gICAgc29sb051bWVyb3M6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgIG9iai52YWx1ZSA9IG9iai52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XHJcbiAgICB9XHJcbn07IiwiLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIE1vZHVsZTogZ21hcC5qc1xyXG4gKiBJbml0IEdvb2dsZSBNYXAgcGx1Z2luXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdEdvb2dsZU1hcHMpO1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIE1hcCBTdHlsZSBkZWZpbml0aW9uXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBHZXQgbW9yZSBzdHlsZXMgZnJvbSBodHRwOi8vc25henp5bWFwcy5jb20vc3R5bGUvMjkvbGlnaHQtbW9ub2Nocm9tZVxyXG4gICAgLy8gLSBKdXN0IHJlcGxhY2UgYW5kIGFzc2lnbiB0byAnTWFwU3R5bGVzJyB0aGUgbmV3IHN0eWxlIGFycmF5XHJcbiAgICB2YXIgTWFwU3R5bGVzID0gW3sgZmVhdHVyZVR5cGU6ICd3YXRlcicsIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvbicgfSwgeyBjb2xvcjogJyNiZGQxZjknIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdhbGwnLCBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLCBzdHlsZXJzOiBbeyBjb2xvcjogJyMzMzQxNjUnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdsYW5kc2NhcGUnLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNlOWViZjEnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLCBlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3sgY29sb3I6ICcjYzVjNmM2JyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncm9hZC5hcnRlcmlhbCcsIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNmZmYnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdyb2FkLmxvY2FsJywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2ZmZicgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3RyYW5zaXQnLCBlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3sgY29sb3I6ICcjZDhkYmUwJyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncG9pJywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2NmZDVlMCcgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlJywgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29uJyB9LCB7IGxpZ2h0bmVzczogMzMgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJywgZWxlbWVudFR5cGU6ICdsYWJlbHMnLCBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb24nIH0sIHsgbGlnaHRuZXNzOiAyMCB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncm9hZCcsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2Q4ZGJlMCcsIGxpZ2h0bmVzczogMjAgfV0gfV07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRHb29nbGVNYXBzKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uZ01hcCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgbWFwU2VsZWN0b3IgPSAnW2RhdGEtZ21hcF0nO1xyXG4gICAgICAgIHZhciBnTWFwUmVmcyA9IFtdO1xyXG5cclxuICAgICAgICAkKG1hcFNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NlcyA9ICR0aGlzLmRhdGEoJ2FkZHJlc3MnKSAmJiAkdGhpcy5kYXRhKCdhZGRyZXNzJykuc3BsaXQoJzsnKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlcyA9ICR0aGlzLmRhdGEoJ3RpdGxlJykgJiYgJHRoaXMuZGF0YSgndGl0bGUnKS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgICAgICAgem9vbSA9ICR0aGlzLmRhdGEoJ3pvb20nKSB8fCAxNCxcclxuICAgICAgICAgICAgICAgIG1hcHR5cGUgPSAkdGhpcy5kYXRhKCdtYXB0eXBlJykgfHwgJ1JPQURNQVAnLCAvLyBvciAnVEVSUkFJTidcclxuICAgICAgICAgICAgICAgIG1hcmtlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhZGRyZXNzZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgaW4gYWRkcmVzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhZGRyZXNzZXNbYV0gPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3Nlc1thXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6ICh0aXRsZXMgJiYgdGl0bGVzW2FdKSB8fCAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwOiB0cnVlIC8qIEFsd2F5cyBwb3B1cCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFuQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVydmlld01hcENvbnRyb2w6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXB0eXBlOiBtYXB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnM6IG1hcmtlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogem9vbVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vcmUgb3B0aW9ucyBodHRwczovL2dpdGh1Yi5jb20vbWFyaW9lc3RyYWRhL2pRdWVyeS1nTWFwXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBnTWFwID0gJHRoaXMuZ01hcChvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVmID0gZ01hcC5kYXRhKCdnTWFwLnJlZmVyZW5jZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSBpbiB0aGUgbWFwIHJlZmVyZW5jZXMgbGlzdFxyXG4gICAgICAgICAgICAgICAgZ01hcFJlZnMucHVzaChyZWYpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgc3R5bGVzXHJcbiAgICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YSgnc3R5bGVkJykgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWYuc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogTWFwU3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pOyAvL2VhY2hcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDdXN0b20galF1ZXJ5XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFZlY3Rvck1hcCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFZlY3Rvck1hcCgpIHtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKCdbZGF0YS12ZWN0b3ItbWFwXScpO1xyXG5cclxuICAgICAgICB2YXIgc2VyaWVzRGF0YSA9IHtcclxuICAgICAgICAgICAgJ0NBJzogMTExMDAsIC8vIENhbmFkYVxyXG4gICAgICAgICAgICAnREUnOiAyNTEwLCAvLyBHZXJtYW55XHJcbiAgICAgICAgICAgICdGUic6IDM3MTAsIC8vIEZyYW5jZVxyXG4gICAgICAgICAgICAnQVUnOiA1NzEwLCAvLyBBdXN0cmFsaWFcclxuICAgICAgICAgICAgJ0dCJzogODMxMCwgLy8gR3JlYXQgQnJpdGFpblxyXG4gICAgICAgICAgICAnUlUnOiA5MzEwLCAvLyBSdXNzaWFcclxuICAgICAgICAgICAgJ0JSJzogNjYxMCwgLy8gQnJhemlsXHJcbiAgICAgICAgICAgICdJTic6IDc4MTAsIC8vIEluZGlhXHJcbiAgICAgICAgICAgICdDTic6IDQzMTAsIC8vIENoaW5hXHJcbiAgICAgICAgICAgICdVUyc6IDgzOSwgLy8gVVNBXHJcbiAgICAgICAgICAgICdTQSc6IDQxMCAvLyBTYXVkaSBBcmFiaWFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbWFya2Vyc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDEuOTAsIDEyLjQ1XSwgbmFtZTogJ1ZhdGljYW4gQ2l0eScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFs0My43MywgNy40MV0sIG5hbWU6ICdNb25hY28nIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbLTAuNTIsIDE2Ni45M10sIG5hbWU6ICdOYXVydScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFstOC41MSwgMTc5LjIxXSwgbmFtZTogJ1R1dmFsdScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFs3LjExLCAxNzEuMDZdLCBuYW1lOiAnTWFyc2hhbGwgSXNsYW5kcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxNy4zLCAtNjIuNzNdLCBuYW1lOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzMuMiwgNzMuMjJdLCBuYW1lOiAnTWFsZGl2ZXMnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbMzUuODgsIDE0LjVdLCBuYW1lOiAnTWFsdGEnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDEuMCwgLTcxLjA2XSwgbmFtZTogJ05ldyBFbmdsYW5kJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzEyLjA1LCAtNjEuNzVdLCBuYW1lOiAnR3JlbmFkYScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxMy4xNiwgLTU5LjU1XSwgbmFtZTogJ0JhcmJhZG9zJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzE3LjExLCAtNjEuODVdLCBuYW1lOiAnQW50aWd1YSBhbmQgQmFyYnVkYScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFstNC42MSwgNTUuNDVdLCBuYW1lOiAnU2V5Y2hlbGxlcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFs3LjM1LCAxMzQuNDZdLCBuYW1lOiAnUGFsYXUnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDIuNSwgMS41MV0sIG5hbWU6ICdBbmRvcnJhJyB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgbmV3IFZlY3Rvck1hcChlbGVtZW50LCBzZXJpZXNEYXRhLCBtYXJrZXJzRGF0YSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gSlZFQ1RPUiBNQVBcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBBbGxvdyBHbG9iYWwgYWNjZXNzXHJcbiAgICB3aW5kb3cuVmVjdG9yTWFwID0gVmVjdG9yTWFwXHJcblxyXG4gICAgdmFyIGRlZmF1bHRDb2xvcnMgPSB7XHJcbiAgICAgICAgbWFya2VyQ29sb3I6ICcjMjNiN2U1JywgLy8gdGhlIG1hcmtlciBwb2ludHNcclxuICAgICAgICBiZ0NvbG9yOiAndHJhbnNwYXJlbnQnLCAvLyB0aGUgYmFja2dyb3VuZFxyXG4gICAgICAgIHNjYWxlQ29sb3JzOiBbJyM4NzhjOWEnXSwgLy8gdGhlIGNvbG9yIG9mIHRoZSByZWdpb24gaW4gdGhlIHNlcmllXHJcbiAgICAgICAgcmVnaW9uRmlsbDogJyNiYmJlYzYnIC8vIHRoZSBiYXNlIHJlZ2lvbiBjb2xvclxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBWZWN0b3JNYXAoZWxlbWVudCwgc2VyaWVzRGF0YSwgbWFya2Vyc0RhdGEpIHtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50Lmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgYXR0cnMgPSBlbGVtZW50LmRhdGEoKSxcclxuICAgICAgICAgICAgbWFwSGVpZ2h0ID0gYXR0cnMuaGVpZ2h0IHx8ICczMDAnLFxyXG4gICAgICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWFya2VyQ29sb3I6IGF0dHJzLm1hcmtlckNvbG9yIHx8IGRlZmF1bHRDb2xvcnMubWFya2VyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yOiBhdHRycy5iZ0NvbG9yIHx8IGRlZmF1bHRDb2xvcnMuYmdDb2xvcixcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBhdHRycy5zY2FsZSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVDb2xvcnM6IGF0dHJzLnNjYWxlQ29sb3JzIHx8IGRlZmF1bHRDb2xvcnMuc2NhbGVDb2xvcnMsXHJcbiAgICAgICAgICAgICAgICByZWdpb25GaWxsOiBhdHRycy5yZWdpb25GaWxsIHx8IGRlZmF1bHRDb2xvcnMucmVnaW9uRmlsbCxcclxuICAgICAgICAgICAgICAgIG1hcE5hbWU6IGF0dHJzLm1hcE5hbWUgfHwgJ3dvcmxkX21pbGxfZW4nXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGVsZW1lbnQuY3NzKCdoZWlnaHQnLCBtYXBIZWlnaHQpO1xyXG5cclxuICAgICAgICBpbml0KGVsZW1lbnQsIG9wdGlvbnMsIHNlcmllc0RhdGEsIG1hcmtlcnNEYXRhKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdCgkZWxlbWVudCwgb3B0cywgc2VyaWVzLCBtYXJrZXJzKSB7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudC52ZWN0b3JNYXAoe1xyXG4gICAgICAgICAgICAgICAgbWFwOiBvcHRzLm1hcE5hbWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdHMuYmdDb2xvcixcclxuICAgICAgICAgICAgICAgIHpvb21NaW46IDEsXHJcbiAgICAgICAgICAgICAgICB6b29tTWF4OiA4LFxyXG4gICAgICAgICAgICAgICAgem9vbU9uU2Nyb2xsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlZ2lvblN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmlsbCc6IG9wdHMucmVnaW9uRmlsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpbGwtb3BhY2l0eSc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdHJva2UnOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdHJva2Utd2lkdGgnOiAxLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdHJva2Utb3BhY2l0eSc6IDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaWxsLW9wYWNpdHknOiAwLjhcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdibHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRIb3Zlcjoge31cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb2N1c09uOiB7IHg6IDAuNCwgeTogMC42LCBzY2FsZTogb3B0cy5zY2FsZSB9LFxyXG4gICAgICAgICAgICAgICAgbWFya2VyU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG9wdHMubWFya2VyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogb3B0cy5tYXJrZXJDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblJlZ2lvbkxhYmVsU2hvdzogZnVuY3Rpb24oZSwgZWwsIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VyaWVzICYmIHNlcmllc1tjb2RlXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuaHRtbChlbC5odG1sKCkgKyAnOiAnICsgc2VyaWVzW2NvZGVdICsgJyB2aXNpdG9ycycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hcmtlcnM6IG1hcmtlcnMsXHJcbiAgICAgICAgICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICByZWdpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHNlcmllcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IG9wdHMuc2NhbGVDb2xvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAncG9seW5vbWlhbCdcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gLy8gZW5kIGluaXRcclxuICAgIH07XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvKipcclxuICogVXNlZCBmb3IgdXNlciBwYWdlc1xyXG4gKiBMb2dpbiBhbmQgUmVnaXN0ZXJcclxuICovXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRQYXJzbGV5Rm9yUGFnZXMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRQYXJzbGV5Rm9yUGFnZXMoKSB7XHJcblxyXG4gICAgICAgIC8vIFBhcnNsZXkgb3B0aW9ucyBzZXR1cCBmb3IgYm9vdHN0cmFwIHZhbGlkYXRpb24gY2xhc3Nlc1xyXG4gICAgICAgIHZhciBwYXJzbGV5T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZXJyb3JDbGFzczogJ2lzLWludmFsaWQnLFxyXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdpcy12YWxpZCcsXHJcbiAgICAgICAgICAgIGNsYXNzSGFuZGxlcjogZnVuY3Rpb24gKFBhcnNsZXlGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gUGFyc2xleUZpZWxkLiRlbGVtZW50LnBhcmVudHMoJy5mb3JtLWdyb3VwJykuZmluZCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGlmICghZWwubGVuZ3RoKSAvLyBzdXBwb3J0IGN1c3RvbSBjaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGVsID0gUGFyc2xleUZpZWxkLiRlbGVtZW50LnBhcmVudHMoJy5jLWNoZWNrYm94JykuZmluZCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3JzQ29udGFpbmVyOiBmdW5jdGlvbiAoUGFyc2xleUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2xleUZpZWxkLiRlbGVtZW50LnBhcmVudHMoJy5mb3JtLWdyb3VwJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yc1dyYXBwZXI6ICc8ZGl2IGNsYXNzPVwidGV4dC1oZWxwXCI+JyxcclxuICAgICAgICAgICAgZXJyb3JUZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vLy8gUmVnaXN0ZXIgZm9ybSB2YWxpZGF0aW9uIHdpdGggUGFyc2xleVxyXG4gICAgICAgIHZhciBmb3JtTG9naW4gPSAkKFwiI2Zvcm1Mb2dpblwiKTtcclxuICAgICAgICBpZiAoZm9ybUxvZ2luLmxlbmd0aClcclxuICAgICAgICAgICAgZm9ybUxvZ2luLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgZm9ybUxpc3RhckFtb3J0aXphY2lvbiA9ICQoXCIjZm9ybUxpc3RhckFtb3J0aXphY2lvblwiKTtcclxuICAgICAgICBpZiAoZm9ybUxpc3RhckFtb3J0aXphY2lvbi5sZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcm1MaXN0YXJBbW9ydGl6YWNpb24ucGFyc2xleShwYXJzbGV5T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciBmb3JtQ2FtYmlvQ2xhdmUgPSAkKFwiI2Zvcm1DYW1iaW9DbGF2ZVwiKTtcclxuICAgICAgICBpZiAoZm9ybUNhbWJpb0NsYXZlLmxlbmd0aClcclxuICAgICAgICAgICAgZm9ybUNhbWJpb0NsYXZlLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgZm9ybVJlY3VwZXJhckNsYXZlID0gJChcIiNmb3JtUmVjdXBlcmFyQ2xhdmVcIik7XHJcbiAgICAgICAgaWYgKGZvcm1SZWN1cGVyYXJDbGF2ZS5sZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcm1SZWN1cGVyYXJDbGF2ZS5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1Db250YWJpbGl6YXIgPSAkKFwiI2Zvcm1Db250YWJpbGl6YXJcIik7XHJcbiAgICAgICAgaWYgKGZvcm1Db250YWJpbGl6YXIubGVuZ3RoKVxyXG4gICAgICAgICAgICBmb3JtQ29udGFiaWxpemFyLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgZm9ybUNyZWFyR2xvYmFsID0gJChcIiNmb3JtQ3JlYXJHbG9iYWxcIik7XHJcbiAgICAgICAgaWYgKGZvcm1DcmVhckdsb2JhbC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcm1DcmVhckdsb2JhbC5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1FZGl0YXJHbG9iYWwgPSAkKFwiI2Zvcm1FZGl0YXJHbG9iYWxcIik7XHJcbiAgICAgICAgaWYgKGZvcm1FZGl0YXJHbG9iYWwubGVuZ3RoKVxyXG4gICAgICAgICAgICBmb3JtRWRpdGFyR2xvYmFsLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgZm9ybUNyZWFyT3JkZW5EZUNvbXByYSA9ICQoXCIjZm9ybUNyZWFyT3JkZW5EZUNvbXByYVwiKTtcclxuICAgICAgICBpZiAoZm9ybUNyZWFyT3JkZW5EZUNvbXByYS5sZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcm1DcmVhck9yZGVuRGVDb21wcmEucGFyc2xleShwYXJzbGV5T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciBmb3JtRGlyZWNjaW9uQ2FzYUdsb2JhbCA9ICQoXCIjZm9ybURpcmVjY2lvbkNhc2FHbG9iYWxcIik7XHJcbiAgICAgICAgaWYgKGZvcm1EaXJlY2Npb25DYXNhR2xvYmFsLmxlbmd0aClcclxuICAgICAgICAgICAgZm9ybURpcmVjY2lvbkNhc2FHbG9iYWwucGFyc2xleShwYXJzbGV5T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCJ2YXIgc2VjdXJpdHlfSW5kZXggPSB7XHJcblxyXG4gICAgbG9naW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgICQoXCIjZm9ybUxvZ2luXCIpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybS5wYXJzbGV5KCkudmFsaWRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5wYXJzbGV5KCkuaXNWYWxpZCgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dpblZpZXdNb2RlbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFbWFpbFwiOiAkKFwiI2VtYWlsXCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBhc3N3b3JkXCI6ICQoXCIjcGFzc3dvcmRcIikudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVtZW1iZXJNZVwiOiAkKFwiI3JlbWVtYmVyTWVcIikuaXMoJzpjaGVja2VkJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gJCgnaW5wdXRbbmFtZT1cIl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBqc29uQVBJO1xyXG4gICAgICAgICAgICAgICAgICAgICQuZ2V0SlNPTignaHR0cHM6Ly9pcGFwaS5jby9qc29uLycsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb25BUEkgPSBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcm9vdEhvc3QgKyAnU2VjdXJpdHkvTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbjogdG9rZW4sIG1vZGVsOiBsb2dpblZpZXdNb2RlbCwgSnNvbkFQSToganNvbkFQSSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLm1zbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcm9vdEhvc3QgKyBcIkhvbWUvV2VsY29tZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiVmFsaWRhY2nDs25cIiwgcmVzcG9uc2UubXNuLCBcIndhcm5pbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIyMDBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCByZXNwb25zZS5lcnJvciwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIFwiRXJyb3IgZW4gZWwgbcOpdG9kbyBsb2dpbiBcXG5cIiArIGV4LCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbG9nT2ZmOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiByb290SG9zdCArICdTZWN1cml0eS9Mb2dPZmYnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm1zbiA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcm9vdEhvc3QgKyBcIkhvbWUvSW5kZXhcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgcmVzcG9uc2UubXNuLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSksIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIFwiRXJyb3IgZW4gZWwgbcOpdG9kbyBsb2dPZmYgXFxuXCIgKyBleCwgXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZm9yZ290UGFzc3dvcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgICQoXCIjZm9ybVJlY3VwZXJhckNsYXZlXCIpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBmb3JtID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3JtLnBhcnNsZXkoKS52YWxpZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLnBhcnNsZXkoKS5pc1ZhbGlkKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtYWlsID0gJChcIiNyZXNldElucHV0RW1haWwxXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSAkKCdpbnB1dFtuYW1lPVwiX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW5cIl0nKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcm9vdEhvc3QgKyAnU2VjdXJpdHkvRm9yZ290UGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IF9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuOiB0b2tlbiwgRW1haWw6IGVtYWlsIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5tc24ubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiTm90aWZpY2FjacOzblwiLCByZXNwb25zZS5tc24sIFwic3VjY2Vzc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgcmVzcG9uc2UuZXJyb3IsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgZXgsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBcIkVycm9yIGVuIGVsIG3DqXRvZG8gZm9yZ290UGFzc3dvcmQgXFxuXCIgKyBleCwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTsiLCIvKipcclxuICogQ2xhc2UgcXVlIGNvbnRpZW5lIGxvcyBtw6l0b2RvIHBhcmEgY3JlYXIgdW4gdXN1YXJpby5cclxuICogKi9cclxuXHJcblxyXG52YXIgc2VjdXJpdHlfQ3JlYXJVc3VhcmlvID0ge1xyXG5cclxuICAgIGNyZWFyVXN1YXJpbzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgJChcIiNmb3JtQ3JlYXJHbG9iYWxcIikuc3VibWl0KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybS5wYXJzbGV5KCkudmFsaWRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5wYXJzbGV5KCkuaXNWYWxpZCgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9ICQodGhpcykuc2VyaWFsaXplKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtQ3JlYXJHbG9iYWwgPSAkKFwiI2Zvcm1DcmVhckdsb2JhbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtQ3JlYXJHbG9iYWxbMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByb290SG9zdCArICdTZWN1cml0eS9DcmVhclVzdWFyaW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubXNuID09PSBcInN1Y2Nlc3NcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiTm90aWZpY2FjacOzblwiLCBcIkVsIHVzdWFyaW8gc2UgY3JlbyBjb3JyZWN0YW1lbnRlIGVuIGVsIHNpc3RlbWEuXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSByb290SG9zdCArIFwiSG9tZS9JbmRleFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCByZXNwb25zZS5lcnJvciwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBleCwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIFwiRXJyb3IgZW4gZWwgbcOpdG9kbyBjcmVhclVzdWFyaW8gXFxuXCIgKyBleCwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufTsiLCIkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJ1tkYXRhLWNhc2NhZGUtY29tYm9dJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgXHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtY2FzY2FkZS1jb21ibycpO1xyXG5cclxuICAgIHZhciB1cmwgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtY2FzY2FkZS1jb21iby1zb3VyY2UnKTtcclxuXHJcbiAgICB2YXIgcGFyYW1OYW1lID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNhc2NhZGUtY29tYm8tcGFyYW0tbmFtZScpO1xyXG5cclxuICAgIHZhciBkYXRhID0ge307XHJcbiAgICBkYXRhW3BhcmFtTmFtZV0gPSBpZDtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHsgaWQ6ICQodGhpcykudmFsKCkgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgJChpZCkuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaW5kZXgsIHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHR5cGUuaWQgKyAnXCI+JyArIHR5cGUuTm9tYnJlICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgJChpZCkuYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuc2VsZWN0cGlja2VyJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XHJcblxyXG4gICAgICAgICAgICAkKGlkKS50cmlnZ2VyKFwiY2hvc2VuOnVwZGF0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnZm9ybScpLnBhcnNsZXkoKTtcclxufSk7XHJcbndpbmRvdy5QYXJzbGV5Lm9uKCdmaWVsZDplcnJvcicsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFRoaXMgZ2xvYmFsIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGZvciBhbnkgZmllbGQgdGhhdCBmYWlscyB2YWxpZGF0aW9uLlxyXG4gICAgdGhpcy4kZWxlbWVudC5jbG9zZXN0KCcudGFiLXBhbmUnKS5hZGRDbGFzcygndmFsaWRhdGlvbl9lcnJvcicpO1xyXG4gICAgJCgnLnRhYi1jb250ZW50IC50YWItcGFuZS52YWxpZGF0aW9uX2Vycm9yOmVxKDApJykuYWRkQ2xhc3MoJ2ZpcnN0X3RhYl93aXRoX2Vycm9ycycpO1xyXG4gICAgY3VycmVudF90YWJfaWQgPSAkKCcudGFiLWNvbnRlbnQgLnRhYi1wYW5lLnZhbGlkYXRpb25fZXJyb3IuZmlyc3RfdGFiX3dpdGhfZXJyb3JzJykuYXR0cignaWQnKTtcclxuICAgICQoJy5uYXYtdGFicyBhW2hyZWY9XCInICsgJyMnICsgY3VycmVudF90YWJfaWQgKyAnXCJdJykudGFiKCdzaG93Jyk7XHJcbiAgICAkKCcubmF2LXRhYnMgYVtocmVmPVwiJyArICcjJyArICh0aGlzLiRlbGVtZW50LmNsb3Nlc3QoJy50YWItcGFuZScpLmF0dHIoJ2lkJykpICsgJ1wiXScpLmFkZENsYXNzKCd2YWxpZGF0aW9uX2Vycm9ycycpO1xyXG59KTsgXHJcbndpbmRvdy5QYXJzbGV5Lm9uKCdmaWVsZDpzdWNjZXNzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gVGhpcyBnbG9iYWwgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgZm9yIGFueSBmaWVsZCB0aGF0IGZhaWxzIHZhbGlkYXRpb24uXHJcbiAgICBpZiAodGhpcy4kZWxlbWVudC5jbG9zZXN0KCcudmFsaWRhdGlvbl9lcnJvcicpLmNoaWxkcmVuKCkuZmluZCgnLnBhcnNsZXktZXJyb3InKS5sZW5ndGgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuJGVsZW1lbnQuYXR0cignaWQnKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5uYXYtdGFicyBhW2hyZWY9XCInICsgJyMnICsgKHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnLnRhYi1wYW5lJykuYXR0cignaWQnKSkgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3ZhbGlkYXRpb25fZXJyb3JzJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJykpO1xyXG4gICAgfVxyXG59KTsiLCIvLyBVbm9idHJ1c2l2ZSBBamF4IHN1cHBvcnQgbGlicmFyeSBmb3IgalF1ZXJ5XHJcbi8vIENvcHlyaWdodCAoQykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBAdmVyc2lvbiB2My4yLjVcclxuLy8gXHJcbi8vIE1pY3Jvc29mdCBncmFudHMgeW91IHRoZSByaWdodCB0byB1c2UgdGhlc2Ugc2NyaXB0IGZpbGVzIGZvciB0aGUgc29sZVxyXG4vLyBwdXJwb3NlIG9mIGVpdGhlcjogKGkpIGludGVyYWN0aW5nIHRocm91Z2ggeW91ciBicm93c2VyIHdpdGggdGhlIE1pY3Jvc29mdFxyXG4vLyB3ZWJzaXRlIG9yIG9ubGluZSBzZXJ2aWNlLCBzdWJqZWN0IHRvIHRoZSBhcHBsaWNhYmxlIGxpY2Vuc2luZyBvciB1c2VcclxuLy8gdGVybXM7IG9yIChpaSkgdXNpbmcgdGhlIGZpbGVzIGFzIGluY2x1ZGVkIHdpdGggYSBNaWNyb3NvZnQgcHJvZHVjdCBzdWJqZWN0XHJcbi8vIHRvIHRoYXQgcHJvZHVjdCdzIGxpY2Vuc2UgdGVybXMuIE1pY3Jvc29mdCByZXNlcnZlcyBhbGwgb3RoZXIgcmlnaHRzIHRvIHRoZVxyXG4vLyBmaWxlcyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgYnkgTWljcm9zb2Z0LCB3aGV0aGVyIGJ5IGltcGxpY2F0aW9uLCBlc3RvcHBlbFxyXG4vLyBvciBvdGhlcndpc2UuIEluc29mYXIgYXMgYSBzY3JpcHQgZmlsZSBpcyBkdWFsIGxpY2Vuc2VkIHVuZGVyIEdQTCxcclxuLy8gTWljcm9zb2Z0IG5laXRoZXIgdG9vayB0aGUgY29kZSB1bmRlciBHUEwgbm9yIGRpc3RyaWJ1dGVzIGl0IHRoZXJldW5kZXIgYnV0XHJcbi8vIHVuZGVyIHRoZSB0ZXJtcyBzZXQgb3V0IGluIHRoaXMgcGFyYWdyYXBoLiBBbGwgbm90aWNlcyBhbmQgbGljZW5zZXNcclxuLy8gYmVsb3cgYXJlIGZvciBpbmZvcm1hdGlvbmFsIHB1cnBvc2VzIG9ubHkuXHJcblxyXG4vKmpzbGludCB3aGl0ZTogdHJ1ZSwgYnJvd3NlcjogdHJ1ZSwgb25ldmFyOiB0cnVlLCB1bmRlZjogdHJ1ZSwgbm9tZW46IHRydWUsIGVxZXFlcTogdHJ1ZSwgcGx1c3BsdXM6IHRydWUsIGJpdHdpc2U6IHRydWUsIHJlZ2V4cDogdHJ1ZSwgbmV3Y2FwOiB0cnVlLCBpbW1lZDogdHJ1ZSwgc3RyaWN0OiBmYWxzZSAqL1xyXG4vKmdsb2JhbCB3aW5kb3c6IGZhbHNlLCBqUXVlcnk6IGZhbHNlICovXHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgIHZhciBkYXRhX2NsaWNrID0gXCJ1bm9idHJ1c2l2ZUFqYXhDbGlja1wiLFxyXG4gICAgICAgIGRhdGFfdGFyZ2V0ID0gXCJ1bm9idHJ1c2l2ZUFqYXhDbGlja1RhcmdldFwiLFxyXG4gICAgICAgIGRhdGFfdmFsaWRhdGlvbiA9IFwidW5vYnRydXNpdmVWYWxpZGF0aW9uXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RnVuY3Rpb24oY29kZSwgYXJnTmFtZXMpIHtcclxuICAgICAgICB2YXIgZm4gPSB3aW5kb3csIHBhcnRzID0gKGNvZGUgfHwgXCJcIikuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHdoaWxlIChmbiAmJiBwYXJ0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm4gPSBmbltwYXJ0cy5zaGlmdCgpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcmdOYW1lcy5wdXNoKGNvZGUpO1xyXG4gICAgICAgIHJldHVybiBGdW5jdGlvbi5jb25zdHJ1Y3Rvci5hcHBseShudWxsLCBhcmdOYW1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNNZXRob2RQcm94eVNhZmUobWV0aG9kKSB7XHJcbiAgICAgICAgcmV0dXJuIG1ldGhvZCA9PT0gXCJHRVRcIiB8fCBtZXRob2QgPT09IFwiUE9TVFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFzeW5jT25CZWZvcmVTZW5kKHhociwgbWV0aG9kKSB7XHJcbiAgICAgICAgaWYgKCFpc01ldGhvZFByb3h5U2FmZShtZXRob2QpKSB7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1IVFRQLU1ldGhvZC1PdmVycmlkZVwiLCBtZXRob2QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhc3luY09uU3VjY2VzcyhlbGVtZW50LCBkYXRhLCBjb250ZW50VHlwZSkge1xyXG4gICAgICAgIHZhciBtb2RlO1xyXG5cclxuICAgICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtamF2YXNjcmlwdFwiKSAhPT0gLTEpIHsgIC8vIGpRdWVyeSBhbHJlYWR5IGV4ZWN1dGVzIEphdmFTY3JpcHQgZm9yIHVzXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1vZGUgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtbW9kZVwiKSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtdXBkYXRlXCIpKS5lYWNoKGZ1bmN0aW9uIChpLCB1cGRhdGUpIHtcclxuICAgICAgICAgICAgdmFyIHRvcDtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkJFRk9SRVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICQodXBkYXRlKS5wcmVwZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFGVEVSXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJCh1cGRhdGUpLmFwcGVuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJSRVBMQUNFLVdJVEhcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKHVwZGF0ZSkucmVwbGFjZVdpdGgoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICQodXBkYXRlKS5odG1sKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXN5bmNSZXF1ZXN0KGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgY29uZmlybSwgbG9hZGluZywgbWV0aG9kLCBkdXJhdGlvbjtcclxuXHJcbiAgICAgICAgY29uZmlybSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWNvbmZpcm1cIik7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0gJiYgIXdpbmRvdy5jb25maXJtKGNvbmZpcm0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvYWRpbmcgPSAkKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWxvYWRpbmdcIikpO1xyXG4gICAgICAgIGR1cmF0aW9uID0gcGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtbG9hZGluZy1kdXJhdGlvblwiKSwgMTApIHx8IDA7XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgdHlwZTogZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtbWV0aG9kXCIpIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdXJsOiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYWpheC11cmxcIikgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBjYWNoZTogKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWNhY2hlXCIpIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgYXN5bmNPbkJlZm9yZVNlbmQoeGhyLCBtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZ2V0RnVuY3Rpb24oZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtYmVnaW5cIiksIFtcInhoclwiXSkuYXBwbHkoZWxlbWVudCwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZy5zaG93KGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nLmhpZGUoZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgZ2V0RnVuY3Rpb24oZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtY29tcGxldGVcIiksIFtcInhoclwiLCBcInN0YXR1c1wiXSkuYXBwbHkoZWxlbWVudCwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgICAgICAgICBhc3luY09uU3VjY2VzcyhlbGVtZW50LCBkYXRhLCB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikgfHwgXCJ0ZXh0L2h0bWxcIik7XHJcbiAgICAgICAgICAgICAgICBnZXRGdW5jdGlvbihlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYWpheC1zdWNjZXNzXCIpLCBbXCJkYXRhXCIsIFwic3RhdHVzXCIsIFwieGhyXCJdKS5hcHBseShlbGVtZW50LCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZ2V0RnVuY3Rpb24oZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtZmFpbHVyZVwiKSwgW1wieGhyXCIsIFwic3RhdHVzXCIsIFwiZXJyb3JcIl0pLmFwcGx5KGVsZW1lbnQsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5kYXRhLnB1c2goeyBuYW1lOiBcIlgtUmVxdWVzdGVkLVdpdGhcIiwgdmFsdWU6IFwiWE1MSHR0cFJlcXVlc3RcIiB9KTtcclxuXHJcbiAgICAgICAgbWV0aG9kID0gb3B0aW9ucy50eXBlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKCFpc01ldGhvZFByb3h5U2FmZShtZXRob2QpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9IFwiUE9TVFwiO1xyXG4gICAgICAgICAgICBvcHRpb25zLmRhdGEucHVzaCh7IG5hbWU6IFwiWC1IVFRQLU1ldGhvZC1PdmVycmlkZVwiLCB2YWx1ZTogbWV0aG9kIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5hamF4KG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKGZvcm0pIHtcclxuICAgICAgICB2YXIgdmFsaWRhdGlvbkluZm8gPSAkKGZvcm0pLmRhdGEoZGF0YV92YWxpZGF0aW9uKTtcclxuICAgICAgICByZXR1cm4gIXZhbGlkYXRpb25JbmZvIHx8ICF2YWxpZGF0aW9uSW5mby52YWxpZGF0ZSB8fCB2YWxpZGF0aW9uSW5mby52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJhW2RhdGEtYWpheD10cnVlXVwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYXN5bmNSZXF1ZXN0KHRoaXMsIHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLmhyZWYsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiZm9ybVtkYXRhLWFqYXg9dHJ1ZV0gaW5wdXRbdHlwZT1pbWFnZV1cIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIHZhciBuYW1lID0gZXZ0LnRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgICB0YXJnZXQgPSAkKGV2dC50YXJnZXQpLFxyXG4gICAgICAgICAgICBmb3JtID0gJCh0YXJnZXQucGFyZW50cyhcImZvcm1cIilbMF0pLFxyXG4gICAgICAgICAgICBvZmZzZXQgPSB0YXJnZXQub2Zmc2V0KCk7XHJcblxyXG4gICAgICAgIGZvcm0uZGF0YShkYXRhX2NsaWNrLCBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogbmFtZSArIFwiLnhcIiwgdmFsdWU6IE1hdGgucm91bmQoZXZ0LnBhZ2VYIC0gb2Zmc2V0LmxlZnQpIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogbmFtZSArIFwiLnlcIiwgdmFsdWU6IE1hdGgucm91bmQoZXZ0LnBhZ2VZIC0gb2Zmc2V0LnRvcCkgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmVEYXRhKGRhdGFfY2xpY2spO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImZvcm1bZGF0YS1hamF4PXRydWVdIDpzdWJtaXRcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIHZhciBuYW1lID0gZXZ0LmN1cnJlbnRUYXJnZXQubmFtZSxcclxuICAgICAgICAgICAgdGFyZ2V0ID0gJChldnQudGFyZ2V0KSxcclxuICAgICAgICAgICAgZm9ybSA9ICQodGFyZ2V0LnBhcmVudHMoXCJmb3JtXCIpWzBdKTtcclxuXHJcbiAgICAgICAgZm9ybS5kYXRhKGRhdGFfY2xpY2ssIG5hbWUgPyBbeyBuYW1lOiBuYW1lLCB2YWx1ZTogZXZ0LmN1cnJlbnRUYXJnZXQudmFsdWUgfV0gOiBbXSk7XHJcbiAgICAgICAgZm9ybS5kYXRhKGRhdGFfdGFyZ2V0LCB0YXJnZXQpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmVEYXRhKGRhdGFfY2xpY2spO1xyXG4gICAgICAgICAgICBmb3JtLnJlbW92ZURhdGEoZGF0YV90YXJnZXQpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJzdWJtaXRcIiwgXCJmb3JtW2RhdGEtYWpheD10cnVlXVwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgdmFyIGNsaWNrSW5mbyA9ICQodGhpcykuZGF0YShkYXRhX2NsaWNrKSB8fCBbXSxcclxuICAgICAgICAgICAgY2xpY2tUYXJnZXQgPSAkKHRoaXMpLmRhdGEoZGF0YV90YXJnZXQpLFxyXG4gICAgICAgICAgICBpc0NhbmNlbCA9IGNsaWNrVGFyZ2V0ICYmIChjbGlja1RhcmdldC5oYXNDbGFzcyhcImNhbmNlbFwiKSB8fCBjbGlja1RhcmdldC5hdHRyKCdmb3Jtbm92YWxpZGF0ZScpICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghaXNDYW5jZWwgJiYgIXZhbGlkYXRlKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmNSZXF1ZXN0KHRoaXMsIHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLmFjdGlvbixcclxuICAgICAgICAgICAgdHlwZTogdGhpcy5tZXRob2QgfHwgXCJHRVRcIixcclxuICAgICAgICAgICAgZGF0YTogY2xpY2tJbmZvLmNvbmNhdCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufShqUXVlcnkpKTtcclxuIiwidmFyIHdhaXRpbmdEaWFsb2cgPSB3YWl0aW5nRGlhbG9nIHx8IChmdW5jdGlvbiAoJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8vIENyZWF0aW5nIG1vZGFsIGRpYWxvZydzIERPTVxyXG4gICAgdmFyICRkaWFsb2cgPSAkKFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWxcIiBkYXRhLWJhY2tkcm9wPVwic3RhdGljXCIgZGF0YS1rZXlib2FyZD1cImZhbHNlXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT1cInBhZGRpbmctdG9wOjIwJTtcIj4nICtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1tXCI+JyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCIgc3R5bGU9XCJcIj4nICtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cIndoaXJsIGR1b1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7bWFyZ2luLWJvdHRvbTowO1wiPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAnPC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gKG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ0xvYWRpbmcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dTaXplOiAnbScsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1R5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgb25IaWRlOiBudWxsIC8vIFRoaXMgY2FsbGJhY2sgcnVucyBhZnRlciB0aGUgZGlhbG9nIHdhcyBoaWRkZW5cclxuICAgICAgICAgICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAvLyBDb25maWd1cmluZyBkaWFsb2dcclxuICAgICAgICAgICAgJGRpYWxvZy5maW5kKCcubW9kYWwtZGlhbG9nJykuYXR0cignY2xhc3MnLCAnbW9kYWwtZGlhbG9nJykuYWRkQ2xhc3MoJ21vZGFsLScgKyBzZXR0aW5ncy5kaWFsb2dTaXplKTtcclxuICAgICAgICAgICAgJGRpYWxvZy5maW5kKCcucHJvZ3Jlc3MtYmFyJykuYXR0cignY2xhc3MnLCAncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wcm9ncmVzc1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICRkaWFsb2cuZmluZCgnLnByb2dyZXNzLWJhcicpLmFkZENsYXNzKCdwcm9ncmVzcy1iYXItJyArIHNldHRpbmdzLnByb2dyZXNzVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8kZGlhbG9nLmZpbmQoJ2gzJykudGV4dChtZXNzYWdlKTtcclxuICAgICAgICAgICAgLy8gQWRkaW5nIGNhbGxiYWNrc1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLm9uSGlkZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgJGRpYWxvZy5vZmYoJ2hpZGRlbi5icy5tb2RhbCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uSGlkZS5jYWxsKCRkaWFsb2cpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRkaWFsb2cubW9kYWwoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG5cdFx0ICogQ2xvc2VzIGRpYWxvZ1xyXG5cdFx0ICovXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICRkaWFsb2cubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxufSkoalF1ZXJ5KTsiXX0=

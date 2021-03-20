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

    },
    iniciarPago: function (NroFactura) {

        try {
            $.ajax({
                type: "POST",
                url: rootHost + 'Compras/IniciarPago',
                data: {
                    NroFactura: NroFactura
                },
                dataType: "html",
                success: function (response) {

                    var respuesta = JSON.parse(response);

                    var responsePago = respuesta.responsePago;
                    var requestId = respuesta.RequestId;

                    console.log(responsePago)
                    var mensaje = "En este momento su factura Nro " + NroFactura + " presenta un proceso de pago cuya transacción se encuentra PENDIENTE de recibir confirmación por parte de su  entidad financiera, por favor espere unos minutos y vuelva a consultar más tarde para verificar si su pago fue confirmado de forma exitosa.Si desea mayor información sobre el estado actual de su"
                    mensaje = mensaje + " operación puede comunicarse a nuestras líneas de atención al cliente o enviar un correo electrónico a jhon.montoya@outlook.com y preguntar por el estado de la transacción:  " + requestId

                    switch (responsePago.Status.status) {
                        case 'OK':

                            swal({
                                title: "Pagos en Línea",
                                text: "A continuación será redireccionado a la pasarela de pagos, ¿esta de acuerdo?",
                                icon: "info",
                                buttons: true,
                                dangerMode: false,
                            }, function () {
                                    location.href = responsePago.ProcessUrl;
                            });

                            break;
                        case 'PENDING':
                            swal({
                                title: "Transacción Pendiente!",
                                text: mensaje,
                                icon: "info",
                                button: "Aceptar",
                            });
                            break;
                        case 'APPROVED':
                            location.href = '/IUSH/ResultadoPago?NroFactura=' + NroFactura;
                            break;
                        case 'REJECTED':
                        case 'FAILED':
                            PagoRechazado(NroFactura);
                            break;
                    }

                }
            });
        } catch (e) {

        }

    }
};
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5pbml0LmpzIiwiY2hhcnRzL2NoYXJ0LWtub2IuanMiLCJjaGFydHMvY2hhcnQuanMiLCJjaGFydHMvY2hhcnRpc3QuanMiLCJjaGFydHMvZWFzeXBpZWNoYXJ0LmpzIiwiY2hhcnRzL2Zsb3QuanMiLCJjaGFydHMvbW9ycmlzLmpzIiwiY2hhcnRzL3JpY2tzaGF3LmpzIiwiY2hhcnRzL3NwYXJrbGluZS5qcyIsImNvbWVyY2lvL0NvbWVyY2lvLmpzIiwiZWxlbWVudHMvY2FyZHMuanMiLCJlbGVtZW50cy9uZXN0YWJsZS5qcyIsImVsZW1lbnRzL25vdGlmeS5qcyIsImVsZW1lbnRzL3BsYXktYW5pbWF0aW9uLmpzIiwiZWxlbWVudHMvcG9ybGV0cy5qcyIsImVsZW1lbnRzL3NvcnRhYmxlLmpzIiwiZWxlbWVudHMvc3dlZXRhbGVydC5qcyIsImNvbW1vbi9ib290c3RyYXAtc3RhcnQuanMiLCJjb21tb24vY2FyZC10b29scy5qcyIsImNvbW1vbi9jb25zdGFudHMuanMiLCJjb21tb24vZnVsbHNjcmVlbi5qcyIsImNvbW1vbi9sb2FkLWNzcy5qcyIsImNvbW1vbi9uYXZiYXItc2VhcmNoLmpzIiwiY29tbW9uL25vdy5qcyIsImNvbW1vbi9ydGwuanMiLCJjb21tb24vc2lkZWJhci5qcyIsImNvbW1vbi9zbGltc2Nyb2xsLmpzIiwiY29tbW9uL3RhYmxlLWNoZWNrYWxsLmpzIiwiY29tbW9uL3RvZ2dsZS1zdGF0ZS5qcyIsImNvbW1vbi90cmlnZ2VyLXJlc2l6ZS5qcyIsImV4dHJhcy9jYWxlbmRhci5qcyIsImV4dHJhcy9qcWNsb3VkLmpzIiwiZXh0cmFzL3NlYXJjaC5qcyIsImZvcm1zL2NvbG9yLXBpY2tlci5qcyIsImZvcm1zL2Zvcm1zLmpzIiwiZm9ybXMvaW1hZ2Vjcm9wLmpzIiwiZm9ybXMvc2VsZWN0Mi5qcyIsImZvcm1zL3VwbG9hZC5qcyIsImZvcm1zL3dpemFyZC5qcyIsImZvcm1zL3hlZGl0YWJsZS5qcyIsIkdsb2JhbC9mdW5jaW9uZXNHbG9iYWxlcy5qcyIsIm1hcHMvZ21hcC5qcyIsIm1hcHMvdmVjdG9yLm1hcC5kZW1vLmpzIiwibWFwcy92ZWN0b3IubWFwLmpzIiwicGFnZXMvcGFnZXMuanMiLCJzZWN1cml0eS9JbmRleC5qcyIsInNlY3VyaXR5L19DcmVhclVzdWFyaW8uanMiLCJjYXNjYWRlLmNvbWJvLmpzIiwiY3VzdG9tLmpzIiwianF1ZXJ5LnVub2J0cnVzaXZlLWFqYXguanMiLCJ3YWl0aW5nRGlhbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5cUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKlxyXG4gKiBcclxuICogRVZFUlRFQyBUaWVuZGFcclxuICogVmVyc2lvbjogMS4wLjBcclxuICogQXV0aG9yOiBqaG9uLm1vbnRveWFAb3V0bG9vay5jb21cclxuICpcclxuICovXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYXBwbGljYXRpb25cXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gUmVzdG9yZSBib2R5IGNsYXNzZXNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICBuZXcgU3RhdGVUb2dnbGVyKCkucmVzdG9yZVN0YXRlKCRib2R5KTtcclxuXHJcbiAgICAgICAgLy8gZW5hYmxlIHNldHRpbmdzIHRvZ2dsZSBhZnRlciByZXN0b3JlXHJcbiAgICAgICAgJCgnI2Noay1maXhlZCcpLnByb3AoJ2NoZWNrZWQnLCAkYm9keS5oYXNDbGFzcygnbGF5b3V0LWZpeGVkJykpO1xyXG4gICAgICAgICQoJyNjaGstY29sbGFwc2VkJykucHJvcCgnY2hlY2tlZCcsICRib2R5Lmhhc0NsYXNzKCdhc2lkZS1jb2xsYXBzZWQnKSk7XHJcbiAgICAgICAgJCgnI2Noay1jb2xsYXBzZWQtdGV4dCcpLnByb3AoJ2NoZWNrZWQnLCAkYm9keS5oYXNDbGFzcygnYXNpZGUtY29sbGFwc2VkLXRleHQnKSk7XHJcbiAgICAgICAgJCgnI2Noay1ib3hlZCcpLnByb3AoJ2NoZWNrZWQnLCAkYm9keS5oYXNDbGFzcygnbGF5b3V0LWJveGVkJykpO1xyXG4gICAgICAgICQoJyNjaGstZmxvYXQnKS5wcm9wKCdjaGVja2VkJywgJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLWZsb2F0JykpO1xyXG4gICAgICAgICQoJyNjaGstaG92ZXInKS5wcm9wKCdjaGVja2VkJywgJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLWhvdmVyJykpO1xyXG5cclxuICAgICAgICAvLyBXaGVuIHJlYWR5IGRpc3BsYXkgdGhlIG9mZnNpZGViYXJcclxuICAgICAgICAkKCcub2Zmc2lkZWJhci5kLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcblxyXG4gICAgICAgIC8vIERpc2FibGUgd2FybmluZyBcIlN5bmNocm9ub3VzIFhNTEh0dHBSZXF1ZXN0IG9uIHRoZSBtYWluIHRocmVhZCBpcyBkZXByZWNhdGVkLi5cIlxyXG4gICAgICAgICQuYWpheFByZWZpbHRlcihmdW5jdGlvbihvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pOyAvLyBkb2MgcmVhZHlcclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEtub2IgY2hhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRLbm9iKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0S25vYigpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmtub2IpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGtub2JMb2FkZXJPcHRpb25zMSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICc1MCUnLCAvLyByZXNwb25zaXZlXHJcbiAgICAgICAgICAgIGRpc3BsYXlJbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgZmdDb2xvcjogQVBQX0NPTE9SU1snaW5mbyddXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKCcja25vYi1jaGFydDEnKS5rbm9iKGtub2JMb2FkZXJPcHRpb25zMSk7XHJcblxyXG4gICAgICAgIHZhciBrbm9iTG9hZGVyT3B0aW9uczIgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJywgLy8gcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICBkaXNwbGF5SW5wdXQ6IHRydWUsXHJcbiAgICAgICAgICAgIGZnQ29sb3I6IEFQUF9DT0xPUlNbJ3B1cnBsZSddLFxyXG4gICAgICAgICAgICByZWFkT25seTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2tub2ItY2hhcnQyJykua25vYihrbm9iTG9hZGVyT3B0aW9uczIpO1xyXG5cclxuICAgICAgICB2YXIga25vYkxvYWRlck9wdGlvbnMzID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzUwJScsIC8vIHJlc3BvbnNpdmVcclxuICAgICAgICAgICAgZGlzcGxheUlucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICBmZ0NvbG9yOiBBUFBfQ09MT1JTWydpbmZvJ10sXHJcbiAgICAgICAgICAgIGJnQ29sb3I6IEFQUF9DT0xPUlNbJ2dyYXknXSxcclxuICAgICAgICAgICAgYW5nbGVPZmZzZXQ6IC0xMjUsXHJcbiAgICAgICAgICAgIGFuZ2xlQXJjOiAyNTBcclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNrbm9iLWNoYXJ0MycpLmtub2Ioa25vYkxvYWRlck9wdGlvbnMzKTtcclxuXHJcbiAgICAgICAgdmFyIGtub2JMb2FkZXJPcHRpb25zNCA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICc1MCUnLCAvLyByZXNwb25zaXZlXHJcbiAgICAgICAgICAgIGRpc3BsYXlJbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgZmdDb2xvcjogQVBQX0NPTE9SU1sncGluayddLFxyXG4gICAgICAgICAgICBkaXNwbGF5UHJldmlvdXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRoaWNrbmVzczogMC4xLFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAncm91bmQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKCcja25vYi1jaGFydDQnKS5rbm9iKGtub2JMb2FkZXJPcHRpb25zNCk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ2hhcnQgSlNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRDaGFydEpTKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2hhcnRKUygpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBDaGFydCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gcmFuZG9tIHZhbHVlcyBmb3IgZGVtb1xyXG4gICAgICAgIHZhciByRmFjdG9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIExpbmUgY2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgbGluZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ015IEZpcnN0IGRhdGFzZXQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxMTQsMTAyLDE4NiwwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxMTQsMTAyLDE4NiwxKScsXHJcbiAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ015IFNlY29uZCBkYXRhc2V0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMzUsMTgzLDIyOSwwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgzNSwxODMsMjI5LDEpJyxcclxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtyRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCldXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGxpbmVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBsaW5lY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0anMtbGluZWNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgbGluZUNoYXJ0ID0gbmV3IENoYXJ0KGxpbmVjdHgsIHtcclxuICAgICAgICAgICAgZGF0YTogbGluZURhdGEsXHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgb3B0aW9uczogbGluZU9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFyIGNoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIGJhckRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjNiN2U1JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzIzYjdlNScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNWQ5Y2VjJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzVkOWNlYycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBiYXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBiYXJjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRqcy1iYXJjaGFydCcpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIGJhckNoYXJ0ID0gbmV3IENoYXJ0KGJhcmN0eCwge1xyXG4gICAgICAgICAgICBkYXRhOiBiYXJEYXRhLFxyXG4gICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgb3B0aW9uczogYmFyT3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAgRG91Z2hudXQgY2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgZG91Z2hudXREYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgICAgICdQdXJwbGUnLFxyXG4gICAgICAgICAgICAgICAgJ1llbGxvdycsXHJcbiAgICAgICAgICAgICAgICAnQmx1ZSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzAwLCA1MCwgMTAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjNzI2NmJhJyxcclxuICAgICAgICAgICAgICAgICAgICAnI2ZhZDczMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMyM2I3ZTUnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzcyNjZiYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNmYWQ3MzInLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMjNiN2U1J1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBkb3VnaG51dE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGRvdWdobnV0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0anMtZG91Z2hudXRjaGFydCcpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIGRvdWdobnV0Q2hhcnQgPSBuZXcgQ2hhcnQoZG91Z2hudXRjdHgsIHtcclxuICAgICAgICAgICAgZGF0YTogZG91Z2hudXREYXRhLFxyXG4gICAgICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBkb3VnaG51dE9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUGllIGNoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIHBpZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICAgICAgJ1B1cnBsZScsXHJcbiAgICAgICAgICAgICAgICAnWWVsbG93JyxcclxuICAgICAgICAgICAgICAgICdCbHVlJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGRhdGE6IFszMDAsIDUwLCAxMDBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJyM3MjY2YmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjZmFkNzMyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzIzYjdlNSdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjNzI2NmJhJyxcclxuICAgICAgICAgICAgICAgICAgICAnI2ZhZDczMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMyM2I3ZTUnXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHBpZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHBpZWN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydGpzLXBpZWNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgcGllQ2hhcnQgPSBuZXcgQ2hhcnQocGllY3R4LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHBpZURhdGEsXHJcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBwaWVPcHRpb25zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFBvbGFyIGNoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIHBvbGFyRGF0YSA9IHtcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgNyxcclxuICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJyNmNTMyZTUnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjNzI2NmJhJyxcclxuICAgICAgICAgICAgICAgICAgICAnI2Y1MzJlNScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyM3MjY2YmEnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNeSBkYXRhc2V0JyAvLyBmb3IgbGVnZW5kXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgICAgICdMYWJlbCAxJyxcclxuICAgICAgICAgICAgICAgICdMYWJlbCAyJyxcclxuICAgICAgICAgICAgICAgICdMYWJlbCAzJyxcclxuICAgICAgICAgICAgICAgICdMYWJlbCA0J1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHBvbGFyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcG9sYXJjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRqcy1wb2xhcmNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgcG9sYXJDaGFydCA9IG5ldyBDaGFydChwb2xhcmN0eCwge1xyXG4gICAgICAgICAgICBkYXRhOiBwb2xhckRhdGEsXHJcbiAgICAgICAgICAgIHR5cGU6ICdwb2xhckFyZWEnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBwb2xhck9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmFkYXIgY2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgcmFkYXJEYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnRWF0aW5nJywgJ0RyaW5raW5nJywgJ1NsZWVwaW5nJywgJ0Rlc2lnbmluZycsICdDb2RpbmcnLCAnQ3ljbGluZycsICdSdW5uaW5nJ10sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNeSBGaXJzdCBkYXRhc2V0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTE0LDEwMiwxODYsMC4yKScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTE0LDEwMiwxODYsMSknLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzY1LCA1OSwgOTAsIDgxLCA1NiwgNTUsIDQwXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ015IFNlY29uZCBkYXRhc2V0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUxLDE4NywyMDUsMC4yKScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTUxLDE4NywyMDUsMSknLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzI4LCA0OCwgNDAsIDE5LCA5NiwgMjcsIDEwMF1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcmFkYXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByYWRhcmN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydGpzLXJhZGFyY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciByYWRhckNoYXJ0ID0gbmV3IENoYXJ0KHJhZGFyY3R4LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHJhZGFyRGF0YSxcclxuICAgICAgICAgICAgdHlwZTogJ3JhZGFyJyxcclxuICAgICAgICAgICAgb3B0aW9uczogcmFkYXJPcHRpb25zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ2hhcnRpc3RcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRDaGFydGlzdHMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDaGFydGlzdHMoKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgQ2hhcnRpc3QgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIEJhciBiaXBvbGFyXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB2YXIgZGF0YTEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydXMScsICdXMicsICdXMycsICdXNCcsICdXNScsICdXNicsICdXNycsICdXOCcsICdXOScsICdXMTAnXSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMiwgNCwgOCwgNiwgLTIsIC0xLCAtNCwgLTYsIC0yXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMxID0ge1xyXG4gICAgICAgICAgICBoaWdoOiAxMCxcclxuICAgICAgICAgICAgbG93OiAtMTAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwLFxyXG4gICAgICAgICAgICBheGlzWDoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggJSAyID09PSAwID8gdmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbmV3IENoYXJ0aXN0LkJhcignI2N0LWJhcjEnLCBkYXRhMSwgb3B0aW9uczEpO1xyXG5cclxuICAgICAgICAvLyBCYXIgSG9yaXpvbnRhbFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgbmV3IENoYXJ0aXN0LkJhcignI2N0LWJhcjInLCB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JywgJ1N1bmRheSddLFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIFs1LCA0LCAzLCA3LCA1LCAxMCwgM10sXHJcbiAgICAgICAgICAgICAgICBbMywgMiwgOSwgNSwgNCwgNiwgNF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VyaWVzQmFyRGlzdGFuY2U6IDEwLFxyXG4gICAgICAgICAgICByZXZlcnNlRGF0YTogdHJ1ZSxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbEJhcnM6IHRydWUsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwLFxyXG4gICAgICAgICAgICBheGlzWToge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiA3MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIExpbmVcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIG5ldyBDaGFydGlzdC5MaW5lKCcjY3QtbGluZTEnLCB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5J10sXHJcbiAgICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICAgICAgWzEyLCA5LCA3LCA4LCA1XSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAzLjUsIDcsIDNdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDMsIDQsIDUsIDZdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODAsXHJcbiAgICAgICAgICAgIGNoYXJ0UGFkZGluZzoge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIFNWRyBBbmltYXRpb25cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgY2hhcnQxID0gbmV3IENoYXJ0aXN0LkxpbmUoJyNjdC1saW5lMycsIHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXHJcbiAgICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICAgICAgWzEsIDUsIDIsIDUsIDQsIDNdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDMsIDQsIDgsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzUsIDQsIDMsIDIsIDEsIDAuNV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbG93OiAwLFxyXG4gICAgICAgICAgICBzaG93QXJlYTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd1BvaW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjaGFydDEub24oJ2RyYXcnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdsaW5lJyB8fCBkYXRhLnR5cGUgPT09ICdhcmVhJykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IDIwMDAgKiBkYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGEucGF0aC5jbG9uZSgpLnNjYWxlKDEsIDApLnRyYW5zbGF0ZSgwLCBkYXRhLmNoYXJ0UmVjdC5oZWlnaHQoKSkuc3RyaW5naWZ5KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhLnBhdGguY2xvbmUoKS5zdHJpbmdpZnkoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBDaGFydGlzdC5TdmcuRWFzaW5nLmVhc2VPdXRRdWludFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBTbGltIGFuaW1hdGlvblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnRpc3QuTGluZSgnI2N0LWxpbmUyJywge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICBbMTIsIDksIDcsIDgsIDUsIDQsIDYsIDIsIDMsIDMsIDQsIDZdLFxyXG4gICAgICAgICAgICAgICAgWzQsIDUsIDMsIDcsIDMsIDUsIDUsIDMsIDQsIDQsIDUsIDVdLFxyXG4gICAgICAgICAgICAgICAgWzUsIDMsIDQsIDUsIDYsIDMsIDMsIDQsIDUsIDYsIDMsIDRdLFxyXG4gICAgICAgICAgICAgICAgWzMsIDQsIDUsIDYsIDcsIDYsIDQsIDUsIDYsIDcsIDYsIDNdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxvdzogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTGV0J3MgcHV0IGEgc2VxdWVuY2UgbnVtYmVyIGFzaWRlIHNvIHdlIGNhbiB1c2UgaXQgaW4gdGhlIGV2ZW50IGNhbGxiYWNrc1xyXG4gICAgICAgIHZhciBzZXEgPSAwLFxyXG4gICAgICAgICAgICBkZWxheXMgPSA4MCxcclxuICAgICAgICAgICAgZHVyYXRpb25zID0gNTAwO1xyXG5cclxuICAgICAgICAvLyBPbmNlIHRoZSBjaGFydCBpcyBmdWxseSBjcmVhdGVkIHdlIHJlc2V0IHRoZSBzZXF1ZW5jZVxyXG4gICAgICAgIGNoYXJ0Lm9uKCdjcmVhdGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlcSA9IDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE9uIGVhY2ggZHJhd24gZWxlbWVudCBieSBDaGFydGlzdCB3ZSB1c2UgdGhlIENoYXJ0aXN0LlN2ZyBBUEkgdG8gdHJpZ2dlciBTTUlMIGFuaW1hdGlvbnNcclxuICAgICAgICBjaGFydC5vbignZHJhdycsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgc2VxKys7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnbGluZScpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBkcmF3biBlbGVtZW50IGlzIGEgbGluZSB3ZSBkbyBhIHNpbXBsZSBvcGFjaXR5IGZhZGUgaW4uIFRoaXMgY291bGQgYWxzbyBiZSBhY2hpZXZlZCB1c2luZyBDU1MzIGFuaW1hdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZGVsYXkgd2hlbiB3ZSBsaWtlIHRvIHN0YXJ0IHRoZSBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyArIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIER1cmF0aW9uIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB2YWx1ZSB3aGVyZSB0aGUgYW5pbWF0aW9uIHNob3VsZCBzdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdmFsdWUgd2hlcmUgaXQgc2hvdWxkIGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gJ2xhYmVsJyAmJiBkYXRhLmF4aXMgPT09ICd4Jykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGEueSArIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IGRhdGEueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIHNwZWNpZnkgYW4gZWFzaW5nIGZ1bmN0aW9uIGZyb20gQ2hhcnRpc3QuU3ZnLkVhc2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAnbGFiZWwnICYmIGRhdGEuYXhpcyA9PT0gJ3knKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YS54IC0gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAncG9pbnQnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGEueCAtIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB4Mjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YS54IC0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAnZ3JpZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVzaW5nIGRhdGEuYXhpcyB3ZSBnZXQgeCBvciB5IHdoaWNoIHdlIGNhbiB1c2UgdG8gY29uc3RydWN0IG91ciBhbmltYXRpb24gZGVmaW5pdGlvbiBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zMUFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cjogZHVyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGFbZGF0YS5heGlzLnVuaXRzLnBvcyArICcxJ10gLSAzMCxcclxuICAgICAgICAgICAgICAgICAgICB0bzogZGF0YVtkYXRhLmF4aXMudW5pdHMucG9zICsgJzEnXSxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwb3MyQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YVtkYXRhLmF4aXMudW5pdHMucG9zICsgJzInXSAtIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICB0bzogZGF0YVtkYXRhLmF4aXMudW5pdHMucG9zICsgJzInXSxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zW2RhdGEuYXhpcy51bml0cy5wb3MgKyAnMSddID0gcG9zMUFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnNbZGF0YS5heGlzLnVuaXRzLnBvcyArICcyJ10gPSBwb3MyQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uc1snb3BhY2l0eSddID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICB0bzogMSxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hbmltYXRlKGFuaW1hdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEZvciB0aGUgc2FrZSBvZiB0aGUgZXhhbXBsZSB3ZSB1cGRhdGUgdGhlIGNoYXJ0IGV2ZXJ5IHRpbWUgaXQncyBjcmVhdGVkIHdpdGggYSBkZWxheSBvZiAxMCBzZWNvbmRzXHJcbiAgICAgICAgY2hhcnQub24oJ2NyZWF0ZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5fX2V4YW1wbGVBbmltYXRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHdpbmRvdy5fX2V4YW1wbGVBbmltYXRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX19leGFtcGxlQW5pbWF0ZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5fX2V4YW1wbGVBbmltYXRlVGltZW91dCA9IHNldFRpbWVvdXQoY2hhcnQudXBkYXRlLmJpbmQoY2hhcnQpLCAxMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gRWFzeXBpZSBjaGFydCBMb2FkZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRFYXN5UGllQ2hhcnQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRFYXN5UGllQ2hhcnQoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5lYXN5UGllQ2hhcnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gVXNhZ2UgdmlhIGRhdGEgYXR0cmlidXRlc1xyXG4gICAgICAgIC8vIDxkaXYgY2xhc3M9XCJlYXN5cGllLWNoYXJ0XCIgZGF0YS1lYXN5cGllY2hhcnQgZGF0YS1wZXJjZW50PVwiWFwiIGRhdGEtb3B0aW9uTmFtZT1cInZhbHVlXCI+PC9kaXY+XHJcbiAgICAgICAgJCgnW2RhdGEtZWFzeXBpZWNoYXJ0XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gJGVsZW0uZGF0YSgpO1xyXG4gICAgICAgICAgICAkZWxlbS5lYXN5UGllQ2hhcnQob3B0aW9ucyB8fCB7fSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHByb2dyYW1tYXRpYyB1c2FnZVxyXG4gICAgICAgIHZhciBwaWVPcHRpb25zMSA9IHtcclxuICAgICAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFyQ29sb3I6IEFQUF9DT0xPUlNbJ3N1Y2Nlc3MnXSxcclxuICAgICAgICAgICAgdHJhY2tDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjYWxlQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDEwLFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAnY2lyY2xlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2Vhc3lwaWUxJykuZWFzeVBpZUNoYXJ0KHBpZU9wdGlvbnMxKTtcclxuXHJcbiAgICAgICAgdmFyIHBpZU9wdGlvbnMyID0ge1xyXG4gICAgICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYXJDb2xvcjogQVBQX0NPTE9SU1snd2FybmluZyddLFxyXG4gICAgICAgICAgICB0cmFja0NvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgc2NhbGVDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogNCxcclxuICAgICAgICAgICAgbGluZUNhcDogJ2NpcmNsZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNlYXN5cGllMicpLmVhc3lQaWVDaGFydChwaWVPcHRpb25zMik7XHJcblxyXG4gICAgICAgIHZhciBwaWVPcHRpb25zMyA9IHtcclxuICAgICAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFyQ29sb3I6IEFQUF9DT0xPUlNbJ2RhbmdlciddLFxyXG4gICAgICAgICAgICB0cmFja0NvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgc2NhbGVDb2xvcjogQVBQX0NPTE9SU1snZ3JheSddLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDE1LFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAnY2lyY2xlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2Vhc3lwaWUzJykuZWFzeVBpZUNoYXJ0KHBpZU9wdGlvbnMzKTtcclxuXHJcbiAgICAgICAgdmFyIHBpZU9wdGlvbnM0ID0ge1xyXG4gICAgICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYXJDb2xvcjogQVBQX0NPTE9SU1snZGFuZ2VyJ10sXHJcbiAgICAgICAgICAgIHRyYWNrQ29sb3I6IEFQUF9DT0xPUlNbJ3llbGxvdyddLFxyXG4gICAgICAgICAgICBzY2FsZUNvbG9yOiBBUFBfQ09MT1JTWydncmF5LWRhcmsnXSxcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAxNSxcclxuICAgICAgICAgICAgbGluZUNhcDogJ2NpcmNsZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNlYXN5cGllNCcpLmVhc3lQaWVDaGFydChwaWVPcHRpb25zNCk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ0hBUlQgU1BMSU5FXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRGbG90U3BsaW5lKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RmxvdFNwbGluZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVW5pcXVlc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzc2ODI5NFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDcwXSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCA4NV0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgNTldLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDkzXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCA2Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgODZdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDYwXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUmVjdXJyZW50XCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMWY5MmZlXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgMjFdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDEyXSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCAyN10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgMjRdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDE2XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCAzOV0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgMTVdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGF2MiA9IFt7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJIb3Vyc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzIzYjdlNVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDcwXSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCAyMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgNzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDg1XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCA1OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgOTNdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDY2XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCA4Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNjBdLFxyXG4gICAgICAgICAgICAgICAgW1wiT2N0XCIsIDYwXSxcclxuICAgICAgICAgICAgICAgIFtcIk5vdlwiLCAxMl0sXHJcbiAgICAgICAgICAgICAgICBbXCJEZWNcIiwgNTBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb21taXRzXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNzI2NmJhXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgMjBdLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDcwXSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCAzMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgNTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDg1XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA0M10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgOTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDM2XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA4MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJPY3RcIiwgMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTm92XCIsIDcyXSxcclxuICAgICAgICAgICAgICAgIFtcIkRlY1wiLCAzMV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgZGF0YXYzID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMxYmEzY2RcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIjFcIiwgMzhdLFxyXG4gICAgICAgICAgICAgICAgW1wiMlwiLCA0MF0sXHJcbiAgICAgICAgICAgICAgICBbXCIzXCIsIDQyXSxcclxuICAgICAgICAgICAgICAgIFtcIjRcIiwgNDhdLFxyXG4gICAgICAgICAgICAgICAgW1wiNVwiLCA1MF0sXHJcbiAgICAgICAgICAgICAgICBbXCI2XCIsIDcwXSxcclxuICAgICAgICAgICAgICAgIFtcIjdcIiwgMTQ1XSxcclxuICAgICAgICAgICAgICAgIFtcIjhcIiwgNzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiOVwiLCA1OV0sXHJcbiAgICAgICAgICAgICAgICBbXCIxMFwiLCA0OF0sXHJcbiAgICAgICAgICAgICAgICBbXCIxMVwiLCAzOF0sXHJcbiAgICAgICAgICAgICAgICBbXCIxMlwiLCAyOV0sXHJcbiAgICAgICAgICAgICAgICBbXCIxM1wiLCAzMF0sXHJcbiAgICAgICAgICAgICAgICBbXCIxNFwiLCAyMl0sXHJcbiAgICAgICAgICAgICAgICBbXCIxNVwiLCAyOF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk92ZXJhbGxcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMzYTNmNTFcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIjFcIiwgMTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiMlwiLCAxOF0sXHJcbiAgICAgICAgICAgICAgICBbXCIzXCIsIDE3XSxcclxuICAgICAgICAgICAgICAgIFtcIjRcIiwgMTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiNVwiLCAzMF0sXHJcbiAgICAgICAgICAgICAgICBbXCI2XCIsIDExMF0sXHJcbiAgICAgICAgICAgICAgICBbXCI3XCIsIDE5XSxcclxuICAgICAgICAgICAgICAgIFtcIjhcIiwgMThdLFxyXG4gICAgICAgICAgICAgICAgW1wiOVwiLCAxMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTBcIiwgMTldLFxyXG4gICAgICAgICAgICAgICAgW1wiMTFcIiwgMTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTJcIiwgMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTNcIiwgMjBdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTRcIiwgMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiMTVcIiwgMjBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3BsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVuc2lvbjogMC40LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAwLjVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmNmYydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKGxhYmVsLCB4LCB5KSB7IHJldHVybiB4ICsgJyA6ICcgKyB5OyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZmNmY2ZjJyxcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdjYXRlZ29yaWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAxNTAsIC8vIG9wdGlvbmFsOiB1c2UgaXQgZm9yIGEgY2xlYXIgcmVwcmVzZXRhdGlvblxyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICAvL3Bvc2l0aW9uOiAncmlnaHQnIG9yICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXR0ZXI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiAvKiArICcgdmlzaXRvcnMnKi8gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gJCgnLmNoYXJ0LXNwbGluZScpO1xyXG4gICAgICAgIGlmIChjaGFydC5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydCwgZGF0YSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciBjaGFydHYyID0gJCgnLmNoYXJ0LXNwbGluZXYyJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0djIubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnR2MiwgZGF0YXYyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0djMgPSAkKCcuY2hhcnQtc3BsaW5ldjMnKTtcclxuICAgICAgICBpZiAoY2hhcnR2My5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydHYzLCBkYXRhdjMsIG9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuLy8gQ0hBUlQgQVJFQVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3RBcmVhKVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGbG90QXJlYSgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVW5pcXVlc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2FhZDg3NFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDUwXSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCA4NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgNTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDg4XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCA2OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgOTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDU4XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUmVjdXJyZW50XCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjN2RjN2RmXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgMTNdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCA0NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgMjddLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDM4XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCAxMV0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgMzldXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IDAuOFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZjZmMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbihsYWJlbCwgeCwgeSkgeyByZXR1cm4geCArICcgOiAnICsgeTsgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2ZjZmNmYycsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY2F0ZWdvcmllcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246ICdyaWdodCcgb3IgJ2xlZnQnXHJcbiAgICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyAnIHZpc2l0b3JzJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9ICQoJy5jaGFydC1hcmVhJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcbi8vIENIQVJUIEJBUlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3RCYXIpXHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZsb3RCYXIoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlNhbGVzXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOWNkMTU5XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgMjddLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDgyXSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCA1Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgMTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDI4XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA3N10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgMjNdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDQ5XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA4MV0sXHJcbiAgICAgICAgICAgICAgICBbXCJPY3RcIiwgMjBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgYmFyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBiYXJXaWR0aDogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IDAuOVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmY2ZjJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24obGFiZWwsIHgsIHkpIHsgcmV0dXJuIHggKyAnIDogJyArIHk7IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNmY2ZjZmMnLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NhdGVnb3JpZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogJ3JpZ2h0JyBvciAnbGVmdCdcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtYmFyJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcblxyXG4vLyBDSEFSVCBCQVIgU1RBQ0tFRFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3RCYXJTdGFja2VkKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RmxvdEJhclN0YWNrZWQoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlR3ZWV0c1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzUxYmZmMlwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDU2XSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCA4MV0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgOTddLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCAyNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgODVdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDk0XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCA3OF0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiT2N0XCIsIDE3XSxcclxuICAgICAgICAgICAgICAgIFtcIk5vdlwiLCA5MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJEZWNcIiwgNjJdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJMaWtlc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzRhOGVmMVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDY5XSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCAxMzVdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDE0XSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCAxMDBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDEwMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgNjJdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDExNV0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgMjJdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDEwNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJPY3RcIiwgMTMyXSxcclxuICAgICAgICAgICAgICAgIFtcIk5vdlwiLCA3Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJEZWNcIiwgNjFdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIrMVwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2YwNjkzYVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDI5XSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCAzNl0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgNDddLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDIxXSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCA1XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA0OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgMzddLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCAyOF0sXHJcbiAgICAgICAgICAgICAgICBbXCJPY3RcIiwgOV0sXHJcbiAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgMTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiRGVjXCIsIDM1XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBkYXRhdjIgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUGVuZGluZ1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzkyODljYVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiUGoxXCIsIDg2XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMlwiLCAxMzZdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGozXCIsIDk3XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNFwiLCAxMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo1XCIsIDYyXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNlwiLCA4NV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajdcIiwgMTE1XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqOFwiLCA3OF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajlcIiwgMTA0XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTBcIiwgODJdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMVwiLCA5N10sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEyXCIsIDExMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEzXCIsIDYyXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQXNzaWduZWRcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM3MjY2YmFcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIlBqMVwiLCA0OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajJcIiwgODFdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGozXCIsIDQ3XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNFwiLCA0NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajVcIiwgMTAwXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNlwiLCA0OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajdcIiwgOTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo4XCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqOVwiLCA1Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEwXCIsIDE3XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTFcIiwgNDddLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMlwiLCA0NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEzXCIsIDEwMF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvbXBsZXRlZFwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzU2NGFhM1wiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiUGoxXCIsIDI5XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMlwiLCA1Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajNcIiwgMTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo0XCIsIDIxXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNVwiLCA1XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNlwiLCAyNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajdcIiwgMzddLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo4XCIsIDIyXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqOVwiLCAyOF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEwXCIsIDldLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMVwiLCAxNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEyXCIsIDIxXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTNcIiwgNV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBzdGFjazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyV2lkdGg6IDAuNixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAwLjlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmNmYydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKGxhYmVsLCB4LCB5KSB7IHJldHVybiB4ICsgJyA6ICcgKyB5OyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZmNmY2ZjJyxcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdjYXRlZ29yaWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246ICdyaWdodCcgb3IgJ2xlZnQnXHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWVlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gJCgnLmNoYXJ0LWJhci1zdGFja2VkJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0djIgPSAkKCcuY2hhcnQtYmFyLXN0YWNrZWR2MicpO1xyXG4gICAgICAgIGlmIChjaGFydHYyLmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0djIsIGRhdGF2Miwgb3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7XHJcblxyXG4vLyBDSEFSVCBET05VVFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3REb251dCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZsb3REb251dCgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzM5QzU1OFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogNjAsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb2ZmZWVcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwMGI0ZmZcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDkwLFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ1NTXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjRkZCRTQxXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiA1MCxcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkxFU1NcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZjNlNDNcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDgwLFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSmFkZVwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzkzN2ZjN1wiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogMTE2LFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQW5ndWxhckpTXCJcclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgcGllOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclJhZGl1czogMC41IC8vIFRoaXMgbWFrZXMgdGhlIGRvbnV0IHNoYXBlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtZG9udXQnKTtcclxuICAgICAgICBpZiAoY2hhcnQubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnQsIGRhdGEsIG9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuLy8gQ0hBUlQgTElORVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuICAgICQoaW5pdEZsb3RMaW5lKVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGbG90TGluZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ29tcGxldGVcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM1YWIxZWZcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIkphblwiLCAxODhdLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDE4M10sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgMTg1XSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCAxOTldLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDE5MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgMTk0XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCAxOTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDE4NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNzRdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJJbiBQcm9ncmVzc1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2Y1OTk0ZVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDE1M10sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgMTE2XSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCAxMzZdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDExOV0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgMTQ4XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCAxMzNdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDExOF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgMTYxXSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA1OV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNhbmNlbGxlZFwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2Q4N2E4MFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDExMV0sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgOTddLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDkzXSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCAxMTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDEwMl0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgOTNdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDkyXSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCA5Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNDRdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IDAuMDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogNFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmY2ZjJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24obGFiZWwsIHgsIHkpIHsgcmV0dXJuIHggKyAnIDogJyArIHk7IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NhdGVnb3JpZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogJ3JpZ2h0JyBvciAnbGVmdCdcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtbGluZScpO1xyXG4gICAgICAgIGlmIChjaGFydC5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydCwgZGF0YSwgb3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7XHJcblxyXG5cclxuLy8gQ0hBUlQgUElFXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICAgJChpbml0RmxvdFBpZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZsb3RQaWUoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcImpRdWVyeVwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzRhY2FiNFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogMzBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDU1NcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmVhODhcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDQwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTEVTU1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmODE1M1wiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogOTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTQVNTXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjODc4YmI2XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiA3NVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkphZGVcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNiMmQ3NjdcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDEyMFxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBwaWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMC44LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGxhYmVsLCBzZXJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImZsb3QtcGllLWxhYmVsXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9sYWJlbCArICcgOiAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHNlcmllcy5wZXJjZW50KSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyU8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMyMjInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtcGllJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBNb3JyaXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRNb3JyaXMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNb3JyaXMoKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgTW9ycmlzID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgY2hhcnRkYXRhID0gW1xyXG4gICAgICAgICAgICB7IHk6IFwiMjAwNlwiLCBhOiAxMDAsIGI6IDkwIH0sXHJcbiAgICAgICAgICAgIHsgeTogXCIyMDA3XCIsIGE6IDc1LCBiOiA2NSB9LFxyXG4gICAgICAgICAgICB7IHk6IFwiMjAwOFwiLCBhOiA1MCwgYjogNDAgfSxcclxuICAgICAgICAgICAgeyB5OiBcIjIwMDlcIiwgYTogNzUsIGI6IDY1IH0sXHJcbiAgICAgICAgICAgIHsgeTogXCIyMDEwXCIsIGE6IDUwLCBiOiA0MCB9LFxyXG4gICAgICAgICAgICB7IHk6IFwiMjAxMVwiLCBhOiA3NSwgYjogNjUgfSxcclxuICAgICAgICAgICAgeyB5OiBcIjIwMTJcIiwgYTogMTAwLCBiOiA5MCB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdmFyIGRvbnV0ZGF0YSA9IFtcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJEb3dubG9hZCBTYWxlc1wiLCB2YWx1ZTogMTIgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJJbi1TdG9yZSBTYWxlc1wiLCB2YWx1ZTogMzAgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJNYWlsLU9yZGVyIFNhbGVzXCIsIHZhbHVlOiAyMCB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gTGluZSBDaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIG5ldyBNb3JyaXMuTGluZSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdtb3JyaXMtbGluZScsXHJcbiAgICAgICAgICAgIGRhdGE6IGNoYXJ0ZGF0YSxcclxuICAgICAgICAgICAgeGtleTogJ3knLFxyXG4gICAgICAgICAgICB5a2V5czogW1wiYVwiLCBcImJcIl0sXHJcbiAgICAgICAgICAgIGxhYmVsczogW1wiU2VyaWUgQVwiLCBcIlNlcmllIEJcIl0sXHJcbiAgICAgICAgICAgIGxpbmVDb2xvcnM6IFtcIiMzMUMwQkVcIiwgXCIjN2E5MmEzXCJdLFxyXG4gICAgICAgICAgICByZXNpemU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRG9udXQgQ2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIG5ldyBNb3JyaXMuRG9udXQoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnbW9ycmlzLWRvbnV0JyxcclxuICAgICAgICAgICAgZGF0YTogZG9udXRkYXRhLFxyXG4gICAgICAgICAgICBjb2xvcnM6IFsnI2YwNTA1MCcsICcjZmFkNzMyJywgJyNmZjkwMmInXSxcclxuICAgICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhciBDaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgbmV3IE1vcnJpcy5CYXIoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnbW9ycmlzLWJhcicsXHJcbiAgICAgICAgICAgIGRhdGE6IGNoYXJ0ZGF0YSxcclxuICAgICAgICAgICAgeGtleTogJ3knLFxyXG4gICAgICAgICAgICB5a2V5czogW1wiYVwiLCBcImJcIl0sXHJcbiAgICAgICAgICAgIGxhYmVsczogW1wiU2VyaWVzIEFcIiwgXCJTZXJpZXMgQlwiXSxcclxuICAgICAgICAgICAgeExhYmVsTWFyZ2luOiAyLFxyXG4gICAgICAgICAgICBiYXJDb2xvcnM6IFsnIzIzYjdlNScsICcjZjA1MDUwJ10sXHJcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBcmVhIENoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBuZXcgTW9ycmlzLkFyZWEoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnbW9ycmlzLWFyZWEnLFxyXG4gICAgICAgICAgICBkYXRhOiBjaGFydGRhdGEsXHJcbiAgICAgICAgICAgIHhrZXk6ICd5JyxcclxuICAgICAgICAgICAgeWtleXM6IFtcImFcIiwgXCJiXCJdLFxyXG4gICAgICAgICAgICBsYWJlbHM6IFtcIlNlcmllIEFcIiwgXCJTZXJpZSBCXCJdLFxyXG4gICAgICAgICAgICBsaW5lQ29sb3JzOiBbJyM3MjY2YmEnLCAnIzIzYjdlNSddLFxyXG4gICAgICAgICAgICByZXNpemU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBSaWNrc2hhd1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdE1vcnJpcyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1vcnJpcygpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBSaWNrc2hhdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIHNlcmllc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgW11cclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciByYW5kb20gPSBuZXcgUmlja3NoYXcuRml4dHVyZXMuUmFuZG9tRGF0YSgxNTApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbS5hZGREYXRhKHNlcmllc0RhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlcmllczEgPSBbe1xyXG4gICAgICAgICAgICBjb2xvcjogXCIjYzA1MDIwXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHNlcmllc0RhdGFbMF0sXHJcbiAgICAgICAgICAgIG5hbWU6ICdOZXcgWW9yaydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMzMGMwMjBcIixcclxuICAgICAgICAgICAgZGF0YTogc2VyaWVzRGF0YVsxXSxcclxuICAgICAgICAgICAgbmFtZTogJ0xvbmRvbidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM2MDYwYzBcIixcclxuICAgICAgICAgICAgZGF0YTogc2VyaWVzRGF0YVsyXSxcclxuICAgICAgICAgICAgbmFtZTogJ1Rva3lvJ1xyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgZ3JhcGgxID0gbmV3IFJpY2tzaGF3LkdyYXBoKHtcclxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWNrc2hhdzFcIiksXHJcbiAgICAgICAgICAgIHNlcmllczogc2VyaWVzMSxcclxuICAgICAgICAgICAgcmVuZGVyZXI6ICdhcmVhJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBncmFwaDEucmVuZGVyKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBHcmFwaCAyXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIGdyYXBoMiA9IG5ldyBSaWNrc2hhdy5HcmFwaCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlja3NoYXcyXCIpLFxyXG4gICAgICAgICAgICByZW5kZXJlcjogJ2FyZWEnLFxyXG4gICAgICAgICAgICBzdHJva2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7IHg6IDAsIHk6IDQwIH0sIHsgeDogMSwgeTogNDkgfSwgeyB4OiAyLCB5OiAzOCB9LCB7IHg6IDMsIHk6IDMwIH0sIHsgeDogNCwgeTogMzIgfV0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmMDUwNTAnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7IHg6IDAsIHk6IDQwIH0sIHsgeDogMSwgeTogNDkgfSwgeyB4OiAyLCB5OiAzOCB9LCB7IHg6IDMsIHk6IDMwIH0sIHsgeDogNCwgeTogMzIgfV0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmYWQ3MzInXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdyYXBoMi5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgLy8gR3JhcGggM1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgICAgICB2YXIgZ3JhcGgzID0gbmV3IFJpY2tzaGF3LkdyYXBoKHtcclxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWNrc2hhdzNcIiksXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiAnbGluZScsXHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7IHg6IDAsIHk6IDQwIH0sIHsgeDogMSwgeTogNDkgfSwgeyB4OiAyLCB5OiAzOCB9LCB7IHg6IDMsIHk6IDMwIH0sIHsgeDogNCwgeTogMzIgfV0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM3MjY2YmEnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7IHg6IDAsIHk6IDIwIH0sIHsgeDogMSwgeTogMjQgfSwgeyB4OiAyLCB5OiAxOSB9LCB7IHg6IDMsIHk6IDE1IH0sIHsgeDogNCwgeTogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMyM2I3ZTUnXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3JhcGgzLnJlbmRlcigpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gR3JhcGggNFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgICAgICB2YXIgZ3JhcGg0ID0gbmV3IFJpY2tzaGF3LkdyYXBoKHtcclxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWNrc2hhdzRcIiksXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiAnYmFyJyxcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3sgeDogMCwgeTogNDAgfSwgeyB4OiAxLCB5OiA0OSB9LCB7IHg6IDIsIHk6IDM4IH0sIHsgeDogMywgeTogMzAgfSwgeyB4OiA0LCB5OiAzMiB9XSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZhZDczMidcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3sgeDogMCwgeTogMjAgfSwgeyB4OiAxLCB5OiAyNCB9LCB7IHg6IDIsIHk6IDE5IH0sIHsgeDogMywgeTogMTUgfSwgeyB4OiA0LCB5OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTAyYidcclxuXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3JhcGg0LnJlbmRlcigpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFNQQVJLTElORVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFNwYXJrbGluZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNwYXJrbGluZSgpIHtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtc3BhcmtsaW5lXScpLmVhY2goaW5pdFNwYXJrTGluZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXRTcGFya0xpbmUoKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gJGVsZW1lbnQuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gb3B0aW9ucy52YWx1ZXMgJiYgb3B0aW9ucy52YWx1ZXMuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnYmFyJzsgLy8gZGVmYXVsdCBjaGFydCBpcyBiYXJcclxuICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlSGlkZGVuQ2hlY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnQuc3BhcmtsaW5lKHZhbHVlcywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5yZXNpemUpIHtcclxuICAgICAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQuc3BhcmtsaW5lKHZhbHVlcywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsInZhciBvcGVyYWNpb25lc0NvbWVyY2lvID0ge1xyXG4gICAgY3JlYXJPcmRlbkRlQ29tcHJhQXN5bmM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgICAgICQoXCIjZm9ybUNyZWFyT3JkZW5EZUNvbXByYVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBmb3JtID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3JtLnBhcnNsZXkoKS52YWxpZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLnBhcnNsZXkoKS5pc1ZhbGlkKCkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9ICQoJ2lucHV0W25hbWU9XCJfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiXScpLnZhbCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcm9vdEhvc3QgKyAnQ29tcHJhcy9DcmVhck9yZGVuRGVDb21wcmFBc3luYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW46IHRva2VuIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5tc24gPT09IFwic3VjY2Vzc1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YWwoXCJOb3RpZmljYWNpw7NuXCIsIFwiTGEgb3JkZW4gZGUgY29tcHJhIHNlIGNyZcOzIGNvcnJlY3RhbWVudGUgZW4gZWwgc2lzdGVtYS5cIiwgXCJzdWNjZXNzXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgcmVzcG9uc2UuZXJyb3IsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgZXgsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIFwiRXJyb3IgZW4gZWwgbcOpdG9kbyBjcmVhck9yZGVuRGVDb21wcmFBc3luYyBcXG5cIiArIGV4LCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuICAgIGluaWNpYXJQYWdvOiBmdW5jdGlvbiAoTnJvRmFjdHVyYSkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHJvb3RIb3N0ICsgJ0NvbXByYXMvSW5pY2lhclBhZ28nLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIE5yb0ZhY3R1cmE6IE5yb0ZhY3R1cmFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJodG1sXCIsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3B1ZXN0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VQYWdvID0gcmVzcHVlc3RhLnJlc3BvbnNlUGFnbztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdElkID0gcmVzcHVlc3RhLlJlcXVlc3RJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VQYWdvKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZW5zYWplID0gXCJFbiBlc3RlIG1vbWVudG8gc3UgZmFjdHVyYSBOcm8gXCIgKyBOcm9GYWN0dXJhICsgXCIgcHJlc2VudGEgdW4gcHJvY2VzbyBkZSBwYWdvIGN1eWEgdHJhbnNhY2Npw7NuIHNlIGVuY3VlbnRyYSBQRU5ESUVOVEUgZGUgcmVjaWJpciBjb25maXJtYWNpw7NuIHBvciBwYXJ0ZSBkZSBzdSAgZW50aWRhZCBmaW5hbmNpZXJhLCBwb3IgZmF2b3IgZXNwZXJlIHVub3MgbWludXRvcyB5IHZ1ZWx2YSBhIGNvbnN1bHRhciBtw6FzIHRhcmRlIHBhcmEgdmVyaWZpY2FyIHNpIHN1IHBhZ28gZnVlIGNvbmZpcm1hZG8gZGUgZm9ybWEgZXhpdG9zYS5TaSBkZXNlYSBtYXlvciBpbmZvcm1hY2nDs24gc29icmUgZWwgZXN0YWRvIGFjdHVhbCBkZSBzdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWVuc2FqZSA9IG1lbnNhamUgKyBcIiBvcGVyYWNpw7NuIHB1ZWRlIGNvbXVuaWNhcnNlIGEgbnVlc3RyYXMgbMOtbmVhcyBkZSBhdGVuY2nDs24gYWwgY2xpZW50ZSBvIGVudmlhciB1biBjb3JyZW8gZWxlY3Ryw7NuaWNvIGEgamhvbi5tb250b3lhQG91dGxvb2suY29tIHkgcHJlZ3VudGFyIHBvciBlbCBlc3RhZG8gZGUgbGEgdHJhbnNhY2Npw7NuOiAgXCIgKyByZXF1ZXN0SWRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZVBhZ28uU3RhdHVzLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdPSyc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUGFnb3MgZW4gTMOtbmVhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBIGNvbnRpbnVhY2nDs24gc2Vyw6EgcmVkaXJlY2Npb25hZG8gYSBsYSBwYXNhcmVsYSBkZSBwYWdvcywgwr9lc3RhIGRlIGFjdWVyZG8/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlUGFnby5Qcm9jZXNzVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BFTkRJTkcnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVHJhbnNhY2Npw7NuIFBlbmRpZW50ZSFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtZW5zYWplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjogXCJBY2VwdGFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBUFBST1ZFRCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJy9JVVNIL1Jlc3VsdGFkb1BhZ28/TnJvRmFjdHVyYT0nICsgTnJvRmFjdHVyYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdSRUpFQ1RFRCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZBSUxFRCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdvUmVjaGF6YWRvKE5yb0ZhY3R1cmEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59OyIsIi8vIERlbW8gQ2FyZHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRDYXJkRGVtbyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhcmREZW1vKCkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9ucyBzaG93IGEgZGVtb25zdHJhdGlvbiBvZiBob3cgdG8gdXNlXHJcbiAgICAgICAgICogdGhlIGNhcmQgdG9vbHMgc3lzdGVtIHZpYSBjdXN0b20gZXZlbnQuXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICQoJy5jYXJkLmNhcmQtZGVtbycpXHJcbiAgICAgICAgICAgIC5vbignY2FyZC5yZWZyZXNoJywgZnVuY3Rpb24oZSwgY2FyZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHBlcmZvcm0gYW55IGFjdGlvbiB3aGVuIGEgLmNhcmQgdHJpZ2dlcnMgYSByZWZyZXNoIGV2ZW50XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBhY3Rpb24gaXMgZG9uZSwganVzdCByZW1vdmUgdGhlIHNwaW5uZXIgY2xhc3NcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLnJlbW92ZVNwaW5uZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignaGlkZS5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhcmQgQ29sbGFwc2UgSGlkZScpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FyZCBDb2xsYXBzZSBTaG93Jyk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NhcmQucmVtb3ZlJywgZnVuY3Rpb24oZXZlbnQsIGNhcmQsIGRlZmVycmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZpbmcgQ2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FsbCByZXNvbHZlKCkgdG8gY29udGludWUgcmVtb3ZpbmcgdGhlIGNhcmRcclxuICAgICAgICAgICAgICAgIC8vIHBlcmZvcm0gY2hlY2tzIHRvIGF2b2lkIHJlbW92aW5nIGNhcmQgaWYgc29tZSB1c2VyIGFjdGlvbiBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NhcmQucmVtb3ZlZCcsIGZ1bmN0aW9uKGV2ZW50LCBjYXJkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZWQgQ2FyZCcpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gTmVzdGFibGUgZGVtb1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdE5lc3RhYmxlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TmVzdGFibGUoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5uZXN0YWJsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgdXBkYXRlT3V0cHV0ID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IGUubGVuZ3RoID8gZSA6ICQoZS50YXJnZXQpLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gbGlzdC5kYXRhKCdvdXRwdXQnKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5KU09OKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsKHdpbmRvdy5KU09OLnN0cmluZ2lmeShsaXN0Lm5lc3RhYmxlKCdzZXJpYWxpemUnKSkpOyAvLywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbCgnSlNPTiBicm93c2VyIHN1cHBvcnQgcmVxdWlyZWQgZm9yIHRoaXMgZGVtby4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGFjdGl2YXRlIE5lc3RhYmxlIGZvciBsaXN0IDFcclxuICAgICAgICAkKCcjbmVzdGFibGUnKS5uZXN0YWJsZSh7XHJcbiAgICAgICAgICAgICAgICBncm91cDogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NoYW5nZScsIHVwZGF0ZU91dHB1dCk7XHJcblxyXG4gICAgICAgIC8vIGFjdGl2YXRlIE5lc3RhYmxlIGZvciBsaXN0IDJcclxuICAgICAgICAkKCcjbmVzdGFibGUyJykubmVzdGFibGUoe1xyXG4gICAgICAgICAgICAgICAgZ3JvdXA6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCB1cGRhdGVPdXRwdXQpO1xyXG5cclxuICAgICAgICAvLyBvdXRwdXQgaW5pdGlhbCBzZXJpYWxpc2VkIGRhdGFcclxuICAgICAgICB1cGRhdGVPdXRwdXQoJCgnI25lc3RhYmxlJykuZGF0YSgnb3V0cHV0JywgJCgnI25lc3RhYmxlLW91dHB1dCcpKSk7XHJcbiAgICAgICAgdXBkYXRlT3V0cHV0KCQoJyNuZXN0YWJsZTInKS5kYXRhKCdvdXRwdXQnLCAkKCcjbmVzdGFibGUyLW91dHB1dCcpKSk7XHJcblxyXG4gICAgICAgICQoJy5qcy1uZXN0YWJsZS1hY3Rpb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRhcmdldC5kYXRhKCdhY3Rpb24nKTtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2V4cGFuZC1hbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZGQnKS5uZXN0YWJsZSgnZXhwYW5kQWxsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2NvbGxhcHNlLWFsbCcpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kZCcpLm5lc3RhYmxlKCdjb2xsYXBzZUFsbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIE1vZHVsZTogbm90aWZ5LmpzXHJcbiAqIENyZWF0ZSB0b2dnbGVhYmxlIG5vdGlmaWNhdGlvbnMgdGhhdCBmYWRlIG91dCBhdXRvbWF0aWNhbGx5LlxyXG4gKiBCYXNlZCBvbiBOb3RpZnkgYWRkb24gZnJvbSBVSUtpdCAoaHR0cDovL2dldHVpa2l0LmNvbS9kb2NzL2FkZG9uc19ub3RpZnkuaHRtbClcclxuICogW2RhdGEtdG9nZ2xlPVwibm90aWZ5XCJdXHJcbiAqIFtkYXRhLW9wdGlvbnM9XCJvcHRpb25zIGluIGpzb24gZm9ybWF0XCIgXVxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXROb3RpZnkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXROb3RpZnkoKSB7XHJcblxyXG4gICAgICAgIHZhciBTZWxlY3RvciA9ICdbZGF0YS1ub3RpZnldJyxcclxuICAgICAgICAgICAgYXV0b2xvYWRTZWxlY3RvciA9ICdbZGF0YS1vbmxvYWRdJyxcclxuICAgICAgICAgICAgZG9jID0gJChkb2N1bWVudCk7XHJcblxyXG4gICAgICAgICQoU2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgb25sb2FkID0gJHRoaXMuZGF0YSgnb25sb2FkJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAob25sb2FkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5Tm93KCR0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICR0aGlzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIG5vdGlmeU5vdygkdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbm90aWZ5Tm93KCRlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSAkZWxlbWVudC5kYXRhKCdtZXNzYWdlJyksXHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSAkZWxlbWVudC5kYXRhKCdvcHRpb25zJyk7XHJcblxyXG4gICAgICAgIGlmICghbWVzc2FnZSlcclxuICAgICAgICAgICAgJC5lcnJvcignTm90aWZ5OiBObyBtZXNzYWdlIHNwZWNpZmllZCcpO1xyXG5cclxuICAgICAgICAkLm5vdGlmeShtZXNzYWdlLCBvcHRpb25zIHx8IHt9KTtcclxuICAgIH1cclxuXHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcblxyXG4vKipcclxuICogTm90aWZ5IEFkZG9uIGRlZmluaXRpb24gYXMgalF1ZXJ5IHBsdWdpblxyXG4gKiBBZGFwdGVkIHZlcnNpb24gdG8gd29yayB3aXRoIEJvb3RzdHJhcCBjbGFzc2VzXHJcbiAqIE1vcmUgaW5mb3JtYXRpb24gaHR0cDovL2dldHVpa2l0LmNvbS9kb2NzL2FkZG9uc19ub3RpZnkuaHRtbFxyXG4gKi9cclxuXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50KSB7XHJcblxyXG4gICAgdmFyIGNvbnRhaW5lcnMgPSB7fSxcclxuICAgICAgICBtZXNzYWdlcyA9IHt9LFxyXG5cclxuICAgICAgICBub3RpZnkgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoJC50eXBlKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0geyBtZXNzYWdlOiBvcHRpb25zIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHNbMV0pIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChvcHRpb25zLCAkLnR5cGUoYXJndW1lbnRzWzFdKSA9PSAnc3RyaW5nJyA/IHsgc3RhdHVzOiBhcmd1bWVudHNbMV0gfSA6IGFyZ3VtZW50c1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAobmV3IE1lc3NhZ2Uob3B0aW9ucykpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlQWxsID0gZnVuY3Rpb24oZ3JvdXAsIGluc3RhbnRseSkge1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGlkIGluIG1lc3NhZ2VzKSB7IGlmIChncm91cCA9PT0gbWVzc2FnZXNbaWRdLmdyb3VwKSBtZXNzYWdlc1tpZF0uY2xvc2UoaW5zdGFudGx5KTsgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gbWVzc2FnZXMpIHsgbWVzc2FnZXNbaWRdLmNsb3NlKGluc3RhbnRseSk7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgdmFyIE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBNZXNzYWdlLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy51dWlkID0gXCJJRFwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSArIFwiUkFORFwiICsgKE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJChbXHJcbiAgICAgICAgICAgIC8vIGFsZXJ0LWRpc21pc3NhYmxlIGVuYWJsZXMgYnMgY2xvc2UgaWNvblxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInVrLW5vdGlmeS1tZXNzYWdlIGFsZXJ0LWRpc21pc3NhYmxlXCI+JyxcclxuICAgICAgICAgICAgJzxhIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9hPicsXHJcbiAgICAgICAgICAgICc8ZGl2PicgKyB0aGlzLm9wdGlvbnMubWVzc2FnZSArICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG5cclxuICAgICAgICBdLmpvaW4oJycpKS5kYXRhKFwibm90aWZ5TWVzc2FnZVwiLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gc3RhdHVzXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0dXMpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZENsYXNzKCdhbGVydCBhbGVydC0nICsgdGhpcy5vcHRpb25zLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudHN0YXR1cyA9IHRoaXMub3B0aW9ucy5zdGF0dXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdyb3VwID0gdGhpcy5vcHRpb25zLmdyb3VwO1xyXG5cclxuICAgICAgICBtZXNzYWdlc1t0aGlzLnV1aWRdID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCFjb250YWluZXJzW3RoaXMub3B0aW9ucy5wb3NdKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcnNbdGhpcy5vcHRpb25zLnBvc10gPSAkKCc8ZGl2IGNsYXNzPVwidWstbm90aWZ5IHVrLW5vdGlmeS0nICsgdGhpcy5vcHRpb25zLnBvcyArICdcIj48L2Rpdj4nKS5hcHBlbmRUbygnYm9keScpLm9uKFwiY2xpY2tcIiwgXCIudWstbm90aWZ5LW1lc3NhZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRhdGEoXCJub3RpZnlNZXNzYWdlXCIpLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgICQuZXh0ZW5kKE1lc3NhZ2UucHJvdG90eXBlLCB7XHJcblxyXG4gICAgICAgIHV1aWQ6IGZhbHNlLFxyXG4gICAgICAgIGVsZW1lbnQ6IGZhbHNlLFxyXG4gICAgICAgIHRpbW91dDogZmFsc2UsXHJcbiAgICAgICAgY3VycmVudHN0YXR1czogXCJcIixcclxuICAgICAgICBncm91cDogZmFsc2UsXHJcblxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyc1t0aGlzLm9wdGlvbnMucG9zXS5zaG93KCkucHJlcGVuZCh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hcmdpbmJvdHRvbSA9IHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tYm90dG9tXCIpLCAxMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY3NzKHsgXCJvcGFjaXR5XCI6IDAsIFwibWFyZ2luLXRvcFwiOiAtMSAqIHRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpLCBcIm1hcmdpbi1ib3R0b21cIjogMCB9KS5hbmltYXRlKHsgXCJvcGFjaXR5XCI6IDEsIFwibWFyZ2luLXRvcFwiOiAwLCBcIm1hcmdpbi1ib3R0b21cIjogbWFyZ2luYm90dG9tIH0sIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5vcHRpb25zLnRpbWVvdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlZm4gPSBmdW5jdGlvbigpIHsgJHRoaXMuY2xvc2UoKTsgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoY2xvc2VmbiwgJHRoaXMub3B0aW9ucy50aW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZWxlbWVudC5ob3ZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7IGNsZWFyVGltZW91dCgkdGhpcy50aW1lb3V0KTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7ICR0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsb3NlZm4sICR0aGlzLm9wdGlvbnMudGltZW91dCk7IH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oaW5zdGFudGx5KSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgZmluYWxpemUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lcnNbJHRoaXMub3B0aW9ucy5wb3NdLmNoaWxkcmVuKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcnNbJHRoaXMub3B0aW9ucy5wb3NdLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1skdGhpcy51dWlkXTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0KSBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnN0YW50bHkpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsaXplKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYW5pbWF0ZSh7IFwib3BhY2l0eVwiOiAwLCBcIm1hcmdpbi10b3BcIjogLTEgKiB0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKSwgXCJtYXJnaW4tYm90dG9tXCI6IDAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29udGVudDogZnVuY3Rpb24oaHRtbCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5maW5kKFwiPmRpdlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5odG1sKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5odG1sKGh0bWwpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc3RhdHVzOiBmdW5jdGlvbihzdGF0dXMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50c3RhdHVzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2FsZXJ0IGFsZXJ0LScgKyB0aGlzLmN1cnJlbnRzdGF0dXMpLmFkZENsYXNzKCdhbGVydCBhbGVydC0nICsgc3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudHN0YXR1cyA9IHN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIE1lc3NhZ2UuZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgdGltZW91dDogNTAwMCxcclxuICAgICAgICBncm91cDogbnVsbCxcclxuICAgICAgICBwb3M6ICd0b3AtY2VudGVyJ1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgJFtcIm5vdGlmeVwiXSA9IG5vdGlmeTtcclxuICAgICRbXCJub3RpZnlcIl0ubWVzc2FnZSA9IE1lc3NhZ2U7XHJcbiAgICAkW1wibm90aWZ5XCJdLmNsb3NlQWxsID0gY2xvc2VBbGw7XHJcblxyXG4gICAgcmV0dXJuIG5vdGlmeTtcclxuXHJcbn0oalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KSk7IiwiLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIE1vZHVsZTogcGxheS1hbmltYXRpb24uanNcclxuICogUHJvdmlkZXMgYSBzaW1wbGUgd2F5IHRvIHJ1biBhbmltYXRpb24gd2l0aCBhIGNsaWNrXHJcbiAqIFRhcmdldGVkIGVsZW1lbnRzIG11c3QgaGF2ZVxyXG4gKiAgIFtkYXRhLWFuaW1hdGVcIl1cclxuICogICBbZGF0YS10YXJnZXQ9XCJUYXJnZXQgZWxlbWVudCBhZmZlY3RlZCBieSB0aGUgYW5pbWF0aW9uXCJdXHJcbiAqICAgW2RhdGEtcGxheT1cIkFuaW1hdGlvbiBuYW1lIChodHRwOi8vZGFuZWRlbi5naXRodWIuaW8vYW5pbWF0ZS5jc3MvKVwiXVxyXG4gKlxyXG4gKiBSZXF1aXJlcyBhbmltby5qc1xyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRQbGF5QW5pbWF0aW9uKVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRQbGF5QW5pbWF0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgU2VsZWN0b3IgPSAnW2RhdGEtYW5pbWF0ZV0nO1xyXG5cclxuICAgICAgICAvLyBSdW4gY2xpY2sgdHJpZ2dlcmVkIGFuaW1hdGlvbnNcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3RvciwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0U2VsID0gJHRoaXMuZGF0YSgndGFyZ2V0JyksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24gPSAkdGhpcy5kYXRhKCdwbGF5JykgfHwgJ2JvdW5jZSc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0U2VsKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRhcmdldFNlbCkuYW5pbW8oeyBhbmltYXRpb246IGFuaW1hdGlvbiB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogTW9kdWxlOiBwb3J0bGV0LmpzXHJcbiAqIERyYWcgYW5kIGRyb3AgYW55IGNhcmQgdG8gY2hhbmdlIGl0cyBwb3NpdGlvblxyXG4gKiBUaGUgU2VsZWN0b3Igc2hvdWxkIGNvdWxkIGJlIGFwcGxpZWQgdG8gYW55IG9iamVjdCB0aGF0IGNvbnRhaW5zXHJcbiAqIGNhcmQsIHNvIC5jb2wtKiBlbGVtZW50IGFyZSBpZGVhbC5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIFNUT1JBR0VfS0VZX05BTUUgPSAnanEtcG9ydGxldFN0YXRlJztcclxuXHJcbiAgICAkKGluaXRQb3J0bGV0cyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFBvcnRsZXRzKCkge1xyXG5cclxuICAgICAgICAvLyBDb21wb25lbnQgaXMgTk9UIG9wdGlvbmFsXHJcbiAgICAgICAgaWYgKCEkLmZuLnNvcnRhYmxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBTZWxlY3RvciA9ICdbZGF0YS10b2dnbGU9XCJwb3J0bGV0XCJdJztcclxuXHJcbiAgICAgICAgJChTZWxlY3Rvcikuc29ydGFibGUoe1xyXG4gICAgICAgICAgICBjb25uZWN0V2l0aDogICAgICAgICAgU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIGl0ZW1zOiAgICAgICAgICAgICAgICAnZGl2LmNhcmQnLFxyXG4gICAgICAgICAgICBoYW5kbGU6ICAgICAgICAgICAgICAgJy5wb3J0bGV0LWhhbmRsZXInLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAgICAgICAgICAgICAgMC43LFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogICAgICAgICAgJ3BvcnRsZXQgYm94LXBsYWNlaG9sZGVyJyxcclxuICAgICAgICAgICAgY2FuY2VsOiAgICAgICAgICAgICAgICcucG9ydGxldC1jYW5jZWwnLFxyXG4gICAgICAgICAgICBmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgaWZyYW1lRml4OiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICB0b2xlcmFuY2U6ICAgICAgICAgICAgJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICBoZWxwZXI6ICAgICAgICAgICAgICAgJ29yaWdpbmFsJyxcclxuICAgICAgICAgICAgcmV2ZXJ0OiAgICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgZm9yY2VIZWxwZXJTaXplOiAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIHVwZGF0ZTogICAgICAgICAgICAgICBzYXZlUG9ydGxldE9yZGVyLFxyXG4gICAgICAgICAgICBjcmVhdGU6ICAgICAgICAgICAgICAgbG9hZFBvcnRsZXRPcmRlclxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gb3B0aW9uYWxseSBkaXNhYmxlcyBtb3VzZSBzZWxlY3Rpb25cclxuICAgICAgICAvLy5kaXNhYmxlU2VsZWN0aW9uKClcclxuICAgICAgICA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVQb3J0bGV0T3JkZXIoZXZlbnQsIHVpKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gU3RvcmFnZXMubG9jYWxTdG9yYWdlLmdldChTVE9SQUdFX0tFWV9OQU1FKTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhKSB7IGRhdGEgPSB7fTsgfVxyXG5cclxuICAgICAgICBkYXRhW3RoaXMuaWRdID0gJCh0aGlzKS5zb3J0YWJsZSgndG9BcnJheScpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBTdG9yYWdlcy5sb2NhbFN0b3JhZ2Uuc2V0KFNUT1JBR0VfS0VZX05BTUUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFBvcnRsZXRPcmRlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KFNUT1JBR0VfS0VZX05BTUUpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvcmxldElkID0gdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIGNhcmRzID0gZGF0YVtwb3JsZXRJZF07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FyZHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3J0bGV0ID0gJCgnIycgKyBwb3JsZXRJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKGNhcmRzLCBmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlKS5hcHBlbmRUbyhwb3J0bGV0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXQgcG9ybGV0IHNhdmUgc3RhdGVcclxuICAgIHdpbmRvdy5yZXNldFBvcmxldHMgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgU3RvcmFnZXMubG9jYWxTdG9yYWdlLnJlbW92ZShTVE9SQUdFX0tFWV9OQU1FKTtcclxuICAgICAgICAvLyByZWxvYWQgdGhlIHBhZ2VcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBIVE1MNSBTb3J0YWJsZSBkZW1vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U29ydGFibGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTb3J0YWJsZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzb3J0YWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgc29ydGFibGUoJy5zb3J0YWJsZScsIHtcclxuICAgICAgICAgICAgZm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnPGRpdiBjbGFzcz1cImJveC1wbGFjZWhvbGRlciBwMCBtMFwiPjxkaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFN3ZWV0IEFsZXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U3dlZXRBbGVydCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFN3ZWV0QWxlcnQoKSB7XHJcblxyXG4gICAgICAgICQoJyNzd2FsLWRlbW8xJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN3YWwoXCJIZXJlJ3MgYSBtZXNzYWdlIVwiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjc3dhbC1kZW1vMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzd2FsKFwiSGVyZSdzIGEgbWVzc2FnZSFcIiwgXCJJdCdzIHByZXR0eSwgaXNuJ3QgaXQ/XCIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNzd2FsLWRlbW8zJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN3YWwoXCJHb29kIGpvYiFcIiwgXCJZb3UgY2xpY2tlZCB0aGUgYnV0dG9uIVwiLCBcInN1Y2Nlc3NcIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI3N3YWwtZGVtbzQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IHdpbGwgbm90IGJlIGFibGUgdG8gcmVjb3ZlciB0aGlzIGltYWdpbmFyeSBmaWxlIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiNERDZCNTVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ29uZmlybTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKFwiRGVsZXRlZCFcIiwgXCJZb3VyIGltYWdpbmFyeSBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI3N3YWwtZGVtbzUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJlY292ZXIgdGhpcyBpbWFnaW5hcnkgZmlsZSFcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjREQ2QjU1XCIsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSBpdCFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIGNhbmNlbCBwbHghXCIsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ29uZmlybTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihpc0NvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0NvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKFwiRGVsZXRlZCFcIiwgXCJZb3VyIGltYWdpbmFyeSBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbChcIkNhbmNlbGxlZFwiLCBcIllvdXIgaW1hZ2luYXJ5IGZpbGUgaXMgc2FmZSA6KVwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gU3RhcnQgQm9vdHN0cmFwIEpTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0Qm9vdHN0cmFwKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Qm9vdHN0cmFwKCkge1xyXG5cclxuICAgICAgICAvLyBQT1BPVkVSXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcclxuXHJcbiAgICAgICAgLy8gVE9PTFRJUFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnYm9keSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRFJPUERPV04gSU5QVVRTXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAkKCcuZHJvcGRvd24gaW5wdXQnKS5vbignY2xpY2sgZm9jdXMnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBNb2R1bGU6IGNhcmQtdG9vbHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRDYXJkRGlzbWlzcyk7XHJcbiAgICAkKGluaXRDYXJkQ29sbGFwc2UpO1xyXG4gICAgJChpbml0Q2FyZFJlZnJlc2gpO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc21pc3MgY2FyZHNcclxuICAgICAqIFtkYXRhLXRvb2w9XCJjYXJkLWRpc21pc3NcIl1cclxuICAgICAqXHJcbiAgICAgKiBSZXF1aXJlcyBhbmltby5qc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbml0Q2FyZERpc21pc3MoKSB7XHJcbiAgICAgICAgdmFyIGNhcmRTZWxlY3RvciA9ICdbZGF0YS10b29sPVwiY2FyZC1kaXNtaXNzXCJdJyxcclxuICAgICAgICAgICAgcmVtb3ZlRXZlbnQgPSAnY2FyZC5yZW1vdmUnLFxyXG4gICAgICAgICAgICByZW1vdmVkRXZlbnQgPSAnY2FyZC5yZW1vdmVkJztcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgY2FyZFNlbGVjdG9yLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IHBhcmVudCBjYXJkXHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJyk7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBldmVudCBhbmQgZmluYWxseSByZW1vdmUgdGhlIGVsZW1lbnRcclxuICAgICAgICAgICAgcGFyZW50LnRyaWdnZXIocmVtb3ZlRXZlbnQsIFtwYXJlbnQsIGRlZmVycmVkXSk7XHJcbiAgICAgICAgICAgIC8vIG5lZWRzIHJlc29sdmUoKSB0byBiZSBjYWxsZWRcclxuICAgICAgICAgICAgZGVmZXJyZWQuZG9uZShyZW1vdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYW5pbW8oeyBhbmltYXRpb246ICdib3VuY2VPdXQnIH0sIGRlc3Ryb3lDYXJkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZGVzdHJveUNhcmQoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sID0gcGFyZW50LnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICQud2hlbihwYXJlbnQudHJpZ2dlcihyZW1vdmVkRXZlbnQsIFtwYXJlbnRdKSlcclxuICAgICAgICAgICAgICAgICAgICAuZG9uZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHBhcmVudCBpZiBpdCBpcyBhIHJvdyBhbmQgaXMgZW1wdHkgYW5kIG5vdCBhIHNvcnRhYmxlIChwb3J0bGV0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKHJlbW92ZWRFdmVudCkgLy8gQW4gZXZlbnQgdG8gY2F0Y2ggd2hlbiB0aGUgY2FyZCBoYXMgYmVlbiByZW1vdmVkIGZyb20gRE9NXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlbC5pcygnW2NsYXNzKj1cImNvbC1cIl06bm90KC5zb3J0YWJsZSknKSAmJiBlbC5jaGlsZHJlbignKicpLmxlbmd0aCA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbGxhcHNlIGNhcmRzXHJcbiAgICAgKiBbZGF0YS10b29sPVwiY2FyZC1jb2xsYXBzZVwiXVxyXG4gICAgICpcclxuICAgICAqIEFsc28gdXNlcyBicm93c2VyIHN0b3JhZ2UgdG8ga2VlcCB0cmFja1xyXG4gICAgICogb2YgY2FyZHMgY29sbGFwc2VkIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluaXRDYXJkQ29sbGFwc2UoKSB7XHJcbiAgICAgICAgdmFyIGNhcmRTZWxlY3RvciA9ICdbZGF0YS10b29sPVwiY2FyZC1jb2xsYXBzZVwiXScsXHJcbiAgICAgICAgICAgIHN0b3JhZ2VLZXlOYW1lID0gJ2pxLWNhcmRTdGF0ZSc7XHJcblxyXG4gICAgICAgIC8vIFByZXBhcmUgdGhlIGNhcmQgdG8gYmUgY29sbGFwc2FibGUgYW5kIGl0cyBldmVudHNcclxuICAgICAgICAkKGNhcmRTZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgZmlyc3QgcGFyZW50IGNhcmRcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHBhcmVudCA9ICR0aGlzLmNsb3Nlc3QoJy5jYXJkJyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyID0gcGFyZW50LmZpbmQoJy5jYXJkLXdyYXBwZXInKSxcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlT3B0cyA9IHsgdG9nZ2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgaWNvbkVsZW1lbnQgPSAkdGhpcy5jaGlsZHJlbignZW0nKSxcclxuICAgICAgICAgICAgICAgIGNhcmRJZCA9IHBhcmVudC5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgd3JhcHBlciBub3QgYWRkZWQsIGFkZCBpdFxyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIGEgd3JhcHBlciB0byBhdm9pZCBqdW1waW5nIGR1ZSB0byB0aGUgcGFkZGluZ3NcclxuICAgICAgICAgICAgaWYgKCF3cmFwcGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlciA9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuKCcuY2FyZC1oZWFkaW5nJykubmV4dEFsbCgpIC8vZmluZCgnLmNhcmQtYm9keSwgLmNhcmQtZm9vdGVyJylcclxuICAgICAgICAgICAgICAgICAgICAud3JhcEFsbCgnPGRpdi8+JylcclxuICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2NhcmQtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VPcHRzID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEluaXQgY29sbGFwc2UgYW5kIGJpbmQgZXZlbnRzIHRvIHN3aXRjaCBpY29uc1xyXG4gICAgICAgICAgICB3cmFwcGVyXHJcbiAgICAgICAgICAgICAgICAuY29sbGFwc2UoY29sbGFwc2VPcHRzKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SWNvbkhpZGUoaWNvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVDYXJkU3RhdGUoY2FyZElkLCAnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucHJldignLmNhcmQtaGVhZGluZycpLmFkZENsYXNzKCdjYXJkLWhlYWRpbmctY29sbGFwc2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SWNvblNob3coaWNvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVDYXJkU3RhdGUoY2FyZElkLCAnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucHJldignLmNhcmQtaGVhZGluZycpLnJlbW92ZUNsYXNzKCdjYXJkLWhlYWRpbmctY29sbGFwc2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIExvYWQgdGhlIHNhdmVkIHN0YXRlIGlmIGV4aXN0c1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gbG9hZENhcmRTdGF0ZShjYXJkSWQpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB3cmFwcGVyLmNvbGxhcHNlKGN1cnJlbnRTdGF0ZSk7IH0sIDUwKTtcclxuICAgICAgICAgICAgICAgIHNhdmVDYXJkU3RhdGUoY2FyZElkLCBjdXJyZW50U3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBmaW5hbGx5IGNhdGNoIGNsaWNrcyB0byB0b2dnbGUgY2FyZCBjb2xsYXBzZVxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGNhcmRTZWxlY3RvciwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpO1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHBhcmVudC5maW5kKCcuY2FyZC13cmFwcGVyJyk7XHJcblxyXG4gICAgICAgICAgICB3cmFwcGVyLmNvbGxhcHNlKCd0b2dnbGUnKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIENvbW1vbiB1c2UgZnVuY3Rpb25zIGZvciBjYXJkIGNvbGxhcHNlIC8vXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0SWNvblNob3coaWNvbkVsKSB7XHJcbiAgICAgICAgICAgIGljb25FbC5yZW1vdmVDbGFzcygnZmEtcGx1cycpLmFkZENsYXNzKCdmYS1taW51cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0SWNvbkhpZGUoaWNvbkVsKSB7XHJcbiAgICAgICAgICAgIGljb25FbC5yZW1vdmVDbGFzcygnZmEtbWludXMnKS5hZGRDbGFzcygnZmEtcGx1cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2F2ZUNhcmRTdGF0ZShpZCwgc3RhdGUpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KHN0b3JhZ2VLZXlOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7IGRhdGEgPSB7fTsgfVxyXG4gICAgICAgICAgICBkYXRhW2lkXSA9IHN0YXRlO1xyXG4gICAgICAgICAgICBTdG9yYWdlcy5sb2NhbFN0b3JhZ2Uuc2V0KHN0b3JhZ2VLZXlOYW1lLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRDYXJkU3RhdGUoaWQpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KHN0b3JhZ2VLZXlOYW1lKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2lkXSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWZyZXNoIGNhcmRzXHJcbiAgICAgKiBbZGF0YS10b29sPVwiY2FyZC1yZWZyZXNoXCJdXHJcbiAgICAgKiBbZGF0YS1zcGlubmVyPVwic3RhbmRhcmRcIl1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5pdENhcmRSZWZyZXNoKCkge1xyXG4gICAgICAgIHZhciBjYXJkU2VsZWN0b3IgPSAnW2RhdGEtdG9vbD1cImNhcmQtcmVmcmVzaFwiXScsXHJcbiAgICAgICAgICAgIHJlZnJlc2hFdmVudCA9ICdjYXJkLnJlZnJlc2gnLFxyXG4gICAgICAgICAgICB3aGlybENsYXNzID0gJ3doaXJsJyxcclxuICAgICAgICAgICAgZGVmYXVsdFNwaW5uZXIgPSAnc3RhbmRhcmQnO1xyXG5cclxuICAgICAgICAvLyBtZXRob2QgdG8gY2xlYXIgdGhlIHNwaW5uZXIgd2hlbiBkb25lXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlU3Bpbm5lcigpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyh3aGlybENsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhdGNoIGNsaWNrcyB0byB0b2dnbGUgY2FyZCByZWZyZXNoXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgY2FyZFNlbGVjdG9yLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGNhcmQgPSAkdGhpcy5wYXJlbnRzKCcuY2FyZCcpLmVxKDApLFxyXG4gICAgICAgICAgICAgICAgc3Bpbm5lciA9ICR0aGlzLmRhdGEoJ3NwaW5uZXInKSB8fCBkZWZhdWx0U3Bpbm5lcjtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXJ0IHNob3dpbmcgdGhlIHNwaW5uZXJcclxuICAgICAgICAgICAgY2FyZC5hZGRDbGFzcyh3aGlybENsYXNzICsgJyAnICsgc3Bpbm5lcik7XHJcblxyXG4gICAgICAgICAgICAvLyBhdHRhY2ggYXMgcHVibGljIG1ldGhvZFxyXG4gICAgICAgICAgICBjYXJkLnJlbW92ZVNwaW5uZXIgPSByZW1vdmVTcGlubmVyO1xyXG5cclxuICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgZXZlbnQgYW5kIHNlbmQgdGhlIGNhcmQgb2JqZWN0XHJcbiAgICAgICAgICAgICR0aGlzLnRyaWdnZXIocmVmcmVzaEV2ZW50LCBbY2FyZF0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuXHJcbiIsIi8vIEdMT0JBTCBDT05TVEFOVFNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpe1xyXG5cclxuICAgIHdpbmRvdy5BUFBfQ09MT1JTID0ge1xyXG4gICAgICAgICdwcmltYXJ5JzogICAgICAgICAgICAgICAgJyM1ZDljZWMnLFxyXG4gICAgICAgICdzdWNjZXNzJzogICAgICAgICAgICAgICAgJyMyN2MyNGMnLFxyXG4gICAgICAgICdpbmZvJzogICAgICAgICAgICAgICAgICAgJyMyM2I3ZTUnLFxyXG4gICAgICAgICd3YXJuaW5nJzogICAgICAgICAgICAgICAgJyNmZjkwMmInLFxyXG4gICAgICAgICdkYW5nZXInOiAgICAgICAgICAgICAgICAgJyNmMDUwNTAnLFxyXG4gICAgICAgICdpbnZlcnNlJzogICAgICAgICAgICAgICAgJyMxMzFlMjYnLFxyXG4gICAgICAgICdncmVlbic6ICAgICAgICAgICAgICAgICAgJyMzN2JjOWInLFxyXG4gICAgICAgICdwaW5rJzogICAgICAgICAgICAgICAgICAgJyNmNTMyZTUnLFxyXG4gICAgICAgICdwdXJwbGUnOiAgICAgICAgICAgICAgICAgJyM3MjY2YmEnLFxyXG4gICAgICAgICdkYXJrJzogICAgICAgICAgICAgICAgICAgJyMzYTNmNTEnLFxyXG4gICAgICAgICd5ZWxsb3cnOiAgICAgICAgICAgICAgICAgJyNmYWQ3MzInLFxyXG4gICAgICAgICdncmF5LWRhcmtlcic6ICAgICAgICAgICAgJyMyMzI3MzUnLFxyXG4gICAgICAgICdncmF5LWRhcmsnOiAgICAgICAgICAgICAgJyMzYTNmNTEnLFxyXG4gICAgICAgICdncmF5JzogICAgICAgICAgICAgICAgICAgJyNkZGU2ZTknLFxyXG4gICAgICAgICdncmF5LWxpZ2h0JzogICAgICAgICAgICAgJyNlNGVhZWMnLFxyXG4gICAgICAgICdncmF5LWxpZ2h0ZXInOiAgICAgICAgICAgJyNlZGYxZjInXHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5BUFBfTUVESUFRVUVSWSA9IHtcclxuICAgICAgICAnZGVza3RvcExHJzogICAgICAgICAgICAgMTIwMCxcclxuICAgICAgICAnZGVza3RvcCc6ICAgICAgICAgICAgICAgIDk5MixcclxuICAgICAgICAndGFibGV0JzogICAgICAgICAgICAgICAgIDc2OCxcclxuICAgICAgICAnbW9iaWxlJzogICAgICAgICAgICAgICAgIDQ4MFxyXG4gICAgfTtcclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEZVTExTQ1JFRU5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTY3JlZW5GdWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2NyZWVuRnVsbCgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHNjcmVlbmZ1bGwgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciAkZG9jID0gJChkb2N1bWVudCk7XHJcbiAgICAgICAgdmFyICRmc1RvZ2dsZXIgPSAkKCdbZGF0YS10b2dnbGUtZnVsbHNjcmVlbl0nKTtcclxuXHJcbiAgICAgICAgLy8gTm90IHN1cHBvcnRlZCB1bmRlciBJRVxyXG4gICAgICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgIGlmICh1YS5pbmRleE9mKFwiTVNJRSBcIikgPiAwIHx8ICEhdWEubWF0Y2goL1RyaWRlbnQuKnJ2XFw6MTFcXC4vKSkge1xyXG4gICAgICAgICAgICAkZnNUb2dnbGVyLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISRmc1RvZ2dsZXIuaXMoJzp2aXNpYmxlJykpIC8vIGhpZGRlbiBvbiBtb2JpbGVzIG9yIElFXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgJGZzVG9nZ2xlci5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzY3JlZW5mdWxsLmVuYWJsZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JlZW5mdWxsLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN3aXRjaCBpY29uIGluZGljYXRvclxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlRlNJY29uKCRmc1RvZ2dsZXIpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIG5vdCBlbmFibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNjcmVlbmZ1bGwucmF3ICYmIHNjcmVlbmZ1bGwucmF3LmZ1bGxzY3JlZW5jaGFuZ2UpXHJcbiAgICAgICAgICAgICRkb2Mub24oc2NyZWVuZnVsbC5yYXcuZnVsbHNjcmVlbmNoYW5nZSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVGU0ljb24oJGZzVG9nZ2xlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVGU0ljb24oJGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHNjcmVlbmZ1bGwuaXNGdWxsc2NyZWVuKVxyXG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuY2hpbGRyZW4oJ2VtJykucmVtb3ZlQ2xhc3MoJ2ZhLWV4cGFuZCcpLmFkZENsYXNzKCdmYS1jb21wcmVzcycpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5jaGlsZHJlbignZW0nKS5yZW1vdmVDbGFzcygnZmEtY29tcHJlc3MnKS5hZGRDbGFzcygnZmEtZXhwYW5kJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIExPQUQgQ1VTVE9NIENTU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdExvYWRDU1MpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRMb2FkQ1NTKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1sb2FkLWNzc10nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pcygnYScpKVxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVyaSA9IGVsZW1lbnQuZGF0YSgnbG9hZENzcycpLFxyXG4gICAgICAgICAgICAgICAgbGluaztcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmkpIHtcclxuICAgICAgICAgICAgICAgIGxpbmsgPSBjcmVhdGVMaW5rKHVyaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmVycm9yKCdFcnJvciBjcmVhdGluZyBzdHlsZXNoZWV0IGxpbmsgZWxlbWVudC4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQuZXJyb3IoJ05vIHN0eWxlc2hlZXQgbG9jYXRpb24gZGVmaW5lZC4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVMaW5rKHVyaSkge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB2YXIgbGlua0lkID0gJ2F1dG9sb2FkZWQtc3R5bGVzaGVldCcsXHJcbiAgICAgICAgICAgIG9sZExpbmsgPSAkKCcjJyArIGxpbmtJZCkuYXR0cignaWQnLCBsaW5rSWQgKyAnLW9sZCcpO1xyXG5cclxuICAgICAgICAkKCdoZWFkJykuYXBwZW5kKCQoJzxsaW5rLz4nKS5hdHRyKHtcclxuICAgICAgICAgICAgJ2lkJzogbGlua0lkLFxyXG4gICAgICAgICAgICAncmVsJzogJ3N0eWxlc2hlZXQnLFxyXG4gICAgICAgICAgICAnaHJlZic6IHVyaVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgaWYgKG9sZExpbmsubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG9sZExpbmsucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJCgnIycgKyBsaW5rSWQpO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gTkFWQkFSIFNFQVJDSFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdE5hdmJhclNlYXJjaCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE5hdmJhclNlYXJjaCgpIHtcclxuXHJcbiAgICAgICAgdmFyIG5hdlNlYXJjaCA9IG5ldyBuYXZiYXJTZWFyY2hJbnB1dCgpO1xyXG5cclxuICAgICAgICAvLyBPcGVuIHNlYXJjaCBpbnB1dFxyXG4gICAgICAgIHZhciAkc2VhcmNoT3BlbiA9ICQoJ1tkYXRhLXNlYXJjaC1vcGVuXScpO1xyXG5cclxuICAgICAgICAkc2VhcmNoT3BlblxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgbmF2U2VhcmNoLnRvZ2dsZSk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIHNlYXJjaCBpbnB1dFxyXG4gICAgICAgIHZhciAkc2VhcmNoRGlzbWlzcyA9ICQoJ1tkYXRhLXNlYXJjaC1kaXNtaXNzXScpO1xyXG4gICAgICAgIHZhciBpbnB1dFNlbGVjdG9yID0gJy5uYXZiYXItZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSc7XHJcblxyXG4gICAgICAgICQoaW5wdXRTZWxlY3RvcilcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSlcclxuICAgICAgICAgICAgLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMjcpIC8vIEVTQ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdlNlYXJjaC5kaXNtaXNzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjbGljayBhbnl3aGVyZSBjbG9zZXMgdGhlIHNlYXJjaFxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIG5hdlNlYXJjaC5kaXNtaXNzKTtcclxuICAgICAgICAvLyBkaXNtaXNzYWJsZSBvcHRpb25zXHJcbiAgICAgICAgJHNlYXJjaERpc21pc3NcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSlcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIG5hdlNlYXJjaC5kaXNtaXNzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5hdmJhclNlYXJjaElucHV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5hdmJhckZvcm1TZWxlY3RvciA9ICdmb3JtLm5hdmJhci1mb3JtJztcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBuYXZiYXJGb3JtID0gJChuYXZiYXJGb3JtU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdmJhckZvcm0udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaXNPcGVuID0gbmF2YmFyRm9ybS5oYXNDbGFzcygnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdmJhckZvcm0uZmluZCgnaW5wdXQnKVtpc09wZW4gPyAnZm9jdXMnIDogJ2JsdXInXSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGRpc21pc3M6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChuYXZiYXJGb3JtU2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdvcGVuJykgLy8gQ2xvc2UgY29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLmJsdXIoKSAvLyByZW1vdmUgZm9jdXNcclxuICAgICAgICAgICAgICAgIC8vIC52YWwoJycpICAgICAgICAgICAgICAgICAgICAvLyBFbXB0eSBpbnB1dFxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBOT1cgVElNRVJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXROb3dUaW1lcik7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE5vd1RpbWVyKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1ub3ddJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZWxlbWVudC5kYXRhKCdmb3JtYXQnKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHQgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KGZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHQoZHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lKCk7XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKHVwZGF0ZVRpbWUsIDEwMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFRvZ2dsZSBSVEwgbW9kZSBmb3IgZGVtb1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRSVEwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRSVEwoKSB7XHJcbiAgICAgICAgdmFyIG1haW5jc3MgPSAkKCcjbWFpbmNzcycpO1xyXG4gICAgICAgIHZhciBic2NzcyA9ICQoJyNic2NzcycpO1xyXG4gICAgICAgICQoJyNjaGstcnRsJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBhcHAgcnRsIGNoZWNrXHJcbiAgICAgICAgICAgIG1haW5jc3MuYXR0cignaHJlZicsIHRoaXMuY2hlY2tlZCA/ICcvQ29udGVudC9jc3MvYXBwLXJ0bC5jc3MnIDogJy9Db250ZW50L2Nzcy9hcHAuY3NzJyk7XHJcbiAgICAgICAgICAgIC8vIGJvb3RzdHJhcCBydGwgY2hlY2tcclxuICAgICAgICAgICAgYnNjc3MuYXR0cignaHJlZicsIHRoaXMuY2hlY2tlZCA/ICcvQ29udGVudC9jc3MvYm9vdHN0cmFwLXJ0bC5jc3MnIDogJy9Db250ZW50L2Nzcy9ib290c3RyYXAuY3NzJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBTSURFQkFSXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFNpZGViYXIpO1xyXG5cclxuXHJcbiAgICB2YXIgJHdpbjtcclxuICAgIHZhciAkaHRtbDtcclxuICAgIHZhciAkYm9keTtcclxuICAgIHZhciAkc2lkZWJhcjtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2lkZWJhcigpIHtcclxuXHJcbiAgICAgICAgJHdpbiA9ICQod2luZG93KTtcclxuICAgICAgICAkaHRtbCA9ICQoJ2h0bWwnKTtcclxuICAgICAgICAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICAkc2lkZWJhciA9ICQoJy5zaWRlYmFyJyk7XHJcblxyXG4gICAgICAgIC8vIEFVVE9DT0xMQVBTRSBJVEVNU1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHZhciBzaWRlYmFyQ29sbGFwc2UgPSAkc2lkZWJhci5maW5kKCcuY29sbGFwc2UnKTtcclxuICAgICAgICBzaWRlYmFyQ29sbGFwc2Uub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudHMoJy5jb2xsYXBzZScpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHNpZGViYXJDb2xsYXBzZS5maWx0ZXIoJy5zaG93JykuY29sbGFwc2UoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNJREVCQVIgQUNUSVZFIFNUQVRFXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgLy8gRmluZCBjdXJyZW50IGFjdGl2ZSBpdGVtXHJcbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gJCgnLnNpZGViYXIgLmFjdGl2ZScpLnBhcmVudHMoJ2xpJyk7XHJcblxyXG4gICAgICAgIC8vIGhvdmVyIG1vZGUgZG9uJ3QgdHJ5IHRvIGV4cGFuZCBhY3RpdmUgY29sbGFwc2VcclxuICAgICAgICBpZiAoIXVzZUFzaWRlSG92ZXIoKSlcclxuICAgICAgICAgICAgY3VycmVudEl0ZW1cclxuICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKSAvLyBhY3RpdmF0ZSB0aGUgcGFyZW50XHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLmNvbGxhcHNlJykgLy8gZmluZCB0aGUgY29sbGFwc2VcclxuICAgICAgICAgICAgLmNvbGxhcHNlKCdzaG93Jyk7IC8vIGFuZCBzaG93IGl0XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGlzIGlmIHlvdSB1c2Ugb25seSBjb2xsYXBzaWJsZSBzaWRlYmFyIGl0ZW1zXHJcbiAgICAgICAgJHNpZGViYXIuZmluZCgnbGkgPiBhICsgdWwnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKHVzZUFzaWRlSG92ZXIoKSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTSURFQkFSIENPTExBUFNFRCBJVEVNIEhBTkRMRVJcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGlzVG91Y2goKSA/ICdjbGljaycgOiAnbW91c2VlbnRlcic7XHJcbiAgICAgICAgdmFyIHN1Yk5hdiA9ICQoKTtcclxuICAgICAgICAkc2lkZWJhci5vbihldmVudE5hbWUsICcuc2lkZWJhci1uYXYgPiBsaScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzU2lkZWJhckNvbGxhcHNlZCgpIHx8IHVzZUFzaWRlSG92ZXIoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN1Yk5hdi50cmlnZ2VyKCdtb3VzZWxlYXZlJyk7XHJcbiAgICAgICAgICAgICAgICBzdWJOYXYgPSB0b2dnbGVNZW51SXRlbSgkKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVc2VkIHRvIGRldGVjdCBjbGljayBhbmQgdG91Y2ggZXZlbnRzIG91dHNpZGUgdGhlIHNpZGViYXJcclxuICAgICAgICAgICAgICAgIHNpZGViYXJBZGRCYWNrZHJvcCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgc2lkZWJhckFueWNsaWNrQ2xvc2UgPSAkc2lkZWJhci5kYXRhKCdzaWRlYmFyQW55Y2xpY2tDbG9zZScpO1xyXG5cclxuICAgICAgICAvLyBBbGxvd3MgdG8gY2xvc2VcclxuICAgICAgICBpZiAodHlwZW9mIHNpZGViYXJBbnljbGlja0Nsb3NlICE9PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgICAgICAgICAgJCgnLndyYXBwZXInKS5vbignY2xpY2suc2lkZWJhcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRvbid0IGNoZWNrIGlmIHNpZGViYXIgbm90IHZpc2libGVcclxuICAgICAgICAgICAgICAgIGlmICghJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLXRvZ2dsZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoISR0YXJnZXQucGFyZW50cygnLmFzaWRlLWNvbnRhaW5lcicpLmxlbmd0aCAmJiAvLyBpZiBub3QgY2hpbGQgb2Ygc2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgICEkdGFyZ2V0LmlzKCcjdXNlci1ibG9jay10b2dnbGUnKSAmJiAvLyB1c2VyIGJsb2NrIHRvZ2dsZSBhbmNob3JcclxuICAgICAgICAgICAgICAgICAgICAhJHRhcmdldC5wYXJlbnQoKS5pcygnI3VzZXItYmxvY2stdG9nZ2xlJykgLy8gdXNlciBibG9jayB0b2dnbGUgaWNvblxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ2FzaWRlLXRvZ2dsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaWRlYmFyQWRkQmFja2Ryb3AoKSB7XHJcbiAgICAgICAgdmFyICRiYWNrZHJvcCA9ICQoJzxkaXYvPicsIHsgJ2NsYXNzJzogJ2Ryb3Bkb3duLWJhY2tkcm9wJyB9KTtcclxuICAgICAgICAkYmFja2Ryb3AuaW5zZXJ0QWZ0ZXIoJy5hc2lkZS1jb250YWluZXInKS5vbihcImNsaWNrIG1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZsb2F0aW5nTmF2KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3BlbiB0aGUgY29sbGFwc2Ugc2lkZWJhciBzdWJtZW51IGl0ZW1zIHdoZW4gb24gdG91Y2ggZGV2aWNlc1xyXG4gICAgLy8gLSBkZXNrdG9wIG9ubHkgb3BlbnMgb24gaG92ZXJcclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRvdWNoSXRlbSgkZWxlbWVudCkge1xyXG4gICAgICAgICRlbGVtZW50XHJcbiAgICAgICAgICAgIC5zaWJsaW5ncygnbGknKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ29wZW4nKVxyXG4gICAgICAgICAgICAuZW5kKClcclxuICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlcyBob3ZlciB0byBvcGVuIGl0ZW1zIHVuZGVyIGNvbGxhcHNlZCBtZW51XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudUl0ZW0oJGxpc3RJdGVtKSB7XHJcblxyXG4gICAgICAgIHJlbW92ZUZsb2F0aW5nTmF2KCk7XHJcblxyXG4gICAgICAgIHZhciB1bCA9ICRsaXN0SXRlbS5jaGlsZHJlbigndWwnKTtcclxuXHJcbiAgICAgICAgaWYgKCF1bC5sZW5ndGgpIHJldHVybiAkKCk7XHJcbiAgICAgICAgaWYgKCRsaXN0SXRlbS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVRvdWNoSXRlbSgkbGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gJCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyICRhc2lkZSA9ICQoJy5hc2lkZS1jb250YWluZXInKTtcclxuICAgICAgICB2YXIgJGFzaWRlSW5uZXIgPSAkKCcuYXNpZGUtaW5uZXInKTsgLy8gZm9yIHRvcCBvZmZzZXQgY2FsY3VsYXRpb25cclxuICAgICAgICAvLyBmbG9hdCBhc2lkZSB1c2VzIGV4dHJhIHBhZGRpbmcgb24gYXNpZGVcclxuICAgICAgICB2YXIgbWFyID0gcGFyc2VJbnQoJGFzaWRlSW5uZXIuY3NzKCdwYWRkaW5nLXRvcCcpLCAwKSArIHBhcnNlSW50KCRhc2lkZS5jc3MoJ3BhZGRpbmctdG9wJyksIDApO1xyXG5cclxuICAgICAgICB2YXIgc3ViTmF2ID0gdWwuY2xvbmUoKS5hcHBlbmRUbygkYXNpZGUpO1xyXG5cclxuICAgICAgICB0b2dnbGVUb3VjaEl0ZW0oJGxpc3RJdGVtKTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1Ub3AgPSAoJGxpc3RJdGVtLnBvc2l0aW9uKCkudG9wICsgbWFyKSAtICRzaWRlYmFyLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHZhciB2d0hlaWdodCA9ICR3aW4uaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIHN1Yk5hdlxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ25hdi1mbG9hdGluZycpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGlzRml4ZWQoKSA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBpdGVtVG9wLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAoc3ViTmF2Lm91dGVySGVpZ2h0KHRydWUpICsgaXRlbVRvcCA+IHZ3SGVpZ2h0KSA/IDAgOiAnYXV0bydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN1Yk5hdi5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVUb3VjaEl0ZW0oJGxpc3RJdGVtKTtcclxuICAgICAgICAgICAgc3ViTmF2LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3ViTmF2O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZsb2F0aW5nTmF2KCkge1xyXG4gICAgICAgICQoJy5zaWRlYmFyLXN1Ym5hdi5uYXYtZmxvYXRpbmcnKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCcuZHJvcGRvd24tYmFja2Ryb3AnKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCcuc2lkZWJhciBsaS5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1RvdWNoKCkge1xyXG4gICAgICAgIHJldHVybiAkaHRtbC5oYXNDbGFzcygndG91Y2gnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1NpZGViYXJDb2xsYXBzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICRib2R5Lmhhc0NsYXNzKCdhc2lkZS1jb2xsYXBzZWQnKSB8fCAkYm9keS5oYXNDbGFzcygnYXNpZGUtY29sbGFwc2VkLXRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1NpZGViYXJUb2dnbGVkKCkge1xyXG4gICAgICAgIHJldHVybiAkYm9keS5oYXNDbGFzcygnYXNpZGUtdG9nZ2xlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gICAgICAgIHJldHVybiAkd2luLndpZHRoKCkgPCBBUFBfTUVESUFRVUVSWS50YWJsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGaXhlZCgpIHtcclxuICAgICAgICByZXR1cm4gJGJvZHkuaGFzQ2xhc3MoJ2xheW91dC1maXhlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVzZUFzaWRlSG92ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICRib2R5Lmhhc0NsYXNzKCdhc2lkZS1ob3ZlcicpO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gU0xJTVNDUk9MTFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFNsaW1zU3JvbGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTbGltc1Nyb2xsKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0SGVpZ2h0ID0gMjUwO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zbGltU2Nyb2xsKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogKGVsZW1lbnQuZGF0YSgnaGVpZ2h0JykgfHwgZGVmYXVsdEhlaWdodClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ3VzdG9tIGpRdWVyeVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRUYWJsZUNoZWNrQWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0VGFibGVDaGVja0FsbCgpIHtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY2hlY2stYWxsXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gJHRoaXMuaW5kZXgoKSArIDEsXHJcbiAgICAgICAgICAgICAgICBjaGVja2JveCA9ICR0aGlzLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLFxyXG4gICAgICAgICAgICAgICAgdGFibGUgPSAkdGhpcy5wYXJlbnRzKCd0YWJsZScpO1xyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdG8gYWZmZWN0IG9ubHkgdGhlIGNvcnJlY3QgY2hlY2tib3ggY29sdW1uXHJcbiAgICAgICAgICAgIHRhYmxlLmZpbmQoJ3Rib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoJyArIGluZGV4ICsgJykgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcclxuICAgICAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgY2hlY2tib3hbMF0uY2hlY2tlZCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFRPR0dMRSBTVEFURVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFRvZ2dsZVN0YXRlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0VG9nZ2xlU3RhdGUoKSB7XHJcblxyXG4gICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICB2YXIgdG9nZ2xlID0gbmV3IFN0YXRlVG9nZ2xlcigpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS10b2dnbGUtc3RhdGVdJylcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lID0gZWxlbWVudC5kYXRhKCd0b2dnbGVTdGF0ZScpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGVsZW1lbnQuZGF0YSgndGFyZ2V0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9QZXJzaXN0ID0gKGVsZW1lbnQuYXR0cignZGF0YS1uby1wZXJzaXN0JykgIT09IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3BlY2lmeSBhIHRhcmdldCBzZWxlY3RvciB0byB0b2dnbGUgY2xhc3NuYW1lXHJcbiAgICAgICAgICAgICAgICAvLyB1c2UgYm9keSBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICB2YXIgJHRhcmdldCA9IHRhcmdldCA/ICQodGFyZ2V0KSA6ICRib2R5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHRhcmdldC5oYXNDbGFzcyhjbGFzc25hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoY2xhc3NuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub1BlcnNpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUucmVtb3ZlU3RhdGUoY2xhc3NuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKGNsYXNzbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9QZXJzaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmFkZFN0YXRlKGNsYXNzbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzb21lIGVsZW1lbnRzIG1heSBuZWVkIHRoaXMgd2hlbiB0b2dnbGVkIGNsYXNzIGNoYW5nZSB0aGUgY29udGVudCBzaXplXHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlIHN0YXRlcyB0by9mcm9tIGxvY2Fsc3RvcmFnZVxyXG4gICAgdmFyIFN0YXRlVG9nZ2xlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgU1RPUkFHRV9LRVlfTkFNRSA9ICdqcS10b2dnbGVTdGF0ZSc7XHJcblxyXG4gICAgICAgIC8qKiBBZGQgYSBzdGF0ZSB0byB0aGUgYnJvd3NlciBzdG9yYWdlIHRvIGJlIHJlc3RvcmVkIGxhdGVyICovXHJcbiAgICAgICAgdGhpcy5hZGRTdGF0ZSA9IGZ1bmN0aW9uKGNsYXNzbmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5nZXQoU1RPUkFHRV9LRVlfTkFNRSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpIGRhdGEucHVzaChjbGFzc25hbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGRhdGEgPSBbY2xhc3NuYW1lXTtcclxuICAgICAgICAgICAgU3RvcmFnZXMubG9jYWxTdG9yYWdlLnNldChTVE9SQUdFX0tFWV9OQU1FLCBkYXRhKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKiBSZW1vdmUgYSBzdGF0ZSBmcm9tIHRoZSBicm93c2VyIHN0b3JhZ2UgKi9cclxuICAgICAgICB0aGlzLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24oY2xhc3NuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gU3RvcmFnZXMubG9jYWxTdG9yYWdlLmdldChTVE9SQUdFX0tFWV9OQU1FKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGRhdGEuaW5kZXhPZihjbGFzc25hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkgZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZXMubG9jYWxTdG9yYWdlLnNldChTVE9SQUdFX0tFWV9OQU1FLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqIExvYWQgdGhlIHN0YXRlIHN0cmluZyBhbmQgcmVzdG9yZSB0aGUgY2xhc3NsaXN0ICovXHJcbiAgICAgICAgdGhpcy5yZXN0b3JlU3RhdGUgPSBmdW5jdGlvbigkZWxlbSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5nZXQoU1RPUkFHRV9LRVlfTkFNRSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICAkZWxlbS5hZGRDbGFzcyhkYXRhLmpvaW4oJyAnKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LlN0YXRlVG9nZ2xlciA9IFN0YXRlVG9nZ2xlcjtcclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBNb2R1bGU6IHRyaWdnZXItcmVzaXplLmpzXHJcbiAqIFRyaWdnZXJzIGEgd2luZG93IHJlc2l6ZSBldmVudCBmcm9tIGFueSBlbGVtZW50XHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFRyaWdnZXJSZXNpemUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRUcmlnZ2VyUmVzaXplKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gJCgnW2RhdGEtdHJpZ2dlci1yZXNpemVdJyk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZWxlbWVudC5kYXRhKCd0cmlnZ2VyUmVzaXplJylcclxuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxsIElFIGZyaWVuZGx5IGRpc3BhdGNoRXZlbnRcclxuICAgICAgICAgICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnVUlFdmVudHMnKTtcclxuICAgICAgICAgICAgICAgIGV2dC5pbml0VUlFdmVudCgncmVzaXplJywgdHJ1ZSwgZmFsc2UsIHdpbmRvdywgMCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gbW9kZXJuIGRpc3BhdGNoRXZlbnQgd2F5XHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuICAgICAgICAgICAgfSwgdmFsdWUgfHwgMzAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEN1c3RvbSBqUXVlcnlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgLy8gV2hlbiBkb20gcmVhZHksIGluaXQgY2FsZW5kYXIgYW5kIGV2ZW50c1xyXG4gICAgJChpbml0RnVsbENhbGVuZGFyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RnVsbENhbGVuZGFyKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uZnVsbENhbGVuZGFyKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIFRoZSBlbGVtZW50IHRoYXQgd2lsbCBkaXNwbGF5IHRoZSBjYWxlbmRhclxyXG4gICAgICAgIHZhciBjYWxlbmRhciA9ICQoJyNjYWxlbmRhcicpO1xyXG5cclxuICAgICAgICB2YXIgZGVtb0V2ZW50cyA9IGNyZWF0ZURlbW9FdmVudHMoKTtcclxuXHJcbiAgICAgICAgaW5pdEV4dGVybmFsRXZlbnRzKGNhbGVuZGFyKTtcclxuXHJcbiAgICAgICAgaW5pdENhbGVuZGFyKGNhbGVuZGFyLCBkZW1vRXZlbnRzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGdsb2JhbCBzaGFyZWQgdmFyIHRvIGtub3cgd2hhdCB3ZSBhcmUgZHJhZ2dpbmdcclxuICAgIHZhciBkcmFnZ2luZ0V2ZW50ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dGVybmFsRXZlbnQgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0galF1ZXJ5IE9iamVjdCBlbGVtZW50cyBTZXQgb2YgZWxlbWVudCBhcyBqUXVlcnkgb2JqZWN0c1xyXG4gICAgICovXHJcbiAgICB2YXIgRXh0ZXJuYWxFdmVudCA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudHMpIHJldHVybjtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIEV2ZW50IE9iamVjdCAoaHR0cDovL2Fyc2hhdy5jb20vZnVsbGNhbGVuZGFyL2RvY3MvZXZlbnRfZGF0YS9FdmVudF9PYmplY3QvKVxyXG4gICAgICAgICAgICAvLyBpdCBkb2Vzbid0IG5lZWQgdG8gaGF2ZSBhIHN0YXJ0IG9yIGVuZFxyXG4gICAgICAgICAgICB2YXIgY2FsZW5kYXJFdmVudE9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAkLnRyaW0oJHRoaXMudGV4dCgpKSAvLyB1c2UgdGhlIGVsZW1lbnQncyB0ZXh0IGFzIHRoZSBldmVudCB0aXRsZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcmUgdGhlIEV2ZW50IE9iamVjdCBpbiB0aGUgRE9NIGVsZW1lbnQgc28gd2UgY2FuIGdldCB0byBpdCBsYXRlclxyXG4gICAgICAgICAgICAkdGhpcy5kYXRhKCdjYWxlbmRhckV2ZW50T2JqZWN0JywgY2FsZW5kYXJFdmVudE9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBtYWtlIHRoZSBldmVudCBkcmFnZ2FibGUgdXNpbmcgalF1ZXJ5IFVJXHJcbiAgICAgICAgICAgICR0aGlzLmRyYWdnYWJsZSh7XHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwNzAsXHJcbiAgICAgICAgICAgICAgICByZXZlcnQ6IHRydWUsIC8vIHdpbGwgY2F1c2UgdGhlIGV2ZW50IHRvIGdvIGJhY2sgdG8gaXRzXHJcbiAgICAgICAgICAgICAgICByZXZlcnREdXJhdGlvbjogMCAvLyAgb3JpZ2luYWwgcG9zaXRpb24gYWZ0ZXIgdGhlIGRyYWdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEludm9rZSBmdWxsIGNhbGVuZGFyIHBsdWdpbiBhbmQgYXR0YWNoIGJlaGF2aW9yXHJcbiAgICAgKiBAcGFyYW0gIGpRdWVyeSBbY2FsRWxlbWVudF0gVGhlIGNhbGVuZGFyIGRvbSBlbGVtZW50IHdyYXBwZWQgaW50byBqUXVlcnlcclxuICAgICAqIEBwYXJhbSAgRXZlbnRPYmplY3QgW2V2ZW50c10gQW4gb2JqZWN0IHdpdGggdGhlIGV2ZW50IGxpc3QgdG8gbG9hZCB3aGVuIHRoZSBjYWxlbmRhciBkaXNwbGF5c1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbml0Q2FsZW5kYXIoY2FsRWxlbWVudCwgZXZlbnRzKSB7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHRvIHJlbW92ZSBlbGVtZW50cyBmcm9tIHRoZSBsaXN0XHJcbiAgICAgICAgdmFyIHJlbW92ZUFmdGVyRHJvcCA9ICQoJyNyZW1vdmUtYWZ0ZXItZHJvcCcpO1xyXG5cclxuICAgICAgICBjYWxFbGVtZW50LmZ1bGxDYWxlbmRhcih7XHJcbiAgICAgICAgICAgIC8vIGlzUlRMOiB0cnVlLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6ICdwcmV2LG5leHQgdG9kYXknLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICdtb250aCxhZ2VuZGFXZWVrLGFnZW5kYURheSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnV0dG9uSWNvbnM6IHsgLy8gbm90ZSB0aGUgc3BhY2UgYXQgdGhlIGJlZ2lubmluZ1xyXG4gICAgICAgICAgICAgICAgcHJldjogJyBmYSBmYS1jYXJldC1sZWZ0JyxcclxuICAgICAgICAgICAgICAgIG5leHQ6ICcgZmEgZmEtY2FyZXQtcmlnaHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IHtcclxuICAgICAgICAgICAgICAgIHRvZGF5OiAndG9kYXknLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6ICdtb250aCcsXHJcbiAgICAgICAgICAgICAgICB3ZWVrOiAnd2VlaycsXHJcbiAgICAgICAgICAgICAgICBkYXk6ICdkYXknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBkcm9wcGFibGU6IHRydWUsIC8vIHRoaXMgYWxsb3dzIHRoaW5ncyB0byBiZSBkcm9wcGVkIG9udG8gdGhlIGNhbGVuZGFyXHJcbiAgICAgICAgICAgIGRyb3A6IGZ1bmN0aW9uKGRhdGUsIGFsbERheSkgeyAvLyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHNvbWV0aGluZyBpcyBkcm9wcGVkXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSB0aGUgZHJvcHBlZCBlbGVtZW50J3Mgc3RvcmVkIEV2ZW50IE9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnRPYmplY3QgPSAkdGhpcy5kYXRhKCdjYWxlbmRhckV2ZW50T2JqZWN0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgc29tZXRoaW5nIHdlbnQgd3JvbmcsIGFib3J0XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9yaWdpbmFsRXZlbnRPYmplY3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjbG9uZSB0aGUgb2JqZWN0IHRvIGF2b2lkIG11bHRpcGxlIGV2ZW50cyB3aXRoIHJlZmVyZW5jZSB0byB0aGUgc2FtZSBvYmplY3RcclxuICAgICAgICAgICAgICAgIHZhciBjbG9uZWRFdmVudE9iamVjdCA9ICQuZXh0ZW5kKHt9LCBvcmlnaW5hbEV2ZW50T2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ24gdGhlIHJlcG9ydGVkIGRhdGVcclxuICAgICAgICAgICAgICAgIGNsb25lZEV2ZW50T2JqZWN0LnN0YXJ0ID0gZGF0ZTtcclxuICAgICAgICAgICAgICAgIGNsb25lZEV2ZW50T2JqZWN0LmFsbERheSA9IGFsbERheTtcclxuICAgICAgICAgICAgICAgIGNsb25lZEV2ZW50T2JqZWN0LmJhY2tncm91bmRDb2xvciA9ICR0aGlzLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkRXZlbnRPYmplY3QuYm9yZGVyQ29sb3IgPSAkdGhpcy5jc3MoJ2JvcmRlci1jb2xvcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciB0aGUgZXZlbnQgb24gdGhlIGNhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgbGFzdCBgdHJ1ZWAgYXJndW1lbnQgZGV0ZXJtaW5lcyBpZiB0aGUgZXZlbnQgXCJzdGlja3NcIlxyXG4gICAgICAgICAgICAgICAgLy8gKGh0dHA6Ly9hcnNoYXcuY29tL2Z1bGxjYWxlbmRhci9kb2NzL2V2ZW50X3JlbmRlcmluZy9yZW5kZXJFdmVudC8pXHJcbiAgICAgICAgICAgICAgICBjYWxFbGVtZW50LmZ1bGxDYWxlbmRhcigncmVuZGVyRXZlbnQnLCBjbG9uZWRFdmVudE9iamVjdCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgbmVjZXNzYXJ5IHJlbW92ZSB0aGUgZWxlbWVudCBmcm9tIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlQWZ0ZXJEcm9wLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV2ZW50RHJhZ1N0YXJ0OiBmdW5jdGlvbihldmVudCwganMsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICBkcmFnZ2luZ0V2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIFRoaXMgYXJyYXkgaXMgdGhlIGV2ZW50cyBzb3VyY2VzXHJcbiAgICAgICAgICAgIGV2ZW50czogZXZlbnRzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0cyB0aGUgZXh0ZXJuYWwgZXZlbnRzIGNhcmRcclxuICAgICAqIEBwYXJhbSAgalF1ZXJ5IFtjYWxFbGVtZW50XSBUaGUgY2FsZW5kYXIgZG9tIGVsZW1lbnQgd3JhcHBlZCBpbnRvIGpRdWVyeVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbml0RXh0ZXJuYWxFdmVudHMoY2FsRWxlbWVudCkge1xyXG4gICAgICAgIC8vIENhcmQgd2l0aCB0aGUgZXh0ZXJuYWwgZXZlbnRzIGxpc3RcclxuICAgICAgICB2YXIgZXh0ZXJuYWxFdmVudHMgPSAkKCcuZXh0ZXJuYWwtZXZlbnRzJyk7XHJcblxyXG4gICAgICAgIC8vIGluaXQgdGhlIGV4dGVybmFsIGV2ZW50cyBpbiB0aGUgY2FyZFxyXG4gICAgICAgIG5ldyBFeHRlcm5hbEV2ZW50KGV4dGVybmFsRXZlbnRzLmNoaWxkcmVuKCdkaXYnKSk7XHJcblxyXG4gICAgICAgIC8vIEV4dGVybmFsIGV2ZW50IGNvbG9yIGlzIGRhbmdlci1yZWQgYnkgZGVmYXVsdFxyXG4gICAgICAgIHZhciBjdXJyQ29sb3IgPSAnI2Y2NTA0ZCc7XHJcbiAgICAgICAgLy8gQ29sb3Igc2VsZWN0b3IgYnV0dG9uXHJcbiAgICAgICAgdmFyIGV2ZW50QWRkQnRuID0gJCgnLmV4dGVybmFsLWV2ZW50LWFkZC1idG4nKTtcclxuICAgICAgICAvLyBOZXcgZXh0ZXJuYWwgZXZlbnQgbmFtZSBpbnB1dFxyXG4gICAgICAgIHZhciBldmVudE5hbWVJbnB1dCA9ICQoJy5leHRlcm5hbC1ldmVudC1uYW1lJyk7XHJcbiAgICAgICAgLy8gQ29sb3Igc3dpdGNoZXJzXHJcbiAgICAgICAgdmFyIGV2ZW50Q29sb3JTZWxlY3RvciA9ICQoJy5leHRlcm5hbC1ldmVudC1jb2xvci1zZWxlY3RvciAuY2lyY2xlJyk7XHJcblxyXG4gICAgICAgIC8vIFRyYXNoIGV2ZW50cyBEcm9wYXJlYVxyXG4gICAgICAgICQoJy5leHRlcm5hbC1ldmVudHMtdHJhc2gnKS5kcm9wcGFibGUoe1xyXG4gICAgICAgICAgICBhY2NlcHQ6ICcuZmMtZXZlbnQnLFxyXG4gICAgICAgICAgICBhY3RpdmVDbGFzczogJ2FjdGl2ZScsXHJcbiAgICAgICAgICAgIGhvdmVyQ2xhc3M6ICdob3ZlcmVkJyxcclxuICAgICAgICAgICAgdG9sZXJhbmNlOiAndG91Y2gnLFxyXG4gICAgICAgICAgICBkcm9wOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIHNlbmQgYW4gYWpheCByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAvLyB0byByZW1vdmUgdGhlIGV2ZW50IGZyb20gdGhlIHJlcG9zaXRvcnlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ2dpbmdFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlaWQgPSBkcmFnZ2luZ0V2ZW50LmlkIHx8IGRyYWdnaW5nRXZlbnQuX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICBjYWxFbGVtZW50LmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJywgZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGRvbSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdWkuZHJhZ2dhYmxlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dpbmdFdmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRDb2xvclNlbGVjdG9yLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2F2ZSBjb2xvclxyXG4gICAgICAgICAgICBjdXJyQ29sb3IgPSAkdGhpcy5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgICAgICAgLy8gRGUtc2VsZWN0IGFsbCBhbmQgc2VsZWN0IHRoZSBjdXJyZW50IG9uZVxyXG4gICAgICAgICAgICBldmVudENvbG9yU2VsZWN0b3IucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudEFkZEJ0bi5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBldmVudCBuYW1lIGZyb20gaW5wdXRcclxuICAgICAgICAgICAgdmFyIHZhbCA9IGV2ZW50TmFtZUlucHV0LnZhbCgpO1xyXG4gICAgICAgICAgICAvLyBEb250IGFsbG93IGVtcHR5IHZhbHVlc1xyXG4gICAgICAgICAgICBpZiAoJC50cmltKHZhbCkgPT09ICcnKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGV2ZW50IGVsZW1lbnRcclxuICAgICAgICAgICAgdmFyIG5ld0V2ZW50ID0gJCgnPGRpdi8+JykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGN1cnJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogY3VyckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICcjZmZmJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5odG1sKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmVwZW5kcyB0byB0aGUgZXh0ZXJuYWwgZXZlbnRzIGxpc3RcclxuICAgICAgICAgICAgZXh0ZXJuYWxFdmVudHMucHJlcGVuZChuZXdFdmVudCk7XHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgdGhlIG5ldyBldmVudCBlbGVtZW50XHJcbiAgICAgICAgICAgIG5ldyBFeHRlcm5hbEV2ZW50KG5ld0V2ZW50KTtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgaW5wdXRcclxuICAgICAgICAgICAgZXZlbnROYW1lSW5wdXQudmFsKCcnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgaW4gdGhlIGZpcnN0IGxvYWQgb2YgdGhlIGNhbGVuZGFyXHJcbiAgICAgKiBXcmFwIGludG8gdGhpcyBmdW5jdGlvbiBhIHJlcXVlc3QgdG8gYSBzb3VyY2UgdG8gZ2V0IHZpYSBhamF4IHRoZSBzdG9yZWQgZXZlbnRzXHJcbiAgICAgKiBAcmV0dXJuIEFycmF5IFRoZSBhcnJheSB3aXRoIHRoZSBldmVudHNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVtb0V2ZW50cygpIHtcclxuICAgICAgICAvLyBEYXRlIGZvciB0aGUgY2FsZW5kYXIgZXZlbnRzIChkdW1teSBkYXRhKVxyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgZCA9IGRhdGUuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgICBtID0gZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgICAgICB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgdGl0bGU6ICdBbGwgRGF5IEV2ZW50JyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKHksIG0sIDEpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjU2OTU0JywgLy9yZWRcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZjU2OTU0JyAvL3JlZFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMb25nIEV2ZW50JyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKHksIG0sIGQgLSA1KSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgRGF0ZSh5LCBtLCBkIC0gMiksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmMzljMTInLCAvL3llbGxvd1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNmMzljMTInIC8veWVsbG93XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01lZXRpbmcnLFxyXG4gICAgICAgICAgICBzdGFydDogbmV3IERhdGUoeSwgbSwgZCwgMTAsIDMwKSxcclxuICAgICAgICAgICAgYWxsRGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwNzNiNycsIC8vQmx1ZVxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwMDczYjcnIC8vQmx1ZVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMdW5jaCcsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSh5LCBtLCBkLCAxMiwgMCksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IERhdGUoeSwgbSwgZCwgMTQsIDApLFxyXG4gICAgICAgICAgICBhbGxEYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDBjMGVmJywgLy9JbmZvIChhcXVhKVxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwMGMwZWYnIC8vSW5mbyAoYXF1YSlcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQmlydGhkYXkgUGFydHknLFxyXG4gICAgICAgICAgICBzdGFydDogbmV3IERhdGUoeSwgbSwgZCArIDEsIDE5LCAwKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgRGF0ZSh5LCBtLCBkICsgMSwgMjIsIDMwKSxcclxuICAgICAgICAgICAgYWxsRGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwYTY1YScsIC8vU3VjY2VzcyAoZ3JlZW4pXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzAwYTY1YScgLy9TdWNjZXNzIChncmVlbilcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnT3BlbiBHb29nbGUnLFxyXG4gICAgICAgICAgICBzdGFydDogbmV3IERhdGUoeSwgbSwgMjgpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKHksIG0sIDI5KSxcclxuICAgICAgICAgICAgdXJsOiAnLy9nb29nbGUuY29tLycsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzYzhkYmMnLCAvL1ByaW1hcnkgKGxpZ2h0LWJsdWUpXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzNjOGRiYycgLy9QcmltYXJ5IChsaWdodC1ibHVlKVxyXG4gICAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gSlFDbG91ZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRXb3JkQ2xvdWQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRXb3JkQ2xvdWQoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5qUUNsb3VkKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vQ3JlYXRlIGFuIGFycmF5IG9mIHdvcmQgb2JqZWN0cywgZWFjaCByZXByZXNlbnRpbmcgYSB3b3JkIGluIHRoZSBjbG91ZFxyXG4gICAgICAgIHZhciB3b3JkX2FycmF5ID0gW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdMb3JlbScsIHdlaWdodDogMTMsIC8qbGluazogJ2h0dHA6Ly90aGVtaWNvbi5jbycqLyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdJcHN1bScsIHdlaWdodDogMTAuNSB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdEb2xvcicsIHdlaWdodDogOS40IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1NpdCcsIHdlaWdodDogOCB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdBbWV0Jywgd2VpZ2h0OiA2LjIgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnQ29uc2VjdGV0dXInLCB3ZWlnaHQ6IDUgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnQWRpcGlzY2luZycsIHdlaWdodDogNSB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdTaXQnLCB3ZWlnaHQ6IDggfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnQW1ldCcsIHdlaWdodDogNi4yIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbnNlY3RldHVyJywgd2VpZ2h0OiA1IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0FkaXBpc2NpbmcnLCB3ZWlnaHQ6IDUgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgICQoXCIjanFjbG91ZFwiKS5qUUNsb3VkKHdvcmRfYXJyYXksIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI0MCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgICAgIHN0ZXBzOiA3XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ3VzdG9tIGpRdWVyeVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTZWFyY2gpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTZWFyY2goKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5zbGlkZXIpIHJldHVybjtcclxuICAgICAgICBpZiAoISQuZm4uY2hvc2VuKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCEkLmZuLmRhdGVwaWNrZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gQk9PVFNUUkFQIFNMSURFUiBDVFJMXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdWktc2xpZGVyXScpLnNsaWRlcigpO1xyXG5cclxuICAgICAgICAvLyBDSE9TRU5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCcuY2hvc2VuLXNlbGVjdCcpLmNob3NlbigpO1xyXG5cclxuICAgICAgICAvLyBEQVRFVElNRVBJQ0tFUlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJyNkYXRldGltZXBpY2tlcicpLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiAnZmEgZmEtY2xvY2stbycsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnZmEgZmEtY2FsZW5kYXInLFxyXG4gICAgICAgICAgICAgICAgdXA6ICdmYSBmYS1jaGV2cm9uLXVwJyxcclxuICAgICAgICAgICAgICAgIGRvd246ICdmYSBmYS1jaGV2cm9uLWRvd24nLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6ICdmYSBmYS1jaGV2cm9uLWxlZnQnLFxyXG4gICAgICAgICAgICAgICAgbmV4dDogJ2ZhIGZhLWNoZXZyb24tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgdG9kYXk6ICdmYSBmYS1jcm9zc2hhaXJzJyxcclxuICAgICAgICAgICAgICAgIGNsZWFyOiAnZmEgZmEtdHJhc2gnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDb2xvciBwaWNrZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRDb2xvclBpY2tlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENvbG9yUGlja2VyKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uY29sb3JwaWNrZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgJCgnLmRlbW8tY29sb3JwaWNrZXInKS5jb2xvcnBpY2tlcigpO1xyXG5cclxuICAgICAgICAkKCcjZGVtb19zZWxlY3RvcnMnKS5jb2xvcnBpY2tlcih7XHJcbiAgICAgICAgICAgIGNvbG9yU2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAnZGVmYXVsdCc6ICcjNzc3Nzc3JyxcclxuICAgICAgICAgICAgICAgICdwcmltYXJ5JzogQVBQX0NPTE9SU1sncHJpbWFyeSddLFxyXG4gICAgICAgICAgICAgICAgJ3N1Y2Nlc3MnOiBBUFBfQ09MT1JTWydzdWNjZXNzJ10sXHJcbiAgICAgICAgICAgICAgICAnaW5mbyc6IEFQUF9DT0xPUlNbJ2luZm8nXSxcclxuICAgICAgICAgICAgICAgICd3YXJuaW5nJzogQVBQX0NPTE9SU1snd2FybmluZyddLFxyXG4gICAgICAgICAgICAgICAgJ2Rhbmdlcic6IEFQUF9DT0xPUlNbJ2RhbmdlciddXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBGb3JtcyBEZW1vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdEZvcm1zRGVtbyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZvcm1zRGVtbygpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLnNsaWRlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghJC5mbi5jaG9zZW4pIHJldHVybjtcclxuICAgICAgICBpZiAoISQuZm4uaW5wdXRtYXNrKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCEkLmZuLmZpbGVzdHlsZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghJC5mbi53eXNpd3lnKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCEkLmZuLmRhdGVwaWNrZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gQk9PVFNUUkFQIFNMSURFUiBDVFJMXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdWktc2xpZGVyXScpLnNsaWRlcigpO1xyXG5cclxuICAgICAgICAvLyBDSE9TRU5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCcuY2hvc2VuLXNlbGVjdCcpLmNob3NlbigpO1xyXG5cclxuICAgICAgICAvLyBNQVNLRURcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCdbZGF0YS1tYXNrZWRdJykuaW5wdXRtYXNrKCk7XHJcblxyXG4gICAgICAgIC8vIEZJTEVTVFlMRVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJy5maWxlc3R5bGUnKS5maWxlc3R5bGUoKTtcclxuXHJcbiAgICAgICAgLy8gV1lTSVdZR1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJy53eXNpd3lnJykud3lzaXd5ZygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gREFURVRJTUVQSUNLRVJcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCcjZGF0ZXRpbWVwaWNrZXIxJykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgaWNvbnM6IHtcclxuICAgICAgICAgICAgICAgIHRpbWU6ICdmYSBmYS1jbG9jay1vJyxcclxuICAgICAgICAgICAgICAgIGRhdGU6ICdmYSBmYS1jYWxlbmRhcicsXHJcbiAgICAgICAgICAgICAgICB1cDogJ2ZhIGZhLWNoZXZyb24tdXAnLFxyXG4gICAgICAgICAgICAgICAgZG93bjogJ2ZhIGZhLWNoZXZyb24tZG93bicsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91czogJ2ZhIGZhLWNoZXZyb24tbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBuZXh0OiAnZmEgZmEtY2hldnJvbi1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICB0b2RheTogJ2ZhIGZhLWNyb3NzaGFpcnMnLFxyXG4gICAgICAgICAgICAgICAgY2xlYXI6ICdmYSBmYS10cmFzaCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIG9ubHkgdGltZVxyXG4gICAgICAgICQoJyNkYXRldGltZXBpY2tlcjInKS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgZm9ybWF0OiAnbW0tZGQteXl5eSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogTW9kdWxlOiBJbWFnZSBDcm9wcGVyXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdEltYWdlQ3JvcHBlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEltYWdlQ3JvcHBlcigpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmNyb3BwZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyICRpbWFnZSA9ICQoJy5pbWctY29udGFpbmVyID4gaW1nJyksXHJcbiAgICAgICAgICAgICRkYXRhWCA9ICQoJyNkYXRhWCcpLFxyXG4gICAgICAgICAgICAkZGF0YVkgPSAkKCcjZGF0YVknKSxcclxuICAgICAgICAgICAgJGRhdGFIZWlnaHQgPSAkKCcjZGF0YUhlaWdodCcpLFxyXG4gICAgICAgICAgICAkZGF0YVdpZHRoID0gJCgnI2RhdGFXaWR0aCcpLFxyXG4gICAgICAgICAgICAkZGF0YVJvdGF0ZSA9ICQoJyNkYXRhUm90YXRlJyksXHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHg6IDQyMCxcclxuICAgICAgICAgICAgICAgIC8vICAgeTogNjAsXHJcbiAgICAgICAgICAgICAgICAvLyAgIHdpZHRoOiA2NDAsXHJcbiAgICAgICAgICAgICAgICAvLyAgIGhlaWdodDogMzYwXHJcbiAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2tJbWFnZU9yaWdpbjogZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBtb2RhbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBndWlkZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGF1dG9Dcm9wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGF1dG9Dcm9wQXJlYTogMC41LFxyXG4gICAgICAgICAgICAgICAgLy8gZHJhZ0Nyb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gbW92YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyByb3RhdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gem9vbWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gdG91Y2hEcmFnWm9vbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBtb3VzZVdoZWVsWm9vbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBjcm9wQm94TW92YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBjcm9wQm94UmVzaXphYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGRvdWJsZUNsaWNrVG9nZ2xlOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBtaW5DYW52YXNXaWR0aDogMzIwLFxyXG4gICAgICAgICAgICAgICAgLy8gbWluQ2FudmFzSGVpZ2h0OiAxODAsXHJcbiAgICAgICAgICAgICAgICAvLyBtaW5Dcm9wQm94V2lkdGg6IDE2MCxcclxuICAgICAgICAgICAgICAgIC8vIG1pbkNyb3BCb3hIZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgLy8gbWluQ29udGFpbmVyV2lkdGg6IDMyMCxcclxuICAgICAgICAgICAgICAgIC8vIG1pbkNvbnRhaW5lckhlaWdodDogMTgwLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGJ1aWxkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gYnVpbHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBkcmFnc3RhcnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBkcmFnbW92ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIGRyYWdlbmQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyB6b29taW46IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyB6b29tb3V0OiBudWxsLFxyXG5cclxuICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiAxNiAvIDksXHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3OiAnLmltZy1wcmV2aWV3JyxcclxuICAgICAgICAgICAgICAgIGNyb3A6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZGF0YVgudmFsKE1hdGgucm91bmQoZGF0YS54KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRhdGFZLnZhbChNYXRoLnJvdW5kKGRhdGEueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkYXRhSGVpZ2h0LnZhbChNYXRoLnJvdW5kKGRhdGEuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRhdGFXaWR0aC52YWwoTWF0aC5yb3VuZChkYXRhLndpZHRoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRhdGFSb3RhdGUudmFsKE1hdGgucm91bmQoZGF0YS5yb3RhdGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJGltYWdlLm9uKHtcclxuICAgICAgICAgICAgJ2J1aWxkLmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnYnVpbHQuY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdkcmFnc3RhcnQuY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSwgZS5kcmFnVHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdkcmFnbW92ZS5jcm9wcGVyJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50eXBlLCBlLmRyYWdUeXBlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2RyYWdlbmQuY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSwgZS5kcmFnVHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd6b29taW4uY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd6b29tb3V0LmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnY2hhbmdlLmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY3JvcHBlcihvcHRpb25zKTtcclxuXHJcblxyXG4gICAgICAgIC8vIE1ldGhvZHNcclxuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjbGljaycsICdbZGF0YS1tZXRob2RdJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkaW1hZ2UuZGF0YSgnY3JvcHBlcicpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLm1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9ICQuZXh0ZW5kKHt9LCBkYXRhKTsgLy8gQ2xvbmUgYSBuZXcgb25lXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnRhcmdldCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0ID0gJChkYXRhLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5vcHRpb24gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm9wdGlvbiA9IEpTT04ucGFyc2UoJHRhcmdldC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJGltYWdlLmNyb3BwZXIoZGF0YS5tZXRob2QsIGRhdGEub3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5tZXRob2QgPT09ICdnZXRDcm9wcGVkQ2FudmFzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNnZXRDcm9wcGVkQ2FudmFzTW9kYWwnKS5tb2RhbCgpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkLmlzUGxhaW5PYmplY3QocmVzdWx0KSAmJiAkdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC52YWwoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGltYWdlLmRhdGEoJ2Nyb3BwZXInKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZS5jcm9wcGVyKCdtb3ZlJywgLTEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZS5jcm9wcGVyKCdtb3ZlJywgMCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZS5jcm9wcGVyKCdtb3ZlJywgMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGltYWdlLmNyb3BwZXIoJ21vdmUnLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIEltcG9ydCBpbWFnZVxyXG4gICAgICAgIHZhciAkaW5wdXRJbWFnZSA9ICQoJyNpbnB1dEltYWdlJyksXHJcbiAgICAgICAgICAgIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTCxcclxuICAgICAgICAgICAgYmxvYlVSTDtcclxuXHJcbiAgICAgICAgaWYgKFVSTCkge1xyXG4gICAgICAgICAgICAkaW5wdXRJbWFnZS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLmZpbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkaW1hZ2UuZGF0YSgnY3JvcHBlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlID0gZmlsZXNbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgvXmltYWdlXFwvXFx3KyQvLnRlc3QoZmlsZS50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9iVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlLm9uZSgnYnVpbHQuY3JvcHBlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTsgLy8gUmV2b2tlIHdoZW4gbG9hZCBjb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jcm9wcGVyKCdyZXNldCcpLmNyb3BwZXIoJ3JlcGxhY2UnLCBibG9iVVJMKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0SW1hZ2UudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIGNob29zZSBhbiBpbWFnZSBmaWxlLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGlucHV0SW1hZ2UucGFyZW50KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICAgICQoJy5kb2NzLW9wdGlvbnMgOmNoZWNrYm94Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkaW1hZ2UuZGF0YSgnY3JvcHBlcicpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnNbJHRoaXMudmFsKCldID0gJHRoaXMucHJvcCgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAkaW1hZ2UuY3JvcHBlcignZGVzdHJveScpLmNyb3BwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBUb29sdGlwc1xyXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gU2VsZWN0MlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFNlbGVjdDIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTZWxlY3QyKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uc2VsZWN0MikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBTZWxlY3QgMlxyXG5cclxuICAgICAgICAkKCcjc2VsZWN0Mi0xJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwNCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjc2VsZWN0Mi0yJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwNCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjc2VsZWN0Mi0zJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwNCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjc2VsZWN0Mi00Jykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGEgc3RhdGUnLFxyXG4gICAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcDQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGlmICh0eXBlb2YgRHJvcHpvbmUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgLy8gUHJldmVudCBEcm9wem9uZSBmcm9tIGF1dG8gZGlzY292ZXJpbmdcclxuICAgIC8vIFRoaXMgaXMgdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gY3JlYXRlIHRoZVxyXG4gICAgLy8gRHJvcHpvbmUgcHJvZ3JhbW1hdGljYWxseSBsYXRlclxyXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XHJcblxyXG4gICAgJChpbml0RHJvcHpvbmUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXREcm9wem9uZSgpIHtcclxuXHJcbiAgICAgICAgLy8gRHJvcHpvbmUgc2V0dGluZ3NcclxuICAgICAgICB2YXIgZHJvcHpvbmVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhdXRvUHJvY2Vzc1F1ZXVlOiBmYWxzZSxcclxuICAgICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFsbGVsVXBsb2FkczogMTAwLFxyXG4gICAgICAgICAgICBtYXhGaWxlczogMTAwLFxyXG4gICAgICAgICAgICBkaWN0RGVmYXVsdE1lc3NhZ2U6ICc8ZW0gY2xhc3M9XCJmYSBmYS11cGxvYWQgdGV4dC1tdXRlZFwiPjwvZW0+PGJyPkRyb3AgZmlsZXMgaGVyZSB0byB1cGxvYWQnLCAvLyBkZWZhdWx0IG1lc3NhZ2VzIGJlZm9yZSBmaXJzdCBkcm9wXHJcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ2ZpbGUnLCAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxyXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMiwgLy8gTUJcclxuICAgICAgICAgICAgYWRkUmVtb3ZlTGlua3M6IHRydWUsXHJcbiAgICAgICAgICAgIGFjY2VwdDogZnVuY3Rpb24oZmlsZSwgZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUubmFtZSA9PT0gJ2p1c3RpbmJpZWJlci5qcGcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgnTmFoYSwgeW91IGRvbnQuIDopJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHpIYW5kbGVyID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGR6SGFuZGxlci5wcm9jZXNzUXVldWUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbignYWRkZWRmaWxlJywgZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRlZCBmaWxlOiAnICsgZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbigncmVtb3ZlZGZpbGUnLCBmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZWQgZmlsZTogJyArIGZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ3NlbmRpbmdtdWx0aXBsZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbignc3VjY2Vzc211bHRpcGxlJywgZnVuY3Rpb24oIC8qZmlsZXMsIHJlc3BvbnNlKi8gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKCdlcnJvcm11bHRpcGxlJywgZnVuY3Rpb24oIC8qZmlsZXMsIHJlc3BvbnNlKi8gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGRyb3B6b25lQXJlYSA9IG5ldyBEcm9wem9uZSgnI2Ryb3B6b25lLWFyZWEnLCBkcm9wem9uZU9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIlxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG5cclxuXHJcbiAgICAkKGluaXRXaXphcmQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRXaXphcmQoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi52YWxpZGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgZm9ybSA9ICQoXCIjZnJtSW5zY3JpcGNpb25cIik7XHJcbiAgICAgICAgZm9ybS52YWxpZGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiBlcnJvclBsYWNlbWVudChlcnJvciwgZWxlbWVudCkgeyBlbGVtZW50LmJlZm9yZShlcnJvcik7IH0sXHJcbiAgICAgICAgICAgIGxhbmc6ICdlcycsXHJcbiAgICAgICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICBjb25maXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXF1YWxUbzogXCIjcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBlbnRyZXZpc3RhSUQ6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9ybS5jaGlsZHJlbihcImRpdlwiKS5zdGVwcyh7XHJcbiAgICAgICAgICAgIGhlYWRlclRhZzogXCJoNFwiLFxyXG4gICAgICAgICAgICBib2R5VGFnOiBcImZpZWxkc2V0XCIsXHJcbiAgICAgICAgICAgIC8vdHJhbnNpdGlvbkVmZmVjdDogXCJzbGlkZUxlZnRcIixcclxuICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6IFwiQ2FuY2VsYXJcIixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IFwiUGFzbyBhY3R1YWw6XCIsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBcIlBhZ2luYWNp77+9blwiLFxyXG4gICAgICAgICAgICAgICAgZmluaXNoOiBcIkZpbmFsaXphclwiLFxyXG4gICAgICAgICAgICAgICAgbmV4dDogXCJTaWd1aWVudGVcIixcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzOiBcIkFudGVyaW9yXCIsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBcIkNhcmdhbmRvIC4uLlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uU3RlcENoYW5naW5nOiBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnRJbmRleCwgbmV3SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5hY3Rpb25zID4gdWwgPiBsaTpsYXN0LWNoaWxkIGEnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2Y4OTQwNicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS52YWxpZGF0ZSgpLnNldHRpbmdzLmlnbm9yZSA9IFwiOmRpc2FibGVkLDpoaWRkZW46bm90KCdzZWxlY3QuZm9ybS1jb250cm9sJylcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnZhbGlkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRmluaXNoaW5nOiBmdW5jdGlvbihldmVudCwgY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnZhbGlkYXRlKCkuc2V0dGluZ3MuaWdub3JlID0gXCI6ZGlzYWJsZWRcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnZhbGlkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uKGV2ZW50LCBjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiU3VibWl0dGVkIVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdWJtaXQgZm9ybVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICQoJy5jaG9zZW4tc2VsZWN0MzIxJykuY2hvc2VuKHtcclxuICAgICAgICAgICAgbm9fcmVzdWx0c190ZXh0OiBcIk5vIHNlIGVuY29udHJhcm9uIHJlc3VsdGFkb3NcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJfdGV4dF9zaW5nbGU6IFwiU2VsZWNjaW9uZSB1bmEgb3BjaVxcdTAwRjNuLi4uXCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGU6IFwiU2VsZWNjaW9uZSB1bmEgb3BjaVxcdTAwRjNuLi4uXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNlbGVjdDMyMScpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcDQnLFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFhlZGl0YWJsZSBEZW1vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0WEVkaXRhYmxlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0WEVkaXRhYmxlKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uZWRpdGFibGUpIHJldHVyblxyXG5cclxuICAgICAgICAvLyBGb250IEF3ZXNvbWUgc3VwcG9ydFxyXG4gICAgICAgICQuZm4uZWRpdGFibGVmb3JtLmJ1dHRvbnMgPVxyXG4gICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGVkaXRhYmxlLXN1Ym1pdFwiPicgK1xyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jaGVja1wiPjwvaT4nICtcclxuICAgICAgICAgICAgJzwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGVkaXRhYmxlLWNhbmNlbFwiPicgK1xyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS10aW1lc1wiPjwvaT4nICtcclxuICAgICAgICAgICAgJzwvYnV0dG9uPic7XHJcblxyXG4gICAgICAgIC8vZGVmYXVsdHNcclxuICAgICAgICAvLyQuZm4uZWRpdGFibGUuZGVmYXVsdHMudXJsID0gJ3VybC90by9zZXJ2ZXInO1xyXG5cclxuICAgICAgICAvL2VuYWJsZSAvIGRpc2FibGVcclxuICAgICAgICAkKCcjZW5hYmxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJyN1c2VyIC5lZGl0YWJsZScpLmVkaXRhYmxlKCd0b2dnbGVEaXNhYmxlZCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2VkaXRhYmxlc1xyXG4gICAgICAgICQoJyN1c2VybmFtZScpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgLy8gdXJsOiAndXJsL3RvL3NlcnZlcicsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgcGs6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6ICd1c2VybmFtZScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnRW50ZXIgdXNlcm5hbWUnLFxyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjZmlyc3RuYW1lJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkLnRyaW0odmFsdWUpID09PSAnJykgcmV0dXJuICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI3NleCcpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgcHJlcGVuZDogXCJub3Qgc2VsZWN0ZWRcIixcclxuICAgICAgICAgICAgc291cmNlOiBbXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiAxLCB0ZXh0OiAnTWFsZScgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IDIsIHRleHQ6ICdGZW1hbGUnIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGlzcGxheTogZnVuY3Rpb24odmFsdWUsIHNvdXJjZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb2xvcnMgPSB7IFwiXCI6IFwiZ3JheVwiLCAxOiBcImdyZWVuXCIsIDI6IFwiYmx1ZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9ICQuZ3JlcChzb3VyY2VEYXRhLCBmdW5jdGlvbihvKSB7IHJldHVybiBvLnZhbHVlID09IHZhbHVlOyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQoZWxlbVswXS50ZXh0KS5jc3MoXCJjb2xvclwiLCBjb2xvcnNbdmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjc3RhdHVzJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjZ3JvdXAnKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIHNob3didXR0b25zOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2RvYicpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2V2ZW50JykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIGNvbWJvZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgZmlyc3RJdGVtOiAnbmFtZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2NvbW1lbnRzJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBzaG93YnV0dG9uczogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNub3RlJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNwZW5jaWwnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnI25vdGUnKS5lZGl0YWJsZSgndG9nZ2xlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyN1c2VyIC5lZGl0YWJsZScpLm9uKCdoaWRkZW4nLCBmdW5jdGlvbihlLCByZWFzb24pIHtcclxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gJ3NhdmUnIHx8IHJlYXNvbiA9PT0gJ25vY2hhbmdlJykge1xyXG4gICAgICAgICAgICAgICAgdmFyICRuZXh0ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLm5leHQoKS5maW5kKCcuZWRpdGFibGUnKTtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYXV0b29wZW4nKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRuZXh0LmVkaXRhYmxlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG5leHQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUQUJMRVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJyN1c2VycyBhJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICd1c2VybmFtZScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnRW50ZXIgdXNlcm5hbWUnLFxyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsInZhciBmdW5jaW9uZXNfdmFyaWFzID0ge1xyXG5cclxuICAgIHNvbG9OdW1lcm9zOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICAgICBvYmoudmFsdWUgPSBvYmoudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG4gICAgfVxyXG59OyIsIi8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBNb2R1bGU6IGdtYXAuanNcclxuICogSW5pdCBHb29nbGUgTWFwIHBsdWdpblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRHb29nbGVNYXBzKTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBNYXAgU3R5bGUgZGVmaW5pdGlvblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gR2V0IG1vcmUgc3R5bGVzIGZyb20gaHR0cDovL3NuYXp6eW1hcHMuY29tL3N0eWxlLzI5L2xpZ2h0LW1vbm9jaHJvbWVcclxuICAgIC8vIC0gSnVzdCByZXBsYWNlIGFuZCBhc3NpZ24gdG8gJ01hcFN0eWxlcycgdGhlIG5ldyBzdHlsZSBhcnJheVxyXG4gICAgdmFyIE1hcFN0eWxlcyA9IFt7IGZlYXR1cmVUeXBlOiAnd2F0ZXInLCBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb24nIH0sIHsgY29sb3I6ICcjYmRkMWY5JyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAnYWxsJywgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJywgc3R5bGVyczogW3sgY29sb3I6ICcjMzM0MTY1JyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAnbGFuZHNjYXBlJywgc3R5bGVyczogW3sgY29sb3I6ICcjZTllYmYxJyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2M1YzZjNicgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3JvYWQuYXJ0ZXJpYWwnLCBlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3sgY29sb3I6ICcjZmZmJyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncm9hZC5sb2NhbCcsIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNmZmYnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICd0cmFuc2l0JywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2Q4ZGJlMCcgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3BvaScsIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNjZmQ1ZTAnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZScsIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvbicgfSwgeyBsaWdodG5lc3M6IDMzIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsIGVsZW1lbnRUeXBlOiAnbGFiZWxzJywgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29uJyB9LCB7IGxpZ2h0bmVzczogMjAgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3JvYWQnLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNkOGRiZTAnLCBsaWdodG5lc3M6IDIwIH1dIH1dO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0R29vZ2xlTWFwcygpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmdNYXApIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIG1hcFNlbGVjdG9yID0gJ1tkYXRhLWdtYXBdJztcclxuICAgICAgICB2YXIgZ01hcFJlZnMgPSBbXTtcclxuXHJcbiAgICAgICAgJChtYXBTZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzZXMgPSAkdGhpcy5kYXRhKCdhZGRyZXNzJykgJiYgJHRoaXMuZGF0YSgnYWRkcmVzcycpLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgICB0aXRsZXMgPSAkdGhpcy5kYXRhKCd0aXRsZScpICYmICR0aGlzLmRhdGEoJ3RpdGxlJykuc3BsaXQoJzsnKSxcclxuICAgICAgICAgICAgICAgIHpvb20gPSAkdGhpcy5kYXRhKCd6b29tJykgfHwgMTQsXHJcbiAgICAgICAgICAgICAgICBtYXB0eXBlID0gJHRoaXMuZGF0YSgnbWFwdHlwZScpIHx8ICdST0FETUFQJywgLy8gb3IgJ1RFUlJBSU4nXHJcbiAgICAgICAgICAgICAgICBtYXJrZXJzID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAoYWRkcmVzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhIGluIGFkZHJlc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWRkcmVzc2VzW2FdID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzZXNbYV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiAodGl0bGVzICYmIHRpdGxlc1thXSkgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogdHJ1ZSAvKiBBbHdheXMgcG9wdXAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbkNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnZpZXdNYXBDb250cm9sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwdHlwZTogbWFwdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzOiBtYXJrZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIHpvb206IHpvb21cclxuICAgICAgICAgICAgICAgICAgICAvLyBNb3JlIG9wdGlvbnMgaHR0cHM6Ly9naXRodWIuY29tL21hcmlvZXN0cmFkYS9qUXVlcnktZ01hcFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZ01hcCA9ICR0aGlzLmdNYXAob3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlZiA9IGdNYXAuZGF0YSgnZ01hcC5yZWZlcmVuY2UnKTtcclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgaW4gdGhlIG1hcCByZWZlcmVuY2VzIGxpc3RcclxuICAgICAgICAgICAgICAgIGdNYXBSZWZzLnB1c2gocmVmKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIHN0eWxlc1xyXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoJ3N0eWxlZCcpICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IE1hcFN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTsgLy9lYWNoXHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ3VzdG9tIGpRdWVyeVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRWZWN0b3JNYXApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRWZWN0b3JNYXAoKSB7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gJCgnW2RhdGEtdmVjdG9yLW1hcF0nKTtcclxuXHJcbiAgICAgICAgdmFyIHNlcmllc0RhdGEgPSB7XHJcbiAgICAgICAgICAgICdDQSc6IDExMTAwLCAvLyBDYW5hZGFcclxuICAgICAgICAgICAgJ0RFJzogMjUxMCwgLy8gR2VybWFueVxyXG4gICAgICAgICAgICAnRlInOiAzNzEwLCAvLyBGcmFuY2VcclxuICAgICAgICAgICAgJ0FVJzogNTcxMCwgLy8gQXVzdHJhbGlhXHJcbiAgICAgICAgICAgICdHQic6IDgzMTAsIC8vIEdyZWF0IEJyaXRhaW5cclxuICAgICAgICAgICAgJ1JVJzogOTMxMCwgLy8gUnVzc2lhXHJcbiAgICAgICAgICAgICdCUic6IDY2MTAsIC8vIEJyYXppbFxyXG4gICAgICAgICAgICAnSU4nOiA3ODEwLCAvLyBJbmRpYVxyXG4gICAgICAgICAgICAnQ04nOiA0MzEwLCAvLyBDaGluYVxyXG4gICAgICAgICAgICAnVVMnOiA4MzksIC8vIFVTQVxyXG4gICAgICAgICAgICAnU0EnOiA0MTAgLy8gU2F1ZGkgQXJhYmlhXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIG1hcmtlcnNEYXRhID0gW1xyXG4gICAgICAgICAgICB7IGxhdExuZzogWzQxLjkwLCAxMi40NV0sIG5hbWU6ICdWYXRpY2FuIENpdHknIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDMuNzMsIDcuNDFdLCBuYW1lOiAnTW9uYWNvJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWy0wLjUyLCAxNjYuOTNdLCBuYW1lOiAnTmF1cnUnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbLTguNTEsIDE3OS4yMV0sIG5hbWU6ICdUdXZhbHUnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNy4xMSwgMTcxLjA2XSwgbmFtZTogJ01hcnNoYWxsIElzbGFuZHMnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbMTcuMywgLTYyLjczXSwgbmFtZTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFszLjIsIDczLjIyXSwgbmFtZTogJ01hbGRpdmVzJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzM1Ljg4LCAxNC41XSwgbmFtZTogJ01hbHRhJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzQxLjAsIC03MS4wNl0sIG5hbWU6ICdOZXcgRW5nbGFuZCcgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxMi4wNSwgLTYxLjc1XSwgbmFtZTogJ0dyZW5hZGEnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbMTMuMTYsIC01OS41NV0sIG5hbWU6ICdCYXJiYWRvcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxNy4xMSwgLTYxLjg1XSwgbmFtZTogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbLTQuNjEsIDU1LjQ1XSwgbmFtZTogJ1NleWNoZWxsZXMnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNy4zNSwgMTM0LjQ2XSwgbmFtZTogJ1BhbGF1JyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzQyLjUsIDEuNTFdLCBuYW1lOiAnQW5kb3JyYScgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIG5ldyBWZWN0b3JNYXAoZWxlbWVudCwgc2VyaWVzRGF0YSwgbWFya2Vyc0RhdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEpWRUNUT1IgTUFQXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgLy8gQWxsb3cgR2xvYmFsIGFjY2Vzc1xyXG4gICAgd2luZG93LlZlY3Rvck1hcCA9IFZlY3Rvck1hcFxyXG5cclxuICAgIHZhciBkZWZhdWx0Q29sb3JzID0ge1xyXG4gICAgICAgIG1hcmtlckNvbG9yOiAnIzIzYjdlNScsIC8vIHRoZSBtYXJrZXIgcG9pbnRzXHJcbiAgICAgICAgYmdDb2xvcjogJ3RyYW5zcGFyZW50JywgLy8gdGhlIGJhY2tncm91bmRcclxuICAgICAgICBzY2FsZUNvbG9yczogWycjODc4YzlhJ10sIC8vIHRoZSBjb2xvciBvZiB0aGUgcmVnaW9uIGluIHRoZSBzZXJpZVxyXG4gICAgICAgIHJlZ2lvbkZpbGw6ICcjYmJiZWM2JyAvLyB0aGUgYmFzZSByZWdpb24gY29sb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gVmVjdG9yTWFwKGVsZW1lbnQsIHNlcmllc0RhdGEsIG1hcmtlcnNEYXRhKSB7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGF0dHJzID0gZWxlbWVudC5kYXRhKCksXHJcbiAgICAgICAgICAgIG1hcEhlaWdodCA9IGF0dHJzLmhlaWdodCB8fCAnMzAwJyxcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1hcmtlckNvbG9yOiBhdHRycy5tYXJrZXJDb2xvciB8fCBkZWZhdWx0Q29sb3JzLm1hcmtlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcjogYXR0cnMuYmdDb2xvciB8fCBkZWZhdWx0Q29sb3JzLmJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogYXR0cnMuc2NhbGUgfHwgMSxcclxuICAgICAgICAgICAgICAgIHNjYWxlQ29sb3JzOiBhdHRycy5zY2FsZUNvbG9ycyB8fCBkZWZhdWx0Q29sb3JzLnNjYWxlQ29sb3JzLFxyXG4gICAgICAgICAgICAgICAgcmVnaW9uRmlsbDogYXR0cnMucmVnaW9uRmlsbCB8fCBkZWZhdWx0Q29sb3JzLnJlZ2lvbkZpbGwsXHJcbiAgICAgICAgICAgICAgICBtYXBOYW1lOiBhdHRycy5tYXBOYW1lIHx8ICd3b3JsZF9taWxsX2VuJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBlbGVtZW50LmNzcygnaGVpZ2h0JywgbWFwSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaW5pdChlbGVtZW50LCBvcHRpb25zLCBzZXJpZXNEYXRhLCBtYXJrZXJzRGF0YSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoJGVsZW1lbnQsIG9wdHMsIHNlcmllcywgbWFya2Vycykge1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnQudmVjdG9yTWFwKHtcclxuICAgICAgICAgICAgICAgIG1hcDogb3B0cy5tYXBOYW1lLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBvcHRzLmJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB6b29tTWluOiAxLFxyXG4gICAgICAgICAgICAgICAgem9vbU1heDogOCxcclxuICAgICAgICAgICAgICAgIHpvb21PblNjcm9sbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZWdpb25TdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpbGwnOiBvcHRzLnJlZ2lvbkZpbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaWxsLW9wYWNpdHknOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLXdpZHRoJzogMS41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLW9wYWNpdHknOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmlsbC1vcGFjaXR5JzogMC44XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnYmx1ZSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSG92ZXI6IHt9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9jdXNPbjogeyB4OiAwLjQsIHk6IDAuNiwgc2NhbGU6IG9wdHMuc2NhbGUgfSxcclxuICAgICAgICAgICAgICAgIG1hcmtlclN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBvcHRzLm1hcmtlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IG9wdHMubWFya2VyQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25SZWdpb25MYWJlbFNob3c6IGZ1bmN0aW9uKGUsIGVsLCBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcmllcyAmJiBzZXJpZXNbY29kZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmh0bWwoZWwuaHRtbCgpICsgJzogJyArIHNlcmllc1tjb2RlXSArICcgdmlzaXRvcnMnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXJrZXJzOiBtYXJrZXJzLFxyXG4gICAgICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBzZXJpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBvcHRzLnNjYWxlQ29sb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVGdW5jdGlvbjogJ3BvbHlub21pYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IC8vIGVuZCBpbml0XHJcbiAgICB9O1xyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLyoqXHJcbiAqIFVzZWQgZm9yIHVzZXIgcGFnZXNcclxuICogTG9naW4gYW5kIFJlZ2lzdGVyXHJcbiAqL1xyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0UGFyc2xleUZvclBhZ2VzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UGFyc2xleUZvclBhZ2VzKCkge1xyXG5cclxuICAgICAgICAvLyBQYXJzbGV5IG9wdGlvbnMgc2V0dXAgZm9yIGJvb3RzdHJhcCB2YWxpZGF0aW9uIGNsYXNzZXNcclxuICAgICAgICB2YXIgcGFyc2xleU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGVycm9yQ2xhc3M6ICdpcy1pbnZhbGlkJyxcclxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnaXMtdmFsaWQnLFxyXG4gICAgICAgICAgICBjbGFzc0hhbmRsZXI6IGZ1bmN0aW9uIChQYXJzbGV5RmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9IFBhcnNsZXlGaWVsZC4kZWxlbWVudC5wYXJlbnRzKCcuZm9ybS1ncm91cCcpLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsLmxlbmd0aCkgLy8gc3VwcG9ydCBjdXN0b20gY2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBlbCA9IFBhcnNsZXlGaWVsZC4kZWxlbWVudC5wYXJlbnRzKCcuYy1jaGVja2JveCcpLmZpbmQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yc0NvbnRhaW5lcjogZnVuY3Rpb24gKFBhcnNsZXlGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNsZXlGaWVsZC4kZWxlbWVudC5wYXJlbnRzKCcuZm9ybS1ncm91cCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcnNXcmFwcGVyOiAnPGRpdiBjbGFzcz1cInRleHQtaGVscFwiPicsXHJcbiAgICAgICAgICAgIGVycm9yVGVtcGxhdGU6ICc8ZGl2PjwvZGl2PidcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLy8vIFJlZ2lzdGVyIGZvcm0gdmFsaWRhdGlvbiB3aXRoIFBhcnNsZXlcclxuICAgICAgICB2YXIgZm9ybUxvZ2luID0gJChcIiNmb3JtTG9naW5cIik7XHJcbiAgICAgICAgaWYgKGZvcm1Mb2dpbi5sZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcm1Mb2dpbi5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1MaXN0YXJBbW9ydGl6YWNpb24gPSAkKFwiI2Zvcm1MaXN0YXJBbW9ydGl6YWNpb25cIik7XHJcbiAgICAgICAgaWYgKGZvcm1MaXN0YXJBbW9ydGl6YWNpb24ubGVuZ3RoKVxyXG4gICAgICAgICAgICBmb3JtTGlzdGFyQW1vcnRpemFjaW9uLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgZm9ybUNhbWJpb0NsYXZlID0gJChcIiNmb3JtQ2FtYmlvQ2xhdmVcIik7XHJcbiAgICAgICAgaWYgKGZvcm1DYW1iaW9DbGF2ZS5sZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcm1DYW1iaW9DbGF2ZS5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1SZWN1cGVyYXJDbGF2ZSA9ICQoXCIjZm9ybVJlY3VwZXJhckNsYXZlXCIpO1xyXG4gICAgICAgIGlmIChmb3JtUmVjdXBlcmFyQ2xhdmUubGVuZ3RoKVxyXG4gICAgICAgICAgICBmb3JtUmVjdXBlcmFyQ2xhdmUucGFyc2xleShwYXJzbGV5T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciBmb3JtQ29udGFiaWxpemFyID0gJChcIiNmb3JtQ29udGFiaWxpemFyXCIpO1xyXG4gICAgICAgIGlmIChmb3JtQ29udGFiaWxpemFyLmxlbmd0aClcclxuICAgICAgICAgICAgZm9ybUNvbnRhYmlsaXphci5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1DcmVhckdsb2JhbCA9ICQoXCIjZm9ybUNyZWFyR2xvYmFsXCIpO1xyXG4gICAgICAgIGlmIChmb3JtQ3JlYXJHbG9iYWwubGVuZ3RoKVxyXG4gICAgICAgICAgICBmb3JtQ3JlYXJHbG9iYWwucGFyc2xleShwYXJzbGV5T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciBmb3JtRWRpdGFyR2xvYmFsID0gJChcIiNmb3JtRWRpdGFyR2xvYmFsXCIpO1xyXG4gICAgICAgIGlmIChmb3JtRWRpdGFyR2xvYmFsLmxlbmd0aClcclxuICAgICAgICAgICAgZm9ybUVkaXRhckdsb2JhbC5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1DcmVhck9yZGVuRGVDb21wcmEgPSAkKFwiI2Zvcm1DcmVhck9yZGVuRGVDb21wcmFcIik7XHJcbiAgICAgICAgaWYgKGZvcm1DcmVhck9yZGVuRGVDb21wcmEubGVuZ3RoKVxyXG4gICAgICAgICAgICBmb3JtQ3JlYXJPcmRlbkRlQ29tcHJhLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgZm9ybURpcmVjY2lvbkNhc2FHbG9iYWwgPSAkKFwiI2Zvcm1EaXJlY2Npb25DYXNhR2xvYmFsXCIpO1xyXG4gICAgICAgIGlmIChmb3JtRGlyZWNjaW9uQ2FzYUdsb2JhbC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcm1EaXJlY2Npb25DYXNhR2xvYmFsLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwidmFyIHNlY3VyaXR5X0luZGV4ID0ge1xyXG5cclxuICAgIGxvZ2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICAgICAkKFwiI2Zvcm1Mb2dpblwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcm0ucGFyc2xleSgpLnZhbGlkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucGFyc2xleSgpLmlzVmFsaWQoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9naW5WaWV3TW9kZWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRW1haWxcIjogJChcIiNlbWFpbFwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQYXNzd29yZFwiOiAkKFwiI3Bhc3N3b3JkXCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJlbWVtYmVyTWVcIjogJChcIiNyZW1lbWJlck1lXCIpLmlzKCc6Y2hlY2tlZCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9ICQoJ2lucHV0W25hbWU9XCJfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiXScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIganNvbkFQSTtcclxuICAgICAgICAgICAgICAgICAgICAkLmdldEpTT04oJ2h0dHBzOi8vaXBhcGkuY28vanNvbi8nLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uQVBJID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJvb3RIb3N0ICsgJ1NlY3VyaXR5L0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW46IHRva2VuLCBtb2RlbDogbG9naW5WaWV3TW9kZWwsIEpzb25BUEk6IGpzb25BUEkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5tc24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJvb3RIb3N0ICsgXCJIb21lL1dlbGNvbWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIlZhbGlkYWNpw7NuXCIsIHJlc3BvbnNlLm1zbiwgXCJ3YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMjAwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgcmVzcG9uc2UuZXJyb3IsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBcIkVycm9yIGVuIGVsIG3DqXRvZG8gbG9naW4gXFxuXCIgKyBleCwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxvZ09mZjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogcm9vdEhvc3QgKyAnU2VjdXJpdHkvTG9nT2ZmJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5tc24gPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJvb3RIb3N0ICsgXCJIb21lL0luZGV4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIHJlc3BvbnNlLm1zbiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuXHJcbiAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBcIkVycm9yIGVuIGVsIG3DqXRvZG8gbG9nT2ZmIFxcblwiICsgZXgsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvcmdvdFBhc3N3b3JkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICAgICAkKFwiI2Zvcm1SZWN1cGVyYXJDbGF2ZVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybS5wYXJzbGV5KCkudmFsaWRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5wYXJzbGV5KCkuaXNWYWxpZCgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWFpbCA9ICQoXCIjcmVzZXRJbnB1dEVtYWlsMVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gJCgnaW5wdXRbbmFtZT1cIl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJvb3RIb3N0ICsgJ1NlY3VyaXR5L0ZvcmdvdFBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbjogdG9rZW4sIEVtYWlsOiBlbWFpbCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubXNuLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk5vdGlmaWNhY2nDs25cIiwgcmVzcG9uc2UubXNuLCBcInN1Y2Nlc3NcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIHJlc3BvbnNlLmVycm9yLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIGV4LCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgXCJFcnJvciBlbiBlbCBtw6l0b2RvIGZvcmdvdFBhc3N3b3JkIFxcblwiICsgZXgsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07IiwiLyoqXHJcbiAqIENsYXNlIHF1ZSBjb250aWVuZSBsb3MgbcOpdG9kbyBwYXJhIGNyZWFyIHVuIHVzdWFyaW8uXHJcbiAqICovXHJcblxyXG5cclxudmFyIHNlY3VyaXR5X0NyZWFyVXN1YXJpbyA9IHtcclxuXHJcbiAgICBjcmVhclVzdWFyaW86IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgICQoXCIjZm9ybUNyZWFyR2xvYmFsXCIpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcm0ucGFyc2xleSgpLnZhbGlkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucGFyc2xleSgpLmlzVmFsaWQoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybUNyZWFyR2xvYmFsID0gJChcIiNmb3JtQ3JlYXJHbG9iYWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUNyZWFyR2xvYmFsWzBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcm9vdEhvc3QgKyAnU2VjdXJpdHkvQ3JlYXJVc3VhcmlvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm1zbiA9PT0gXCJzdWNjZXNzXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIk5vdGlmaWNhY2nDs25cIiwgXCJFbCB1c3VhcmlvIHNlIGNyZW8gY29ycmVjdGFtZW50ZSBlbiBlbCBzaXN0ZW1hLlwiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcm9vdEhvc3QgKyBcIkhvbWUvSW5kZXhcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgcmVzcG9uc2UuZXJyb3IsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgZXgsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBcIkVycm9yIGVuIGVsIG3DqXRvZG8gY3JlYXJVc3VhcmlvIFxcblwiICsgZXgsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn07IiwiJChkb2N1bWVudCkub24oJ2NoYW5nZScsICdbZGF0YS1jYXNjYWRlLWNvbWJvXScsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgIFxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNhc2NhZGUtY29tYm8nKTtcclxuXHJcbiAgICB2YXIgdXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNhc2NhZGUtY29tYm8tc291cmNlJyk7XHJcblxyXG4gICAgdmFyIHBhcmFtTmFtZSA9ICQodGhpcykuYXR0cignZGF0YS1jYXNjYWRlLWNvbWJvLXBhcmFtLW5hbWUnKTtcclxuXHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZGF0YVtwYXJhbU5hbWVdID0gaWQ7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7IGlkOiAkKHRoaXMpLnZhbCgpIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICQoaWQpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChkYXRhLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGluZGV4LCB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyB0eXBlLmlkICsgJ1wiPicgKyB0eXBlLk5vbWJyZSArICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICQoaWQpLmFwcGVuZChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xyXG5cclxuICAgICAgICAgICAgJChpZCkudHJpZ2dlcihcImNob3Nlbjp1cGRhdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2Zvcm0nKS5wYXJzbGV5KCk7XHJcbn0pO1xyXG53aW5kb3cuUGFyc2xleS5vbignZmllbGQ6ZXJyb3InLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUaGlzIGdsb2JhbCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBmb3IgYW55IGZpZWxkIHRoYXQgZmFpbHMgdmFsaWRhdGlvbi5cclxuICAgIHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnLnRhYi1wYW5lJykuYWRkQ2xhc3MoJ3ZhbGlkYXRpb25fZXJyb3InKTtcclxuICAgICQoJy50YWItY29udGVudCAudGFiLXBhbmUudmFsaWRhdGlvbl9lcnJvcjplcSgwKScpLmFkZENsYXNzKCdmaXJzdF90YWJfd2l0aF9lcnJvcnMnKTtcclxuICAgIGN1cnJlbnRfdGFiX2lkID0gJCgnLnRhYi1jb250ZW50IC50YWItcGFuZS52YWxpZGF0aW9uX2Vycm9yLmZpcnN0X3RhYl93aXRoX2Vycm9ycycpLmF0dHIoJ2lkJyk7XHJcbiAgICAkKCcubmF2LXRhYnMgYVtocmVmPVwiJyArICcjJyArIGN1cnJlbnRfdGFiX2lkICsgJ1wiXScpLnRhYignc2hvdycpO1xyXG4gICAgJCgnLm5hdi10YWJzIGFbaHJlZj1cIicgKyAnIycgKyAodGhpcy4kZWxlbWVudC5jbG9zZXN0KCcudGFiLXBhbmUnKS5hdHRyKCdpZCcpKSArICdcIl0nKS5hZGRDbGFzcygndmFsaWRhdGlvbl9lcnJvcnMnKTtcclxufSk7IFxyXG53aW5kb3cuUGFyc2xleS5vbignZmllbGQ6c3VjY2VzcycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFRoaXMgZ2xvYmFsIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGZvciBhbnkgZmllbGQgdGhhdCBmYWlscyB2YWxpZGF0aW9uLlxyXG4gICAgaWYgKHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnLnZhbGlkYXRpb25fZXJyb3InKS5jaGlsZHJlbigpLmZpbmQoJy5wYXJzbGV5LWVycm9yJykubGVuZ3RoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcubmF2LXRhYnMgYVtocmVmPVwiJyArICcjJyArICh0aGlzLiRlbGVtZW50LmNsb3Nlc3QoJy50YWItcGFuZScpLmF0dHIoJ2lkJykpICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd2YWxpZGF0aW9uX2Vycm9ycycpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpKTtcclxuICAgIH1cclxufSk7IiwiLy8gVW5vYnRydXNpdmUgQWpheCBzdXBwb3J0IGxpYnJhcnkgZm9yIGpRdWVyeVxyXG4vLyBDb3B5cmlnaHQgKEMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gQHZlcnNpb24gdjMuMi41XHJcbi8vIFxyXG4vLyBNaWNyb3NvZnQgZ3JhbnRzIHlvdSB0aGUgcmlnaHQgdG8gdXNlIHRoZXNlIHNjcmlwdCBmaWxlcyBmb3IgdGhlIHNvbGVcclxuLy8gcHVycG9zZSBvZiBlaXRoZXI6IChpKSBpbnRlcmFjdGluZyB0aHJvdWdoIHlvdXIgYnJvd3NlciB3aXRoIHRoZSBNaWNyb3NvZnRcclxuLy8gd2Vic2l0ZSBvciBvbmxpbmUgc2VydmljZSwgc3ViamVjdCB0byB0aGUgYXBwbGljYWJsZSBsaWNlbnNpbmcgb3IgdXNlXHJcbi8vIHRlcm1zOyBvciAoaWkpIHVzaW5nIHRoZSBmaWxlcyBhcyBpbmNsdWRlZCB3aXRoIGEgTWljcm9zb2Z0IHByb2R1Y3Qgc3ViamVjdFxyXG4vLyB0byB0aGF0IHByb2R1Y3QncyBsaWNlbnNlIHRlcm1zLiBNaWNyb3NvZnQgcmVzZXJ2ZXMgYWxsIG90aGVyIHJpZ2h0cyB0byB0aGVcclxuLy8gZmlsZXMgbm90IGV4cHJlc3NseSBncmFudGVkIGJ5IE1pY3Jvc29mdCwgd2hldGhlciBieSBpbXBsaWNhdGlvbiwgZXN0b3BwZWxcclxuLy8gb3Igb3RoZXJ3aXNlLiBJbnNvZmFyIGFzIGEgc2NyaXB0IGZpbGUgaXMgZHVhbCBsaWNlbnNlZCB1bmRlciBHUEwsXHJcbi8vIE1pY3Jvc29mdCBuZWl0aGVyIHRvb2sgdGhlIGNvZGUgdW5kZXIgR1BMIG5vciBkaXN0cmlidXRlcyBpdCB0aGVyZXVuZGVyIGJ1dFxyXG4vLyB1bmRlciB0aGUgdGVybXMgc2V0IG91dCBpbiB0aGlzIHBhcmFncmFwaC4gQWxsIG5vdGljZXMgYW5kIGxpY2Vuc2VzXHJcbi8vIGJlbG93IGFyZSBmb3IgaW5mb3JtYXRpb25hbCBwdXJwb3NlcyBvbmx5LlxyXG5cclxuLypqc2xpbnQgd2hpdGU6IHRydWUsIGJyb3dzZXI6IHRydWUsIG9uZXZhcjogdHJ1ZSwgdW5kZWY6IHRydWUsIG5vbWVuOiB0cnVlLCBlcWVxZXE6IHRydWUsIHBsdXNwbHVzOiB0cnVlLCBiaXR3aXNlOiB0cnVlLCByZWdleHA6IHRydWUsIG5ld2NhcDogdHJ1ZSwgaW1tZWQ6IHRydWUsIHN0cmljdDogZmFsc2UgKi9cclxuLypnbG9iYWwgd2luZG93OiBmYWxzZSwgalF1ZXJ5OiBmYWxzZSAqL1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICB2YXIgZGF0YV9jbGljayA9IFwidW5vYnRydXNpdmVBamF4Q2xpY2tcIixcclxuICAgICAgICBkYXRhX3RhcmdldCA9IFwidW5vYnRydXNpdmVBamF4Q2xpY2tUYXJnZXRcIixcclxuICAgICAgICBkYXRhX3ZhbGlkYXRpb24gPSBcInVub2J0cnVzaXZlVmFsaWRhdGlvblwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZ1bmN0aW9uKGNvZGUsIGFyZ05hbWVzKSB7XHJcbiAgICAgICAgdmFyIGZuID0gd2luZG93LCBwYXJ0cyA9IChjb2RlIHx8IFwiXCIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICB3aGlsZSAoZm4gJiYgcGFydHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZuID0gZm5bcGFydHMuc2hpZnQoKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgKGZuKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJnTmFtZXMucHVzaChjb2RlKTtcclxuICAgICAgICByZXR1cm4gRnVuY3Rpb24uY29uc3RydWN0b3IuYXBwbHkobnVsbCwgYXJnTmFtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTWV0aG9kUHJveHlTYWZlKG1ldGhvZCkge1xyXG4gICAgICAgIHJldHVybiBtZXRob2QgPT09IFwiR0VUXCIgfHwgbWV0aG9kID09PSBcIlBPU1RcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhc3luY09uQmVmb3JlU2VuZCh4aHIsIG1ldGhvZCkge1xyXG4gICAgICAgIGlmICghaXNNZXRob2RQcm94eVNhZmUobWV0aG9kKSkge1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtSFRUUC1NZXRob2QtT3ZlcnJpZGVcIiwgbWV0aG9kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXN5bmNPblN1Y2Nlc3MoZWxlbWVudCwgZGF0YSwgY29udGVudFR5cGUpIHtcclxuICAgICAgICB2YXIgbW9kZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LWphdmFzY3JpcHRcIikgIT09IC0xKSB7ICAvLyBqUXVlcnkgYWxyZWFkeSBleGVjdXRlcyBKYXZhU2NyaXB0IGZvciB1c1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb2RlID0gKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LW1vZGVcIikgfHwgXCJcIikudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAkKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LXVwZGF0ZVwiKSkuZWFjaChmdW5jdGlvbiAoaSwgdXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3A7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJCRUZPUkVcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKHVwZGF0ZSkucHJlcGVuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBRlRFUlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICQodXBkYXRlKS5hcHBlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUkVQTEFDRS1XSVRIXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJCh1cGRhdGUpLnJlcGxhY2VXaXRoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAkKHVwZGF0ZSkuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFzeW5jUmVxdWVzdChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGNvbmZpcm0sIGxvYWRpbmcsIG1ldGhvZCwgZHVyYXRpb247XHJcblxyXG4gICAgICAgIGNvbmZpcm0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYWpheC1jb25maXJtXCIpO1xyXG4gICAgICAgIGlmIChjb25maXJtICYmICF3aW5kb3cuY29uZmlybShjb25maXJtKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkaW5nID0gJChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYWpheC1sb2FkaW5nXCIpKTtcclxuICAgICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWxvYWRpbmctZHVyYXRpb25cIiksIDEwKSB8fCAwO1xyXG5cclxuICAgICAgICAkLmV4dGVuZChvcHRpb25zLCB7XHJcbiAgICAgICAgICAgIHR5cGU6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LW1ldGhvZFwiKSB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHVybDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtdXJsXCIpIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY2FjaGU6IChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYWpheC1jYWNoZVwiKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIixcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGFzeW5jT25CZWZvcmVTZW5kKHhociwgbWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGdldEZ1bmN0aW9uKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWJlZ2luXCIpLCBbXCJ4aHJcIl0pLmFwcGx5KGVsZW1lbnQsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcuc2hvdyhkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZy5oaWRlKGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGdldEZ1bmN0aW9uKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWNvbXBsZXRlXCIpLCBbXCJ4aHJcIiwgXCJzdGF0dXNcIl0pLmFwcGx5KGVsZW1lbnQsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICAgICAgYXN5bmNPblN1Y2Nlc3MoZWxlbWVudCwgZGF0YSwgeGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpIHx8IFwidGV4dC9odG1sXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2V0RnVuY3Rpb24oZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFqYXgtc3VjY2Vzc1wiKSwgW1wiZGF0YVwiLCBcInN0YXR1c1wiLCBcInhoclwiXSkuYXBwbHkoZWxlbWVudCwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGdldEZ1bmN0aW9uKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hamF4LWZhaWx1cmVcIiksIFtcInhoclwiLCBcInN0YXR1c1wiLCBcImVycm9yXCJdKS5hcHBseShlbGVtZW50LCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wdGlvbnMuZGF0YS5wdXNoKHsgbmFtZTogXCJYLVJlcXVlc3RlZC1XaXRoXCIsIHZhbHVlOiBcIlhNTEh0dHBSZXF1ZXN0XCIgfSk7XHJcblxyXG4gICAgICAgIG1ldGhvZCA9IG9wdGlvbnMudHlwZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGlmICghaXNNZXRob2RQcm94eVNhZmUobWV0aG9kKSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnR5cGUgPSBcIlBPU1RcIjtcclxuICAgICAgICAgICAgb3B0aW9ucy5kYXRhLnB1c2goeyBuYW1lOiBcIlgtSFRUUC1NZXRob2QtT3ZlcnJpZGVcIiwgdmFsdWU6IG1ldGhvZCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuYWpheChvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShmb3JtKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkYXRpb25JbmZvID0gJChmb3JtKS5kYXRhKGRhdGFfdmFsaWRhdGlvbik7XHJcbiAgICAgICAgcmV0dXJuICF2YWxpZGF0aW9uSW5mbyB8fCAhdmFsaWRhdGlvbkluZm8udmFsaWRhdGUgfHwgdmFsaWRhdGlvbkluZm8udmFsaWRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiYVtkYXRhLWFqYXg9dHJ1ZV1cIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFzeW5jUmVxdWVzdCh0aGlzLCB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5ocmVmLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBbXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImZvcm1bZGF0YS1hamF4PXRydWVdIGlucHV0W3R5cGU9aW1hZ2VdXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGV2dC50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgdGFyZ2V0ID0gJChldnQudGFyZ2V0KSxcclxuICAgICAgICAgICAgZm9ybSA9ICQodGFyZ2V0LnBhcmVudHMoXCJmb3JtXCIpWzBdKSxcclxuICAgICAgICAgICAgb2Zmc2V0ID0gdGFyZ2V0Lm9mZnNldCgpO1xyXG5cclxuICAgICAgICBmb3JtLmRhdGEoZGF0YV9jbGljaywgW1xyXG4gICAgICAgICAgICB7IG5hbWU6IG5hbWUgKyBcIi54XCIsIHZhbHVlOiBNYXRoLnJvdW5kKGV2dC5wYWdlWCAtIG9mZnNldC5sZWZ0KSB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IG5hbWUgKyBcIi55XCIsIHZhbHVlOiBNYXRoLnJvdW5kKGV2dC5wYWdlWSAtIG9mZnNldC50b3ApIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlRGF0YShkYXRhX2NsaWNrKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJmb3JtW2RhdGEtYWpheD10cnVlXSA6c3VibWl0XCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGV2dC5jdXJyZW50VGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgIHRhcmdldCA9ICQoZXZ0LnRhcmdldCksXHJcbiAgICAgICAgICAgIGZvcm0gPSAkKHRhcmdldC5wYXJlbnRzKFwiZm9ybVwiKVswXSk7XHJcblxyXG4gICAgICAgIGZvcm0uZGF0YShkYXRhX2NsaWNrLCBuYW1lID8gW3sgbmFtZTogbmFtZSwgdmFsdWU6IGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlIH1dIDogW10pO1xyXG4gICAgICAgIGZvcm0uZGF0YShkYXRhX3RhcmdldCwgdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlRGF0YShkYXRhX2NsaWNrKTtcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmVEYXRhKGRhdGFfdGFyZ2V0KTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKFwic3VibWl0XCIsIFwiZm9ybVtkYXRhLWFqYXg9dHJ1ZV1cIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIHZhciBjbGlja0luZm8gPSAkKHRoaXMpLmRhdGEoZGF0YV9jbGljaykgfHwgW10sXHJcbiAgICAgICAgICAgIGNsaWNrVGFyZ2V0ID0gJCh0aGlzKS5kYXRhKGRhdGFfdGFyZ2V0KSxcclxuICAgICAgICAgICAgaXNDYW5jZWwgPSBjbGlja1RhcmdldCAmJiAoY2xpY2tUYXJnZXQuaGFzQ2xhc3MoXCJjYW5jZWxcIikgfHwgY2xpY2tUYXJnZXQuYXR0cignZm9ybW5vdmFsaWRhdGUnKSAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIWlzQ2FuY2VsICYmICF2YWxpZGF0ZSh0aGlzKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jUmVxdWVzdCh0aGlzLCB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5hY3Rpb24sXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMubWV0aG9kIHx8IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGNsaWNrSW5mby5jb25jYXQoJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0oalF1ZXJ5KSk7XHJcbiIsInZhciB3YWl0aW5nRGlhbG9nID0gd2FpdGluZ0RpYWxvZyB8fCAoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBDcmVhdGluZyBtb2RhbCBkaWFsb2cncyBET01cclxuICAgIHZhciAkZGlhbG9nID0gJChcclxuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsXCIgZGF0YS1iYWNrZHJvcD1cInN0YXRpY1wiIGRhdGEta2V5Ym9hcmQ9XCJmYWxzZVwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9XCJwYWRkaW5nLXRvcDoyMCU7XCI+JyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbVwiPicgK1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiIHN0eWxlPVwiXCI+JyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJ3aGlybCBkdW9cIiBzdHlsZT1cIndpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206MDtcIj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgJzwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdMb2FkaW5nJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoe1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nU2l6ZTogJ20nLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NUeXBlOiAnJyxcclxuICAgICAgICAgICAgICAgIG9uSGlkZTogbnVsbCAvLyBUaGlzIGNhbGxiYWNrIHJ1bnMgYWZ0ZXIgdGhlIGRpYWxvZyB3YXMgaGlkZGVuXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29uZmlndXJpbmcgZGlhbG9nXHJcbiAgICAgICAgICAgICRkaWFsb2cuZmluZCgnLm1vZGFsLWRpYWxvZycpLmF0dHIoJ2NsYXNzJywgJ21vZGFsLWRpYWxvZycpLmFkZENsYXNzKCdtb2RhbC0nICsgc2V0dGluZ3MuZGlhbG9nU2l6ZSk7XHJcbiAgICAgICAgICAgICRkaWFsb2cuZmluZCgnLnByb2dyZXNzLWJhcicpLmF0dHIoJ2NsYXNzJywgJ3Byb2dyZXNzLWJhcicpO1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MucHJvZ3Jlc3NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAkZGlhbG9nLmZpbmQoJy5wcm9ncmVzcy1iYXInKS5hZGRDbGFzcygncHJvZ3Jlc3MtYmFyLScgKyBzZXR0aW5ncy5wcm9ncmVzc1R5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vJGRpYWxvZy5maW5kKCdoMycpLnRleHQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIEFkZGluZyBjYWxsYmFja3NcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5vbkhpZGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICRkaWFsb2cub2ZmKCdoaWRkZW4uYnMubW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkhpZGUuY2FsbCgkZGlhbG9nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkZGlhbG9nLm1vZGFsKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuXHRcdCAqIENsb3NlcyBkaWFsb2dcclxuXHRcdCAqL1xyXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkZGlhbG9nLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbn0pKGpRdWVyeSk7Il19

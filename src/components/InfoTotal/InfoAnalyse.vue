<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/dashboard' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item>信息综合</el-breadcrumb-item>
            <el-breadcrumb-item>数据分析</el-breadcrumb-item>
        </el-breadcrumb>
        <div id="main" style="width: 600px;height:400px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);float: left;margin-right: 45px;"></div>
        <div id="main2" style="width: 600px;height:450px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);float:left;"></div>
        <div id="main3" style="width: 600px;height:400px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);float:left;margin-top: -20px;margin-right: 40px;"></div>
        <div id="main4" style="width: 620px;height:500px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);float:left;margin-top: 30px;"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {}
        },
        mounted() {
            var option = {
                title: {
                    text: '日常打卡',
                    left: 'left'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: ['正常', '低热', '中度发热', '高热', '超高热']
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                series: [
                    {
                        name: '体温占比',
                        type: 'pie',
                        radius: [30, 110],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: [
                            {value: 100, name: '正常'},
                            {value: 25, name: '低热'},
                            {value: 2, name: '中度发热'},
                            {value: 1, name: '高热'},
                            {value: 1, name: '超高热'},
                        ]
                    }
                ]
            }
            var mychart = echarts.init(document.getElementById('main'));
            mychart.setOption(option);
            //------------------------------------------
            var posList = [
                'left', 'right', 'top', 'bottom',
                'inside',
                'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
                'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
            ];
            app.configParameters = {
                rotate: {
                    min: -90,
                    max: 90
                },
                align: {
                    options: {
                        left: 'left',
                        center: 'center',
                        right: 'right'
                    }
                },
                verticalAlign: {
                    options: {
                        top: 'top',
                        middle: 'middle',
                        bottom: 'bottom'
                    }
                },
                position: {
                    options: echarts.util.reduce(posList, function (map, pos) {
                        map[pos] = pos;
                        return map;
                    }, {})
                },
                distance: {
                    min: 0,
                    max: 100
                }
            };

            app.config = {
                rotate: 90,
                align: 'left',
                verticalAlign: 'middle',
                position: 'insideBottom',
                distance: 15,
                onChange: function () {
                    var labelOption = {
                        normal: {
                            rotate: app.config.rotate,
                            align: app.config.align,
                            verticalAlign: app.config.verticalAlign,
                            position: app.config.position,
                            distance: app.config.distance
                        }
                    };
                    myChart.setOption({
                        series: [{
                            label: labelOption
                        }, {
                            label: labelOption
                        }, {
                            label: labelOption
                        }, {
                            label: labelOption
                        }]
                    });
                }
            };


            var labelOption = {
                show: true,
                position: app.config.position,
                distance: app.config.distance,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                rotate: app.config.rotate,
                formatter: '{c}  {name|{a}}',
                fontSize: 16,
                rich: {
                    name: {
                        textBorderColor: '#fff'
                    }
                }
            };

            var option2 = {
                title: {
                    text: '健康信息',
                    left: 'left'
                },
                color: ['#003366', '#006699', '#4cabce', '#e5323e'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['健康', '正常', '良好', '亚健康']
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data: ['2020-1', '2020-2', '2020-3', '2020-4', '2020-5']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '健康',
                        type: 'bar',
                        barGap: 0,
                        label: labelOption,
                        data: [320, 332, 301, 334, 390]
                    },
                    {
                        name: '正常',
                        type: 'bar',
                        label: labelOption,
                        data: [220, 182, 191, 234, 290]
                    },
                    {
                        name: '良好',
                        type: 'bar',
                        label: labelOption,
                        data: [150, 232, 201, 154, 190]
                    },
                    {
                        name: '亚健康',
                        type: 'bar',
                        label: labelOption,
                        data: [98, 77, 101, 99, 40]
                    }
                ]
            };
            var mychart = echarts.init(document.getElementById('main2'));
            mychart.setOption(option2);
            //----------------------------------------------
            // Generate data
            var category = [];
            var dottedBase = +new Date();
            var lineData = [];
            var barData = [];

            for (var i = 0; i < 20; i++) {
                var date = new Date(dottedBase += 3600 * 24 * 1000);
                category.push([
                    date.getFullYear(),
                    date.getMonth() - 3,
                    date.getDate()
                ].join('-'));
                var b = Math.random() * 200;
                var d = Math.random() * 200;
                barData.push(b)
                lineData.push(d + b);
            }

            var option3 = {
                title: {
                    text: '外来人员登记',
                    left: 'left',
                    color: '#fff'
                },
                backgroundColor: '#0f375f',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['省内', '省外'],
                    textStyle: {
                        color: '#ccc'
                    }
                },
                xAxis: {
                    data: category,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                yAxis: {
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                series: [{
                    name: '省内',
                    type: 'line',
                    smooth: true,
                    showAllSymbol: true,
                    symbol: 'emptyCircle',
                    symbolSize: 15,
                    data: lineData
                }, {
                    name: '省外',
                    type: 'bar',
                    barWidth: 10,
                    itemStyle: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#14c8d4'},
                                {offset: 1, color: '#43eec6'}
                            ]
                        )
                    },
                    data: barData
                }, {
                    name: '正常',
                    type: 'bar',
                    barGap: '-100%',
                    barWidth: 10,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgba(20,200,212,0.5)'},
                                {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                                {offset: 1, color: 'rgba(20,200,212,0)'}
                            ]
                        )
                    },
                    z: -12,
                    data: lineData
                }, {
                    name: '发热',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    itemStyle: {
                        color: '#0f375f'
                    },
                    symbolRepeat: true,
                    symbolSize: [12, 4],
                    symbolMargin: 1,
                    z: -10,
                    data: lineData
                }]
            };
            var mychart = echarts.init(document.getElementById('main3'));
            mychart.setOption(option3);

            //-----------------------------------------------
            setTimeout(function () {
                var mychart = echarts.init(document.getElementById('main4'));
                var option4 = {
                    title: {
                        text: '综合',
                        left: 'left'
                    },
                    legend: {},
                    tooltip: {
                        trigger: 'axis',
                        showContent: false
                    },
                    dataset: {
                        source: [
                            ['product', '2020-1', '2020-2', '2020-3', '2020-4', '2020-5', '2020-6'],
                            ['体温正常', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                            ['健康', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                            ['省内', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                            ['发热', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                        ]
                    },
                    xAxis: {type: 'category'},
                    yAxis: {gridIndex: 0},
                    grid: {top: '55%'},
                    series: [
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {
                            type: 'pie',
                            id: 'pie',
                            radius: '30%',
                            center: ['50%', '25%'],
                            label: {
                                formatter: '{b}: {@2020} ({d}%)'
                            },
                            encode: {
                                itemName: 'product',
                                value: '2020',
                                tooltip: '2020'
                            }
                        }
                    ]
                };
                mychart.on('updateAxisPointer', function (event) {
                    var xAxisInfo = event.axesInfo[0];
                    if (xAxisInfo) {
                        var dimension = xAxisInfo.value + 1;
                        mychart.setOption({
                            series: {
                                id: 'pie',
                                label: {
                                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                                },
                                encode: {
                                    value: dimension,
                                    tooltip: dimension
                                }
                            }
                        });
                    }
                });
                mychart.setOption(option4);
            });
        }
    }
</script>

<style scoped>

</style>

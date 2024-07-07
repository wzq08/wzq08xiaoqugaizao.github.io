//图1js------
//图1的js-------------
var dom = document.getElementById('tu1');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

const data = {
  name: '老旧小区改造相关政策梳理',
  children: [
    {
      name: '2015起步阶段',
      children: [
        {
          name: '2015.06',
          children: [
            { name: '《国务院关于加快棚户区改造工作的意见》：首次提出城镇棚户区和城乡危房改造三年计划，预计改造各类棚户区住房1800万套' },
          ]
        },
        {
          name: '2015.12',
          children: [
            { name: '中央城市工作会议：首次明确加快老旧小区改造，各地加大资金投入，改造速度不断提升'},
          ]
        }
      ]
    },
    {
      name: '2016-2018 试点阶段 ',
      children: [
        {
          name: '2017.03',
          children: [
            { name: '《关于加强生态修复城市修补工作的指导意见》：填补城市设施欠账，增加公共空间，改善出行条件，改造老旧小区' },
          ]
        },
        {
          name: '2017.12',
          children: [
            { name: '《 住房城乡建设部关于推进老旧小区改造试点工作的通知》：住房和城乡建设部在广州、厦门、宁波等全国15个城市启动城镇老旧小区改造试点'},
          ]
        },
      ]
    },
    {
      name: '2019-2024全面开展阶段',
      children: [
        {
          name: '国家政策文件涉及老旧小区改造相关内容',
          children: [
            {
              name: '2019.02',
              children: [
                { name: '《关于在城乡人居环境建设和整治中开展美好环境与幸福生活共同缔造活动的指导意见》:发动社区居民参与老旧小区改造，解决改善小区绿化和道路环境、房前屋后环境整治等' }
              ]
            },
            {
              name: '2020.10',
              children: [
                { name: '《中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议》:推进以人为核心的新型城镇化，实施城市更新行动，加强城镇老旧小区改造和社区建设'}
              ]
            },
            {
              name: '2021.08',
              children: [
                { name: '《关于在实施城市更新行动中防止大拆大建问题的通知》:老旧小区改造实施进程开始提速'}
              ]
            },
            {
              name: '2023.07',
              children: [
                { name: '《关于在超大特大城市积极稳步推进城中村改造的指导意见》:要从实际出发，稳中求进、积极稳妥'}
              ]
            }
          ]
        },
        {
          name: '老旧小区改造专项国家政策文件',
          children: [
            {
              name: '2019.03',
              children: [
                { name: '《关于做好2019年老旧小区改造工作的通知》:将老旧小区改造纳入城镇保障性安居工程，从调查摸底、改造内容和标准、改造计划、改造实施四个方面提出老旧小区改造要求'}
              ]
            },
            {
              name: '2020.07',
              children: [
                { name: '《关于全面推进城镇老旧小区改造工作的指导意见》:推进以人为核心的新型城镇化，从总体要求、改造任务、实施机制、资金机制、配套政策、组织保障六个方面明确指导老旧小区改造'}
              ]
            },
            {
              name: '2020.08',
              children: [
                { name: '《关于开展城市居住社区建设补短板行动的意见》:合理确定居住社区规模 ，落实完整居住社区建设标准，因地制宜补齐既有居住社区建设短板。从总体要求、重点任务、组织实施三个方面提出城市居住社区建设意见'}
              ]
            },
            {
              name: '2021.12',
              children: [
                { name: '《关于进一步明确城镇老旧小区改造工作要求的通知》:推动城市更新和开发建设方式转型，从底线要求、难题攻克、完善机制三方面提出老旧小区改造要求'}
              ]
            },
            {
              name: '2024.05',
              children: [
                { name: '《关于进一步加强规划土地政策支持老旧小区改造更新工作的通知》:明确老旧小区改造中应当补足的公共服务设施和基础设施'}
              ]
            }
          ]
        },
        {
          name: '中央会议报告涉及老旧小区改造相关内容',
          children: [
            {
              name: '2019.03',
              children: [
                { name: '全国两会· 政府工作报告:城镇老旧小区要大力进行改造提升，更新配套设施，增加服务设施'}
              ]
            },
            {
              name: '2019.07',
              children: [
                { name: '国新办政策吹风会:做好老旧小区改造，补齐其在卫生防疫、社区服务等方面的短板'}
              ]
            },
            {
              name: '2019.07',
              children: [
                { name: '中央政治局会议:实施老旧小区改造、城市停车场、城乡冷链物流设施建设等补短板工程'}
              ]
            },
            {
              name: '2020.04',
              children: [
                { name: '国务院常务会议:推进城镇老旧小区改造，是改善居民居住条件、扩大内需的重要举措'}
              ]
            },
            {
              name: '2022.03',
              children: [
                { name: '全国两会· 政府工作报告:再开工改造一批城镇老旧小区，推进无障碍环境建设和适老化改造'}
              ]
            },
            {
              name: '2023.03',
              children: [
                { name: '全国两会·政府工作报告：保障基本民生和发展社会事业。加强住房保障体系建设，支持刚性和改善性住房需求，解决好新市民、青年人等住房问题，加快推进老旧小区和危旧房改造'}
              ]
            },
            {
              name: '2024.03',
              children: [
                { name: '全国两会·政府工作报告：推动解决老旧小区加装电梯、停车等难题，加强无障碍、适老化设施建设，打造宜居、智慧、韧性城市'}
              ]
            }
          ]
        },
      ]
    },

  ]
};
option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [
    {
      type: 'tree',
      id: 0,
      name: 'tree1',
      data: [data],
      top: '1%',
      left: '10%', // 调整左边距
      bottom: '1%',
      right: '10%', // 调整右边距
      symbolSize: 10,
      edgeShape: 'polyline',
      edgeForkPosition: '63%',
      initialTreeDepth: 3,
      lineStyle: {
        width: 7
      },
      label: {
        backgroundColor: '#fff',
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
        fontSize: 14,
        padding: [6, 10],
        formatter: function (params) {
          return params.name.length > 25 ? params.name.slice(0, 25) + '\n' + params.name.slice(25) : params.name;
        }
      },
      leaves: {
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
          fontSize: 14,
          padding: [6, 10],
          formatter: function (params) {
            return params.name.length > 25 ? params.name.slice(0, 25) + '\n' + params.name.slice(25) : params.name;
          }
        }
      },
      emphasis: {
        focus: 'descendant'
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750,
      nodeGap: 20 // 调整节点间的垂直间距
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);



//图2js------
//图2的js-------------
var dom = document.getElementById('tu2');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  xAxis: {
    type: 'category',
    data: ['河北', '上海', '山东', '兵团', '北京', '内蒙古', '新疆', '贵州', '山西', '广东', '西藏', '海南']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        86,
        {
          value: 89.2,
          itemStyle: {
            color: '#a90000'
          }
        },
        72.4,
        68.9,
        64.8,
        64,
        60.1,
        17.9,
        17.60,
        16.9,
        1.3
      ],
      type: 'bar'
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);

//图3js------
//图3的js-------------

    var dom = document.getElementById('tu3');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  title: {
    text: '2024全国城镇老旧小区改造进展情况'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '2%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['新疆', '青海', '海南','吉林','西藏','河南','山西','广西','湖南','贵州','安徽','宁夏','甘肃','内蒙古','福建','黑龙江','兵团','四川','广东','陕西','天津','江西','云南','湖北','重庆','北京','上海','辽宁','浙江','江苏','河北','山东']
  },
  series: [
    {
      backgroundColor: '#efc5ae',
      name: '新开工小区数（个）',
      type: 'bar',
      data: [0,0,0,0,2,83,108,114,536,102,201,36,67,280,369,335,33,2073,622,654,69,360,914,2632,1169,192,153,573,361,683,869,3223]
    },
    {
      name: '开工率(%)',
      type: 'bar',
      data: [0,0,0,0,1.1,3.3,5.5,8.3,10,10.6,13.1,13.7,14.7,16,18.4,23.6,24.3,24.3,24.9,24.9,25.1,26.8,31.8,40.6,44.6,48,51,62.6,62.7,65.9,78.5,79.8]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);


          
//图5js------
//图5的js-------------
var dom = document.getElementById('tu5');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option = {
    title: {
        text: '关于“小区改造”的裁判文书数量年份变化',
        left: 'left', // 标题居左
        top: '1%', // 距离顶部距离
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold'
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        position: 'bottom' // x 轴位置在底部
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [1, 3, 6, 14, 43, 200, 274, 451, 529, 646, 678, 1111, 1420, 1052, 781, 222],
            type: 'line',
            lineStyle: {
                color: '#ba5140' // 设置线条颜色
            },
            areaStyle: {
                color: '#ba5140' // 设置区域颜色
            },
            itemStyle: {
                color: '#ba5140' // 设置点的颜色
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 100
        },
        {
            show: true,
            type: 'slider',
            y: '90%',
            start: 0,
            end: 100
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);



//图6js------
//图6的js-------------


var dom = document.getElementById('tu6');
                  var myChart = echarts.init(dom, null, {
                    renderer: 'canvas',
                    useDirtyRect: false
                  });
                  var app = {};
                  
                  var option;
              
                  option = {
                tooltip: {
                  trigger: 'item',
                  formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                  data: ['刑事案由', '民事案由', '执行案由', '国家赔偿案由', '行政案由']
                },
                series: [
                  {
                    name: '法院层级',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                      position: 'inner',
                      fontSize: 14
                    },
                    labelLine: {
                      show: false
                    },
                    data: [
                        {name: '最高法院', value: 14, itemStyle: {color: '#ba5140'}},
                        {name: '高级法院', value: 212, itemStyle: {color: '#ba5b49'}},
                        {name: '中级法院', value: 2027, itemStyle: {color: '#a64036'}},
                        {name: '基层法院', value: 5167, itemStyle: {color: '#9e2a22'}}
              
                
              ]
                  },
                  {
                    name: '案由',
                    type: 'pie',
                    radius: ['45%', '60%'],
                    labelLine: {
                      length: 30
                    },
                    label: {
                      formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                      backgroundColor: '#F6F8FC',
                      borderColor: '#a54e3b',
                      borderWidth: 1,
                      borderRadius: 4,
                      rich: {
                        a: {
                          color: '#a54e3b',
                          lineHeight: 22,
                          align: 'center'
                        },
                        hr: {
                          borderColor: '#8C8D8E',
                          width: '100%',
                          borderWidth: 1,
                          height: 0
                        },
                        b: {
                          color: '#a54e3b',
                          fontSize: 14,
                          fontWeight: 'bold',
                          lineHeight: 33
                        },
                        per: {
                          color: '#fff',
                          backgroundColor: '#a54e3b',
                          padding: [3, 4],
                          borderRadius: 4
                        }
                      }
                    },
                    data: [{name: '刑事案由', value: 275, itemStyle: {color: '#cb947f'}},
                      {name: '民事案由', value: 6179, itemStyle: {color: '#983023'}},
                      {name: '执行案由', value: 104, itemStyle: {color: '#efc5ae'}},
                      {name: '国家赔偿案由', value: 20, itemStyle: {color: '#cf594b'}},
                      {name: '行政案由', value: 615, itemStyle: {color: '#a54e3b'}}]
                    
                  }
                ]
              };
              
                  if (option && typeof option === 'object') {
                    myChart.setOption(option);
                  }
              
                  window.addEventListener('resize', myChart.resize);

// 对echarts进行自适应的优化 -------------

//根据窗口的大小变动图表 --- 重点
window.onresize = function(){
    myChart.resize();
    myChart1.resize();
    //myChart1.resize();若有多个图表变动，可多写
}
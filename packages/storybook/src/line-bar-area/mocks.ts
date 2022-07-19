import { metrikaTheme } from '@metrika/metrika-charts';
import { LineBarAreaData, LineBarAreaProps } from '@metrika/metrika-charts/build/charts/line-bar-area/data';

const data: LineBarAreaData = [
   [
      [1636965000000, 3054],
      [1636965900000, 3588],
      [1636966800000, 3102],
      [1636967700000, 2877],
      [1636968600000, 2913],
      [1636969500000, 3169],
      [1636970400000, 2656],
      [1636971300000, 2800],
      [1636972200000, 2723],
      [1636973100000, 3153],
      [1636974000000, 2916],
      [1636974900000, 2925],
      [1636975800000, 3818],
      [1636976700000, 3323],
      [1636977600000, 2538],
      [1636978500000, 2457],
      [1636979400000, 2790],
      [1636980300000, 2523],
      [1636981200000, 2320],
      [1636982100000, 2288],
      [1636983000000, 2214],
      [1636983900000, 2603],
      [1636984800000, 2029],
      [1636985700000, 2034],
      [1636986600000, 1912],
      [1636987500000, 2035],
      [1636988400000, 1899],
      [1636989300000, 1903],
      [1636990200000, 1797],
      [1636991100000, 2050],
      [1636992000000, 1949],
      [1636992900000, 1956],
      [1636993800000, 1964],
      [1636994700000, 2292],
      [1636995600000, 2300],
      [1636996500000, 2258],
      [1636997400000, 2105],
      [1636998300000, 2340],
      [1636999200000, 2313],
      [1637000100000, 3081],
      [1637001000000, 3636],
      [1637001900000, 3071],
      [1637002800000, 2510],
      [1637003700000, 2474],
      [1637004600000, 2356],
      [1637005500000, 2525],
      [1637006400000, 2388],
      [1637007300000, 2362],
      [1637008200000, 2088],
      [1637009100000, 2187],
      [1637010000000, 2154],
      [1637010900000, 2054],
      [1637011800000, 2050],
      [1637012700000, 2299],
      [1637013600000, 1745],
      [1637014500000, 1743],
      [1637015400000, 1583],
      [1637016300000, 1763],
      [1637017200000, 1794],
      [1637018100000, 1739],
      [1637019000000, 1846],
      [1637019900000, 2020],
      [1637020800000, 1515],
      [1637021700000, 1171],
      [1637022600000, 1260],
      [1637023500000, 1438],
      [1637024400000, 1269],
      [1637025300000, 1218],
      [1637026200000, 1312],
      [1637027100000, 1493],
      [1637028000000, 1245],
      [1637028900000, 1206],
      [1637029800000, 1248],
      [1637030700000, 1286],
      [1637031600000, 1144],
      [1637032500000, 1208],
      [1637033400000, 1220],
      [1637034300000, 1402],
      [1637035200000, 1203],
      [1637036100000, 1277],
      [1637037000000, 1237],
      [1637037900000, 1346],
      [1637038800000, 1325],
      [1637039700000, 2973],
      [1637040600000, 1402],
      [1637041500000, 1368],
      [1637042400000, 1753],
      [1637043300000, 1331],
      [1637044200000, 1366],
      [1637045100000, 1616],
      [1637046000000, 1536],
      [1637046900000, 1543],
      [1637047800000, 1402],
      [1637048700000, 1646],
      [1637049600000, 1468],
      [1637050500000, 1589],
      [1637051400000, 1522],
   ],
   [
      [1636965000000, 13138],
      [1636965900000, 10343],
      [1636966800000, 11771],
      [1636967700000, 10905],
      [1636968600000, 10880],
      [1636969500000, 12792],
      [1636970400000, 9261],
      [1636971300000, 13446],
      [1636972200000, 7907],
      [1636973100000, 13765],
      [1636974000000, 9703],
      [1636974900000, 11884],
      [1636975800000, 11467],
      [1636976700000, 12427],
      [1636977600000, 11862],
      [1636978500000, 10286],
      [1636979400000, 12133],
      [1636980300000, 8387],
      [1636981200000, 10742],
      [1636982100000, 7659],
      [1636983000000, 10482],
      [1636983900000, 9735],
      [1636984800000, 9398],
      [1636985700000, 10221],
      [1636986600000, 8125],
      [1636987500000, 11138],
      [1636988400000, 6945],
      [1636989300000, 9907],
      [1636990200000, 7619],
      [1636991100000, 10380],
      [1636992000000, 8743],
      [1636992900000, 8746],
      [1636993800000, 10367],
      [1636994700000, 7736],
      [1636995600000, 11297],
      [1636996500000, 7249],
      [1636997400000, 10046],
      [1636998300000, 9002],
      [1636999200000, 9164],
      [1637000100000, 11053],
      [1637001000000, 9032],
      [1637001900000, 11437],
      [1637002800000, 7173],
      [1637003700000, 10384],
      [1637004600000, 8001],
      [1637005500000, 9342],
      [1637006400000, 9243],
      [1637007300000, 8597],
      [1637008200000, 10376],
      [1637009100000, 7632],
      [1637010000000, 10715],
      [1637010900000, 8664],
      [1637011800000, 10335],
      [1637012700000, 10410],
      [1637013600000, 8614],
      [1637014500000, 10004],
      [1637015400000, 7939],
      [1637016300000, 12128],
      [1637017200000, 7559],
      [1637018100000, 9627],
      [1637019000000, 7887],
      [1637019900000, 7554],
      [1637020800000, 8186],
      [1637021700000, 6568],
      [1637022600000, 9984],
      [1637023500000, 6613],
      [1637024400000, 9308],
      [1637025300000, 7352],
      [1637026200000, 8538],
      [1637027100000, 8952],
      [1637028000000, 7619],
      [1637028900000, 9173],
      [1637029800000, 7524],
      [1637030700000, 9883],
      [1637031600000, 7341],
      [1637032500000, 9305],
      [1637033400000, 8646],
      [1637034300000, 8114],
      [1637035200000, 8548],
      [1637036100000, 6763],
      [1637037000000, 10516],
      [1637037900000, 6659],
      [1637038800000, 10091],
      [1637039700000, 8763],
      [1637040600000, 10195],
      [1637041500000, 10100],
      [1637042400000, 8823],
      [1637043300000, 10852],
      [1637044200000, 7293],
      [1637045100000, 12168],
      [1637046000000, 6856],
      [1637046900000, 11956],
      [1637047800000, 8727],
      [1637048700000, 10623],
      [1637049600000, 10118],
      [1637050500000, 8688],
      [1637051400000, 11305],
   ],
];

export const LineBarMock1: LineBarAreaProps = {
   meta: {
      domainUnit: 'datetime',
      seriesId: ['sender_count', 'receiver_count'],
      seriesInfo: {
         sender_count: {
            type: 'line',
            name: 'Sender count',
            color: '#3096D8',
         },
         receiver_count: {
            type: 'line',
            name: 'Receiver Count',
            color: '#8DCFF2',
         },
      },
      axes: [
         {
            position: 'bottom',
         },
         {
            position: 'left',
            displayUnit: 'number',
            gridLines: true,
         },
      ],
   },
   data,
};
export const LineBarMock2: LineBarAreaProps = {
   meta: {
      domainUnit: 'datetime',
      seriesId: ['sender_count', 'receiver_count'],
      seriesInfo: {
         sender_count: {
            type: 'bar',
            name: 'Sender count',
            color: '#3096D8',
         },
         receiver_count: {
            type: 'bar',
            name: 'Receiver Count',
            color: '#8DCFF2',
         },
      },
      axes: [
         {
            position: 'bottom',
         },
         {
            position: 'left',
            displayUnit: 'number',
            gridLines: true,
         },
      ],
   },
   data,
};
export const LineBarMock3: LineBarAreaProps = {
   meta: {
      domainUnit: 'datetime',
      seriesId: ['sender_count', 'receiver_count'],
      seriesInfo: {
         sender_count: {
            type: 'bar',
            subType: 'grouped',
            name: 'Sender count',
            color: '#3096D8',
         },
         receiver_count: {
            type: 'bar',
            subType: 'grouped',
            name: 'Receiver Count',
            color: '#8DCFF2',
         },
      },
      axes: [
         {
            position: 'bottom',
         },
         {
            position: 'left',
            displayUnit: 'number',
            gridLines: true,
         },
      ],
   },
   data,
};
export const LineBarMock4: LineBarAreaProps = {
   meta: {
      domainUnit: 'datetime',
      seriesId: ['sender_count', 'receiver_count'],
      seriesInfo: {
         sender_count: {
            type: 'bar',
            name: 'Sender count',
            color: '#3096D8',
         },
         receiver_count: {
            type: 'line',
            name: 'Receiver Count',
            color: '#8DCFF2',
         },
      },
      axes: [
         {
            position: 'bottom',
         },
         {
            position: 'left',
            displayUnit: 'number',
            gridLines: true,
         },
      ],
   },
   data,
};
export const LineBarMock41: LineBarAreaProps = {
   meta: {
      domainUnit: 'datetime',
      seriesId: ['sender_count', 'receiver_count'],
      seriesInfo: {
         sender_count: {
            type: 'bar',
            name: 'Sender count',
            color: '#3096D8',
         },
         receiver_count: {
            type: 'line',
            name: 'Receiver Count',
            color: '#8DCFF2',
            axisName: 'y2',
         },
      },
      axes: [
         {
            position: 'bottom',
         },
         {
            position: 'left',
            displayUnit: 'percent',
            gridLines: false,
         },
         {
            position: 'right',
            displayUnit: 'number',
            gridLines: false,
            axisName: 'y2',
         },
      ],
   },
   data,
};
export const LineBarMock5: LineBarAreaProps = {
   meta: {
      domainUnit: 'datetime',
      seriesId: ['total_online_voting_stake_percentage'],
      seriesInfo: {
         total_online_voting_stake_percentage: {
            type: 'line',
            name: 'Online voting stake',
            color: '#3096D8',
         },
      },
      axes: [
         {
            position: 'bottom',
         },
         {
            position: 'left',
            displayUnit: 'percent',
            gridLines: true,
            domain: {
               fit: true,
               padPercent: 0.01,
            },
         },
      ],
   },
   data: [
      [
         [1639954800000, 0.9800000190734863],
         [1639958400000, 0.9800000190734863],
         [1639962000000, 0.9800000190734863],
         [1639965600000, 0.9800000190734863],
         [1639969200000, 0.9800000190734863],
         [1639972800000, 0.9800000190734863],
         [1639976400000, 0.9800000190734863],
         [1639980000000, 0.9800000190734863],
         [1639983600000, 0.9800000190734863],
         [1639987200000, 0.9800000190734863],
         [1639990800000, 0.9800000190734863],
         [1639994400000, 0.9800000190734863],
         [1639998000000, 0.9800000190734863],
         [1640001600000, 0.9800000190734863],
         [1640005200000, 0.9800000190734863],
         [1640008800000, 0.9800000190734863],
         [1640012400000, 0.9800000190734863],
         [1640016000000, 0.9800000190734863],
         [1640019600000, 0.9800000190734863],
         [1640023200000, 0.9800000190734863],
         [1640026800000, 0.9800000190734863],
         [1640030400000, 0.9800000190734863],
         [1640034000000, 0.9800000190734863],
         [1640037600000, 0.9800000190734863],
         [1640041200000, 0.9800000190734863],
      ],
   ],
};

const data2 = [
   {
      '@timestamp': '2021-12-20T00:00:00.000Z',
      total_transactions: 10000,
      incoming_node_fee: 2,
      incoming_transfer: 10,
      incoming_network_fee: 5,
   },
   {
      '@timestamp': '2021-12-19T00:00:00.000Z',
      total_transactions: 8000,
      incoming_node_fee: 1,
      incoming_transfer: 50,
      incoming_network_fee: 6,
   },
   {
      '@timestamp': '2021-12-18T00:00:00.000Z',
      total_transactions: 10000,
      incoming_node_fee: 4,
      incoming_transfer: 33,
      incoming_network_fee: 5,
   },
   {
      '@timestamp': '2021-12-17T00:00:00.000Z',
      total_transactions: 5000,
      incoming_node_fee: 3,
      incoming_transfer: 9,
      incoming_network_fee: 4,
   },
   {
      '@timestamp': '2021-12-16T00:00:00.000Z',
      total_transactions: 20000,
      incoming_node_fee: 2,
      incoming_transfer: 24,
      incoming_network_fee: 5,
   },
   {
      '@timestamp': '2021-12-15T00:00:00.000Z',
      total_transactions: 15000,
      incoming_node_fee: 2,
      incoming_transfer: 10,
      incoming_network_fee: 5,
   },
   {
      '@timestamp': '2021-12-14T00:00:00.000Z',
      total_transactions: 1000,
      incoming_node_fee: 1,
      incoming_transfer: 35,
      incoming_network_fee: 4,
   },
   {
      '@timestamp': '2021-12-13T00:00:00.000Z',
      total_transactions: 100,
      incoming_node_fee: 3,
      incoming_transfer: 33,
      incoming_network_fee: 3,
   },
   {
      '@timestamp': '2021-12-12T00:00:00.000Z',
      total_transactions: 70000,
      incoming_node_fee: 1,
      incoming_transfer: 15,
      incoming_network_fee: 6,
   },
   {
      '@timestamp': '2021-12-11T00:00:00.000Z',
      total_transactions: 4000,
      incoming_node_fee: 2,
      incoming_transfer: 73,
      incoming_network_fee: 7,
   },
   {
      '@timestamp': '2021-12-10T00:00:00.000Z',
      total_transactions: 30000,
      incoming_node_fee: 1,
      incoming_transfer: 23,
      incoming_network_fee: 4,
   },
   {
      '@timestamp': '2021-12-09T00:00:00.000Z',
      total_transactions: 10000,
      incoming_node_fee: 1,
      incoming_transfer: 15,
      incoming_network_fee: 5,
   },
   {
      '@timestamp': '2021-12-08T00:00:00.000Z',
      total_transactions: 25000,
      incoming_node_fee: 2,
      incoming_transfer: 10,
      incoming_network_fee: 4,
   },
];
const data3: LineBarAreaData = [
   data2.reverse().map((d) => [new Date(d['@timestamp']).getTime(), d.total_transactions]),
   data2.reverse().map((d) => [new Date(d['@timestamp']).getTime(), d.incoming_node_fee]),
   data2.reverse().map((d) => [new Date(d['@timestamp']).getTime(), d.incoming_transfer]),
   data2.reverse().map((d) => [new Date(d['@timestamp']).getTime(), d.incoming_network_fee]),
];

export const LineBarMock42: LineBarAreaProps = {
   meta: {
      domainUnit: 'datetime',
      seriesId: ['total_transactions', 'incoming_node_fee', 'incoming_transfer', 'incoming_network_fee'],
      seriesInfo: {
         total_transactions: {
            type: 'line',
            name: 'Total transactions',
            color: metrikaTheme.data.colors[1],
            axisName: 'y2',
         },
         incoming_node_fee: {
            type: 'bar',
            name: 'Incoming node fee',
            color: metrikaTheme.data.colors[0],
         },
         incoming_transfer: {
            type: 'bar',
            name: 'Incoming transfer',
            color: metrikaTheme.data.colors[2],
         },
         incoming_network_fee: {
            type: 'bar',
            name: 'Incoming network fee',
            color: metrikaTheme.data.colors[3],
         },
      },
      axes: [
         {
            position: 'bottom',
         },
         {
            position: 'left',
            displayUnit: 'number',
            gridLines: false,
         },
         {
            position: 'right',
            displayUnit: 'number',
            gridLines: false,
            axisName: 'y2',
         },
      ],
   },
   data: data3,
};

// area
const rawAreaData = [
   { '@timestamp': '2021-12-18T00:00:00.000Z', node: '0.0.3', transactions: 100 },
   { '@timestamp': '2021-12-18T00:00:00.000Z', node: 'Rest of Network', transactions: 2000 },
   { '@timestamp': '2021-12-17T00:00:00.000Z', node: '0.0.3', transactions: 240 },
   { '@timestamp': '2021-12-17T00:00:00.000Z', node: 'Rest of Network', transactions: 2000 },
   { '@timestamp': '2021-12-16T00:00:00.000Z', node: '0.0.3', transactions: 210 },
   { '@timestamp': '2021-12-16T00:00:00.000Z', node: 'Rest of Network', transactions: 2000 },
   { '@timestamp': '2021-12-15T00:00:00.000Z', node: '0.0.3', transactions: 120 },
   { '@timestamp': '2021-12-15T00:00:00.000Z', node: 'Rest of Network', transactions: 2000 },
   { '@timestamp': '2021-12-14T00:00:00.000Z', node: '0.0.3', transactions: 310 },
   { '@timestamp': '2021-12-14T00:00:00.000Z', node: 'Rest of Network', transactions: 2000 },
   { '@timestamp': '2021-12-13T00:00:00.000Z', node: '0.0.3', transactions: 190 },
   { '@timestamp': '2021-12-13T00:00:00.000Z', node: 'Rest of Network', transactions: 2000 },
   { '@timestamp': '2021-12-12T00:00:00.000Z', node: '0.0.3', transactions: 410 },
   { '@timestamp': '2021-12-12T00:00:00.000Z', node: 'Rest of Network', transactions: 2000 },
   { '@timestamp': '2021-12-11T00:00:00.000Z', node: '0.0.3', transactions: 220 },
   { '@timestamp': '2021-12-11T00:00:00.000Z', node: 'Rest of Network', transactions: 2000 },
   { '@timestamp': '2021-12-10T00:00:00.000Z', node: '0.0.3', transactions: 320 },
   { '@timestamp': '2021-12-10T00:00:00.000Z', node: 'Rest of Network', transactions: 2000 },
   { '@timestamp': '2021-12-09T00:00:00.000Z', node: '0.0.3', transactions: 180 },
   { '@timestamp': '2021-12-09T00:00:00.000Z', node: 'Rest of Network', transactions: 2000 },
];

const dataMockArea: LineBarAreaData = [
   rawAreaData
      .reverse()
      .filter((d) => d.node === '0.0.3')
      .map((d) => [new Date(d['@timestamp']).getTime(), d.transactions]),
   rawAreaData
      .reverse()
      .filter((d) => d.node === '0.0.3')
      .map((d) => [new Date(d['@timestamp']).getTime(), d.transactions]),
   rawAreaData
      .reverse()
      .filter((d) => d.node === 'Rest of Network')
      .map((d) => [new Date(d['@timestamp']).getTime(), d.transactions]),
];

export const LineBarMockArea: LineBarAreaProps = {
   meta: {
      domainUnit: 'datetime',
      seriesId: ['0.0.3', '0.0.4','Rest of Network'],
      seriesInfo: {
         '0.0.3': {
            type: 'area',
            subType: "stacked",
            stackMode: "percentage",
            name: '0.0.3',
         },
         '0.0.4': {
            type: 'area',
            subType: "stacked",
            stackMode: "percentage",
            name: '0.0.4',
         },
         'Rest of Network': {
            type: 'area',
            subType: "stacked",
            stackMode: "percentage",
            name: 'Rest of Network',
         },
      },
      axes: [
         {
            position: 'bottom',
         },
         {
            position: 'left',
            displayUnit: 'percent',
            gridLines: true,
         },
      ],
   },
   data: dataMockArea,
};

export const LineBarMockArea2: LineBarAreaProps = {
   meta: {
      domainUnit: 'datetime',
      seriesId: ['0.0.3', '0.0.4','Rest of Network'],
      seriesInfo: {
         '0.0.3': {
            type: 'area',
            subType: "stacked",
            name: '0.0.3',
         },
         '0.0.4': {
            type: 'area',
            subType: "stacked",
            name: '0.0.4',
         },
         'Rest of Network': {
            type: 'area',
            subType: "stacked",
            name: 'Rest of Network',
         },
      },
      axes: [
         {
            position: 'bottom',
         },
         {
            position: 'left',
            displayUnit: 'number',
            gridLines: true,
         },
      ],
   },
   data: dataMockArea,
};

export const LineBarMockArea3: LineBarAreaProps = {
   meta: {
      domainUnit: 'datetime',
      seriesId: ['0.0.3', '0.0.4','Rest of Network'],
      seriesInfo: {
         '0.0.3': {
            type: 'area',
            name: '0.0.3',
         },
         '0.0.4': {
            type: 'area',
            name: '0.0.4',
         },
         'Rest of Network': {
            type: 'area',
            name: 'Rest of Network',
         },
      },
      axes: [
         {
            position: 'bottom',
         },
         {
            position: 'left',
            displayUnit: 'number',
            gridLines: true,
         },
      ],
   },
   data: dataMockArea,
};

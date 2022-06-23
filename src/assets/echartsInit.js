import * as echarts from 'echarts'
export default function echartsInit(ref,option){
    if(ref){
        const myChart = echarts.init(ref)
        myChart.setOption(option)
        window.addEventListener("resize", function() {
            myChart.resize()
        })
    }
}

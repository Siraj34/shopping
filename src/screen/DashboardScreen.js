import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import { selectData } from '../reducer/cartSlice'
import { useSelector } from 'react-redux'
import data from '../data'
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)

export default function DashboardScreen() {
  //const data = useSelector(selectData)

  const chartConfigs = {
    type: 'column2d',
    width: '350 ',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Products',
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'fusion',
      },

      data: data.products,
    },
  }

  return (
    <div className="h-screen  md:justify-center flex  md:items-center ">
      <div>
        <div
          className="  divide-y
         divide-slate-900 font-medium uppercase md:flex md:flex-col "
        >
          <div className="divide-y divide-slate-900 font-medium uppercase">
            <h1 className="uppercase">Dashboard Charts</h1>
          </div>
          <div className="  ">
            <ReactFC {...chartConfigs} />
          </div>
        </div>
      </div>
    </div>
  )
}

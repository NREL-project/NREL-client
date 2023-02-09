import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';

const options: Highcharts.Options = {
    title: {
        text: 'Fuel Economy'
    },
    series: [{
        type: 'line',
        data: [1, 2, 3]
    }],
    chart: {
        spacingTop: 60,
        height: 400,
        width: 200,
    }
}

function Arena(props: HighchartsReact.Props) {
const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
 
  return (
    <div className='flex justify-center'>
        <div className=''>
          <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef}
          {...props}
          />
        </div>
      <button className='place-self-end my-12 h-10 text-yellow-400 bg-[#141414] px-10
        py-2 shadow-md rounded-full font-bold hover:bg-red-500 hover:shadow-xl 
        active:scale-90 transition duration-150'>
        Compare
      </button>
    </div>
  )
}

export default Arena
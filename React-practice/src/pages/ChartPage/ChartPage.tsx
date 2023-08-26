import PageLayout from 'layout/common/PageLayout/PageLayout';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'types/chart';

const chartData: ChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      backgroundColor:'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      data: [1, 10, 2, 4, 9, 6, 7],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [2, 4, 1, 4, 7, 6, 9],
      borderColor: 'red',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [1, 2, 3, 9, 5, 6, 8],
    },
  ],
};

const ChartPage = () => {
  return (
    <PageLayout>
      <div>Chart 페이지</div>

      <Line data={chartData} />
    </PageLayout>
  );
};

export default ChartPage;

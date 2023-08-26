import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'types/chart';
import './ChartPage.css';

const initialData = [2, 4, 1, 4, 7, 6, 9];

const ChartPage = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: initialData, // 초기 데이터 설정
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(255, 99, 132)',
        data: initialData, // 초기 데이터 설정
        borderColor: 'red',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: 'rgb(75, 192, 192)',
        data: initialData, // 초기 데이터 설정
      },
    ],
  });

  // 5초마다 데이터를 랜덤으로 갱신하는 함수
  const updateData = () => {
    const newData = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 20),
    );
    setChartData(prevChartData => ({
      ...prevChartData,
      datasets: prevChartData.datasets.map((dataset: Number) => ({
        ...dataset,
        data: newData,
      })),
    }));
  };

  // 페이지가 렌더링될 때마다 5초마다 데이터를 업데이트하는 타이머를 설정
  useEffect(() => {
    const intervalId = setInterval(updateData, 5000);

    // 컴포넌트가 언마운트될 때 타이머 해제
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="chart-outer-box">
      <div className="chart-text-box">Chart 페이지</div>
      <Line data={chartData} />
    </div>
  );
};

export default ChartPage;

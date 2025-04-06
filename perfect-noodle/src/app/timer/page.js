'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function TimerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const noodleType = searchParams.get('type');
  
  // 设置默认时间 (2:45)
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(45);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(50); // 50% 进度
  
  // 获取泡面信息
  const getNoodleInfo = () => {
    // 根据noodleType返回相应的泡面信息
    // 这只是示例数据，你需要根据实际情况调整
    return {
      name: noodleType === 'nissin-cup' ? 'Nissin Cup Noodles' : '未知泡面',
      cookTime: { min: 2, sec: 45 }
    };
  };
  
  const noodleInfo = getNoodleInfo();
  
  // 计时器逻辑
  useEffect(() => {
    let interval = null;
    
    if (isRunning && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
        
        // 更新进度条
        const totalSeconds = minutes * 60 + seconds;
        const totalTime = noodleInfo.cookTime.min * 60 + noodleInfo.cookTime.sec;
        const newProgress = (1 - totalSeconds / totalTime) * 100;
        setProgress(newProgress);
        
      }, 1000);
    } else if (isRunning && minutes === 0 && seconds === 0) {
      // 计时结束
      setIsRunning(false);
      // 这里你可以添加通知或其他效果
    }
    
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, noodleInfo]);
  
  // 控制按钮功能
  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(noodleInfo.cookTime.min);
    setSeconds(noodleInfo.cookTime.sec);
    setProgress(0);
  };
  
  // 返回首页
  const goBack = () => {
    router.push('/');
  };
  
  return (
    <main className="relative mx-auto w-[600px] h-[800px] bg-white overflow-hidden">
      {/* 顶部装饰边框 */}
      <div className="w-full h-12 bg-amber-300 rounded-t-lg flex items-center px-4 border-2 border-[#5A3921]">
        <div className="w-4 h-4 rounded-full bg-red-400 mr-2"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></div>
        <div className="w-4 h-4 rounded-full bg-green-400"></div>
      </div>
      
      {/* 主内容区域 */}
      <div className="w-full h-[calc(100%-3rem)] border-2 border-t-0 border-[#5A3921] bg-[#FFFAED] flex flex-col p-6">
        
        {/* 顶部导航 */}
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center border-2 border-[#5A3921]"
          >
            <span className="text-[#5A3921]">←</span>
          </button>
          <h2 className="text-2xl text-center text-[#5A3921] font-bubblegum">
            {noodleInfo.name}
          </h2>
          <button className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center border-2 border-[#5A3921]">
            <span className="text-[#5A3921]">⚙️</span>
          </button>
        </div>
        
        {/* 分隔线 */}
        <div className="w-full flex justify-center my-4">
          <div className="border-t-4 border-dashed border-[#5A3921] w-full"></div>
        </div>
        
        {/* 计时器显示 */}
        <div className="flex justify-center my-6">
          <div className="text-7xl text-[#FF9500] font-bold border-2 border-[#5A3921] rounded-lg px-6 py-2">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
        </div>
        
        {/* 泡面动画 */}
        <div className="flex justify-center my-6">
          <div className="relative">
            <Image 
              src="/images/noodle-bowl.png" 
              alt="Noodle bowl"
              width={200}
              height={200}
              priority
            />
            {/* 这里可以添加蒸汽动画 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <Image 
                src="/images/steam.png" 
                alt="Steam"
                width={120}
                height={60}
                priority
              />
            </div>
          </div>
        </div>
        
        {/* 进度条 */}
        <div className="w-full bg-white rounded-full h-4 border-2 border-[#5A3921] my-6">
          <div 
            className="bg-[#F8A14F] h-full rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* 控制按钮 */}
        <div className="flex justify-center space-x-8 my-6">
          <button 
            onClick={startTimer}
            className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center border-2 border-[#5A3921]"
          >
            <span className="text-white text-2xl">▶</span>
          </button>
          <button 
            onClick={pauseTimer}
            className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center border-2 border-[#5A3921]"
          >
            <span className="text-[#5A3921] text-2xl">❚❚</span>
          </button>
          <button 
            onClick={resetTimer}
            className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center border-2 border-[#5A3921]"
          >
            <span className="text-white text-2xl">↻</span>
          </button>
        </div>
        
        {/* 分隔线 */}
        <div className="w-full flex justify-center mt-auto mb-4">
          <div className="border-t-4 border-dashed border-[#5A3921] w-full"></div>
        </div>
        
        {/* 底部提示 */}
        <p className="text-center text-[#5A3921] font-bubblegum text-xl">
          Wait patiently...
        </p>
        <p className="text-center text-[#FF9500] font-bubblegum mt-2">
          Perfect noodles coming soon! ✨
        </p>
      </div>
    </main>
  );
}
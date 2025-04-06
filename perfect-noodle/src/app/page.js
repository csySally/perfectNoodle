"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const noodleTypes = [
    {
      id: "nissin-cup",
      name: "Nissin Cup",
      image: "/images/pixel.png",
    },
    {
      id: "shin-ramyun",
      name: "Shin Ramyun",
      image: "/images/pixel-3.png",
    },
    { id: "indomie", name: "Indomie", image: "./images/pixel-2.png" },
    { id: "maruchan", name: "Maruchan", image: "./images/pixel-4.png" },
    {
      id: "samyang",
      name: "Samyang",
      image: "./images/pixel-5.png",
      width: 100,
      height: 100,
    },
    {
      id: "mama",
      name: "Mama",
      image: "./images/pixel-6.png",
    },
  ];

  const handleNoodleClick = (id) => {
    router.push(`/timer?type=${id}`);
  };

  return (
    <main className="relative mx-auto w-[600px] h-[800px] bg-white overflow-hidden">
      {/* 顶部装饰边框 */}
      <div className="w-full h-12 bg-amber-300 rounded-t-lg flex items-center px-4 border-2 border-brown-700">
        {/*         <div className="w-4 h-4 rounded-full bg-red-400 mr-2"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></div>
        <div className="w-4 h-4 rounded-full bg-green-400"></div> */}
      </div>

      {/* 主内容区域 */}
      <div className="w-full h-[calc(100%-3rem)] border-2 border-t-0 border-brown-700 bg-cream-50 flex flex-col p-6 bg-[#FFFAED]">
        {/* 标题 */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#FF9500] font-abril tracking-wider">
          Perfect Noodle
        </h1>
        <p className="text-xl text-center text-[#FF7676] mt-2 font-bubblegum">
          Perfect Noodle Every Time! 🍜
        </p>

        {/* 分隔线 */}
        <div className="w-full flex justify-center my-6">
          <div className="border-t-4 border-dashed border-[#5A3921] w-4/5"></div>
        </div>

        {/* 选择提示 */}
        <div className="flex items-center mb-4 pl-12">
          <span className="text-yellow-500 mr-2 transform">
            <Image
              src="/images/arrow.png"
              alt="Arrow"
              width={80}
              height={80}
              className="w-20 h-20 pt-5"
              priority
            />
          </span>
          <h2 className="text-2xl text-[#5A3921] font-bubblegum tracking-wide">
            Choose your noodle type today:
          </h2>
        </div>

        {/* 泡面选择网格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6 px-4">
          {noodleTypes.map((noodle) => (
            <div
              key={noodle.id}
              className="cursor-pointer hover:scale-105 transition-transform flex items-center justify-center"
              onClick={() => handleNoodleClick(noodle.id)}
            >
              <Image
                src={noodle.image}
                alt={noodle.name}
                width={noodle.width || 120}
                height={noodle.height || 120}
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>

        {/* 分隔线 */}
        <div className="w-full flex justify-center mt-6 mb-12">
          <div className="border-t-4 border-dashed border-[#5A3921] w-4/5"></div>
        </div>

        {/* 底部提示 */}
        <p className="text-center text-[#5A3921] font-bubblegum text-xl -mt-6">
          Click on a ramen to start timing!
        </p>
        <p className="text-center text-yellow-500 font-bubblegum mt-2 text-lg">
          Perfect noodles await! ✨
        </p>
      </div>
    </main>
  );
}

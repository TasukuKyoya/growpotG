// import { Button } from "@/components/ui/button"; //Buttonコンポーネントインポート
// import { ChevronLeft, ChevronRight } from "lucide-react"; //左右アイコンインポート

const Calendar = () => {
  //月の日数
  const daysInMonth = 30;
  //日付を配列を格納
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  console.log("days", days);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* 月の推移用エリア */}
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-bold">2025年4月</h2>
        <Button variant="outline">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* カレンダーの中身*/}
      <div className="grid grid-cols-7 gap-1">
        {/* 曜日の表示 */}
        {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}

        {/* 日付のマップ */}
        {days.map((day) => (
          <Button key={day} variant="outline" className="h-12 w-full relative">
            {day}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
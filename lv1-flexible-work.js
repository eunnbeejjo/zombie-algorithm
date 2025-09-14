function solution(schedules, timelogs, startday) {
    var answer = 0;
    
    schedules.forEach((schedule, scheduleIndex) => {
        const scheduleLogArr = timelogs[scheduleIndex];
        
// 전부 통과인지
        const result = scheduleLogArr.every((log, logIndex) => {
            let day = startday + logIndex;
            let tmpDay = day % 7;
            
//             주말 제외
            if (tmpDay === 6 || tmpDay === 0) return true;

//             실제 출근시간
            let realLog = log;

//             출근 통과시간(예정+10분)
            let realSchedule = schedule + 10;
            
//             시간처리
            if ((realSchedule % 100) >= 60) realSchedule += 40;

            return realSchedule >= realLog;
        });
        
        if (result) answer++;
    });
    
    return answer;
}
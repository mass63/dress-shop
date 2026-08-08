import { OpeningHour } from '../types';

export function getShopOpenStatus(hours: OpeningHour[]): { isOpen: boolean; text: string; nextTime: string } {
  const now = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = dayNames[now.getDay()];

  const todaySchedule = hours.find(h => h.day === currentDayName);

  if (!todaySchedule || todaySchedule.isClosed) {
    return {
      isOpen: false,
      text: "Closed Today",
      nextTime: "Opens Monday at 10:00 AM"
    };
  }

  // Helper to convert "10:00 AM" or "08:30 PM" to minutes from midnight
  const parseTimeToMinutes = (timeStr: string): number => {
    const parts = timeStr.trim().match(/^(\d+):(\d+)\s*(AM|PM)$/i);
    if (!parts) return 0;
    let hoursNum = parseInt(parts[1], 10);
    const mins = parseInt(parts[2], 10);
    const ampm = parts[3].toUpperCase();

    if (ampm === "PM" && hoursNum < 12) hoursNum += 12;
    if (ampm === "AM" && hoursNum === 12) hoursNum = 0;

    return hoursNum * 60 + mins;
  };

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = parseTimeToMinutes(todaySchedule.open);
  const closeMinutes = parseTimeToMinutes(todaySchedule.close);

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      text: "Open Now",
      nextTime: `Closes today at ${todaySchedule.close}`
    };
  } else if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      text: "Opening Soon",
      nextTime: `Opens today at ${todaySchedule.open}`
    };
  } else {
    return {
      isOpen: false,
      text: "Closed for the Day",
      nextTime: "Opens tomorrow at 10:00 AM"
    };
  }
}

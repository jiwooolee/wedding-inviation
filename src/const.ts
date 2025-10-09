import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-01-24 14:00", "Asia/Seoul")
export const HOLIDAYS = [1]

export const LOCATION = "지타워 컨벤션"
export const LOCATION_ADDRESS = "서울 구로구 디지털로26길 38"

export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

export const WEDDING_HALL_POSITION = [126.895386, 37.479914]

export const NMAP_PLACE_ID = 1090437805
export const KMAP_PLACE_ID = 197749949

export const BRIDE_FULLNAME = "이선영"
export const BRIDE_FIRSTNAME = "선영"
export const BRIDE_TITLE = "딸"
export const BRIDE_FATHER = "이동기"
export const BRIDE_MOTHER = "안명숙"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-9025-2884",
    account: "우리은행 0000000000000",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-0000-0000",
    account: "하나은행 00000000000",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-0000-0000",
    account: "하나은행 00000000000000",
  },
]

export const GROOM_FULLNAME = "이지우"
export const GROOM_FIRSTNAME = "지우"
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = "이  윤"
export const GROOM_MOTHER = "윤지수"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-5433-1101",
    account: "하나은행 254-910459-66607",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-0000-0000",
    account: "신한은행 000000000000",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-0000-0000",
    account: "국민은행 000000000000",
  },
]

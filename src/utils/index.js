import dayjs from "dayjs";
import carrier_zto_logo from "../assets/carrier_logo/zto.png";

export function formatDate(dateString) {
  return dayjs(dateString).format("YYYY-MM-DD, HH:mm");
}

// 生成 ID
export function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export const carrierLogoMap = {
  "ZTO - Zhongtong Kuaidi100": carrier_zto_logo,
  // others
};

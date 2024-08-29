"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const HomePage = () => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState("vi");

  useEffect(() => {
    const currentLocale = pathname.startsWith("/en") ? "en" : "vi";
    setSelectedLanguage(currentLocale);
  }, [pathname]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedLanguage(value);
    router.push(value === "en" ? "/en" : "/vi");
  };

  return (
    <div className="m-[10px]">
      <select className="border-[1px] border-black outline-none" value={selectedLanguage} onChange={handleChange}>
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
      </select>
      <h1 className="text-[24px]">{t("title")}</h1>
      <h1 className="text-[24px]">{t("description")}</h1>
    </div>
  );
};
export default HomePage;
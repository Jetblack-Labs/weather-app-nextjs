"use client";
// eslint-disable-next-line react/no-unescaped-entities

import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "@/components/CityPicker";

export default function Home() {
   return (
      <div className="text-6xl min-h-screen bg-gradient-to-br from-[#85a2c3] to-[#183B7E] p-10 flex flex-col justify-center items-center">
         <Card className="max-w-4xl mx-auto">
            <Text className="text-6xl font-bold text-center mb-10">
               Weather AI
            </Text>
            <Subtitle className="text-xl text-center">
               Powered by ChatGPT
            </Subtitle>

            <Divider className="mb-10 text-center" />
            <Card className="text-xl bg-gradient-to-br from-[#85a2c3] to-[#183B7E]">
               <CityPicker />
            </Card>
         </Card>
      </div>
   );
}

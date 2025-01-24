"use client";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const achievementsList = [
  {
    metric: "Projects",
    value: 100, // Valor numérico para evitar erros
    postfix: "+",
  },
];

declare module "react-animated-numbers" {
  export interface AnimatedNumbersProps {
    includeComma?: boolean;
    animateToNumber: number;
    locale?: string;
    className?: string;
    transitions?: (
      value: number,
      index: number
    ) => {
      mass?: number;
      friction?: number;
      tensions?: number;
    };
  }
  const AnimatedNumbers: React.FC<AnimatedNumbersProps>;
}

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement) => (
          <div
            key={achievement.metric} // Usando `metric` como chave única
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              <AnimatedNumbers
                includeComma={true}
                animateToNumber={achievement.value}
                locale="en-US"
                className="text-white text-4xl font-bold"
                transitions={(index: number) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
              />

              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;

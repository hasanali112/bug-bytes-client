"use client";

import { Card as NextUiCard, CardFooter, CardHeader } from "@heroui/card";
import { Button, Image } from "@heroui/react";

const Card = () => {
  return (
    <NextUiCard isFooterBlurred className="h-[300px] w-full">
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <p className="absolute -top-0 right-1 rounded-full bg-black px-2 text-tiny uppercase text-white/90"></p>
        <h4 className="mt-2 rounded bg-black/30 p-1 text-2xl font-medium text-white"></h4>
      </CardHeader>

      <Image
        removeWrapper
        alt="Card example background"
        className="scale-120 z-0 h-full w-full -translate-y-6 object-cover"
        src="https://heroui.com/images/hero-card.jpeg"
      />
      <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
        <div>
          <p className="text-tiny text-black"></p>
          <p className="text-tiny text-black"></p>
        </div>

        <Button
          className="bg-black text-tiny text-white"
          radius="full"
          size="sm"
        >
          Details
        </Button>
      </CardFooter>
    </NextUiCard>
  );
};

export default Card;

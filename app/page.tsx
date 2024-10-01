import Image from "next/image"
import { db } from "./_lib/prisma"
import Link from "next/link"
import { quickSearchOptions } from "./_constants/search"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getConfirmedBookings } from "./_data/get-confirmed-bookings"

import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import BarbershopItem from "./_components/barbershop-item"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./_components/ui/carousel"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  const confirmedBookings = await getConfirmedBookings()

  return (
    <div>
      <Header />

      <div className="bg-[url('/background.png')] lg:bg-cover lg:bg-[center_top_-7rem] lg:py-14">
        <div className="w-full p-5 lg:m-auto lg:flex lg:w-[1146px] lg:max-w-[96%] lg:gap-32 lg:p-0">
          <div className="md:w-[10%]: lg:w-[35%] lg:flex-1">
            <h2 className="text-xl font-bold lg:text-2xl">
              Olá, {session?.user ? session.user.name : "bem vindo"}!
            </h2>
            <p>
              <span className="capitalize">
                {format(new Date(), "EEEE, dd", { locale: ptBR })}
              </span>
              <span>&nbsp;de&nbsp;</span>
              <span className="capitalize">
                {format(new Date(), "MMMM", { locale: ptBR })}
              </span>
            </p>

            <div className="mt-6 lg:mt-10">
              <Search />
            </div>

            <div className="mt-6 flex gap-3 overflow-y-auto lg:hidden [&::-webkit-scrollbar]:hidden">
              {quickSearchOptions.map((option) => (
                <Button
                  className="gap-2"
                  variant="secondary"
                  key={option.title}
                  asChild
                >
                  <Link href={`/barbershops?service=${option.title}`}>
                    <Image
                      src={option.imageUrl}
                      width={16}
                      height={16}
                      alt={option.title}
                    />
                    {option.title}
                  </Link>
                </Button>
              ))}
            </div>

            <div className="relative mt-6 block h-[150px] w-full lg:hidden">
              <Image
                alt="Agende nos melhores com FSW Barber"
                src="/banner-01.png"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <div className="">
              {confirmedBookings.length > 0 && (
                <>
                  <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 lg:mt-10">
                    Agendamentos
                  </h2>

                  <Carousel opts={{ align: "start" }}>
                    <CarouselContent>
                      {confirmedBookings.map((booking) => (
                        <CarouselItem key={booking.id}>
                          <BookingItem
                            booking={JSON.parse(JSON.stringify(booking))}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-md hidden h-10 w-10 disabled:opacity-0 lg:left-[-1.4rem] lg:flex" />
                    <CarouselNext className="text-md hidden h-10 w-10 disabled:opacity-0 lg:right-[-1.4rem] lg:flex" />
                  </Carousel>
                </>
              )}
            </div>
          </div>

          <div className="w-full lg:w-[596px]">
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 lg:mb-6 lg:mt-0 lg:text-sm">
              Recomendados
            </h2>

            <Carousel opts={{ align: "start" }}>
              <CarouselContent>
                {barbershops.map((barbershop) => (
                  <CarouselItem
                    key={barbershop.id}
                    className="basis-1/2 md:basis-1/3 lg:basis-2/5"
                  >
                    <BarbershopItem barbershop={barbershop} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-md hidden h-12 w-12 disabled:opacity-0 lg:left-[-1.4rem] lg:flex" />
              <CarouselNext className="text-md hidden h-12 w-12 disabled:opacity-0 lg:right-[-1.4rem] lg:flex" />
            </Carousel>
          </div>
        </div>
      </div>

      <div className="p-5 lg:m-auto lg:w-[1146px] lg:max-w-[96%] lg:p-0 lg:py-8">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 lg:mt-0 lg:text-sm">
          Populares
        </h2>

        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            {popularBarbershops.map((barbershop) => (
              <CarouselItem
                key={barbershop.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <BarbershopItem barbershop={barbershop} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-md hidden h-12 w-12 disabled:opacity-0 lg:left-[-1.4rem] lg:flex" />
          <CarouselNext className="text-md hidden h-12 w-12 disabled:opacity-0 lg:right-[-1.4rem] lg:flex" />
        </Carousel>
      </div>
    </div>
  )
}

export default Home

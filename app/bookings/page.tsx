import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"
import { notFound } from "next/navigation"
import { getConfirmedBookings } from "../_data/get-confirmed-bookings"
import { getConcludedBookings } from "../_data/get-concluded-bookings"

import BookingItem from "../_components/booking-item"
import Header from "../_components/header"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return notFound()
  }
  const confirmedBookings = await getConfirmedBookings()
  const concludedBookings = await getConcludedBookings()

  return (
    <>
      <Header />
      <div className="space-y-3 p-5 lg:m-auto lg:flex lg:w-[1146px] lg:max-w-[94%] lg:gap-10 lg:p-7 lg:px-0">
        <div className="lg:w-[50%]">
          <h1 className="text-xl font-bold">Agendamentos</h1>
          {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
            <p className="text-gray-400">Você não tem agendamentos.</p>
          )}

          {confirmedBookings.length > 0 && (
            <>
              <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                Confirmados
              </h2>
              <div className="space-y-2">
                {confirmedBookings.map((booking) => (
                  <BookingItem
                    key={booking.id}
                    booking={JSON.parse(JSON.stringify(booking))}
                  />
                ))}
              </div>
            </>
          )}

          {concludedBookings.length > 0 && (
            <>
              <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                Finalizados
              </h2>
              <div className="space-y-2">
                {concludedBookings.map((booking) => (
                  <BookingItem
                    key={booking.id}
                    booking={JSON.parse(JSON.stringify(booking))}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Bookings
